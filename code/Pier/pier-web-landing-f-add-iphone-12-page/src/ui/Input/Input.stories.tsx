import Input from ".";

import { storiesOf } from "@storybook/react";

storiesOf("Components | Input", module)
  .add("Basic", () => <Input />)
  .add("With Label", () => <Input label="Name" />)
  .add("With Mask", () => <Input label="IMEI" mask="imei" />)
  .add("With Error", () => <Input label="Name" error="Example" />)
  .add("Type Payment", () => <Input mask="card" type="payment" />);
