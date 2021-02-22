export interface DefaultContentProps {
  component: any;
  modalIsOpen: boolean;
  contentLabel?: string;
  id?: string;
  title?: string;
  closeModal?: () => void;
  hideCloseButton?: boolean;
  mobileFullScreen?: boolean;
}

export interface FullScreenContentProps {
  component: any;
  modalIsOpen: boolean;
  contentLabel?: string;
  id?: string;
  closeModal?: () => void;
  hideCloseButton?: boolean;
  blockScroll?: boolean;
}

export interface ModalManagementState {
  component: any;
  modalIsOpen: boolean;
  isFullScreen: boolean;
  contentLabel?: string;
  id: string;
  title?: string;
  hideCloseButton?: boolean;
  mobileFullScreen?: boolean;
  blockScroll?: boolean;
}
