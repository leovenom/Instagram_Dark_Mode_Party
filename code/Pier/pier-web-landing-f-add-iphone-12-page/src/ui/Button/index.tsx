import { ButtonHTMLAttributes } from "react";
import * as React from "react";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import icons from "../Icon/icons";
import CircularProgress from "../CircularProgress";
import breakpoints from "../theme/breakpoints";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "facebook"
    | "outline"
    | "plainText"
    | "black";
  isLoading?: boolean;
  icon?: keyof typeof icons;
  fullWidth?: boolean;
  size?: "tiny" | "small" | "medium";
  children?: React.ReactNode;
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  my?: number;
  mt?: number[] | number;
  mb?: number[] | number;
  smallFontSize?: boolean;
}

export const StyledButton = styled.button<Props>`
  text-decoration: none;
  border: none;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "328px")};
  max-width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ smallFontSize }) => (smallFontSize ? "14px" : "16px")};
  line-height: 24px;
  position: relative;
  transition: background 0.3s;

  ${({ theme }) => theme.styles.rippleEffect};

  ${({ my }) =>
    my &&
    `
    margin: ${my}px 0px;
  `};

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

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  :focus{
    outline: 0;
  }

  :hover{
    background: ${({ theme }) => theme.colors.blue};
  }

  ${(props) =>
    props.size === "tiny" &&
    css`
      height: 32px;
      width: ${props.fullWidth ? "100%" : "137px"};
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      height: 40px;
      width: ${props.fullWidth ? "100%" : "183px"};
    `}

   ${(props) =>
     props.variant === "secondary" &&
     css`
       background: ${({ theme }) => theme.colors.secondaryDark};

       :hover {
         background: ${({ theme }) => theme.colors.secondaryLight};
       }
     `};

  ${(props) =>
    props.variant === "facebook" &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.facebookPrimary};
      color: ${({ theme }) => theme.colors.facebookPrimary};
      background: ${({ theme }) => theme.colors.white};

      :hover {
        background: ${({ theme }) => theme.colors.black10Gradient};
      }
    `};

    ${(props) =>
      props.variant === "black" &&
      css`
        background: ${({ theme }) => theme.colors.black};
        &:active {
          background: ${({ theme }) => theme.colors.black};
        }
      `};

  ${(props) =>
    props.variant === "plainText" &&
    css`
      height: auto;
      width: auto;
      min-width: unset;
      padding: 0;
      background: unset;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;

      :hover {
        text-decoration: underline;
        background: unset;
      }
    `};

  ${(props) =>
    props.variant === "outline" &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      background: transparent;
      :active {
      }

      :hover {
        background: ${({ theme }) => theme.colors.black10Gradient};
        border: 1px solid ${({ theme }) => theme.colors.blue};
      }
    `};

  &:disabled {
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;

    ${(props) =>
      props.isLoading &&
      css`
        color: ${({ theme }) => theme.colors.blue};
      `}
  }
`;

export const IconContainer = styled.p`
  padding: 0 ${({ theme }) => theme.spacings.KILO}px 0 0;
  display: flex;
  align-items: center;
`;

const Button = React.forwardRef(function Button(
  { isLoading, variant = "primary", children, icon, asLink, ...props }: Props,
  ref
) {
  const IconName = variant === "facebook" ? "facebook" : icon;

  const leftIcon = IconName ? (
    <IconContainer>
      <Icon
        name={IconName}
        fill={variant === "facebook" ? "facebookPrimary" : "white"}
      />
    </IconContainer>
  ) : null;

  const component = asLink ? "a" : "button";

  return (
    <StyledButton
      as={component}
      variant={variant}
      isLoading={isLoading}
      {...props}
    >
      {leftIcon}
      {isLoading ? <CircularProgress /> : children}
    </StyledButton>
  );
});

export default Button;
