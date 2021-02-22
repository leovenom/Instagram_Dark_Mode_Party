import { useState, useMemo, useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import Input from "ui/Input";
import RoundedButton from "ui/RoundedButton";
import { autoTracker } from "helpers/mixpanelTracker";
import useLocalStorage from "hooks/useLocalStorage";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import {
  NotAvailableStatus,
  INVALID_CPF_ERROR_DETAIL,
} from "modules/auto/QuotationFlow/utils/constants";
import { cpfValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import StepsTemplate from "modules/auto/QuotationFlow/components/StepsTemplate";
import quoteApi from "services/auto/quote";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const BASE_TRACKING_NAME = "AddCpf";

const CPF_WITH_MASK_LENGTH = 14;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;

  ${breakpoints.desktop} {
    position: relative;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const getInitialValues = (cpf: string) => ({
  cpf: cpf || "",
});

const Cpf = ({ quotationValues, machineActions }) => {
  const { formData, isLoading, step } = quotationValues;

  const [autoQuotation, setAutoQuotation] = useLocalStorage(
    formData?.quoteId,
    null
  );
  const initialValues = useMemo(() => getInitialValues(formData?.cpf), []);

  const isZipCodeCovered = (quoteResponse) =>
    !quoteResponse.data?.attributes?.refusal_reasons?.includes(
      NotAvailableStatus.NOT_COVERED_ZIP_CODE
    );

  const updateStoredQuote = (quote, isProtected, responseValues = null) => {
    setAutoQuotation({
      ...quote,
      values: {
        ...responseValues?.data.attributes,
        isProtected,
      },
    });
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isValid,
    touched,
    setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema: cpfValidation,
    validateOnMount: true,
    onSubmit: async ({ cpf }) => {
      const formattedCPF = cpf.replace(/\D+/g, "");
      autoTracker.trackButton(`${BASE_TRACKING_NAME} Continue`, {
        cpf: formattedCPF,
      });

      machineActions.submit();
      let quote = {};

      async function updateQuoteWithCPF() {
        try {
          const quoteResponse = await quoteApi.updateQuote({
            driver_identification: formattedCPF,
            quoteId: formData?.quoteId,
          });

          quote = {
            quoteId: formData?.quoteId,

            model: {
              value: {
                attributes: {
                  model: formData.model.label,
                  make: formData.brand.label,
                  model_year: formData.year.label,
                },
              },
            },
            values: quoteResponse.data?.attributes,
            cpf: formattedCPF,
          };

          setAutoQuotation(quote);
        } catch (error) {
          if (error?.errors[0]?.detail === INVALID_CPF_ERROR_DETAIL) {
            return machineActions.error("CPF inválido");
          }
          return machineActions.error(
            "Não foi possivel continuar com o processo agora."
          );
        }
      }

      async function calculatePrice() {
        try {
          const calculatePriceResponse = await quoteApi.calculatePrice(
            formData?.quoteId
          );

          updateStoredQuote(quote, true, calculatePriceResponse);

          if (!isZipCodeCovered(calculatePriceResponse)) {
            return machineActions.skip({ cpf });
          }

          machineActions.success({
            cpf,
          });
        } catch (e) {
          if (e.errors[0].status === "422") {
            updateStoredQuote(quote, false);
            return machineActions.notSupported();
          }
          return machineActions.error(
            "Não foi possível continuar com o processo agora."
          );
        }
      }

      await updateQuoteWithCPF();
      calculatePrice();
    },
  });

  useEffect(() => {
    autoTracker.trackScreen("AddCpf");
  }, []);

  return (
    <StepsTemplate
      title={STEPS_CONFIG.CPF.TITLE}
      additionalInfo="Utilizamos o CPF para construir uma cotação exclusiva para você."
      subtitle={
        <>
          O documento deve ser do <strong>condutor principal</strong> (quem
          dirige o carro na maior parte do tempo) do veículo.
        </>
      }
    >
      <Form onSubmit={handleSubmit}>
        <Input
          type="tel"
          label="CPF"
          helpField="CPF do condutor principal"
          name="cpf"
          placeholder="000.000.000-00"
          onChange={handleChange}
          value={values.cpf}
          mask="cpf"
          onBlur={() => setFieldTouched("cpf")}
          error={
            values.cpf.length === CPF_WITH_MASK_LENGTH || touched.cpf
              ? errors.cpf
              : ""
          }
          data-tracking="cpf-form-field"
        />

        <ButtonContainer>
          <RoundedButton
            my={16}
            type="submit"
            variant="secondary"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            fullWidth
            data-tracking="cpf-form-submit"
          />
        </ButtonContainer>
      </Form>
    </StepsTemplate>
  );
};

export default withServiceMachine(Cpf);
