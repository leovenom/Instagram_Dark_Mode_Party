import { useMemo, useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import Button from "ui/Button";
import Input from "ui/Input";
import RoundedButton from "ui/RoundedButton";

import { autoTracker } from "helpers/mixpanelTracker";
import { removeSpecialCharacters } from "helpers/stringUtils";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import { INVALID_ADDRESS_ERROR_DETAIL } from "modules/auto/QuotationFlow/utils/constants";
import { cepValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import StepsTemplate from "modules/auto/QuotationFlow/components/StepsTemplate";
import quoteApi from "services/auto/quote";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const BASE_TRACKING_NAME = "ZipCode";

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

const getInitialValues = (cep: string) => ({
  "ship-zip": cep || "",
});

const Cep = ({ quotationValues, machineActions }) => {
  const { formData, isLoading, step } = quotationValues;
  const initialValues = useMemo(
    () => getInitialValues(formData?.["ship-zip"]),
    []
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
    validationSchema: cepValidation,
    validateOnMount: true,
    onSubmit: async (values) => {
      const zipCode = values["ship-zip"];
      autoTracker.trackButton(`${BASE_TRACKING_NAME} Continue`, {
        zipCode: zipCode,
      });

      machineActions.submit();
      try {
        await quoteApi.updateQuote({
          home_zipcode: removeSpecialCharacters(zipCode),
          quoteId: formData?.quoteId,
        });
        machineActions.success({
          "ship-zip": zipCode,
        });
      } catch (error) {
        if (error?.errors[0]?.detail === INVALID_ADDRESS_ERROR_DETAIL) {
          return machineActions.error("CEP não encontrado");
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

  return (
    <StepsTemplate
      title={STEPS_CONFIG.CEP.TITLE}
      additionalInfo="É a partir do CEP que identificamos o risco da sua região para
    calcularmos o preço do seu seguro."
    >
      <Form onSubmit={handleSubmit}>
        <Input
          type="tel"
          label="CEP"
          name="ship-zip"
          autoComplete="shipping postal-code"
          data-tracking="zip-form-field"
          onChange={handleChange}
          value={values["ship-zip"]}
          mask="cep"
          onBlur={() => setFieldTouched("ship-zip")}
          error={touched["ship-zip"] ? errors["ship-zip"] : ""}
        />

        <ButtonGroup>
          <Button
            my={4}
            type="button"
            variant="plainText"
            smallFontSize
            role="button"
            fullWidth
            onClick={() => {
              autoTracker.trackLink(`${BASE_TRACKING_NAME} Unknown`);
              machineActions.skip();
            }}
          >
            Não sei meu CEP
          </Button>

          <RoundedButton
            my={16}
            type="submit"
            variant="secondary"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            data-tracking="zip-form-submit"
            fullWidth
          />
        </ButtonGroup>
      </Form>
    </StepsTemplate>
  );
};

export default withServiceMachine(Cep);
