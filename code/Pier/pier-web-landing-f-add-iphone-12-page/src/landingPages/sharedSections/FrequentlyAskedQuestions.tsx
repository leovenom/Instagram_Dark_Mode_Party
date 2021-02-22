import styled from "styled-components";

import MixPanelTracker from "helpers/mixpanelTracker";
import { ProductTypes } from "helpers/commonTypes";
import Grid from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";
import Text from "ui/Text";
import ExternalLink from "ui/ExternalLink";
import Section from "./Section";
import Collapse from "ui/Collapse";
import breakpoints from "ui/theme/breakpoints";

const PIER_FAQ_PAGE_URL = "http://ajuda.pier.digital/";

const StyledText = styled(Text)`
  &&& {
    text-align: center;

    ${breakpoints.desktop} {
      text-align: left;
    }
  }
`;

const StyledGridItem = styled(GridItem)`
  &&& {
    align-items: center;

    ${breakpoints.desktop} {
      align-items: start;
      max-width: 360px;
    }
  }
`;

const CollapseGridItem = styled(GridItem)`
  &&& {
    ${breakpoints.desktop} {
      margin-top: -40px;
    }
  }
`;

const LinkDesktop = styled(ExternalLink)`
  display: none;
  ${breakpoints.desktop} {
    display: block;
  }
`;

const LinkMobile = styled(ExternalLink)`
  display: block;
  ${breakpoints.desktop} {
    display: none;
  }
`;

interface Question {
  question: string;
  answer: string;
}
interface Props {
  spyThisElement?: boolean;
  questions: Question[];
  product: ProductTypes;
}

const trackQuestionCick = (product: ProductTypes, question: string) => {
  const tracker = new MixPanelTracker({ product });
  tracker.track("Landing Page FAQ Question Title Clicked", { question });
};

const FrequentlyAskedQuestions = ({
  questions,
  spyThisElement,
  product,
}: Props) => (
  <Section
    bg="white"
    id="section-faq"
    pt={[100, 100, 148]}
    pb={100}
    className={spyThisElement && "section-spy"}
  >
    <Grid>
      <StyledGridItem m={2} t={8} d={4}>
        <StyledText variant="bodyLarge" color="secondary" bold mb={10}>
          Perguntas Frequentes
        </StyledText>
        <StyledText variant="sectionSecondary">Tire suas dúvidas</StyledText>
        <LinkDesktop
          mt={24}
          withArrow
          href={PIER_FAQ_PAGE_URL}
          target="_blank"
          rel="noopener"
        >
          Veja mais respostas
        </LinkDesktop>
      </StyledGridItem>
      <CollapseGridItem m={2} t={8} d={8}>
        {questions.map(({ question, answer }) => (
          <Collapse key={question}>
            <Collapse.Title
              onClick={() => trackQuestionCick(product, question)}
            >
              {question}
            </Collapse.Title>
            <Collapse.Content>{answer}</Collapse.Content>
          </Collapse>
        ))}
        <LinkMobile
          mt={24}
          withArrow
          href={PIER_FAQ_PAGE_URL}
          target="_blank"
          rel="noopener"
        >
          Veja mais respostas
        </LinkMobile>
      </CollapseGridItem>
    </Grid>
  </Section>
);

export default FrequentlyAskedQuestions;
