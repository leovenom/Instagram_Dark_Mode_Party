const _8GB = "8GB";
const _16GB = "16GB";
const _32GB = "32GB";
const _64GB = "64GB";
const _128GB = "128GB";
const _256GB = "256GB";
const _512GB = "512GB";
const _1024GB = "1024GB";

interface ModelInfo {
  name: string;
  memories?: string[];
}

interface Model {
  name: string;
  models: ModelInfo[];
  deviceOs: string;
  manufacturer?: string;
  isFakeDoor?: boolean;
}

/*
  if you notice models without `memories` key: dont't panic!
  they're not officially covered in our product, we just use this pattern to decide
  wheter we show its plans or the fakedoor interface
*/

const APPLE: Model = {
  deviceOs: "ios",
  name: "Apple",
  isFakeDoor: false,
  models: [
    { name: "iPhone 6S", memories: [_16GB, _32GB, _64GB, _128GB] },

    { name: "iPhone 6S PLUS", memories: [_16GB, _32GB, _64GB, _128GB] },

    { name: "iPhone 7", memories: [_32GB, _128GB, _256GB] },

    { name: "iPhone 7 PLUS", memories: [_32GB, _128GB, _256GB] },

    { name: "iPhone 8", memories: [_64GB, _128GB, _256GB] },

    { name: "iPhone 8 PLUS", memories: [_64GB, _128GB, _256GB] },

    { name: "iPhone X", memories: [_64GB, _256GB] },

    { name: "iPhone XR", memories: [_64GB, _128GB, _256GB] },

    { name: "iPhone XS", memories: [_64GB, _256GB, _512GB] },

    { name: "iPhone XS MAX", memories: [_64GB, _256GB, _512GB] },

    { name: "iPhone 11 Pro Max", memories: [_512GB, _256GB, _64GB] },

    { name: "iPhone 11 Pro", memories: [_64GB, _256GB, _512GB] },

    { name: "iPhone 11", memories: [_64GB, _256GB, _128GB] },

    { name: "iPhone SE 2020", memories: [_64GB, _128GB, _256GB] },

    { name: "iPhone 12 mini", memories: [_64GB, _128GB, _256GB] },

    { name: "iPhone 12", memories: [_64GB, _128GB, _256GB] },

    { name: "iPhone 12 Pro", memories: [_128GB, _256GB, _512GB] },

    { name: "iPhone 12 Pro Max", memories: [_128GB, _256GB, _512GB] },
  ],
};

const SAMSUNG_GALAXY_S: Model = {
  deviceOs: "android",
  name: "Samsung Galaxy S",
  isFakeDoor: false,
  models: [
    { name: "Galaxy S8", memories: [_64GB] },

    { name: "Galaxy S8 PLUS", memories: [_64GB, _128GB] },

    { name: "Galaxy S9", memories: [_64GB, _128GB] },

    { name: "Galaxy S9 PLUS", memories: [_64GB, _128GB] },

    { name: "Galaxy S10", memories: [_128GB, _512GB] },

    { name: "Galaxy S10 PLUS", memories: [_128GB, _512GB, _1024GB] },

    { name: "Galaxy S10 LITE", memories: [_128GB] },

    { name: "Galaxy S10E", memories: [_128GB] },

    { name: "Galaxy S20", memories: [_128GB] },

    { name: "Galaxy S20 PLUS", memories: [_128GB] },

    { name: "Galaxy S20 ULTRA", memories: [_128GB, _512GB] },

    { name: "Galaxy S20 FE", memories: [_128GB, _256GB] },
  ],
};

const SAMSUNG_GALAXY_J: Model = {
  deviceOs: "android",
  name: "Samsung Galaxy J",
  isFakeDoor: false,
  models: [
    { name: "Galaxy J2 PRIME", memories: [_8GB, _16GB] },

    { name: "Galaxy J5 PRIME", memories: [_32GB] },

    { name: "Galaxy J7 PRIME", memories: [_32GB] },

    { name: "Galaxy J7 PRIME 2", memories: [_32GB] },

    { name: "Galaxy J2 PRO 2018", memories: [_16GB] },

    { name: "Galaxy J5 PRO", memories: [_32GB] },

    { name: "Galaxy J7 PRO", memories: [_64GB] },

    { name: "Galaxy J4 CORE", memories: [_16GB] },

    { name: "Galaxy J4", memories: [_16GB, _32GB] },

    { name: "Galaxy J4 PLUS", memories: [_32GB] },

    { name: "Galaxy J6", memories: [_32GB, _64GB] },

    { name: "Galaxy J6 PLUS", memories: [_32GB] },

    { name: "Galaxy J7 DUO", memories: [_32GB] },

    { name: "Galaxy J7 NEO", memories: [_16GB] },

    { name: "Galaxy J8", memories: [_64GB] },
  ],
};

