import { ButtonHTMLAttributes } from "react";
import * as React from "react";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import Spinner from "../CircularProgress";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "facebook" | "outline" | "plainText";
  isLoading?: boolean;
  fullWidth?: boolean;
  size?: "medium" | "large";
  asLink?: boolean;
  href?: string;
  download?: boolean;
  my?: number;
}

export const StyledButton = styled.button<Props>`
  border: none;
  cursor: pointer;
  max-width: 100%;
  height: 48px;
  width: 48px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  color: white;
  position: relative;
  transition: background 0.3s;

  ${({ theme }) => theme.styles.rippleEffect};

  ${({ my }) =>
    my &&
    `
    margin: ${my}px 0px;
  `};

  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    outline: 0;
  }

  :hover {
    background: ${({ theme }) => theme.colors.blue};
  }

  ${(props) =>
    props.size === "large" &&
    css`
      height: 56px;
      width: 56px;
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background: ${({ theme }) => theme.colors.secondaryDark};

      :hover {
        background: ${({ theme }) => theme.colors.secondaryLight};
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

const Button: React.FC<Props> = ({
  isLoading,
  variant = "primary",
  asLink,
  disabled,
  ...props
}): JSX.Element => {
  const component = asLink ? "a" : "button";

  return (
    <StyledButton
      as={component}
      variant={variant}
      isLoading={isLoading}
      disabled={disabled}
      {...props}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Icon name="chevronRight" fill="white" size={14} />
      )}
    </StyledButton>
  );
};

export default Button;
