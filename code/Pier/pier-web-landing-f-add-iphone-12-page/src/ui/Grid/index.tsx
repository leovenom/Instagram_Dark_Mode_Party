import { ReactNode } from "react";
import styled from "styled-components";

import breakpoints from "../theme/breakpoints";

interface Props {
  mb?: number[] | number;
  children: ReactNode;
  maxWidth?: number;
}

export const StyledGrid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  box-sizing: border-box;
  width: 100%;
  ${breakpoints.tablet} {
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 24px;
  }

  ${breakpoints.desktop} {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 24px;
  }

  max-width: ${({ theme, maxWidth }) =>
    maxWidth || theme.spacings.GRID_MAX_WIDTH}px;

  ${({ mb }) => {
    if (mb && mb instanceof Array)
      return `
            margin-bottom: ${mb[0]}px;

            ${breakpoints.tablet}{
              margin-bottom: ${mb[1]}px;
            }

            ${breakpoints.desktop}{
              margin-bottom: ${mb[2]}px;
            }
        `;
    if (mb) {
      return `
            margin-bottom: ${mb}px;
          `;
    }
    return null;
  }}
`;

const Grid = ({ children, mb, maxWidth }: Props) => (
  <StyledGrid mb={mb} maxWidth={maxWidth}>
    {children}
  </StyledGrid>
);

export default Grid;
