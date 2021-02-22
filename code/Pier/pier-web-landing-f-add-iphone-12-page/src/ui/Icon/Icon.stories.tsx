import icons from "./icons";
import spacings from "../theme/spacings";
import Icon from ".";

import { storiesOf } from "@storybook/react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const IconWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

storiesOf("Components|Icon", module)
  .add("Basic example", () => <Icon name="lock" fill="primary" />)
  .add("Size variations ", () => (
    <Container>
      {Object.keys(spacings).map((size) => (
        <IconWrapper>
          <Icon name="lock" fill="text" size={spacings[size]} />
          {size}
        </IconWrapper>
      ))}
    </Container>
  ))
  .add("All Icons", () => (
    <Container>
      {Object.keys(icons).map((name: keyof typeof icons) => (
        <IconWrapper>
          <Icon name={name} fill="text" size={spacings.GIGA} />
          {name}
        </IconWrapper>
      ))}
    </Container>
  ));
