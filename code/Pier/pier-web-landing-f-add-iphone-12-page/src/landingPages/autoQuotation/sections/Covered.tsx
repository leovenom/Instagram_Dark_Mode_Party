import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import Text from "ui/Text";
import Icon from "ui/Icon";
import icons from "ui/Icon/icons";
import Button from "ui/Button";
import Modal from "ui/Modal";
import useModal from "hooks/useModal";
import { SCREEN_NAME } from "landingPages/autoQuotation/LandingPage";
import { autoTracker } from "helpers/mixpanelTracker";
import { Fragment } from "react";
import data from "../data";

import {
  List,
  ListContent,
  ListIconContainer,
  ListItem,
  MobileButton,
} from "./styles/CoverSections";

const Section = styled.section`
  grid-area: covered;
  padding: 60px 24px;
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray200};

  ${breakpoints.custom(930)} {
    padding: 60px 0;
  }
`;

const coveredItems = data.insuredItems;
const coveredItemsQuantity = data.insuredItems.length;

const renderList = (hideOnMobile: boolean) => (
  <List>
    {coveredItems.map((item, index) => (
      <Fragment key={item.name}>
        <ListItem hideOnMobile={hideOnMobile && index > 2}>
          <ListIconContainer>
            <Icon
              name={item.icon as keyof typeof icons}
              fill="secondary"
              size={24}
            />
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
        {!index && <div></div>}
      </Fragment>
    ))}
  </List>
);

function Covered() {
  const { isOpen, toggle } = useModal();

  const openMoreItens = () => {
    autoTracker.trackButton(`${SCREEN_NAME} Covered Itens Show More`);
    toggle();
  };

  return (
    <Section>
      <Text variant="sectionSmall" bold mb={40}>
        Coberturas inclusas
      </Text>

      {renderList(true)}
      <MobileButton variant="outline" onClick={openMoreItens}>
        Mostrar todas as {coveredItemsQuantity} coberturas
      </MobileButton>
      <Modal
        contentLabel="O que não cobrimos"
        mobileFullScreen
        isOpen={isOpen}
        hide={toggle}
        title="Coberturas inclusas"
      >
        <>{renderList(false)}</>
      </Modal>
    </Section>
  );
}

export default Covered;
