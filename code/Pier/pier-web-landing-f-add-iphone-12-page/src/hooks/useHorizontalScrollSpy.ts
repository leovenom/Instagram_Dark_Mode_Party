import { DESKTOP_MIN_WIDTH } from "ui/theme/breakpoints";

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback.call(null, array[i], i);
  }
}

const isDesktop = () => window.innerWidth > DESKTOP_MIN_WIDTH;

interface Props {
  scrollContainerId: string;
  slidesSelector: string;
  currentSlide: number;
  setCurrentSlide: (slideNumber: number) => void;
  slidesOffset: number[] | null;
  setSlidesOffset: (offsetsArr: number[]) => void;
  onSlideChange?: (action?: "Back" | "Next") => void;
}

/**
 * This hook implements a horizontal scroll spy that checks and sets slide counters
 * as they move on scroll or clicking in the handlers.
 *
 * @requires @param scrollContainerId a css selector for scrollable container
 * @requires @param slidesSelector a css class selector for each slide
 * @requires @param currentSlide a state with the current slide being showed
 * @requires @param setCurrentSlide a state function for setting the current slide
 * @requires @param slidesOffset a state with the left offset for each slide into the slideshow
 * @requires @param setSlidesOffset a state function for setting the slides offset
 * @param onSlideChange an aditional function (usually a tracker) for being executed when the update conditions are met
 */
function useHorizontalScrollSpy({
  scrollContainerId,
  slidesSelector,
  currentSlide,
  setCurrentSlide,
  slidesOffset,
  setSlidesOffset,
  onSlideChange,
}: Props): {
  horizontalScrollSpy: () => void;
  sideScroll: (direction: "left" | "right") => void;
  getSlidesOffset: (numberOfSlidesOnScreen?: number) => void;
} | null {
  let currentIndex = currentSlide;

  function getOnlyNeededOffsets(
    offsetsArr: number[],
    numberOfSlidesOnScreen: number
  ): number[] {
    if (numberOfSlidesOnScreen === 1 || !isDesktop()) return offsetsArr;

    const numberOfSlides = offsetsArr.length;
    let index = 0;
    let usedIndexes = [] as number[];

    do {
      usedIndexes = [...usedIndexes, offsetsArr[index]];
      index += numberOfSlidesOnScreen;
    } while (numberOfSlides - index > numberOfSlidesOnScreen);

    usedIndexes = [
      ...usedIndexes,
      offsetsArr[numberOfSlides - numberOfSlidesOnScreen],
    ];

    return usedIndexes;
  }

  function getSlidesOffset(numberOfSlidesOnScreen = 1) {
    const slideshowContainer = document.querySelector(
      scrollContainerId
    ) as HTMLElement;
    const slides = document.querySelectorAll(
      `${scrollContainerId} ${slidesSelector}`
    );

    if (!slideshowContainer || !slides) return null;

    const slideShowOffsetLeft = slideshowContainer.offsetLeft;

    let offsetsArr = [] as number[];
    forEach(slides, function (elem) {
      offsetsArr = [...offsetsArr, elem.offsetLeft - slideShowOffsetLeft];
    });

    setSlidesOffset(getOnlyNeededOffsets(offsetsArr, numberOfSlidesOnScreen));
  }

  function horizontalScrollSpy() {
    if (!slidesOffset) return;

    const scrolled = this.scrollLeft;

    function tryUpdateCurrentIndex(index) {
      if (scrolled >= slidesOffset[index] - 100) {
        if (currentIndex !== index) {
          if (onSlideChange && currentIndex > index) {
            if (currentIndex > index) onSlideChange("Back");
            else onSlideChange("Next");
          }
          currentIndex = index;
          setCurrentSlide(currentIndex);
        }
        return true;
      }
      return false;
    }

    for (let i = slidesOffset.length - 1; i >= 0; i--) {
      if (tryUpdateCurrentIndex(i)) break;
    }
  }

  function sideScroll(direction: "left" | "right") {
    const element = document.querySelector(scrollContainerId);
    const SPEED = 10;
    const STEP = 10;
    const lastSlideIndex = slidesOffset.length - 1;

    if (!element) return;
    if (direction === "left" && currentSlide <= 0) return;
    if (direction === "right" && currentSlide >= lastSlideIndex) return;

    function shouldScrollLeft(): boolean {
      return element.scrollLeft - STEP > slidesOffset[currentSlide - 1];
    }

    function shouldScrollRight(): boolean {
      return element.scrollLeft + STEP < slidesOffset[currentSlide + 1];
    }

    function updateCurrentSlide(incrementBy: number) {
      element.scrollLeft = slidesOffset[currentSlide + incrementBy];
      setCurrentSlide(currentSlide + incrementBy);

      if (onSlideChange) {
        if (incrementBy > 0) onSlideChange("Next");
        else onSlideChange("Back");
      }
    }

    const slideTimer = setInterval(function () {
      switch (direction) {
        case "left":
          if (shouldScrollLeft()) {
            element.scrollLeft -= STEP;
          } else {
            updateCurrentSlide(-1);
            window.clearInterval(slideTimer);
          }
          break;
        case "right":
          if (shouldScrollRight()) {
            element.scrollLeft += STEP;
          } else {
            updateCurrentSlide(1);
            window.clearInterval(slideTimer);
          }
          break;
        default:
          break;
      }
    }, SPEED);
  }

  return {
    horizontalScrollSpy,
    sideScroll,
    getSlidesOffset,
  };
}

export default useHorizontalScrollSpy;
