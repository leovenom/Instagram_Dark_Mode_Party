import styled from "styled-components";

import Section from "landingPages/sharedSections/Section";
import breakpoints from "ui/theme/breakpoints";
import { StyledGridItem as GridItem } from "ui/GridItem";
import Text from "ui/Text";
import ExternalLink from "ui/ExternalLink";

const MainContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: auto;
`;

const StyledSection = styled(Section)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    padding: 60px 16px;

    ${breakpoints.tablet} {
      margin-bottom: 120px;
    }
  }
`;

const StyledText = styled(Text)`
  &&& {
    text-align: center;

    ${breakpoints.desktop} {
      text-align: left;
    }
  }
`;

const StyledTitleGridItem = styled(GridItem)`
  &&& {
    align-items: center;
    margin-bottom: 30px;

    ${breakpoints.tablet} {
      align-items: start;
      max-width: 360px;
      margin-bottom: 0;
    }
  }
`;

const StyledCollapseGridItem = styled(GridItem)`
  &&& {
    ${breakpoints.desktop} {
      margin-top: -20px;
    }
  }
`;

const StyledLink = styled(ExternalLink)`
  display: block;
  margin: 30px auto 0 auto;

  ${breakpoints.desktop} {
    margin: 30px 0 0 0;
  }
`;

const SmartphoneImg = styled.img`
  max-height: 59px;
  display: block;
  margin-bottom: 32px;

  ${breakpoints.desktop} {
    max-height: 55px;
    margin-bottom: 36px;
  }
`;

export {
  StyledLink,
  StyledCollapseGridItem,
  StyledTitleGridItem,
  StyledText,
  StyledSection,
  MainContainer,
  SmartphoneImg,
};
