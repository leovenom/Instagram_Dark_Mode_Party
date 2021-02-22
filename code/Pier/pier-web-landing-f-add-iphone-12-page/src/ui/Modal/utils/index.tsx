const toggleScroll = ({ shouldHide = true }: { shouldHide: boolean }) => {
  const hideTheScroll =
    "position: relative; overflow: hidden; touch-action: none; -ms-touch-action: none; ";
  const enableTheScroll =
    "position: initial; overflow: initial; touch-action: auto; -ms-touch-action: auto; ";
  const htmlEl = document.querySelector("html");
  const htmlBody = document.querySelector("body");

  if (shouldHide) {
    htmlEl.setAttribute("style", hideTheScroll);
    htmlBody.setAttribute("style", hideTheScroll);
  } else {
    htmlEl.setAttribute("style", enableTheScroll);
    htmlBody.setAttribute("style", enableTheScroll);
  }
};

export { toggleScroll };
