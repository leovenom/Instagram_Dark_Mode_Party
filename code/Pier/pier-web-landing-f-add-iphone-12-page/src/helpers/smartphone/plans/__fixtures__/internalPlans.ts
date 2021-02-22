import {
  InternalPlan,
  DeviceType,
  DeviceTypeVariation,
} from "helpers/smartphone/plans/types";

const iphoneXS: DeviceType = {
  name: "iPhone XS",
  os: "ios",
  manufacturer: "Apple",
  series: undefined,
  deprecated: false,
  seriesPriority: 1,
  modelPriority: 0,
};

const iphoneXSMax: DeviceType = {
  name: "iPhone XS Max",
  os: "ios",
  manufacturer: "Apple",
  series: undefined,
  deprecated: false,
  seriesPriority: 1,
  modelPriority: 1,
};

const iphoneXS64GB: DeviceTypeVariation = {
  variationCode: "64GB",
  deviceType: iphoneXS,
};

const iphoneXS256GB: DeviceTypeVariation = {
  variationCode: "256GB",
  deviceType: iphoneXS,
};

const iphoneXSMax64GB: DeviceTypeVariation = {
  variationCode: "64GB",
  deviceType: iphoneXSMax,
};

const iphoneXSMax256GB: DeviceTypeVariation = {
  variationCode: "256GB",
  deviceType: iphoneXSMax,
};

export const internalPlans: InternalPlan[] = [
  {
    insuredValue: "4180.0",
    priceMonth: "89.7",
    visiblePlan: {
      code: "iphone_xs_64gb_deductible_0",
      planType: "premium",
      deviceTypeVariation: iphoneXS64GB,
    },
  },
  {
    insuredValue: "3344.0",
    priceMonth: "65.3",
    visiblePlan: {
      code: "iphone_xs_64gb_deductible_20",
      planType: "economic",
      deviceTypeVariation: iphoneXS64GB,
    },
  },
  {
    insuredValue: "4670.0",
    priceMonth: "100.2",
    visiblePlan: {
      code: "iphone_xs_256gb_deductible_0",
      planType: "premium",
      deviceTypeVariation: iphoneXS256GB,
    },
  },
  {
    insuredValue: "3736.0",
    priceMonth: "72.9",
    visiblePlan: {
      code: "iphone_xs_256gb_deductible_20",
      planType: "economic",
      deviceTypeVariation: iphoneXS256GB,
    },
  },
  {
    insuredValue: "4610.0",
    priceMonth: "98.9",
    visiblePlan: {
      code: "iphone_xs_max_64gb_deductible_0",
      planType: "premium",
      deviceTypeVariation: iphoneXSMax64GB,
    },
  },
  {
    insuredValue: "3688.0",
    priceMonth: "72.0",
    visiblePlan: {
      code: "iphone_xs_max_64gb_deductible_20",
      planType: "economic",
      deviceTypeVariation: iphoneXSMax64GB,
    },
  },
  {
    insuredValue: "5070.0",
    priceMonth: "108.8",
    visiblePlan: {
      code: "iphone_xs_max_256gb_deductible_0",
      planType: "premium",
      deviceTypeVariation: iphoneXSMax256GB,
    },
  },
  {
    insuredValue: "4056.0",
    priceMonth: "79.1",
    visiblePlan: {
      code: "iphone_xs_max_256gb_deductible_20",
      planType: "economic",
      deviceTypeVariation: iphoneXSMax256GB,
    },
  },
];
