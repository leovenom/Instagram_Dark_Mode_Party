import { fireEvent, screen } from "@testing-library/react";
import { act, Simulate } from "react-dom/test-utils";

import "modules/auto/QuotationFlow/utils/testUtils";
import { renderWithTheme } from "helpers/testUtils";

import * as mixpanelTracker from "helpers/mixpanelTracker";
import LicensePlate from "../LicensePlate";

const changeInputMaskValue = (element, value) => {
  element.value = value;
  element.selectionStart = element.selectionEnd = value.length;
  Simulate.change(element);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("LicensePlate quotation step", () => {
  it("should trigger screen viewed when component is rendered", async () => {
    const promise = Promise.resolve();
    renderWithTheme(<LicensePlate />);
    await act(() => promise); // https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning

    expect(mixpanelTracker.autoTracker.trackScreen).toHaveBeenCalledTimes(1);
    expect(mixpanelTracker.autoTracker.trackScreen).toHaveBeenCalledWith(
      "QuoteLicensePlate"
    );
  });

  it("should trigger track link event when skip button is clicked", async () => {
    const promise = Promise.resolve();
    renderWithTheme(<LicensePlate />);
    await act(() => promise);

    const skipButton = screen.getByText("Pular etapa");
    expect(skipButton).toBeDefined();
    fireEvent.click(skipButton);

    expect(mixpanelTracker.autoTracker.trackLink).toHaveBeenCalledTimes(1);
    expect(mixpanelTracker.autoTracker.trackLink).toHaveBeenCalledWith(
      "QuoteLicensePlate Unknown"
    );
  });

  it("should trigger continue event when submit button is clicked with correct input info", async () => {
    const { container } = renderWithTheme(<LicensePlate />);

    const input = screen.getByLabelText("Placa (opcional)") as HTMLInputElement;
    expect(input).toBeDefined();

    const submitButton = container.querySelector('button[type="submit"]');

    changeInputMaskValue(input, "gwz9846");
    expect(input.value).toBe("GWZ-9846");

    await new Promise((resolve) => setImmediate(resolve));

    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    await new Promise((resolve) => setImmediate(resolve));

    expect(mixpanelTracker.autoTracker.trackButton).toHaveBeenCalledTimes(1);
    expect(mixpanelTracker.autoTracker.trackButton).toHaveBeenCalledWith(
      "QuoteLicensePlate Continue",
      {
        licensePlate: "GWZ-9846",
      }
    );
  });

  it("should not trigger continue event when input is empty", async () => {
    const { container } = renderWithTheme(<LicensePlate />);

    const input = screen.getByLabelText("Placa (opcional)") as HTMLInputElement;
    expect(input).toBeDefined();
    expect(input.value).toBe("");

    const submitButton = container.querySelector('button[type="submit"]');

    await new Promise((resolve) => setImmediate(resolve));

    expect(submitButton).toBeDisabled();

    fireEvent.click(submitButton);

    await new Promise((resolve) => setImmediate(resolve));

    expect(mixpanelTracker.autoTracker.trackButton).toHaveBeenCalledTimes(0);
  });

  it("should not trigger continue event when input value is incomplete", async () => {
    const { container } = renderWithTheme(<LicensePlate />);

    const input = screen.getByLabelText("Placa (opcional)") as HTMLInputElement;
    expect(input).toBeDefined();
    changeInputMaskValue(input, "haa");
    expect(input.value).toBe("HAA-");

    const submitButton = container.querySelector('button[type="submit"]');

    await new Promise((resolve) => setImmediate(resolve));

    expect(submitButton).toBeDisabled();

    fireEvent.click(submitButton);

    await new Promise((resolve) => setImmediate(resolve));

    expect(mixpanelTracker.autoTracker.trackButton).toHaveBeenCalledTimes(0);
  });
});
