import { useMemo, useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import Button from "ui/Button";
import Input from "ui/Input";
import RoundedButton from "ui/RoundedButton";

import { autoTracker } from "helpers/mixpanelTracker";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import { makingModelByLicensePlate } from "modules/auto/QuotationFlow/utils/makingModelByLicensePlate";
import { licensePlateValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import StepsTemplate from "modules/auto/QuotationFlow/components/StepsTemplate";
import quoteApi from "services/auto/quote";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const BASE_TRACKING_NAME = "QuoteLicensePlate";

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

const getInitialValues = (licensePlate: string) => ({
  licensePlate: licensePlate || "",
});

const LicensePlate = ({ quotationValues, machineActions }) => {
  const router = useRouter();
  const { formData, isLoading, step } = quotationValues;
  const initialValues = useMemo(
    () => getInitialValues(formData?.licensePlate),
    []
  );

  const goBackToAutoLandingPage = () => router.push("/seguro-auto");
  const {
    handleSubmit,
    values,
    errors,
    isValid,
    touched,
    setFieldTouched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: licensePlateValidation,
    validateOnMount: true,
    onSubmit: async (values) => {
      try {
        const licensePlate = values.licensePlate;
        autoTracker.trackButton(`${BASE_TRACKING_NAME} Continue`, {
          licensePlate: licensePlate,
        });

        machineActions.submit();

        const res = await quoteApi.getModelByLicensePlate(licensePlate);
        const carModel = makingModelByLicensePlate(res?.data?.attributes);

        machineActions.success({
          licensePlate: licensePlate,
          year: carModel?.year,
          brand: carModel?.brand,
          model: carModel?.selectedModel,
          modelOptions: carModel?.modelOptions,
        });
      } catch (error) {
        const msg =
          "Não foi possível encontrar o modelo do seu veículo pela placa";

        autoTracker.trackError(`${BASE_TRACKING_NAME}`, msg);
        machineActions.skip();
      }
    },
  });

  const toUpperCaseOnChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setFieldValue("licensePlate", event.target.value.toUpperCase());

  const skip = () => {
    autoTracker.trackLink(`${BASE_TRACKING_NAME} Unknown`);
    machineActions.skip();
  };

  useEffect(() => {
    autoTracker.trackScreen(`${BASE_TRACKING_NAME}`);
  }, []);

  return (
    <StepsTemplate
      title={STEPS_CONFIG.LICENSE_PLATE.TITLE}
      goBack={goBackToAutoLandingPage}
      additionalInfo="A partir da placa conseguimos reconhecer as características do seu
    carro, como o ano e modelo. É mais rápido e prático."
    >
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Placa (opcional)"
          name="license-plate"
          onChange={toUpperCaseOnChangeValue}
          value={values.licensePlate}
          mask="licensePlate"
          onBlur={() => setFieldTouched("licensePlate")}
          error={touched.licensePlate ? errors.licensePlate : ""}
        />

        <ButtonGroup>
          <Button
            type="button"
            my={4}
            fullWidth
            variant="plainText"
            role="button"
            smallFontSize
            onClick={skip}
          >
            Pular etapa
          </Button>

          <RoundedButton
            my={16}
            variant="secondary"
            type="submit"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            fullWidth
          />
        </ButtonGroup>
      </Form>
    </StepsTemplate>
  );
};

export default withServiceMachine(LicensePlate);
