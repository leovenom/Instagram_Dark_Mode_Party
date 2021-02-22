import * as React from "react";

import Text from "ui/Text";
import data from "../data";

import {
  getArrowsUiOrientation,
  getMonthlyValue,
  getInsuredValue,
} from "../../utils";
import { CardRow, CardRowItem } from "../styles";

interface PriceInfo {
  smartphoneSelected: {
    plansValues: object;
    name: string;
    memory: string;
    model: {
      name: string;
    };
  };
  variant: string;
}

const PriceInfo: React.FC<PriceInfo> = ({ smartphoneSelected, variant }) => {
  const arrowsOrientation = getArrowsUiOrientation({
    smartphoneSelected,
    variant,
  });

  return (
    <>
      <CardRow>
        <CardRowItem>
          <Text variant="bodySmall" color="gray600">
            {data?.plan}
          </Text>
        </CardRowItem>
        <CardRowItem>
          <Text
            variant="bodySmallest"
            bold
            transform="uppercase"
            color="primary400"
          >
            {data?.economic}
          </Text>
        </CardRowItem>
        <CardRowItem>
          <Text
            variant="bodySmallest"
            bold
            transform="uppercase"
            color="primary400"
          >
            {data?.premium}
          </Text>
        </CardRowItem>
      </CardRow>

      <CardRow>
        <CardRowItem>
          <Text variant="bodySmall" color="gray600">
            {data?.monthlyPayment}
          </Text>
        </CardRowItem>
        <CardRowItem arrow={arrowsOrientation?.monthly?.economic}>
          <Text variant="bodySmall" color="text">
            {getMonthlyValue("economic", smartphoneSelected)?.formatted}
          </Text>
        </CardRowItem>
        <CardRowItem arrow={arrowsOrientation?.monthly?.premium}>
          <Text variant="bodySmall" color="text">
            {getMonthlyValue("premium", smartphoneSelected)?.formatted}
          </Text>
        </CardRowItem>
      </CardRow>

      <CardRow>
        <CardRowItem>
          <Text variant="bodySmall" color="gray600">
            {data?.totalInsuranceValue}
          </Text>
        </CardRowItem>
        <CardRowItem arrow={arrowsOrientation?.insuredValue?.economic}>
          <Text variant="bodySmall" color="text">
            {getInsuredValue("economic", smartphoneSelected)?.formatted}
          </Text>
        </CardRowItem>
        <CardRowItem arrow={arrowsOrientation?.insuredValue?.premium}>
          <Text variant="bodySmall" color="text">
            {getInsuredValue("premium", smartphoneSelected)?.formatted}
          </Text>
        </CardRowItem>
      </CardRow>

      <Text variant="body" align="center">
        {data.insuranceValueUsed}{" "}
        <strong>
          {getInsuredValue("premium", smartphoneSelected)?.formatted}
        </strong>
      </Text>
    </>
  );
};

export default PriceInfo;
