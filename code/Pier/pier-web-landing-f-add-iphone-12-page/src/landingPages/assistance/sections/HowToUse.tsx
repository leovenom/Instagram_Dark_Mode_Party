import styled from "styled-components";

import Grid from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";
import Text from "ui/Text";
import Section from "landingPages/sharedSections/Section";
import OrderedList from "ui/OrderedList";
import breakpoints from "ui/theme/breakpoints";

const Image = styled.img`
  margin: 24px auto;
`;

const StyledGridItem = styled(GridItem)`
  h3 {
    text-align: center;
    ${breakpoints.tablet} {
      text-align: start;
    }
  }

  margin-top: 40px;
  ${breakpoints.desktop} {
    margin-top: 0;
    margin-left: 80px;
  }
`;

interface Props {
  title: string;
  details: string[];
}

const HowToUseSection = ({ title, details }: Props) => {
  return (
    <Section>
      <Grid>
        <GridItem m={2} t={4} d={6} bg="secondary100" justifyContent="center">
          <Image src="/static_assets/images/rebranding/yellow-circle.svg" />
        </GridItem>
        <StyledGridItem m={2} t={4} d={6} justifyContent="center">
          <Text variant="sectionSecondary" mb={24}>
            {title}
          </Text>
          <OrderedList>
            {details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </OrderedList>
        </StyledGridItem>
      </Grid>
    </Section>
  );
};

export default HowToUseSection;
