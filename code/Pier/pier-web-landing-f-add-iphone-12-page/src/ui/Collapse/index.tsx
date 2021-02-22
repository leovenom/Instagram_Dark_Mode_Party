import {
  useState,
  useCallback,
  useEffect,
  createContext,
  useMemo,
  useContext,
  KeyboardEvent,
  ReactNode,
} from "react";

import breakpoints from "../theme/breakpoints";
import styled, { css } from "styled-components";

import Icon from "../Icon";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

interface CollapseProps extends Props {
  mb?: number;
  expanded?: boolean;
  trackEvent?: () => void;
}
interface CollapseTitleProps extends Props {
  thinner?: boolean;
  expanded?: boolean;
  changeCollapseState?: () => void;
}

interface CollapseContentProps extends Props {
  expanded?: boolean;
}

const Container = styled.div<{ mb?: number; expanded: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ mb }) =>
    typeof mb === "number" &&
    css`
      margin-bottom: ${mb}px;
    `}

  color: ${({ theme }) => theme.colors.text};

  ${({ expanded, theme }) =>
    !expanded &&
    css`
      &:hover {
        & > section {
          background: ${theme.colors.black5};
        }
      }
    `}
`;

const HoverContainer = styled.section`
  margin: 0 -24px;
  padding: 0 24px;

  transition: background 250ms ease-out;
`;

const Content = styled.div<{ thinner?: boolean; expanded: boolean }>`
  transition: all 0.25s;
  padding: ${({ thinner, expanded }) => {
    if (thinner) return "16px 0";
    return expanded ? "40px 0 24px" : "40px 0";
  }};
  margin-right: 4px;
  cursor: pointer;

  font-size: 16px;
  line-height: 24px;

  ${breakpoints.tablet} {
    font-size: 18px;
    line-height: 24px;
  }

  display: flex;
  justify-content: space-between;

  &:focus {
    /*
    >> TODO
      implementar polyfill
    https://github.com/WICG/focus-visible/blob/master/src/focus-visible.js
     */
    outline: 0;
  }

  svg {
    margin-top: 6px;
    margin-left: 4px;
    min-width: 16px;
  }
`;

const ExpandedContent = styled.div<{ open: boolean }>`
  font-weight: normal;

  font-size: 14px;
  line-height: 24px;

  overflow: hidden;
  max-height: 0;
  color: ${({ theme }) => theme.colors.primary};

  ${({ open }) =>
    open &&
    `
    max-height: 500px;
    padding-bottom: 16px;

    ${breakpoints.desktop} {
      max-height: 250px;
    }
  `}

  transition: all 300ms ease;
`;

const IconHolder = styled.div<{ expanded?: boolean }>`
  display: flex;
  align-items: center;

  svg {
    margin: 0;
    transition: transform 300ms ease;

    ${({ expanded }) =>
      expanded &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

const CollapseContext = createContext<null | {
  onToggle: () => void;
  expanded: boolean;
}>(null);

const Collapse = ({
  mb,
  children,
  expanded: opened,
  trackEvent,
}: CollapseProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  const value = useMemo(() => ({ expanded, onToggle }), [expanded]);

  useEffect(() => {
    if (expanded && trackEvent) trackEvent();
  }, [expanded]);

  return (
    <CollapseContext.Provider value={value}>
      <Container mb={mb} expanded={opened || expanded}>
        <HoverContainer>{children}</HoverContainer>
      </Container>
    </CollapseContext.Provider>
  );
};

const useCollapseContext = () => {
  const context = useContext(CollapseContext);
  if (!context) {
    throw new Error(
      `Collapse compound components cannot be rendered outside the Collapse component`
    );
  }
  return context;
};

const CollapseContent = ({ expanded, children }: CollapseContentProps) => {
  const { expanded: expandedContext } = useCollapseContext();

  return (
    <ExpandedContent
      aria-expanded={expanded || expandedContext}
      open={expanded || expandedContext}
    >
      {children}
    </ExpandedContent>
  );
};

const CollapseTitle = ({
  thinner,
  expanded,
  changeCollapseState,
  children,
}: CollapseTitleProps) => {
  const { onToggle, expanded: expandedContext } = useCollapseContext();

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      if (changeCollapseState) changeCollapseState();
      else onToggle();
    }
  };

  return (
    <Content
      role="button"
      onKeyPress={handleKeyPress}
      tabIndex={0}
      onClick={changeCollapseState || onToggle}
      thinner={thinner}
      expanded={expanded || expandedContext}
    >
      {children}
      <IconHolder expanded={expanded || expandedContext}>
        <Icon name="chevronDown" fill="primary" width={13} height={9} />
      </IconHolder>
    </Content>
  );
};

Collapse.Title = CollapseTitle;
Collapse.Content = CollapseContent;

export default Collapse;
