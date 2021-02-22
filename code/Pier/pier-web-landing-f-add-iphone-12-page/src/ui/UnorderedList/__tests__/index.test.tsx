import { renderWithTheme } from "../../../helpers/testUtils";
import Unorderedlist from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(<Unorderedlist />);

    expect(container).toBeDefined();
  });
});
