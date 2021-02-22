import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";
import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import ExternalLink from "ui/ExternalLink";
import Section from "../../sharedSections/Section";
import Text from "ui/Text";

interface Cta {
  text: string;
  url: string;
}

interface Props {
  title: string;
  description: string;
  cta: Cta;
  hashtagText: string;
}

const StyledHashTag = styled.span`
  color: ${colors.secondary};
  font-size: 32px;
  ${breakpoints.desktop} {
    font-size: 45px;
  }
  font-weight: bold;
`;

const StyledHashTagText = styled.span`
  font-size: 32px;
  ${breakpoints.desktop} {
    font-size: 45px;
  }
  font-weight: bold;
  background: ${({ theme }) => theme.colors.secondaryGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
    font-size: 45;
  }
`;

const OurPosition = ({ title, description, cta, hashtagText }: Props) => (
  <Section bg="white">
    <Grid>
      <GridItem m={2} t={4} d={6}>
        <Text variant="section" mb={32}>
          {title}
        </Text>
        <Text variant="bodyLarge" mb={65}>
          {description}
        </Text>
        <ExternalLink href={cta.url} withArrow mb={65}>
          {cta.text}
        </ExternalLink>
      </GridItem>
      <StyledGridItem>
        <StyledHashTag>#</StyledHashTag>
        <StyledHashTagText>{hashtagText}</StyledHashTagText>
      </StyledGridItem>
    </Grid>
  </Section>
);

export default OurPosition;
