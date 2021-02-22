import { URL, DEFAULT_HEADERS } from "./constants";

interface Attributes {
  email?: string | undefined;
  password?: string | undefined;
}

const login = (attributes: Attributes) => ({
  url: `${URL}/login`,
  options: {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=utf-8",
      ...DEFAULT_HEADERS,
    },
    body: JSON.stringify({
      data: {
        type: "session",
        attributes,
      },
    }),
  },
});

export default login;
