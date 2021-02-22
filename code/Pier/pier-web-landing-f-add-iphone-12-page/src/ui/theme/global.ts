import { createGlobalStyle, css } from "styled-components";

import { font } from "./typography";
import colors from "../theme/colors";

export const bodyStyles = css`
  font-family: ${font.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    font-family: ${font.primary};
    color: ${colors.text};
  }

  a {
    text-decoration: none;
  }

  overflow: auto;

  &.ReactModal__Body--open {
    overflow: hidden;
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    ${bodyStyles}
    margin: 0;
    overflow-x: hidden;
  }
`;
