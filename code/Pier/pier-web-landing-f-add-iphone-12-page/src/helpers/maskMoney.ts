const maskMoney = (value: number | string): string =>
  "R$ " +
  Number(value)
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");

export default maskMoney;
