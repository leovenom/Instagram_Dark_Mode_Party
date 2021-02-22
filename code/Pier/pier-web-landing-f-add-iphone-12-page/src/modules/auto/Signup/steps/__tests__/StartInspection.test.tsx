import { fireEvent } from "@testing-library/react";

import { renderWithTheme } from "helpers/testUtils";
import * as mixpanelTracker from "helpers/mixpanelTracker";
import StartInspection from "../StartInspection";

jest.mock("next/router", () => {
  const original = jest.requireActual("next/router");

  return {
    __esModule: true,
    ...original,
    useRouter: () => ({
      push: jest.fn(),
      query: {},
      pathname: "",
    }),
  };
});

jest.mock("next/link", () => ({ children }) => children);
jest.mock("helpers/mixpanelTracker");

describe("StartInspection Signup Step", () => {
  test("triggers screen viewed when page is rendered", () => {
    renderWithTheme(<StartInspection />);

    expect(mixpanelTracker.autoTracker.trackScreen).toHaveBeenCalledTimes(1);
    expect(mixpanelTracker.autoTracker.trackScreen).toHaveBeenCalledWith(
      "Start Inspection"
    );
  });

  test("triggers download app event when 'Baixe o App' button is clicked", () => {
    const { getByText } = renderWithTheme(<StartInspection />);
    fireEvent.click(getByText("Baixe o App"));

    expect(mixpanelTracker.autoTracker.trackButton).toHaveBeenCalledWith(
      "Start Inspection Download App"
    );
  });

  test("triggers inspect later event when 'Deixar para depois' button is clicked", () => {
    const { getByText } = renderWithTheme(<StartInspection />);
    fireEvent.click(getByText("Deixar para depois"));

    expect(mixpanelTracker.autoTracker.trackButton).toHaveBeenCalledWith(
      "Start Inspection Inspect Later"
    );
  });
});
