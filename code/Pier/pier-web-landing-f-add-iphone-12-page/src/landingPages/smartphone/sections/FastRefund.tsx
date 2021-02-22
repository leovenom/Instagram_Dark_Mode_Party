import styled from "styled-components";

import Text from "ui/Text";
import GridItem from "ui/GridItem";
import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import data from "../data";

const CustomText = styled(Text)`
  margin-top: 120px;
  max-width: 600px;
  background: ${({ theme }) => theme.colors.yellow400};
  padding: 16px;
`;

const FastRefund = () => (
  <ThreeItemsSection
    title={data.fastRefund.title}
    subtitle={data.fastRefund.subtitle}
    items={data.fastRefund.items}
  >
    <GridItem m={2} t={8} d={12} alignItems="center">
      <CustomText variant="body" align="center">
        Em alguns casos, será necessário o envio de documentação adicional para
        análise e o prazo de reembolso poderá se estender para 30 dias conforme
        estabelecido pela SUSEP.
      </CustomText>
    </GridItem>
  </ThreeItemsSection>
);

export default FastRefund;
