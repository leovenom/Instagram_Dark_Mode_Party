import { InputHTMLAttributes } from "react";

import Icon from "../Icon";
import CircularProgress from "../CircularProgress";
import InputMask from "react-input-mask";
import styled, { css } from "styled-components";
import icons from "../Icon/icons";
import mask from "./mask";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  mask?: keyof typeof mask;
  error?: string | boolean;
  helpField?: string;
  refInput?: any;
  clearValue?: (event?: any) => any;
  icon?: keyof typeof icons;
  required?: boolean;
  loading?: boolean;
  maskPlaceholder?: string;
}

export const Label = styled.label<{
  error?: boolean | string;
  icon?: keyof typeof icons;
}>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkerGray};

  ${(props) =>
    props.error &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `};

  position: absolute;
  bottom: 12px;
  transform-origin: 0 -150%;
  transition: all 300ms ease;
  pointer-events: none;

  ${({ icon }) =>
    icon &&
    css`
      padding-left: 32px;
    `}
`;

export const Error = styled.label`
  margin-top: 4px;
  font-size: 13px;
  line-height: 20px;
  display: block;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.red};
`;

const Field = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

export const InputContent = styled.div<{ error?: boolean | string }>`
  display: flex;
  align-items: center;
  position: relative;
  :before {
    content: "";
    height: 2px;
    width: 0px;
    bottom: 0px;
    position: absolute;
    background: ${({ theme, error }) =>
      error ? theme.colors.red : theme.colors.secondary600};
    transition: 300ms ease all;
    left: 0%;
  }

  :focus-within {
    :before {
      width: 100%;
    }
  }

  .close-icon {
    position: absolute;
    right: 0;
    bottom: 16px;
    cursor: pointer;
  }

  .loading {
    position: absolute;
    right: 0;
    bottom: 8px;
    cursor: pointer;
  }

  .adornment-icon {
    position: absolute;
    left: 0;
    bottom: 14px;
    cursor: pointer;
  }
`;

export const InputStyle = styled.input<Props>`
  width: 100%;
  padding: 4px 24px 12px 0;
  -webkit-appearance: none;
  border-radius: 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.danger : theme.colors.darkGray};

  background: ${({ theme }) => theme.colors.white};

  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
  caret-color: ${({ theme, error }) =>
    error ? theme.colors.danger : theme.colors.secondary600};
  transition: all 0.3s;

  ::placeholder {
    color: transparent;
    transition: color 300ms ease;
  }

  &:focus {
    outline: 0;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  &:focus ~ ${Label}, &:not(:placeholder-shown) ~ ${Label} {
    font-size: 12px;
    line-height: 16px;
    bottom: 42px;
  }

  ${(props) =>
    props.error &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.danger};
      caret-color: ${({ theme }) => theme.colors.danger};

      :focus,
      :active {
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.danger};
      }
    `};

  ${({ icon }) =>
    icon &&
    css`
      padding-left: 32px;
    `}
`;

const HelpLabel = styled.div`
  margin-top: 4px;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const getIconColor = (error) => (error ? "red" : "gray");

const Input = ({
  mask: inputMask,
  value,
  label,
  onChange,
  onBlur,
  required,
  refInput,
  placeholder,
  clearValue,
  error,
  icon,
  helpField,
  loading,
  ...props
}: Props) => (
  <Field>
    <InputContent error={error}>
      <InputMask
        mask={mask[inputMask]}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maskPlaceholder={props.maskPlaceholder}
        required={required}
      >
        <InputStyle
          error={error}
          icon={icon}
          {...props}
          ref={refInput}
          placeholder={placeholder || " "}
          id={props.name}
        />
      </InputMask>
      {label && (
        <Label icon={icon} error={error} htmlFor={props.name}>
          {label}
        </Label>
      )}
      {value && clearValue && !loading && (
        <Icon
          className="close-icon"
          name="closeFilled"
          fill={getIconColor(error)}
          size={18}
          onClick={clearValue}
        />
      )}
      {icon && (
        <Icon
          className="adornment-icon"
          name={icon}
          fill={getIconColor(error)}
          size={20}
        />
      )}
      {loading && (
        <CircularProgress
          className="loading"
          color="secondary"
          bgColor="gray200"
          size={20}
        />
      )}
    </InputContent>

    {error && <Error>{error}</Error>}
    {helpField && <HelpLabel>{helpField}</HelpLabel>}
  </Field>
);

Input.defaultProps = {
  required: true,
  maskPlaceholder: null,
};

export default Input;
