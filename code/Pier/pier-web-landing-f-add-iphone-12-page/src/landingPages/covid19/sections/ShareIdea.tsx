import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Section from "../../sharedSections/Section";
import Text from "ui/Text";
import ExternalLink from "ui/ExternalLink";

const WOMAN_WITH_SPYGLASS = "/static_assets/images/woman-with-spyglass.svg";

interface Cta {
  text: string;
  url: string;
}

interface Props {
  title: string;
  description: string;
  cta: Cta;
}

const SpyGlassImg = styled.img`
  width: 300px;
`;

const StyledGridItem = styled.div`
  justify-self: center;
  align-self: center;
  grid-column-end: span 2;
  ${breakpoints.tablet} {
    grid-column-end: span 4;
  }
  ${breakpoints.desktop} {
    grid-column-end: span 6;
  }
`;

const ShareIdeia = ({ title, description, cta }: Props) => (
  <Section bg="white">
    <Grid>
      <GridItem m={2} t={4} d={6} maxWidth={560}>
        <Text variant="section" mb={32}>
          {title}
        </Text>
        <Text variant="bodyLarge" mb={40}>
          {description}
        </Text>
        <ExternalLink href={cta.url} withArrow mb={65}>
          {cta.text}
        </ExternalLink>
      </GridItem>
      <StyledGridItem>
        <SpyGlassImg src={WOMAN_WITH_SPYGLASS} alt="Mulher com luneta" />
      </StyledGridItem>
    </Grid>
  </Section>
);

export default ShareIdeia;
