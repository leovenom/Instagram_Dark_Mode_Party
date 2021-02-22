import { storiesOf } from "@storybook/react";

import BulletPoint from ".";

storiesOf("Components | BulletPoint", module).add("Basic", () => (
  <BulletPoint text="Example" variant="checked" />
));
