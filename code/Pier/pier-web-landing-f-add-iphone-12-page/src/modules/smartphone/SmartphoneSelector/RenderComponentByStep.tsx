import { useEffect } from "react";

import { Brands, Series, Models, Memories } from "./steps";
import { States } from "./smartphone-machine/utils";
import { withModalManagementActions } from "modules/shared/ModalManagement";

const RenderComponentByStep = ({
  state,
  actions,
  context,
  closeModal,
  getSelectedDevice,
}) => {
  useEffect(() => {
    if (state === States.final) {
      getSelectedDevice(context?.selected);
      closeModal();
    }
  }, [state]);

  switch (state) {
    case States.brand:
      return <Brands context={context} selectBrand={actions.selectBrand} />;

    case States.serie:
      return <Series context={context} selectSerie={actions.selectSerie} />;

    case States.model:
      return <Models context={context} selectModel={actions.selectModel} />;

    case States.memory:
      return <Memories context={context} selectMemory={actions.selectMemory} />;

    case States.final:
      return <></>;
  }
};

export default withModalManagementActions(RenderComponentByStep);
