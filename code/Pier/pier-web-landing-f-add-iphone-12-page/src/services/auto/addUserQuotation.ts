import { URL, DEFAULT_HEADERS } from "./constants";

const addUserQuotation = (
  quoteId: string,
  userToken: string,
  autoLeadChannel: any
) => ({
  url: `${URL}/quotes/auto/quotes/${quoteId}/events`,
  options: {
    method: "POST",
    headers: {
      ...DEFAULT_HEADERS,
      authorization: userToken,
    },
    body: JSON.stringify({
      event: "link_to_account",
      data: {
        lead_channel: autoLeadChannel || null,
      },
    }),
  },
});

export default addUserQuotation;
