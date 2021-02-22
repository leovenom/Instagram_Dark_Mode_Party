import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import scrollToElementById from "helpers/scrollToElementById";
import useIntercom from "hooks/useIntercom";
import Button from "ui/Button";
import Divider from "ui/Divider";
import { BottomFloatingCallToAction } from "ui/BottomFloatingContainer";
import SmartphoneLandingLayout from "layouts/SmartphoneLandingLayout";
import MembersTestimonials from "../sharedSections/MembersTestimonials";
import HeroFullImageBackground from "landingPages/sharedSections/heroSections/HeroFullImageBackground";
import ChooseYourPlan from "landingPages/smartphone/sections/ChooseYourPlan";
import EnjoyYourIPhone from "landingPages/iphone/sections/EnjoyYourIPhone";
import Badges from "landingPages/sharedComponents/Badges";

import FreedomToStayAsLongAsYouWant from "landingPages/iphone/sections/FreedomToStayAsLongAsYouWant";
import NoInvoiceNoProblems from "landingPages/iphone/sections/NoInvoiceNoProblems";
import WeHelpYouToCompare from "landingPages/iphone/sections/WeHelpYouToCompare";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import { withModalManagementActions } from "modules/shared/ModalManagement";
import SmartphoneSelector from "modules/smartphone/SmartphoneSelector";
import toSnakeUppercase from "helpers/toSnakeUppercase";

import data from "./data";

interface Props {
  smartphoneModels: [];
  plansValues: {};
  openModal: (arg) => void;
}

const SmartphoneLanding: React.FC<Props> = ({
  smartphoneModels,
  plansValues,
  openModal,
}) => {
  const router = useRouter();
  const openIntercom = useIntercom();
  const { cotacao, show_intercom: showIntercom } = router.query;

  useEffect(() => {
    smartphoneTracker.trackScreen("Landing Page iPhone");
  }, [smartphoneTracker]);

  useEffect(() => {
    if (showIntercom) {
      openIntercom();
    }
  }, [showIntercom]);

  const [selectedSmartphone, setSelectedSmartphone] = useState(null);

  const invokeAfterSelected = (selected) => {
    const { model, memory } = selected;
    const selectedModel = `${toSnakeUppercase(model)}_${memory}`;

    setSelectedSmartphone({
      ...selected,
      plansValues: plansValues[selectedModel],
    });

    scrollToElementById("chose-your-plan-section");
  };

  const toggleSmartphoneSelector = () => {
    openModal({
      id: "smartphone-selector",
      component: (
        <SmartphoneSelector
          smartphoneModels={smartphoneModels}
          getSelectedDevice={invokeAfterSelected}
        />
      ),
      hideCloseButton: true,
    });
  };

  const handleClickSmartphoneSelector = (section = "") => {
    smartphoneTracker.trackButton(`Landing Page iPhone ${section} Quote`);
    toggleSmartphoneSelector();
  };

  useEffect(() => {
    if (cotacao) {
      toggleSmartphoneSelector();
    }
  }, [cotacao]);

  return (
    <>
      <SmartphoneLandingLayout
        fixedHeader
        pageTitle="Pier - Mais que um seguro para iphone: proteção!"
        canonicalLink="https://www.pier.digital/seguro-celular/iphone-12"
      >
        <HeroFullImageBackground
          title={data.mainContent.title}
          subtitle={data.mainContent.subtitle}
          imageSrc={data.mainContent.imageSrc}
          imageDescription={data.mainContent.imageDescription}
          titleMaxWidth={466}
        >
          <Button
            id="main-quote-btn"
            onClick={() => handleClickSmartphoneSelector("Hero")}
            variant="secondary"
            fullWidth
            data-tracking="cta-quote-smartphone"
          >
            Ver preços
          </Button>
          <Badges sourcePage="Landing Page Smartphone" />
        </HeroFullImageBackground>
        <div id="chose-your-plan-section">
          {selectedSmartphone && (
            <ChooseYourPlan
              selectedSmartphone={selectedSmartphone}
              toggleSmartphoneSelector={toggleSmartphoneSelector}
            />
          )}
        </div>

        <EnjoyYourIPhone
          device={data.device}
          imageSrc={data.enjoyYourIPhone.imageSrc}
        />

        <FreedomToStayAsLongAsYouWant
          openSmartphoneSelector={handleClickSmartphoneSelector}
          imageSrc={data.freedomToStayAsLongAsYouWant.imageSrc}
        />

        <NoInvoiceNoProblems
          device={data.device}
          openSmartphoneSelector={handleClickSmartphoneSelector}
          imageSrc={data.noInvoiceNoProblems.imageSrc}
        />

        <WeHelpYouToCompare
          device={data.device}
          openSmartphoneSelector={handleClickSmartphoneSelector}
        />

        <Divider large />

        <MembersTestimonials testimonials={data.testimonials} />
      </SmartphoneLandingLayout>
      {!selectedSmartphone && (
        <BottomFloatingCallToAction
          buttonText="Ver preços"
          onClick={handleClickSmartphoneSelector}
          spyParams={{
            topSelector: "#main-quote-btn",
            topOffset: 100,
          }}
        />
      )}
    </>
  );
};

export default withModalManagementActions(SmartphoneLanding);
