import styled from "styled-components";

import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Text from "ui/Text";
import Markdown from "ui/Markdown";

import Section from "landingPages/sharedSections/Section";

interface Props {
  title: string;
  bodyText?: string;
  image?: {
    src: string;
    description: string;
  };
  bodyTextSecondary?: string;
}

const Image = styled.img`
  margin: 12px 0;
  max-width: 100%;
`;

const SectionContainer = styled.div`
  max-width: 808px;
`;

const TextWithCenteredImage = ({
  title,
  bodyText,
  image,
  bodyTextSecondary,
}: Props) => (
  <Section pb={20} pt={20}>
    <SectionContainer>
      <Grid>
        <GridItem m={2} t={8} d={12} alignItems="center">
          <Text variant="section" align="center" mb={24}>
            {title}
          </Text>
        </GridItem>

        <GridItem>{bodyText && <Markdown>{bodyText}</Markdown>}</GridItem>

        <GridItem m={2} t={8} d={6}>
          {image && <Image src={image.src} alt={image.description} />}
        </GridItem>

        <GridItem m={2} t={8} d={6}>
          {bodyTextSecondary && <Markdown>{bodyTextSecondary}</Markdown>}
        </GridItem>
      </Grid>
    </SectionContainer>
  </Section>
);

export default TextWithCenteredImage;
