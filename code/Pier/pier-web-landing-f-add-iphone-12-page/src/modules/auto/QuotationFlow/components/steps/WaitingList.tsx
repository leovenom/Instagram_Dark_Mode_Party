import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import useLocalStorage from "hooks/useLocalStorage";

import Modal from "ui/Modal";
import Text from "ui/Text";
import Input from "ui/Input";
import Button from "ui/Button";
import withServiceMachine from "../../stateMachine/withServiceMachine";
import { waitingListValidation } from "../../validations/validationSchema";
import quoteApi from "services/auto/quote";
import { WAITING_LIST_STATUS } from "../../utils/constants";
import { autoTracker } from "helpers/mixpanelTracker";

const BASE_TRACKING_NAME = "Waiting List";

const AlignRight = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Img = styled.img`
  margin: auto;
  display: block;
`;

const WaitingList = ({ machineActions, quotationValues, isOpen, quoteId }) => {
  const router = useRouter();
  const { isLoading, formData } = quotationValues;
  const [autoQuotation, setAutoQuotation] = useLocalStorage(
    "autoQuotation",
    null
  );
  const clearQuotation = () => setAutoQuotation(null);

  const handleBackToHome = () => {
    machineActions.restartMachine();
    router.push("/seguro-auto");
  };

  const trackSavedEmailWaitingList = () => {
    autoTracker.trackTransactionConfirmed(`${BASE_TRACKING_NAME} Saving Email`);
  };

  const WAITING_LIST_IMAGE_PATH =
    "/static_assets/images/rebranding/woman-yoga.svg";

  const {
    handleSubmit,
    values,
    errors,
    isValid,
    touched,
    setFieldTouched,
    handleChange,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: waitingListValidation,
    validateOnMount: true,
    onSubmit: async (values) => {
      autoTracker.trackButton(`${BASE_TRACKING_NAME} Email`, {
        email: values.email,
      });

      machineActions.submit();
      try {
        const attributes = {
          quoteId: formData?.quoteId || quoteId,
          waitlist_email: values.email,
        };
        await quoteApi.updateQuote(attributes);

        trackSavedEmailWaitingList();
        clearQuotation();

        machineActions.success();
      } catch (throws) {
        const status = throws?.errors[0]?.status;
        if (status === WAITING_LIST_STATUS) {
          trackSavedEmailWaitingList();
          return machineActions.success();
        }
        machineActions.error(
          "Estamos com alguns probleminhas para cadastrar você na lista. Por favor, tente mais tarde :)"
        );
      }
    },
  });

  useEffect(() => {
    if (isOpen) {
      autoTracker.trackModal(BASE_TRACKING_NAME);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      hide={() => null}
      contentLabel=""
      title=""
      hideCloseButton
    >
      <form onSubmit={handleSubmit}>
        <Img src={WAITING_LIST_IMAGE_PATH} />
        <Text variant="subtitleLarge" align="center" mt={24} mb={12}>
          Lista de espera
        </Text>

        <Text variant="body" align="center" mb={32}>
          Ainda não conseguimos assegurar seu veículo. Deixe seu email e
          entraremos em contato assim que pudermos protegê-lo.
        </Text>
        <Input
          type="email"
          label="Email"
          name="email"
          data-tracking="email-form-field"
          autoComplete="email"
          onChange={handleChange}
          value={values.email}
          onBlur={() => setFieldTouched("email")}
          error={touched["email"] ? errors["email"] : ""}
        />
        <Button
          mt={24}
          type="submit"
          data-tracking="email-form-submit"
          isLoading={isLoading}
          fullWidth
          disabled={!isValid || isLoading}
        >
          Continuar
        </Button>
        <AlignRight>
          <Button
            fullWidth
            variant="plainText"
            mt={24}
            onClick={() => {
              autoTracker.trackButton(`${BASE_TRACKING_NAME} Go Home`);
              handleBackToHome();
            }}
            type="button"
          >
            Ir para a Home
          </Button>
        </AlignRight>
      </form>
    </Modal>
  );
};

export default withServiceMachine(WaitingList);
