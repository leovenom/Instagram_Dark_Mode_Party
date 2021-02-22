import { useEffect, useState } from "react";
import * as React from "react";
import styled, { css } from "styled-components";
import { v4 as uuid } from "uuid";

import useHorizontalScrollSpy from "hooks/useHorizontalScrollSpy";
import Icon from "ui/Icon";
import breakpoints, { DESKTOP_MIN_WIDTH } from "ui/theme/breakpoints";

const ScrollableSlideContainer = styled.div<{ alwaysShowOneSlide?: boolean }>`
  width: 100%;
  & > section > button {
    display: none;
  }

  ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > section {
      display: flex;
      align-items: center;
      ${({ alwaysShowOneSlide }) =>
        alwaysShowOneSlide &&
        css`
          margin-bottom: 56px;
        `}

      button {
        display: block;
      }
    }
  }
`;

const SlideshowContainer = styled.div<{
  fullWidth?: boolean;
  slideWidth: string;
  cardFullWidth?: boolean;
}>`
  display: flex;
  overflow-x: auto;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "94vw")};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${breakpoints.desktop} {
    ${({ fullWidth }) =>
      fullWidth
        ? css`
            width: 600px;
            margin: 0 40px;
          `
        : css`
            width: inherit;
            overflow-x: auto;
            margin: 0;

            & > div:not(:last-child) {
              margin-right: 4%;
            }
          `}
  }

  .slide {
    ${({ cardFullWidth }) =>
      cardFullWidth
        ? css`
            min-width: 100%;
            padding: 0;
            padding-right: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
          `
        : css`
            min-width: 65vw;
          `}

    ${breakpoints.desktop} {
      ${({ cardFullWidth, slideWidth }) =>
        !cardFullWidth &&
        css`
          min-width: ${slideWidth};
          flex: 1 1 0;
          padding: 0;
        `}
    }
  }
`;

const SlideContainer = styled.div<{
  extraGap?: boolean;
  fullWidth?: boolean;
}>`
  padding-right: ${({ extraGap }) => (extraGap ? "calc(35vw - 24px)" : "80px")};
`;

const ControlsContainer = styled.div<{ show?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
  width: 100%;

  section {
    display: flex;
    justify-content: space-between;
  }

  ${({ show }) =>
    !show &&
    css`
      ${breakpoints.desktop} {
        display: none;
      }
    `}
`;

const ControlButton = styled.button`
  background: unset;
  border: none;
  outline: 0;
  cursor: pointer;
`;

const Dot = styled.span<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.lightGray};
  margin: 0 4px;

  transition: background 250ms ease-out;
`;

interface SlideProps {
  largerPaddingRight?: boolean;
  children: React.ReactNode;
}

export function Slide({ largerPaddingRight, children }: SlideProps) {
  return (
    <SlideContainer className="slide" extraGap={largerPaddingRight}>
      {children}
    </SlideContainer>
  );
}

const TIME_TO_CONTENT_FULLY_LOAD = 500;

const slideContainerWidth = {
  "3": "31%",
  "4": "22%",
};
interface SlideshowProps {
  id: string;
  slides: any[];
  onSlideChange?: (param?: any) => void;
  alwaysShowOneSlide?: boolean;
  render: (props: any) => React.ReactNode;
  fullWidth?: boolean;
  cardFullWidth?: boolean;
  numberOfSlidesOnScreen?: 3 | 4;
}

export function Slideshow({
  id,
  slides,
  onSlideChange,
  alwaysShowOneSlide,
  render,
  cardFullWidth,
  numberOfSlidesOnScreen = 4,
}: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesOffset, setSlidesOffset] = useState<number[] | null>(null);
  const [bodySize, setBodySize] = useState<number | null>(null);
  const slideWidth = slideContainerWidth[numberOfSlidesOnScreen];

  const spyUtilities = useHorizontalScrollSpy({
    scrollContainerId: `#${id}`,
    slidesSelector: ".slide",
    currentSlide,
    setCurrentSlide,
    slidesOffset,
    setSlidesOffset,
    onSlideChange: onSlideChange,
  });

  useEffect(() => {
    document
      .getElementById(id)
      .addEventListener("scroll", spyUtilities.horizontalScrollSpy);

    return () =>
      document
        .getElementById(id)
        ?.removeEventListener("scroll", spyUtilities.horizontalScrollSpy);
  }, [slidesOffset]);

  useEffect(() => {
    setBodySize(window.innerWidth);

    setTimeout(() => {
      const numberOfSlidesToBeDisplayed = alwaysShowOneSlide
        ? 1
        : numberOfSlidesOnScreen;

      spyUtilities.getSlidesOffset(numberOfSlidesToBeDisplayed);
    }, TIME_TO_CONTENT_FULLY_LOAD);
  }, []);

  function renderDots() {
    let numberOfDots = slides.length;

    if (bodySize >= DESKTOP_MIN_WIDTH && !alwaysShowOneSlide) {
      numberOfDots = Math.floor(slides.length / numberOfSlidesOnScreen);
    }

    return [...Array(numberOfDots)].map((item, i) => (
      <Dot key={uuid()} active={currentSlide === i} />
    ));
  }

  function shouldShowUpperDotsOnDesktop() {
    return !alwaysShowOneSlide && slides.length > numberOfSlidesOnScreen;
  }

  return (
    <>
      <ControlsContainer show={shouldShowUpperDotsOnDesktop()}>
        <ControlButton
          aria-label="Depoimento anterior"
          onClick={() => spyUtilities.sideScroll("left")}
        >
          <Icon name="chevronLeft" fill="primary" />
        </ControlButton>
        <section>{renderDots()}</section>
        <ControlButton
          aria-label="Próximo depoimento"
          onClick={() => spyUtilities.sideScroll("right")}
        >
          <Icon name="chevronRight" fill="primary" />
        </ControlButton>
      </ControlsContainer>

      <ScrollableSlideContainer alwaysShowOneSlide={alwaysShowOneSlide}>
        <section>
          {alwaysShowOneSlide && (
            <ControlButton onClick={() => spyUtilities.sideScroll("left")}>
              <Icon name="chevronLeft" fill="primary" />
            </ControlButton>
          )}

          <SlideshowContainer
            slideWidth={slideWidth}
            cardFullWidth={cardFullWidth}
            id={id}
            fullWidth={alwaysShowOneSlide}
          >
            {slides.map(function (slide, index) {
              return (
                <React.Fragment key={uuid()}>
                  {render({ slide, index })}
                </React.Fragment>
              );
            })}
          </SlideshowContainer>

          {alwaysShowOneSlide && (
            <ControlButton onClick={() => spyUtilities.sideScroll("right")}>
              <Icon name="chevronRight" fill="primary" />
            </ControlButton>
          )}
        </section>
        {alwaysShowOneSlide && <section>{renderDots()}</section>}
      </ScrollableSlideContainer>
    </>
  );
}
