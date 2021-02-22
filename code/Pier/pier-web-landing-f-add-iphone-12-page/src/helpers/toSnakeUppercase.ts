const toSnakeUppercase = (value: string): string =>
  value.toUpperCase().replace(/ /g, "_");

export default toSnakeUppercase;
