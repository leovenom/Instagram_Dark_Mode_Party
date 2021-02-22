---
to: components//sections/<%= name %>.tsx
---
import React from "react";

import Grid from "../../ui/Grid";
import GridItem from "../../ui/GridItem";
import Text from "../../ui/Text";

import Section from "../Section";

import breakpoints from "../../ui/theme/breakpoints";

<%
 ComponentName = h.capitalize(name)
%>

const  <%= ComponentName %> = () => (
  <Section>
    <Grid>
      <GridItem m={2} t={3} d={6}>
        <Text variant="section">Título da seção</Text>
      </GridItem>
      <GridItem m={2} t={4} d={6}>
        <Text variant="bodyLarge">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quod
          accusamus dolorum expedita voluptatem cumque eligendi commodi quae,
          perferendis eos eaque illo porro natus reprehenderit ipsa rerum maxime
          ipsam velit.
        </Text>
      </GridItem>
    </Grid>
  </Section>
);

export default <%= ComponentName %>;

