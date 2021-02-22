import { fireEvent } from "@testing-library/react";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { renderWithTheme } from "helpers/testUtils";
import { ShowPrices } from "../components";
import {
  getInsuredValue,
  getMonthlyValue,
  getNewPriceOfPlan,
} from "../components/utils";

jest.mock("helpers/mixpanelTracker");
const toggleSmartphoneSelector = jest.fn();

const renderComponent = ({ smartphoneSelected }) =>
  renderWithTheme(
    <ShowPrices
      toggleSmartphoneSelector={toggleSmartphoneSelector}
      smartphoneSelected={smartphoneSelected}
    />
  );

const selectedSmartphone = {
  deviceOs: "ios",
  manufacturer: undefined,
  memory: "16GB",
  model: { memories: ["16GB", "32GB", "64GB", "128GB"], name: "iPhone 6S" },
  plansValues: {
    premium: { insuredValue: 712.0, price: 13.9 },
    economic: { insuredValue: 890.0, price: 19.1 },
  },
  serie: "Apple",
};

describe("<ShowPrices />", () => {
  it("Should render without errors", () => {
    const { container } = renderComponent({
      smartphoneSelected: selectedSmartphone,
    });
    expect(container).toMatchSnapshot();
  });

  describe("When the button 'Selecione outro modelo' is clicked", () => {
    it("Should trigger a track button event", () => {
      const { getByText } = renderComponent({
        smartphoneSelected: selectedSmartphone,
      });

      fireEvent.click(getByText("Selecione outro modelo"));

      expect(smartphoneTracker.trackButton).toHaveBeenCalledWith(
        "Tabela Pipe Select Other Model"
      );
    });

    it("Should invoke the toggleSmartphoneSelector fn", () => {
      const { getByText } = renderComponent({
        smartphoneSelected: selectedSmartphone,
      });

      fireEvent.click(getByText("Selecione outro modelo"));

      expect(toggleSmartphoneSelector.mock.calls.length).toBe(1);
    });
  });

  describe("When the smartphoneSelected object is not empty", () => {
    it("Should render the component", () => {
      const { getByText } = renderComponent({
        smartphoneSelected: selectedSmartphone,
      });

      getByText("Valores para um");
      getByText("iPhone 6S 16GB");
      getByText("Selecione outro modelo");
    });

    it("Should render the component with the correct smartphone model", () => {
      const { getByText } = renderComponent({
        smartphoneSelected: selectedSmartphone,
      });

      // iPhone 6S 16GB
      getByText(
        `${selectedSmartphone.model.name} ${selectedSmartphone.memory}`
      );
    });

    it("Should render the component with the correct update dates in cards", () => {
      const { getByText } = renderComponent({
        smartphoneSelected: selectedSmartphone,
      });

      // New Card
      getByText("A partir de 23/11/2020");

      // Old Card
      getByText("Anterior a 23/11/2020");
    });

    it("Should trigger a track screen event", () => {
      renderComponent({ smartphoneSelected: selectedSmartphone });

      expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith(
        "Tabela Pipe Plans"
      );
    });
  });

  describe("When the smartphone model selected has a new plan price", () => {
    const selectedSmartphone = {
      deviceOs: "ios",
      manufacturer: undefined,
      memory: "512GB",
      model: {
        memories: ["64GB", "256GB", "512GB"],
        name: "iPhone 11 Pro Max",
      },
      plansValues: {
        premium: { insuredValue: 6144.0, price: 119.9 },
        economic: { insuredValue: 7680.0, price: 164.8 },
      },
      serie: "Apple",
    };

    const newPlanPrice = getNewPriceOfPlan({
      smartphoneSelected: selectedSmartphone,
    });

    it("Should render the component with the old plan card and new plan card", () => {
      const { getByText, getAllByText } = renderComponent({
        smartphoneSelected: selectedSmartphone,
      });

      // Plans Values
      getByText(getMonthlyValue("economic", newPlanPrice).formatted);
      getByText(getMonthlyValue("economic", selectedSmartphone).formatted);

      getByText(getMonthlyValue("premium", newPlanPrice).formatted);
      getByText(getMonthlyValue("premium", selectedSmartphone).formatted);

      getAllByText(getInsuredValue("economic", newPlanPrice).formatted);
      getAllByText(getInsuredValue("economic", selectedSmartphone).formatted);

      getAllByText(getInsuredValue("premium", newPlanPrice).formatted);
      getAllByText(getInsuredValue("premium", selectedSmartphone).formatted);
    });
  });

  describe("When the smartphone model selected doesn't have a new plan price", () => {
    it("Should render the component with 'no updates info' card", () => {
      const { getByText } = renderComponent({
        smartphoneSelected: selectedSmartphone,
      });

      getByText("Sem reajustes");
      getByText("Nada mudou para você nessa atualização!");
    });
  });

  describe("When the smartphoneSelected object is empty", () => {
    it("Should not render the component", () => {
      const { queryByText } = renderComponent({ smartphoneSelected: null });

      expect(queryByText("Valores para um")).toBeFalsy();
      expect(queryByText("iPhone 6S 16GB")).toBeFalsy();
      expect(queryByText("Selecione outro modelo")).toBeFalsy();
    });

    it("Shouldn't trigger a track screen event", () => {
      renderComponent({ smartphoneSelected: null });

      expect(smartphoneTracker.trackScreen).not.toHaveBeenCalled();
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
