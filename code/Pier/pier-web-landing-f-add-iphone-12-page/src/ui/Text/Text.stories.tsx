import Text from ".";

import { storiesOf } from "@storybook/react";
import typography from "../theme/typography";

import styled from "styled-components";

const Container = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  * {
    margin: 32px;
  }
`;

storiesOf("Components | Text", module)
  .add("Basic example", () => (
    <Container>
      {Object.keys(typography).map((variant: keyof typeof typography) => (
        <Text variant={variant}>{variant}</Text>
      ))}
    </Container>
  ))
  .add("Highlight Text", () => (
    <Container>
      <Text variant="bodyLarge" highlight>
        Texto em destaque
      </Text>
    </Container>
  ))
  .add("Bold Text", () => (
    <Container>
      <Text variant="bodyLarge" bold>
        Texto em negrito
      </Text>
    </Container>
  ))
  .add("Color variants", () => (
    <Container>
      <Text variant="tag" color="text">
        Text Color
      </Text>
      <Text variant="tag" color="primary">
        Primary Color
      </Text>
      <Text variant="tag" color="secondary">
        Secondary Color
      </Text>
    </Container>
  ));
