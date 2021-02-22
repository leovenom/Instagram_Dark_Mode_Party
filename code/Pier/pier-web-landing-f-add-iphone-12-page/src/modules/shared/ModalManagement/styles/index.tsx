import styled, { css } from "styled-components";

import Modal from "ui/Modal";
import breakpoints from "ui/theme/breakpoints";
import { fadeInRightSmooth } from "ui/theme/animations";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  box-sizing: border-box;

  ${breakpoints.tablet} {
    justify-content: center;
  }
`;

const DefaultModal = styled(Modal)`
  height: auto;
  ${breakpoints.tablet} {
    max-width: 700px;
    margin: 10px auto;
  }
`;

const AnimationContent = styled.div<{
  animate?: boolean;
  hideCloseButton?: boolean;
}>`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  max-width: 600px;
  height: 100%;

  ${({ hideCloseButton }) =>
    !hideCloseButton &&
    css`
      margin-top: 52px;
    `}
  ${breakpoints.tablet} {
    padding: 0;
  }

  ${({ animate }) =>
    animate &&
    css`
      opacity: 0;
      animation: ${fadeInRightSmooth} 0.4s forwards;
      animation-delay: 0.1s;
    `}
`;

export { Container, AnimationContent, DefaultModal };
