import { act, fireEvent, waitFor } from "@testing-library/react";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { renderWithTheme } from "helpers/testUtils";
import TablePipe from "../TablePipe";

declare global {
  interface Window {
    Intercom: any;
  }
}
jest.mock("helpers/mixpanelTracker");
jest.mock("next/link", () => ({ children }) => children);

window.Intercom = jest.fn();

const renderComponent = async () => {
  let wrapper;

  await act(async () => {
    wrapper = renderWithTheme(<TablePipe />);
  });

  return wrapper;
};

const performToSelectModel = async ({ getByText, brand, model, memory }) => {
  // Select the brand
  await act(async () => {
    fireEvent.click(getByText(brand));
  });

  // Select the model
  await act(async () => {
    fireEvent.click(getByText(model));
  });

  // Select the memory
  await act(async () => {
    fireEvent.click(getByText(memory));
  });
};

describe("<TabelaPipe />", () => {
  it("Should render without errors", async () => {
    const { container } = await renderComponent();
    expect(container).toMatchSnapshot();
  });

  describe("When render the page", () => {
    it("Should trigger a track event screen 'Tabela Pipe'", async () => {
      await renderComponent();

      expect(smartphoneTracker.trackScreen).toHaveBeenCalledWith("Tabela Pipe");
    });

    it("Should render with the <FindSmartphoneModel /> enabled and <ShowPrices /> disabled", async () => {
      const { queryByText, getByText } = await renderComponent();

      getByText("Buscar modelo");
      expect(queryByText("iPhone 7 32GB")).toBeFalsy();
    });
  });

  describe("When lead selected a smartphone", () => {
    it("Should disable <FindSmartphoneModel /> and enable <ShowPrices />", async () => {
      const { getByText, queryByText } = await renderComponent();

      // Open the model modal
      await act(async () => {
        fireEvent.click(getByText("Ver valores"));
      });

      await performToSelectModel({
        getByText,
        brand: "Apple",
        model: "iPhone 6S",
        memory: "16GB",
      });

      // Check if the <ShowPrices /> was rendered;
      getByText("Valores para um");
      getByText("iPhone 6S 16GB");
      getByText("Selecione outro modelo");

      // Check if the <FindSmartphoneModal /> turn disabled;
      expect(queryByText("Buscar Modelo")).toBeFalsy();
    });
  });

  describe("When lead select another model", () => {
    it("Shoud update the <ShowPrices /> with the new model selected", async () => {
      const { getByText } = await renderComponent();

      // Select first model
      await act(async () => {
        fireEvent.click(getByText("Ver valores"));
      });

      await performToSelectModel({
        getByText,
        brand: "Apple",
        model: "iPhone 6S",
        memory: "16GB",
      });

      getByText("Valores para um");
      getByText("iPhone 6S 16GB");

      // Change the model
      await act(async () => {
        fireEvent.click(getByText("Selecione outro modelo"));
      });

      await performToSelectModel({
        getByText,
        brand: "Samsung Galaxy J",
        model: "Galaxy J2 PRIME",
        memory: "8GB",
      });

      // // Check if the <ShowPrices /> was rendered;
      getByText("Valores para um");
      getByText("Galaxy J2 PRIME 8GB");
    });
  });
});
