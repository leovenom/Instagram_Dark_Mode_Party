export const makingFullAddress = (fullAddress) => {
  if (
    fullAddress?.neighborhood &&
    fullAddress?.["ship-city"] &&
    fullAddress?.number &&
    fullAddress?.["ship-address"]
  ) {
    return {
      street: fullAddress?.["ship-address"].trim(),
      number: fullAddress?.number.trim(),
      neighborhood: fullAddress?.neighborhood.trim(),
      city: fullAddress?.["ship-city"].trim(),
    };
  }
  return null;
};
