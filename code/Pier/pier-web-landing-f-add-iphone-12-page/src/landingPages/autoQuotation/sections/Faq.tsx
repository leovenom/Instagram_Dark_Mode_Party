import { autoTracker } from "helpers/mixpanelTracker";
import { useState } from "react";
import styled from "styled-components";

import Divider from "ui/Divider";
import Icon from "ui/Icon";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";
import { SCREEN_NAME } from "landingPages/autoQuotation/LandingPage";

import {
  Auctioned,
  FaqModal,
  MainDriver,
  Payment,
  ThirdPartyVehicle,
} from "./components";

const Section = styled.section`
  grid-area: faq;
  padding: 72px 24px 0;

  ${breakpoints.custom(930)} {
    padding: 64px 0 0;
  }
`;

const FaqList = styled.div`
  display: grid;
`;

const FaqOption = styled.button`
  background: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  padding: 24px 0;

  :not(:last-child) {
    border-bottom: 1px solid ${colors.gray400};
  }

  ${breakpoints.custom(930)} {
    transition: background 250ms ease-in-out;

    :hover {
      background: ${colors.gray200};
    }
  }

  ${breakpoints.custom(930)} {
    transition: background 250ms ease-in-out;

    :hover {
      background: ${colors.gray200};
    }
  }
`;

const TextContainer = styled.div`
  text-align: left;
`;

enum ModalLabels {
  MAIN_DRIVER,
  THIRD_PARTY_OWNER,
  AUCTIONED_VEHICLES,
  CLAIM,
  PAYMENT,
  TERMS,
}

const FAQ_ITEMS = [
  {
    label: ModalLabels.MAIN_DRIVER,
    title: "Motorista principal",
    subtitle: "Entenda a regra de uso do carro",
    renderModalContentFn: (hideModal) => <MainDriver hide={hideModal} />,
  },
  {
    label: ModalLabels.THIRD_PARTY_OWNER,
    title: "Carro em nome de outra pessoa",
    subtitle: "Confira a lista de relação que a Pier protege",
    renderModalContentFn: (hideModal) => <ThirdPartyVehicle hide={hideModal} />,
  },
  {
    label: ModalLabels.AUCTIONED_VEHICLES,
    title: "Carros de leilão ou sinistrados",
    subtitle: "Entenda como funciona a nossa aprovação",
    renderModalContentFn: (hideModal) => <Auctioned hide={hideModal} />,
  },
  {
    label: ModalLabels.PAYMENT,
    title: "Formas de pagamento",
    subtitle: "Entenda como funciona o pagamento",
    renderModalContentFn: (hideModal) => <Payment hide={hideModal} />,
  },
  {
    label: ModalLabels.TERMS,
    title: "Termos e condições",
    subtitle: "Informações sobre o Seguro Auto Pier",
    url: "https://www.pier.digital/seguro-auto/condicoes-gerais",
  },
];

function Faq() {
  const [currentModalLabel, setModalLabel] = useState<ModalLabels | null>(null);

  function showModal(label: ModalLabels) {
    setModalLabel(label);
  }

  function hideModal() {
    setModalLabel(null);
  }

  function getActiveModalContent() {
    if (currentModalLabel === null) return null;

    return FAQ_ITEMS.filter(function (question) {
      return question.label === currentModalLabel;
    })[0].renderModalContentFn(hideModal);
  }

  function getUrl(label: ModalLabels): string {
    return FAQ_ITEMS.filter(function (question) {
      return question.label === label;
    })[0].url;
  }

  function faqOpen(label: ModalLabels, title: string) {
    autoTracker.trackButton(`${SCREEN_NAME} FAQ`, {
      question: title,
    });

    if (label === ModalLabels.TERMS) {
      window.open(getUrl(label), "_blank");
    } else {
      showModal(label);
    }
  }

  return (
    <>
      <Section>
        <FaqList>
          {FAQ_ITEMS.map(function ({ label, title, subtitle }) {
            return (
              <FaqOption key={label} onClick={() => faqOpen(label, title)}>
                <TextContainer>
                  <Text variant="bodyLarge" bold>
                    {title}
                  </Text>
                  <Text variant="bodySmall">{subtitle}</Text>
                </TextContainer>
                <Icon name="chevronRight" fill="primary" />
              </FaqOption>
            );
          })}
        </FaqList>

        <Divider large mt={[72, 72, 64]} />
      </Section>

      <FaqModal
        isVisible={currentModalLabel !== null}
        hide={hideModal}
        renderContent={getActiveModalContent}
      />
    </>
  );
}

export default Faq;
