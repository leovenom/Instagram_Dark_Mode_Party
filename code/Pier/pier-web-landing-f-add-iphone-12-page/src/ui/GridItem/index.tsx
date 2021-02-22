import * as React from "react";
import styled, { css } from "styled-components";
import colors from "../theme/colors";
import breakpoints from "../theme/breakpoints";

interface Props {
  m?: 1 | 2;
  t?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  d?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gridContainer?: boolean;
  bg?: keyof typeof colors;
  mb?: number[] | number;
  maxWidth?: number;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  alignItems?: "center" | "start" | "end" | "stretch";
}

export const StyledGridItem = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`};

  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};

  background: ${({ bg, theme }) => (bg ? theme.colors[bg] : "initial")};
  grid-column-end: span ${({ m }) => m};

  ${breakpoints.tablet} {
    grid-column-end: span ${({ t }) => t};
  }

  ${breakpoints.desktop} {
    grid-column-end: span ${({ d }) => d};
  }


  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}

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

  ${({ gridContainer }) =>
    gridContainer &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 16px;
      width: 100%;

      ${breakpoints.tablet} {
        grid-template-columns: repeat(8, 1fr);
        grid-column-gap: 24px;
      }

      ${breakpoints.desktop} {
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 24px;
      }

      max-width: 1224px;
    `}
`;

const GridItem: React.FC<Props> = ({
  m = 2,
  t = 8,
  d = 12,
  gridContainer,
  children,
  bg,
  mb,
  maxWidth,
  justifyContent,
  alignItems,
}): JSX.Element => {
  return (
    <StyledGridItem
      m={m}
      t={t}
      d={d}
      gridContainer={gridContainer}
      bg={bg}
      mb={mb}
      maxWidth={maxWidth}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledGridItem>
  );
};
export default GridItem;
