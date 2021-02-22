import { useEffect } from "react";
import styled from "styled-components";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import Button from "ui/Button";
import Divider from "ui/Divider";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

import config from "config";
import { autoTracker } from "helpers/mixpanelTracker";
import LoginText from "../components/LoginText";
import RemainingSteps from "../components/RemainingSteps";
import { FacebookSignupValues } from "../utils/types";

const BASE_TRACKING_NAME = "UserSignup";

const Container = styled.div`
  box-sizing: border-box;
  padding: 0 24px;

  ${breakpoints.desktop} {
    padding: 0 40px;
  }
`;

interface Props {
  showSignupWithEmailStep: () => void;
  showSignupWithFacebookStep: () => void;
  showLoginStep: () => void;
  setFacebookValues: (values: FacebookSignupValues) => void;
}

function Initial({
  showSignupWithEmailStep,
  showSignupWithFacebookStep,
  showLoginStep,
  setFacebookValues,
}: Props) {
  function facebookLoginCallback(facebookValues) {
    const values = {
      email: facebookValues.email,
      facebookAccessToken: facebookValues.accessToken,
      name: facebookValues.name,
    };
    setFacebookValues(values);
    showSignupWithFacebookStep();
  }

  useEffect(() => {
    autoTracker.trackModal(`${BASE_TRACKING_NAME} Initial`);
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
        <Text variant="bodySmall" mb={24}>
          Escolha uma das opções abaixo:
        </Text>
        <Button
          fullWidth
          type="submit"
          variant="secondary"
          icon="mail"
          onClick={() => {
            autoTracker.trackButton(
              `${BASE_TRACKING_NAME} Continue With Email`
            );
            showSignupWithEmailStep();
          }}
        >
          Continuar com email
        </Button>
        <FacebookLogin
          appId={config.FACEBOOK_APP_ID}
          fields="name,email,first_name,last_name,gender"
          scope="email,public_profile,user_friends,user_gender,user_link"
          callback={facebookLoginCallback}
          cookie={false}
          render={(renderProps) => (
            <Button
              fullWidth
              type="button"
              variant="facebook"
              my={16}
              onClick={() => {
                autoTracker.trackButton(`${BASE_TRACKING_NAME} With Facebook`);
                renderProps.onClick();
              }}
            >
              Continuar com Facebook
            </Button>
          )}
        />
        <LoginText optLogin={showLoginStep} />
      </Container>
      <Divider my={48} large />
      <RemainingSteps numberOfStepsLeft={4} />
    </>
  );
}

export default Initial;
