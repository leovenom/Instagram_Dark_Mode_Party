import { useEffect } from "react";

import PierLandingLayout from "layouts/PierLandingLayout";
import Divider from "ui/Divider";
import { BottomFloatingCallToAction } from "ui/BottomFloatingContainer";

import MembersTestimonials from "landingPages/sharedSections/MembersTestimonials";
import HeroFullImageBackground from "landingPages/sharedSections/heroSections/HeroFullImageBackground";
import PressSection from "landingPages/sharedSections/PressSection";
import WorthItToBeHonest from "./sections/WorthItToBeHonest";
import OurInsurances from "./sections/OurInsurances";
import scrollToElementById from "helpers/scrollToElementById";
import Button from "ui/Button";
import Badges from "landingPages/sharedComponents/Badges";
import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import { generalTracker } from "helpers/mixpanelTracker";
import pressData from "landingPages/pressRelease/data";

import data from "./data";

const BASE_TRACKING_NAME = "Landing Page";

const handleKnowInsurancesButtonClick = () => {
  generalTracker.trackButton(`${BASE_TRACKING_NAME} Know More`);
  scrollToElementById("our-insurances-section");
};

const PierLanding = () => {
  useEffect(() => {
    generalTracker.trackScreen(`${BASE_TRACKING_NAME}`);
  }, []);

  return (
    <PierLandingLayout
      fixedHeader
      pageTitle="Pier - Seu carro e celular segurados por quem se importa!"
      canonicalLink="https://www.pier.digital/"
    >
      <HeroFullImageBackground
        title={data.mainContent.title}
        subtitle={data.mainContent.subtitle}
        imageSrc={data.mainContent.imageSrc}
        imageDescription={data.mainContent.imageDescription}
      >
        <Button
          fullWidth
          id="main-cta-home"
          variant="secondary"
          onClick={handleKnowInsurancesButtonClick}
        >
          Conheça nossos seguros
        </Button>
        <Badges sourcePage={BASE_TRACKING_NAME} />
      </HeroFullImageBackground>
      <ThreeItemsSection
        title={data.aNewInsuranceGeneration.title}
        subtitle={data.aNewInsuranceGeneration.subtitle}
        items={data.aNewInsuranceGeneration.items}
      />
      <Divider large />
      <OurInsurances />
      <Divider large mobileOnly />
      <WorthItToBeHonest />
      <Divider large />
      <MembersTestimonials testimonials={data.testimonials} />
      <PressSection pressList={pressData.press} />
      <BottomFloatingCallToAction
        buttonText="Conheça nossos seguros"
        target="our-insurances-section"
        onClick={() => {
          generalTracker.trackButton(`${BASE_TRACKING_NAME} Our Insurances`, {
            floating: true,
          });
        }}
        spyParams={{
          topSelector: "#main-cta-home",
          topOffset: 100,
        }}
      />
    </PierLandingLayout>
  );
};

export default PierLanding;
