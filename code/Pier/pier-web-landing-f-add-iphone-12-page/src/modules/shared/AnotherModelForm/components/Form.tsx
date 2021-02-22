import React from "react";

import ImageResponsive from "ui/ImageResponsive";
import Text from "ui/Text";
import Input from "ui/Input";
import Button from "ui/Button";
import { InputContainer } from "../styles";
import spacings from "ui/theme/spacings";

const Form = ({
  handleSubmit,
  values,
  touched,
  errors,
  isLoading,
  isValid,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <ImageResponsive
        src="/static_assets/images/rebranding/person-inside-phone.svg"
        alt="Pessoa acenando dentro de um celular"
      />

      <Text mt={spacings.TERA} mb={spacings.MEGA} variant="bodySmall">
        Estamos sempre adicionando modelos em nossa cobertura. Deixe seu e-mail
        e te avisamos assim que tivermos novidades!
      </Text>

      <form
        data-testid="form-component"
        translate="yes"
        onSubmit={handleSubmit}
      >
        <InputContainer>
          <Input
            name="fullName"
            type="text"
            label="Nome completo"
            placeholder="Carlos Toledo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
            error={touched.fullName && errors.fullName}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="meu@email.com"
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
            label="Fabricante"
            placeholder="Motorola"
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
            label="Modelo"
            placeholder="G8"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.model}
            error={touched.model && errors.model}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="memory"
            type="text"
            label="Memória"
            placeholder="64GB"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.memory}
            error={touched.memory && errors.memory}
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
          Enviar
        </Button>
      </form>
    </>
  );
};

export default Form;
