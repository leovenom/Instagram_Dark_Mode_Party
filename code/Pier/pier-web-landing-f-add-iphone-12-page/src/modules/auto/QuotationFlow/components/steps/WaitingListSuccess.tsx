import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Modal from "ui/Modal";
import Text from "ui/Text";
import Button from "ui/Button";
import withServiceMachine from "../../stateMachine/withServiceMachine";
import { autoTracker } from "helpers/mixpanelTracker";

const BASE_TRACKING_NAME = "Waiting List Success";

const AlignRight = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Img = styled.img`
  margin: auto;
  display: block;
`;

const WAITING_LIST_IMAGE_PATH =
  "/static_assets/images/rebranding/woman-yoga.svg";

const WaitingListSuccess = ({ machineActions, isOpen }) => {
  const router = useRouter();

  const handleBackToHome = () => {
    machineActions.restartMachine();
    document.body.style.overflowY = "auto";
    router.push("/seguro-auto");
  };

  useEffect(() => {
    if (isOpen) autoTracker.trackModal(BASE_TRACKING_NAME);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      hide={() => null}
      contentLabel=""
      title=""
      hideCloseButton
      dataTracking="waiting-list-success-auto"
    >
      <Img src={WAITING_LIST_IMAGE_PATH} />
      <Text variant="subtitleLarge" align="center" mt={24} mb={24}>
        Email cadastrado!
      </Text>

      <Text variant="body" align="center">
        Tudo certo! Seu email está guardado aqui na nossa lista de espera ;)
      </Text>
      <AlignRight>
        <Button
          fullWidth
          variant="plainText"
          mt={24}
          onClick={() => {
            autoTracker.trackButton(`${BASE_TRACKING_NAME} Go Home`);
            handleBackToHome();
          }}
          type="button"
        >
          Ir para a Home
        </Button>
      </AlignRight>
    </Modal>
  );
};

export default withServiceMachine(WaitingListSuccess);
