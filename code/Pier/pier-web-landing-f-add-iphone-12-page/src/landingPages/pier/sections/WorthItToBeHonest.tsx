import Link from "next/link";

import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Text from "ui/Text";
import ExternalLink from "ui/ExternalLink";
import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import Section from "landingPages/sharedSections/Section";

import { font } from "ui/theme/typography";

const ItemContainer = styled.div`
  max-width: 262px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 60px;

  ${breakpoints.desktop} {
    margin-bottom: 0;
  }
`;

const BigText = styled.p`
  text-align: center;
  display: inline;
  font-size: 48px;
  font-family: ${font.secondary};
  ${breakpoints.desktop} {
    font-size: 76px;
  }
`;

const AuxiliarText = styled.p`
  text-align: center;
  display: inline;
  font-size: 24px;
  font-family: ${font.secondary};
`;

const ThreeItemsSection = () => (
  <Section pb={[100, 100, 126]} pt={[80, 80, 126]}>
    <Grid>
      <GridItem m={2} t={8} d={12} alignItems="center">
        <Text variant="section" align="center" mb={24}>
          Vale a pena ser honesto
        </Text>
        <Text variant="body" align="center" mb={40} maxWidth={580}>
          Nós confiamos em nossos membros e estamos construindo uma comunidade
          onde você pode confiar também. O resultado disso reflete em nossos
          números.
        </Text>
        <Link href="/pedir-reembolso">
          <ExternalLink href="/pedir-reembolso" internal mb={80} withArrow>
            Entenda como funciona o reembolso
          </ExternalLink>
        </Link>
      </GridItem>

      <GridItem alignItems="center" justifyContent="center" m={2} t={8} d={4}>
        <ItemContainer>
          <div>
            <BigText> 1548</BigText>
          </div>
          <Text variant="bodySmall" align="center">
            Número de <strong>pessoas</strong> que receberam o reembolso quando
            precisaram.
          </Text>
        </ItemContainer>
      </GridItem>
      <GridItem alignItems="center" justifyContent="center" m={2} t={8} d={4}>
        <ItemContainer>
          <div>
            <AuxiliarText>R$</AuxiliarText> <BigText> 4,3</BigText>
            <AuxiliarText>mi</AuxiliarText>
          </div>
          <Text variant="bodySmall" align="center">
            <strong> Valor pago</strong> em reembolsos aos nossos membros
          </Text>
        </ItemContainer>
      </GridItem>
      <GridItem alignItems="center" justifyContent="center" m={2} t={8} d={4}>
        <ItemContainer>
          <div>
            <BigText> 38</BigText> <AuxiliarText>seg</AuxiliarText>
          </div>
          <Text variant="bodySmall" align="center">
            <strong>Recorde</strong> do nosso tempo de pagamento em um reembolso
          </Text>
        </ItemContainer>
      </GridItem>
    </Grid>
  </Section>
);

export default ThreeItemsSection;
