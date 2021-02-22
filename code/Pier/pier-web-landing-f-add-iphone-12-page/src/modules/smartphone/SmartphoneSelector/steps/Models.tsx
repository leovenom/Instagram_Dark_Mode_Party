import { useEffect } from "react";

import { HelpBar, ListItem, TemplateStructure } from "../components";
import { withModalManagementActions } from "modules/shared/ModalManagement";
import AnotherModelForm from "modules/shared/AnotherModelForm";

import { sortByPriority } from "../utils";
import { smartphoneTracker } from "helpers/mixpanelTracker";

const Models = ({ context, selectModel, openModal }) => {
  useEffect(() => {
    smartphoneTracker.trackScreen("ChooseModel");
  }, []);

  const { filteredDevices } = context;
  const modelsList = Object.values(filteredDevices.models);

  const handleOpenWaitingListModal = () => {
    smartphoneTracker.trackLink("ChooseModel Other Model");
    const { selected } = context;
    openModal({
      id: "another-model-form",
      isFullScreen: false,
      component: <AnotherModelForm manufacturer={selected.brand} />,
    });
  };

  const triggerEventOnClick = () => {
    smartphoneTracker.trackLink("ChooseModel Dont Know Model");
  };

  const handleSelectModel = (value: string) => {
    smartphoneTracker.track("ChooseModel Item Selected", { model: value });
    selectModel(value);
  };

  return (
    <>
      <TemplateStructure.Title testId="models-step">
        <strong>Qual o modelo?</strong>
      </TemplateStructure.Title>
      <TemplateStructure.List>
        {modelsList
          .sort(sortByPriority)
          .map((model: { name: string; priority: number }) => (
            <ListItem
              key={model.name}
              value={model.name}
              onClick={handleSelectModel}
            />
          ))}
        <ListItem value="Outro Modelo" onClick={handleOpenWaitingListModal} />
      </TemplateStructure.List>
      <HelpBar
        label={"Não sabe seu modelo?"}
        onLinkClick={triggerEventOnClick}
        href="https://ajuda.pier.digital/pt-BR/articles/2963142-como-identificar-o-modelo-de-meu-aparelho"
      />
    </>
  );
};

export default withModalManagementActions(Models);
