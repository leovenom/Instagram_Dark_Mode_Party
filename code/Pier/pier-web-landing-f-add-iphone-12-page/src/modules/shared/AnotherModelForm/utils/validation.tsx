import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Nome obrigatório")
    .min(3, "Nome muito curto"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  manufacturer: Yup.string().required("Fabricante obrigatório"),
  model: Yup.string().required("Modelo obrigatório"),
  memory: Yup.string().required("Memória obrigatória"),
});

export default validationSchema;
