import * as React from "react";

import Grid from "ui/Grid";
import GridItem, { StyledGridItem } from "ui/GridItem";
import Text from "ui/Text";
import OrderedList from "ui/OrderedList";
import Breakpoints from "ui/theme/breakpoints";
import Section from "landingPages/sharedSections/Section";

import styled from "styled-components";

interface Props {
  title: string;
  descriptionItems: string[];
  imageSource: string;
}

const StyledListItem = styled.li`
  padding-bottom: 24px;
  a {
    font-weight: bold;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary600};
  }
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 32px;
  ${Breakpoints.desktop} {
    margin-top: 0px;
  }
`;

const CenterContentGrid = styled(StyledGridItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HowItWorks: React.FC<Props> = ({
  title,
  descriptionItems,
  imageSource,
}) => {
  return (
    <Section py={80}>
      <Grid>
        <CenterContentGrid m={2} t={8} d={6}>
          <Text variant="section" mb={32}>
            {title}
          </Text>
          <OrderedList>
            {descriptionItems.map((text) => (
              <StyledListItem
                key={text}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </OrderedList>
        </CenterContentGrid>
        <GridItem m={2} t={8} d={6} alignItems="center" justifyContent="center">
          <Image src={imageSource} alt="Pessoa com celular na mão" />
        </GridItem>
      </Grid>
    </Section>
  );
};

export default HowItWorks;
