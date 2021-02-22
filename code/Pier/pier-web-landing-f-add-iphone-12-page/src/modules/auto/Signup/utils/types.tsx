export interface SignupFormValues {
  name?: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  cpf: string;
  facebookAccessToken?: string;
}

export interface FacebookSignupValues {
  name?: string;
  email: string;
  facebookAccessToken?: string;
}

export interface LoginFormValues {
  provider: string;
  email: string;
  password: string;
}
