import { URL, DEFAULT_HEADERS } from "./constants";

interface Attributes {
  provider: string;
  access_token: string;
  profile_attributes: {
    cpf: string;
  };
  email?: string | undefined;
  password?: string | undefined;
  password_confirmation?: string | undefined;
}

const signUp = (attributes: Attributes) => ({
  url: `${URL}/signup`,
  options: {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=utf-8",
      ...DEFAULT_HEADERS,
    },
    body: JSON.stringify({
      data: {
        type: "sessions",
        attributes,
      },
    }),
  },
});

export default signUp;
