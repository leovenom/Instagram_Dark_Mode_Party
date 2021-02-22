import { nextPipeUpdateAt } from "helpers/pipePlansValues";
import * as React from "react";

import Text from "ui/Text";
import { PriceInfo, SamePrice } from "./components";

import data from "./data";
import { CardContainer, CardHeader, CardContent } from "./styles";

interface CardPriceProps {
  smartphoneSelected: {
    plansValues: object;
    name: string;
    memory: string;
    model: {
      name: string;
    };
  };
  variant: string;
  hasTheSamePrice?: boolean;
}

const CardPrice: React.FC<CardPriceProps> = ({
  smartphoneSelected,
  variant,
  hasTheSamePrice = false,
}) => {
  const date =
    variant === "nextPrice"
      ? nextPipeUpdateAt.format("DD/MM/YYYY")
      : "23/11/2020";
  return (
    <CardContainer>
      <CardHeader>
        <Text variant="subtitleSmall" bold color="primary" mb={8}>
          {data?.[variant]?.title}
        </Text>
        <Text variant="bodySmall" color="gray600">
          {data?.[variant]?.subtitle(date)}
        </Text>
      </CardHeader>

      <CardContent>
        {hasTheSamePrice ? (
          <SamePrice />
        ) : (
          <PriceInfo
            smartphoneSelected={smartphoneSelected}
            variant={variant}
          />
        )}
      </CardContent>
    </CardContainer>
  );
};

export default CardPrice;
