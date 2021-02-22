import { useState } from "react";
import styled, { css } from "styled-components";

import config from "config";
import { autoTracker } from "helpers/mixpanelTracker";
import getFormattedVehicleInfo from "helpers/getFormattedVehicleInfo";
import useModal from "hooks/useModal";
import { Quote } from "modules/auto/QuotationFlow/utils/types";
import BottomFloatingContainer from "ui/BottomFloatingContainer";
import Divider from "ui/Divider";
import Icon from "ui/Icon";
import icons from "ui/Icon/icons";
import Modal from "ui/Modal";
import breakpoints from "ui/theme/breakpoints";
import Text from "ui/Text";
import { useToast } from "ui/Toast";
import SendEmailModal from "./SendEmailModal";

const BackgroundOverlay = styled.div<{ isVisible: boolean }>`
  background-color: ${({ theme }) => theme.colors.darkGray};
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;

  transition: z-index 250ms ease, opacity 250ms ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      z-index: 2;
      opacity: 0.95;
      height: 100vh;
      width: 100vw;
    `}
`;

const ShareOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 8px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled(Text)`
  margin: 16px 0 24px;
`;

const ExpandedText = styled(Text)<{ text: string }>`
  flex-grow: 2;
  padding-left: 16px;

  ${({ text, theme }) =>
    /copiado/i.test(text) &&
    `
    color: ${theme.colors.darkGreen};
  `}
`;

const EmptyBlock = styled.div`
  height: 88px;

  ${breakpoints.desktop} {
    height: 48px;
  }
`;

const BASE_TRACKING_NAME = "Share";

interface ShareOptionProps {
  text: string;
  icon: keyof typeof icons;
  triggerFn: () => void;
}

function ShareOption({ text, icon, triggerFn }: ShareOptionProps) {
  return (
    <>
      <ShareOptionContainer onClick={triggerFn}>
        <Icon name={icon} fill="primary" size={20} />
        <ExpandedText variant="bodySmallest" text={text}>
          {text}
        </ExpandedText>
        <Icon name="shortArrowRight" fill="gray" size={14} />
      </ShareOptionContainer>
      <Divider />
    </>
  );
}

interface Props {
  quote?: Quote;
  isVisible: boolean;
  hide: () => void;
}

function ShareQuotation({ quote, isVisible, hide }: Props) {
  const toast = useToast();
  const link = `${config.PIER_SITE_URL}/seguro-auto/cotacao/valores/${quote?.quoteId}`;

  const {
    isOpen: isSendEmailModalOpen,
    toggle: toggleSendEmailModal,
  } = useModal();
  const [copyText, setCopyText] = useState<string>("Copiar link");

  function resetCopyTextAndHide() {
    setCopyText("Copiar Link");
    hide();
  }

  function openEmailModal() {
    toggleSendEmailModal();
    resetCopyTextAndHide();

    autoTracker.trackLink(`${BASE_TRACKING_NAME} Via Email`, {
      quoteId: quote?.quoteId,
    });
  }

  function sendQuoteViaWhatsapp() {
    const wppApiURL = "https://api.whatsapp.com/send?text=";
    const vehicle = getFormattedVehicleInfo(quote?.model.value.attributes);

    window.open(
      `${wppApiURL}Cotação do seguro auto Pier para o meu ${vehicle}: ${link}`,
      "_blank"
    );

    autoTracker.trackLink(`${BASE_TRACKING_NAME} Via WhatsApp`, {
      quoteId: quote?.quoteId,
    });
  }

  function copyLink() {
    try {
      navigator.clipboard.writeText(link);

      setCopyText("Link copiado ✓");
      autoTracker.trackLink(`${BASE_TRACKING_NAME} Via Link Copied`, {
        quoteId: quote?.quoteId,
      });
    } catch {
      toast.error(
        "Seu browser não suporta essa operação, por favor, copie o link manualmente."
      );
    }
  }

  function renderShareContent() {
    return (
      <>
        <HeaderContainer>
          <Header variant="bodySmall" bold>
            Compartilhar
          </Header>
          <Icon
            name="close"
            fill="text"
            stroke={12}
            size={14}
            onClick={resetCopyTextAndHide}
          />
        </HeaderContainer>

        <Divider />

        <ShareOption
          text="Enviar por email"
          icon="mail"
          triggerFn={openEmailModal}
        />
        <ShareOption
          text="WhatsApp"
          icon="whatsapp"
          triggerFn={sendQuoteViaWhatsapp}
        />
        <ShareOption text={copyText} icon="link" triggerFn={copyLink} />

        <EmptyBlock />
      </>
    );
  }

  return (
    <>
      <BackgroundOverlay onClick={resetCopyTextAndHide} isVisible={isVisible} />

      <BottomFloatingContainer show={isVisible} rounded share excludeDesktop>
        {renderShareContent()}
      </BottomFloatingContainer>

      <Modal
        isOpen={isVisible}
        hide={hide}
        contentLabel="Compartilhar cotação"
        hideOnMobile
      >
        {renderShareContent()}
      </Modal>

      <SendEmailModal
        quote={quote}
        isOpen={isSendEmailModalOpen}
        toggle={toggleSendEmailModal}
      />
    </>
  );
}

export default ShareQuotation;
