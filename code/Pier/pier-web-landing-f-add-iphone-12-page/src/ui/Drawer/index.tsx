import { useRef, useEffect } from "react";
import * as React from "react";

import breakpoints from "ui/theme/breakpoints";
import Icon from "ui/Icon";
import { fadeIn, fadeInLeft, fadeInDown } from "../theme/animations";
import styled from "styled-components";

const ESC_KEY = 27;
interface Props {
  isOpen: boolean;
  hide: () => void;
  contentLabel: string;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  overflow: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black70};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  animation: ${fadeIn} 0.2s linear;
`;

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  flex: 1;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  animation: ${fadeInDown} 0.2s linear;

  > svg {
    position: absolute;
    right: 40px;
    top: 40px;
    cursor: pointer;
  }

  ${breakpoints.desktop} {
    width: 476px;
    animation: ${fadeInLeft} 0.2s linear;
  }
`;

const Content = styled.div`
  padding-top: 72px;
`;

const Drawer: React.FC<Props> = ({
  isOpen,
  hide,
  children,
  contentLabel,
}): JSX.Element => {
  const refContainer = useRef(null);
  const refWrapper = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    if (refWrapper.current) refWrapper.current.focus();
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    event.stopPropagation();

    if (event.keyCode === ESC_KEY) hide();
  };

  const closeModalOnClickOutside = (event: React.MouseEvent): void => {
    if (refContainer && !refContainer.current.contains(event.target)) hide();
  };

  return isOpen ? (
    <Wrapper
      onKeyDown={handleKeyDown}
      onClick={closeModalOnClickOutside}
      ref={refWrapper}
      tabIndex={-1}
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <Container ref={refContainer} role="dialog" aria-label={contentLabel}>
        <Icon name="close" stroke={8} fill="text" onClick={hide} size={16} />
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  ) : null;
};

export default Drawer;
