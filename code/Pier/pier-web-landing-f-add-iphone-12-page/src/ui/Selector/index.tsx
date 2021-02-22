import * as React from "react";

import styled, { css } from "styled-components";

const Container = styled.div<{ inline?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  width: 100%;
  flex-wrap: ${({ inline }) => (inline ? "nowrap" : "wrap")};

  label {
    ${({ inline }) =>
      inline
        ? css`
            :first-child {
              margin-right: 4px;
            }
            :last-child {
              margin-left: 4px;
            }
          `
        : css`
            :not(last-child) {
              margin-bottom: 16px;
            }
          `}
  }
`;

const Label = styled.label<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  width: 100%;
  margin-bottom: 24px 0;
  align-items: center;
  outline: 0;
  transition: all ease 0.3s;

  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.secondary600 : theme.colors.primary};
  border-radius: 4px;
  height: 48px;
  padding: 12px 16px;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.bgSecondary : "unset"};

  :hover,
  :focus {
    background-color: ${({ theme, active }) => !active && theme.colors.black5};
    border: 1px solid
      ${({ theme, active }) =>
        active ? theme.colors.secondary600 : theme.colors.primary};
  }

  box-shadow: ${({ theme, active }) =>
    active ? `0 0 0 1px ${theme.colors.secondary600} inset` : "none"};

  /* Hide the browser's default radio button */
  input {
    outline: none;
    opacity: 0;
    position: absolute;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  /* Create a custom radio button */
  .checkmark {
    margin-right: 24px;
    height: 16px;
    width: 16px;
    background-color: unset;
    border-radius: 50%;
    border: 1px solid
      ${({ theme, active }) =>
        active ? theme.colors.secondary600 : theme.colors.primary};
  }

  /* On mouse-over, add a grey background color */
  /* :hover input ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.lighterGray};
  } */

  /* When the radio button is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.white};
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .checkmark:after {
    transition: all 0.3s;
    margin-left: 2px;
    margin-top: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary600};
  }
`;

interface SelectorProps {
  children: Element[] | React.ReactNode;
  inline?: boolean;
}

const ENTER_KEY = 13;

const Selector = ({ children, inline }: SelectorProps) => (
  <Container inline={inline}>{children}</Container>
);

interface Props {
  value: string;
  activeValue: string | null;
  setActiveValue: (value: string) => void;
  children: React.ReactNode | Element[];
}

const Option = ({ value, children, activeValue, setActiveValue }: Props) => {
  const onSetActiveValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setActiveValue(event.target.value);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === ENTER_KEY) setActiveValue(value);
  };
  return (
    <Label
      htmlFor={value}
      className="container"
      active={activeValue === value}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <input
        tabIndex={-1}
        type="radio"
        name={value}
        value={value}
        onChange={onSetActiveValue}
        checked={activeValue === value}
      />
      <div className="checkmark"></div>
      {children}
    </Label>
  );
};

Selector.Option = Option;

export default Selector;
