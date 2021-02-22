import styled, { css } from "styled-components";
import breakpoints from "ui/theme/breakpoints";

export const OptionLi = styled.li<{
  hasCollapse?: boolean;
}>`
  // Box Model
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

  ${({ hasCollapse }) =>
    hasCollapse &&
    css`
      padding: 0;
      border-bottom: none;
    `}

  ${breakpoints.desktop} {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    // Box Model
    margin: 0;
    margin-right: 16px;
  }

  & > div {
    // Box Model
    flex: 1;
  }
`;

export const CollapseContent = styled.div`
  margin-left: 52px;

  ${breakpoints.desktop} {
    margin: 0 52px;
  }
`;
