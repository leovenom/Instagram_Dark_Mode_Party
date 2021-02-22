import { render } from "@testing-library/react";

import Icon from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = render(<Icon name="lock" fill="text" />);

    expect(container).toBeDefined();
  });
});
