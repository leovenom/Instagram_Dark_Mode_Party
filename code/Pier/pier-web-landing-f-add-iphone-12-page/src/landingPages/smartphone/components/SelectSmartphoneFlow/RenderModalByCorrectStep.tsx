import * as React from "react";

import {
  SmartphoneBrandModal,
  SmartphoneModelModal,
  SmartphoneMemoryModal,
} from "./modals";

import toSnakeUppercase from "helpers/toSnakeUppercase";
import PLANS_VALUES from "helpers/plansValues";
import { SmartphoneSelectorSteps } from "./utils/constants";
import { defineModalCurrentStep } from "./utils/functions";

interface Props {
  smartphoneModels: any;
  currentPhoneState: any;
  setPhone: (value) => void;
  toggleFakeDoor: () => void;
  onModelSelectByFakeDoor: (value) => void;
  hideModal: () => void;
  toggleAnotherModel: () => void;
  setSelectedSmartphone: (value) => void;
  scrollToChooseYourPlan: () => void;
  withFakeDoor?: boolean;
  eventIdentifier?: string;
  plansValuesData?: object;
}

const RenderModalByCorrectStep: React.FC<Props> = ({
  smartphoneModels,
  currentPhoneState,
  setPhone,
  toggleFakeDoor,
  onModelSelectByFakeDoor,
  hideModal,
  toggleAnotherModel,
  setSelectedSmartphone,
  scrollToChooseYourPlan,
  withFakeDoor,
  eventIdentifier = "",
  plansValuesData,
}) => {
  const {
    BRAND_SELECTED,
    MEMORY_SELECTED,
    MODEL_SELECTED,
    NOT_SELECTED,
  } = SmartphoneSelectorSteps;

  const currentModalStep = defineModalCurrentStep({ currentPhoneState });

  switch (currentModalStep) {
    case BRAND_SELECTED: {
      return (
        <SmartphoneModelModal
          modalKey="two"
          smartphoneModels={smartphoneModels}
          currentPhoneState={currentPhoneState}
          setPhone={setPhone}
          toggleFakeDoor={toggleFakeDoor}
          onModelSelectByFakeDoor={onModelSelectByFakeDoor}
          hideModal={hideModal}
          toggleAnotherModel={toggleAnotherModel}
          withFakeDoor={withFakeDoor}
          eventIdentifier={eventIdentifier}
        />
      );
    }
    case MODEL_SELECTED: {
      return (
        <SmartphoneMemoryModal
          modalKey="three"
          currentPhoneState={currentPhoneState}
          setPhone={setPhone}
          hideModal={hideModal}
          toggleAnotherModel={toggleAnotherModel}
          eventIdentifier={eventIdentifier}
        />
      );
    }
    case MEMORY_SELECTED: {
      const selectedModel = `${toSnakeUppercase(
        currentPhoneState.model.name
      )}_${currentPhoneState.memory}`;

      const plansValues = plansValuesData
        ? plansValuesData[selectedModel]
        : PLANS_VALUES[selectedModel];

      setSelectedSmartphone({ ...currentPhoneState, plansValues });

      hideModal();
      scrollToChooseYourPlan();
      return null;
    }

    case NOT_SELECTED: {
      return (
        <SmartphoneBrandModal
          smartphoneModels={smartphoneModels}
          modalKey="one"
          currentPhoneState={currentPhoneState}
          setPhone={setPhone}
          hideModal={hideModal}
          toggleAnotherModel={toggleAnotherModel}
          withFakeDoor={withFakeDoor}
          eventIdentifier={eventIdentifier}
        />
      );
    }

    default:
      return null;
  }
};

export default RenderModalByCorrectStep;
