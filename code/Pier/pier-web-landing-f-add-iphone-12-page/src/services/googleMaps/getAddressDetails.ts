import config from "config";
import jsonToQueryString from "helpers/jsonToQueryString";

const GOOGLE_MAPS_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";

const getAddressDetails = (address) => {
  const formattedAddress = `${address.street} ${address.number} ${address.neighborhood} ${address.city}`;

  const params = {
    address: formattedAddress,
    key: config.GOOGLE_MAPS_KEY,
  };

  return {
    url: `${GOOGLE_MAPS_API_URL}${jsonToQueryString(params)}`,
    options: {
      method: "GET",
      headers: {
        accept: "application/json, text/plain, */*",
      },
    },
  };
};

export default getAddressDetails;
