import App from "next/app";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";

import { GlobalStyle } from "ui/theme/global";
import theme from "ui/theme";
import { ToastProvider } from "ui/Toast";
import { QuotationProvider } from "modules/auto/QuotationFlow/QuotationProvider";
import {
  ModalManagementProvider,
  ModalManagementContainer,
} from "modules/shared/ModalManagement";
import registerLastTouch from "helpers/mixpanelLastTouch";

export default class MyApp extends App {
  componentDidMount() {
    registerLastTouch();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CookiesProvider>
          <>
            <GlobalStyle />
            <ToastProvider>
              <ModalManagementProvider>
                <QuotationProvider>
                  <ModalManagementContainer />
                  <Component {...pageProps} />
                </QuotationProvider>
              </ModalManagementProvider>
            </ToastProvider>
          </>
        </CookiesProvider>
      </ThemeProvider>
    );
  }
}
