import { fireEvent } from "@testing-library/react";

import { setupSmartphoneSelectorFlow } from "./utils";
import { smartphoneTracker } from "helpers/mixpanelTracker";

jest.mock("helpers/mixpanelTracker");

describe("<Brands />", () => {
  test("Should render the correct brands", () => {
    const { getByText } = setupSmartphoneSelectorFlow();

    getByText("Apple (iPhone)");
    getByText("Samsung");
    getByText("Xiaomi");
    getByText("Motorola");
  });

  test("Should trigger a mxp screen viewed event", () => {
    setupSmartphoneSelectorFlow();

    expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith("ChooseBrand");
  });

  describe("When select a brand", () => {
    const selectedBrand = "Samsung";

    test("Should trigger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText(selectedBrand));

      expect(smartphoneTracker.track).toHaveBeenCalledWith(
        "ChooseBrand Item Selected",
        {
          brand: selectedBrand,
        }
      );
    });
  });

  describe("When select another brand", () => {
    test("Should triger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Outra marca"));

      expect(smartphoneTracker.trackLink).toHaveBeenCalledWith(
        "ChooseBrand Other Brand"
      );
    });

    test("Should open the another brand modal", () => {
      const {
        getByText,
        getByTestId,
        queryByTestId,
      } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Outra marca"));

      expect(queryByTestId("full-screen-layout")).toBeFalsy();
      getByTestId("another-model-form-modal");
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
