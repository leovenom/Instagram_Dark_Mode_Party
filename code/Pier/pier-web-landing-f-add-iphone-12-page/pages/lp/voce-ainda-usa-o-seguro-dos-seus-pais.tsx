import { useEffect } from "react";
import { useRouter } from "next/router";

import Divider from "ui/Divider";
import Button from "ui/Button";
import Link from "next/link";

import { generalTracker } from "helpers/mixpanelTracker";
import data from "landingPages/auto/data";

import Badges from "landingPages/sharedComponents/Badges";
import FrequentlyAskedQuestions from "landingPages/sharedSections/FrequentlyAskedQuestions";
import HeroTwoColumns from "landingPages/lpBuilder/sections/HeroTwoColumns";
import InsuredItems from "landingPages/sharedSections/InsuredItems";
import MembersTestimonials from "landingPages/sharedSections/MembersTestimonials";
import NeedHelp from "landingPages/sharedSections/NeedHelp";
import ThreeItemsSection from "landingPages/sharedSections/ThreeItemsSection";
import TwoItemsSection from "landingPages/sharedSections/TwoItemsSection";
import AutoLandingLayout from "layouts/AutoLandingLayout";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const items = {
  itemOne: {
    title: "Pague menos por seguro de carro",
    description: "Sobra dinheiro para você gastar no que é importante",
    imageSrc: "/static_assets/images/rebranding/pink-credit-cards.svg",
    imageDescription: "Ícone de dois cartões de crédito rosas",
  },
  itemTwo: {
    title: "Gaste menos tempo com burocracia",
    description:
      "Você faz tudo pelo aplicativo na hora que quiser e sem demora",
    imageSrc:
      "/static_assets/images/rebranding/man-chilling-on-a-beach-chair.svg",
    imageDescription: "Ícone de um homem descansando em uma cadeira de praia",
  },
  itemThree: {
    title: "Protegido no que mais importa",
    description:
      "Válido para roubo e furto com direito a assistência em caso de problemas",
    imageSrc: "/static_assets/images/rebranding/man-in-the-car.svg",
    imageDescription: "Homem encostado em um carro rosa utilizando seu celular",
  },
};

const BASE_TRACKING_NAME = "Mkt Landing Page";

const AutoLanding = () => {
  const router = useRouter();

  useEffect(() => {
    generalTracker.trackScreen(BASE_TRACKING_NAME, { url: router.pathname });
  }, []);

  return (
    <>
      <AutoLandingLayout
        allowTransparentHeader
        fixedHeader={false}
        pageTitle="Pier Seguro Auto - Seu carro protegido por quem se importa"
        canonicalLink="https://www.pier.digital/seguro-auto/lp/voce-ainda-usa-o-seguro-dos-seus-pais"
      >
        <HeroTwoColumns
          mt={24}
          textMaxWidth={380}
          title="Você ainda usa o seguro dos seus pais?"
          subtitle="Contrate e receba rápido. Pague um preço justo. Seja protegido por quem se importa."
          imageSrc="/static_assets/images/rebranding/man-with-sunglasses.png"
          imageDescription="Homem de óculos escuro sentado no carro com a porta aberta"
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
                generalTracker.trackButton(`${BASE_TRACKING_NAME} Quote`, {
                  url: router.pathname,
                })
              }
            >
              Faça sua cotação
            </Button>
          </Link>
          <Badges sourcePage="Landing Page Auto" />
        </HeroTwoColumns>

        <ThreeItemsSection
          id="essential-insurance"
          spyThisElement
          title="O Seguro Pier Auto é para você?"
          description="Um seguro digital, sem burocracia ,e que não te penaliza pela sua idade"
          items={items}
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

        <TwoItemsSection
          id="borrowed-trusting"
          coloredBg="gray200"
          items={data.trust.data}
        />

        <MembersTestimonials
          spyThisElement
          testimonials={data.testimonials}
          product="auto"
        />

        <FrequentlyAskedQuestions
          spyThisElement
          product="auto"
          questions={data.faq.questions}
        />

        <NeedHelp spyThisElement sourcePage={BASE_TRACKING_NAME} />
      </AutoLandingLayout>
    </>
  );
};

export default AutoLanding;
