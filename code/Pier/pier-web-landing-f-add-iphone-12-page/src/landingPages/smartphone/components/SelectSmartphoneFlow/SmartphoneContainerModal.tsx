import { useState, useEffect } from "react";
import * as React from "react";

import FullScreenModal from "ui/Modal/FullScreenModal";
import RenderModalByCorrectStep from "./RenderModalByCorrectStep";

import smartphoneModels from "helpers/smartphoneModels";
import { Container } from "./styles";

interface Props {
  modalIsOpen: boolean;
  hideModal: () => void;
  setSelectedSmartphone: (value: any) => void;
  scrollToChooseYourPlan: () => void;
  toggleAnotherModel: () => void;
  toggleFakeDoor?: () => void;
  withFakeDoor?: boolean;
  onModelSelectByFakeDoor?: (value: any) => void;
  eventIdentifier?: string;
  plansValuesData?: object;
}

const SmartphoneContainerModal: React.FC<Props> = ({
  modalIsOpen,
  hideModal,
  setSelectedSmartphone,
  scrollToChooseYourPlan,
  toggleAnotherModel,
  toggleFakeDoor,
  withFakeDoor,
  onModelSelectByFakeDoor,
  eventIdentifier = "",
  plansValuesData,
}) => {
  const [currentPhoneState, setPhone] = useState({
    serie: null,
    deviceOs: null,
    model: null,
    memory: null,
    manufacturer: null,
  });

  const hideFullScreenModal = () => {
    setPhone({
      serie: null,
      deviceOs: null,
      model: null,
      memory: null,
      manufacturer: null,
    });
    hideModal();
  };

  return (
    <FullScreenModal
      blockScroll
      isOpen={modalIsOpen}
      hide={hideFullScreenModal}
      contentLabel="seletor de modelos de smarphone que possuem cobertura da Pier"
    >
      <Container>
        <RenderModalByCorrectStep
          smartphoneModels={smartphoneModels}
          currentPhoneState={currentPhoneState}
          setPhone={setPhone}
          toggleFakeDoor={toggleFakeDoor}
          onModelSelectByFakeDoor={onModelSelectByFakeDoor}
          hideModal={hideFullScreenModal}
          toggleAnotherModel={toggleAnotherModel}
          setSelectedSmartphone={setSelectedSmartphone}
          scrollToChooseYourPlan={scrollToChooseYourPlan}
          withFakeDoor={withFakeDoor}
          eventIdentifier={eventIdentifier}
          plansValuesData={plansValuesData}
        />
      </Container>
    </FullScreenModal>
  );
};

export default SmartphoneContainerModal;
