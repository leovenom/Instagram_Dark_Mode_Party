import Icon from "ui/Icon";
import Text from "ui/Text";
import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Section from "landingPages/sharedSections/Section";
import { UncoveredList, UncoveredItem } from "./styles";
import { uncoveredItems } from "./data";

interface Props {
  displayColumn?: boolean;
}

function NotCoveredSection({ displayColumn }: Props) {
  const Wrapper = displayColumn ? "div" : Section;
  return (
    <Wrapper bg="white">
      <Grid>
        <GridItem d={displayColumn ? 12 : 6} t={8} m={2} maxWidth={480}>
          <Text variant={displayColumn ? "bodyLarge" : "section"} bold mb={16}>
            O que não cobrimos
          </Text>
          <Text variant="bodyLarge" mb={24}>
            Somos transparentes, confira os itens que não estão inclusos em
            nossa cobertura.
          </Text>
        </GridItem>

        <GridItem d={displayColumn ? 12 : 6} t={8} m={2}>
          <UncoveredList>
            {uncoveredItems.map((item) => (
              <UncoveredItem>
                <Icon name="ban" fill="darkGray" size={22} />
                <Text variant="bodySmall">{item}</Text>
              </UncoveredItem>
            ))}
          </UncoveredList>
        </GridItem>
      </Grid>
    </Wrapper>
  );
}

export default NotCoveredSection;
