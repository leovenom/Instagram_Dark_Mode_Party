import * as React from "react";
import { useRouter } from "next/router";

import Button from "ui/Button";
import { autoTracker } from "helpers/mixpanelTracker";
import getMobileOperatingSystem from "helpers/getMobileOperatingSystem";

const PIER_APP_STORE_URL_AUTO = "https://app.adjust.com/crh66m0";

interface Props {
  page: string;
  children: React.ReactNode;
}

function DownloadAppButton({ page, children }: Props) {
  const router = useRouter();

  function goToDownloadAppScreen() {
    router.push("/baixe-o-app");
  }

  function downloadApp() {
    autoTracker.trackButton(`${page} Download App`);

    const deviceOS = getMobileOperatingSystem();

    switch (deviceOS) {
      case "ios":
      case "android":
        try {
          window.location.href = PIER_APP_STORE_URL_AUTO;
        } catch {
          goToDownloadAppScreen();
        }
        return null;
      default:
        return goToDownloadAppScreen();
    }
  }

  return (
    <Button variant="secondary" fullWidth onClick={downloadApp}>
      {children}
    </Button>
  );
}

export default DownloadAppButton;
