---
to: ui//<%= name %>/__tests__/index.test.tsx
---

<%
 ComponentName = h.capitalize(name)
%>

import React from "react";
import { render } from "@testing-library/react";

import <%= ComponentName %> from "../index";

describe("should have a default test ", () => {
  test("should have a least one spec", () => {
    const { container } = render(< <%= ComponentName %> />);

    expect(container).toBeDefined();
  });
});
