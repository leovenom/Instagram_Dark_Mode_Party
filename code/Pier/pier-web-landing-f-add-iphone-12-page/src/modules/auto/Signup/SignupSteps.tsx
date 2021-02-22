import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { autoTracker } from "helpers/mixpanelTracker";
import { capitalize } from "helpers/stringUtils";
import useRequest from "hooks/useRequest";
import useLocalStorage from "hooks/useLocalStorage";
import addUserQuotation from "services/auto/addUserQuotation";
import signUp from "services/auto/signUp";
import { useToast } from "ui/Toast";

import Initial from "./steps/Initial";
import SigninLoading from "./components/SigninLoading";
import SignupWithEmail from "./steps/SignupWithEmail";
import SignupWithFacebook from "./steps/SignupWithFacebook";
import Login from "./steps/Login";
import { SignupFormValues, FacebookSignupValues } from "./utils/types";
import { makeAttributesRequest } from "./utils/makeAttributesForRequest";
import sendQuoteViaEmail from "./utils/sendQuoteViaEmail";
import {
  setUserIntoMixpanel,
  setUserIntoGA,
} from "./utils/setUserIntoAnalyticsPlatforms";
import handleSignupErrorMessage, {
  INTERNAL_SERVER_ERROR_MESSAGE,
} from "./utils/handleSignupErrorMessage";

const BASE_TRACKING_NAME = "UserSignup";

enum Steps {
  INITIAL,
  SIGNUP_WITH_EMAIL,
  SIGNUP_WITH_FACEBOOK,
  LOGIN,
  DOWNLOAD,
}

type SignupType = "facebook" | "email";

interface Props {
  allowSendEmail: boolean;
  quoteId: string;
}

function SignupSteps({ allowSendEmail, quoteId }: Props) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.INITIAL);
  const [firstName, setFirstName] = useState<string>("");
  const [
    facebookValues,
    setFacebookValues,
  ] = useState<FacebookSignupValues | null>(null);

  const [autoQuotation] = useLocalStorage("autoQuotation", null);
  const [, setReferralId] = useLocalStorage("referralId", null);
  const [autoLeadChannel] = useLocalStorage("autoLeadChannel", null);
  const [lastQuoteSignedIn] = useLocalStorage("lastQuoteSignedIn", null);

  const getSignupType = (): SignupType => (firstName ? "facebook" : "email");

  const toast = useToast();

  const {
    response: signupResponse,
    isLoading: isLoadingSignup,
    error: signupError,
    makeRequest: makeSignUpRequest,
  } = useRequest();

  const {
    makeRequest: makeAddQuotationRequest,
    error: addQuotationError,
    isLoading: isLoadingAddQuotation,
  } = useRequest();

  const { makeRequest: makeSendEmailRequest } = useRequest();

  function showSignupWithEmailStep() {
    setCurrentStep(Steps.SIGNUP_WITH_EMAIL);
  }

  function showSignupWithFacebookStep() {
    setCurrentStep(Steps.SIGNUP_WITH_FACEBOOK);
  }

  function showLoginStep() {
    setCurrentStep(Steps.LOGIN);
  }

  function showDownloadStep() {
    setCurrentStep(Steps.DOWNLOAD);
  }

  const onAddUserQuotation = async (token) => {
    const { options, url } = addUserQuotation(
      autoQuotation?.quoteId,
      token,
      autoLeadChannel
    );
    await makeAddQuotationRequest(url, options);
  };

  async function onSubmit(values: SignupFormValues) {
    const signupFlowType = values.facebookAccessToken ? "facebook" : "email";
    const attributes = makeAttributesRequest(signupFlowType, {
      email: values.email || "",
      password: values.password || "",
      passwordConfirmation: values.passwordConfirmation || "",
      cpf: autoQuotation.cpf,
      accessToken: values.facebookAccessToken || "",
    });
    setFirstName(values.name?.split(" ")[0]);

    const { url, options } = signUp(attributes);
    await makeSignUpRequest(url, options);
  }

  useEffect(() => {
    if (getSignupType() === "email") {
      autoTracker.trackModal(`${BASE_TRACKING_NAME} Form`);
    } else {
      autoTracker.trackModal(`${BASE_TRACKING_NAME} Facebook Confirmation`);
    }
  }, [firstName]);

  useEffect(() => {
    if (signupError) {
      autoTracker.trackError(
        `${BASE_TRACKING_NAME} With ${capitalize(getSignupType())}`,
        handleSignupErrorMessage(signupError)
      );

      toast.error(handleSignupErrorMessage(signupError));
    }
    if (addQuotationError) {
      toast.error(INTERNAL_SERVER_ERROR_MESSAGE);
    }
  }, [signupError, addQuotationError]);

  useEffect(() => {
    async function onSignupSuccess(token, email, userId) {
      if (allowSendEmail) {
        await sendQuoteViaEmail(
          makeSendEmailRequest,
          autoQuotation,
          token,
          email,
          BASE_TRACKING_NAME
        );
      }
      onAddUserQuotation(token);
      setReferralId(null);
    }

    if (signupResponse) {
      const token = signupResponse.headers.get("Authorization");
      const userId = signupResponse?.data?.attributes["user-id"];
      const email = signupResponse?.data?.attributes["email"];
      onSignupSuccess(token, email, userId);

      setUserIntoMixpanel(signupResponse, email);
      setUserIntoGA(userId);

      showDownloadStep();

      autoTracker.trackTransactionConfirmed(
        `${BASE_TRACKING_NAME} With ${capitalize(getSignupType())}`
      );
    }
  }, [signupResponse]);

  useEffect(() => {
    if (lastQuoteSignedIn && lastQuoteSignedIn.id === quoteId) {
      showDownloadStep();
    }
  }, [lastQuoteSignedIn]);

  if (isLoadingSignup || isLoadingAddQuotation) {
    return <SigninLoading />;
  }

  switch (currentStep) {
    case Steps.INITIAL:
      return (
        <Initial
          showSignupWithEmailStep={showSignupWithEmailStep}
          showSignupWithFacebookStep={showSignupWithFacebookStep}
          showLoginStep={showLoginStep}
          setFacebookValues={setFacebookValues}
        />
      );
    case Steps.SIGNUP_WITH_EMAIL:
      return (
        <SignupWithEmail onSubmit={onSubmit} isLoading={isLoadingSignup} />
      );
    case Steps.SIGNUP_WITH_FACEBOOK:
      return (
        <SignupWithFacebook
          facebookValues={facebookValues}
          handleFormSubmit={onSubmit}
          isLoading={isLoadingSignup}
        />
      );
    case Steps.LOGIN:
      return (
        <Login
          allowSendEmail={allowSendEmail}
          autoQuotation={autoQuotation}
          sendEmailRequest={makeSendEmailRequest}
          onAddUserQuotation={onAddUserQuotation}
          showDownloadStep={showDownloadStep}
        />
      );
    case Steps.DOWNLOAD:
      router.push("/seguro-auto/faca-vistoria");
      return null;
    default:
      return null;
  }
}

export default SignupSteps;
