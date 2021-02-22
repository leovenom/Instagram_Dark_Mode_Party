import { render } from "@testing-library/react";

import Text from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = render(<Text variant="caption"> Texto aqui </Text>);

    expect(container).toBeDefined();
  });
});
