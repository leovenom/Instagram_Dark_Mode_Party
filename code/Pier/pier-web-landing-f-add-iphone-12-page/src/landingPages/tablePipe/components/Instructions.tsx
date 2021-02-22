import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import data from "../data";

const Instructions = () => (
  <ThreeItemsSection
    title={data.instructions.title}
    subtitle={data.instructions.subtitle}
    items={data.instructions.items}
  />
);

export default Instructions;
