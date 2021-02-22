import { SmartphoneBrandModal } from "../modals";
import smartphoneModels from "helpers/smartphoneModels";
import { renderWithTheme } from "helpers/testUtils";

const runPropsSetup = ({
  currentPhoneState = {
    serie: null,
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
  renderWithTheme(<SmartphoneBrandModal {...props} />);

describe("<SmartphoneBrandModal />", () => {
  it("Should render without errors", () => {
    const propsSetup = runPropsSetup({});

    const { container } = renderComponentByProps(propsSetup);
    expect(container).toMatchSnapshot();
  });

  describe("When withFakeDoor props it's true", () => {
    const propsSetup = runPropsSetup({
      withFakeDoor: true,
    });

    it("Should render the <SmartphoneBrandModal /> with all brands ", () => {
      const { getByText, queryByText } = renderComponentByProps(propsSetup);

      smartphoneModels.forEach((smartphone) => {
        getByText(smartphone.name);
      });
    });
  });

  describe("When withFakeDoor props it's false", () => {
    const propsSetup = runPropsSetup({
      withFakeDoor: false,
    });

    it("Should render the <SmartphoneBrandModal /> with only true brands ", () => {
      const { getByText, queryByText } = renderComponentByProps(propsSetup);

      smartphoneModels.forEach((smartphone) => {
        if (smartphone.isFakeDoor) {
          return expect(queryByText(smartphone.name)).toBeFalsy();
        }
        getByText(smartphone.name);
      });
    });
  });
});
