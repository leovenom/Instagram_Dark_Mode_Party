import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Text from "ui/Text";
import Button from "ui/Button";
import breakpoints from "ui/theme/breakpoints";
import styled from "styled-components";
import Section from "landingPages/sharedSections/Section";

const Image = styled.img`
  margin: 12px 0;
  max-width: 100%;

  ${breakpoints.tablet} {
    max-width: unset;
  }
`;

const BASE_TRACKING_NAME = "We Help You To Compare";

const TextWithCenteredImage = ({ openSmartphoneSelector, device }) => (
  <Section pb={60} pt={32}>
    <Grid maxWidth={800}>
      <GridItem m={2} t={8} d={12} alignItems="center">
        <Text variant="sectionSecondary" align="center" mb={16}>
          Tá na dúvida? A gente te ajuda a comparar
        </Text>
        <Text variant="body" mb={40} align="center">
          O seguro ideal para o seu {device} combina com o seu estilo de vida e
          com o seu bolso. Por isso, montamos essa tabela para te ajudar a
          comparar e tomar a melhor decisão (mesmo que não seja a Pier). 😉
        </Text>
        <Image
          src="/static_assets/images/rebranding/pier-smartphone-comparative.png"
          alt="Tabela com comparativo entre o seguro smartphone da Pier e de outras sg"
        />

        <Button
          variant="secondary"
          mt={24}
          onClick={() => openSmartphoneSelector(BASE_TRACKING_NAME)}
        >
          Ver planos para o meu {device}
        </Button>
      </GridItem>
    </Grid>
  </Section>
);

export default TextWithCenteredImage;
