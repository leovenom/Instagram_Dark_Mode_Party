import { useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import RoundedButton from "ui/RoundedButton";
import Selector from "ui/Selector";

import { autoTracker } from "helpers/mixpanelTracker";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import { WAITING_LIST_STATUS } from "modules/auto/QuotationFlow/utils/constants";
import { brandNewCarValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import StepsTemplate from "modules/auto/QuotationFlow/components/StepsTemplate";
import quoteApi from "services/auto/quote";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const BASE_TRACKING_NAME = "Check0km";

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

const BrandNewCar = ({ quotationValues, machineActions }) => {
  const { formData, isLoading } = quotationValues;
  const initialValues = {
    isZeroKm: formData.isZeroKm || "",
  };

  const { handleSubmit, values, isValid, setFieldValue } = useFormik({
    initialValues,
    validationSchema: brandNewCarValidation,
    validateOnMount: true,
    onSubmit: async (values) => {
      const isZeroKm = values.isZeroKm === "yes";
      autoTracker.trackButton(`${BASE_TRACKING_NAME} Continue`, {
        IsCar0km: isZeroKm,
      });

      try {
        machineActions.submit();

        await quoteApi.updateQuote({
          quoteId: formData.quoteId,
          is_new: isZeroKm,
        });
      } catch (error) {
        if (error?.errors[0]?.status === WAITING_LIST_STATUS) {
          return machineActions.success({
            isZeroKm: values.isZeroKm,
          });
        }

        return machineActions.error(
          "Não foi possível continuar com o processo agora."
        );
      }

      machineActions.success({
        isZeroKm: values.isZeroKm,
      });
    },
  });

  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  return (
    <StepsTemplate title={STEPS_CONFIG.BRAND_NEW_CAR.TITLE}>
      <Form onSubmit={handleSubmit}>
        <Selector inline>
          <Selector.Option
            activeValue={values.isZeroKm}
            setActiveValue={(value) => setFieldValue("isZeroKm", value)}
            value="yes"
          >
            Sim
          </Selector.Option>
          <Selector.Option
            activeValue={values.isZeroKm}
            setActiveValue={(value) => setFieldValue("isZeroKm", value)}
            value="no"
          >
            Não
          </Selector.Option>
        </Selector>

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

export default withServiceMachine(BrandNewCar);
