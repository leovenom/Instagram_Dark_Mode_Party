import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import AutoLandingLayout from "layouts/AutoLandingLayout";
import styled from "styled-components";
import Text from "ui/Text";
import CustomizedIcon from "ui/Icon/CustomizedIcon";
import breakpoints from "ui/theme/breakpoints";
import { autoTracker, smartphoneTracker } from "helpers/mixpanelTracker";
import useLocalStorage from "hooks/useLocalStorage";
import { HEADER_HEIGHT } from "ui/Header/styles";
import getMobileOperatingSystem from "helpers/getMobileOperatingSystem";

const Button = dynamic(() => import("ui/Button"), { ssr: false });

const PIER_APP_STORE_URL_SMARTPHONE = "https://app.adjust.com/38h12w0";
const PIER_APP_STORE_URL_AUTO = "https://app.adjust.com/crh66m0";
const PIER_APP_STORE_URL_DEFAULT = "https://app.adjust.com/mapwid6";
const PIER_APP_STORE_URL_ORIGINAL =
  "https://apps.apple.com/br/app/pier/id1347337212";
const PIER_PLAY_STORY_URL_ORIGINAL =
  "https://play.google.com/store/apps/details?id=digital.pier";
const PIER_LOGO_IMG_PATH =
  "/static_assets/images/rebranding/pier-square-logo.svg";

const BASE_TRACKING_NAME = "BaixeOApp";

const ColoredBackground = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.yellow400};

  ${breakpoints.desktop} {
    height: calc(100% - ${HEADER_HEIGHT + 48}px);
    width: calc(100% - 48px);
    margin: ${HEADER_HEIGHT + 24}px 24px 24px;
  }
`;

const Container = styled.div`
  overflow: auto;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${breakpoints.tablet} {
    align-items: center;
    max-width: 700px;
    margin-top: 112px;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  height: 80px;
`;

const GroupButtons = styled.div`
  width: 100%;
  display: flex;
  div {
    :first-child {
      margin-right: 24px;
    }
    position: relative;
    flex-basis: 100%;
    ${breakpoints.tablet} {
      a {
        height: 60px;
      }
    }
  }
`;

const ButtonsContainer = styled.div`
  box-sizing: border-box;
  width: calc(100% -48px);
  background: ${({ theme }) => theme.colors.white};
  z-index: -1;
  padding: 40px 24px;
  ${breakpoints.tablet} {
    width: 100%;
    padding: 0px 24px;
    background: unset;
  }
`;

const isProductAuto = (product) => product === "auto";

const trackDownloadingBadges = (product, badgeName) => {
  const tracker = isProductAuto(product) ? autoTracker : smartphoneTracker;
  tracker.trackButton(`${BASE_TRACKING_NAME} ${badgeName}`);
};

const AppStoreButton = (product, url) => {
  return (
    <Button
      fullWidth
      variant="black"
      asLink
      href={url}
      onClick={() => trackDownloadingBadges(product, "AppStore")}
    >
      <CustomizedIcon name="downloadAppStore" />
    </Button>
  );
};

const PlayStoreButton = (product, url) => {
  return (
    <Button
      fullWidth
      variant="black"
      asLink
      href={url}
      onClick={() => trackDownloadingBadges(product, "PlayStore")}
    >
      <CustomizedIcon name="downloadPlayStore" />
    </Button>
  );
};

const onRenderDownloadAppButtons = (deviceOs, product) => {
  const getStoreURL = (product) => {
    if (!product) return PIER_APP_STORE_URL_DEFAULT;
    return product === "auto"
      ? PIER_APP_STORE_URL_AUTO
      : PIER_APP_STORE_URL_SMARTPHONE;
  };

  const storeURL = getStoreURL(product);
  const appStoreOriginalUrl = PIER_APP_STORE_URL_ORIGINAL;
  const playStoreOriginalUrl = PIER_PLAY_STORY_URL_ORIGINAL;

  const appStoreButton = AppStoreButton(product, storeURL);
  const playStoreButton = PlayStoreButton(product, storeURL);
  const appStoreOriginalUrlButton = AppStoreButton(
    product,
    appStoreOriginalUrl
  );
  const playStoreOriginalUrlButton = PlayStoreButton(
    product,
    playStoreOriginalUrl
  );

  const buttonVariants = {
    ios: appStoreButton,
    android: playStoreButton,
    noOsDefined: (
      <GroupButtons>
        <div>{appStoreOriginalUrlButton}</div>
        <div>{playStoreOriginalUrlButton}</div>
      </GroupButtons>
    ),
  };

  return buttonVariants[deviceOs] || buttonVariants.noOsDefined;
};

const DownloadTheApp = () => {
  const router = useRouter();
  const { product } = router.query;
  const deviceOs = getMobileOperatingSystem();
  const [autoQuotation, setAutoQuotation] = useLocalStorage(
    "autoQuotation",
    null
  );

  useEffect(() => {
    window["ReactNativeWebView"]?.postMessage("just_signed_up");
    setAutoQuotation(null);
  }, []);

  useEffect(() => {
    const product = router.query.product;
    if (isProductAuto(product)) autoTracker.trackScreen(BASE_TRACKING_NAME);
    else smartphoneTracker.trackScreen(BASE_TRACKING_NAME);
  }, [router.query.product]);

  return (
    <AutoLandingLayout
      pageTitle="Baixe o app - Pier"
      canonicalLink="https://www.pier.digital/baixe-o-app"
      allowTransparentHeader
      noFooter
    >
      <ColoredBackground>
        <Container>
          <ImageContainer>
            <Img src={PIER_LOGO_IMG_PATH} alt="Logo da Pier" />
            <div>
              <Text variant="section" mb={16} align="center">
                Instale o App Pier
              </Text>
              <Text variant="bodySmall" mb={[24, 60, 60]} align="center">
                Instale o app para continuar sua contratação
              </Text>
            </div>
          </ImageContainer>

          <ButtonsContainer>
            {onRenderDownloadAppButtons(deviceOs, product)}
          </ButtonsContainer>
        </Container>
      </ColoredBackground>
    </AutoLandingLayout>
  );
};

export default DownloadTheApp;
