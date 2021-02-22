import { fireEvent } from "@testing-library/react";

import { renderWithTheme } from "helpers/testUtils";
import SmartphoneSelector from "../../SmartphoneSelector";
import {
  ModalManagementProvider,
  ModalManagementContainer,
  withModalManagementActions,
} from "modules/shared/ModalManagement";

import smartphoneModels from "../../__fixtures__";

const getSelectedDevice = jest.fn();

const FakeAppContainer = withModalManagementActions(({ openModal }) => (
  <div>
    <ModalManagementContainer />
    <button
      onClick={() =>
        openModal({
          component: (
            <SmartphoneSelector
              getSelectedDevice={getSelectedDevice}
              smartphoneModels={smartphoneModels}
            />
          ),
          id: "selector-models",
          hideCloseButton: true,
        })
      }
    >
      Ver aparelhos
    </button>
  </div>
));

const setupSmartphoneSelectorFlow = () => {
  const render = renderWithTheme(
    <ModalManagementProvider>
      <FakeAppContainer />
    </ModalManagementProvider>
  );

  fireEvent.click(render.queryByText("Ver aparelhos"));

  return { ...render, getSelectedDevice };
};

export default setupSmartphoneSelectorFlow;
