import toSnakeUpperCase from "../toSnakeUppercase";

export const trackPlanCardOnClickEvent = (
  model: string,
  planType: "economic" | "premium",
  memory: string
): void => {
  window["snowplow"]("trackSelfDescribingEvent", {
    schema: "iglu:com.pier/button_convite/jsonschema/1-0-0",
    data: {
      modelo: toSnakeUpperCase(`${model}_${memory}`),
      memoria: "",
      plano: planType,
    },
  });
};
