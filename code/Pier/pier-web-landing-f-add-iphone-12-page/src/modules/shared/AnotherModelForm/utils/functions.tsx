import config from "config";
import jsonToQueryString from "helpers/jsonToQueryString";

const submitToWaitingList = (values) =>
  fetch(`${config.PIER_SITE_URL}/faqs${jsonToQueryString(values)}`, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  }).then((data) => {
    if (data.ok) {
      return data;
    }
    throw data.status;
  });

export { submitToWaitingList };
