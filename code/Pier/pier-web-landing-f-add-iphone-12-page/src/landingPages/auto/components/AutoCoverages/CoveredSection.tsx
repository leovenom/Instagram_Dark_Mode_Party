import { useState } from "react";

import Text from "ui/Text";
import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Collapse from "ui/Collapse";
import { autoTracker } from "helpers/mixpanelTracker";
import Section from "landingPages/sharedSections/Section";

import {
  CoveredItemTitle,
  CollapseContainer,
  CollapseHeader,
  StyledCoveredSection,
} from "./styles";
import { insuranceCoverages, insuranceAssistances } from "./data";

interface Props {
  sourcePage: string;
  displayColumn?: boolean;
}

function AutoCoverage({ sourcePage, displayColumn }: Props) {
  const [opened, setOpened] = useState<string | null>(null);

  function changeCollapseState(item) {
    if (opened === item.key) {
      setOpened(null);
    } else {
      autoTracker.track(`${sourcePage} Covered Item Collapse Clicked`, {
        item: item.service,
      });
      setOpened(item.key);
    }
  }

  function renderList(list) {
    return (
      <CollapseContainer>
        {list.map((item) => (
          <Collapse key={item.key} mb={0} expanded={opened === item.key}>
            <Collapse.Title
              thinner
              expanded={opened === item.key}
              changeCollapseState={() => changeCollapseState(item)}
            >
              <CollapseHeader>
                <div>
                  <img src={item.image} alt={item.key} />
                </div>
                <CoveredItemTitle>
                  <Text variant="bodySmall" bold>
                    {item.service}
                  </Text>
                  <Text variant="bodySmallest">{item.subtitle}</Text>
                </CoveredItemTitle>
              </CollapseHeader>
            </Collapse.Title>
            <Collapse.Content expanded={opened === item.key}>
              <Text variant="bodySmallest">{item.description}</Text>
            </Collapse.Content>
          </Collapse>
        ))}
      </CollapseContainer>
    );
  }

  function renderContent() {
    return (
      <Grid>
        <GridItem d={displayColumn ? 12 : 6} t={8} m={2} maxWidth={480}>
          <div>
            <Text variant="section" mb={[16, 16, 24]}>
              Nossa cobertura
            </Text>
            <Text variant="bodyLarge" mb={16}>
              Um seguro sem franquia, sem carência e por um preço que você nem
              imaginava que existia.
            </Text>
            <Text variant="bodyLarge" mb={8}>
              Confira nossas Coberturas e Assistências 24h.
            </Text>
          </div>
        </GridItem>

        <GridItem d={displayColumn ? 12 : 6} t={8} m={2}>
          {renderList([...insuranceCoverages, ...insuranceAssistances])}
        </GridItem>
      </Grid>
    );
  }

  if (displayColumn) {
    return <StyledCoveredSection>{renderContent()}</StyledCoveredSection>;
  }

  return <Section bg="white">{renderContent()}</Section>;
}

export default AutoCoverage;
