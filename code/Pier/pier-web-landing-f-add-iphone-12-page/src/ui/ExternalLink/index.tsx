import * as React from "react";
import styled, { css } from "styled-components";

import CustomizedIcon from "../Icon/CustomizedIcon";
import breakpoints from "../theme/breakpoints";
import colors from "ui/theme/colors";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  mb?: number | number[];
  mt?: number | number[];
  children: React.ReactNode;
  withArrow?: boolean;
  href?: string;
  internal?: boolean;
  color?: keyof typeof colors;
  onClick?: () => void;
}

export const StyledLink = styled.a<{
  mb?: number | number[];
  mt?: number | number[];
  fontSize?: number | number[];
  color?: keyof typeof colors;
}>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  ${({ color, theme }) => css`
    color: ${color ? theme.colors[color] : theme.colors.secondary600};
  `}
  text-decoration: underline;

  svg {
    margin-left: 8px;
    transform: rotate(-90deg);
    path {
      stroke: ${({ theme }) => theme.colors.secondary600};
    }
  }

  :hover {
    text-decoration: underline;
  }

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
  }}
`;

const externalProps = { target: "_blank", rel: "noopener noreferrer" };

const ExternalLink = React.forwardRef(function ExternalLink(
  { children, color, mb, mt, withArrow, onClick, internal, ...props }: Props,
  ref
) {
  const external = internal ? {} : externalProps;
  return (
    <StyledLink
      color={color}
      onClick={onClick}
      mb={mb}
      mt={mt}
      {...external}
      {...props}
    >
      {children} {withArrow && <CustomizedIcon name="thinChevronDown" />}
    </StyledLink>
  );
});

export default ExternalLink;
