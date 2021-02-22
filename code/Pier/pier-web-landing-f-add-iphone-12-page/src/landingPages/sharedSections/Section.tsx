import styled, { css } from "styled-components";

import breakpoints from "ui/theme/breakpoints";

import colors from "ui/theme/colors";

const Section = styled.section<{
  bg?: keyof typeof colors;
  py?: number[] | number;
  pb?: number[] | number;
  pt?: number[] | number;
}>`
  display: flex;
  justify-content: center;
 
  ${({ bg, theme }) => css`
    background: ${bg ? theme.colors[bg] : theme.colors.white};
    padding-left: 24px;
    padding-right: 24px;

    ${breakpoints.desktop} {
      padding-left: 0;
      padding-right: 0;
      margin: 0 24px;
    }
  `}

  ${({ pb }) => {
    if (pb && pb instanceof Array) {
      return `
          padding-bottom: ${pb[0]}px;

          ${breakpoints.tablet}{
            padding-bottom: ${pb[1]}px;
          }

          ${breakpoints.desktop}{
            padding-bottom: ${pb[2]}px;
          }
      `;
    }
    if (pb) {
      return `
          padding-bottom: ${pb}px;
        `;
    }
    return null;
  }}

  ${({ pt }) => {
    if (pt && pt instanceof Array) {
      return `
          padding-top: ${pt[0]}px;

          ${breakpoints.tablet}{
            padding-top: ${pt[1]}px;
          }

          ${breakpoints.desktop}{
            padding-top: ${pt[2]}px;
          }
      `;
    }
    if (pt) {
      return `
          padding-top: ${pt}px;
        `;
    }
    return null;
  }}


  ${({ py }) => {
    if (py && py instanceof Array) {
      return `
          padding: ${py[0]}px 0;

          ${breakpoints.tablet}{
            padding: ${py[1]}px 0;
          }

          ${breakpoints.desktop}{
            padding: ${py[2]}px 0;
          }
      `;
    }
    if (py) {
      return `
          padding-top: ${py}px;
          padding-bottom: ${py}px;
        `;
    }
    return null;
  }}
`;

export default Section;
