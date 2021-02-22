import * as React from "react";

import SmartphoneContainerModal from "./SmartphoneContainerModal";
import {
  AnotherModelModal,
  AnotherModelSuccessSubmitionModal,
  FakeDoorModal,
  FakeDoorSuccessSubmitionModal,
} from "./modals";

import useModal from "hooks/useModal";

interface Props {
  isSmartphoneSelectorOpen: boolean;
  toggleSmartphoneSelector: () => void;
  setSelectedSmartphone: (value: any) => void;
  scrollToChooseYourPlan: () => void;
  withFakeDoor?: boolean;
  eventIdentifier?: string;
  plansValuesData?: object;
}

const SelectSmartphoneFlow: React.FC<Props> = ({
  scrollToChooseYourPlan,
  setSelectedSmartphone,
  isSmartphoneSelectorOpen,
  toggleSmartphoneSelector,
  withFakeDoor,
  eventIdentifier = "",
  plansValuesData = null,
}) => {
  const [fakeDoorModel, setFakeDoorModel] = React.useState({
    manufacturer: "",
    model: "",
  });
  const { isOpen: isAnotherModelOpen, toggle: toggleAnotherModel } = useModal();
  const {
    isOpen: isAnotherModelSuccessSubmitionOpen,
    toggle: toggleAnotherModelSuccessSubmition,
  } = useModal();
  const {
    isOpen: isFakerDoorModalOpen,
    toggle: toggleFakeDoorModal,
  } = useModal();
  const {
    isOpen: isFakerDoorSuccessSubmitionModalOpen,
    toggle: toggleFakeDoorSuccessSubmitionModal,
  } = useModal();

  return (
    <>
      <SmartphoneContainerModal
        withFakeDoor={withFakeDoor}
        toggleAnotherModel={toggleAnotherModel}
        toggleFakeDoor={toggleFakeDoorModal}
        onModelSelectByFakeDoor={setFakeDoorModel}
        scrollToChooseYourPlan={scrollToChooseYourPlan}
        setSelectedSmartphone={setSelectedSmartphone}
        modalIsOpen={isSmartphoneSelectorOpen}
        hideModal={toggleSmartphoneSelector}
        eventIdentifier={eventIdentifier}
        plansValuesData={plansValuesData}
      />

      <AnotherModelModal
        isOpen={isAnotherModelOpen}
        hide={toggleAnotherModel}
        toggleAnotherModelSuccessSubmition={toggleAnotherModelSuccessSubmition}
      />

      <AnotherModelSuccessSubmitionModal
        isOpen={isAnotherModelSuccessSubmitionOpen}
        hide={toggleAnotherModelSuccessSubmition}
      />

      <FakeDoorModal
        isOpen={isFakerDoorModalOpen}
        hide={toggleFakeDoorModal}
        model={fakeDoorModel}
        toggleFakeDoorSuccessSubmitionModal={
          toggleFakeDoorSuccessSubmitionModal
        }
      />

      <FakeDoorSuccessSubmitionModal
        isOpen={isFakerDoorSuccessSubmitionModalOpen}
        hide={toggleFakeDoorSuccessSubmitionModal}
      />
    </>
  );
};

export default SelectSmartphoneFlow;
