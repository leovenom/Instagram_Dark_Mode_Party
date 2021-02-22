import { useState, useEffect } from "react";

import autoQuoteAPI from "services/auto/quote";

export enum QuotationStatus {
  IDLE,
  FETCHING,
  FOUND,
  NOT_FOUND,
}

function useStoredQuotation(quoteId: string | null) {
  const [status, setStatus] = useState<QuotationStatus>(QuotationStatus.IDLE);
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    async function getQuoteFromQuotesService(quotationId: string) {
      const res = await autoQuoteAPI.getQuote(quotationId);

      const formatedQuote = {
        quoteId: quotationId,
        model: {
          value: {
            attributes: res.included[0].attributes,
          },
        },
        values: res.data.attributes,
        cpf: res.data.attributes["driver_identification"],
        unlimitedKmEnabled: res.data.attributes?.modifiers?.includes(
          "assistance_with_unlimited_km"
        ),
      };

      setCurrentQuote(formatedQuote);
      window.localStorage.setItem(
        "autoQuotation",
        JSON.stringify(formatedQuote)
      );
    }

    async function getQuote() {
      if (quoteId && status === QuotationStatus.IDLE) {
        setStatus(QuotationStatus.FETCHING);
        try {
          await getQuoteFromQuotesService(quoteId);
          setStatus(QuotationStatus.FOUND);
        } catch {
          setStatus(QuotationStatus.NOT_FOUND);
        }
      }
    }

    getQuote();
  }, [quoteId]);

  return { currentQuote, status, setCurrentQuote };
}

export default useStoredQuotation;
