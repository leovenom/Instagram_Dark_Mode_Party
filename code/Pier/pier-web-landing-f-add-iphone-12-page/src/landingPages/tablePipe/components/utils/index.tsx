import maskMoney from "helpers/maskMoney";
import { pipePlansValues } from "helpers/pipePlansValues";
import toSnakeUppercase from "helpers/toSnakeUppercase";

const getNewPriceOfPlan = ({ smartphoneSelected }) => {
  const modelId = `${toSnakeUppercase(smartphoneSelected?.model.name)}_${
    smartphoneSelected?.memory
  }`;
  const nextPlansValues = pipePlansValues[modelId];

  if (!nextPlansValues) {
    return false;
  }

  return { ...smartphoneSelected, plansValues: { ...nextPlansValues } };
};

const getMonthlyValue = (plan, smartphoneData) => {
  const result = smartphoneData?.plansValues?.[plan]?.price;
  return {
    formatted: maskMoney(result),
    unformatted: result,
  };
};

const getInsuredValue = (plan, smartphoneData) => {
  const result = smartphoneData?.plansValues?.[plan]?.insuredValue;
  return {
    formatted: maskMoney(result),
    unformatted: result,
  };
};

const getArrowsUiOrientation = ({ smartphoneSelected, variant }) => {
  const arrowsUiOrientation = {
    monthly: { economic: "none", premium: "none" },
    insuredValue: { economic: "none", premium: "none" },
  };
  const nextPlansValues = getNewPriceOfPlan({ smartphoneSelected });

  if (variant === "today" || !nextPlansValues) {
    return arrowsUiOrientation;
  }

  // Monthly Economic Diff
  arrowsUiOrientation["monthly"]["economic"] =
    getMonthlyValue("economic", nextPlansValues).unformatted >
    getMonthlyValue("economic", smartphoneSelected).unformatted
      ? "up"
      : "down";

  // Monthly Premium Diff
  arrowsUiOrientation["monthly"]["premium"] =
    getMonthlyValue("premium", nextPlansValues).unformatted >
    getMonthlyValue("premium", smartphoneSelected).unformatted
      ? "up"
      : "down";

  // Insured Value Economic Diff
  arrowsUiOrientation["insuredValue"]["economic"] =
    getInsuredValue("economic", nextPlansValues).unformatted >
    getInsuredValue("economic", smartphoneSelected).unformatted
      ? "up"
      : "down";

  // Insured Value Premium Diff
  arrowsUiOrientation["insuredValue"]["premium"] =
    getMonthlyValue("premium", nextPlansValues).unformatted >
    getMonthlyValue("premium", smartphoneSelected).unformatted
      ? "up"
      : "down";

  return arrowsUiOrientation;
};
export {
  getNewPriceOfPlan,
  getArrowsUiOrientation,
  getInsuredValue,
  getMonthlyValue,
};
