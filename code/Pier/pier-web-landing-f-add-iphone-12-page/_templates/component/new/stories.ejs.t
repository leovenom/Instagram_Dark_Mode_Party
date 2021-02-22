---
to: ui//<%= name %>/<%= name %>.stories.tsx
---

<%
 ComponentName = h.capitalize(name)
%>

import React from "react";

import <%= ComponentName %> from ".";

import { storiesOf } from "@storybook/react";

 storiesOf("<%= ComponentName %>", module)
   .add("Basic example", () => < <%= ComponentName %> />);
  