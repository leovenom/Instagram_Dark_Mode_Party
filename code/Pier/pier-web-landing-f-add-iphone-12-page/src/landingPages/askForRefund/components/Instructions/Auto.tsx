import * as React from "react";
import styled from "styled-components";

import Grid from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";

import { autoTracker } from "helpers/mixpanelTracker";
import Text from "ui/Text";
import Button from "ui/Button";
import OrderedList from "ui/OrderedList";
import breakpoints from "ui/theme/breakpoints";
import Router from "next/router";
import Section from "landingPages/sharedSections/Section";

import config from "../../data";

const Container = styled.div`
  ${breakpoints.tablet} {
    width: 392px;
  }
`;

const StyledOrderedList = styled(OrderedList)`
  margin-left: 8px;
  li {
    margin-bottom: 32px;
  }
`;

interface AutoProps {
  isEmbedded?: boolean;
}

const Auto: React.FC<AutoProps> = ({ isEmbedded = false }) => {
  React.useEffect(() => {
    autoTracker.trackScreen("Claim Request");
  }, []);

  const handleGoToClaimFirstStep = () =>
    Router.push(config.auto.goToUrl(isEmbedded));

  return (
    <Section pt={80} pb={120}>
      <Grid>
        <GridItem m={2} t={8} d={12} alignItems="center">
          <Container>
            <Text variant="section" mb={40} align="center">
              {config.auto.title}
            </Text>
            <StyledOrderedList>
              <li>{config.auto.step_1}</li>
              <li>{config.auto.step_2}</li>
              <li>{config.auto.step_3}</li>
            </StyledOrderedList>
            <Button onClick={handleGoToClaimFirstStep} mt={48} fullWidth>
              {config.mainContent.cta}
            </Button>
          </Container>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default Auto;
