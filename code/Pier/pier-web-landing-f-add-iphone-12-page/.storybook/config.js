import { configure, addDecorator, addParameters } from "@storybook/react";
import { GlobalStyle } from "../ui/theme/global";
import { withA11y } from "@storybook/addon-a11y";
import { ThemeProvider } from "styled-components";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import pierTheme from "./pierTheme";
import theme from "../ui/theme";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
addParameters({
  options: {
    theme: pierTheme,
  },
});
addDecorator(withA11y);
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

const req = require.context("../ui", true, /\.stories\.(tsx|mdx)$/);

function loadStories() {
  req.keys().forEach(req);
}

// automatically import all files ending in *.stories.js
configure(loadStories, module);
