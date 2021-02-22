import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import Text from "ui/Text";
import colors from "ui/theme/colors";
import { autoTracker } from "helpers/mixpanelTracker";
import { getDriverFirstName } from "helpers/getFormattedVehicleInfo";
import useLocalStorage from "hooks/useLocalStorage";
import withServiceMachine from "../../stateMachine/withServiceMachine";
import { NotAvailableStatus } from "../../utils/constants";

const womanWithSmartphone =
  "/static_assets/images/rebranding/woman-with-smartphone.svg";

const BASE_TRACKING_NAME = "QuoteBuild";

const loading = keyframes`
  0% {
    tranform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loaded = keyframes`
  0% {
    height: 16px;
    width: 16px;
    border-width: 0;
  }
  50% {
    height: 0;
    width: 0;
    border: 0;
  }
  100% {
    height: 16px;
    width: 16px;
    border: 0;
    background-color: ${colors.secondary600};
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = styled.div`
  // Position
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  // Box Model
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainLoadingContainer = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-of-type {
    max-width: 120px;
  }

  img {
    margin-bottom: 72px;
  }
`;

const StepsContainer = styled.div`
  margin: 0 24px;
`;

const LoadingStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  p {
    margin: 0 0 0 8px;
    padding: 0;
  }
`;

const Box = styled.div`
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckStep = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.gray400};
  border-top: 3px solid ${({ theme }) => theme.colors.secondary600};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 2px;
    width: 4px;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    transform: rotate(-45deg);
  }

  &.loading {
    animation: ${loading} 1000ms linear infinite;
  }

  &.loaded {
    animation: ${loaded} 250ms linear forwards;
  }
`;

const StyledText = styled(Text)`
  &&& {
    font-size: 28px;
    line-height: 40px;
    max-width: 320px;
  }
`;

const FAKE_REQUEST_DELAY = 1500;

enum RequestSteps {
  CHECKING_VEHICLE_VALUE,
  CHECKING_REGION_SECURITY,
  CHECKING_USER_PROFILE,
  DONE,
}

const Quoting = ({ quotationValues, machineActions }) => {
  const { formData } = quotationValues;
  const [autoQuotation] = useLocalStorage(formData?.quoteId, null);

  const [requestCurrentStep, setRequestCurrentStep] = useState<number>(
    RequestSteps.CHECKING_VEHICLE_VALUE
  );

  function handleCheckStepClassName(isLoading) {
    return isLoading ? "loading" : "loaded";
  }

  function goToWaitingList() {
    machineActions.notSupported();
  }

  function sendUserToQuoteScreen(isZipcodeCovered) {
    isZipcodeCovered
      ? machineActions.success()
      : machineActions.notCoveredQuotation();
  }

  useEffect(() => {
    // Fake the request timings 'cause we have only one request
    // being processed here and it's used on the third animation
    setTimeout(() => {
      setRequestCurrentStep(RequestSteps.CHECKING_REGION_SECURITY);
    }, FAKE_REQUEST_DELAY);

    setTimeout(() => {
      setRequestCurrentStep(RequestSteps.CHECKING_USER_PROFILE);
    }, FAKE_REQUEST_DELAY * 2);

    setTimeout(() => {
      setRequestCurrentStep(RequestSteps.DONE);
    }, FAKE_REQUEST_DELAY * 3);

    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  useEffect(() => {
    if (requestCurrentStep === RequestSteps.DONE && autoQuotation) {
      const quote = autoQuotation.values;

      if (!quote.isProtected) return goToWaitingList();

      const isZipCodeCovered = !quote.refusal_reasons.includes(
        NotAvailableStatus.NOT_COVERED_ZIP_CODE
      );

      autoTracker.track(`${BASE_TRACKING_NAME} Quote Processed`, {
        quoteId: autoQuotation?.quoteId,
        isZipCodeCovered,
        cpf: formData.cpf,
        zipCode: formData["ship-zip"],
        makeName: formData.model.value.attributes.make,
        modelName: formData.model.value.attributes.model,
        year: formData.model.value.attributes["model_year"],
        isAuctioned: autoQuotation?.values?.is_auctioned,
      });

      sendUserToQuoteScreen(isZipCodeCovered);
    }
  }, [requestCurrentStep, autoQuotation]);

  return (
    <Container>
      <SpinnerContainer>
        <MainLoadingContainer>
          <div>
            <img
              src={womanWithSmartphone}
              alt="Mulher descansando usando um smartphone"
            />
          </div>
          <Text variant="body" color="secondary600" bold align="center" mb={16}>
            Aguarde um pouco
          </Text>
          <StyledText
            variant="subtitleLarge"
            align="center"
            mb={24}
          >{`Oi ${getDriverFirstName(
            autoQuotation?.values?.driver_name
          )}, estamos montando sua cotação`}</StyledText>
        </MainLoadingContainer>
        <StepsContainer>
          <LoadingStep>
            <Box>
              <CheckStep
                className={handleCheckStepClassName(
                  requestCurrentStep < RequestSteps.CHECKING_REGION_SECURITY
                )}
              >
                <div></div>
              </CheckStep>
            </Box>
            <Text variant="body" color="gray600">
              Analisando o valor do seu carro
            </Text>
          </LoadingStep>
          <LoadingStep>
            <Box>
              <CheckStep
                className={handleCheckStepClassName(
                  requestCurrentStep < RequestSteps.CHECKING_USER_PROFILE
                )}
              >
                <div></div>
              </CheckStep>
            </Box>
            <Text variant="body" color="gray600">
              Verificando incidência de roubo na sua região
            </Text>
          </LoadingStep>
          <LoadingStep>
            <Box>
              <CheckStep
                className={handleCheckStepClassName(
                  requestCurrentStep < RequestSteps.DONE
                )}
              >
                <div></div>
              </CheckStep>
            </Box>
            <Text variant="body" color="gray600">
              Analisando seu perfil
            </Text>
          </LoadingStep>
        </StepsContainer>
      </SpinnerContainer>
    </Container>
  );
};

export default withServiceMachine(Quoting);
