import styled, { css } from "styled-components";

import BottomFloatingContainer from "ui/BottomFloatingContainer";
import Modal from "ui/Modal";

const BackgroundOverlay = styled.div<{ isVisible: boolean }>`
  background-color: ${({ theme }) => theme.colors.black70};
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
      opacity: 1;
      z-index: 2;
      height: 100vh;
      width: 100%;
    `}
`;

function FaqModal({ isVisible, hide, renderContent }) {
  return (
    <>
      <BackgroundOverlay onClick={hide} isVisible={isVisible} />

      <BottomFloatingContainer show={isVisible} rounded share excludeDesktop>
        {renderContent()}
      </BottomFloatingContainer>

      <Modal
        isOpen={isVisible}
        hide={hide}
        contentLabel="Resposta da pergunta selecionada"
        hideOnMobile
      >
        {renderContent()}
      </Modal>
    </>
  );
}

export default FaqModal;
