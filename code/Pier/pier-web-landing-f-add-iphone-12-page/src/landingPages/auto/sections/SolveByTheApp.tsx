import styled from "styled-components";

import Grid from "ui/Grid";
import { StyledGridItem } from "ui/GridItem";
import Text from "ui/Text";
import UnorderedList from "ui/UnorderedList";
import Section from "landingPages/sharedSections/Section";
import breakpoints from "ui/theme/breakpoints";

const items = [
  {
    title: "Foi roubado",
    description:
      "Basta iniciar o processo em nosso site ou app. Tudo é online e rápido.",
  },
  {
    title: "Precisa de assistência",
    description:
      "É só ligar no número em nosso app! Você será atendido o mais rápido possivel, em qualquer canto do Brasil, a qualquer hora do dia.",
  },
];

const StyledUnorderedList = styled(UnorderedList)`
  li {
    font-size: 18px;
  }
`;

const TextAlignCenterOnMobile = styled(Text)`
  text-align: center;
  padding: 0 24px;

  ${breakpoints.desktop} {
    text-align: left;
    padding: 0;
  }
`;

const CenterOnMobileGridItem = styled(StyledGridItem)`
  align-items: center;

  li {
    max-width: 480px;
  }

  ${breakpoints.desktop} {
    align-items: flex-start;
    li {
      max-width: unset;
    }
  }
`;

const SolveByTheApp = () => (
  <Section
    bg="white"
    id="everything-on-app"
    py={[60, 60, 160]}
    className="section-spy"
  >
    <Grid>
      <CenterOnMobileGridItem m={2} t={8} d={5}>
        <TextAlignCenterOnMobile
          variant="bodyLarge"
          mb={8}
          bold
          color="secondary600"
        >
          Como acionar
        </TextAlignCenterOnMobile>
        <TextAlignCenterOnMobile
          variant="section"
          mb={[40, 32, 32]}
          maxWidth={380}
        >
          Resolva tudo pelo nosso app
        </TextAlignCenterOnMobile>
      </CenterOnMobileGridItem>
      <CenterOnMobileGridItem m={2} t={8} d={7}>
        <StyledUnorderedList>
          {items.map(({ title, description }) => (
            <li key={title}>
              <strong>{title}</strong>
              <Text variant="body" mt={8} mb={24}>
                {description}
              </Text>
            </li>
          ))}
        </StyledUnorderedList>
      </CenterOnMobileGridItem>
    </Grid>
  </Section>
);

export default SolveByTheApp;
