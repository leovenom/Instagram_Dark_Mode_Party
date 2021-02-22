const fixVhProperty = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const resizeAndFixVhProperty = () => {
  fixVhProperty();
  window.addEventListener("resize", () => fixVhProperty());
};

export { resizeAndFixVhProperty, fixVhProperty };
