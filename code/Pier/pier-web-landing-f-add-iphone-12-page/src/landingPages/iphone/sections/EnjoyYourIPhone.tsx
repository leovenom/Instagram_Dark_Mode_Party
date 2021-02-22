import Link from "next/link";
import styled from "styled-components";

import { generalTracker } from "helpers/mixpanelTracker";
import { StyledGrid as Grid } from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";
import Text from "ui/Text";
import Icon from "ui/Icon";
import breakpoints from "ui/theme/breakpoints";

import Section from "landingPages/sharedSections/Section";

const GRID_MAX_WIDTH = 1440;

const StyledSection = styled(Section)`
  padding: 80px 0px;

  ${breakpoints.desktop} {
    padding: 148px 0 80px;
  }

  p,
  h3 {
    /* margin-left: 24px;
    margin-right: 24px; */

    ${breakpoints.tablet} {
      text-align: start;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const GriItemWithMargin = styled(GridItem)`
  padding: 0 24px 24px;
  ${breakpoints.desktop} {
    padding: 0;
    padding-left: 80px;
  }
`;

const Image = styled.img`
  width: 60vw;
  display: block;
  margin: 24px auto 0;

  ${breakpoints.tablet} {
    display: block;
    margin: auto;
    height: 600px;
    width: auto;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0;

  li {
    margin-bottom: 8px;
    margin-left: 16px;
  }

  svg {
    margin-right: 4px;
  }
`;

const coveredItems = [
  "Roubos (casos de assalto)",
  "Furto qualificado (com vestígios)",
  "Furto simples (sem vestígios)",
  "Aparelhos usados ou comprados no exterior",
  "Aparelhos sem nota fiscal",
];

const unCoveredItems = [
  "Perdas",
  "Quedas e danos",
  "Ocorrências fora do Brasil",
];

const OurInsurances = ({ imageSrc, device }) => (
  <StyledSection id="our-insurances-section">
    <Grid maxWidth={GRID_MAX_WIDTH}>
      <GriItemWithMargin d={6} t={8} m={2}>
        <Text variant="section" mb={32}>
          Aproveite seu {device} <br />
          sem medo de ser feliz
        </Text>
        <Text variant="body" mb={32} maxWidth={530}>
          A Pier é o seguro que vai com você em todas ocasiões e um dos únicos
          no Brasil com cobertura contra furto simples.
        </Text>

        <Text variant="body" bold color="secondary" mb={8}>
          A Pier cobre:
        </Text>
        <List>
          {coveredItems.map((item) => (
            <li key={item}>
              <Icon name="check" fill="text" size={14} /> {item}
            </li>
          ))}
        </List>

        <Text variant="body" bold color="secondary" mt={24} mb={8}>
          A Pier não cobre:
        </Text>
        <List>
          {unCoveredItems.map((item) => (
            <li key={item}>
              <Icon name="close" stroke={16} fill="text" size={14} /> {item}
            </li>
          ))}
        </List>
      </GriItemWithMargin>
      <GridItem
        d={6}
        t={8}
        m={2}
        bg="secondary100"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={imageSrc}
          alt="Smartphone com aplicativo da Pier aberto mostrando os contratos de smartphone"
          loading="lazy"
        />
      </GridItem>
    </Grid>
  </StyledSection>
);

export default OurInsurances;
