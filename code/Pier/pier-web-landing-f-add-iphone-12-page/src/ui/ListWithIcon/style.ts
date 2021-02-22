import styled, { css } from "styled-components";
import breakpoints from "ui/theme/breakpoints";

export const ItensList = styled.ul<{ isFullWidth?: boolean }>`
  padding: 0;
  list-style-type: none;
  margin: 0 auto 32px auto;

  ${breakpoints.desktop} {
    ${({ isFullWidth }) => (isFullWidth ? "width: 100%" : "width: 800px;")}
  }
`;
