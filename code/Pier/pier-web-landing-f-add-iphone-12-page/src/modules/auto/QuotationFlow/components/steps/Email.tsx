import { useMemo, useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import Button from "ui/Button";
import Input from "ui/Input";
import RoundedButton from "ui/RoundedButton";

import { autoTracker } from "helpers/mixpanelTracker";
import useLocalStorage from "hooks/useLocalStorage";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import {
  WAITING_LIST_STATUS,
  STEPS_CONFIG,
} from "modules/auto/QuotationFlow/utils/constants";
import { emailValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import StepsTemplate from "modules/auto/QuotationFlow/components/StepsTemplate";
import quoteApi from "services/auto/quote";

const BASE_TRACKING_NAME = "Add Email";

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;

  ${breakpoints.desktop} {
    position: relative;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const getInitialValues = (email: string) => ({
  email: email || "",
});

const Email = ({ quotationValues, machineActions }) => {
  const { formData, isLoading, step } = quotationValues;
  const initialValues = useMemo(() => getInitialValues(formData?.email), []);
  const [autoQuotation, setAutoQuotation] = useLocalStorage(
    formData?.quoteId,
    null
  );

  const {
    handleSubmit,
    values,
    errors,
    isValid,
    touched,
    setFieldTouched,
    handleChange,
  } = useFormik({
    initialValues,
    validationSchema: emailValidation,
    validateOnMount: true,
    onSubmit: async (values) => {
      const email = values.email;

      autoTracker.trackButton(`${BASE_TRACKING_NAME} Continue`, {
        email,
      });

      machineActions.submit();
      try {
        await quoteApi.updateQuote({
          driver_email: email,
          quoteId: formData?.quoteId,
        });

        setAutoQuotation({ ...autoQuotation, email });

        machineActions.success({ email });
      } catch (error) {
        if (error?.errors[0]?.status === WAITING_LIST_STATUS) {
          return machineActions.success({ email });
        }

        return machineActions.error(
          "Não foi possivel continuar com o processo agora."
        );
      }
    },
  });

  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  useEffect(() => {
    if (autoQuotation) {
      window["dataLayer"] = window["dataLayer"] || [];
      window["dataLayer"].push({
        event: `quote.update`,
        webProperties: autoQuotation,
      });
    }
  }, [autoQuotation]);

  const onSkipEmail = () => {
    autoTracker.trackLink(`${BASE_TRACKING_NAME} Skip`);
    machineActions.skip();
  };

  return (
    <StepsTemplate
      title={STEPS_CONFIG.EMAIL.TITLE}
      additionalInfo="Pedimos seu email para enviar pra você a sua cotação."
    >
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          name="email"
          data-tracking="email-form-field"
          autoComplete="email"
          onChange={handleChange}
          value={values.email}
          onBlur={() => setFieldTouched("email")}
          error={touched.email ? errors.email : ""}
        />

        <ButtonGroup>
          <Button
            type="button"
            variant="plainText"
            fullWidth
            smallFontSize
            onClick={onSkipEmail}
          >
            Continuar sem o email
          </Button>

          <RoundedButton
            my={16}
            type="submit"
            variant="secondary"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            fullWidth
            data-tracking="email-form-submit"
          />
        </ButtonGroup>
      </Form>
    </StepsTemplate>
  );
};

export default withServiceMachine(Email);
