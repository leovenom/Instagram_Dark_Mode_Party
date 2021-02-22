import { useState, createContext, useContext } from "react";
import { ModalManagementState } from "./types";

const ModalManagementContext = createContext(undefined);

const ModalManagementProvider = ({ children }) => {
  const [modal, setModal] = useState<ModalManagementState>({
    component: undefined,
    modalIsOpen: false,
    isFullScreen: false,
    contentLabel: "",
    id: undefined,
    title: "",
    hideCloseButton: false,
    blockScroll: true,
    mobileFullScreen: false,
  });

  const openModal = ({
    component,
    isFullScreen = true,
    id,
    title,
    contentLabel = "",
    hideCloseButton = false,
    blockScroll = true,
    mobileFullScreen = false,
  }) =>
    setModal({
      component,
      title,
      contentLabel,
      modalIsOpen: true,
      isFullScreen,
      id,
      hideCloseButton,
      blockScroll,
      mobileFullScreen,
    });

  const closeModal = () => setModal({ ...modal, modalIsOpen: false });

  return (
    <ModalManagementContext.Provider
      value={{
        isFullScreen: modal?.isFullScreen,
        component: modal?.component,
        modalIsOpen: modal?.modalIsOpen,
        id: modal?.id,
        contentLabel: modal?.contentLabel,
        title: modal?.title,
        hideCloseButton: modal?.hideCloseButton,
        blockScroll: modal?.blockScroll,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalManagementContext.Provider>
  );
};

const useModalManagementContext = () => useContext(ModalManagementContext);

export {
  useModalManagementContext,
  ModalManagementProvider,
  ModalManagementContext,
};
