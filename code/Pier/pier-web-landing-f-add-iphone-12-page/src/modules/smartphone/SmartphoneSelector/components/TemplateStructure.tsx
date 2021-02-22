import { withModalManagementActions } from "modules/shared/ModalManagement";
import Icon from "ui/Icon";
import { States } from "../smartphone-machine/utils";

import {
  TemplateCloseBtn,
  TemplateContainer,
  TemplateContent,
  TemplateHeader,
  TemplateTitle,
  TemplateBackStepBtn,
  TemplateList,
  TemplateListItem,
} from "../styles";

const TemplateStructure = ({ children }) => (
  <TemplateContainer>{children}</TemplateContainer>
);

TemplateStructure.Header = withModalManagementActions(
  ({ closeModal, backStep, state }) => {
    const shouldClose = state === States.brand ? closeModal : backStep;

    return (
      <TemplateHeader>
        <TemplateBackStepBtn
          data-testid="back-btn"
          type="button"
          onClick={shouldClose}
        >
          <Icon name="chevronLeft" size={16} fill="primary" />
        </TemplateBackStepBtn>
        <TemplateCloseBtn type="button" onClick={closeModal}>
          Fechar
        </TemplateCloseBtn>
      </TemplateHeader>
    );
  }
);

TemplateStructure.Content = ({ state, children }) => (
  <TemplateContent animate key={state}>
    {children}
  </TemplateContent>
);

TemplateStructure.Title = ({ children, testId }) => (
  <TemplateTitle data-testid={testId}>{children}</TemplateTitle>
);

TemplateStructure.List = ({ children }) => (
  <TemplateList>{children}</TemplateList>
);

TemplateStructure.ListItem = ({ children, handleOnClick }) => (
  <TemplateListItem
    role="button"
    tabIndex={0}
    onKeyPress={handleOnClick}
    onClick={handleOnClick}
  >
    {children}
  </TemplateListItem>
);

export default TemplateStructure;
