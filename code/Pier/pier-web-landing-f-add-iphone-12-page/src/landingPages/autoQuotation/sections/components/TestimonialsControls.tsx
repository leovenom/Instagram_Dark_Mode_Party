import styled, { css } from "styled-components";
import { ButtonBack, ButtonNext, Dot } from "pure-react-carousel";

import { autoTracker } from "helpers/mixpanelTracker";
import Icon from "ui/Icon";
import colors from "ui/theme/colors";

import { MULTIPLE_SLIDES_COUNT } from "../Testimonials";
import data from "../../data";

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const controlButtonStyle = css`
  background: unset;
  border: none;
  outline: 0;
  cursor: pointer;
`;

const BackButton = styled(ButtonBack)`
  ${controlButtonStyle}
`;

const NextButton = styled(ButtonNext)`
  ${controlButtonStyle}
`;

const DotsContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  column-gap: 8px;
`;

const ControlDot = styled(Dot)<{ show: boolean }>`
  height: 8px;
  width: 8px;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 50%;

  background: ${colors.gray400};
  transition: background 250ms ease-in-out;

  &.carousel__dot--selected {
    background: ${colors.secondary};
  }

  ${({ show }) =>
    !show &&
    css`
      display: none;
    `}
`;

interface Props {
  showMultipleSlides: boolean;
  screenName: string;
}

function TestimonialsControls({ showMultipleSlides, screenName }: Props) {
  const shouldShowDotControl = (index) =>
    !showMultipleSlides || index % MULTIPLE_SLIDES_COUNT === 0;

  return (
    <ControlsContainer>
      <BackButton
        aria-label="Depoimento anterior"
        onClick={() =>
          autoTracker.trackButton(`${screenName} Previous Testimonial`)
        }
      >
        <Icon name="chevronLeft" fill="primary" size={14} />
      </BackButton>

      <DotsContainer>
        {data.testimonials.map(function (_, index) {
          return (
            <ControlDot
              slide={index}
              show={shouldShowDotControl(index)}
            ></ControlDot>
          );
        })}
      </DotsContainer>

      <NextButton
        aria-label="Depoimento seguinte"
        onClick={() =>
          autoTracker.trackButton(`${screenName} Next Testimonial`)
        }
      >
        <Icon name="chevronRight" fill="primary" size={14} />
      </NextButton>
    </ControlsContainer>
  );
}

export default TestimonialsControls;
