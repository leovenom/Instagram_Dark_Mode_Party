// Code based on Mixpanel JS snippet
// https://help.mixpanel.com/hc/en-us/articles/360001337103-Last-Touch-UTM-Tags

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "pier_source",
  "pier_medium",
  "pier_campaign",
  "pier_content",
  "pier_term",
];

const getQueryParam = (url, param) => {
  // Expects a raw URL
  param = param.replace(/[[]/, "[").replace(/[]]/, "]");
  const regexS = "[?&]" + param + "=([^&#]*)",
    regex = new RegExp(regexS),
    results = regex.exec(url);
  if (results === null || (results && typeof results[1] !== "string")) {
    return "";
  } else {
    return decodeURIComponent(results[1]);
  }
};

const getLastTouchParams = () => {
  const params = {};

  UTM_KEYS.forEach((key) => {
    const kw = getQueryParam(document.URL, key);
    if (kw.length) {
      if (key.startsWith("pier_")) {
        key = "utm_" + key.split("pier_")[1];
      }
      params["last_" + key] = kw;
    }
  });

  return params;
};

const execute = (f) => {
  const mxp = window["mixpanel"];
  if (mxp) {
    f(mxp);
  }
};

const unregisterOldLastTouch = () => {
  const f = (mxp) =>
    UTM_KEYS.forEach((key) => mxp.unregister("[last touch] " + key));
  execute(f);
};

const registerLastTouch = () => {
  unregisterOldLastTouch();
  const f = (mxp) => {
    const params = getLastTouchParams();
    mxp.register(params);
  };

  execute(f);
};

export default registerLastTouch;
