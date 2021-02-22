import * as React from "react";

import { ListItem, ExtraOptions } from "../components";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { MODAL_STEPS } from "helpers/constants";
import { ModelsContainer } from "../styles";
import { filterModelsByFakeDoor } from "../utils/functions";

interface Props {
  smartphoneModels: any;
  currentPhoneState: any;
  modalKey: string;
  setPhone: (value) => void;
  hideModal: () => void;
  toggleAnotherModel: () => void;
  withFakeDoor?: boolean;
  eventIdentifier?: string;
}

const SmartphoneBrandModal: React.FC<Props> = ({
  smartphoneModels,
  currentPhoneState,
  modalKey,
  setPhone,
  hideModal,
  toggleAnotherModel,
  withFakeDoor,
  eventIdentifier = "",
}) => {
  React.useEffect(() => {
    smartphoneTracker.trackScreen(`${eventIdentifier} ChooseBrand`);
  }, []);

  const handleSelectBrand = (name, deviceOs, manufacturer) => {
    smartphoneTracker.track(`${eventIdentifier} ChooseBrand Item Selected`, {
      brand: name,
    });
    setPhone({
      ...currentPhoneState,
      serie: name,
      deviceOs,
      manufacturer,
    });
  };

  const filteredModels = (): any =>
    filterModelsByFakeDoor({
      models: smartphoneModels,
      withFakeDoor,
      dataType: "isFakeDoor",
    });

  return (
    <ModelsContainer data-testid="smartphone-brand-modal" key={modalKey}>
      <>
        {filteredModels().map(({ name, deviceOs, manufacturer }) => (
          <ListItem
            key={name}
            onClick={() => handleSelectBrand(name, deviceOs, manufacturer)}
          >
            {name}
          </ListItem>
        ))}
        <ExtraOptions
          extraOptionType={MODAL_STEPS.MODELS}
          hideModal={hideModal}
          toggleAnotherModel={toggleAnotherModel}
        />
      </>
    </ModelsContainer>
  );
};

export default SmartphoneBrandModal;
