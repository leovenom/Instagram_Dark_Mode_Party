import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import { autoTracker } from "helpers/mixpanelTracker";
import { SCREEN_NAME } from "landingPages/autoQuotation/LandingPage";

import Text from "ui/Text";
import Button from "ui/Button";
import ProgressBar from "ui/ProgressBar";

const Section = styled.section`
  padding: 60px 0;
  margin: 0 24px;
  grid-area: reclame;
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray200};

  ${breakpoints.custom(930)} {
    margin: 60px 0px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    align-items: center;
  }
`;

const GradeText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 48px;
  line-height: 40px;
  letter-spacing: -0.08em;
  color: ${({ theme }) => theme.colors.green800};
`;

const DescriptionContainer = styled.div`
  margin-right: 48px;

  ${breakpoints.custom(930)} {
    flex: 1;
    max-width: 308px;
    margin-right: 80px;
  }
`;

const ProgressBarContainer = styled.div`
  margin-bottom: 32px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${breakpoints.tablet} {
    justify-content: flex-start;
  }

  button {
    max-width: 324px;
  }
`;

const GRADE = 9.5;
const ANSWERS_RATE = 100;
const SOLUTIONS_RATE = 96.7;
const PIER_RECLAME_AQUI_URL =
  "https://www.reclameaqui.com.br/empresa/pier-digital/";

const trackLinkClick = () =>
  autoTracker.trackButton(`${SCREEN_NAME} Reclame Aqui`);

function ReclameAqui() {
  return (
    <Section>
      <Row>
        <DescriptionContainer>
          <Text variant="sectionSmall" bold mb={40}>
            Reclame Aqui
          </Text>
          <ProgressBarContainer>
            <ProgressBar
              value={ANSWERS_RATE}
              description="Reclamações respondidas"
              showPercentage
            />
          </ProgressBarContainer>
          <ProgressBarContainer>
            <ProgressBar
              value={SOLUTIONS_RATE}
              description="Índice de solução"
              showPercentage
            />
          </ProgressBarContainer>
        </DescriptionContainer>
        <div>
          <GradeText>{GRADE}</GradeText>
          <Text variant="body" align="center">
            Nota
          </Text>
        </div>
      </Row>
      <ButtonContainer>
        <Button
          href={PIER_RECLAME_AQUI_URL}
          target="_blank"
          rel="noopener"
          mt={32}
          variant="outline"
          asLink
          onClick={trackLinkClick}
        >
          Confira o nosso Reclame Aqui
        </Button>
      </ButtonContainer>
    </Section>
  );
}

export default ReclameAqui;