const SAMSUNG_GALAXY_A: Model = {
  deviceOs: "android",
  name: "Samsung Galaxy A",
  isFakeDoor: false,
  models: [
    { name: "Galaxy A11", memories: [_64GB] },

    { name: "Galaxy A21S", memories: [_64GB] },

    { name: "Galaxy A31", memories: [_128GB] },

    { name: "Galaxy A10", memories: [_32GB] },

    { name: "Galaxy A10S", memories: [_32GB] },

    { name: "Galaxy A20", memories: [_32GB] },

    { name: "Galaxy A20S", memories: [_32GB] },

    { name: "Galaxy A30", memories: [_64GB] },

    { name: "Galaxy A30S", memories: [_64GB] },

    { name: "Galaxy A50", memories: [_64GB, _128GB] },

    { name: "Galaxy A51", memories: [_128GB] },

    { name: "Galaxy A70", memories: [_128GB] },

    { name: "Galaxy A71", memories: [_128GB] },

    { name: "Galaxy A80", memories: [_128GB] },

    { name: "Galaxy A9", memories: [_128GB] },

    { name: "Galaxy A8", memories: [_64GB] },

    { name: "Galaxy A8 PLUS", memories: [_64GB] },

    { name: "Galaxy A7", memories: [_64GB, _128GB] },

    { name: "Galaxy A6 PLUS", memories: [_64GB] },
  ],
};

const SAMSUNG_GALAXY_NOTE: Model = {
  deviceOs: "android",
  name: "Samsung Galaxy Note",
  isFakeDoor: false,
  models: [
    { name: "Galaxy note 8", memories: [_64GB, _128GB] },

    { name: "Galaxy note 9", memories: [_128GB] },

    { name: "Galaxy note 10", memories: [_256GB] },

    { name: "Galaxy note 10 PLUS", memories: [_256GB, _512GB] },

    { name: "Galaxy note 10 LITE", memories: [_128GB] },

    { name: "Galaxy note 20", memories: [_256GB] },

    { name: "Galaxy note 20 ULTRA", memories: [_256GB, _512GB] },
  ],
};

const MOTOROLA_ONE: Model = {
  deviceOs: "android",
  name: "Motorola One",
  manufacturer: "Motorola",
  isFakeDoor: false,
  models: [
    { name: "Motorola One Macro", memories: [_64GB] },
    { name: "Motorola One Action", memories: [_128GB] },
    { name: "Motorola One", memories: [_64GB] },
    { name: "Motorola One Hyper", memories: [_128GB] },
    { name: "Motorola One Vision", memories: [_128GB] },
    { name: "Motorola One Zoom", memories: [_128GB] },
    { name: "Motorola One Fusion", memories: [_64GB, _128GB] },
    { name: "Motorola One Fusion+", memories: [_128GB] },
  ],
};

const XIAOMI_MI: Model = {
  deviceOs: "android",
  name: "Xiaomi MI",
  manufacturer: "Xiaomi",
  isFakeDoor: true,
  models: [
    { name: "Mi Note 10" },

    { name: "Mi 9" },

    { name: "Mi 9T" },

    { name: "Mi 9T Pro" },

    { name: "Mi 9 Pro" },

    { name: "Mi 9 SE" },

    { name: "Mi 9 Lite" },

    { name: "Mi 8" },

    { name: "Mi 8 SE" },

    { name: "Mi 8 Pro" },

    { name: "Mi 8 Lite" },

    { name: "Mi A3" },
  ],
};

const XIAOMI_REDMI: Model = {
  deviceOs: "android",
  name: "Xiaomi Redmi",
  manufacturer: "Xiaomi",
  isFakeDoor: true,
  models: [
    { name: "Redmi 9" },

    { name: "Redmi 9A" },

    { name: "Redmi 8" },

    { name: "Redmi 8A" },

    { name: "Redmi Note 9 Pro" },

    { name: "Redmi Note 9 Pro Max" },

    { name: "Redmi Note 9 S" },

    { name: "Redmi Note 8" },

    { name: "Redmi Note 8 Pro" },

    { name: "Redmi Note 8T" },
  ],
};

const MOTOROLA_MOTO_G: Model = {
  deviceOs: "android",
  name: "Motorola Moto G",
  manufacturer: "Motorola",
  isFakeDoor: false,
  models: [
    { name: "Moto G8", memories: [_64GB] },
    { name: "Moto G8 Play", memories: [_32GB] },
    { name: "Moto G8 Plus", memories: [_64GB] },
    { name: "Moto G8 Power", memories: [_64GB] },
    { name: "Moto G8 Power Lite", memories: [_64GB] },
    { name: "Moto G9 Play", memories: [_64GB] },
    { name: "Moto G9 Plus", memories: [_128GB] },
    { name: "Moto G7" },
    { name: "Moto G7 Plus" },
    { name: "Moto G7 Power" },
    { name: "Moto G7 Play" },
  ],
};

const MOTOROLA_EDGE: Model = {
  deviceOs: "android",
  name: "Motorola Edge",
  manufacturer: "Motorola",
  isFakeDoor: false,
  models: [
    { name: "Motorola Edge", memories: [_128GB] },
    { name: "Motorola Edge Plus", memories: [_256GB] },
  ],
};

const MOTOROLA_RAZR: Model = {
  deviceOs: "android",
  name: "Motorola Razr",
  manufacturer: "Motorola",
  isFakeDoor: true,
  models: [{ name: "Motorola Razr" }],
};

const smartphones = [
  APPLE,
  SAMSUNG_GALAXY_S,
  SAMSUNG_GALAXY_J,
  SAMSUNG_GALAXY_A,
  SAMSUNG_GALAXY_NOTE,
  XIAOMI_MI,
  XIAOMI_REDMI,
  MOTOROLA_ONE,
  MOTOROLA_MOTO_G,
  MOTOROLA_EDGE,
  MOTOROLA_RAZR,
];

export default smartphones;
