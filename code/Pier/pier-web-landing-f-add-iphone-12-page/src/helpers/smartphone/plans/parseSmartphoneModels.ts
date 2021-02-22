import toSnakeUpperCase from "helpers/toSnakeUppercase";

import { capitalize } from "helpers/stringUtils";

import { InternalPlan, SmartphoneModel, SmartphoneModelsDict } from "./types";

const buildModelFromVisiblePlan = (
  smartphoneModels: SmartphoneModelsDict,
  {
    family = "",
    modelName = "",
    memory = "",
    deviceOs = "",
    manufacturer = "",
    modelPriority = 0,
    seriesPriority = 0,
  } = {}
): SmartphoneModelsDict => {
  const familyKey = toSnakeUpperCase(family);
  const lessPriority = Infinity;
  const model = {
    name: modelName,
    memories: [memory],
    priority: modelPriority || lessPriority, // Falsy `modelPriority` indicates less priority
  };

  if (!smartphoneModels[familyKey]) {
    smartphoneModels[familyKey] = {
      deviceOs,
      name: capitalize(family),
      manufacturer: capitalize(manufacturer),
      models: [model],
      priority: seriesPriority || lessPriority, // Falsy `seriesPriority` indicates less priority
    };
    return { ...smartphoneModels };
  }

  const existingModel = smartphoneModels[familyKey].models.find(
    (m) => m.name === modelName
  );

  if (!existingModel) {
    smartphoneModels[familyKey].models.push(model);
    return { ...smartphoneModels };
  }

  existingModel.memories.push(memory);

  return { ...smartphoneModels };
};

const parseInternalPlan = (
  smartphoneModels: SmartphoneModelsDict,
  internalPlan: InternalPlan
): SmartphoneModelsDict => {
  const {
    visiblePlan: {
      deviceTypeVariation: {
        variationCode: memory,
        deviceType: {
          name: modelName,
          os: deviceOs,
          manufacturer,
          series,
          seriesPriority,
          modelPriority,
        },
      },
      planType,
    },
  } = internalPlan;

  const family = [manufacturer, series].filter(Boolean).join(" ");

  const isPremium = planType === "premium";

  return isPremium
    ? buildModelFromVisiblePlan(smartphoneModels, {
        family,
        modelName,
        memory,
        deviceOs,
        manufacturer,
        seriesPriority,
        modelPriority,
      })
    : { ...smartphoneModels };
};

export const parseSmartphoneModels = (
  plans: InternalPlan[] = []
): SmartphoneModel[] => {
  const smartphoneModels: SmartphoneModel[] = Object.values(
    plans.reduce(parseInternalPlan, {})
  );

  const hasAscedantPriority = (a, b) => a.priority - b.priority;

  const sort = (arr) => arr.sort(hasAscedantPriority);

  return sort(smartphoneModels).map(({ models, ...familySpecs }) => ({
    ...familySpecs,
    models: sort(models),
  }));
};
