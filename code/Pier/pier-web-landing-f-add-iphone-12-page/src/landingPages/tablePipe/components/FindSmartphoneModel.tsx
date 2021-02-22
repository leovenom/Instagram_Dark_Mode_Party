import * as React from "react";

import Text from "ui/Text";
import Button from "ui/Button";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import data from "../data";

interface FindSmartphoneModelProps {
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

const FindSmartphoneModel: React.FC<FindSmartphoneModelProps> = ({
  toggleSmartphoneSelector,
  smartphoneSelected,
}) => {
  if (smartphoneSelected) {
    return null;
  }
  const handleOpenModalSmartphoneModels = () => {
    smartphoneTracker.trackButton("Tabela Pipe Prices");
    toggleSmartphoneSelector();
  };

  return (
    <>
      <Text variant="section" align="center" mb={24}>
        {data.findSmartphoneModel.title}
      </Text>
      <Text variant="body" align="center" mb={40}>
        {data.findSmartphoneModel.subtitle}
      </Text>
      <Button size="small" onClick={handleOpenModalSmartphoneModels}>
        {data.findSmartphoneModel.cta}
      </Button>
    </>
  );
};

export default FindSmartphoneModel;
