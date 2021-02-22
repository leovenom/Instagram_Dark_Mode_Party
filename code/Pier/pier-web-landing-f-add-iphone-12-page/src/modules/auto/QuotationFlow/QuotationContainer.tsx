import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Stepper from "ui/Stepper";
import breakpoints from "ui/theme/breakpoints";
import { STEPS, STEPS_CONFIG } from "./utils/constants";
import withServiceMachine from "./stateMachine/withServiceMachine";
import { useToast } from "ui/Toast";
import Router from "next/router";
import useLocalStorage from "hooks/useLocalStorage";

import { WaitingList, WaitingListSuccess } from "./components/steps";

const Wrapper = styled.div`
  width: calc(100% - 48px);
  padding: 0px 24px;

  ${breakpoints.desktop} {
    width: 392px;
  }

  position: relative;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const stepHasRoute = (step) => STEPS_CONFIG[step].PATH;
const isInstructionsPath = (path) => path === "/seguro-auto/cotacao/instrucoes";
const NUMBER_OF_QUOTE_STEPS = 6;

const QuotationContainer = ({
  machineIsLoading,
  quotationValues,
  machineActions,
  children,
}) => {
  const router = useRouter();
  const { uiStepProgress, formData, step, error } = quotationValues;
  const toast = useToast();

  useEffect(() => {
    Router.beforePopState(() => {
      machineActions.before();
      return true;
    });
  }, []);

  useEffect(() => {
    const shouldGoToQuotationValues =
      step === STEPS.DONE || step === STEPS.NOT_COVERED_QUOTATION;

    if (step === STEPS.INITIAL) {
      machineActions.start();
    } else if (shouldGoToQuotationValues) {
      router.push(`/seguro-auto/cotacao/valores/${formData?.quoteId}`);
    } else if (stepHasRoute(step)) {
      router.push(STEPS_CONFIG[step].PATH);
    }
  }, [step]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (machineIsLoading) {
    return null;
  }

  return (
    <>
      <Container>
        {!isInstructionsPath(router.pathname) && (
          <Stepper
            numberOfSteps={NUMBER_OF_QUOTE_STEPS}
            currentStep={uiStepProgress}
          />
        )}
        <Wrapper>{children}</Wrapper>
      </Container>
      <WaitingList isOpen={step === STEPS.WAITING_LIST} />
      <WaitingListSuccess isOpen={step === STEPS.WAITING_LIST_SUCCESS} />
    </>
  );
};

export default withServiceMachine(QuotationContainer);
