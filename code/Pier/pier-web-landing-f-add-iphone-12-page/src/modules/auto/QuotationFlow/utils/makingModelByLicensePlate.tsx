import validateLicensePlateYear from "./validateLicensePlateYear";

export const makingModelByLicensePlate = (licensePlate) => {
  if (licensePlate) {
    const brand = licensePlate.name
      ? {
          label: licensePlate.name,
          value: {
            attributes: licensePlate,
          },
        }
      : null;
    const year = validateLicensePlateYear(licensePlate.year)
      ? {
          label: licensePlate.year.toString(),
          value: licensePlate.year,
        }
      : {
          label: licensePlate?.fabrication_year.toString(),
          value: licensePlate?.fabrication_year,
        };

    const hasOnlyOneOption = licensePlate?.items.length === 1;
    const firstOption = licensePlate.items[0];

    const selectedModel = hasOnlyOneOption
      ? {
          label: firstOption.model,
          value: {
            attributes: { id: firstOption.id, model: firstOption.model },
          },
        }
      : null;

    const modelOptions = licensePlate?.items.map((item) => ({
      id: item.id,
      attributes: {
        model: item.model,
      },
    }));

    return { year, brand, selectedModel, modelOptions };
  }
  return null;
};
