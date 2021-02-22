import { useRef, useEffect } from "react";
import * as React from "react";

import Icon from "../Icon";
import { fadeIn } from "../theme/animations";
import { toggleScroll } from "./utils";

import styled from "styled-components";

const ESC_KEY = 27;

interface Props {
  isOpen: boolean;
  hide: () => void;
  contentLabel: string;
  blockScroll?: boolean;
  hideCloseButton?: boolean;
}

const Container = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%; /* Fallback for browsers that do not support Custom Properties */
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100); // To fixing vh recalc webkit problems;
  background-color: ${({ theme }) => theme.colors.white};

  animation: ${fadeIn} 0.2s linear;
`;

const Row = styled.div`
  background: white;
  z-index: 1;
  cursor: pointer;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    padding: 16px;
  }
`;

const Modal: React.FC<Props> = ({
  isOpen,
  hide,
  children,
  contentLabel,
  blockScroll,
  hideCloseButton,
  ...props
}): JSX.Element => {
  const refContainer = useRef(null);

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    event.stopPropagation();

    if (event.keyCode === ESC_KEY) hide();
  };

  useEffect(() => {
    if (isOpen && blockScroll) {
      toggleScroll({ shouldHide: true });

      if (refContainer.current) refContainer.current.focus();
    } else {
      toggleScroll({ shouldHide: false });
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return isOpen ? (
    <Container
      role="dialog"
      ref={refContainer}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      aria-label={contentLabel}
      aria-modal="true"
      aria-hidden={!isOpen}
      data-testid="full-screen-layout"
      {...props}
    >
      {!hideCloseButton && (
        <Row>
          <Icon
            testId="close-modal"
            name="close"
            fill="primary"
            onClick={hide}
            size={20}
            stroke={8}
          />
        </Row>
      )}
      {children}
    </Container>
  ) : null;
};

export default Modal;
