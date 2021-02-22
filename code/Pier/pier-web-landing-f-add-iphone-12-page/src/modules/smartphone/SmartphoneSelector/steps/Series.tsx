import { useEffect } from "react";

import { HelpBar, ListItem, TemplateStructure } from "../components";
import { withModalManagementActions } from "modules/shared/ModalManagement";
import AnotherModelForm from "modules/shared/AnotherModelForm";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { sortByPriority } from "../utils/functions";

const Series = ({ context, selectSerie, openModal }) => {
  useEffect(() => {
    smartphoneTracker.trackScreen("ChooseFamily");
  }, []);

  const { filteredDevices } = context;
  const seriesList = Object.values(filteredDevices.series);

  const handleOpenWaitingListModal = () => {
    smartphoneTracker.trackLink("ChooseFamily Other Model");
    const { selected } = context;
    openModal({
      id: "another-model-form",
      isFullScreen: false,
      component: <AnotherModelForm manufacturer={selected.brand} />,
    });
  };

  const triggerEventOnClick = () => {
    smartphoneTracker.trackLink("ChooseFamily Dont Know Family");
  };

  const handleSelectSerie = (value: string) => {
    smartphoneTracker.track("ChooseFamily Item Selected", { family: value });
    selectSerie(value);
  };

  return (
    <>
      <TemplateStructure.Title testId="series-step">
        <strong>Qual o modelo?</strong>
      </TemplateStructure.Title>
      <TemplateStructure.List>
        {seriesList
          .sort(sortByPriority)
          .map((serie: { name: string; priority: number }) => (
            <ListItem
              key={serie.name}
              value={serie.name}
              onClick={handleSelectSerie}
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

export default withModalManagementActions(Series);
