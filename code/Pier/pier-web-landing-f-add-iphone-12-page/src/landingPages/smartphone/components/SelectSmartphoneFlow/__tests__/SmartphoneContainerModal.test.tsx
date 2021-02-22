import { smartphoneTracker } from "helpers/mixpanelTracker";
import SmartphoneContainerModal from "../SmartphoneContainerModal";
import { renderWithTheme } from "helpers/testUtils";
import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("helpers/mixpanelTracker");

const runPropsSetup = ({ withFakeDoor = true, eventIdentifier = "" }) => ({
  withFakeDoor,
  toggleAnotherModel: () => {},
  toggleFakeDoor: () => {},
  onModelSelectByFakeDoor: () => {},
  scrollToChooseYourPlan: () => {},
  setSelectedSmartphone: () => {},
  modalIsOpen: () => {},
  hideModal: () => {},
  eventIdentifier,
});

const renderComponentByProps = (props) =>
  renderWithTheme(<SmartphoneContainerModal {...props} />);

describe("<SmartphoneContainerModal />", () => {
  it("Should render without errors", () => {
    const propsSetup = runPropsSetup({});

    const { container } = renderComponentByProps(propsSetup);
    expect(container).toMatchSnapshot();
  });

  describe("When no brand has been selected (NOT_SELECTED state)", () => {
    it("Should trigger a mixpanel event with default event", () => {
      const propsSetup = runPropsSetup({});
      renderComponentByProps(propsSetup);

      expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith(
        " ChooseBrand"
      );
    });

    it("Should trigger a mixpanel event with custom event", () => {
      const propsSetup = runPropsSetup({ eventIdentifier: "Tabela Pipe" });
      renderComponentByProps(propsSetup);

      expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith(
        "Tabela Pipe ChooseBrand"
      );
    });
  });

  describe("When the brand is selected (BRAND_SELECTED state)", () => {
    it("Should trigger a mixpanel event with default event", () => {
      const propsSetup = runPropsSetup({});
      const { getByText } = renderComponentByProps(propsSetup);

      act(() => {
        fireEvent.click(getByText("Apple"));
      });

      expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith(
        " ChooseModel"
      );
    });

    it("Should trigger a mixpanel event with custom event", () => {
      const propsSetup = runPropsSetup({ eventIdentifier: "Tabela Pipe" });
      const { getByText } = renderComponentByProps(propsSetup);

      act(() => {
        fireEvent.click(getByText("Apple"));
      });

      expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith(
        "Tabela Pipe ChooseModel"
      );
    });
  });

  describe("When the brand and the model is selected (MODEL_SELECTED state)", () => {
    it("Should trigger a mixpanel event with default event", () => {
      const propsSetup = runPropsSetup({});
      const { getByText } = renderComponentByProps(propsSetup);

      act(() => {
        fireEvent.click(getByText("Apple"));
      });

      act(() => {
        fireEvent.click(getByText("iPhone 6S"));
      });

      expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith(
        " ChooseModelCapacity"
      );
    });

    it("Should trigger a mixpanel event with custom event", () => {
      const propsSetup = runPropsSetup({ eventIdentifier: "Tabela Pipe" });
      const { getByText } = renderComponentByProps(propsSetup);

      act(() => {
        fireEvent.click(getByText("Apple"));
      });

      act(() => {
        fireEvent.click(getByText("iPhone 6S"));
      });

      expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith(
        "Tabela Pipe ChooseModelCapacity"
      );
    });
  });
});
