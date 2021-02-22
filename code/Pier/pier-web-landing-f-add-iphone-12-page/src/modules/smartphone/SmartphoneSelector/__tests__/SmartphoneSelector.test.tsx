import { fireEvent } from "@testing-library/react";

import { setupSmartphoneSelectorFlow } from "./utils";

describe("<SmartphoneSelector />", () => {
  test("Should start on the brand step", () => {
    const { getByTestId } = setupSmartphoneSelectorFlow();
    getByTestId("brand-step");
  });

  describe("When select a brand", () => {
    test("Should render the serie step", () => {
      const { getByText, getByTestId } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Samsung"));

      getByTestId("series-step");
    });

    describe("When the brand doesn't have a series step", () => {
      test("Should render the models step", () => {
        const { getByText, getByTestId } = setupSmartphoneSelectorFlow();
        fireEvent.click(getByText("Apple (iPhone)"));

        getByTestId("models-step");
      });
    });
  });

  describe("When select a serie", () => {
    test("Should render the models step", () => {
      const { getByText, getByTestId } = setupSmartphoneSelectorFlow();

      fireEvent.click(getByText("Samsung"));
      fireEvent.click(getByText("Samsung Galaxy S"));

      getByTestId("models-step");
    });
  });

  describe("When select a model", () => {
    test("Should render the memory step", () => {
      const { getByText, getByTestId } = setupSmartphoneSelectorFlow();

      fireEvent.click(getByText("Apple (iPhone)"));
      fireEvent.click(getByText("iPhone 12 mini"));

      getByTestId("memory-step");
    });
  });

  describe("When select a memory", () => {
    test("Should return an object with selected device", () => {
      const { getByText, getSelectedDevice } = setupSmartphoneSelectorFlow();

      fireEvent.click(getByText("Apple (iPhone)"));
      fireEvent.click(getByText("iPhone 12 mini"));
      fireEvent.click(getByText("64GB"));

      expect(getSelectedDevice).toHaveBeenCalledWith({
        brand: "Apple",
        deviceOs: "ios",
        memory: "64GB",
        model: "iPhone 12 mini",
        serie: "Apple",
      });
    });

    test("Should close modal", () => {
      const { getByText, queryByTestId } = setupSmartphoneSelectorFlow();

      fireEvent.click(getByText("Apple (iPhone)"));
      fireEvent.click(getByText("iPhone 12 mini"));
      fireEvent.click(getByText("64GB"));

      expect(queryByTestId("full-screen-layout")).toBeFalsy();
    });
  });

  describe("If is the first step", () => {
    test("When the back button clicks, the modal should be closed", () => {
      const { getByTestId, queryByTestId } = setupSmartphoneSelectorFlow();

      fireEvent.click(getByTestId("back-btn"));
      expect(queryByTestId("full-screen-layout")).toBeFalsy();
    });
  });

  describe("If it's not the first step", () => {
    test("When the back button clicks should go back to the last step", () => {
      const { getByText, getByTestId } = setupSmartphoneSelectorFlow();

      getByTestId("brand-step");
      fireEvent.click(getByText("Samsung"));

      getByTestId("series-step");

      fireEvent.click(getByTestId("back-btn"));
      getByTestId("brand-step");
    });
  });
});
