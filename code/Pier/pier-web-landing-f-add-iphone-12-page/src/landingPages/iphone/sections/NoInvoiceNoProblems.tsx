import styled from "styled-components";

import Text from "ui/Text";
import Button from "ui/Button";
import Icon from "ui/Icon";
import Section from "landingPages/sharedSections/Section";
import breakpoints from "ui/theme/breakpoints";
import { StyledGrid as Grid } from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";

import { HEADER_HEIGHT } from "ui/Header/styles";

const GRID_MAX_WIDTH = 1440;

const DEFAULT_MOBILE_MARGIN_TOP = HEADER_HEIGHT;
const DEFAULT_TABLET_MARGIN_TOP = HEADER_HEIGHT + 24;

const StyledSection = styled(Section)<{ textMaxWidth: number; mt?: number }>`
  &&& {
    position: relative;
    padding: 0;
    ${breakpoints.tablet} {
      margin: ${({ mt }) => mt || DEFAULT_TABLET_MARGIN_TOP}px 24px 0;
    }

    ${breakpoints.desktop} {
      padding: 80px 24px;
    }

    p,
    h1 {
      text-rendering: optimizelegibility;
    }
    h1 {
      max-width: 300px;
    }

    ${breakpoints.tablet} {
      p,
      h1 {
        max-width: ${({ textMaxWidth }) => textMaxWidth}px;
        color: inherit;
      }
    }

    .hero-wrapper {
      height: 100%;
      ${breakpoints.tablet} {
        height: 682px;
      }
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;

      ${breakpoints.tablet} {
        filter: none;
        min-height: unset;
      }
    }
  }
`;

const StyledGrid = styled(Grid)`
  ${breakpoints.tablet} {
    grid-template-rows: unset;
  }
`;

const StyledGridItem = styled(GridItem)`
  &&& {
    padding: 0 24px;

    ${breakpoints.desktop} {
      margin-top: 0;
      padding: 0;
      padding-left: 80px;
      display: flex;
      justify-content: center;
    }
  }
`;

const CtaContainer = styled.div`
  width: 100%;
  padding-bottom: 24px;
  justify-content: center;
  display: flex;

  ${breakpoints.tablet} {
    padding: 0;
    margin: 0;
  }

  ${breakpoints.desktop} {
    width: 329px;
  }
`;

const BASE_TRACKING_NAME = "No Invoice, No Problems";

const HeroTwoColumns = ({ openSmartphoneSelector, imageSrc, device }) => (
  <StyledSection bg="gray200" textMaxWidth={352}>
    <StyledGrid maxWidth={GRID_MAX_WIDTH}>
      <StyledGridItem m={2} t={8} d={6} justifyContent="center">
        <div>
          <Text variant="section" mb={24} mt={[40, 40, 0]}>
            Sem NF? <br />
            Sem problemas
          </Text>
          <Text variant="body" mb={24}>
            Substituímos a papelada por tecnologia e por isso protegemos seu{" "}
            {device} sem pedir nota fiscal
          </Text>

          <CtaContainer>
            {" "}
            <Button
              variant="secondary"
              onClick={() => openSmartphoneSelector(BASE_TRACKING_NAME)}
            >
              Ver preços{" "}
            </Button>
          </CtaContainer>
        </div>
      </StyledGridItem>
      <GridItem m={2} t={8} d={6}>
        <img
          src={imageSrc}
          alt="Caixa de um iPhone aberta com um iPhone dentro na diagonal virado com a câmera para cima"
        />
      </GridItem>
    </StyledGrid>
  </StyledSection>
);

export default HeroTwoColumns;
