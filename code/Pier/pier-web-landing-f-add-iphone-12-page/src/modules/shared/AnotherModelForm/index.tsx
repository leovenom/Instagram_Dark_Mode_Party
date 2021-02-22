import { useState } from "react";
import { useFormik } from "formik";

import { useToast } from "ui/Toast";
import { Form } from "./components";
import Success from "./components/Success";

import { validationSchema, submitToWaitingList } from "./utils";
import { withModalManagementActions } from "../ModalManagement";
import Icon from "ui/Icon";

import { CloseButton, Container, TitleText } from "./styles";

const AnotherModelForm = ({
  closeModal,
  model = "",
  manufacturer = "",
}: {
  closeModal: () => void;
  model?: string;
  manufacturer?: string;
}) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [sentWithSuccess, setSentWithSuccess] = useState(false);
  const currentTitle = sentWithSuccess
    ? "Tudo certo!"
    : "Não encontrou o seu modelo?";

  const handleSubmitForm = async (values) => {
    setIsLoading(true);
    const { fullName, ...extractValues } = values;
    try {
      await submitToWaitingList({ full_name: fullName, ...extractValues });
      setSentWithSuccess(true);
    } catch {
      toast.error(
        "Oops!! Algo deu errado! 😢 Tente novamente ou entre em contato com o suporte."
      );
      setSentWithSuccess(false);
      setIsLoading(false);
    }
  };

  const formikProps = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      manufacturer: manufacturer ?? "",
      model: model ?? "",
      memory: "",
      kind: "android_prospect",
    },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: handleSubmitForm,
  });

  return (
    <Container data-testid="another-model-form-modal">
      <CloseButton onClick={closeModal}>
        <Icon name="close" fill="primary" stroke={12} size={18} />
      </CloseButton>
      <TitleText> {currentTitle}</TitleText>

      {sentWithSuccess ? (
        <Success />
      ) : (
        <Form isLoading={isLoading} {...formikProps} />
      )}
    </Container>
  );
};

export default withModalManagementActions(AnotherModelForm);
