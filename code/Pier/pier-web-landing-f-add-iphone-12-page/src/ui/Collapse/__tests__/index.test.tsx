import { renderWithTheme } from "../../../helpers/testUtils";
import Collapse from "..";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(
      <Collapse>
        <Collapse.Title>Title</Collapse.Title>
        <Collapse.Content>Body</Collapse.Content>
      </Collapse>
    );

    expect(container).toBeDefined();
  });
});
