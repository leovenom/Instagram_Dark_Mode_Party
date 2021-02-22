import RenderModalByCorrectStep from "../RenderModalByCorrectStep";
import smartphoneModels from "helpers/smartphoneModels";
import { renderWithTheme } from "helpers/testUtils";

const runPropsSetup = ({
  currentPhoneState,
  withFakeDoor = true,
  eventIdentifier = "",
}) => ({
  smartphoneModels,
  currentPhoneState,
  setPhone: () => {},
  toggleFakeDoor: () => {},
  onModelSelectByFakeDoor: () => {},
  hideModal: () => {},
  toggleAnotherModel: () => {},
  setSelectedSmartphone: () => {},
  scrollToChooseYourPlan: () => {},
  withFakeDoor,
  eventIdentifier,
});

const renderComponentByProps = (props) =>
  renderWithTheme(<RenderModalByCorrectStep {...props} />);

describe("<RenderModalByCorrectStep />", () => {
  it("Should render without errors", () => {
    const propsSetup = runPropsSetup({
      currentPhoneState: {
        serie: null,
        deviceOs: null,
        model: null,
        memory: null,
        manufacturer: null,
      },
    });

    const { container } = renderComponentByProps(propsSetup);
    expect(container).toMatchSnapshot();
  });

  describe("When no brand has been selected (NOT_SELECTED state)", () => {
    const propsSetup = runPropsSetup({
      currentPhoneState: {
        serie: null,
        deviceOs: null,
        model: null,
        memory: null,
        manufacturer: null,
      },
    });

    it("Should render the <SmartphoneBrandModal /> ", () => {
      const { getByTestId } = renderComponentByProps(propsSetup);

      getByTestId("smartphone-brand-modal");
    });
  });

  describe("When the brand has been selected (BRAND_SELECTED state)", () => {
    const propsSetup = runPropsSetup({
      currentPhoneState: {
        serie: "Apple",
        deviceOs: null,
        model: null,
        memory: null,
        manufacturer: null,
      },
    });

    it("Should render the <SmartphoneModelModal /> ", () => {
      const { getByTestId } = renderComponentByProps(propsSetup);

      getByTestId("smartphone-model-modal");
    });
  });

  describe("When the model has been selected (MODEL_SELECTED state)", () => {
    const propsSetup = runPropsSetup({
      currentPhoneState: {
        serie: "Apple",
        deviceOs: null,
        model: { name: "iPhone 6S" },
        memory: null,
        manufacturer: null,
      },
    });

    it("Should render the <SmartphoneMemoryModal /> ", () => {
      const { getByTestId } = renderComponentByProps(propsSetup);

      getByTestId("smartphone-memory-modal");
    });
  });
});
