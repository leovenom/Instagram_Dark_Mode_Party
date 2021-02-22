import styled, { css } from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import { fadeInRightSmooth } from "ui/theme/animations";

const TemplateContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 440px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
`;

const TemplateHeader = styled.header`
  width: 100%;
  height: 48px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 29px 24px 0 24px;

  ${breakpoints.tablet} {
    padding: 29px 0 0 0;
    margin-bottom: 42px;
  }
`;

const TemplateContent = styled.div<{
  animate?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: 100%;
  justify-content: flex-start;

  ${({ animate }) =>
    animate &&
    css`
      opacity: 0;
      animation: ${fadeInRightSmooth} 0.4s forwards;
      animation-delay: 0.1s;
    `}
`;

const TemplateTitle = styled.h1`
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 24px 0 24px;

  ${breakpoints.tablet} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const TemplateCloseBtn = styled.button`
  font-size: 14px;
  line-height: 21px;
  padding: 6px 12px;
  margin-right: -12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  background-color: transparent;
  box-shadow: none;
  border: none;
  maring-right: 

  &:hover {
    cursor: pointer;
  }
`;

const TemplateBackStepBtn = styled.button`
  background-color: transparent;
  box-shadow: none;
  border: none;
  padding: 10px;
  line-height: 0;
  margin-left: -10px;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;

const TemplateList = styled.ul`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  padding-bottom: 70px;
  flex: 1;

  ${breakpoints.tablet} {
    padding: 0 24px 30px 24px;
    max-height: 600px;
    flex: initial;
    margin-bottom: 20px;
  }
`;

const TemplateListItem = styled.li`
  width: 100%;
  box-sizing: border-box;
  height: 57px;
  min-height: 57px;
  font-size: 18px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  cursor: pointer;
  outline: 0;
  transition: background 250ms ease-out;

  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.gray200};
  }

  ${({ theme }) => theme.styles.rippleEffect};
`;

const TemplateFooter = styled.div`
  width: 100%;
  height: 84px;
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray200};
  border: 1px solid ${({ theme }) => theme.colors.gray400};

  span {
    padding-right: 5px;
  }

  ${breakpoints.tablet} {
    max-width: 392px;
    height: 65px;
    min-height: 65px;
    margin: 0 auto;
    border-radius: 4px;
    margin-bottom: 20px;
  }
`;
export {
  TemplateContainer,
  TemplateHeader,
  TemplateContent,
  TemplateTitle,
  TemplateCloseBtn,
  TemplateBackStepBtn,
  TemplateList,
  TemplateListItem,
  TemplateFooter,
};
