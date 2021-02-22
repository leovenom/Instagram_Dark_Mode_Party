import { useEffect } from "react";

import { autoTracker } from "helpers/mixpanelTracker";
import useRequest from "hooks/useRequest";
import login from "services/auto/login";
import Divider from "ui/Divider";
import { useToast } from "ui/Toast";

import LoginForm from "../components/LoginForm";
import SigninLoading from "../components/SigninLoading";
import RemainingSteps from "../components/RemainingSteps";
import { LoginFormValues } from "../utils/types";
import { makeAttributesLoginRequest } from "../utils/makeAttributesForRequest";
import sendQuoteViaEmail from "../utils/sendQuoteViaEmail";
import handleLoginErrorMessage, {
  DIFFERENT_CPFS_ERROR_MESSAGE,
} from "../utils/handleLoginErrorMessage";
import { setUserIntoGA } from "../utils/setUserIntoAnalyticsPlatforms";

const BASE_TRACKING_NAME = "UserSignup Login";

interface Props {
  allowSendEmail: boolean;
  autoQuotation: any;
  sendEmailRequest: any;
  onAddUserQuotation: (token: string) => void;
  showDownloadStep: () => void;
}

function Login({
  allowSendEmail,
  autoQuotation,
  sendEmailRequest,
  onAddUserQuotation,
  showDownloadStep,
}: Props) {
  const toast = useToast();

  const {
    response: loginResponse,
    isLoading: isLoadingLogin,
    error: loginError,
    makeRequest: makeLoginRequest,
  } = useRequest();

  const quotationHasSameUserCpf = () => {
    if (
      loginResponse.data?.attributes["cpf"] !==
      autoQuotation?.values.driver_identification
    ) {
      toast.error(DIFFERENT_CPFS_ERROR_MESSAGE);
      return false;
    }
    return true;
  };

  const onSubmit = async (values: LoginFormValues) => {
    const attributes = makeAttributesLoginRequest({
      email: values.email,
      password: values.password,
      provider: values.provider,
    });
    const { url, options } = login(attributes);
    await makeLoginRequest(url, options);
  };

  useEffect(() => {
    autoTracker.trackModal(BASE_TRACKING_NAME);
  }, []);

  useEffect(() => {
    if (loginError) {
      toast.error(handleLoginErrorMessage(loginError));
    }
  }, [loginError]);

  useEffect(() => {
    const onLoginSuccess = async (token, email) => {
      if (allowSendEmail) {
        await sendQuoteViaEmail(
          sendEmailRequest,
          autoQuotation,
          token,
          email,
          BASE_TRACKING_NAME
        );
      }
      onAddUserQuotation(token);
    };

    if (loginResponse && quotationHasSameUserCpf()) {
      autoTracker.trackTransactionConfirmed(BASE_TRACKING_NAME);
      const token = loginResponse.headers.get("Authorization");
      const email = loginResponse?.data?.attributes["email"];
      onLoginSuccess(token, email);

      const mxp = window["mixpanel"];

      if (mxp) {
        const userId = loginResponse?.data?.id;
        const emailIdentified = mxp.get_property("email");

        if (emailIdentified && emailIdentified !== email) {
          mxp.reset();
          mxp.register({ email: email });
        }

        if (userId) {
          mxp.identify(userId);
          setUserIntoGA(userId);
        }
      }

      showDownloadStep();
    }
  }, [loginResponse]);

  if (isLoadingLogin) {
    return <SigninLoading />;
  }

  return <LoginForm handleSubmitForm={onSubmit} isLoading={isLoadingLogin} />;
}

export default Login;
