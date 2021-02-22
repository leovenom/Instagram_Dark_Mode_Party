import { renderWithTheme } from "../../../helpers/testUtils";
import Externallink from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(
      <Externallink href="https://google.com">Ir para o Google</Externallink>
    );

    expect(container).toBeDefined();
  });
});
