import { useEffect, useRef, useState } from "react";

import { autoTracker } from "helpers/mixpanelTracker";

const OPTIMIZE_RETRY_DELAY = 100;
const MAX_NUMBER_OF_ATTEMPTS = 20;
const OPTIMIZE_ACTIVATION_EVENT = "optimize.activate";

const isOptimzeScriptLoaded = () => window["google_optimize"] !== undefined;

const pushOptimizeEventToDataLayer = async () => {
  if (window["dataLayer"]) {
    await window["dataLayer"].push({ event: OPTIMIZE_ACTIVATION_EVENT });
  }
};

const trackVariant = (variant: number, experimentId: string) => {
  let trackMessage = "";

  try {
    if (Number.isNaN(variant)) {
      throw new Error("Failed to retrieve a variant for the experiment");
    }

    if (variant === 0) {
      trackMessage = "Original Variant Triggered";
    } else {
      trackMessage = `Variant ${variant} Triggered`;
    }

    autoTracker.track(trackMessage, {
      experimentId: experimentId,
    });
  } catch (e) {
    autoTracker.track(e.message, {
      experimentId,
    });
  }
};

const getOptmizeVariant = (optimizeExperimentId: string): number => {
  const variant = Number(window["google_optimize"].get(optimizeExperimentId));
  trackVariant(variant, optimizeExperimentId);

  return variant;
};

interface Props {
  experimentId: string;
}

function useOptimizeVariant({
  experimentId,
}: Props): {
  variant: number | null;
} {
  const [variant, setVariant] = useState<number | null>(null);
  const optimizeRetries = useRef(0);

  let intervalId;

  function clear() {
    clearInterval(intervalId);
  }

  function setFetchedVariant() {
    const currentVariant = getOptmizeVariant(experimentId);

    setVariant(currentVariant);
    clear();
  }

  function setDefaultVariant() {
    setVariant(0);
    clear();
  }

  function incrementRetries() {
    optimizeRetries.current = optimizeRetries.current + 1;
  }

  useEffect(() => {
    function getOptimizeVariant() {
      pushOptimizeEventToDataLayer();

      intervalId = setInterval(() => {
        if (isOptimzeScriptLoaded()) setFetchedVariant();
        if (optimizeRetries.current >= MAX_NUMBER_OF_ATTEMPTS)
          setDefaultVariant();

        incrementRetries();
      }, OPTIMIZE_RETRY_DELAY);
    }

    getOptimizeVariant();

    return () => clear();
  }, []);

  return { variant };
}

export default useOptimizeVariant;
