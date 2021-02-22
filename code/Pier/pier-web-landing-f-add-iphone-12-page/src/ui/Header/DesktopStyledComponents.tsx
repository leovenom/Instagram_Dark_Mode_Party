import styled, { css } from "styled-components";

import breakpoints from "ui/theme/breakpoints";

export const FlexContainer = styled.div`
  display: none;

  ${breakpoints.custom(1080)} {
    display: flex;
    height: 100%;
  }
`;

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  height: 100%;
`;

export const MenuItem = styled.li<{ isActive?: boolean }>`
  font-size: 14px;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      & div > span,
      & > span {
        font-weight: bold;
        color: ${theme.colors.secondary600};
      }
      & div > svg > path {
        stroke: ${theme.colors.secondary600};
      }
    `}

  & svg {
    width: 10px;
    height: 10px;
    padding-left: 8px;
    transition: transform 250ms ease-out;
  }

  &:hover {
    .decorator {
      width: 100%;
    }

    & > div > svg {
      transform: rotate(180deg) translate(-7px, 0);
    }

    ul {
      transform: translate(0, 81px);
      border: 1px solid ${({ theme }) => theme.colors.gray400};
      border-top: 2px solid ${({ theme }) => theme.colors.secondary600};
      opacity: 1;
    }
  }
`;

export const HoverDecorator = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 -16px;
  width: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.secondary600};

  transition: width 250ms ease-out;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  button {
    min-width: auto;
    padding: 0 32px;
  }
`;

export const DropdownMenu = styled.ul`
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  position: absolute;
  width: 210px;
  top: 0;
  left: 16px;
  border: 0;
  opacity: 0;
  border-radius: 0 0 4px 4px;
  transform: translate(0, -80px);
  z-index: -1;

  transition: transform 250ms ease-out, opacity 250ms ease-out 50ms;
`;

export const DropdownItem = styled.li`
  padding: 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};

  & svg {
    transform: rotate(-90deg);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
  }
`;
