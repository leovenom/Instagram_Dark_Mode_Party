import Stepper from ".";

import { storiesOf } from "@storybook/react";

storiesOf("Stepper", module).add("Basic example", () => (
  <Stepper numberOfSteps={3} currentStep={1} />
));
