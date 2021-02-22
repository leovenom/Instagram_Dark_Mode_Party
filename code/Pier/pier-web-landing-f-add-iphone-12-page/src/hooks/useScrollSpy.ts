interface RequiredProps {
  elementHasEffect: boolean;
  toggleFn: (val: boolean) => void;
}

interface SpyOnTopProps extends RequiredProps {
  topSelector: string;
  topOffset?: number;
}

interface SpyOnBottomProps extends RequiredProps {
  bottomSelector: string;
  bottomOffset?: number;
}

interface SpyBothProps extends SpyOnTopProps, SpyOnBottomProps, RequiredProps {}

/**
 * This hook implements a scroll spy that inspects if an element on top is gone
 * OR an element on bottom appeared or check for any of this ocurrences in cases
 * that a top and a bottom elements are provided. At least the topSelector or
 * bottomSelector should be provided for this hook.
 *
 * @param topSelector a css selector to query on DOM
 * @param topOffset an aditional number to be added (or subtracted if negative) on calc
 * @param bottomSelector a css selector to query on DOM
 * @param bottomOffset an aditional number to be added (or subtracted if ngative) on calc
 * @requires @param elementHasEffect a boolean that tells if an effect is already applied
 * @requires @param toggleFn a function to toggle effect state
 */
function useScrollSpy({
  topSelector,
  topOffset,
  elementHasEffect,
  toggleFn,
}: SpyOnTopProps): () => void;
function useScrollSpy({
  bottomSelector,
  bottomOffset,
  elementHasEffect,
  toggleFn,
}: SpyOnBottomProps): () => void;
function useScrollSpy({
  topSelector,
  topOffset,
  bottomSelector,
  bottomOffset,
  elementHasEffect,
  toggleFn,
}: SpyBothProps): () => void;
function useScrollSpy({
  topSelector,
  topOffset,
  bottomSelector,
  bottomOffset,
  elementHasEffect,
  toggleFn,
}): () => void {
  if (!topSelector) {
    return () => {
      const bottomElement = document.querySelector(bottomSelector);
      if (!(bottomElement instanceof HTMLElement)) return;

      const bottomElementIsOnScreen =
        window.innerHeight + window.scrollY >=
        bottomElement.offsetTop + bottomOffset;

      if (!elementHasEffect && !bottomElementIsOnScreen) {
        toggleFn(true);
      } else if (elementHasEffect && bottomElementIsOnScreen) {
        toggleFn(false);
      }
    };
  }

  if (!bottomSelector) {
    return () => {
      const topElement = document.querySelector(topSelector);
      if (!(topElement instanceof HTMLElement)) return;

      const topElementIsGone =
        topElement.offsetTop + topOffset <= window.scrollY;

      if (!elementHasEffect && topElementIsGone) {
        toggleFn(true);
      } else if (elementHasEffect && !topElementIsGone) {
        toggleFn(false);
      }
    };
  }

  return () => {
    const topElement = document.querySelector(topSelector);
    const bottomElement = document.querySelector(bottomSelector);

    if (
      !(topElement instanceof HTMLElement) ||
      !(bottomElement instanceof HTMLElement)
    )
      return;

    const tOffset = topOffset || 0;
    const bOffset = bottomOffset || 0;

    const topElementIsGone = topElement.offsetTop + tOffset <= window.scrollY;

    const bottomElementIsOnScreen =
      window.innerHeight + window.scrollY >= bottomElement.offsetTop + bOffset;

    if (topElementIsGone && !bottomElementIsOnScreen) {
      if (!elementHasEffect) toggleFn(true);
    } else if (elementHasEffect) {
      toggleFn(false);
    }
  };
}

export default useScrollSpy;
