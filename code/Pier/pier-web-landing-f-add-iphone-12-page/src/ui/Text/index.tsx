import * as React from "react";
import typography from "../theme/typography";
import colors from "../theme/colors";
import styled from "styled-components";
import breakpoints from "../theme/breakpoints";

interface Props {
  variant: keyof typeof typography;
  bold?: boolean;
  highlight?: boolean;
  color?: keyof typeof colors;
  mb?: number[] | number;
  mt?: number[] | number;
  mr?: number[] | number;
  ml?: number[] | number;
  inline?: boolean;
  id?: string;
  style?: any;
  maxWidth?: number;
  transform?: "capitalize" | "uppercase" | "lowercase";
  decoration?: "underline" | "overline" | "line-through" | "blink" | "none";
  align?: "left" | "right" | "center" | "justify" | "justify-all";
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const Component = styled.p<{
  bold?: boolean;
  highlight?: boolean;
  color?: keyof typeof colors;
  mb?: number[] | number;
  mt?: number[] | number;
  mr?: number[] | number;
  ml?: number[] | number;
  inline?: boolean;
  id?: string;
  transform?: "capitalize" | "uppercase" | "lowercase";
  decoration?: "underline" | "overline" | "line-through" | "blink";
  align?: "left" | "right" | "center" | "justify" | "justify-all";
  maxWidth?: number;
}>`
    font-weight: normal;
    margin: 0;

    ${({ maxWidth }) =>
      maxWidth &&
      `
      max-width: ${maxWidth}px;
    `}

    ${({ align }) =>
      align &&
      `
  text-align: ${align};
      `}

    ${({ transform }) =>
      transform &&
      `
      text-transform: ${transform};
    `}

    ${({ bold }) =>
      bold &&
      `
        font-weight: bold;
    `}

    ${({ highlight }) =>
      highlight &&
      `
        background: ${colors.highlightGradient};
    `}

    ${({ mb }) => {
      if (mb && mb instanceof Array) {
        return `
            margin-bottom: ${mb[0]}px;

            ${breakpoints.tablet}{
              margin-bottom: ${mb[1]}px;
            }

            ${breakpoints.desktop}{
              margin-bottom: ${mb[2]}px;
            }
        `;
      }
      if (mb) {
        return `
            margin-bottom: ${mb}px;
          `;
      }
      return null;
    }}

    ${({ mr }) => {
      if (mr && mr instanceof Array) {
        return `
                margin-right: ${mr[0]}px;

                ${breakpoints.tablet}{
                  margin-right: ${mr[1]}px;
                }

                ${breakpoints.desktop}{
                  margin-right: ${mr[2]}px;
                }
            `;
      }
      if (mr) {
        return `
                margin-right: ${mr}px;
              `;
      }
      return null;
    }}

    ${({ ml }) => {
      if (ml && ml instanceof Array) {
        return `
                margin-left: ${ml[0]}px;

                ${breakpoints.tablet}{
                  margin-left: ${ml[1]}px;
                }

                ${breakpoints.desktop}{
                  margin-left: ${ml[2]}px;
                }
            `;
      }
      if (ml) {
        return `
                margin-left: ${ml}px;
              `;
      }
      return null;
    }}

    ${({ mt }) => {
      if (mt && mt instanceof Array) {
        return `
                margin-top: ${mt[0]}px;

                ${breakpoints.tablet}{
                  margin-top: ${mt[1]}px;
                }

                ${breakpoints.desktop}{
                  margin-top: ${mt[2]}px;
                }
            `;
      }
      if (mt) {
        return `
                margin-top: ${mt}px;
              `;
      }
      return null;
    }}

    ${({ color }) =>
      color &&
      `
          color: ${colors[color]};
      `}


    ${({ inline }) =>
      inline &&
      `
          display: inline;
      `}
  
    ${({ decoration }) =>
      decoration &&
      `
      text-decoration: ${decoration};
    `}
  `;

const Text: React.FC<Props> = ({
  variant,
  children,
  highlight,
  bold,
  color,
  mb,
  mt,
  mr,
  ml,
  inline,
  id,
  align,
  maxWidth,
  ...props
}): JSX.Element => {
  return (
    <Component
      as={typography[variant].component}
      color={color}
      css={typography[variant].style}
      highlight={highlight}
      bold={bold}
      align={align}
      mb={mb}
      mt={mt}
      mr={mr}
      ml={ml}
      inline={inline}
      maxWidth={maxWidth}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
