import { renderWithTheme } from "../../../helpers/testUtils";
import Divider from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(<Divider />);

    expect(container).toBeDefined();
  });
});
