import { useState } from "react";
import * as React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import validateCPF from "helpers/validateCPF";
import config from "config";
import Modal from "ui/Modal";
import Text from "ui/Text";
import Input from "ui/Input";
import Button from "ui/Button";
import { useToast } from "ui/Toast";

import breakpoints from "ui/theme/breakpoints";
import jsonToQueryString from "helpers/jsonToQueryString";

interface Props {
  isOpen: boolean;
  hide: () => void;
  toggleAnotherModelSuccessSubmition: () => void;
}

const StyledModal = styled(Modal)`
  section {
    box-sizing: border-box;
    overflow-y: auto;

    form {
      margin-top: 24px;
    }
  }

  ${breakpoints.tablet} {
    max-width: 700px;
    margin: 10px auto;
  }
`;

const InputContainer = styled.div`
  padding-top: 24px;
`;

const modelValidationSchema = Yup.object({
  full_name: Yup.string()
    .required("Nome obrigatório")
    .min(3, "Nome muito curto"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  cpf: Yup.string().test("is-cpf", "CPF inválido", (value) =>
    validateCPF(value)
  ),
  manufacturer: Yup.string().required("Fabricante obrigatório"),
  model: Yup.string().required("Modelo obrigatório"),
});

const modelInitialValues = {
  full_name: "",
  email: "",
  cpf: "",
  manufacturer: "",
  model: "",
  kind: "android_prospect",
};

const AnotherModelModal: React.FC<Props> = ({
  isOpen,
  hide,
  toggleAnotherModelSuccessSubmition,
}) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldTouched,
    touched,
    isValid,
  } = useFormik({
    initialValues: modelInitialValues,
    validationSchema: modelValidationSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      const queryString = jsonToQueryString(values);
      let result;
      setIsLoading(true);
      try {
        result = await fetch(`${config.PIER_SITE_URL}/faqs${queryString}`, {
          method: "POST",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        });

        if (result.status !== 200) {
          toast.error(
            `😢 Ocorreu um erro.
            Tente novamente ou entre em contato com o suporte!`
          );
          return;
        }

        hide();
        toggleAnotherModelSuccessSubmition();
      } catch {
        toast.error(
          `Oops!! Algo deu errado! 😢 Tente novamente ou entre em contato com o suporte.`
        );
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <StyledModal
      title="Não encontrou seu modelo?"
      isOpen={isOpen}
      hide={hide}
      contentLabel="Modal para submissão de novos modelos"
    >
      <section>
        <Text variant="bodySmall">
          No momento protegemos apenas os modelos listados. Nosso desejo é
          acolher cada vez mais modelos em nossa comunidade. Deixe aqui seus
          dados e te informaremos assim que tivermos novidades!
        </Text>

        <form translate="yes" onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              name="full_name"
              type="text"
              label="Nome completo"
              placeholder="Carlos Toledo"
              onChange={handleChange}
              value={values["full_name"]}
              error={touched.full_name ? errors.full_name : ""}
            />
          </InputContainer>
          <InputContainer>
            <Input
              name="email"
              type="text"
              label="Email"
              placeholder="meu@email.com"
              onChange={handleChange}
              value={values.email}
              error={touched.email ? errors.email : ""}
            />
          </InputContainer>
          <InputContainer>
            <Input
              name="cpf"
              type="text"
              label="CPF"
              mask="cpf"
              placeholder="123.456.789-00"
              onChange={handleChange}
              value={values.cpf}
              error={touched.cpf ? errors.cpf : ""}
            />
          </InputContainer>
          <InputContainer>
            <Input
              name="manufacturer"
              type="text"
              label="Fabricante"
              placeholder="Motorola"
              onChange={handleChange}
              value={values.manufacturer}
              error={touched.manufacturer ? errors.manufacturer : ""}
            />
          </InputContainer>
          <InputContainer>
            <Input
              name="model"
              type="text"
              label="Modelo"
              placeholder="G8"
              onChange={handleChange}
              value={values.model}
              error={touched.model ? errors.model : ""}
            />
          </InputContainer>
          <Button
            mt={24}
            fullWidth
            type="submit"
            disabled={isLoading || !isValid}
            isLoading={isLoading}
          >
            Enviar
          </Button>
        </form>
      </section>
    </StyledModal>
  );
};

export default AnotherModelModal;
