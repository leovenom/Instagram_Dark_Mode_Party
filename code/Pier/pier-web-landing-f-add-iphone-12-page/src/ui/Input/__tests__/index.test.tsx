import { renderWithTheme } from "../../../helpers/testUtils";
import Input from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(<Input />);

    expect(container).toBeDefined();
  });
});
