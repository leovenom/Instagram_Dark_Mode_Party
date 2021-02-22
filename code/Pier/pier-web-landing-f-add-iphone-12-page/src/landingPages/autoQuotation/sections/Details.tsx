import styled from "styled-components";

import Icon from "ui/Icon";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

const Section = styled.section`
  grid-area: intro;
  padding: 24px 24px 40px;

  ${breakpoints.custom(930)} {
    padding: 40px 0px;
  }
`;

const TitleContainer = styled.div`
  max-width: 272px;

  ${breakpoints.custom(930)} {
    max-width: 100%;
  }
`;

const CheckedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${breakpoints.custom(930)} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  svg {
    margin-right: 12px;
  }
`;

const DIFFERENTIALS = [
  "Preços abaixo do mercado",
  "Sem carência e sem franquia",
  "Pagamento mês a mês",
];

function Details() {
  return (
    <Section>
      <TitleContainer>
        <Text variant="section" mb={[16, 16, 40]}>
          Cotação Seguro Auto Pier
        </Text>
      </TitleContainer>
      <Text variant="body" color="gray600" mb={[16, 16, 40]}>
        Confira a cotação que criamos para você com base nas informações do seu
        carro.
      </Text>

      <CheckedList>
        {DIFFERENTIALS.map(function (differential) {
          return (
            <ListItem key={differential}>
              <Icon name="check" fill="secondary" />
              <Text variant="body">{differential}</Text>
            </ListItem>
          );
        })}
      </CheckedList>
    </Section>
  );
}

export default Details;
