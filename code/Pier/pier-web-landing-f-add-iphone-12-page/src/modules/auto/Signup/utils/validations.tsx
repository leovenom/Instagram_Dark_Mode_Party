import * as Yup from "yup";

export const validationSignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ops, esse email parece incorreto")
    .required("O seu email é obrigatório"),

  conditions: Yup.string().required("É necessário aceitar os termos"),

  // fields not necessary with facebook signup
  password: Yup.string().when("facebookAccessToken", {
    is: (value) => !value,
    then: Yup.string()
      .required("Crie uma senha para continuar")
      .min(8, "Senha precisa ter ao menos 8 caracteres"),
    otherwise: Yup.string(),
  }),

  passwordConfirmation: Yup.string().when("facebookAccessToken", {
    is: (value) => !value,
    then: Yup.string()
      .oneOf([Yup.ref("password"), null], "Senhas não são iguais")
      .required("Confirme sua senha para continuar"),
    otherwise: Yup.string(),
  }),
});

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ops, esse email parece incorreto")
    .required("O seu email é obrigatório"),

  // fields not necessary with facebook signup
  password: Yup.string().when("facebookAccessToken", {
    is: (value) => !value,
    then: Yup.string()
      .required("Crie uma senha para continuar")
      .min(8, "Senha precisa ter ao menos 8 caracteres"),
    otherwise: Yup.string(),
  }),
});
