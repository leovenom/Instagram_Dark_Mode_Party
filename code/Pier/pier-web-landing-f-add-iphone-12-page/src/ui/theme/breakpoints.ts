export const DESKTOP_MIN_WIDTH = 840;
export const TABLET_MIN_WIDTH = 600;
export const MOBILE_MIN_WIDTH = 0;

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const customHeight = (minWidth: number) => `@media (min-height: ${minWidth}px)`;

const breakpoints = {
  custom: customMediaQuery,
  customHeight,
  desktop: customMediaQuery(DESKTOP_MIN_WIDTH),
  tablet: customMediaQuery(TABLET_MIN_WIDTH),
  mobile: customMediaQuery(MOBILE_MIN_WIDTH),
};

export default breakpoints;
