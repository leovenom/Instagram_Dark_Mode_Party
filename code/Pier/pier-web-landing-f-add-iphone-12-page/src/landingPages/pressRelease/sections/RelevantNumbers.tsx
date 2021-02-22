import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Text from "ui/Text";
import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import Section from "landingPages/sharedSections/Section";

import { font } from "ui/theme/typography";

const ItemContainer = styled.div`
  max-width: 262px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 60px;

  ${breakpoints.desktop} {
    margin-bottom: 0;
  }
`;

const BigText = styled.p`
  text-align: center;
  display: inline;
  font-size: 48px;
  font-family: ${font.secondary};
  ${breakpoints.desktop} {
    font-size: 76px;
  }
`;

const AuxiliarText = styled.p`
  text-align: center;
  display: inline;
  font-size: 24px;
  font-family: ${font.secondary};
`;

const RelevantNumbers = () => (
  <Section py={96} bg="yellow400">
    <Grid>
      <GridItem alignItems="center" justifyContent="center" m={2} t={8} d={4}>
        <ItemContainer>
          <div>
            <BigText> + 15</BigText> <AuxiliarText>mil</AuxiliarText>
          </div>
          <Text variant="bodySmall" align="center">
            Membros segurados em nossa comunidade 🎉
          </Text>
        </ItemContainer>
      </GridItem>
      <GridItem alignItems="center" justifyContent="center" m={2} t={8} d={4}>
        <ItemContainer>
          <div>
            <AuxiliarText>R$</AuxiliarText> <BigText> 4,3</BigText>
            <AuxiliarText>mi</AuxiliarText>
          </div>
          <Text variant="bodySmall" align="center">
            Pagos em reembolsos aos nossos membros
          </Text>
        </ItemContainer>
      </GridItem>
      <GridItem alignItems="center" justifyContent="center" m={2} t={8} d={4}>
        <ItemContainer>
          <div>
            <BigText> 38</BigText> <AuxiliarText>seg</AuxiliarText>
          </div>
          <Text variant="bodySmall" align="center">
            🙌 Nosso recorde de pagamento do reembolso
          </Text>
        </ItemContainer>
      </GridItem>
    </Grid>
  </Section>
);

export default RelevantNumbers;
