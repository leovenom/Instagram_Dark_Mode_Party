const getCepFromGoogleMapsResponse = (response): string | boolean => {
  if (response?.results?.length) {
    const addressComponents = response?.results[0].address_components;
    const zipCodeObject = addressComponents.find((element) =>
      element.types.includes("postal_code")
    );
    if (zipCodeObject) return zipCodeObject.long_name;
    return false;
  }
  return false;
};

export default getCepFromGoogleMapsResponse;
