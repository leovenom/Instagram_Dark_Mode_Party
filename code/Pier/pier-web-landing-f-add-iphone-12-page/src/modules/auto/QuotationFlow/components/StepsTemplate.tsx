import * as React from "react";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import { CustomFilledIcon } from "ui/Icon/CustomizedIcon";
import Text from "ui/Text";
import { fadeInLeftSmooth } from "ui/theme/animations";

import BackStepButton from "./BackButton";
import StepTitle from "./StepTitle";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 2fr;
  opacity: 0;
  animation: ${fadeInLeftSmooth} 0.4s forwards;
  animation-delay: 0.1s;
`;

const TitleContainer = styled.div`
  grid-row: 1;
  margin-bottom: 32px;
`;

const FormContainer = styled.div`
  grid-row: 2;
`;

const AdditionalInfoContainer = styled.div`
  grid-row: 3;
  display: flex;
  align-items: flex-end;

  & > div {
    display: flex;

    svg {
      min-width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }

  ${breakpoints.desktop} {
    align-items: flex-start;
    margin-top: 64px;
  }
`;

interface Props {
  title: string;
  subtitle?: string | React.ReactNode;
  additionalInfo?: string;
  goBack?: () => void;
  children: React.ReactNode;
}

function StepsTemplate({
  title,
  subtitle,
  goBack,
  additionalInfo,
  children,
}: Props) {
  return (
    <>
      <BackStepButton goBack={goBack} />
      <Container>
        <TitleContainer>
          <StepTitle title={title} />
          {subtitle && <Text variant="body">{subtitle}</Text>}
        </TitleContainer>

        <FormContainer>{children}</FormContainer>

        {additionalInfo && (
          <AdditionalInfoContainer>
            <div>
              <CustomFilledIcon
                name="lock"
                backgroundFill="secondary300"
                iconFill="white"
              />
              <Text variant="label" color="gray600">
                {additionalInfo}
              </Text>
            </div>
          </AdditionalInfoContainer>
        )}
      </Container>
    </>
  );
}

export default StepsTemplate;
