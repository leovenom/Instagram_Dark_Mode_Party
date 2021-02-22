import { useRef, useEffect } from "react";
import * as React from "react";
import styled, { css } from "styled-components";
import ReactDOM from "react-dom";

import breakpoints from "../theme/breakpoints";
import Icon from "../Icon";
import { fadeIn, fadeInDown, fadeInUp } from "../theme/animations";
import theme from "../theme";
import Button from "../Button";
import { toggleScroll } from "./utils";

const ESC_KEY = 27;

interface Props {
  isOpen: boolean;
  hide: () => void;
  contentLabel: string;
  title?: string;
  onConfirm?: () => void;
  buttonText?: string;
  hideCloseButton?: boolean;
  mobileFullScreen?: boolean;
  hideOnMobile?: boolean;
  width?: number;
  dataTracking?: string;
  noTitleBorder?: boolean;
  mobileFixedOnBotttom?: boolean;
}

const wrapperStyle = css`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  min-width: 100%;
  height: 100%;
  background-color: ${theme.colors.black70};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  animation: ${fadeIn} 0.2s linear;

  :focus,
  :active {
    outline: 0;
  }
`;

const Wrapper = styled.div<{ hideOnMobile?: boolean }>`
  ${({ hideOnMobile }) => {
    return hideOnMobile
      ? css`
          display: none;

          ${breakpoints.desktop} {
            ${wrapperStyle}
          }
        `
      : wrapperStyle;
  }}
`;

const Container = styled.div<{
  mobileFullScreen?: boolean;
  mobileFixedOnBotttom?: boolean;
  width?: number;
}>`
  width: calc(100vw - 24px);
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  border-radius: 2px;
  animation: ${fadeInDown} 0.2s linear;

  ${({ mobileFullScreen }) =>
    mobileFullScreen &&
    css`
      margin: 0;
      height: 100%;
      width: 100%;
      ${breakpoints.desktop} {
        margin: 30px 0;
        height: calc(100% - 60px);
        max-height: 720px;
      }
    `}


    ${({ mobileFixedOnBotttom }) =>
      mobileFixedOnBotttom &&
      css`
        position: fixed;
        bottom: 0;
        margin: 0;
        border-radius: 10px 10px 0 0;
        width: 100%;
        animation: ${fadeInUp} 0.2s linear;

        ${breakpoints.desktop} {
          position: relative;
          bottom: auto;
          margin: 24px 0;
          border-radius: 2px;
          animation: ${fadeInDown} 0.2s linear;
        }
      `}

  ${breakpoints.desktop} {
    ${(props) =>
      props.width
        ? `
        width: ${props.width}px;
      `
        : `
        max-width: 420px;
      `}
  }

  background-color: ${({ theme }) => theme.colors.white};

`;

const Title = styled.div<{ hasTitleBorder?: boolean }>`
  padding: 20px;

  display: flex;
  justify-content: space-between;

  svg {
    z-index: 1;
    margin-left: 8px;
    cursor: pointer;
  }
`;

const TitleText = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #322f42;
  line-height: 24px;
`;

const Footer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div<{ mobileFullScreen?: boolean }>`
  ${({ mobileFullScreen }) =>
    mobileFullScreen &&
    css`
      overflow: auto;
    `}
  padding: 20px;
`;

const Modal: React.FC<Props> = ({
  isOpen,
  hide,
  children,
  contentLabel,
  title,
  onConfirm,
  buttonText,
  hideCloseButton,
  hideOnMobile,
  mobileFullScreen,
  width,
  dataTracking,
  noTitleBorder,
  mobileFixedOnBotttom,
}): JSX.Element => {
  const refContainer = useRef(null);
  const refWrapper = useRef(null);

  useEffect(() => {
    if (isOpen) {
      toggleScroll({ shouldHide: true });
    } else {
      toggleScroll({ shouldHide: false });
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

  return isOpen
    ? ReactDOM.createPortal(
        <Wrapper
          hideOnMobile={hideOnMobile}
          onKeyDown={handleKeyDown}
          onClick={closeModalOnClickOutside}
          ref={refWrapper}
          tabIndex={-1}
          aria-modal="true"
          aria-hidden={!isOpen}
          data-tracking={dataTracking}
          data-testid="default-layout-screen"
        >
          <Container
            width={width}
            ref={refContainer}
            role="dialog"
            aria-label={contentLabel}
            mobileFullScreen={mobileFullScreen}
            mobileFixedOnBotttom={mobileFixedOnBotttom}
          >
            {title && (
              <Title
                hasTitleBorder={
                  typeof noTitleBorder === "boolean" ? !noTitleBorder : true
                }
              >
                <TitleText>{title}</TitleText>
                {!hideCloseButton && (
                  <Icon
                    name="close"
                    fill="primary"
                    stroke={12}
                    size={18}
                    onClick={hide}
                  />
                )}
              </Title>
            )}

            <Content mobileFullScreen={mobileFullScreen}>{children}</Content>
            {buttonText && (
              <Footer>
                <Button size="small" onClick={onConfirm} variant="plainText">
                  {buttonText}
                </Button>
              </Footer>
            )}
          </Container>
        </Wrapper>,
        document.body
      )
    : null;
};

export default Modal;
