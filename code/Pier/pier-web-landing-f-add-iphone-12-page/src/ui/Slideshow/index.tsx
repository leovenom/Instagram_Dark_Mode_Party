import { Children, useState, ReactNode } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Icon from "../Icon";

import breakpoints from "../theme/breakpoints";

interface Props {
  slides: number;
  startAt: number;
  children: ReactNode;
  slidesToShow?: number;
  fixedWidth?: number;
  centerArrows?: boolean;
  withDots?: boolean;
  onSlide?: (position: "Next" | "Back") => void;
}

const Carousel = styled.section`
  overflow-x: hidden;
  min-height: 300px;
`;

const Slides = styled.div<{
  currentIndex: number;
  offset: number;
  fixedWidth?: number;
  slidesToShow: number;
}>`
  width: 100%;
  display: flex;
  align-items: stretch;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: translateX(
    ${({ currentIndex }) => `calc(-${currentIndex * 100}% )`}
  );

  ${breakpoints.desktop} {
    transform: translateX(
      ${({ currentIndex, offset, fixedWidth }) =>
        `calc(-${currentIndex * offset}${fixedWidth ? `px` : `%`})`}
    );

    > div {
      ${breakpoints.tablet} {
        min-width: ${({ slidesToShow, fixedWidth }) =>
          fixedWidth ? `${fixedWidth}px` : `${100 / slidesToShow}%`};
      }
    }
  }
`;

const ControlsWrapper = styled.div<{ centerArrows: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;

  & > * {
    margin: 0 8px;
  }

  ${breakpoints.tablet} {
    justify-content: ${({ centerArrows }) =>
      centerArrows ? "center" : "start"};
  }
`;

const Control = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: unset;
  border: none;

  &:focus {
    outline: 0;
  }
`;

const DotsContainer = styled.ul`
  margin: 0 12px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.li<{ active: boolean }>`
  height: 8px;
  width: 8px;
  cursor: pointer;
  margin-right: 10px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.secondary600 : theme.colors.gray400};
  border-radius: 50%;
  display: inline-block;
  transition: all 0.3s;
`;

const Dots = ({ slides, activeSlide, setActiveSlide }) => {
  const dots = new Array(slides).fill("");

  return (
    <DotsContainer>
      {dots.map((_, index) => (
        <Dot
          key={uuid()}
          role="button"
          active={activeSlide === index}
          onClick={() => setActiveSlide(index)}
        />
      ))}
    </DotsContainer>
  );
};

const Slideshow = ({
  slides,
  startAt,
  children,
  slidesToShow = 3,
  fixedWidth,
  centerArrows,
  withDots,
  onSlide,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(startAt);

  const nextSlide = () => {
    if (currentIndex === slides - 1) return setCurrentIndex(0);

    if (onSlide) onSlide("Next");
    return setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (!currentIndex) return setCurrentIndex(slides - 1);

    if (onSlide) onSlide("Back");
    return setCurrentIndex(currentIndex - 1);
  };

  const [infiniteSlide, setInfiniteSlide] = useState(
    Children.toArray(children)
  );

  const setActiveSlide = (slideIndex) => setCurrentIndex(slideIndex);

  const offset = fixedWidth ? fixedWidth : 100 / slidesToShow;

  return (
    <>
      <Carousel>
        <Slides
          currentIndex={currentIndex}
          fixedWidth={fixedWidth}
          offset={offset}
          slidesToShow={slidesToShow}
        >
          {children}
        </Slides>
      </Carousel>
      <ControlsWrapper centerArrows={centerArrows}>
        <Control
          aria-label="Depoimento anterior"
          type="button"
          tabIndex={0}
          onClick={prevSlide}
        >
          <Icon name="chevronLeft" fill="primary" />
        </Control>
        {withDots && (
          <Dots
            slides={slides}
            activeSlide={currentIndex}
            setActiveSlide={setActiveSlide}
          />
        )}
        <Control
          aria-label="Próximo depoimento"
          type="button"
          tabIndex={0}
          onClick={nextSlide}
        >
          <Icon name="chevronRight" fill="primary" />
        </Control>
      </ControlsWrapper>
    </>
  );
};
export default Slideshow;
