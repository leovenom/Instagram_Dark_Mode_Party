import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

const isBrowser = typeof window !== `undefined`;

function getScrollPosition(): ScrollPosition {
  return isBrowser
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 };
}

export function useScrollPosition() {
  const [position, setScrollPosition] = useState<ScrollPosition>(
    getScrollPosition()
  );

  const isScrollYLessWindowHeight = (): boolean =>
    isBrowser ? position.y < window.innerHeight - 550 : true;

  useEffect(() => {
    setScrollPosition(getScrollPosition());

    let requestRunning: number | null = null;
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return { x: position.x, y: position.y, isScrollYLessWindowHeight };
}

export function useScrollYPosition() {
  const { y, isScrollYLessWindowHeight } = useScrollPosition();
  return { y, isScrollYLessWindowHeight };
}
