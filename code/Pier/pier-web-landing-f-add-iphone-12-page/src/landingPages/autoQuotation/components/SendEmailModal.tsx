import { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import * as date from "helpers/date";
import { autoTracker } from "helpers/mixpanelTracker";
import useRequest from "hooks/useRequest";
import { Quote } from "modules/auto/QuotationFlow/utils/types";
import { waitingListValidation } from "modules/auto/QuotationFlow/validations/validationSchema";
import sendQuotationByEmail from "services/auto/sendQuotationByEmail";
import Button from "ui/Button";
import Input from "ui/Input";
import Modal from "ui/Modal";
import Text from "ui/Text";
import { useToast } from "ui/Toast";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      margin: 0 auto 24px;
    }
  }

  p {
    text-align: center;
  }

  label {
    width: 100%;
    display: flex;
  }
`;

const BASE_TRACKING_NAME = "Quote";

interface SendEmailModalProps {
  isOpen: boolean;
  toggle: () => void;
  quote?: Quote;
}

function SendEmailModal({ quote, isOpen, toggle }: SendEmailModalProps) {
  const WOMAN_YOGA_IMAGE_PATH =
    "/static_assets/images/rebranding/woman-yoga.svg";

  const [emailSent, setEmailSent] = useState<boolean>(false);

  const toast = useToast();
  const {
    response: sendEmailResponse,
    makeRequest: makeSendEmailRequest,
    error: sendEmailError,
    isLoading: isLoadingSendEmail,
  } = useRequest();

  async function sendQuotationEmail(email, quoteId) {
    const { options, url } = sendQuotationByEmail(email, quoteId);

    await makeSendEmailRequest(url, options);
    autoTracker.trackTransactionConfirmed(
      `${BASE_TRACKING_NAME} Sending Email`,
      { email }
    );
  }

  const {
    handleSubmit,
    values,
    handleChange,
    isValid,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validateOnMount: true,
    validationSchema: waitingListValidation,
    onSubmit: async function (values) {
      await sendQuotationEmail(values.email, quote?.quoteId);

      if (sendEmailError) {
        toast.error(
          "Tivemos um erro ao enviar seu email. Tente novamente mais tarde."
        );
      }

      setEmailSent(true);
    },
  });

  function renderEmailForm() {
    return (
      <>
        <Text variant="bodySmall" mb={24}>
          Digite um email aqui que enviaremos essa cotação pra você!
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={touched["email"] ? errors["email"] : ""}
          />
          <Button
            type="submit"
            fullWidth
            disabled={!isValid || isLoadingSendEmail}
            isLoading={isLoadingSendEmail}
          >
            Enviar
          </Button>
        </form>
      </>
    );
  }

  function renderSuccessMessage() {
    return (
      <>
        <Text variant="body" bold mb={24}>
          Enviamos a cotação para o seu email
        </Text>
        <Button
          type="button"
          variant="outline"
          fullWidth
          onClick={() => toggle()}
        >
          Fechar
        </Button>
      </>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      hide={toggle}
      contentLabel="Enviar por email"
      title="Enviar por email"
    >
      <ModalContainer>
        <div>
          <img src={WOMAN_YOGA_IMAGE_PATH} alt="Moça fazendo ioga" />
        </div>
        {emailSent ? renderSuccessMessage() : renderEmailForm()}
      </ModalContainer>
    </Modal>
  );
}

export default SendEmailModal;
