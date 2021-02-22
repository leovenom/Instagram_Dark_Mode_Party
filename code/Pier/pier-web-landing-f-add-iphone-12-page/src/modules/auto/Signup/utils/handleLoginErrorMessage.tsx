interface RequestError {
  error: any;
  status: number;
}

const NOT_FOUND_ERROR_MESSAGE = "Usuário não encontrado";
export const INTERNAL_SERVER_ERROR_MESSAGE = "Credenciais incorretas";
export const DIFFERENT_CPFS_ERROR_MESSAGE =
  "Cpf do usuário não corresponde ao cpf inserido na cotação";

const handleSignupErrorMessage = (error: RequestError) =>
  error.status === 404
    ? NOT_FOUND_ERROR_MESSAGE
    : INTERNAL_SERVER_ERROR_MESSAGE;

export default handleSignupErrorMessage;
