import { fireEvent } from "@testing-library/react";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { renderWithTheme } from "helpers/testUtils";
import { FindSmartphoneModel } from "../components";

jest.mock("helpers/mixpanelTracker");
const toggleSmartphoneSelector = jest.fn();
const renderComponent = ({ smartphoneSelected }) =>
  renderWithTheme(
    <FindSmartphoneModel
      toggleSmartphoneSelector={toggleSmartphoneSelector}
      smartphoneSelected={smartphoneSelected}
    />
  );

describe("<FindSmartphoneModel />", () => {
  it("Should render without errors", () => {
    const { container } = renderComponent({ smartphoneSelected: null });
    expect(container).toMatchSnapshot();
  });

  describe("When the button 'Ver valores' is clicked", () => {
    it("Should trigger a track button event", () => {
      const { getByText } = renderComponent({ smartphoneSelected: null });

      fireEvent.click(getByText("Ver valores"));

      expect(smartphoneTracker.trackButton).toHaveBeenCalledWith(
        "Tabela Pipe Prices"
      );
    });

    it("Should invoke the toggleSmartphoneSelector fn", () => {
      const { getByText } = renderComponent({ smartphoneSelected: null });

      fireEvent.click(getByText("Ver valores"));

      expect(toggleSmartphoneSelector.mock.calls.length).toBe(1);
    });
  });

  describe("When the smartphoneSelected object is null", () => {
    it("Should render the component", () => {
      const { getByText } = renderComponent({ smartphoneSelected: null });

      getByText("Buscar modelo");
      getByText("Veja se sua proteção irá receber um reajuste");
      getByText("Ver valores");
    });
  });

  describe("When the smartphoneSelected object is not empty", () => {
    it("Should not render the component", () => {
      const { queryByText } = renderComponent({ smartphoneSelected: {} });

      expect(queryByText("Buscar modelo")).toBeFalsy();
      expect(
        queryByText("Veja se sua proteção irá receber um reajuste")
      ).toBeFalsy();
      expect(queryByText("Ver valores")).toBeFalsy();
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
