import colors from "../theme/colors";
import { css } from "styled-components";
import breakpoints from "../theme/breakpoints";

export const font = {
  primary: `
    "Heebo",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif,
    "Segoe UI Symbol"
    `,
  secondary: "Calistoga",
};

interface Typography {
  [key: string]: {
    component: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    style: any;
  };
}

const typography: Typography = {
  display: {
    component: "h1",
    style: css`
      font-family: "Calistoga";
      font-size: 36px;
      line-height: 42px;

      ${breakpoints.tablet} {
        font-size: 48px;
        line-height: 58px;
      }
    `,
  },
  section: {
    component: "h2",
    style: css`
      font-family: "Calistoga";
      font-size: 32px;
      line-height: 38px;
      letter-spacing: -1px;

      ${breakpoints.tablet} {
        font-size: 48px;
        line-height: 58px;
        letter-spacing: -1.43px;
      }
    `,
  },
  sectionSmall: {
    component: "h2",
    style: css`
      font-size: 24px;
      line-height: 28px;

      ${breakpoints.tablet} {
        font-size: 32px;
        line-height: 38px;
      }
    `,
  },
  sectionSecondary: {
    component: "h3",
    style: css`
      font-family: "Calistoga";
      font-size: 36px;
      line-height: 58px;
    `,
  },
  subtitleExtraLarge: {
    component: "h4",
    style: css`
      font-family: "Calistoga";
      font-size: 32px;
      line-height: 40px;
    `,
  },
  subtitleLarge: {
    component: "h4",
    style: css`
      font-family: "Calistoga";
      font-size: 24px;
      line-height: 29px;
    `,
  },
  subtitle: {
    component: "h4",
    style: css`
      font-size: 24px;
      line-height: 30px;
    `,
  },
  subtitleSmall: {
    component: "h5",
    style: css`
      font-size: 17px;
      line-height: 20px;
    `,
  },
  bodyLarge: {
    component: "p",
    style: css`
      font-size: 18px;
      line-height: 26px;
    `,
  },
  body: {
    component: "p",
    style: css`
      font-size: 16px;
      line-height: 24px;
    `,
  },
  bodySmall: {
    component: "p",
    style: css`
      font-size: 14px;
      line-height: 20px;
    `,
  },
  bodySmallest: {
    component: "p",
    style: css`
      font-size: 12px;
      line-height: 18px;
    `,
  },
  bodyResponsive: {
    component: "p",
    style: css`
      font-size: 13px;
      line-height: 20px;

      ${breakpoints.tablet} {
        font-size: 16px;
        line-height: 24px;
      }
    `,
  },
  caption: {
    component: "p",
    style: css`
      font-size: 15px;
      line-height: 20px;
    `,
  },
  label: {
    component: "label",
    style: css`
      font-size: 13px;
      line-height: 16px;
    `,
  },
  linkLarge: {
    component: "p",
    style: css`
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.primary};
    `,
  },
  tag: {
    component: "p",
    style: css`
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${colors.primary};
    `,
  },
};

export default typography;
