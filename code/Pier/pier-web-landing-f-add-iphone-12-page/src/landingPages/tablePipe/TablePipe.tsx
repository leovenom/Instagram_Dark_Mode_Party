import { useEffect, useState } from "react";

import SmartphoneLandingLayout from "layouts/SmartphoneLandingLayout";
import {
  FindSmartphoneModel,
  Header,
  Instructions,
  Faq,
  ShowPrices,
} from "./components";
import useModal from "hooks/useModal";
import SelectSmartphoneFlow from "landingPages/smartphone/components/SelectSmartphoneFlow";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import OLD_PLANS_VALUES from "helpers/oldPlansValues";

import { MainContainer, StyledSection } from "./styles";

const TablePipe = () => {
  const {
    isOpen: isSmartphoneSelectorOpen,
    toggle: toggleSmartphoneSelector,
  } = useModal();

  useEffect(() => {
    smartphoneTracker.trackScreen("Tabela Pipe");
  }, []);

  const [smartphoneSelected, setSelectedSmartphone] = useState(null);

  return (
    <SmartphoneLandingLayout
      pageTitle="Tabela Pipe de Celulares: confira os valores de reembolso - Pier"
      canonicalLink="https://www.pier.digital/seguro-celular/tabela-pipe"
    >
      <Header />
      <MainContainer>
        <Instructions />
        <StyledSection bg="secondary100">
          <FindSmartphoneModel
            smartphoneSelected={smartphoneSelected}
            toggleSmartphoneSelector={toggleSmartphoneSelector}
          />
          <ShowPrices
            smartphoneSelected={smartphoneSelected}
            toggleSmartphoneSelector={toggleSmartphoneSelector}
          />
        </StyledSection>
        <Faq />
      </MainContainer>
      <SelectSmartphoneFlow
        isSmartphoneSelectorOpen={isSmartphoneSelectorOpen}
        toggleSmartphoneSelector={toggleSmartphoneSelector}
        scrollToChooseYourPlan={() => "teste"}
        setSelectedSmartphone={setSelectedSmartphone}
        eventIdentifier="Tabela Pipe"
        plansValuesData={OLD_PLANS_VALUES}
      />
    </SmartphoneLandingLayout>
  );
};

export default TablePipe;
