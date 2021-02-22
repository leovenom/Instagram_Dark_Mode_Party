import { fireEvent } from "@testing-library/react";

import { setupSmartphoneSelectorFlow } from "./utils";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import smartphoneModels from "../__fixtures__";

jest.mock("helpers/mixpanelTracker");

describe("<Models />", () => {
  const iphoneModels = smartphoneModels
    .find(({ name }) => name === "Apple")
    .models.map((model) => model.name);

  test("Should render the correct models", () => {
    const { getByText } = setupSmartphoneSelectorFlow();
    fireEvent.click(getByText("Apple (iPhone)"));

    iphoneModels.forEach((model) => getByText(model));
  });

  test("Should render an extra option 'Outro Modelo'", () => {
    const { getByText } = setupSmartphoneSelectorFlow();
    fireEvent.click(getByText("Apple (iPhone)"));

    getByText("Outro Modelo");
  });

  test("Should trigger a mxp screen viewed event", () => {
    const { getByText } = setupSmartphoneSelectorFlow();
    fireEvent.click(getByText("Apple (iPhone)"));

    expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith("ChooseModel");
  });

  describe("When select a model", () => {
    const selectedModel = iphoneModels[0];

    test("Should trigger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Apple (iPhone)"));
      jest.clearAllMocks();
      fireEvent.click(getByText(selectedModel));

      expect(smartphoneTracker.track).toHaveBeenCalledWith(
        "ChooseModel Item Selected",
        {
          model: selectedModel,
        }
      );
    });
  });

  describe("When select another model", () => {
    test("Should triger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Apple (iPhone)"));
      jest.clearAllMocks();
      fireEvent.click(getByText("Outro Modelo"));

      expect(smartphoneTracker.trackLink).toHaveBeenCalledWith(
        "ChooseModel Other Model"
      );
    });

    test("Should open the another model form modal", () => {
      const {
        getByText,
        getByTestId,
        queryByTestId,
      } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Apple (iPhone)"));
      fireEvent.click(getByText("Outro Modelo"));

      expect(queryByTestId("full-screen-layout")).toBeFalsy();
      getByTestId("another-model-form-modal");
    });
  });

  describe("When click on help link", () => {
    test("Should triger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Apple (iPhone)"));
      jest.clearAllMocks();
      fireEvent.click(getByText("Veja aqui"));

      expect(smartphoneTracker.trackLink).toHaveBeenCalledWith(
        "ChooseModel Dont Know Model"
      );
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
