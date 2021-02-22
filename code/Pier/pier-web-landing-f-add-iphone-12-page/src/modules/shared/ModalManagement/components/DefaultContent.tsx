import { DefaultModal } from "../styles";
import { DefaultContentProps } from "../types";

const DefaultContent = ({
  component,
  modalIsOpen,
  closeModal,
  contentLabel,
  title = "",
  hideCloseButton = false,
  mobileFullScreen = false,
}: DefaultContentProps) => {
  return (
    <DefaultModal
      hideCloseButton={hideCloseButton}
      data-testid="default-screen-layout"
      mobileFullScreen={mobileFullScreen}
      title={title}
      isOpen={modalIsOpen}
      hide={closeModal}
      contentLabel={contentLabel}
    >
      {component}
    </DefaultModal>
  );
};

export default DefaultContent;
