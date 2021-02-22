import { fireEvent } from "@testing-library/react";

import { SmartphoneModelModal } from "../modals";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import smartphoneModels from "helpers/smartphoneModels";
import { renderWithTheme } from "helpers/testUtils";

jest.mock("helpers/mixpanelTracker");

const runPropsSetup = ({
  currentPhoneState = {
    serie: "Apple",
    deviceOs: null,
    model: null,
    memory: null,
    manufacturer: null,
  },
  withFakeDoor = true,
  eventIdentifier = "",
}) => ({
  smartphoneModels,
  currentPhoneState,
  modalKey: "one",
  setPhone: () => {},
  hideModal: () => {},
  toggleAnotherModel: () => {},
  withFakeDoor,
  eventIdentifier,
});

const renderComponentByProps = (props) =>
  renderWithTheme(<SmartphoneModelModal {...props} />);

describe("<SmartphoneModelModal />", () => {
  it("Should render without errors", () => {
    const propsSetup = runPropsSetup({});

    const { container } = renderComponentByProps(propsSetup);
    expect(container).toMatchSnapshot();
  });

  describe("When withFakeDoor props it's true", () => {
    const propsSetup = runPropsSetup({
      withFakeDoor: true,
      currentPhoneState: {
        serie: "Motorola Moto G",
        deviceOs: null,
        model: null,
        memory: null,
        manufacturer: null,
      },
    });

    it("Should render the <SmartphoneModelModal /> with all models of selected line ", () => {
      const { getByText } = renderComponentByProps(propsSetup);

      const motoralMotoGModels = (): any =>
        smartphoneModels.find((serie) => serie.name === "Motorola Moto G") ??
        [];

      motoralMotoGModels().models.forEach((model) => {
        getByText(model.name);
      });
    });
  });

  describe("When withFakeDoor props it's false", () => {
    const propsSetup = runPropsSetup({
      withFakeDoor: false,
      currentPhoneState: {
        serie: "Motorola Moto G",
        deviceOs: null,
        model: null,
        memory: null,
        manufacturer: null,
      },
    });

    it("Should render the <SmartphoneModelModal />, only with models that have registered memory", () => {
      const { getByText, queryByText } = renderComponentByProps(propsSetup);

      const getMotoralMotoGModels = (): any =>
        smartphoneModels.find((serie) => serie.name === "Motorola Moto G") ??
        [];

      getMotoralMotoGModels().models.forEach((model) => {
        if (!model.memories) {
          return expect(queryByText(model.name)).toBeFalsy();
        }
        getByText(model.name);
      });
    });
  });

  describe("When click at an item", () => {
    it("Should trigger a mixpanel event with default event", () => {
      const propsSetup = runPropsSetup({
        withFakeDoor: false,
        currentPhoneState: {
          serie: "Motorola Moto G",
          deviceOs: null,
          model: null,
          memory: null,
          manufacturer: null,
        },
      });

      const { getByText } = renderComponentByProps(propsSetup);

      fireEvent.click(getByText("Moto G8"));

      expect(smartphoneTracker.track).toHaveBeenCalledWith(
        " ChooseModel Item Selected",
        {
          model: "Moto G8",
        }
      );
    });

    it("Should trigger a mixpanel event with a custom event", () => {
      const propsSetup = runPropsSetup({
        withFakeDoor: false,
        currentPhoneState: {
          serie: "Motorola Moto G",
          deviceOs: null,
          model: null,
          memory: null,
          manufacturer: null,
        },
        eventIdentifier: "Tabela Pipe",
      });
      const { getByText } = renderComponentByProps(propsSetup);

      fireEvent.click(getByText("Moto G8"));

      expect(smartphoneTracker.track).toHaveBeenCalledWith(
        "Tabela Pipe ChooseModel Item Selected",
        {
          model: "Moto G8",
        }
      );
    });
  });
});
