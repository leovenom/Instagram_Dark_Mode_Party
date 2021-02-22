import * as React from "react";

import { ListItem, ExtraOptions } from "../components";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { setSmartphoneMemory } from "../utils/functions";
import { MODAL_STEPS } from "helpers/constants";

import { ModelsContainer } from "../styles";

interface Props {
  currentPhoneState: any;
  modalKey: string;
  setPhone: (value) => void;
  hideModal: () => void;
  toggleAnotherModel: () => void;
  eventIdentifier?: string;
}

const SmartphoneMemoryModal: React.FC<Props> = ({
  currentPhoneState,
  hideModal,
  toggleAnotherModel,
  setPhone,
  modalKey,
  eventIdentifier = "",
}) => {
  React.useEffect(() => {
    smartphoneTracker.trackScreen(`${eventIdentifier} ChooseModelCapacity`);
  }, []);

  const handleSelectMemory = (memory) => {
    smartphoneTracker.track(
      `${eventIdentifier} ChooseModelCapacity Item Selected`,
      {
        capacity: memory,
      }
    );
    setSmartphoneMemory({ memory, setPhone, currentPhoneState });
  };

  return (
    <ModelsContainer
      data-testid="smartphone-memory-modal"
      animate
      key={modalKey}
    >
      {currentPhoneState.model?.memories?.map((memory) => (
        <ListItem key={memory} onClick={() => handleSelectMemory(memory)}>
          {memory}
        </ListItem>
      ))}
      <ExtraOptions
        extraOptionType={MODAL_STEPS.MEMORY}
        hideModal={hideModal}
        toggleAnotherModel={toggleAnotherModel}
      />
    </ModelsContainer>
  );
};

export default SmartphoneMemoryModal;
