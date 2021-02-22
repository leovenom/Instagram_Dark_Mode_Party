import { renderWithTheme } from "../../../helpers/testUtils";
import BulletPoint from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(
      <BulletPoint text="Example" variant="checked" />
    );

    expect(container).toBeDefined();
  });
});
