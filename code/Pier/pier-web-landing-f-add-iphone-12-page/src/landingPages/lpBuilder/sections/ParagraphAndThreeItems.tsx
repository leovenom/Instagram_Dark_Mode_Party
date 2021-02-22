import * as React from "react";

import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Text from "ui/Text";
import Divider from "ui/Divider";
import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";

import Section from "landingPages/sharedSections/Section";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  margin-bottom: 40px;

  p {
    max-width: 268px;
  }

  ${breakpoints.desktop} {
    margin-bottom: 0;
  }
`;
interface Item {
  title: string;
  description: string;
  imageSrc: string;
  imageDescription: string;
}

interface Props {
  id?: string;
  spyThisElement?: boolean;
  description?: string;
  title: string;
  bodyText?: string;
  items: {
    itemOne: Item;
    itemTwo: Item;
    itemThree: Item;
  };
  children?: React.ReactNode;
}

const Items = ({ items }) => {
  const renderedItems = Object.values(items).map(
    ({ title, description, imageSrc, imageDescription }) => (
      <GridItem
        key={imageSrc}
        alignItems="center"
        justifyContent="center"
        m={2}
        t={8}
        d={4}
      >
        <ItemContainer>
          <img
            src={imageSrc}
            alt={imageDescription}
            width="140"
            height="140"
            loading="lazy"
          />
          <Text
            variant="bodyLarge"
            align="center"
            color="secondary600"
            bold
            mb={16}
            mt={32}
          >
            {title}
          </Text>
          <Text variant="body" align="center">
            {description}
          </Text>
        </ItemContainer>
      </GridItem>
    )
  );

  return <>{renderedItems}</>;
};

const ThreeItemsSection = ({
  id,
  spyThisElement,
  description,
  title,
  bodyText,
  items,
  children,
}: Props) => (
  <>
    <Section
      py={[80, 80, 126]}
      id={id}
      className={spyThisElement && "section-spy"}
    >
      <Grid>
        <GridItem m={2} t={8} d={12} alignItems="center">
          <Text variant="section" align="center" mb={24}>
            {title}
          </Text>
          <Text variant="bodyLarge" mb={60} maxWidth={808}>
            {bodyText}
          </Text>
        </GridItem>

        <Items items={items} />

        {children}
      </Grid>
    </Section>
    <Divider large />
  </>
);

export default ThreeItemsSection;
