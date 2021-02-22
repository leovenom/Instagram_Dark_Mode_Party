import styled, { css } from "styled-components";

import breakpoints from "ui/theme/breakpoints";

const CardContainer = styled.div`
  box-sizing: border-box;
  max-width: 500px;
  min-height: 385px;
  width: 100%;
  padding: 32px 18px;
  background-color: #fff;

  ${breakpoints.desktop} {
    padding: 32px 25px;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const CardRow = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid rgba(201, 203, 209, 0.5);

  &:first-child {
    padding-top: 0px;
  }

  &:last-of-type {
    border: none;
    margin-bottom: 30px;
  }
`;

const CardRowItem = styled.div<{ arrow?: string }>`
  width: 33%;
  display: flex;
  align-items: center;

  &:first-child {
    width: 34%;
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:after {
    display: none;
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  ${({ arrow }) =>
    arrow === "down" &&
    css`
      &:after {
        margin: 0 0 3px 8px;
        display: inline-block;
        border-top: 6px solid ${({ theme }) => theme.colors.secondary};
      }
    `}

  ${({ arrow }) =>
    arrow === "up" &&
    css`
      &:after {
        margin: 0 0 3px 8px;
        display: inline-block;
        border-bottom: 6px solid ${({ theme }) => theme.colors.secondary};
      }
    `}
`;

const ImgWoman = styled.img`
  display: block;
  height: 116px;
  margin-bottom: 36px;
`;
export {
  CardContainer,
  CardHeader,
  CardContent,
  CardRow,
  CardRowItem,
  ImgWoman,
};
