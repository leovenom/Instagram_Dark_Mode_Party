import { fireEvent } from "@testing-library/react";

import { renderWithTheme } from "helpers/testUtils";
import * as mixpanelTracker from "helpers/mixpanelTracker";
import InspectLater from "../InspectLater";

jest.mock("next/router", () => {
  const original = jest.requireActual("next/router");

  return {
    __esModule: true,
    ...original,
    useRouter: () => ({
      push: jest.fn(),
    }),
  };
});
jest.mock("helpers/mixpanelTracker");

describe("InspectLater Signup Step", () => {
  test("triggers screen viewed when page is rendered", () => {
    renderWithTheme(<InspectLater />);

    expect(mixpanelTracker.autoTracker.trackScreen).toHaveBeenCalledTimes(1);
    expect(mixpanelTracker.autoTracker.trackScreen).toHaveBeenCalledWith(
      "Inspect Later"
    );
  });

  test("triggers event when download app is clicked", () => {
    const { getByText } = renderWithTheme(<InspectLater />);
    fireEvent.click(getByText("Baixe o App"));

    expect(mixpanelTracker.autoTracker.trackButton).toHaveBeenCalledWith(
      "Inspect Later Download App"
    );
  });
});
