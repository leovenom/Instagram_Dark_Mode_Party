import styled, { css } from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import { fadeInRightSmooth } from "ui/theme/animations";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  ${breakpoints.tablet} {
    justify-content: center;
  }
`;

const ModelsContainer = styled.ul<{ animate?: boolean }>`
  padding: 120px 0;
  margin-top: 52px;

  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  max-width: 600px;
  overflow-y: scroll;
  max-height: 90%;
  ${breakpoints.tablet} {
    padding: 0;
  }

  ${({ animate }) =>
    animate &&
    css`
      opacity: 0;
      animation: ${fadeInRightSmooth} 0.4s forwards;
      animation-delay: 0.1s;
    `}
`;

const ItemContainer = styled.li`
  box-sizing: border-box;
  min-height: 52px;
  font-size: 18px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  :first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
  cursor: pointer;
  outline: 0;
  transition: background 250ms ease-out;

  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.gray200};
  }

  ${({ theme }) => theme.styles.rippleEffect};
`;

export { Container, ModelsContainer, ItemContainer };
