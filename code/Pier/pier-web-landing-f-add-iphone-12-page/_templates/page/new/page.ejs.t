---
to: pages//<%= name %>.tsx
---
import React from "react";

import Grid from "../ui/Grid";
import GridItem from "../ui/GridItem";
import Text from "../ui/Text";
import LandingLayout from "../layouts/LandingLayout";


<%
 ComponentName = h.camelize(name)
%>

const  <%= ComponentName %> = () => (
  <LandingLayout pageTitle=" - Pier">
    <Grid>
      <GridItem m={2} t={8} d={12}>
        <Text variant="section"> <%= ComponentName %></Text>
      </GridItem>
    </Grid>
  </LandingLayout>
);

export default <%= ComponentName %>;

