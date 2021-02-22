const brands = {
  Apple: { name: "Apple", priority: 1, deviceOs: "ios" },
  Motorola: { name: "Motorola", priority: 6, deviceOs: "android" },
};

const series = {
  Apple: [
    {
      name: "Apple",
      priority: 1,
      models: [
        {
          name: "iPhone 12 mini",
          memories: ["64GB", "128GB", "256GB"],
          priority: 1,
        },
      ],
    },
  ],
  Motorola: [
    {
      name: "Motorola Moto G",
      priority: 6,
      models: [
        {
          memories: ["128GB"],
          name: "Moto G9 Plus",
          priority: 1,
        },
      ],
    },
    {
      name: "Motorola One",
      priority: 7,
      models: [
        {
          memories: ["128GB"],
          name: "Motorola One Fusion+",
          priority: 1,
        },
      ],
    },
  ],
};

export { brands, series };
