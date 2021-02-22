import PierLandingLayout from "layouts/PierLandingLayout";
import data from "./data";
import ExternalLink from "ui/ExternalLink";
import WhyDoWeWakeUpEveryDay from "./sections/WhyDoWeWakeUpEveryDay";
import RelevantNumbers from "./sections/RelevantNumbers";
import HeroCenteredContent from "landingPages/sharedSections/heroSections/HeroCenteredContent";
import PressSection from "landingPages/sharedSections/PressSection";

const PIER_PRESS_EMAIL = "imprensa@pier.digital";

const PressReleaseLanding = () => {
  return (
    <PierLandingLayout
      fixedHeader
      pageTitle="Pier - Imprensa"
      canonicalLink="https://www.pier.digital/imprensa"
    >
      <HeroCenteredContent
        bg="secondary100"
        title={data.mainContent.title}
        subtitle={data.mainContent.subtitle}
        imageSrc={data.mainContent.imageSrc}
        imageDescription={data.mainContent.imageDescription}
      >
        <ExternalLink href={`mailto:${PIER_PRESS_EMAIL}`}>
          {PIER_PRESS_EMAIL}
        </ExternalLink>
      </HeroCenteredContent>
      <WhyDoWeWakeUpEveryDay />
      <RelevantNumbers />
      <PressSection pressList={data.press} />
    </PierLandingLayout>
  );
};

export default PressReleaseLanding;
