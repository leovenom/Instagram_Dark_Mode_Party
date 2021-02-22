import * as React from "react";

import Modal from "ui/Modal";
import Text from "ui/Text";

interface Props {
  isOpen: boolean;
  hide: () => void;
}

const AnotherModelSuccessSubmitionModal: React.FC<Props> = ({
  isOpen,
  hide,
}) => {
  return (
    <Modal
      title="Interesse: Cobertura para novos dispositivos"
      isOpen={isOpen}
      hide={hide}
      contentLabel="Exemplo de Modal básico que preenche toda a tela"
    >
      <Text variant="sectionSecondary" bold>
        Obrigado!
      </Text>
      <Text variant="bodyLarge">
        Ficamos felizes pelo seu interesse em participar de nossa comunidade.
      </Text>
      <Text variant="bodyLarge">
        Agora é só aguardar que em breve teremos mais informações ;)
      </Text>
    </Modal>
  );
};

export default AnotherModelSuccessSubmitionModal;
