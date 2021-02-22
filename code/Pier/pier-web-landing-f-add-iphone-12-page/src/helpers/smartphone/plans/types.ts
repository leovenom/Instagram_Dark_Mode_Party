export interface DeviceType {
  name: string;
  os: string;
  manufacturer: string;
  series?: string;
  deprecated: boolean;
  seriesPriority: number;
  modelPriority: number;
}

export interface DeviceTypeVariation {
  variationCode: string;
  deviceType: DeviceType;
}

export interface VisiblePlan {
  code: string;
  planType: string;
  deviceTypeVariation: DeviceTypeVariation;
}

export interface InternalPlan {
  insuredValue: string;
  priceMonth: string;
  visiblePlan: VisiblePlan;
}

export interface PlansValues {
  [key: string]: {
    [key: string]: {
      insuredValue: number;
      price: number;
    };
  };
}

export interface SmartphoneModel {
  deviceOs: string;
  name: string;
  manufacturer: string;
  priority: number;
  models: { name: string; priority: number; memories: string[] }[];
}

export interface SmartphoneModelsDict {
  [key: string]: SmartphoneModel;
}
