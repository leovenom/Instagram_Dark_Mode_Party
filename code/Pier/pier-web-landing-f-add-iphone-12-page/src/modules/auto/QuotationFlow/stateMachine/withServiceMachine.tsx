import { useState, useEffect } from "react";
import Router from "next/router";
import { ACTIONS } from "../utils/constants";
import { useQuotationContext } from "../QuotationProvider";

const withServiceMachine = (BaseComponent) => ({ ...props }) => {
  const [machineIsLoading, setMachineLoading] = useState(true);
  const { machineService } = useQuotationContext();
  const { send, current } = machineService;

  useEffect(() => {
    if (current) {
      setMachineLoading(false);
    }
  }, [current]);

  const machineActions = {
    start: () => {
      send(ACTIONS.START_QUOTATION);
    },

    submit: () => {
      send(ACTIONS.FORM_SUBMIT);
    },

    success: (data = {}) => {
      send(ACTIONS.SUCCESS, { payload: { ...data } });
    },

    error: (error = "") => {
      send(ACTIONS.ERROR, { payload: error });
    },

    notSupported: () => {
      send(ACTIONS.NOT_SUPPORTED);
    },

    notCoveredQuotation: () => {
      send(ACTIONS.NOT_COVERED_QUOTATION);
    },

    skip: (data = {}) => {
      send(ACTIONS.SKIP, { payload: { ...data } });
    },

    before: () => {
      send(ACTIONS.BEFORE);
    },

    backToCarModel: () => {
      send(ACTIONS.BACK_TO_CAR_MODEL);
    },

    restartMachine: () => {
      send(ACTIONS.RESET_MACHINE);
    },
  };

  return (
    <BaseComponent
      {...props}
      machineActions={machineActions}
      quotationValues={{
        step: current?.value,
        ...current?.context,
      }}
      machineIsLoading={machineIsLoading}
    />
  );
};
export default withServiceMachine;
