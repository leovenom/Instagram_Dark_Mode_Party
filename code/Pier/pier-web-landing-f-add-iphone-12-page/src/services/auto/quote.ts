import { fetchApi } from "../api";

export default {
  getQuote: async (quoteId) => {
    return await fetchApi(`/quotes/auto/quotes/${quoteId}`, {
      method: "GET",
    });
  },
  createQuote: async (formData) => {
    return await fetchApi(`/quotes/auto/quotes`, {
      method: "POST",
      body: JSON.stringify({
        quote: {
          item_id: formData.itemId,
          license_plate: formData.licensePlate,
        },
      }),
    });
  },
  updateQuote: async (formData) => {
    return await fetchApi(`/quotes/auto/quotes/${formData.quoteId}`, {
      method: "PATCH",
      body: JSON.stringify({
        quote: {
          ...formData,
        },
      }),
    });
  },
  calculatePrice: async (quoteId) => {
    return await fetchApi(`/quotes/auto/quotes/${quoteId}/price`, {
      method: "POST",
      body: JSON.stringify({
        id: quoteId,
      }),
    });
  },
  getModelByLicensePlate: async (licensePlate) => {
    return await fetchApi(
      `/quotes/auto/items/by_license_plate/${licensePlate}`,
      {
        method: "GET",
      }
    );
  },
};
