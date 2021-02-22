import { renderWithTheme } from "../../../helpers/testUtils";
import Grid from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(<Grid>Conteúdo do grid</Grid>);

    expect(container).toBeDefined();
  });
});
