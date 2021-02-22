import { Machine, assign } from "xstate";
import { STEPS, ACTIONS } from "../utils/constants";
import { QuotationMachineType } from "../utils/types";

export const quotationMachine = Machine<QuotationMachineType>(
  {
    id: "quotation-auto",
    initial: STEPS.INITIAL,
    context: {
      isLoading: false,
      error: "",
      uiStepProgress: 1,
      formData: {
        quoteId: null,
        licensePlate: "",
        isZeroKm: null,
        "ship-zip": "",
        "ship-address": "",
        number: "",
        "ship-city": "",
        neighborhood: "",
        brand: null,
        year: null,
        model: null,
        cpf: "",
        isAuctioned: null,
      },
    },
    states: {
      [STEPS.INITIAL]: {
        on: {
          [ACTIONS.START_QUOTATION]: {
            target: STEPS.LICENSE_PLATE,
          },
          [ACTIONS.SKIP]: {
            target: STEPS.WAITING_LIST,
          },
        },
      },
      [STEPS.LICENSE_PLATE]: {
        on: {
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING, ACTIONS.RESET_ERROR],
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.SKIP]: {
            target: STEPS.CAR_MODEL,
            actions: [ACTIONS.RESET_CONTEXT, ACTIONS.INCREMENT_PROGRESS_UI],
          },
          [ACTIONS.SUCCESS]: {
            target: STEPS.CAR_MODEL,
            actions: [ACTIONS.PERSIST_FORM_DATA, ACTIONS.INCREMENT_PROGRESS_UI],
          },
        },
        exit: [ACTIONS.STOP_LOADING, ACTIONS.RESET_ERROR],
      },
      [STEPS.CAR_MODEL]: {
        on: {
          [ACTIONS.BEFORE]: {
            target: STEPS.LICENSE_PLATE,
            actions: ACTIONS.DECREMENT_PROGRESS_UI,
          },
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING],
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.SUCCESS]: {
            target: STEPS.BRAND_NEW_CAR,
            actions: [ACTIONS.PERSIST_FORM_DATA],
          },
          [ACTIONS.SKIP]: {
            target: STEPS.BUSINESS_CAR,
            actions: [ACTIONS.PERSIST_FORM_DATA, ACTIONS.INCREMENT_PROGRESS_UI],
          },
        },
        exit: [ACTIONS.STOP_LOADING, ACTIONS.RESET_ERROR],
      },
      [STEPS.BRAND_NEW_CAR]: {
        on: {
          [ACTIONS.BEFORE]: {
            target: STEPS.CAR_MODEL,
          },
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING],
          },
          [ACTIONS.NOT_SUPPORTED]: {
            target: STEPS.WAITING_LIST,
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.SUCCESS]: {
            target: STEPS.BUSINESS_CAR,
            actions: [ACTIONS.PERSIST_FORM_DATA, ACTIONS.INCREMENT_PROGRESS_UI],
          },
        },
        exit: [ACTIONS.STOP_LOADING, ACTIONS.RESET_ERROR],
      },
      [STEPS.BUSINESS_CAR]: {
        on: {
          [ACTIONS.BEFORE]: {
            target: STEPS.CAR_MODEL,
            actions: ACTIONS.DECREMENT_PROGRESS_UI,
          },
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING],
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.SUCCESS]: {
            target: STEPS.CEP,
            actions: [ACTIONS.PERSIST_FORM_DATA, ACTIONS.INCREMENT_PROGRESS_UI],
          },
        },
        exit: [ACTIONS.STOP_LOADING, ACTIONS.RESET_ERROR],
      },
      [STEPS.CEP]: {
        on: {
          [ACTIONS.BEFORE]: {
            target: STEPS.BUSINESS_CAR,
            actions: [ACTIONS.DECREMENT_PROGRESS_UI],
          },
          [ACTIONS.BACK_TO_CAR_MODEL]: {
            target: STEPS.CAR_MODEL,
            actions: [ACTIONS.DECREMENT_PROGRESS_UI],
          },
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING],
          },
          [ACTIONS.SKIP]: {
            target: STEPS.ADDRESS,
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.SUCCESS]: {
            target: STEPS.CPF,
            actions: [ACTIONS.PERSIST_FORM_DATA, ACTIONS.INCREMENT_PROGRESS_UI],
          },
        },
        exit: [ACTIONS.STOP_LOADING, ACTIONS.RESET_ERROR],
      },
      [STEPS.ADDRESS]: {
        on: {
          [ACTIONS.BEFORE]: {
            target: STEPS.CEP,
          },
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING],
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.SUCCESS]: {
            target: STEPS.CPF,
            actions: [ACTIONS.PERSIST_FORM_DATA, ACTIONS.INCREMENT_PROGRESS_UI],
          },
        },
        exit: [ACTIONS.STOP_LOADING, ACTIONS.RESET_ERROR],
      },
      [STEPS.CPF]: {
        on: {
          [ACTIONS.BEFORE]: {
            target: STEPS.CEP,
            actions: [ACTIONS.DECREMENT_PROGRESS_UI],
          },
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING],
          },
          [ACTIONS.NOT_SUPPORTED]: {
            target: STEPS.WAITING_LIST,
            actions: [ACTIONS.STOP_LOADING],
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.SUCCESS]: {
            target: STEPS.EMAIL,
            actions: [ACTIONS.PERSIST_FORM_DATA, ACTIONS.INCREMENT_PROGRESS_UI],
          },
          [ACTIONS.SKIP]: {
            target: STEPS.QUOTE,
            actions: [ACTIONS.PERSIST_FORM_DATA],
          },
        },
        exit: [ACTIONS.STOP_LOADING, ACTIONS.RESET_ERROR],
      },
      [STEPS.EMAIL]: {
        on: {
          [ACTIONS.BEFORE]: {
            target: STEPS.CPF,
            actions: [ACTIONS.DECREMENT_PROGRESS_UI],
          },
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING],
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.SUCCESS]: {
            target: STEPS.QUOTE,
            actions: [ACTIONS.PERSIST_FORM_DATA],
          },
          [ACTIONS.SKIP]: {
            target: STEPS.QUOTE,
          },
        },
      },
      [STEPS.QUOTE]: {
        entry: [ACTIONS.START_LOADING],
        on: {
          [ACTIONS.SUCCESS]: {
            target: [STEPS.DONE],
            actions: [ACTIONS.PERSIST_FORM_DATA],
          },
          [ACTIONS.NOT_SUPPORTED]: {
            target: STEPS.WAITING_LIST,
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.NOT_COVERED_QUOTATION]: {
            target: [STEPS.NOT_COVERED_QUOTATION],
          },
          [ACTIONS.RESET_MACHINE]: {
            target: [STEPS.INITIAL],
            actions: [ACTIONS.RESET_CONTEXT],
          },
        },
        exit: [ACTIONS.STOP_LOADING],
      },
      [STEPS.WAITING_LIST]: {
        on: {
          [ACTIONS.FORM_SUBMIT]: {
            actions: [ACTIONS.START_LOADING],
          },
          [ACTIONS.SUCCESS]: {
            target: [STEPS.WAITING_LIST_SUCCESS],
          },
          [ACTIONS.ERROR]: {
            actions: [ACTIONS.STOP_LOADING, ACTIONS.PERSIST_ERROR],
          },
          [ACTIONS.RESET_MACHINE]: {
            target: [STEPS.INITIAL],
            actions: [ACTIONS.RESET_CONTEXT],
          },
        },
        exit: [ACTIONS.STOP_LOADING, ACTIONS.RESET_ERROR],
      },
      [STEPS.WAITING_LIST_SUCCESS]: {
        on: {
          [ACTIONS.RESET_MACHINE]: {
            target: [STEPS.INITIAL],
            actions: [ACTIONS.RESET_CONTEXT],
          },
        },
      },
      [STEPS.NOT_COVERED_QUOTATION]: {
        on: {
          [ACTIONS.SKIP]: {
            target: [STEPS.WAITING_LIST],
          },
          [ACTIONS.RESET_MACHINE]: {
            target: [STEPS.INITIAL],
            actions: [ACTIONS.RESET_CONTEXT],
          },
        },
      },
      [STEPS.DONE]: {
        on: {
          [ACTIONS.RESET_MACHINE]: {
            target: [STEPS.INITIAL],
            actions: [ACTIONS.RESET_CONTEXT],
          },
        },
      },
    },
  },
  {
    actions: {
      // action implementations
      [ACTIONS.START_LOADING]: assign({
        isLoading: (_, event) => true,
      }),
      [ACTIONS.STOP_LOADING]: assign({
        isLoading: (_, event) => false,
      }),
      [ACTIONS.PERSIST_ERROR]: assign({
        error: (_, { payload }) => payload,
      }),
      [ACTIONS.PERSIST_FORM_DATA]: assign({
        formData: (context, { payload }) => {
          const { formData } = context;
          return { ...formData, ...payload };
        },
      }),
      [ACTIONS.INCREMENT_PROGRESS_UI]: assign({
        uiStepProgress: (context, event) => context.uiStepProgress + 1,
      }),
      [ACTIONS.DECREMENT_PROGRESS_UI]: assign({
        uiStepProgress: (context, event) => context.uiStepProgress - 1,
      }),
      [ACTIONS.RESET_CONTEXT]: assign({
        uiStepProgress: (context, event) => 1,
        formData: (_, event) => ({
          licensePlate: "",
          isZeroKm: null,
          cep: "",
          "ship-address": "",
          number: "",
          "ship-city": "",
          neighborhood: "",
          brand: null,
          year: null,
          model: null,
          cpf: "",
          email: "",
          isAuctioned: null,
        }),
        error: (_, event) => "",
        isLoading: (_, event) => false,
      }),
      [ACTIONS.RESET_ERROR]: assign({
        error: (_, event) => "",
      }),
    },
  }
);
