---
to: ui//<%= name %>/index.tsx
---
import React from "react";

<%
 ComponentName = h.capitalize(name)
%>

const <%= ComponentName %> = () => (
    <div>My  <%= ComponentName %> Component </div>
)

export default <%= ComponentName %>;

