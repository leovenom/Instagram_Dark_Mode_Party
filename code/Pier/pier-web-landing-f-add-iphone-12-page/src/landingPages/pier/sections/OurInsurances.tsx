import Link from "next/link";
import styled from "styled-components";

import { ProductTypes } from "helpers/commonTypes";
import { generalTracker } from "helpers/mixpanelTracker";
import { StyledGrid as Grid } from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";
import Button from "ui/Button";
import Text from "ui/Text";
import ExternalLink from "ui/ExternalLink";
import breakpoints from "ui/theme/breakpoints";

import Section from "../../sharedSections/Section";

const StyledSection = styled(Section)`
  padding: 100px 0;
  text-align: center;

  ${breakpoints.desktop} {
    padding: 120px 0 0;
  }

  p {
    margin-left: 24px;
    margin-right: 24px;

    ${breakpoints.tablet} {
      text-align: start;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const CardsGridItem = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  grid-area: 3/1/3/3;

  ${breakpoints.tablet} {
    grid-area: 3/1/3/9;
  }
  ${breakpoints.desktop} {
    grid-area: 2/1/2/7;
  }
`;

const ImageGridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary100};
  margin-bottom: 40px;

  grid-area: 2/1/2/3;

  ${breakpoints.tablet} {
    grid-area: 2/1/2/9;
  }
  ${breakpoints.desktop} {
    margin-bottom: 0px;
    grid-area: 2/7/2/13;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.desktop} {
    flex-basis: 50%;
    align-items: flex-start;
  }

  :first-child {
    padding-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
    ${breakpoints.desktop} {
      padding: 0;
    }
  }

  :last-child {
    padding-top: 40px;
    ${breakpoints.desktop} {
      padding: 0;
      justify-content: flex-end;
    }
  }
`;

const Image = styled.img`
  width: 60vw;
  display: block;
  margin: 24px auto 0;

  ${breakpoints.tablet} {
    height: auto;
    width: 357px;
  }
`;

const SMARTPHONE_IMG_SRC =
  "/static_assets/images/rebranding/smartphone-with-pink-bg.svg";

const trackProductCard = (product: ProductTypes) =>
  generalTracker.trackButton(`Landing Page Product Card`, { card: product });

const OurInsurances = () => (
  <StyledSection id="our-insurances-section">
    <Grid>
      <GridItem m={2} t={8} d={12} alignItems="center">
        <Text variant="display" mb={16}>
          Nossos seguros
        </Text>
        <Text variant="body" mb={80}>
          Contratação <strong>100% digital</strong> sem sair de casa. Confira os
          valores em menos de <strong> 1 min.</strong>
        </Text>
      </GridItem>
      <CardsGridItem>
        <CardContainer>
          <Text variant="subtitleLarge" mb={12}>
            Seguro Auto
          </Text>
          <Text variant="body" mb={20}>
            Seguro contra Roubo e Furto com Assistência 24h
          </Text>
          <Link href="/seguro-auto/cotacao/placa">
            <Button
              data-tracking="cta-quote-auto"
              asLink
              href="/seguro-auto/cotacao/placa"
              size="small"
              mb={32}
              onClick={() => trackProductCard("auto")}
            >
              Cotação
            </Button>
          </Link>
          <Link href="/seguro-auto">
            <ExternalLink href="/seguro-auto" internal withArrow>
              Conheça o seguro
            </ExternalLink>
          </Link>
        </CardContainer>
        <CardContainer>
          <Text variant="subtitleLarge" mb={12}>
            Seguro Celular
          </Text>
          <Text variant="body" mb={20}>
            Seguro contra Roubo e Furto
          </Text>
          <Link href="/seguro-celular?cotacao=modelos">
            <Button
              data-tracking="cta-quote-smartphone"
              asLink
              href="/seguro-celular"
              size="small"
              mb={32}
              onClick={() => trackProductCard("smartphone")}
            >
              Ver preços
            </Button>
          </Link>
          <Link href="/seguro-celular">
            <ExternalLink href="/seguro-celular" internal withArrow>
              Conheça o seguro
            </ExternalLink>
          </Link>
        </CardContainer>
      </CardsGridItem>
      <ImageGridItem>
        <Image
          src={SMARTPHONE_IMG_SRC}
          alt="Smartphone com aplicativo da Pier aberto mostrando os contratos de seguro de auto e smartphone"
          loading="lazy"
        />
      </ImageGridItem>
    </Grid>
  </StyledSection>
);

export default OurInsurances;
