import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

import { generalTracker } from "helpers/mixpanelTracker";
import config, { isProd } from "config";

function setupLogRocket() {
  if (typeof window !== "undefined" && isProd) {
    LogRocket.init(config.LOGROCKET_ID);
    // plugins should also only be initialized when in the browser
    setupLogRocketReact(LogRocket);

    LogRocket.getSessionURL(function (sessionURL) {
      generalTracker.track("LogRocket", { sessionURL: sessionURL });
    });
  }
}

export default setupLogRocket;
