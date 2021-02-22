import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import Icon from "../Icon";
import breakpoints from "../theme/breakpoints";

interface Props {
  mb?: number | number[];
  mt?: number | number[];
  children: React.ReactNode;
  withArrow?: boolean;
  href?: string;
  onClick?: () => void;
}

export const StyledLink = styled.p<{
  mb?: number | number[];
  mt?: number | number[];
  fontSize?: number | number[];
  displayOnly?: "mobile" | "desktop";
}>`
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    margin-left: 8px;
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

const externalProps = { target: "_blank", rel: "noopener" };

const InternalLink = ({
  children,
  mb,
  mt,
  withArrow,
  href,
  onClick,
  ...props
}: Props): JSX.Element => (
  <Link href={href}>
    <a onClick={onClick}>
      <StyledLink mb={mb} mt={mt} {...props}>
        {children} {withArrow && <Icon name="arrowRight" fill="primary" />}
      </StyledLink>
    </a>
  </Link>
);

export default InternalLink;
