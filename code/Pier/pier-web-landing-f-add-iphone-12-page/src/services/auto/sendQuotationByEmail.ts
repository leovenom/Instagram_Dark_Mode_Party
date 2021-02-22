import { URL, DEFAULT_HEADERS } from "./constants";

const sendQuotationByEmail = (email: string, quoteId: string) => ({
  url: `${URL}/quotes/auto/quotes/${quoteId}`,
  options: {
    method: "PATCH",
    headers: {
      ...DEFAULT_HEADERS,
    },
    body: JSON.stringify({
      quote: {
        driver_email: email,
      },
    }),
  },
});

export default sendQuotationByEmail;
