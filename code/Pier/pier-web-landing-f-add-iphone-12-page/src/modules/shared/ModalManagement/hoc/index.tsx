import { useModalManagementContext } from "../ModalManagementProvider";

const withModalManagementActions = (BaseComponent) => ({ ...props }) => {
  const { openModal, closeModal } = useModalManagementContext();

  return (
    <BaseComponent {...props} openModal={openModal} closeModal={closeModal} />
  );
};
export default withModalManagementActions;
