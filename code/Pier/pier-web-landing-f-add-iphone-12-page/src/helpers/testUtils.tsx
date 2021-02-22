import theme from "../ui/theme";
import { render } from "@testing-library/react";
import * as React from "react";
import { ThemeProvider } from "styled-components";

const WithTheme: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const renderWithTheme = (ui: JSX.Element, options = {}) =>
  render(ui, { wrapper: WithTheme, ...options });
