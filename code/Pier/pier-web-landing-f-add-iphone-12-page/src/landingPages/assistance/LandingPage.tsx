import HeroTwoColumns from "landingPages/sharedSections/heroSections/HeroTwoColumns";
import HowToSection from "landingPages/assistance/sections/HowToUse";
import InsuredItems from "landingPages/sharedSections/InsuredItems";
import NeedHelp from "landingPages/sharedSections/NeedHelp";
import Divider from "ui/Divider";
import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import data from "./data";

const Assistance = ({ baseTracking }) => {
  return (
    <>
      <HeroTwoColumns
        title={data.mainContent.title}
        subtitle={data.mainContent.subtitle}
        imageSrc={data.mainContent.imageSrc}
        imageDescription={data.mainContent.imageDescription}
      />

      <ThreeItemsSection
        title={data.howItWorks.title}
        subtitle={data.howItWorks.subtitle}
        items={data.howItWorks.items}
      />
      <HowToSection title={data.howToUse.title} details={data.howToUse.steps} />
      <Divider large mobileOnly />
      <InsuredItems
        title="Os serviços"
        subtitle="Confira nossa Cobertura e Assistências 24h."
        covered
        insuredItems={data.insuredItems}
      />

      <NeedHelp sourcePage={baseTracking} />
    </>
  );
};

export default Assistance;
