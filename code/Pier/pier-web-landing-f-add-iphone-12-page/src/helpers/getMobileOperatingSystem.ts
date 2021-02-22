import isRunningOnClient from "./isRunningOnClient";

type mobileOSTypes = "android" | "ios" | null;

const getMobileOperatingSystem = (): mobileOSTypes => {
  if (!isRunningOnClient()) return null;

  const userAgent = navigator.userAgent || navigator.vendor || window["opera"];
  if (/android/i.test(userAgent)) {
    return "android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  }
  return null;
};

export default getMobileOperatingSystem;
