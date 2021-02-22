import * as React from "react";

import ListItem from "./ListItem";

import { MODAL_STEPS } from "helpers/constants";
import {
  HOW_TO_IDENTIFY_MEMORY_URL,
  HOW_TO_IDENTIFY_MODEL_URL,
} from "../utils/constants";

interface Props {
  extraOptionType: string;
  hideModal: () => void;
  toggleAnotherModel: () => void;
}

const ExtraOptions: React.FC<Props> = ({
  extraOptionType,
  hideModal,
  toggleAnotherModel,
}) => {
  const openUrlInNewTab = (url: string) => window.open(url, "_blank");
  const handleToggleAnotherModel = () => {
    toggleAnotherModel();
    hideModal();
  };

  if (extraOptionType === MODAL_STEPS.MEMORY) {
    return (
      <ListItem onClick={() => openUrlInNewTab(HOW_TO_IDENTIFY_MEMORY_URL)}>
        Não Sei
      </ListItem>
    );
  }

  return (
    <>
      <ListItem onClick={() => handleToggleAnotherModel()}>
        Outro Modelo
      </ListItem>
      <ListItem onClick={() => openUrlInNewTab(HOW_TO_IDENTIFY_MODEL_URL)}>
        Não Sei
      </ListItem>
    </>
  );
};

export default ExtraOptions;
