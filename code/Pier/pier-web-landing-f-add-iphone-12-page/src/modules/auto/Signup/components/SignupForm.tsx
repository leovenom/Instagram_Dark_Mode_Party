import { useMemo, useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import Input from "ui/Input";
import Button from "ui/Button";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

import { validationSignupSchema } from "../utils/validations";
import { SignupFormValues } from "../utils/types";
import TermsAndConditions from "../components/TermsAndConditions";
import { useQuotationContext } from "modules/auto/QuotationFlow/QuotationProvider";
import { autoTracker } from "helpers/mixpanelTracker";

const BASE_TRACKING_NAME = "UserSignup";

const Container = styled.div`
  box-sizing: border-box;
  padding: 0 24px;

  ${breakpoints.desktop} {
    padding: 0 40px;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

const TermsContainer = styled.div`
  margin-top: 32px;
`;

const InputContainer = styled.div`
  padding-top: 24px;
`;

const getInitialValues = (cpf: string, email: string) => ({
  name: "",
  email: email || "",
  cpf: cpf || "",
  password: "",
  passwordConfirmation: "",
  conditions: "",
  facebookAccessToken: "",
});

interface Props {
  isLoading: boolean;
  handleSubmitForm: (values: SignupFormValues) => void;
}

const SignupForm = ({ handleSubmitForm, isLoading }: Props) => {
  useEffect(() => {
    autoTracker.trackModal(`${BASE_TRACKING_NAME} Form`);
  }, []);

  const { machineService, extraData } = useQuotationContext();
  const { formData } = machineService?.current?.context;

  const initialValues = useMemo(
    () => getInitialValues(formData?.cpf, extraData?.signupForm?.email),
    []
  );

  const {
    handleChange,
    values,
    errors,
    isValid,
    touched,
    setFieldTouched,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: validationSignupSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      autoTracker.trackButton(`${BASE_TRACKING_NAME} With Email`);
      handleSubmitForm(values);
    },
  });

  const handleTermsChange = () => {
    if (values.conditions.length < 1) {
      setFieldValue("conditions", "checked");
    } else {
      setFieldValue("conditions", "");
    }
  };

  const isSubmitButtonDisabled = !isValid || isLoading;

  return (
    <Container>
      <Text variant="bodySmall" bold mb={8} color="darkGray">
        1º passo
      </Text>
      <Text variant="subtitle" bold mb={16}>
        Crie sua conta
      </Text>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            onChange={handleChange}
            label="Email"
            name="email"
            value={values.email}
            placeholder="Email"
            type="email"
            data-tracking="email-form-field"
            onBlur={() => setFieldTouched("email")}
            error={touched["email"] ? errors["email"] : ""}
          />
        </InputContainer>

        {!values.facebookAccessToken && (
          <>
            <InputContainer>
              <Input
                onChange={handleChange}
                label="Senha"
                name="password"
                value={values.password}
                type="password"
                placeholder="Senha"
                onBlur={() => setFieldTouched("password")}
                error={touched["password"] ? errors["password"] : ""}
              />
            </InputContainer>

            <InputContainer>
              <Input
                onChange={handleChange}
                name="passwordConfirmation"
                label="Confirmação de senha"
                value={values.passwordConfirmation}
                placeholder="Confirmação de senha"
                type="password"
                error={
                  touched["passwordConfirmation"]
                    ? errors["passwordConfirmation"]
                    : ""
                }
              />
            </InputContainer>
          </>
        )}

        <TermsContainer>
          <TermsAndConditions
            onChange={handleTermsChange}
            name="conditions"
            politicsHref="/seguro-auto/politica-de-privacidade"
            termsHref="/seguro-auto/termos-de-uso"
            value={values.conditions}
            onBlur={() => setFieldTouched("conditions")}
          />
        </TermsContainer>

        <Button
          fullWidth
          type="submit"
          variant="secondary"
          data-tracking="signup-auto-form-submit"
          disabled={isSubmitButtonDisabled}
        >
          Criar conta
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
