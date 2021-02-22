import { useEffect, useState } from "react";
import * as React from "react";
import styled, { css } from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import Button from "ui/Button";

import scrollToElementById from "helpers/scrollToElementById";
import useScrollSpy from "hooks/useScrollSpy";

const FloatingContainer = styled.div<{
  show?: boolean;
  excludeDesktop?: boolean;
  rounded?: boolean;
  share?: boolean;
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  width: 100%;
  padding: 16px 24px;
  z-index: 10;
  box-sizing: border-box;

  ${({ share }) =>
    share
      ? css`
          transform: translate(0, 390px);
        `
      : css`
          transform: translate(0, 100px);
        `}
  transition: transform 250ms ease-in-out;

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 10px 10px 0 0;
    `}

  ${({ show }) =>
    show &&
    css`
      transform: translate(0, 0);
    `}

  ${({ excludeDesktop }) =>
    excludeDesktop &&
    css`
      ${breakpoints.desktop} {
        display: none;
      }
    `}
`;

interface Props {
  show: boolean;
  excludeDesktop?: boolean;
  rounded?: boolean;
  share?: boolean;
  children: React.ReactNode;
}

function BottomFloatingContainer({ children, ...props }: Props): JSX.Element {
  useEffect(() => {
    if (props.share && props.show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [props.show, props.share]);

  return <FloatingContainer {...props}>{children}</FloatingContainer>;
}

export default BottomFloatingContainer;

interface CTAProps {
  buttonText: string;
  onClick?: () => any;
  target?: string;
  linkTo?: string;
  spyParams?: {
    topSelector?: string;
    topOffset?: number;
    bottomSelector?: string;
    bottomOffset?: number;
  };
}

export function BottomFloatingCallToAction({
  buttonText,
  onClick,
  spyParams,
  target,
  linkTo,
}: CTAProps): JSX.Element {
  const [show, setShow] = useState<boolean>(false);

  const spyFn = useScrollSpy({
    ...spyParams,
    bottomSelector: spyParams?.bottomSelector
      ? spyParams.bottomSelector
      : "#page-footer",
    bottomOffset: spyParams?.bottomOffset ? spyParams.bottomOffset : -50,
    elementHasEffect: show,
    toggleFn: setShow,
  });

  function getLink(): string | undefined {
    if (target) return undefined;
    return linkTo;
  }

  function handleClick() {
    if (onClick) onClick();
    if (target) return scrollToElementById(target.replace(/#/, ""));

    return null;
  }

  useEffect(() => {
    document.addEventListener("scroll", spyFn);
    document.addEventListener("DOMContentLoaded", spyFn);

    return () => {
      document.removeEventListener("scroll", spyFn);
      document.removeEventListener("DOMContentLoaded", spyFn);
    };
  }, [spyFn]);

  return (
    <BottomFloatingContainer show={show} excludeDesktop>
      <Button
        asLink
        href={getLink()}
        variant="secondary"
        size="small"
        fullWidth
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </BottomFloatingContainer>
  );
}
