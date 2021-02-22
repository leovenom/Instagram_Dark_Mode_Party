import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import Text from "ui/Text";
import Icon from "ui/Icon";
import Modal from "ui/Modal";
import useModal from "hooks/useModal";
import { autoTracker } from "helpers/mixpanelTracker";
import { SCREEN_NAME } from "landingPages/autoQuotation/LandingPage";

import data from "../data";

import {
  List,
  ListContent,
  ListIconContainer,
  ListItem,
  MobileButton,
} from "./styles/CoverSections";

const Section = styled.section`
  grid-area: uncovered;
  padding: 60px 24px;
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray200};

  ${breakpoints.custom(930)} {
    padding: 60px 0;
  }
`;

const uncoveredItems = data.notInsuredItems;
const uncoveredItemsQuantity = data.notInsuredItems.length;

const renderList = (hideOnMobile: boolean) => (
  <List>
    {uncoveredItems.map((item, index) => (
      <ListItem key={item.name} hideOnMobile={hideOnMobile && index > 2}>
        <ListIconContainer>
          <Icon name="ban" fill="gray600" size={24} />
        </ListIconContainer>
        <ListContent>
          <Text variant="bodyLarge" bold mb={8}>
            {item.name}
          </Text>
          <Text variant="body" color="gray600">
            {item.longDescription}
          </Text>
        </ListContent>
      </ListItem>
    ))}
  </List>
);

function Uncovered() {
  const { isOpen, toggle } = useModal();

  const openMoreItens = () => {
    autoTracker.trackButton(`${SCREEN_NAME} Uncovered Itens Show More`);
    toggle();
  };

  return (
    <Section>
      <Text variant="sectionSmall" bold mb={40}>
        Não cobrimos
      </Text>

      {renderList(true)}
      <MobileButton variant="outline" onClick={openMoreItens}>
        Mostrar todas os {uncoveredItemsQuantity} itens
      </MobileButton>
      <Modal
        contentLabel="O que não cobrimos"
        mobileFullScreen
        isOpen={isOpen}
        hide={toggle}
        title="   O que não cobrimos"
      >
        <>{renderList(false)}</>
      </Modal>
    </Section>
  );
}

export default Uncovered;
