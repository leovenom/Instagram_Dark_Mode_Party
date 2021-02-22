import * as React from "react";

import { ExtraOptions, ListItem } from "../components";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { MODAL_STEPS } from "helpers/constants";
import { filterModelsByFakeDoor, setSmartphoneModel } from "../utils/functions";
import { ModelsContainer } from "../styles";

interface Props {
  smartphoneModels: any;
  currentPhoneState: any;
  modalKey: string;
  setPhone: (value) => void;
  toggleFakeDoor: () => void;
  onModelSelectByFakeDoor: (value) => void;
  hideModal: () => void;
  toggleAnotherModel: () => void;
  withFakeDoor?: boolean;
  eventIdentifier?: string;
}

const SmartphoneModelModal: React.FC<Props> = ({
  smartphoneModels,
  currentPhoneState,
  modalKey,
  setPhone,
  toggleFakeDoor,
  onModelSelectByFakeDoor,
  hideModal,
  toggleAnotherModel,
  withFakeDoor,
  eventIdentifier = "",
}) => {
  React.useEffect(() => {
    smartphoneTracker.trackScreen(`${eventIdentifier} ChooseModel`);
  }, []);

  const getModelsOfTheSelectedLine = (): any =>
    currentPhoneState.serie
      ? smartphoneModels.find(({ name }) => name === currentPhoneState.serie)
      : [];

  const filteredModels = (): any =>
    filterModelsByFakeDoor({
      models: getModelsOfTheSelectedLine()?.models,
      withFakeDoor,
      dataType: "memories",
    });

  const handleSelectSmartphoneModel = (model) => {
    smartphoneTracker.track(`${eventIdentifier} ChooseModel Item Selected`, {
      model: model.name,
    });

    const isModelPlanAvailable = !!model.memories;
    if (isModelPlanAvailable) {
      return setSmartphoneModel({ model, currentPhoneState, setPhone });
    }

    onModelSelectByFakeDoor({
      manufacturer: currentPhoneState.manufacturer,
      model: model.name,
    });

    hideModal();
    toggleFakeDoor();
  };

  return (
    <ModelsContainer
      data-testid="smartphone-model-modal"
      animate
      key={modalKey}
    >
      {filteredModels().map((model) => (
        <ListItem
          key={model.name}
          onClick={() => handleSelectSmartphoneModel(model)}
        >
          {model.name}
        </ListItem>
      ))}
      <ExtraOptions
        extraOptionType={MODAL_STEPS.SERIES}
        hideModal={hideModal}
        toggleAnotherModel={toggleAnotherModel}
      />
    </ModelsContainer>
  );
};

export default SmartphoneModelModal;
