import styled, { css } from "styled-components";

const OrderedList = styled.ul<{ variant?: "primary" | "basic" }>`
  list-style: none;
  counter-reset: my-awesome-counter;
  margin-left: 16px;

  li {
    counter-increment: my-awesome-counter;
    margin-bottom: 32px;
  }
  li::before {
    border-radius: 50%;
    content: counter(my-awesome-counter) " ";
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondary100};
    font-weight: bold;

    content: counter(my-awesome-counter);
    width: 24px;
    height: 24px;
    display: inline-block;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    margin-left: -48px;
    margin-right: 24px;

    ${({ variant }) =>
      variant === "basic" &&
      css`
        color: ${({ theme }) => theme.colors.text};
        background: unset;
        font-size: 24px;
      `}
  }
`;

export default OrderedList;
