import styled, { css } from "styled-components";

import breakpoints from "../theme/breakpoints";

export const HEADER_HEIGHT = 80;

export const NavBar = styled.nav<{ transparent?: boolean; fixed?: boolean }>`
  display: flex;
  height: ${HEADER_HEIGHT}px;
  box-sizing: border-box;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  position: relative;
  z-index: 2;
  transition: all 0.2s ease-in-out;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  ${breakpoints.desktop} {
    position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
  }

  ${({ transparent }) =>
    transparent &&
    css`
      box-shadow: none;
      background: unset;
    `}
`;

export const Divider = styled.div<{ full?: boolean; large?: boolean }>`
  ${({ full }) =>
    full
      ? css`
          margin: 0;
        `
      : css`
          margin: 0 24px;
        `}

  ${({ large, theme }) =>
    large
      ? css`
          border-top: 8px solid ${theme.colors.gray200};
          margin: 48px 0 16px;
        `
      : css`
          border-top: 1px solid ${theme.colors.gray400};
        `};
`;

export const PierLogo = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 100px;
  right: 100px;
  text-align: center;

  ${breakpoints.desktop} {
    left: 45%;
    right: 45%;
  }
`;
