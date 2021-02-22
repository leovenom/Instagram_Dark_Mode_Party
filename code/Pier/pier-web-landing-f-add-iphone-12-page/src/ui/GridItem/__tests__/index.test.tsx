import { render } from "@testing-library/react";

import Griditem from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = render(<Griditem />);

    expect(container).toBeDefined();
  });
});
