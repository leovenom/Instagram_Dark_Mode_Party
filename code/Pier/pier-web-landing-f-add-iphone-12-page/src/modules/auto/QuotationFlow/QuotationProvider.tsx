import { createContext, useState, useContext } from "react";
import { useMachine } from "@xstate/react";

import quotationMachine from "./stateMachine";
import { ACTIONS } from "./utils/constants";

export const QuotationFlowContext = createContext(undefined);

export const QuotationProvider = ({ children }) => {
  const [extraData, setExtraData] = useState({});
  const [current, send] = useMachine(quotationMachine);

  // Todo better later :/
  const restartMachine = () => {
    send(ACTIONS.RESET_MACHINE);
  };

  return (
    <QuotationFlowContext.Provider
      value={{
        setExtraData,
        extraData,
        machineService: { send, current },
        restartMachine,
      }}
    >
      {children}
    </QuotationFlowContext.Provider>
  );
};

export const useQuotationContext = () => useContext(QuotationFlowContext);
