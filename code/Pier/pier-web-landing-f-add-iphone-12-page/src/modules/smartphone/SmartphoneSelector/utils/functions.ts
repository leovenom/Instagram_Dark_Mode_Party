import { brands } from "../data";

const extractBrandsAndSeries = (allModels = {}) =>
  Object.values(allModels).reduce(
    (prevValue: any, currentValue: any) => {
      const { manufacturer, name, priority, deviceOs } = currentValue;
      const { series } = prevValue;

      if (!prevValue.brands[manufacturer]) {
        prevValue.brands[manufacturer] = {
          name: manufacturer,
          priority: brands[manufacturer].priority,
          deviceOs,
        };
      }

      if (!series[manufacturer]) {
        series[manufacturer] = [];
      }

      series[manufacturer].push({
        name,
        priority,
        models: currentValue.models,
      });

      return prevValue;
    },
    { brands: {}, series: {} }
  );

const sortByPriority = (a: { priority: number }, b: { priority: number }) =>
  a.priority - b.priority;

export { extractBrandsAndSeries, sortByPriority };
