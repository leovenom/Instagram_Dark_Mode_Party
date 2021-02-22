import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Field = styled.div`
  // Box Model
  margin-bottom: 32px;
`;

const Label = styled.label`
  // Position
  position: relative;

  // Visual
  cursor: pointer;

  // Box Model
  display: block;
  padding-left: 42px;

  &::before {
    // Visual
    content: "";
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    cursor: pointer;

    // Box Model
    display: inline-block;
    margin-right: 16px;
    width: 25px;
    height: 25px;

    // Position
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Input = styled.input`
  // Box Model
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;

  // Visual
  cursor: pointer;

  &:checked {
    & + ${Label}:after {
      // Visual
      content: "";
      border: solid ${({ theme }) => theme.colors.white};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);

      // Box Model
      display: block;
      width: 5px;
      height: 10px;

      // Position
      position: absolute;
      left: 10px;
      top: 6px;
    }

    & + ${Label}:before {
      // Visual
      border-color: ${({ theme }) => theme.colors.secondary600};
      background-color: ${({ theme }) => theme.colors.secondary600};
    }
  }
`;

const Checkbox = (props: Props) => {
  return (
    <>
      <Field>
        <Input
          checked={!!props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type="checkbox"
          id={props.name}
          name={props.name}
        />
        <Label htmlFor={props.name}>{props.children}</Label>
      </Field>
    </>
  );
};

export default Checkbox;
