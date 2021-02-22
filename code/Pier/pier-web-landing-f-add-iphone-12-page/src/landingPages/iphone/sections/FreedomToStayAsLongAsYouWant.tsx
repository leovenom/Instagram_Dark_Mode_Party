import styled from "styled-components";

import Text from "ui/Text";
import Button from "ui/Button";
import Icon from "ui/Icon";
import Section from "landingPages/sharedSections/Section";
import breakpoints from "ui/theme/breakpoints";
import { StyledGrid as Grid } from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";
import UnorderedList from "ui/UnorderedList";

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
  padding: 0 24px;

  ${breakpoints.desktop} {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CtaContainer = styled.div`
  width: 100%;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.tablet} {
    padding: 0;
    margin: 0;
  }

  ${breakpoints.desktop} {
    width: 400px;
  }
`;

const BASE_TRACKING_NAME = "Freedom To Stay As Long As You Want";

const HeroTwoColumns = ({ openSmartphoneSelector, imageSrc }) => (
  <StyledSection textMaxWidth={352}>
    <StyledGrid maxWidth={GRID_MAX_WIDTH}>
      <GridItem m={2} t={8} d={6}>
        <img
          src={imageSrc}
          alt="Mulher em pé segurando uma bicicleta ouvindo música com um headphone e olhando para o celular "
        />
      </GridItem>
      <StyledGridItem m={2} t={8} d={6} justifyContent="center">
        <CtaContainer>
          <Text align="center" variant="section" mb={24} mt={[40, 40, 0]}>
            Liberdade pra ficar o tempo que quiser
          </Text>
          <UnorderedList>
            <li>Pague por mês direto no cartão de crédito</li>
            <li>Cancele quando quiser sem multa</li>
            <li>
              Não expira após 12 meses: você fica protegido pelo tempo que
              quiser. Mesmo
            </li>
          </UnorderedList>
          <Button
            variant="secondary"
            onClick={() => openSmartphoneSelector(BASE_TRACKING_NAME)}
          >
            Ver preços{" "}
          </Button>
        </CtaContainer>
      </StyledGridItem>
    </StyledGrid>
  </StyledSection>
);

export default HeroTwoColumns;
