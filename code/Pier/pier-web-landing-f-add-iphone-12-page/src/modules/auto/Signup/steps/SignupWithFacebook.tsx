import { useEffect, useMemo } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import Button from "ui/Button";
import Divider from "ui/Divider";
import Input from "ui/Input";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

import { autoTracker } from "helpers/mixpanelTracker";
import { useQuotationContext } from "modules/auto/QuotationFlow/QuotationProvider";

import TermsAndConditions from "../components/TermsAndConditions";
import RemainingSteps from "../components/RemainingSteps";
import { FacebookSignupValues } from "../utils/types";
import { validationSignupSchema } from "../utils/validations";

const Container = styled.div`
  box-sizing: border-box;
  padding: 0 24px;

  ${breakpoints.desktop} {
    padding: 0 40px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const TermsContainer = styled.div`
  margin-top: 32px;
`;

const InputContainer = styled.div`
  padding-top: 24px;
`;

const BASE_TRACKING_NAME = "UserSignup";

const getInitialValues = (
  cpf: string,
  facebookValue: FacebookSignupValues
) => ({
  name: facebookValue.name || "",
  email: facebookValue.email || "",
  cpf: cpf || "",
  conditions: "",
  facebookAccessToken: facebookValue.facebookAccessToken || "",
});

interface Props {
  facebookValues: FacebookSignupValues;
  handleFormSubmit: (values: FacebookSignupValues) => void;
  isLoading: boolean;
}

function SignupWithFacebook({
  facebookValues,
  handleFormSubmit,
  isLoading,
}: Props) {
  const { machineService } = useQuotationContext();
  const { formData } = machineService?.current?.context;

  const initialValues = useMemo(
    () => getInitialValues(formData?.cpf, facebookValues),
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
      autoTracker.trackButton(`${BASE_TRACKING_NAME} With Facebook Confirm`);
      handleFormSubmit(values);
    },
  });

  function handleTermsChange() {
    if (values.conditions.length < 1) {
      setFieldValue("conditions", "checked");
    } else {
      setFieldValue("conditions", "");
    }
  }

  useEffect(() => {
    autoTracker.trackModal(`${BASE_TRACKING_NAME} Facebook Confirmation`);
  }, []);

  return (
    <>
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
              data-tracking="email-form-field"
              value={values.email}
              placeholder="Email do Facebook"
              type="email"
              onBlur={() => setFieldTouched("email")}
              error={touched["email"] ? errors["email"] : ""}
            />
          </InputContainer>

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
            disabled={!isValid || isLoading}
          >
            Criar conta
          </Button>
        </Form>
      </Container>
      <Divider mt={32} mb={40} large />
      <RemainingSteps numberOfStepsLeft={4} />
    </>
  );
}

export default SignupWithFacebook;
