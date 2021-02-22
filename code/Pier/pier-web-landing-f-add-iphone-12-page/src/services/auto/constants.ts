import config from "config";

export const URL = `${config.PIER_API_URL}`;
export const DEFAULT_HEADERS = {
  accept: "application/json, text/plain, */*",
  "content-type": "application/json;charset=utf-8",
  platform: "Web",
};
