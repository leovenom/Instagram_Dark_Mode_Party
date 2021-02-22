import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1; }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -30%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInRightSmooth = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-5%, 0, 0);
  }


  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInLeftSmooth = keyframes`
  from {
    opacity: 0;
    transform: translate3d(5%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
