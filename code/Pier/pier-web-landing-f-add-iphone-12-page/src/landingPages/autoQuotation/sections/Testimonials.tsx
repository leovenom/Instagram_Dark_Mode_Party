import { useState, useEffect } from "react";
import styled from "styled-components";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";
import { SCREEN_NAME } from "../LandingPage";

import { TestimonialCard, TestimonialsControls } from "./components";
import data from "../data";

const Section = styled.section`
  grid-area: testimonials;
  margin: 60px 24px 0;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray200};
  max-width: calc(100vw - 48px);

  ${breakpoints.custom(930)} {
    margin: 60px 0px 0;
    padding-bottom: 32px;
    max-width: 100%;
  }
`;

export const MULTIPLE_SLIDES_BREAKPOINT = 1220;
export const MULTIPLE_SLIDES_COUNT = 3;

function Testimonials() {
  const [showMultipleSlides, setShowMultipleSlides] = useState<boolean>(false);

  function calculateBodySize() {
    const newBodySize = window.innerWidth;
    setShowMultipleSlides(newBodySize >= MULTIPLE_SLIDES_BREAKPOINT);
  }

  const getNumberOfVisibleSlides = () =>
    showMultipleSlides ? MULTIPLE_SLIDES_COUNT : 1;

  useEffect(() => {
    try {
      window.addEventListener("resize", calculateBodySize);
    } catch {
      // just to prevent unhandled access do unexisting showMultipleSlides state
    }

    calculateBodySize();

    return () => window.removeEventListener("resize", calculateBodySize);
  }, []);

  return (
    <Section>
      <Text mb={16} variant="sectionSmall" bold>
        Avaliações
      </Text>
      <Text mb={32} variant="bodyLarge" color="gray600">
        9 de cada 10 membros indicam a Pier
      </Text>

      <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        isIntrinsicHeight
        totalSlides={data.testimonials.length}
        visibleSlides={getNumberOfVisibleSlides()}
        step={getNumberOfVisibleSlides()}
        dragStep={getNumberOfVisibleSlides()}
      >
        <TestimonialsControls
          showMultipleSlides={showMultipleSlides}
          screenName={SCREEN_NAME}
        />

        <Slider>
          {data.testimonials.map(function (testimonial, index) {
            return (
              <TestimonialCard
                key={testimonial.url}
                testimonial={testimonial}
                index={index}
              />
            );
          })}
        </Slider>
      </CarouselProvider>
    </Section>
  );
}

export default Testimonials;
