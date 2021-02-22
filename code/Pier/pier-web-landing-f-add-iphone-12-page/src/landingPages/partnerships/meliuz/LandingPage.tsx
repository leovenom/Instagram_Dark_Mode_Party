import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { useRouter } from "next/router";
import scrollToElementById from "helpers/scrollToElementById";
import Button from "ui/Button";
import Divider from "ui/Divider";
import styled from "styled-components";

import SmartphoneLandingLayout from "layouts/SmartphoneLandingLayout";
import HowItWorksCollapsable from "./sections/HowItWorksCollapsable";
import InsuredItems from "landingPages/sharedSections/InsuredItems";
import MembersTestimonials from "landingPages/sharedSections/MembersTestimonials";
import HeroTwoColumns from "landingPages/sharedSections/heroSections/HeroTwoColumns";
import FrequentlyAskedQuestions from "landingPages/sharedSections/FrequentlyAskedQuestions";
import FastRefund from "landingPages/smartphone/sections/FastRefund";
import ChooseYourPlan from "landingPages/smartphone/sections/ChooseYourPlan";
import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import { smartphoneTracker } from "helpers/mixpanelTracker";
import SmartphoneSelector from "modules/smartphone/SmartphoneSelector";

import data from "./data";
import toSnakeUppercase from "helpers/toSnakeUppercase";
import { withModalManagementActions } from "modules/shared/ModalManagement";

const MELIUZ_LOGO_SRC = "/static_assets/images/rebranding/meliuz-logo.png";

const PartnerContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;

  img {
    margin-left: 8px;
    max-width: 100px;
  }
`;

interface Props {
  smartphoneModels: [];
  plansValues: {};
  openModal: (arg) => void;
}

const LandingPage: React.FC<Props> = ({
  smartphoneModels,
  plansValues,
  openModal,
}) => {
  const [, setCookie] = useCookies(["channel", "meliuz_xtra"]);
  const router = useRouter();

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

  const handleClickSmartphoneSelector = () => {
    smartphoneTracker.trackButton("Meliuz Landing Page");
    toggleSmartphoneSelector();
  };

  useEffect(() => {
    smartphoneTracker.trackScreen("Meliuz Landing Page");
  }, [smartphoneTracker]);

  useEffect(() => {
    const xtra = router.query.xtra;
    setCookie("channel", "MELIUZ", {
      path: "/",
      secure: true,
      sameSite: "none",
    });
    setCookie("meliuz_xtra", xtra, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
  }, [router, setCookie]);

  return (
    <>
      <SmartphoneLandingLayout
        fixedHeader
        pageTitle="Pier - Parceria Meliuz"
        canonicalLink="https://www.pier.digital/parcerias/meliuz"
      >
        <HeroTwoColumns
          title={data.mainContent.title}
          subtitle={data.mainContent.subtitle}
          imageSrc={data.mainContent.imageSrc}
          imageDescription={data.mainContent.imageDescription}
        >
          <Button
            mb={24}
            onClick={handleClickSmartphoneSelector}
            variant="secondary"
            fullWidth
          >
            Ver preços
          </Button>
          <PartnerContainer>
            Uma parceria{" "}
            <img src={MELIUZ_LOGO_SRC} alt="Logo da marca Meliuz" />
          </PartnerContainer>
        </HeroTwoColumns>
        <HowItWorksCollapsable />
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
    </>
  );
};

export default withModalManagementActions(LandingPage);
