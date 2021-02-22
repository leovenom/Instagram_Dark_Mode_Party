import { useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import RoundedButton from "ui/RoundedButton";
import Selector from "ui/Selector";
import Text from "ui/Text";
import Input from "ui/Input";

import { autoTracker } from "helpers/mixpanelTracker";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import { WAITING_LIST_STATUS } from "modules/auto/QuotationFlow/utils/constants";
import { businessCarValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import StepsTemplate from "modules/auto/QuotationFlow/components/StepsTemplate";
import quoteApi from "services/auto/quote";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const BASE_TRACKING_NAME = "CheckBusinessCar";

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${breakpoints.desktop} {
    position: relative;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BusinessCar = ({ quotationValues, machineActions }) => {
  const { formData, isLoading } = quotationValues;
  const initialValues = {
    vehicleUsageDescription: formData.vehicleUsageDescription || "",
    carUsedFor: "",
  };

  const {
    handleSubmit,
    values,
    isValid,
    setFieldValue,
    handleChange,
  } = useFormik({
    initialValues,
    validationSchema: businessCarValidation,
    validateOnMount: true,
    onSubmit: async (values) => {
      const isBusinessCar = values.vehicleUsageDescription === "ride_hailing";
      const answerDescription =
        values.vehicleUsageDescription === "other"
          ? values.carUsedFor
          : values.vehicleUsageDescription;

      autoTracker.trackButton(`${BASE_TRACKING_NAME} Continue`, {
        isBusinessCar,
        vehicleUsageDescription: answerDescription,
      });

      try {
        machineActions.submit();

        await quoteApi.updateQuote({
          quoteId: formData.quoteId,
          is_business_car: isBusinessCar,
          vehicle_usage_description: answerDescription,
        });
      } catch (error) {
        if (error?.errors[0]?.status === WAITING_LIST_STATUS) {
          return machineActions.success({
            is_business_car: isBusinessCar,
            vehicleUsageDescription: answerDescription,
          });
        }

        return machineActions.error(
          "Não foi possível continuar com o processo agora."
        );
      }

      machineActions.success({
        is_business_car: isBusinessCar,
        vehicleUsageDescription: answerDescription,
      });
    },
  });

  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  return (
    <StepsTemplate title={STEPS_CONFIG.BUSINESS_CAR.TITLE}>
      <Form onSubmit={handleSubmit}>
        <Selector>
          <Selector.Option
            activeValue={values.vehicleUsageDescription}
            setActiveValue={(value) =>
              setFieldValue("vehicleUsageDescription", value)
            }
            value="personal"
          >
            <span>
              <Text
                variant="body"
                bold={values.vehicleUsageDescription === "personal"}
              >
                Somente uso pessoal
              </Text>
              <Text variant="body" color="gray600">
                Ex: Usos do dia a dia ou lazer
              </Text>
            </span>
          </Selector.Option>

          <Selector.Option
            activeValue={values.vehicleUsageDescription}
            setActiveValue={(value) =>
              setFieldValue("vehicleUsageDescription", value)
            }
            value="ride_hailing"
          >
            <span>
              <Text
                variant="body"
                bold={values.vehicleUsageDescription === "ride_hailing"}
              >
                Motorista de aplicativo
              </Text>
              <Text variant="body" color="gray600">
                Ex: Uber, 99...
              </Text>
            </span>
          </Selector.Option>

          <Selector.Option
            activeValue={values.vehicleUsageDescription}
            setActiveValue={(value) =>
              setFieldValue("vehicleUsageDescription", value)
            }
            value="other"
          >
            <span>
              <Text
                variant="body"
                bold={values.vehicleUsageDescription === "other"}
              >
                Outros usos a trabalho
              </Text>
            </span>
          </Selector.Option>
        </Selector>

        {values.vehicleUsageDescription === "other" && (
          <>
            <Text variant="body" mt={40} mb={32}>
              Descreva abaixo como você utiliza o carro para o seu trabalho?
            </Text>

            <Input
              type="text"
              label="Eu uso o carro para..."
              name="carUsedFor"
              onChange={handleChange}
              value={values.carUsedFor}
            />
          </>
        )}

        <ButtonContainer>
          <RoundedButton
            my={16}
            type="submit"
            variant="secondary"
            isLoading={isLoading}
            disabled={!isValid || isLoading}
            fullWidth
          />
        </ButtonContainer>
      </Form>
    </StepsTemplate>
  );
};

export default withServiceMachine(BusinessCar);
