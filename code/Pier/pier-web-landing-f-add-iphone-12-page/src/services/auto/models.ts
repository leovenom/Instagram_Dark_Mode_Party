import { URL, DEFAULT_HEADERS } from "./constants";

const getModels = (brand: string, year: string) => ({
  url: `${URL}/quotes/auto/items/${brand}/${year}`,
  options: {
    method: "GET",
    headers: {
      ...DEFAULT_HEADERS,
    },
  },
});

export default getModels;
