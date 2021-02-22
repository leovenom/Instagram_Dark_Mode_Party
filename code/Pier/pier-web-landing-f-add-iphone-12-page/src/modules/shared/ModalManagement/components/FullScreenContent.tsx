import FullScreenModal from "ui/Modal/FullScreenModal";
import { Container, AnimationContent } from "../styles";
import { FullScreenContentProps } from "../types";
const FullScreenContent = ({
  component,
  id,
  modalIsOpen,
  closeModal,
  contentLabel,
  hideCloseButton = false,
  blockScroll = true,
}: FullScreenContentProps) => {
  return (
    <FullScreenModal
      blockScroll={blockScroll}
      isOpen={modalIsOpen}
      hide={closeModal}
      contentLabel={contentLabel}
      hideCloseButton={hideCloseButton}
    >
      <Container>
        <AnimationContent animate hideCloseButton={hideCloseButton} key={id}>
          {component}
        </AnimationContent>
      </Container>
    </FullScreenModal>
  );
};

export default FullScreenContent;
