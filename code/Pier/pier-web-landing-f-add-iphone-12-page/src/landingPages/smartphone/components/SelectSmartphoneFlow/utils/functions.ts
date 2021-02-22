import { smartphoneTracker } from "helpers/mixpanelTracker";
import { SmartphoneSelectorSteps } from "./constants";

const trackDeviceChoose = ({ currentPhoneState, eventIdentifier = "" }) => {
  if (currentPhoneState && currentPhoneState.memory) return;
  if (currentPhoneState && currentPhoneState.model)
    return smartphoneTracker.trackScreen(
      `${eventIdentifier} ChooseModelCapacity`
    );
  if (currentPhoneState && currentPhoneState.serie)
    return smartphoneTracker.trackScreen(`${eventIdentifier} ChooseModel`);
  return smartphoneTracker.trackScreen(`${eventIdentifier} ChooseBrand`);
};

const setSmartphoneModel = ({ model, setPhone, currentPhoneState }) =>
  setPhone({ ...currentPhoneState, model });

const setSmartphoneMemory = ({ memory, setPhone, currentPhoneState }) =>
  setPhone({ ...currentPhoneState, memory });

const defineModalCurrentStep = ({ currentPhoneState }) => {
  if (currentPhoneState?.memory) {
    return SmartphoneSelectorSteps.MEMORY_SELECTED;
  }

  if (currentPhoneState?.model) {
    return SmartphoneSelectorSteps.MODEL_SELECTED;
  }

  if (currentPhoneState?.serie) {
    return SmartphoneSelectorSteps.BRAND_SELECTED;
  }

  return SmartphoneSelectorSteps.NOT_SELECTED;
};

const filterModelsByFakeDoor = ({ models = [], withFakeDoor, dataType }) =>
  models.reduce((modelsToShow, current) => {
    if (withFakeDoor) {
      return [...modelsToShow, current];
    }

    if (dataType === "memories") {
      return current?.memories ? [...modelsToShow, current] : modelsToShow;
    }

    return current?.isFakeDoor ? modelsToShow : [...modelsToShow, current];
  }, []);

export {
  trackDeviceChoose,
  setSmartphoneModel,
  setSmartphoneMemory,
  filterModelsByFakeDoor,
  defineModalCurrentStep,
};
