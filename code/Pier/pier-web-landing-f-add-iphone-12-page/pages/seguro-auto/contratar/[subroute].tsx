import { useEffect } from "react";
import { useRouter } from "next/router";

import Divider from "ui/Divider";
import Button from "ui/Button";
import Link from "next/link";

import useLocalStorage from "hooks/useLocalStorage";
import { autoTracker } from "helpers/mixpanelTracker";
import SectionScrollSpy from "landingPages/auto/components/SectionScrollSpy";
import ShoppingCart from "landingPages/auto/components/ShoppingCart";
import data from "landingPages/auto/data";
import QuoteOnline from "landingPages/auto/sections/QuoteOnline";
import SolveByApp from "landingPages/auto/sections/SolveByTheApp";
import Badges from "landingPages/sharedComponents/Badges";
import FrequentlyAskedQuestions from "landingPages/sharedSections/FrequentlyAskedQuestions";
import HeroTwoColumns from "landingPages/sharedSections/heroSections/HeroTwoColumns";
import InsuredItems from "landingPages/sharedSections/InsuredItems";
import MembersTestimonials from "landingPages/sharedSections/MembersTestimonials";
import NeedHelp from "landingPages/sharedSections/NeedHelp";
import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import TwoItemsSection from "landingPages/sharedSections/TwoItemsSection";
import AutoLandingLayout from "layouts/AutoLandingLayout";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";
import {
  getAutoPageByRoute,
  getAutoMarketingPages,
} from "services/datoCms/api";

const BASE_TRACKING_NAME = "Landing Page";

const SECTIONS = [
  { name: "O que oferecemos", id: "essential-insurance" },
  { name: "Coberturas", id: "insured-items" },
  { name: "Não cobrimos", id: "not-insured-items" },
  { name: "Como cotar", id: "quote-online" },
  { name: "Como acionar", id: "everything-on-app" },
  { name: "Comentários", id: "members-testimonials" },
  { name: "Perguntas frequentes", id: "section-faq" },
  { name: "Ajuda", id: "need-help" },
];

const AutoLanding = ({ productPage }) => {
  const router = useRouter();
  const { utm_source } = router.query;
  const [utmSource, setUtmSource] = useLocalStorage("utmSource", null);

  const [page] = productPage;
  useEffect(() => {
    autoTracker.trackScreen(`${BASE_TRACKING_NAME}`, {
      reference: page.subroute,
    });

    if (utm_source) {
      setUtmSource(utm_source);
    }
  }, [page.subroute, router.query]);

  if (!productPage) return null;

  return (
    <>
      <AutoLandingLayout
        allowTransparentHeader
        fixedHeader={false}
        pageTitle="Pier Seguro Auto - Seu carro protegido por quem se importa"
        canonicalLink={null}
      >
        <SectionScrollSpy sections={SECTIONS} />

        <HeroTwoColumns
          mt={24}
          textMaxWidth={380}
          title={page.title || data.mainContent.title}
          subtitle={page.description || data.mainContent.subtitle}
          imageSrc={data.mainContent.imageSrc}
          imageDescription={data.mainContent.imageDescription}
        >
          <Link href={STEPS_CONFIG.LICENSE_PLATE.PATH}>
            <Button
              href={STEPS_CONFIG.LICENSE_PLATE.PATH}
              id="main-quote-btn"
              data-tracking="cta-quote-auto"
              asLink
              variant="secondary"
              fullWidth
              onClick={() =>
                autoTracker.trackButton(`${BASE_TRACKING_NAME} Quote`)
              }
            >
              {page.buttonText || "Cotar online"}
            </Button>
          </Link>
          <Badges sourcePage="Landing Page Auto" />
        </HeroTwoColumns>

        <ThreeItemsSection
          id="essential-insurance"
          spyThisElement
          title={data.ourProtection.title}
          description={data.ourProtection.description}
          items={data.ourProtection.items}
        />

        <Divider large />

        <InsuredItems
          id="insured-items"
          spyThisElement
          description="Coberturas"
          title="O que cobrimos"
          subtitle="Além da cobertura, você pode usar 1 assistência todo mês em qualquer lugar do Brasil"
          covered
          insuredItems={data.insuredItems}
        />

        <InsuredItems
          id="not-insured-items"
          spyThisElement
          covered={false}
          description="É importante saber"
          title="O que não cobrimos"
          bgColor="gray200"
          insuredItems={data.notInsuredItems}
        />

        <QuoteOnline />
        <Divider large />

        <SolveByApp />
        <Divider large />

        <MembersTestimonials
          spyThisElement
          testimonials={data.testimonials}
          product="auto"
        />

        <TwoItemsSection
          id="borrowed-trusting"
          coloredBg="gray200"
          items={data.trust.data}
        />

        <FrequentlyAskedQuestions
          spyThisElement
          product="auto"
          questions={data.faq.questions}
        />

        <NeedHelp spyThisElement sourcePage={BASE_TRACKING_NAME} />
      </AutoLandingLayout>

      <ShoppingCart
        variant="mobile-bottom-fixed"
        quoteEvent={() =>
          autoTracker.trackButton(`${BASE_TRACKING_NAME} Quote`, {
            floating: true,
          })
        }
        spyParams={{
          topSelector: "#main-quote-btn",
          topOffset: -50,
        }}
      />
    </>
  );
};

export async function getStaticPaths() {
  const productPages = await getAutoMarketingPages();

  const allParams = productPages
    ? productPages.map(({ subroute }) => ({
        params: { subroute },
      }))
    : [];

  return {
    paths: allParams,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productPage = await getAutoPageByRoute(params.subroute);

  return {
    props: {
      productPage,
    },
  };
}

export default AutoLanding;
