import { render } from "@testing-library/react";

import Slideshow from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = render(
      <Slideshow slides={1} startAt={0}>
        <div>Conteúdo do slideshow</div>
      </Slideshow>
    );

    expect(container).toBeDefined();
  });
});
