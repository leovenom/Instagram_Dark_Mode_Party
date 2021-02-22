import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import * as typeformEmbed from "@typeform/embed";

import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";
import { autoTracker } from "helpers/mixpanelTracker";

import DownloadAppButton from "../components/DownloadAppButton";

const Content = styled.div`
  margin-top: 80px;
  box-sizing: border-box;
  padding: 40px 24px 80px;

  ${breakpoints.desktop} {
    max-width: 1220px;
    margin: 80px auto 0;
  }
`;

const Steps = styled.div`
  display: grid;
  row-gap: 32px;
  margin-bottom: 32px;
`;

const ButtonContainer = styled.div`
  ${breakpoints.desktop} {
    max-width: 452px;
    margin: 0 auto;
  }
`;

const BASE_TRACKING_NAME = "Inspect Later";
const PIER_TYPEFORM_BASE_URL = "https://pierdigital.typeform.com/to/";
const TYPEFORM_ID = "r5jmYarb";
const TYPEFORM_URL = `${PIER_TYPEFORM_BASE_URL}${TYPEFORM_ID}`;
const TYPEFORM_DEFAULT_OPTIONS = {
  hideFooter: true,
  hideHeaders: true,
  opacity: 0,
};

function InspectLater() {
  const typeformRef = useRef(null);
  const [isDeviceTouchable, setIsDeviceTouchable] = useState<boolean>(false);

  function deviceUsesTouch() {
    const deviceSupportsTouchInput = "ontouchstart" in document.documentElement;
    setIsDeviceTouchable(deviceSupportsTouchInput);

    return deviceSupportsTouchInput;
  }

  function renderTypeformAsPopup() {
    typeformEmbed.makePopup(TYPEFORM_URL, {
      ...TYPEFORM_DEFAULT_OPTIONS,
      mode: "popup",
      open: "load",
    });
  }

  function renderTypeformAsWidget() {
    typeformEmbed.makeWidget(
      typeformRef.current,
      TYPEFORM_URL,
      TYPEFORM_DEFAULT_OPTIONS
    );
  }

  useEffect(() => {
    deviceUsesTouch() ? renderTypeformAsPopup() : renderTypeformAsWidget();
  }, [typeformRef]);

  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  return (
    <Content>
      <Text variant="section" align="center">
        Responda
        <br /> e Baixe o App
      </Text>

      {!isDeviceTouchable && (
        <>
          <Steps>
            <div ref={typeformRef} style={{ height: "666px", width: "100%" }} />
          </Steps>

          <Text variant="bodySmall" bold align="center" color="gray600" mb={24}>
            ou
          </Text>
        </>
      )}

      <ButtonContainer>
        <Text variant="body" mb={24} align="center">
          Se quiser continuar baixe o App!
        </Text>

        <DownloadAppButton page={BASE_TRACKING_NAME}>
          Baixe o App
        </DownloadAppButton>
      </ButtonContainer>
    </Content>
  );
}

export default InspectLater;
