import { css } from "styled-components";

export const styles = {
  formElementFocus: css`
    transition: box-shadow 0.1s;
    &:focus {
      outline: 0;
      color: ${({ theme }) => theme.colors.text};
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    }
  `,
  rippleEffect: css`
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: ${({ theme }) =>
        `radial-gradient(circle, ${theme.colors.black} 10%, transparent 10.01%)`};
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform 0.4s, opacity 1s;
    }

    &:active:after {
      transform: scale(0, 0);
      opacity: 0.2;
      transition: 0s;
    }
  `,
};

export default styles;
