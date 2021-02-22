import { fireEvent } from "@testing-library/react";

import { setupSmartphoneSelectorFlow } from "./utils";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import smartphoneModels from "../__fixtures__";

jest.mock("helpers/mixpanelTracker");

describe("<Series />", () => {
  const samsungSeries = smartphoneModels
    .filter(({ manufacturer }) => manufacturer === "Samsung")
    .map((serie) => serie.name);

  test("Should render the correct models", () => {
    const { getByText } = setupSmartphoneSelectorFlow();
    fireEvent.click(getByText("Samsung"));

    samsungSeries.forEach((serie) => getByText(serie));
  });

  test("Should render an extra option: 'Outro Modelo'", () => {
    const { getByText } = setupSmartphoneSelectorFlow();
    fireEvent.click(getByText("Apple (iPhone)"));

    getByText("Outro Modelo");
  });

  test("Should trigger a mxp screen viewed event", () => {
    const { getByText } = setupSmartphoneSelectorFlow();
    fireEvent.click(getByText("Samsung"));

    expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith("ChooseFamily");
  });

  describe("When select a serie", () => {
    const selectedSerie = samsungSeries[0];

    test("Should trigger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Samsung"));
      jest.clearAllMocks();
      fireEvent.click(getByText(selectedSerie));

      expect(smartphoneTracker.track).toHaveBeenCalledWith(
        "ChooseFamily Item Selected",
        {
          family: selectedSerie,
        }
      );
    });
  });

  describe("When select another model/family", () => {
    test("Should triger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Samsung"));
      jest.clearAllMocks();
      fireEvent.click(getByText("Outro Modelo"));

      expect(smartphoneTracker.trackLink).toHaveBeenCalledWith(
        "ChooseFamily Other Model"
      );
    });

    test("Should open the another model form modal", () => {
      const {
        getByText,
        getByTestId,
        queryByTestId,
      } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Samsung"));
      fireEvent.click(getByText("Outro Modelo"));

      expect(queryByTestId("full-screen-layout")).toBeFalsy();
      getByTestId("another-model-form-modal");
    });
  });

  describe("When click on help link", () => {
    test("Should triger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Samsung"));
      jest.clearAllMocks();
      fireEvent.click(getByText("Veja aqui"));

      expect(smartphoneTracker.trackLink).toHaveBeenCalledWith(
        "ChooseFamily Dont Know Family"
      );
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
