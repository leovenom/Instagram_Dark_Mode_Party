import styled from "styled-components";

import Grid from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";
import Section from "../../sharedSections/Section";
import Text from "ui/Text";

const Container = styled.div`
  max-width: 720px;
`;

const Image = styled.img`
  margin-bottom: 32px;
`;

const WhyDoWeWakeUpEveryDay = () => (
  <Section pt={64} pb={40}>
    <Grid>
      <GridItem m={2} t={8} d={12} alignItems="center">
        <Image
          src="/static_assets/images/rebranding/man-using-computer.svg"
          alt="Homem sentado com as pernas cruzadas digitando em um notebook "
        />
        <Container>
          <Text variant="section" mb={60}>
            Por que acordamos todos os dias
          </Text>
          <Text variant="body" mb={24}>
            A gente acorda todo dia para levar mais leveza para a vida das
            pessoas!
          </Text>

          <Text variant="body" mb={24}>
            A gente oferece seguros descomplicados e totalmente digitais porque
            entendemos que seguros existem para ajudar as pessoas. Vamos
            combinar que burocracia nunca ajudou ninguém, né gente?
          </Text>
          <Text variant="body" mb={24}>
            A Pier é um seguro baseado em comunidade porque acreditamos que
            pessoas cuidando de pessoas seja o melhor jeito de deixar o mundo um
            lugar mais gostoso.
          </Text>

          <Text variant="body" mb={24}>
            Quando a gente sabe que tem alguém logo ali olhando por nós, somos
            mais livres para sermos nós mesmos e viver a vida do jeitinho que a
            gente mais gosta, com muita leveza e tranquilidade!
          </Text>
        </Container>
      </GridItem>
    </Grid>
  </Section>
);

export default WhyDoWeWakeUpEveryDay;
