import * as React from "react";
import Section from "../../sharedSections/Section";
import { StyledGridItem as GridItem } from "ui/GridItem";
import Text from "ui/Text";
import styled from "styled-components";

const CenterContentGrid = styled(GridItem)`
  text-align: center;
  width: 930px;
`;

interface Props {
  title: string;
}

const MainSection: React.FC<Props> = ({ title }): JSX.Element => {
  return (
    <Section>
      <CenterContentGrid m={2} t={8} d={7}>
        <Text variant="display" mb={[24, 32, 32]}>
          {title}
        </Text>
      </CenterContentGrid>
    </Section>
  );
};

export default MainSection;
