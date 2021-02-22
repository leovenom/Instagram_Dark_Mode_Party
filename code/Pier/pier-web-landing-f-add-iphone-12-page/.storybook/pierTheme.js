import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#5B5ADB",
  colorSecondary: "#FF80BB",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#303042",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "#5B5ADB",

  // Form colors
  inputBg: "white",
  inputBorder: "white",
  inputTextColor: "#303042",
  inputBorderRadius: 4,

  brandTitle: "Pier style guide",
  brandUrl: "https://pier.digital",
  brandImage:
    "https://i2.wp.com/storage.googleapis.com/pier-blog/2019/08/logo_vector-2.png?fit=195%2C51&ssl=1",
});
