export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkBaseAndComputeNewValue = (value: number, base: number): number => {
  if (base < 1) {
    const isOddNumber = value % 2;
    return isOddNumber ? (value - 1) * base : value * base;
  }

  return value * base;
};

export const getValueAsCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value / 100);
};

export const recalculateCurrency = (
  value: number,
  base: number,
  hasCurrencyMark = true
): string | null => {
  if (!value) return null;

  const computedValue = checkBaseAndComputeNewValue(value, base);
  const finalValue = getValueAsCurrency(computedValue);

  if (hasCurrencyMark) return finalValue;
  return finalValue.split("$")[1].trim();
};
