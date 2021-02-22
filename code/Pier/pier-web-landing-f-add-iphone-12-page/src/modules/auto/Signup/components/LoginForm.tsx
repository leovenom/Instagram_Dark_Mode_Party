import { useMemo } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useFormik } from "formik";
import styled from "styled-components";

import Button from "ui/Button";
import Input from "ui/Input";
import Text from "ui/Text";
import Divider from "ui/Divider";
import breakpoints from "ui/theme/breakpoints";

import config from "config";
import { autoTracker } from "helpers/mixpanelTracker";

import { validationLoginSchema } from "../utils/validations";
import { LoginFormValues } from "../utils/types";

const BASE_TRACKING_NAME = "UserSignup Login";

const Container = styled.div`
  box-sizing: border-box;
  padding: 0 24px;

  ${breakpoints.desktop} {
    padding: 0 40px;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

const InputContainer = styled.div`
  padding-top: 24px;
`;

const getInitialValues = () => ({
  email: "",
  password: "",
  provider: "internal",
});

interface Props {
  isLoading: boolean;
  handleSubmitForm: (values: LoginFormValues) => void;
}

const LoginForm = ({ handleSubmitForm, isLoading }: Props) => {
  const initialValues = useMemo(() => getInitialValues(), []);

  const {
    handleChange,
    values,
    errors,
    isValid,
    touched,
    setFieldTouched,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: validationLoginSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      autoTracker.trackButton(`${BASE_TRACKING_NAME} With Email`);

      handleSubmitForm(values);
    },
  });

  const isSubmitButtonDisabled = !isValid || isLoading;

  const handleFacebookLogin = (facebookValues) => {
    const accessToken = facebookValues.accessToken;
    handleSubmitForm({
      email: accessToken,
      password: undefined,
      provider: "facebook",
    });
  };

  return (
    <>
      <Container>
        <Text variant="subtitle" bold mb={16}>
          Entrar
        </Text>
        <Text variant="bodySmall" mb={24}>
          Acesse a área reservada aos membros da comunidade
        </Text>

        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              onChange={handleChange}
              name="email"
              value={values.email}
              label="Email"
              type="email"
              onBlur={() => setFieldTouched("email")}
              error={touched["email"] ? errors["email"] : ""}
            />
          </InputContainer>

          <InputContainer>
            <Input
              onChange={handleChange}
              name="password"
              value={values.password}
              label="Senha"
              type="password"
              onBlur={() => setFieldTouched("password")}
              error={touched["password"] ? errors["password"] : ""}
            />
          </InputContainer>

          <Button
            fullWidth
            type="submit"
            variant="primary"
            disabled={isSubmitButtonDisabled}
            mt={32}
          >
            Continuar
          </Button>
        </Form>
      </Container>

      <Divider large my={40} />

      <Container>
        <FacebookLogin
          appId={config.FACEBOOK_APP_ID}
          fields="name,email,first_name,last_name,gender"
          scope="email,public_profile,user_friends,user_gender,user_link"
          callback={handleFacebookLogin}
          cookie={false}
          render={(renderProps) => (
            <Button
              fullWidth
              type="button"
              variant="facebook"
              onClick={() => {
                autoTracker.trackButton(`${BASE_TRACKING_NAME} With Facebook`);
                renderProps.onClick();
              }}
            >
              Continuar com Facebook
            </Button>
          )}
        />
      </Container>
    </>
  );
};

export default LoginForm;
