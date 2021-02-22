import { renderWithTheme } from "../../../helpers/testUtils";
import Banner from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(
      <Banner variant="error">
        😢 Tivemos um problema com o seu pagamento. Por favor, tente novamente
        olá mundo
      </Banner>
    );

    expect(container).toBeDefined();
  });
});
