import { useState, useEffect } from "react";
import * as React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import ImageResponsive from "ui/ImageResponsive";

import config from "config";
import Modal from "ui/Modal";
import Text from "ui/Text";
import Input from "ui/Input";
import Button from "ui/Button";
import { useToast } from "ui/Toast";
import { smartphoneTracker } from "helpers/mixpanelTracker";

import breakpoints from "ui/theme/breakpoints";
import jsonToQueryString from "helpers/jsonToQueryString";

import data from "../data";
import spacings from "ui/theme/spacings";

const StyledModal = styled(Modal)`
  section {
    box-sizing: border-box;
    overflow-y: auto;
    form {
      margin-top: 24px;
    }
  }
  ${breakpoints.tablet} {
    max-width: 700px;
    margin: 10px auto;
  }
`;

const InputContainer = styled.div`
  padding-top: 24px;
`;

interface Props {
  isOpen: boolean;
  hide: () => void;
  model: { manufacturer: string; model: string };
  toggleFakeDoorSuccessSubmitionModal: () => void;
}

const FakeDoorModal: React.FC<Props> = ({
  isOpen,
  hide,
  model: { manufacturer, model } = {},
  toggleFakeDoorSuccessSubmitionModal,
}) => {
  const initialFormData = {
    manufacturer,
    model,
    email: "",
    phone: "",
  };

  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async (values: typeof initialFormData) => {
    setIsLoading(true);

    smartphoneTracker.trackButton(data.fakeDoor.form.tracking.buttonCliked, {
      brand: values.manufacturer,
      model: values.model,
      whatsapp_check: !!values.phone,
    });

    try {
      const result = await fetch(
        `${config.PIER_SITE_URL}/faqs${jsonToQueryString(
          values
        )}&kind=fakedoor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      );

      if (result.status !== 200) throw new Error();

      hide();
      toggleFakeDoorSuccessSubmitionModal();
    } catch {
      toast.error(data.fakeDoor.form.error);
    } finally {
      setIsLoading(false);
    }
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    enableReinitialize: true,
    initialValues: initialFormData,
    validationSchema: data.fakeDoor.form.schema,
    validateOnMount: true,
    isInitialValid: false,
    onSubmit: onFormSubmit,
  });

  useEffect(() => {
    if (isOpen)
      smartphoneTracker.trackModal(data.fakeDoor.form.tracking.screenViewed);
  }, [data, isOpen]);

  return (
    <StyledModal
      mobileFullScreen
      title={data.fakeDoor.form.title}
      isOpen={isOpen}
      hide={hide}
      contentLabel={data.fakeDoor.form.contentLabel}
    >
      <section>
        <ImageResponsive
          src={data.fakeDoor.form.image.src}
          alt={data.fakeDoor.form.image.alt}
        />

        <Text mt={spacings.TERA} mb={spacings.MEGA} variant="bodySmall">
          {data.fakeDoor.form.description}
        </Text>

        <form translate="yes" onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              name="email"
              type="text"
              label={data.fakeDoor.form.inputs.email.label}
              placeholder={data.fakeDoor.form.inputs.email.placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
            />
          </InputContainer>
          <InputContainer>
            <Input
              name="manufacturer"
              type="text"
              label={data.fakeDoor.form.inputs.manufacturer.label}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.manufacturer}
              error={touched.manufacturer && errors.manufacturer}
            />
          </InputContainer>
          <InputContainer>
            <Input
              name="model"
              type="text"
              label={data.fakeDoor.form.inputs.model.label}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.model}
              error={touched.model && errors.model}
            />
          </InputContainer>
          <InputContainer>
            <Input
              name="phone"
              type="text"
              label={data.fakeDoor.form.inputs.phone.label}
              placeholder={data.fakeDoor.form.inputs.phone.placeholder}
              onChange={handleChange}
              value={values.phone}
              mask="phoneNumber"
              required={false}
              helpField={data.fakeDoor.form.inputs.phone.disclaimer}
              maskPlaceholder="_"
            />
          </InputContainer>
          <Button
            mt={spacings.GIGA}
            fullWidth
            type="submit"
            disabled={isLoading || !isValid}
            isLoading={isLoading}
            variant="secondary"
          >
            {data.fakeDoor.form.submit}
          </Button>
        </form>
      </section>
    </StyledModal>
  );
};

export default FakeDoorModal;
