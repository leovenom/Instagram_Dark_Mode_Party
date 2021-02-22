import {
  Children,
  isValidElement,
  cloneElement,
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
  ReactNode,
} from "react";

import { useRouter } from "next/router";
import styled, { css } from "styled-components";

interface Props {
  children: ReactNode;
  customClick?: () => void;
  isActive?: boolean;
  itemIndex?: number;
  defaultActive?: boolean;
  route?: string;
}

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const TabItemContainer = styled.div<{ isActive?: boolean }>`
  outline: 0;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 22px;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.colors.black10};

  :hover {
    background: ${({ theme }) => theme.colors.black5};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;
      color: ${({ theme }) => theme.colors.secondary600};
      border-bottom: 4px solid ${({ theme }) => theme.colors.secondary600};
      :focus,
      :active,
      :hover {
        border-bottom: 4px solid ${({ theme }) => theme.colors.secondary600};
      }
    `}
`;

const TabContext = createContext<null | {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  activeTab: number;
}>(null);

const Tabs = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const value = useMemo(() => ({ activeTab, setActiveTab }), [activeTab]);

  return (
    <TabContext.Provider value={value}>
      <Container>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              itemIndex: index,
              isActive: index === activeTab,
            });
          }
        })}
      </Container>
    </TabContext.Provider>
  );
};

const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error(
      `Tab compound components cannot be rendered outside the Collapse component`
    );
  }
  return context;
};

const TabItem = ({
  children,
  isActive,
  itemIndex,
  defaultActive,
  route,
  customClick,
}: Props) => {
  const { setActiveTab } = useTabContext();
  const router = useRouter();
  useEffect(() => {
    if (defaultActive) {
      setActiveTab(itemIndex);
    }
  }, [defaultActive]);

  const handleClick = () => {
    setActiveTab(itemIndex);
    if (route) {
      router.push(route);
    }

    if (customClick) {
      customClick();
    }
  };

  return (
    <TabItemContainer
      role="tab"
      tabIndex={0}
      onClick={handleClick}
      isActive={isActive}
    >
      {children}
    </TabItemContainer>
  );
};

Tabs.Item = TabItem;

export default Tabs;
