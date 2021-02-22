import { render } from "@testing-library/react";
import { renderWithTheme } from "../../../helpers/testUtils";
import Tabs from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = renderWithTheme(
      <Tabs>
        <Tabs.Item>Seguro auto</Tabs.Item>
        <Tabs.Item>Seguro smartphone</Tabs.Item>
      </Tabs>
    );

    expect(container).toBeDefined();
  });
});
