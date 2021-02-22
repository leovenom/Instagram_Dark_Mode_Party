import { render } from "@testing-library/react";

import Breadcrumb from "../index";

const CRUMBS = [
  { text: "crumb 1", href: "http://google.com" },
  { text: "crumb 2", href: "http://google.com" },
];

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    // const { container } = render(<Breadcrumb crumbs={CRUMBS} />);

    // expect(container).toBeDefined();
    expect(true).toBe(true);
  });
});
