import { fetchApi } from "services/api";
import { Deserializer } from "jsonapi-serializer";
import { InternalPlan } from "helpers/smartphone/plans/types";

const INTERNAL_PLANS_URL = "/quotes/plan/internal_plans";

const deserializer = new Deserializer({
  keyForAttribute: "camelCase",
});

const planBelongsToAvailableDevice = (plan: InternalPlan) =>
  !plan.visiblePlan.deviceTypeVariation.deviceType.deprecated;

export const fetchPlans = async ({
  channel = "PIER",
  modelName = "",
  upcoming = false,
} = {}): Promise<InternalPlan[]> => {
  const now = new Date().toISOString();
  const upcomingPlansFilter = `filter[q][starts_at_gt]=${now}`;
  const availablePlansFilter = `filter[q][starts_at_lt]=${now}&filter[q][ends_at_gteq]=${now}`;

  const include = "include=visible_plan.device_type_variation.device_type";
  const timeWindowFilter = upcoming
    ? upcomingPlansFilter
    : availablePlansFilter;
  const modelNameFilter = `filter[q][visible_plan_device_type_variation_name_cont_any][]=${modelName}`;
  const channelFilter = `filter[q][channels_contains]=${channel}`;

  const url = [
    `${INTERNAL_PLANS_URL}?${include}`,
    timeWindowFilter,
    modelNameFilter,
    channelFilter,
  ].join("&");

  const response = await fetchApi(url, { method: "GET" });

  const plans: InternalPlan[] = await deserializer.deserialize(response);

  return plans.filter(planBelongsToAvailableDevice);
};
