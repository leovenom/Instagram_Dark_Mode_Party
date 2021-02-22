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
    title: "Contrate pelo aplicativo",
    description: "Cote, faça a vistoria e ative seu seguro pelo seu celular",
    imageSrc: "/static_assets/images/rebranding/man-in-the-car.svg",
    imageDescription: "Homem encostado em um carro rosa utilizando seu celular",
  },
  itemTwo: {
    title: "Fique tranquilo para dirigir por aí",
    description:
      "Fique protegido em caso de roubo e tenha assistência por todo país",
    imageSrc:
      "/static_assets/images/rebranding/man-chilling-on-a-beach-chair.svg",
    imageDescription: "Ícone de um homem descansando em uma cadeira de praia",
  },
  itemThree: {
    title: "Controle os gastos com seguro",
    description: "Pague menos por mês e cancele sua proteção quando quiser",
    imageSrc: "/static_assets/images/rebranding/pink-credit-cards.svg",
    imageDescription: "Ícone de dois cartões de crédito rosas",
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
        canonicalLink="https://www.pier.digital/seguro-auto/lp/seu-seguro-nao-precisa-ser-burocratico-nem-caro"
      >
        <HeroTwoColumns
          mt={24}
          textMaxWidth={380}
          title="O seguro do seu carro não precisa ser burocrático. Nem caro."
          subtitle="Resolva tudo pelo aplicativo e não seja penalizado pela sua idade. Pague a partir de R$32,90."
          imageSrc="/static_assets/images/rebranding/man-showing-pier-app-at-your-phone.jpg"
          imageDescription="Homem mostrando o aplicativo da Pier no seu smartphone"
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
              Fazer cotação
            </Button>
          </Link>
          <Badges sourcePage="Landing Page Auto" />
        </HeroTwoColumns>

        <ThreeItemsSection
          id="essential-insurance"
          spyThisElement
          title="Por que escolher o Seguro Auto Pier?"
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
