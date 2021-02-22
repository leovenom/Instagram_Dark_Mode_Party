import * as Yup from "yup";
import validateCPF from "helpers/validateCPF";
import { removeNonDigits } from "helpers/stringUtils";

const QUANTITY_OF_DIGITS_IN_A_PHONE_NUMBER = 11;

export const licensePlateValidation = Yup.object().shape({
  licensePlate: Yup.string()
    .required("Valor inválido")
    .min(8, "Valor incompleto"),
});

export const carModelValidation = Yup.object().shape({
  brand: Yup.string().required(),
  year: Yup.string().required(),
  model: Yup.mixed().required(),
});

export const brandNewCarValidation = Yup.object().shape({
  isZeroKm: Yup.string().required(),
});

export const businessCarValidation = Yup.object().shape({
  vehicleUsageDescription: Yup.string().required(),
  carUsedFor: Yup.string().when("vehicleUsageDescription", {
    is: "other",
    then: Yup.string().required(),
  }),
});

export const cepValidation = Yup.object().shape({
  "ship-zip": Yup.string().required("CEP inválido").min(9, "CEP inválido"),
});

export const emailValidation = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email inválido"),
});

export const phoneValidation = Yup.object().shape({
  phone: Yup.string().test(
    "is-phone",
    "Telefone inválido",
    (value) =>
      value?.length &&
      removeNonDigits(value).length === QUANTITY_OF_DIGITS_IN_A_PHONE_NUMBER
  ),
});

export const fullAddressValidation = Yup.object().shape({
  "ship-address": Yup.string().required("Campo obrigatório"),
  number: Yup.string().required("Campo obrigatório"),
  neighborhood: Yup.string().required("Campo obrigatório"),
  "ship-city": Yup.string().required("Campo obrigatório"),
});

export const cpfValidation = Yup.object().shape({
  cpf: Yup.string().test("is-cpf", "CPF inválido", (value) =>
    validateCPF(value)
  ),
});

export const waitingListValidation = Yup.object().shape({
  email: Yup.string()
    .email("Ops, esse email parece incorreto")
    .required("O seu email é obrigatório"),
});
