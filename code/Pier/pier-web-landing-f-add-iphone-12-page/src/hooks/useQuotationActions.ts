import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useLocalStorage from "hooks/useLocalStorage";
import {
  STEPS_CONFIG,
  NotAvailableStatus,
} from "modules/auto/QuotationFlow/utils/constants";
import { autoTracker } from "helpers/mixpanelTracker";
import { Quote } from "modules/auto/QuotationFlow/utils/types";

import { BannerVariants } from "ui/Banner";

interface QuotationConfig {
  displayText: () => void;
  banner: {
    title: string;
    description: string;
    variant: BannerVariants;
  };
  buttonText: string;
  onSelectPlan: () => void;
}

interface Props {
  quote: Quote;
  baseTrackingName: string;
  config: {
    notCoveredZipcode: (
      clickFunction: () => void,
      quotationHasEmail: boolean
    ) => QuotationConfig;
    coveredZipcode: (clickFunction: () => void) => QuotationConfig;
    blackFriday: {
      banner: QuotationConfig["banner"];
    };
  };
  machineActions: {
    skip: () => any;
    restartMachine: () => any;
  };
  toggleSignupModal: () => void;
  isBlackFriday: boolean;
}

function useQuotationActions({
  quote,
  baseTrackingName,
  machineActions,
  config,
  toggleSignupModal,
  isBlackFriday,
}: Props) {
  const router = useRouter();

  const [, setAutoQuotation] = useLocalStorage("autoQuotation", null);

  const [isPlanAvailable, setPlanAvailable] = useState<boolean>(false);
  const [cardConfig, setCardConfig] = useState(null);

  useEffect(() => {
    if (quote) {
      const isAvailable = !quote.values["refusal_reasons"]?.includes(
        NotAvailableStatus.NOT_COVERED_ZIP_CODE
      );

      setPlanAvailable(isAvailable);

      const quotationHasEmail = !!quote?.email;

      if (isAvailable && isBlackFriday) {
        setCardConfig({
          ...config.coveredZipcode(toggleSignupModal),
          ...config.blackFriday,
          quotationHasEmail,
        });
      } else if (isAvailable) {
        setCardConfig({
          ...config.coveredZipcode(toggleSignupModal),
          quotationHasEmail,
        });
      } else {
        setCardConfig({
          ...config.notCoveredZipcode(machineActions.skip, quotationHasEmail),
          quotationHasEmail,
        });
      }
    }
  }, [quote]);

  function clearQuotation() {
    setAutoQuotation(null);
  }

  function goToQuotationFlow() {
    router.push(STEPS_CONFIG.LICENSE_PLATE.PATH);
  }

  function startNewQuotation() {
    autoTracker.trackButton(`${baseTrackingName} New`);
    clearQuotation();
    machineActions.restartMachine();
    goToQuotationFlow();
  }

  return { cardConfig, isPlanAvailable, startNewQuotation };
}

export default useQuotationActions;
