import styled, { css } from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import Icon from "ui/Icon";

interface Props {
  numberOfSteps: number;
  currentStep: number;
}

const indexToStep = (index) => index + 1;

const handleStepColor = (currentStep, index, theme) => {
  if (currentStep === indexToStep(index)) return theme.colors.secondary600;
  if (currentStep < indexToStep(index)) return theme.colors.secondary100;

  return theme.colors.secondary;
};

const handleStepContent = (currentStep, index) => {
  if (currentStep <= indexToStep(index)) return indexToStep(index);
  return <Icon fill="white" name="check" size={10} />;
};

const handleStepContentColor = (currentStep, index, theme) => {
  if (currentStep < indexToStep(index)) return theme.colors.secondary600;
  return theme.colors.white;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  ${breakpoints.desktop} {
    margin-top: 56px;
  }

  div:not(:first-child) {
    margin-left: 8px;
  }

  div:not(:last-child) {
    margin-right: 8px;
  }
`;

const Step = styled.div<{ currentStep: number; index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 12px;

  ${({ currentStep, index, theme }) => css`
    background: ${handleStepColor(currentStep, index, theme)};
    color: ${handleStepContentColor(currentStep, index, theme)};
  `};
`;

const Stepper = ({ numberOfSteps, currentStep }: Props) => {
  const steps = Array(numberOfSteps).fill("");

  return (
    <Container>
      {steps.map((value, index) => (
        <Step key={index} currentStep={currentStep} index={index}>
          {handleStepContent(currentStep, index)}
        </Step>
      ))}
    </Container>
  );
};

export default Stepper;
