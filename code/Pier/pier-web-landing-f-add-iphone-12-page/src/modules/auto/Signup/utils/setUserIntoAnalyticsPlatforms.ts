import { sha256 } from "js-sha256";

import MixpanelUtils from "helpers/mixpanelUtils";
import config from "config";

function setUserIntoMixpanel(signupResponse: any, email: string) {
  const rollbar = window["Rollbar"];
  const mxp = window["mixpanel"];

  if (mxp) {
    const userId = signupResponse?.data?.id;
    const emailIdentified = mxp.get_property("email");

    if (emailIdentified && emailIdentified !== email) {
      mxp.reset();
    }

    if (userId) {
      const firstName = signupResponse?.data?.attributes["first-name"];
      const lastName = signupResponse?.data?.attributes["last-name"];

      MixpanelUtils.createUser(userId, `${firstName} ${lastName}`, email);
    }
  } else {
    if (rollbar) {
      rollbar.error(`Mixpanel undefined for user ${sha256(email)} on sign up.`);
    }
  }
}

function setUserIntoGA(userId: string) {
  const rollbar = window["Rollbar"];
  const ga = window["ga"];

  if (ga) {
    const gaTracker = config.GOOGLE_ANALYTICS_TRACKER;
    const d = new Date();
    d.setDate(d.getDate() + 365);

    ga(`${gaTracker}.set`, "userId", userId);
    document.cookie = `user_id=${userId};expires=${d.toUTCString()};path=/;`;
  } else {
    if (rollbar) {
      rollbar.error(`GA undefined for user on sign up.`);
    }
  }
}

export { setUserIntoMixpanel, setUserIntoGA };
