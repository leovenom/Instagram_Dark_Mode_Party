import dynamic from "next/dynamic";
import styled from "styled-components";

import CustomizedIcon from "ui/Icon/CustomizedIcon";

import { autoTracker } from "helpers/mixpanelTracker";
import getMobileOperatingSystem from "helpers/getMobileOperatingSystem";

const Button = dynamic(() => import("ui/Button"), { ssr: false });

const GroupButtons = styled.div`
  width: 100%;
  margin-bottom: 40px;
  div {
    position: relative;
    flex-basis: 100%;
  }
  div:first-child {
    margin-bottom: 16px;
  }
`;

const PIER_APP_STORE_URL_AUTO = "https://app.adjust.com/crh66m0";

function trackDownloadingBadges(badgeName: string, pageSource: string): void {
  autoTracker.trackButton(`${pageSource} ${badgeName}`);
}

function AppStoreButton(url: string, pageSource: string): JSX.Element {
  return (
    <Button
      fullWidth
      variant="primary"
      asLink
      href={url}
      onClick={() => trackDownloadingBadges("AppStore", pageSource)}
    >
      <CustomizedIcon name="downloadAppStore" />
    </Button>
  );
}

function PlayStoreButton(url: string, pageSource: string): JSX.Element {
  return (
    <Button
      fullWidth
      variant="primary"
      asLink
      href={url}
      onClick={() => trackDownloadingBadges("PlayStore", pageSource)}
    >
      <CustomizedIcon name="downloadPlayStore" />
    </Button>
  );
}

interface Props {
  pageSource: string;
}

function AppStoreButtons({ pageSource }: Props) {
  const appStoreButton = AppStoreButton(PIER_APP_STORE_URL_AUTO, pageSource);
  const playStoreButton = PlayStoreButton(PIER_APP_STORE_URL_AUTO, pageSource);
  const deviceOs = getMobileOperatingSystem();

  const buttonVariants = {
    ios: appStoreButton,
    android: playStoreButton,
    noOsDefined: (
      <GroupButtons>
        <div>{appStoreButton}</div>
        <div>{playStoreButton}</div>
      </GroupButtons>
    ),
  };

  return buttonVariants[deviceOs] || buttonVariants.noOsDefined;
}

export default AppStoreButtons;
