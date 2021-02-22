import { render } from "@testing-library/react";

import theme from "ui/theme";
import { ThemeProvider } from "styled-components";

jest.mock("helpers/mixpanelTracker");

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

jest.mock("../QuotationProvider", () => ({
  useQuotationContext: () => ({
    setExtraData: jest.fn(),
    extraData: jest.fn(),
    machineService: { send: jest.fn(), current: jest.fn() },
    restartMachine: jest.fn(),
  }),
}));
