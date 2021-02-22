export const STEPS = {
  INITIAL: "INITIAL",
  LICENSE_PLATE: "LICENSE_PLATE",
  BRAND_NEW_CAR: "BRAND_NEW_CAR",
  BUSINESS_CAR: "BUSINESS_CAR",
  CAR_MODEL: "CAR_MODEL",
  CEP: "CEP",
  ADDRESS: "ADDRESS",
  CPF: "CPF",
  EMAIL: "EMAIL",
  QUOTE: "QUOTE",
  DONE: "DONE",
  WAITING_LIST: "WAITING_LIST",
  WAITING_LIST_SUCCESS: "WAITING_LIST_SUCCESS",
  NOT_COVERED_QUOTATION: "NOT_COVERED_QUOTATION",
};

export const ACTIONS = {
  START_QUOTATION: "START_QUOTATION",
  FORM_SUBMIT: "FORM_SUBMIT",
  NOT_SUPPORTED: "NOT_SUPPORTED",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  BACK_TO_CAR_MODEL: "BACK_TO_CAR_MODEL",
  SKIP: "SKIP",
  BEFORE: "BEFORE",
  STOP_LOADING: "STOP_LOADING",
  START_LOADING: "START_LOADING",
  PERSIST_FORM_DATA: "PERSIST_FORM_DATA",
  PERSIST_ERROR: "PERSIST_ERROR",
  RESET_ERROR: "RESET_ERROR",
  RESET_CONTEXT: "RESET_CONTEXT",
  RESET_MACHINE: "RESET_MACHINE",
  INCREMENT_PROGRESS_UI: "INCREMENT_PROGRESS_UI",
  DECREMENT_PROGRESS_UI: "DECREMENT_PROGRESS_UI",
  NOT_COVERED_QUOTATION: "NOT_COVERED_QUOTATION",
};

export const STEPS_CONFIG = {
  [STEPS.INITIAL]: {
    TITLE: null,
    PATH: "/seguro-auto",
  },
  [STEPS.LICENSE_PLATE]: {
    TITLE: "Qual é seu carro?",
    PATH: "/seguro-auto/cotacao/placa",
  },
  [STEPS.BRAND_NEW_CAR]: {
    TITLE: "Seu carro é 0km?",
    PATH: "/seguro-auto/cotacao/carro-zero",
  },
  [STEPS.BUSINESS_CAR]: {
    TITLE: "Conta pra gente como você utiliza o carro?",
    PATH: "/seguro-auto/cotacao/uso-comercial",
  },
  [STEPS.CAR_MODEL]: {
    TITLE: "Qual é o seu carro?",
    PATH: "/seguro-auto/cotacao/modelo",
  },
  [STEPS.CEP]: {
    TITLE: "Qual seu endereço?",
    PATH: "/seguro-auto/cotacao/cep",
  },
  [STEPS.ADDRESS]: {
    TITLE: "Qual seu endereço?",
    PATH: "/seguro-auto/cotacao/endereco",
  },
  [STEPS.CPF]: {
    TITLE: "Qual seu CPF?",
    PATH: "/seguro-auto/cotacao/cpf",
  },
  [STEPS.EMAIL]: {
    TITLE: "Qual é seu email?",
    PATH: "/seguro-auto/cotacao/email",
  },
  [STEPS.QUOTE]: {
    TITLE: null,
    PATH: "/seguro-auto/cotacao/calculando-valores",
  },
  [STEPS.DONE]: {
    TITLE: null,
    PATH: "/seguro-auto/cotacao/valores",
  },
  [STEPS.WAITING_LIST]: {
    TITLE: null,
    PATH: null,
  },
  [STEPS.WAITING_LIST_SUCCESS]: {
    TITLE: null,
    PATH: null,
  },
  [STEPS.NOT_COVERED_QUOTATION]: {
    TITLE: null,
    PATH:
      "/seguro-auto/cotacao/valores?lista-de-espera=endereco-nao-disponivel",
  },
};

export const WAITING_LIST_STATUS = "422";
export const INVALID_CPF_ERROR_DETAIL = "Errors::Auto::InvalidCpf";
export const INVALID_ADDRESS_ERROR_DETAIL =
  "Errors::Auto::Pricing::InvalidAddress";

export enum NotAvailableStatus {
  NOT_COVERED_ZIP_CODE = "zipcode_not_covered",
}

export enum AvailableModifiers {
  UNLIMITED_KM = "assistance_with_unlimited_km",
}
