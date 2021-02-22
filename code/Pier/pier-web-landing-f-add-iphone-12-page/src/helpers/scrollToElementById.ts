const scrollToElementById = (id: string): void => {
  const element = document.getElementById(id);

  setTimeout(() => {
    element.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

export default scrollToElementById;
