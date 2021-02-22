import { fetchPlans } from "services/smartphone/plans";
import { parseSmartphoneModels } from "helpers/smartphone/plans/parseSmartphoneModels";
import { parsePlansValues } from "helpers/smartphone/plans/parsePlansValues";

export const buildModelsPlans = async () => {
  try {
    const availablePlans = await fetchPlans();
    return {
      plansValues: parsePlansValues(availablePlans),
      smartphoneModels: parseSmartphoneModels(availablePlans),
    };
  } catch (e) {
    throw new Error(
      `Failed to build available plans due to: ${
        e.message || JSON.stringify(e)
      }`
    );
  }
};
