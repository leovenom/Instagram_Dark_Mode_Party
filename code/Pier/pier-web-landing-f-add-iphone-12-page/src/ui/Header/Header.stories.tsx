import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import Header from ".";
import menuBuilder from "./menuBuilder";

const MENU_ITEMS = menuBuilder("smartphone");

const PurpleContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

storiesOf("Components |  Header", module)
  .add("Basic example", () => <Header menuItems={MENU_ITEMS} />)
  .add("Transparent", () => (
    <PurpleContainer>
      <Header menuItems={MENU_ITEMS} transparent />
    </PurpleContainer>
  ));
