import { URL, DEFAULT_HEADERS } from "./auto/constants";

export async function fetchApi(path, options) {
  return await fetch(URL.concat(path), {
    headers: {
      ...DEFAULT_HEADERS,
    },
    ...options,
  }).then((response) =>
    response.json().then((body) => {
      if (response.status >= 200 && response.status <= 299) {
        return body;
      }

      if (response.status >= 400) {
        throw body;
      }
    })
  );
}
