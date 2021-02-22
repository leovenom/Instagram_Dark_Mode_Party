import HeroCenteredContent from "landingPages/sharedSections/heroSections/HeroCenteredContent";
import data from "../data";

const Header = () => (
  <HeroCenteredContent
    bg="orange400"
    title={data.header.title}
    subtitle={data.header.subtitle}
    imageSrc={data.header.imageSrc}
    imageDescription={data.header.imageDescription}
    withoutTabs
  />
);

export default Header;
