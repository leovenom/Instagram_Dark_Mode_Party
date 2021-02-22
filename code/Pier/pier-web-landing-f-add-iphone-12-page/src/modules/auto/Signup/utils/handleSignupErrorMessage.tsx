interface RequestError {
  error: any;
  status: number;
}

const CREDENTIALS_ALREADY_EXISTS_MESSAGE =
  "Já existe uma conta criada com este email/CPF";
export const INTERNAL_SERVER_ERROR_MESSAGE = "Não foi possível criar sua conta";

const handleSignupErrorMessage = (error: RequestError) =>
  error.status === 422
    ? CREDENTIALS_ALREADY_EXISTS_MESSAGE
    : INTERNAL_SERVER_ERROR_MESSAGE;

export default handleSignupErrorMessage;
