import styled from "styled-components";
import ExternalLink from "ui/ExternalLink";

import breakpoints from "ui/theme/breakpoints";

const BrandsList = styled.ul`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 24px 0 24px;

  ${breakpoints.tablet} {
    justify-content: center;
  }
`;

const BrandBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 47%;
  height: 136px;
  justify-content: center;
  border: 1px solid #c9cbd1;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
  margin-right: 6%;

  &:nth-of-type(2n) {
    margin-right: 0;
  }

  ${breakpoints.tablet} {
    width: 160px;
    height: 160px;
    margin-right: 20px;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray200};
    }
  }
`;

const BrandImg = styled.img`
  display: block;
`;

const BrandImgArea = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandLabel = styled.h2`
  font-size: 14px;
  line-height: 24px;
  font-weight: normal;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const AnotherBrandLink = styled(ExternalLink)`
  margin: 0 auto;
`;

export {
  BrandsList,
  BrandBox,
  BrandImg,
  BrandImgArea,
  BrandLabel,
  AnotherBrandLink,
};
