import { useMemo, useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import Input from "ui/Input";
import RoundedButton from "ui/RoundedButton";

import { autoTracker } from "helpers/mixpanelTracker";
import useRequest from "hooks/useRequest";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import { WAITING_LIST_STATUS } from "modules/auto/QuotationFlow/utils/constants";
import getCepFromGoogleMapsResponse from "modules/auto/QuotationFlow/utils/getCepFromGoogleMapsResponse";
import { makingFullAddress } from "modules/auto/QuotationFlow/utils/makingFullAddress";
import { FormData } from "modules/auto/QuotationFlow/utils/types";
import { fullAddressValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import StepsTemplate from "modules/auto/QuotationFlow/components/StepsTemplate";
import quoteApi from "services/auto/quote";
import getAddressDetails from "services/googleMaps/getAddressDetails";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const BASE_TRACKING_NAME = "AddAddress";

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${breakpoints.desktop} {
    position: relative;
  }
`;

const InputContainer = styled.div`
  margin: 12px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const getInitialValues = (formData: FormData) => ({
  "ship-address": formData["ship-address"] || "",
  number: formData.number || "",
  "ship-city": formData["ship-city"] || "",
  neighborhood: formData.neighborhood || "",
});

const FullAddress = ({ quotationValues, machineActions }) => {
  const { formData, isLoading, step } = quotationValues;
  const initialValues = useMemo(() => getInitialValues(formData), [formData]);

  const {
    makeRequest: makeGoogleMapsRequest,
    response: googleMapsResponse,
    error: googleMapsError,
  } = useRequest();

  const onGetAddressDetails = (formValues) => {
    const address = {
      number: formValues.number,
      neighborhood: formValues.neighborhood,
      street: formValues["ship-address"],
      city: formValues["ship-city"],
    };

    const { url, options } = getAddressDetails(address);
    makeGoogleMapsRequest(url, options);
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldTouched,
    touched,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema: fullAddressValidation,
    validateOnMount: true,
    onSubmit: async (values) => {
      const trackingProps = {
        street: values["ship-address"],
        neighborhood: values.neighborhood,
        city: values["ship-city"],
      };
      autoTracker.trackButton(`${BASE_TRACKING_NAME} Continue`, trackingProps);

      machineActions.submit();
      onGetAddressDetails(values);
    },
  });

  const submitFullAddress = async (cep) => {
    const onSuccess = () => {
      machineActions.success({
        "ship-address": values["ship-address"],
        number: values.number,
        "ship-city": values["ship-city"],
        neighborhood: values.neighborhood,
        cep,
      });
    };

    try {
      await quoteApi.updateQuote({
        home_zipcode: cep,
        home_parking_address: JSON.stringify(makingFullAddress(values)),
        quoteId: formData?.quoteId,
      });
      onSuccess();
    } catch (error) {
      if (error?.errors[0]?.status === WAITING_LIST_STATUS) return onSuccess();
      return machineActions.error(
        "Não foi possivel continuar com o processo agora."
      );
    }
  };

  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  useEffect(() => {
    if (googleMapsResponse) {
      const cep = getCepFromGoogleMapsResponse(googleMapsResponse);
      if (cep) {
        submitFullAddress(cep);
      } else {
        machineActions.error(
          "Não conseguimos encontrar seu cep a partir do endereço"
        );
      }
    }
    if (googleMapsError) {
      machineActions.error("Não foi possivel continuar com o processo agora.");
    }
  }, [googleMapsResponse, googleMapsError]);

  return (
    <StepsTemplate title={STEPS_CONFIG.ADDRESS.TITLE}>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            label="Rua / Avenida"
            name="ship-address"
            autoComplete="shipping street-address"
            onChange={handleChange}
            value={values["ship-address"]}
            onBlur={() => setFieldTouched("ship-address")}
            error={touched["ship-address"] ? errors["ship-address"] : ""}
          />
        </InputContainer>

        <InputContainer>
          <Input
            type="tel"
            label="Número"
            name="number"
            onChange={handleChange}
            value={values.number}
            onBlur={() => setFieldTouched("number")}
            error={touched.number ? errors.number : ""}
          />
        </InputContainer>

        <InputContainer>
          <Input
            type="text"
            label="Bairro"
            name="neighborhood"
            autoComplete="neighborhood"
            onChange={handleChange}
            value={values.neighborhood}
            onBlur={() => setFieldTouched("neighborhood")}
            error={touched.neighborhood ? errors.neighborhood : ""}
          />
        </InputContainer>

        <InputContainer>
          <Input
            type="text"
            label="Cidade"
            name="ship-city"
            data-tracking="city-form-field"
            autoComplete="shipping locality"
            onChange={handleChange}
            value={values["ship-city"]}
            onBlur={() => setFieldTouched("ship-city")}
            error={touched["ship-city"] ? errors["ship-city"] : ""}
          />
        </InputContainer>

        <ButtonContainer>
          <RoundedButton
            my={16}
            type="submit"
            variant="secondary"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            fullWidth
            data-tracking="fulladdress-form-submit"
          />
        </ButtonContainer>
      </Form>
    </StepsTemplate>
  );
};

export default withServiceMachine(FullAddress);
