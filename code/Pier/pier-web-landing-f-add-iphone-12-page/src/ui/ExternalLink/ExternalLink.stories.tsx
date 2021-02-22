import Externallink from ".";

import { storiesOf } from "@storybook/react";

storiesOf("Externallink", module).add("Basic example", () => (
  <Externallink href="https://google.com">Ir para o Google</Externallink>
));
