import { useEffect } from "react";
import { useRouter } from "next/router";
import useLocalStorage from "hooks/useLocalStorage";
import styled from "styled-components";

import AutoLandingLayout from "layouts/AutoLandingLayout";
import Divider from "ui/Divider";
import Button from "ui/Button";
import Link from "next/link";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

import FrequentlyAskedQuestions from "landingPages/sharedSections/FrequentlyAskedQuestions";
import ShoppingCart from "landingPages/auto/components/ShoppingCart";
import HeroTwoColumns from "landingPages/sharedSections/heroSections/HeroTwoColumns";
import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import MembersTestimonials from "landingPages/sharedSections/MembersTestimonials";
import InsuredItems from "landingPages/sharedSections/InsuredItems";
import { autoTracker } from "helpers/mixpanelTracker";
import NeedHelp from "landingPages/sharedSections/NeedHelp";
import { capitalize } from "helpers/stringUtils";
import data from "landingPages/auto/data";

const BASE_TRACKING_NAME = "Landing Page";
const TON_LOGO_SRC = "/static_assets/images/rebranding/ton-logo.svg";

const PartnerContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;

  img {
    margin-left: 8px;
    max-width: 60px;
  }
`;

const AutoLanding = () => {
  const router = useRouter();
  const { seller_id, name } = router.query;
  const [, setAutoLeadChannel] = useLocalStorage("autoLeadChannel", null);
  const title = name
    ? `${capitalize(
        String(name)
      )} te indicou para experimentar nossa proteção para auto`
    : data.mainContent.title;

  useEffect(() => {
    if (seller_id) {
      const channel = {
        name: "Ton",
        identifier: { type: "SELLER_ID", value: seller_id },
      };
      setAutoLeadChannel(channel);
    }

    autoTracker.trackScreen(BASE_TRACKING_NAME, {
      reference: "parcerias/ton",
    });
  }, [seller_id]);

  return (
    <>
      <AutoLandingLayout
        allowTransparentHeader
        fixedHeader
        pageTitle="Pier Seguro Auto - Seu carro protegido por quem se importa"
        canonicalLink="
      https://www.pier.digital/seguro-auto"
      >
        <HeroTwoColumns
          title={title}
          subtitle={data.mainContent.subtitle}
          imageSrc={data.mainContent.imageSrc}
          imageDescription={data.mainContent.imageDescription}
          mainTextMt={-360}
        >
          <Link href={STEPS_CONFIG.LICENSE_PLATE.PATH}>
            <Button
              mb={24}
              href={STEPS_CONFIG.LICENSE_PLATE.PATH}
              id="main-quote-btn"
              asLink
              variant="secondary"
              fullWidth
              onClick={() =>
                autoTracker.trackButton(`${BASE_TRACKING_NAME} Quote`)
              }
            >
              Cotação
            </Button>
          </Link>
          <PartnerContainer>
            Uma parceria <img src={TON_LOGO_SRC} alt="Logo da mara ton" />
          </PartnerContainer>
        </HeroTwoColumns>
        <ThreeItemsSection
          title={data.ourProtection.title}
          description={data.ourProtection.description}
          items={data.ourProtection.items}
        />

        <Divider large />
        <InsuredItems
          title="O que cobrimos"
          subtitle="Confira nossa cobertura e assistências 24h."
          covered
          insuredItems={data.insuredItems}
        />
        <InsuredItems
          title="O que não cobrimos"
          subtitle="Somos transparentes, confira os itens que não estão inclusos em nossa cobertura."
          bgColor="gray200"
          covered={false}
          insuredItems={data.notInsuredItems}
        />
        <MembersTestimonials testimonials={data.testimonials} product="auto" />
        <Divider large />
        <FrequentlyAskedQuestions
          product="auto"
          questions={data.faq.questions}
        />
        <NeedHelp sourcePage={BASE_TRACKING_NAME} />
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

export default AutoLanding;
