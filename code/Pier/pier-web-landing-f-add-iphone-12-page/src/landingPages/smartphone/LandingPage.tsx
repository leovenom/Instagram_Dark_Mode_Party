import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import scrollToElementById from "helpers/scrollToElementById";
import useIntercom from "hooks/useIntercom";
import Divider from "ui/Divider";
import { BottomFloatingCallToAction } from "ui/BottomFloatingContainer";
import SmartphoneLandingLayout from "layouts/SmartphoneLandingLayout";
import InsuredItems from "../sharedSections/InsuredItems";
import MembersTestimonials from "../sharedSections/MembersTestimonials";
import FrequentlyAskedQuestions from "../sharedSections/FrequentlyAskedQuestions";
import FastRefund from "landingPages/smartphone/sections/FastRefund";
import ChooseYourPlan from "landingPages/smartphone/sections/ChooseYourPlan";
import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import HeroTwoColumns from "landingPages/sharedSections/heroSections/HeroTwoColumns";
import Button from "ui/Button";
import Badges from "landingPages/sharedComponents/Badges";
import SmartphoneSelector from "modules/smartphone/SmartphoneSelector";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import { withModalManagementActions } from "modules/shared/ModalManagement";
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

  // const [selectedSmartphone, setSelectedSmartphone] = useLocalStorage(
  //   "smartphoneModel",
  //   null
  // );

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

  useEffect(() => {
    smartphoneTracker.trackScreen("Landing Page");
  }, [smartphoneTracker]);

  useEffect(() => {
    if (cotacao) {
      toggleSmartphoneSelector();
    }
  }, [cotacao]);

  useEffect(() => {
    if (showIntercom) {
      openIntercom();
    }
  }, [showIntercom]);

  const openSmartphoneSelector = () => {
    smartphoneTracker.trackButton("Landing Page Quote");
    toggleSmartphoneSelector();
  };

  return (
    <>
      <SmartphoneLandingLayout
        fixedHeader
        pageTitle="Pier - Mais que um seguro para celular: proteção!"
        canonicalLink="https://www.pier.digital/seguro-celular"
      >
        <HeroTwoColumns
          title={data.mainContent.title}
          subtitle={data.mainContent.subtitle}
          imageSrc={data.mainContent.imageSrc}
          imageDescription={data.mainContent.imageDescription}
        >
          <Button
            id="main-quote-btn"
            onClick={openSmartphoneSelector}
            variant="secondary"
            fullWidth
            data-tracking="cta-quote-smartphone"
          >
            Ver preços
          </Button>
          <Badges sourcePage="Landing Page Smartphone" />
        </HeroTwoColumns>
        <div id="chose-your-plan-section">
          {selectedSmartphone && (
            <ChooseYourPlan
              selectedSmartphone={selectedSmartphone}
              toggleSmartphoneSelector={toggleSmartphoneSelector}
            />
          )}
        </div>
        <ThreeItemsSection
          title={data.ourProtection.title}
          subtitle={data.ourProtection.subtitle}
          items={data.ourProtection.items}
        />
        <Divider large />
        <InsuredItems
          description="COBERTURAS"
          title="O que cobrimos"
          covered
          insuredItems={data.insuredItems}
        />
        <InsuredItems
          title="O que não cobrimos"
          subtitle="Transparência em 1º lugar! Confira os itens que não estão inclusos em nossa cobertura:"
          bgColor="gray200"
          covered={false}
          insuredItems={data.notInsuredItems}
        />
        <FastRefund />
        <Divider large />
        <MembersTestimonials testimonials={data.testimonials} />
        <Divider large />
        <FrequentlyAskedQuestions
          product="smartphone"
          questions={data.faq.questions}
        />
      </SmartphoneLandingLayout>

      {!selectedSmartphone && (
        <BottomFloatingCallToAction
          buttonText="Ver preços"
          onClick={openSmartphoneSelector}
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
