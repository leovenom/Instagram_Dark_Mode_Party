import { useState } from "react";

import { autoTracker } from "helpers/mixpanelTracker";
import useLocalStorage from "hooks/useLocalStorage";
import PricingVariationModal from "landingPages/autoQuotation/components/AutoPlanCard/PricingVariationModal";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import ABAutoPlanCard from "ui/ABAutoPlanCard";
import QuoteProps from "../types/QuoteProps";
import { SCREEN_NAME } from "landingPages/autoQuotation/LandingPage";

interface Props {
  optionals: {
    label: string;
    priceInCents: number;
  }[];
  quoteInfo: QuoteProps | null;
  isLoadingQuote: boolean;
  openSignupDrawer: () => void;
  machineActions: {
    skip: () => void;
    restartMachine: () => void;
  };
}

function QuoteCard({
  optionals,
  quoteInfo,
  isLoadingQuote,
  openSignupDrawer,
  machineActions,
}: Props) {
  const [isPriceDisclaimerOpen, setPriceDisclaimerState] = useState<boolean>(
    false
  );
  const [, setAutoQuotation] = useLocalStorage("autoQuotation", null);

  const CARD = {
    coveredZipCode: {
      ctaText: () => "Faça sua vistoria",
      ctaAction: function () {
        openSignupDrawer();
      },
    },
    uncoveredZipCode: {
      ctaText: (email: string | undefined) =>
        email ? "Você está na lista de espera" : "Lista de espera",
      ctaAction: function () {
        machineActions.skip();
      },
    },
  };

  const allCoverages = [
    {
      label: "Roubo e Furto + Assistências",
      priceInCents: quoteInfo?.basePriceInCents,
    },
    ...optionals,
  ];

  function startNewQuote() {
    autoTracker.trackButton(`${SCREEN_NAME} New`);
    setAutoQuotation(null);
    machineActions.restartMachine();
  }

  function openPriceDisclaimerModal() {
    setPriceDisclaimerState(true);
    autoTracker.track("Quote Price Variation Banner Clicked");
  }

  function closePriceDisclaimerModal() {
    setPriceDisclaimerState(false);
  }

  const getCardConfig = () =>
    quoteInfo?.isZipCodeCovered ? CARD.coveredZipCode : CARD.uncoveredZipCode;

  return (
    <>
      <ABAutoPlanCard
        isLoading={isLoadingQuote}
        quoteInfo={quoteInfo}
        allCoverages={allCoverages}
        config={getCardConfig()}
        openPriceDisclaimerModal={openPriceDisclaimerModal}
        startNewQuote={startNewQuote}
      />
      <PricingVariationModal
        isVisible={isPriceDisclaimerOpen}
        hide={closePriceDisclaimerModal}
      />
    </>
  );
}

export default withServiceMachine(QuoteCard);
