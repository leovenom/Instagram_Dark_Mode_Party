import Breadcrumb from ".";

import { storiesOf } from "@storybook/react";

const CRUMBS = [
  { text: "crumb 1", href: "http://google.com" },
  { text: "crumb 2", href: "http://google.com" },
];

storiesOf("Breadcrumb", module).add("Basic example", () => (
  <Breadcrumb variant="desktop" crumbs={CRUMBS} />
));
