import Tabs from ".";

import { storiesOf } from "@storybook/react";

storiesOf("Tabs", module).add("Basic example", () => (
  <Tabs>
    <Tabs.Item>Seguro auto</Tabs.Item>
    <Tabs.Item>Seguro smartphone</Tabs.Item>
  </Tabs>
));
