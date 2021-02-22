import { render } from "@testing-library/react";

import Slide from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = render(<Slide>Conteúdo do slide</Slide>);

    expect(container).toBeDefined();
  });
});
