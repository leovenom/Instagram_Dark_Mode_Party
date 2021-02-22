import styled, { css } from "styled-components";

import Grid from "ui/Grid";
import { StyledGridItem } from "ui/GridItem";
import Text from "ui/Text";
import Button from "ui/Button";
import OrderedList from "ui/OrderedList";
import Section from "landingPages/sharedSections/Section";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";
import Link from "next/link";
import { autoTracker } from "helpers/mixpanelTracker";
import breakpoints from "ui/theme/breakpoints";

const steps = [
  {
    title: "Insira os dados do seu carro",
    description:
      "Vamos analisar o valor do seu carro de acordo com a Tabela FIPE.",
  },
  {
    title: "Informe seu endereço",
    description: "Precisamos verificar a incidência de roubo da sua região.",
  },
  {
    title: "Informe o seu CPF",
    description: "Vamos analisar o seu perfil e buscar seu nome e idade.",
  },
];

const StyledOrderedList = styled(OrderedList)`
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

  ${breakpoints.desktop} {
    align-items: flex-start;
  }
`;

const QuoteButtonContainer = styled.div<{ variant: "mobile" | "desktop" }>`
  ${breakpoints.desktop} {
    display: none;
  }

  ${({ variant }) =>
    variant === "desktop" &&
    css`
      display: none;
    `}
`;

const trackQuoteOnlineButtonClicked = () =>
  autoTracker.trackButton("Landing Page How To Quote Quote Online");

const QuoteOnlineButton = () => (
  <Link href={STEPS_CONFIG.LICENSE_PLATE.PATH}>
    <Button
      href={STEPS_CONFIG.LICENSE_PLATE.PATH}
      size="small"
      asLink
      onClick={trackQuoteOnlineButtonClicked}
    >
      Cotar online
    </Button>
  </Link>
);

const QuoteOnline = () => (
  <Section
    bg="white"
    id="quote-online"
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
          Como cotar
        </TextAlignCenterOnMobile>
        <TextAlignCenterOnMobile
          variant="section"
          mb={[40, 32, 32]}
          maxWidth={360}
        >
          Cote online e em 3 passos
        </TextAlignCenterOnMobile>
        <QuoteButtonContainer variant="desktop">
          <QuoteOnlineButton />
        </QuoteButtonContainer>
      </CenterOnMobileGridItem>
      <CenterOnMobileGridItem m={2} t={8} d={7}>
        <StyledOrderedList variant="basic">
          {steps.map(({ title, description }) => (
            <li key={title}>
              <strong>{title}</strong>

              <Text variant="body" mt={8}>
                {description}
              </Text>
            </li>
          ))}
        </StyledOrderedList>

        <QuoteButtonContainer variant="mobile">
          <QuoteOnlineButton />
        </QuoteButtonContainer>
      </CenterOnMobileGridItem>
    </Grid>
  </Section>
);

export default QuoteOnline;
