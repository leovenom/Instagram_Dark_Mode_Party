import { useEffect } from "react";

import { DefaultContent, FullScreenContent } from "./components";
import { useModalManagementContext } from "./ModalManagementProvider";
import { fixVhProperty, resizeAndFixVhProperty } from "./utils";

const ModalManagementContainer = () => {
  const {
    component,
    modalIsOpen,
    closeModal,
    isFullScreen,
    contentLabel,
    id,
    title,
    hideCloseButton,
    blockScroll,
    mobileFullScreen,
  } = useModalManagementContext();

  useEffect(() => resizeAndFixVhProperty(), []);
  useEffect(() => fixVhProperty(), [modalIsOpen]); // To prevent resize eventListener bug

  return isFullScreen ? (
    <FullScreenContent
      component={component}
      contentLabel={contentLabel}
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      hideCloseButton={hideCloseButton}
      blockScroll={blockScroll}
      id={id}
    />
  ) : (
    <DefaultContent
      title={title}
      component={component}
      contentLabel={contentLabel}
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      hideCloseButton={hideCloseButton}
      mobileFullScreen={mobileFullScreen}
    />
  );
};

export default ModalManagementContainer;
