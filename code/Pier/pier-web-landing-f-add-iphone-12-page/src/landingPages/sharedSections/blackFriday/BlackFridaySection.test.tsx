import { fireEvent } from "@testing-library/react";
import { renderWithTheme } from "helpers/testUtils";

import BlackFridaySection from "./BlackFridaySection";
import data from "./data";

describe("<BlackFridaySection />", () => {
  describe("when smartphone variant is selected", () => {
    it("should render section for smartphone product", () => {
      const { getByText, getByAltText } = renderWithTheme(
        <BlackFridaySection variant="smartphone" onClickCTA={() => {}} />
      );

      getByText(data.smartphone.title);
      getByText(data.smartphone.description);
      getByText(data.smartphone.callToAction);
      getByAltText(data.smartphone.imageDescription);
    });
  });

  describe("when auto variant is selected", () => {
    it("should render section for auto product", () => {
      const { getByText, getByAltText } = renderWithTheme(
        <BlackFridaySection variant="auto" onClickCTA={() => {}} />
      );

      getByText(data.auto.title);
      getByText(data.auto.description);
      getByText(data.auto.callToAction);
      getByAltText(data.auto.imageDescription);
    });
  });

  describe("when default variant is selected", () => {
    it("should render default section", () => {
      const { getByText, getByAltText } = renderWithTheme(
        <BlackFridaySection variant="default" onClickCTA={() => {}} />
      );

      getByText(data.default.title);
      getByText(data.default.description);
      getByText(data.default.callToAction);
      getByAltText(data.default.imageDescription);
    });
  });

  describe("when user clicks on cta", () => {
    it("should trigger click handler", () => {
      const onClickHandler = jest.fn();
      const { getByText } = renderWithTheme(
        <BlackFridaySection onClickCTA={onClickHandler} />
      );
      fireEvent.click(getByText(data.default.callToAction));
      expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
