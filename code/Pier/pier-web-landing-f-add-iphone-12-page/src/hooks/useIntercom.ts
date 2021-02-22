import isRunningOnClient from "helpers/isRunningOnClient";
import { useEffect } from "react";
import config from "config";

function useIntercom() {
  useEffect(() => {
    if (isRunningOnClient) {
      window["Intercom"]("boot", {
        app_id: config.INTERCOM_APP_ID,
        hide_default_launcher: true,
      });
    }
  }, []);

  const showIntercom = () => {
    if (isRunningOnClient) {
      window["Intercom"]("show");
    }
  };

  return showIntercom;
}

export default useIntercom;
