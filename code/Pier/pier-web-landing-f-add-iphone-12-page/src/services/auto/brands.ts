import { URL, DEFAULT_HEADERS } from "./constants";

const getBrands = () => ({
  url: `${URL}/quotes/auto/items`,
  options: {
    method: "GET",
    headers: {
      ...DEFAULT_HEADERS,
    },
  },
});

export default getBrands;
