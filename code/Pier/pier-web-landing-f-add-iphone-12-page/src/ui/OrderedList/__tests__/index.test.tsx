import { renderWithTheme } from "../../../helpers/testUtils";
import Orderedlist from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(<Orderedlist />);

    expect(container).toBeDefined();
  });
});
