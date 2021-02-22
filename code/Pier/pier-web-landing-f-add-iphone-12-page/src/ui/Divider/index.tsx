import styled from "styled-components";
import breakpoints from "../theme/breakpoints";

const Divider = styled.div<{
  my?: number;
  mb?: number | number[];
  mt?: number | number[];
  large?: boolean;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}>`
  ${({ desktopOnly }) => desktopOnly && "display: none;"}
  height: ${({ large }) => (large ? "8" : "1")}px;
  width: 100%;
  background: ${({ large, theme }) =>
    large ? theme.colors.gray200 : theme.colors.gray400};
  ${({ my }) =>
    my &&
    `
    margin: ${my}px 0px;
  `}

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
  }};

  ${({ mt }) => {
    if (mt && mt instanceof Array)
      return `
                margin-top: ${mt[0]}px;

                ${breakpoints.tablet}{
                  margin-top: ${mt[1]}px;
                }

                ${breakpoints.desktop}{
                  margin-top: ${mt[2]}px;
                }
            `;
    if (mt) {
      return `
                margin-top: ${mt}px;
              `;
    }
    return null;
  }};

  ${breakpoints.tablet} {
    display: ${({ mobileOnly }) => (mobileOnly ? "none" : "block")};
  }
`;

export default Divider;
