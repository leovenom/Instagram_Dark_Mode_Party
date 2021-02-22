import * as React from "react";
import styled from "styled-components";

import Grid from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";

import Text from "ui/Text";
import Button from "ui/Button";
import Router from "next/router";
import Section from "landingPages/sharedSections/Section";
import colors from "ui/theme/colors";
import ListWithIcon from "ui/ListWithIcon";
import { smartphoneTracker } from "helpers/mixpanelTracker";

import config from "../../data";

const Container = styled.div`
  max-width: 496px;
  width: 100%;
`;

const ActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxDisclaimer = styled.div`
  // Box Model
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 32px 0;
  padding: 18px 10px;
  width: 100%;

  // Visual
  background-color: ${colors.yellow400};
  border-radius: 4px;

  h3,
  p {
    // Typography
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    color: ${colors.text};

    // Box Model
    margin: 0 0 5px 0;
  }

  p {
    // Box Model
    margin: 0;

    // Typography
    font-weight: 400;
  }
`;

interface SmartphoneProps {
  isEmbedded?: boolean;
}

const Smartphone: React.FC<SmartphoneProps> = ({ isEmbedded = false }) => {
  React.useEffect(() => {
    smartphoneTracker.trackScreen("Claim Request");
  }, []);

  const handleGoToClaimFirstStep = () =>
    Router.push(config.smartphone.goToUrl(isEmbedded));

  return (
    <Section pt={80} pb={120}>
      <Grid>
        <GridItem m={2} t={8} d={12} alignItems="center">
          <Container>
            <Text variant="section" mb={40} align="center">
              {config.smartphone.title}
            </Text>
            <ListWithIcon items={config.smartphone.instructions} />
            <BoxDisclaimer>
              <h3>
                <strong>{config.smartphone.disclaimer.title}</strong>
              </h3>
              <p>{config.smartphone.disclaimer.desc}</p>
            </BoxDisclaimer>
            <ActionButton>
              <Button onClick={handleGoToClaimFirstStep}>
                {config.mainContent.cta}
              </Button>
            </ActionButton>
          </Container>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default Smartphone;
