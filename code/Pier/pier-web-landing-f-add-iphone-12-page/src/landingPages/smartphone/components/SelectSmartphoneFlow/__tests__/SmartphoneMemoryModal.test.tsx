import { SmartphoneMemoryModal } from "../modals";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import smartphoneModels from "helpers/smartphoneModels";
import { renderWithTheme } from "helpers/testUtils";
import { fireEvent } from "@testing-library/react";

jest.mock("helpers/mixpanelTracker");

const runPropsSetup = ({
  currentPhoneState,
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

const getIphone6Memories = (): any => {
  const getAppleModels = (): any =>
    smartphoneModels.find((serie) => serie.name === "Apple") ?? [];

  return (
    getAppleModels().models.find((model) => model.name === "iPhone 6S") ?? []
  );
};

const renderComponentByProps = (props) =>
  renderWithTheme(<SmartphoneMemoryModal {...props} />);

describe("<SmartphoneMemoryModal />", () => {
  it("Should render without errors", () => {
    const propsSetup = runPropsSetup({
      currentPhoneState: {
        serie: "Apple",
        deviceOs: "ios",
        model: { name: "iPhone 6S" },
        memory: null,
        manufacturer: null,
      },
    });

    const { container } = renderComponentByProps(propsSetup);
    expect(container).toMatchSnapshot();
  });

  it("Should render the <SmartphoneMemoryModal /> with all memories of selected model", () => {
    const propsSetup = runPropsSetup({
      currentPhoneState: {
        serie: "Apple",
        deviceOs: "ios",
        model: { name: "iPhone 6S", memories: getIphone6Memories().memories },
        memory: null,
        manufacturer: null,
      },
    });
    const { getByText } = renderComponentByProps(propsSetup);

    getIphone6Memories().memories.forEach((memory) => {
      getByText(memory);
    });
  });

  describe("When click at an item", () => {
    it("Should trigger a mixpanel event with default event", () => {
      const propsSetup = runPropsSetup({
        withFakeDoor: false,
        currentPhoneState: {
          serie: "Apple",
          deviceOs: "ios",
          model: { name: "iPhone 6S", memories: getIphone6Memories().memories },
          memory: null,
          manufacturer: null,
        },
      });

      const { getByText } = renderComponentByProps(propsSetup);

      fireEvent.click(getByText("64GB"));

      expect(smartphoneTracker.track).toHaveBeenCalledWith(
        " ChooseModelCapacity Item Selected",
        {
          capacity: "64GB",
        }
      );
    });

    it("Should trigger a mixpanel event with a custom event", () => {
      const propsSetup = runPropsSetup({
        withFakeDoor: false,
        currentPhoneState: {
          serie: "Apple",
          deviceOs: "ios",
          model: { name: "iPhone 6S", memories: getIphone6Memories().memories },
          memory: null,
          manufacturer: null,
        },
        eventIdentifier: "Tabela Pipe",
      });
      const { getByText } = renderComponentByProps(propsSetup);

      fireEvent.click(getByText("64GB"));

      expect(smartphoneTracker.track).toHaveBeenCalledWith(
        "Tabela Pipe ChooseModelCapacity Item Selected",
        {
          capacity: "64GB",
        }
      );
    });
  });
});
