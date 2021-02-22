import Divider from "ui/Divider";

import data from "landingPages/auto/data";
import QuoteOnline from "landingPages/auto/sections/QuoteOnline";
import SolveByApp from "landingPages/auto/sections/SolveByTheApp";
import FrequentlyAskedQuestions from "landingPages/sharedSections/FrequentlyAskedQuestions";
import InsuredItems from "landingPages/sharedSections/InsuredItems";
import MembersTestimonials from "landingPages/sharedSections/MembersTestimonials";
import NeedHelp from "landingPages/sharedSections/NeedHelp";
import TwoItemsSection from "landingPages/sharedSections/TwoItemsSection";

enum DefaultSectionVariants {
  InsuredItems = 1,
  NotInsuredItems = 2,
  QuoteOnline = 3,
  SolveByApp = 4,
  MembersTestimonials = 5,
  TrustSection = 6,
  FrequentlyAskedQuestions = 7,
  NeedHelp = 8,
}

const BASE_TRACKING_NAME = "Landing Page";

const getDefaultSection = (sectionVariant: DefaultSectionVariants) => {
  switch (sectionVariant) {
    case DefaultSectionVariants.InsuredItems:
      return (
        <InsuredItems
          id="insured-items"
          spyThisElement
          description="Coberturas"
          title="O que cobrimos"
          subtitle="Além da cobertura, você pode usar 1 assistência todo mês em qualquer lugar do Brasil"
          covered
          insuredItems={data.insuredItems}
        />
      );
    case DefaultSectionVariants.NotInsuredItems:
      return (
        <InsuredItems
          id="not-insured-items"
          spyThisElement
          covered={false}
          description="É importante saber"
          title="O que não cobrimos"
          bgColor="gray200"
          insuredItems={data.notInsuredItems}
        />
      );
    case DefaultSectionVariants.QuoteOnline:
      return (
        <>
          <QuoteOnline />
          <Divider large />
        </>
      );
    case DefaultSectionVariants.SolveByApp:
      return (
        <>
          <SolveByApp />
          <Divider large />
        </>
      );

    case DefaultSectionVariants.MembersTestimonials:
      return (
        <MembersTestimonials
          spyThisElement
          testimonials={data.testimonials}
          product="auto"
        />
      );
    case DefaultSectionVariants.TrustSection:
      return (
        <TwoItemsSection
          id="borrowed-trusting"
          coloredBg="gray200"
          items={data.trust.data}
        />
      );
    case DefaultSectionVariants.FrequentlyAskedQuestions:
      return (
        <FrequentlyAskedQuestions
          spyThisElement
          product="auto"
          questions={data.faq.questions}
        />
      );
    case DefaultSectionVariants.NeedHelp:
      return <NeedHelp spyThisElement sourcePage={BASE_TRACKING_NAME} />;
    default:
      return null;
  }
};

export default getDefaultSection;
