const mod11 = (num) => num % 11;
const NOT = (x) => !x;
const isEqual = (a) => (b) => b === a;
const mergeDigits = (num1, num2) => `${num1}${num2}`;
const getTwoLastDigits = (cpf) => `${cpf[9]}${cpf[10]}`;
const getCpfNumeral = (cpf) => cpf.substr(0, 9).split("");

const isRepeatingChars = (str) =>
  str.split("").every((elem) => elem === str[0]);

const toSumOfProducts = (multiplier) => (result, num) =>
  result + num * multiplier--;

const getSumOfProducts = (list, multiplier) =>
  list.reduce(toSumOfProducts(multiplier), 0);

const getDigit = (num) => (num > 1 ? 11 - num : 0);

const getValidationDigit = (multiplier) => (cpf) =>
  getDigit(mod11(getSumOfProducts(cpf, multiplier)));

const isRepeatingNumbersCpf = isRepeatingChars;

const isValidCPF = (cpf) => {
  const CPF = getCpfNumeral(cpf);
  const firstDigit = getValidationDigit(10)(CPF);
  const secondDigit = getValidationDigit(11)(CPF.concat(firstDigit));

  return isEqual(getTwoLastDigits(cpf))(mergeDigits(firstDigit, secondDigit));
};

const removeNotNumbers = (value) => value.replace(/\D/g, "");

const validateCPF = (CPF: string): boolean => {
  if (!CPF) return false;
  const cpfWithoutMask = removeNotNumbers(CPF);
  return (
    NOT(isRepeatingNumbersCpf(cpfWithoutMask)) && isValidCPF(cpfWithoutMask)
  );
};

export default validateCPF;
