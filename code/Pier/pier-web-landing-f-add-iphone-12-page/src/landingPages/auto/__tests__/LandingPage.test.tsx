import { fireEvent } from "@testing-library/react";

import AutoLandingPage from "../LandingPage";
import * as mixpanelTracker from "helpers/mixpanelTracker";
import { renderWithTheme } from "helpers/testUtils";

jest.mock("next/router", () => {
  const original = jest.requireActual("next/router");

  return {
    __esModule: true,
    ...original,
    useRouter: () => ({
      query: {},
      pathname: "",
    }),
  };
});

jest.mock("next/link", () => ({ children }) => children);
jest.mock("helpers/mixpanelTracker");

declare global {
  interface Window {
    Intercom: any;
  }
}
window.Intercom = jest.fn();

describe("Auto Landing Screen", () => {
  test("correctly calls mixpanel event when clicking on quote button", () => {
    // this is for prevent console from showing unknown props from SVG
    // I still didn't find a better way to do that
    const originalError = console.error;
    console.error = jest.fn();

    const { getAllByRole } = renderWithTheme(<AutoLandingPage />);
    fireEvent.click(getAllByRole("link", { name: /cotar online/i })[0]);

    expect(mixpanelTracker.autoTracker.trackButton).toHaveBeenCalledWith(
      "Landing Page Quote"
    );
    console.error = originalError;
  });
});
