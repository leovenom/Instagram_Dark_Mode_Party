import Grid from "ui/Grid";
import Collapse from "ui/Collapse";
import Section from "landingPages/sharedSections/Section";
import { smartphoneTracker } from "helpers/mixpanelTracker";

import {
  StyledTitleGridItem,
  StyledText,
  StyledCollapseGridItem,
  StyledLink,
} from "../styles";

import data from "../data";

const Faq = () => (
  <Section bg="white" id="section-faq" pt={0} pb={110}>
    <Grid>
      <StyledTitleGridItem m={2} t={8} d={4}>
        <StyledText mb={10} variant="sectionSecondary">
          {data.faq.title}
        </StyledText>
        <StyledText variant="body" color="gray">
          {data.faq.subtitle}
        </StyledText>
      </StyledTitleGridItem>
      <StyledCollapseGridItem m={2} t={8} d={8}>
        {data.faq.questions.map(({ question, answer }) => (
          <Collapse key={question}>
            <Collapse.Title>{question}</Collapse.Title>
            <Collapse.Content>{answer}</Collapse.Content>
          </Collapse>
        ))}
        <StyledLink
          withArrow
          href="https://ajuda.pier.digital/pt-BR/articles/2887266-atualizacao-da-tabela-pipe"
          target="_blank"
          rel="noopener"
          onClick={() =>
            smartphoneTracker.trackButton("Tabela Pipe See More Answers")
          }
        >
          {data.faq.link}
        </StyledLink>
      </StyledCollapseGridItem>
    </Grid>
  </Section>
);

export default Faq;
