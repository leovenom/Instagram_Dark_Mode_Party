import { InternalPlan, PlansValues } from "./types";

const parseInternalPlan = (
  plansValues: PlansValues,
  internalPlan: InternalPlan
): PlansValues => {
  const {
    insuredValue,
    priceMonth,
    visiblePlan: { code: planCode, planType },
  } = internalPlan;

  const model = planCode
    .substring(0, planCode.indexOf("_deductible"))
    .toUpperCase();

  const values = {
    [planType]: {
      insuredValue: parseFloat(insuredValue),
      price: parseFloat(priceMonth),
    },
  };

  plansValues[model] = !plansValues[model]
    ? values
    : { ...plansValues[model], ...values };

  return { ...plansValues };
};

export const parsePlansValues = (plans: InternalPlan[] = []): PlansValues => {
  return plans.reduce(parseInternalPlan, {});
};
