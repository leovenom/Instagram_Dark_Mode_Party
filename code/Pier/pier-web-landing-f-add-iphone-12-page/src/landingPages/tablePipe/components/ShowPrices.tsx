import * as React from "react";

import Text from "ui/Text";
import GridItem from "ui/GridItem";
import Grid from "ui/Grid";
import CardPrice from "./CardPrice";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { getNewPriceOfPlan } from "./utils";
import { SmartphoneImg, StyledLink } from "../styles";
import data from "../data";

interface ShowPriceProps {
  smartphoneSelected: {
    plansValues: object;
    name: string;
    memory: string;
    model: {
      name: string;
    };
  };
  toggleSmartphoneSelector: () => void;
}

const ShowPrices: React.FC<ShowPriceProps> = ({
  smartphoneSelected,
  toggleSmartphoneSelector,
}) => {
  React.useEffect(() => {
    smartphoneSelected && smartphoneTracker.trackScreen("Tabela Pipe Plans");
  }, [smartphoneSelected, smartphoneTracker]);

  const handleChangeSmartphoneSelected = () => {
    smartphoneTracker.trackButton("Tabela Pipe Select Other Model");
    toggleSmartphoneSelector();
  };

  if (!smartphoneSelected) {
    return null;
  }

  const newPlanValues = getNewPriceOfPlan({ smartphoneSelected });
  return (
    <Grid>
      <GridItem m={2} t={8} d={12} alignItems="center">
        <SmartphoneImg
          src={data.showPrices.image}
          alt={data.showPrices.imageDescription}
        />
        <Text variant="body" align="center" mb={[24, 24, 6]}>
          {data.showPrices.subtitle}
        </Text>
        <Text variant="section" align="center" mb={[40, 40, 56]}>
          {smartphoneSelected?.model?.name} {smartphoneSelected?.memory}
        </Text>
      </GridItem>
      <GridItem
        m={2}
        t={8}
        d={12}
        mb={32}
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <GridItem
            m={2}
            t={8}
            d={6}
            mb={[40, 40, 0]}
            alignItems="center"
            justifyContent="center"
          >
            <CardPrice
              smartphoneSelected={smartphoneSelected}
              variant="today"
            />
          </GridItem>
          <GridItem
            m={2}
            t={8}
            d={6}
            mb={[0, 0, 0]}
            alignItems="center"
            justifyContent="center"
          >
            <CardPrice
              smartphoneSelected={newPlanValues || smartphoneSelected}
              variant="nextPrice"
              hasTheSamePrice={!newPlanValues}
            />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem m={2} t={8} d={12} alignItems="center">
        <StyledLink withArrow onClick={handleChangeSmartphoneSelected}>
          {data.showPrices.changeModel}
        </StyledLink>
      </GridItem>
    </Grid>
  );
};

export default ShowPrices;
