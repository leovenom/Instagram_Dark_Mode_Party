import { render } from "@testing-library/react";

import Logo from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = render(<Logo />);

    expect(container).toBeDefined();
  });
});
