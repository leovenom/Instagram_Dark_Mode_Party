import Grid from "ui/Grid";
import GridItem, { StyledGridItem } from "ui/GridItem";
import Text from "ui/Text";
import Section from "./Section";

import styled from "styled-components";

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

const CenterContentGrid = styled(StyledGridItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StandardModelSection = ({ title, description, imagePath }) => (
  <Section>
    <Grid>
      <CenterContentGrid m={2} t={8} d={6} maxWidth={460}>
        <Text variant="section" mb={24}>
          {title}
        </Text>
        <Text variant="bodyLarge" mb={32}>
          {description}
        </Text>
      </CenterContentGrid>
      <GridItem m={2} t={8} d={6}>
        <Img
          src={imagePath}
          alt="Imagem principal da seção" //TODO put as a token at CMS
        />
      </GridItem>
    </Grid>
  </Section>
);

export default StandardModelSection;
