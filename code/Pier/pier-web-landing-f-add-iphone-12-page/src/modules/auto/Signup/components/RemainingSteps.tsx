import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

import HiringStep from "./HiringStep";

const Container = styled.div`
  box-sizing: border-box;
  padding: 0 24px;

  ${breakpoints.desktop} {
    padding: 0 40px;
  }
`;

const NextStepsContainer = styled.div`
  border-left: 4px solid ${({ theme }) => theme.colors.lightGray};
  margin: 32px 0 80px;
  padding-left: 16px;
  *:last-child {
    margin-bottom: 0;
  }
`;

const TOTAL_STEPS = 5;

interface Props {
  numberOfStepsLeft: number;
  subtitle?: string;
}

function RemainingSteps({ numberOfStepsLeft, subtitle }: Props) {
  const firstRemainingStep = TOTAL_STEPS + 1 - numberOfStepsLeft;

  function renderSteps() {
    return [...Array(numberOfStepsLeft)].map((element, index) => {
      return (
        <HiringStep key={uuid()} stepNumber={firstRemainingStep + index} />
      );
    });
  }

  return (
    <Container>
      <Text variant="bodySmall" bold>
        Próximos passos
      </Text>
      {subtitle && <Text variant="bodySmall">{subtitle}</Text>}
      <NextStepsContainer>{renderSteps()}</NextStepsContainer>
    </Container>
  );
}

export default RemainingSteps;
