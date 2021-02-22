import styled from "styled-components";

import Banner from ".";

import { storiesOf } from "@storybook/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin: 8px;
  }

  p {
    margin: 16px 0 0 16px;
    font-weight: 500;
    font-size: 16px;
  }
`;

storiesOf("Components | Banner", module)
  .add("Basic example", () => (
    <Banner variant="error">
      Tivemos um problema com o seu pagamento. Por favor, tente novamente
    </Banner>
  ))
  .add("Variants", () => (
    <Container>
      <p>Success</p>
      <Banner variant="success">
        Promoção 🎉 O segundo mês é por nossa conta!
      </Banner>

      <p>Warning</p>
      <Banner variant="warning">
        Você está usando um iPhone 7 porém você contratou a proteção para um
        Galaxy S9
      </Banner>

      <p>Error</p>
      <Banner variant="error">
        😢 Tivemos um problema com o seu pagamento. Por favor, tente novamente
      </Banner>
    </Container>
  ));
