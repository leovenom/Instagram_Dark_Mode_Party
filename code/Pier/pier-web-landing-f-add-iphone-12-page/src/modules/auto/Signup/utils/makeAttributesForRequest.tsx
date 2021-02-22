interface Attributes {
  email: string;
  password: string;
  passwordConfirmation: string;
  cpf: string;
  accessToken: string;
}

interface LoginAttributes {
  provider: string;
  email: string;
  password: string;
}

export const makeAttributesRequest = (signupType: string, data: Attributes) => {
  if (signupType === "facebook") {
    return {
      provider: "facebook",
      access_token: `${data.accessToken}`,
      profile_attributes: {
        cpf: `${data.cpf}`,
      },
    };
  }
  return {
    provider: "internal",
    access_token: `${data.email}`,
    email: `${data.email}`,
    password: `${data.password}`,
    password_confirmation: `${data.passwordConfirmation}`,
    profile_attributes: {
      cpf: `${data.cpf}`,
    },
  };
};

export const makeAttributesLoginRequest = (data: LoginAttributes) => {
  return {
    provider: `${data.provider}`,
    access_token: `${data.email}`,
    password: `${data.password}`,
  };
};
