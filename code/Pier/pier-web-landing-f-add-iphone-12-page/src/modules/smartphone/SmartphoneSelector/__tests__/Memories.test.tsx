import { fireEvent } from "@testing-library/react";

import { setupSmartphoneSelectorFlow } from "./utils";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import smartphoneModels from "../__fixtures__";

jest.mock("helpers/mixpanelTracker");

describe("<Memories />", () => {
  const iphone12Memories = smartphoneModels
    .find(({ manufacturer }) => manufacturer === "Apple")
    .models.find(({ name }) => name === "iPhone 12 mini").memories;

  test("Should render the correct memories", () => {
    const { getByText } = setupSmartphoneSelectorFlow();
    fireEvent.click(getByText("Apple (iPhone)"));
    fireEvent.click(getByText("iPhone 12 mini"));

    iphone12Memories.forEach((memory) => getByText(memory));
  });

  test("Should trigger a mxp screen viewed event", () => {
    const { getByText } = setupSmartphoneSelectorFlow();
    fireEvent.click(getByText("Apple (iPhone)"));
    jest.clearAllMocks();
    fireEvent.click(getByText("iPhone 12 mini"));

    expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith(
      "ChooseModelCapacity"
    );
  });

  describe("When select a memory", () => {
    const selectedMemory = iphone12Memories[0];

    test("Should trigger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Apple (iPhone)"));
      fireEvent.click(getByText("iPhone 12 mini"));
      jest.clearAllMocks();
      fireEvent.click(getByText(selectedMemory));

      expect(smartphoneTracker.track).toHaveBeenCalledWith(
        "ChooseModelCapacity Item Selected",
        {
          capacity: selectedMemory,
        }
      );
    });

    test("Should invoke the getSelectedDevice", () => {
      const { getByText, getSelectedDevice } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Apple (iPhone)"));
      fireEvent.click(getByText("iPhone 12 mini"));
      jest.clearAllMocks();
      fireEvent.click(getByText(selectedMemory));

      expect(getSelectedDevice).toHaveBeenCalled();
    });
  });

  describe("When select another memory", () => {
    test("Should triger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Xiaomi"));
      fireEvent.click(getByText("Xiaomi Mi"));
      fireEvent.click(getByText("Mi 10 Pro"));
      jest.clearAllMocks();
      fireEvent.click(getByText("Outra Memória"));

      expect(smartphoneTracker.trackLink).toHaveBeenCalledWith(
        "ChooseModelCapacity Other Memory"
      );
    });

    test("Should open the another model form modal", () => {
      const {
        getByText,
        getByTestId,
        queryByTestId,
      } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Xiaomi"));
      fireEvent.click(getByText("Xiaomi Mi"));
      fireEvent.click(getByText("Mi 10 Pro"));
      fireEvent.click(getByText("Outra Memória"));

      expect(queryByTestId("full-screen-layout")).toBeFalsy();
      getByTestId("another-model-form-modal");
    });
  });

  describe("When click on help link", () => {
    test("Should triger a mxp link event", () => {
      const { getByText } = setupSmartphoneSelectorFlow();
      fireEvent.click(getByText("Apple (iPhone)"));
      fireEvent.click(getByText("iPhone 12 mini"));
      jest.clearAllMocks();
      fireEvent.click(getByText("Veja aqui"));

      expect(smartphoneTracker.trackLink).toHaveBeenCalledWith(
        "ChooseModelCapacity Dont Know Memory"
      );
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
