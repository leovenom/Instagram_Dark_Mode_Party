import { useEffect } from "react";
import styled from "styled-components";
import useLocalStorage from "hooks/useLocalStorage";
import useModal from "hooks/useModal";
import * as date from "helpers/date";
import { autoTracker } from "helpers/mixpanelTracker";

import Modal from "ui/Modal";
import Text from "ui/Text";
import Button from "ui/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 320px;
  }
`;

const BASE_TRACKING_NAME = "Quote";
const WAITING_LIST_IMAGE_PATH = "/static_assets/images/price-updated.svg";

interface PriceUpdatedModalProps {
  createdAt: string | undefined;
  priceUpdatedAt: string | undefined;
}

function PriceUpdatedModal({
  createdAt,
  priceUpdatedAt,
}: PriceUpdatedModalProps) {
  const { isOpen, toggle } = useModal();

  const [
    priceUpdatedModalAlreadyDisplayed,
    setPriceUpdatedModalAlreadyDisplayed,
  ] = useLocalStorage("priceUpdatedModalAlreadyDisplayed", false);

  useEffect(() => {
    const dateFormatter = "YYYY/MM/DD";
    const formattedCreatedAt = date.format(createdAt, dateFormatter);
    const formattedPriceUpdatedAt = date.format(priceUpdatedAt, dateFormatter);

    const quotePriceWasUpdated = date
      .getDate(formattedPriceUpdatedAt)
      .isAfter(formattedCreatedAt);

    if (quotePriceWasUpdated) {
      autoTracker.trackModal(`${BASE_TRACKING_NAME} PriceUpdatedModal`);
      toggle();
    }
  }, []);

  const toggleAndDissalow = () => {
    setPriceUpdatedModalAlreadyDisplayed(true);
    toggle();
  };

  const shouldOpenModal = !priceUpdatedModalAlreadyDisplayed && isOpen;

  return (
    <Modal
      isOpen={shouldOpenModal}
      hide={toggleAndDissalow}
      contentLabel="Enviar por email"
    >
      <Container>
        <div>
          <img src={WAITING_LIST_IMAGE_PATH} alt="envelope verde" />
        </div>
        <Text variant="bodySmall" bold mb={8} align="center">
          O preço dessa cotação atualizou
        </Text>
        <Text variant="bodySmallest" align="center">
          Atualizamos o preço para garantir uma maior segurança para a nossa
          comunidade
        </Text>

        <Button
          fullWidth
          variant="plainText"
          onClick={toggleAndDissalow}
          type="button"
        >
          Ok, Entendi
        </Button>
      </Container>
    </Modal>
  );
}

export default PriceUpdatedModal;
