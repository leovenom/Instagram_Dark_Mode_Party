import { useEffect } from "react";

import { HelpBar, ListItem, TemplateStructure } from "../components";
import { withModalManagementActions } from "modules/shared/ModalManagement";

import AnotherModelForm from "modules/shared/AnotherModelForm";

import { smartphoneTracker } from "helpers/mixpanelTracker";

const Memories = ({ context, selectMemory, openModal }) => {
  useEffect(() => {
    smartphoneTracker.trackScreen("ChooseModelCapacity");
  }, []);

  const { filteredDevices } = context;
  const memories = filteredDevices.memories;

  const triggerEventOnClick = () => {
    smartphoneTracker.trackLink("ChooseModelCapacity Dont Know Memory");
  };

  const handleSelectMemory = (value: string) => {
    smartphoneTracker.track("ChooseModelCapacity Item Selected", {
      capacity: value,
    });
    selectMemory(value);
  };

  const handleOpenWaitingListModal = () => {
    smartphoneTracker.trackLink("ChooseModelCapacity Other Memory");
    const { selected } = context;

    openModal({
      id: "another-model-form",
      isFullScreen: false,
      component: (
        <AnotherModelForm
          model={selected.model}
          manufacturer={selected.brand}
        />
      ),
    });
  };

  return (
    <>
      <TemplateStructure.Title testId="memory-step">
        <strong>Qual a memória?</strong>
      </TemplateStructure.Title>
      <TemplateStructure.List>
        {memories
          .slice()
          .sort((a, b) => parseInt(a) - parseInt(b))
          .map((memory: string) => (
            <ListItem
              key={memory}
              value={memory}
              onClick={handleSelectMemory}
            />
          ))}
        <ListItem value="Outra Memória" onClick={handleOpenWaitingListModal} />
      </TemplateStructure.List>
      <HelpBar
        label={"Não sabe a memória?"}
        onLinkClick={triggerEventOnClick}
        href="https://ajuda.pier.digital/pt-BR/articles/2887258-como-identificar-a-memoria-de-meu-aparelho"
      />
    </>
  );
};

export default withModalManagementActions(Memories);
