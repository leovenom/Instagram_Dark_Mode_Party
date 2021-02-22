import styled from "styled-components";

import UnorderedList from "ui/UnorderedList";
import Modal from "ui/Modal";
import Text from "ui/Text";
import Button from "ui/Button";

const ModalContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ModalContent = ({ hide }) => (
  <ModalContentContainer>
    <div>
      <Text variant="body" mb={16}>
        9 a cada 10 pessoas permanecem com os mesmos valores de mensalidade e
        reembolso após a aprovação da vistoria.
      </Text>
      <Text variant="body" mb={24}>
        Isso pode variar mais nos casos de:
      </Text>

      <UnorderedList>
        <li>Carros comprados de leilão e/ou sinistrados.</li>
        <li>Carros com avarias ou mal conservados.</li>
        <li>Alteração na avaliação de risco do perfil.</li>
      </UnorderedList>
    </div>

    <Button variant="outline" size="small" mt={40} onClick={hide}>
      Ok, entendi
    </Button>
  </ModalContentContainer>
);

const PricingVariationModal = ({ isVisible, hide }) => (
  <>
    <Modal
      isOpen={isVisible}
      hide={hide}
      contentLabel="Valores da cotação"
      title="Valores da cotação"
      mobileFixedOnBotttom
    >
      <ModalContent hide={hide} />
    </Modal>
  </>
);

export default PricingVariationModal;
