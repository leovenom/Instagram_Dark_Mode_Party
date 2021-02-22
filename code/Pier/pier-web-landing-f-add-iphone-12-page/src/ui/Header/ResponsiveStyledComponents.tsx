import styled, { css } from "styled-components";

import breakpoints from "ui/theme/breakpoints";

export const ResponsiveMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${breakpoints.custom(1080)} {
    display: none;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  line-height: 20px;
`;

export const SlideMenu = styled.div<{ opened: boolean }>`
  position: absolute;
  top: 0;
  left: -100vw;
  width: 100vw;
  height: 101vh;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  transition: transform 250ms ease-out;

  ${({ opened }) =>
    opened &&
    css`
      transform: translate(100vw, 0);
    `}
`;

export const MenuList = styled.ul`
  padding: 0;
  list-style-type: none;
  overflow: auto;
  max-height: calc(100vh - 120px);
`;

export const MenuItem = styled.li<{ opened?: boolean; isActive?: boolean }>`
  padding: 24px;

  div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & svg {
    transition: transform 250ms ease-out;
  }

  ${({ opened, theme }) =>
    opened &&
    css`
      background: ${theme.colors.gray200};
      padding-bottom: 0;

      & svg {
        transform: rotate(180deg);
      }
    `}

  ${({ isActive, theme }) =>
    isActive &&
    css`
      & span {
        font-weight: bold;
        color: ${theme.colors.secondary600};

        & ~ svg > path {
          stroke: ${theme.colors.secondary600};
        }
      }
    `}
`;

export const CloseContainer = styled.div`
  padding: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

  & button {
    background: none;
    border: none;
    margin: 0;
    paddin: 0;
  }
`;

export const ResponsiveDropdownList = styled.ul<{ opened: boolean }>`
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  max-height: 0;
  transition: max-height 250ms ease-out;

  ${({ opened }) =>
    opened &&
    css`
      max-height: 330px;
    `}
`;

export const DropdownItem = styled.li`
  padding: 24px;
  font-weight: normal;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 88px;
`;
