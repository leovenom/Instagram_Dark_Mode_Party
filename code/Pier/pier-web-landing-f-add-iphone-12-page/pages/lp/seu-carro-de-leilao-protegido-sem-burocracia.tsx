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
    title: "Economize no seguro",
    description:
      "Contrate uma cobertura simplificada e economize até R$600 reais no ano com seguro",
    imageSrc: "/static_assets/images/rebranding/pink-credit-cards.svg",
    imageDescription: "Ícone de dois cartões de crédito rosas",
  },
  itemTwo: {
    title: "Compre e cancele quando quiser",
    description:
      "Baixe o app e faça a gestão do seu seguro por lá, na sua hora e sem burocracia",
    imageSrc: "/static_assets/images/rebranding/man-in-the-car.svg",
    imageDescription: "Homem encostado em um carro rosa utilizando seu celular",
  },
  itemThree: {
    title: "Não seja prejudicado",
    description:
      "Receba reembolso de acordo com o valor de compra do seu carro",
    imageSrc:
      "/static_assets/images/rebranding/man-chilling-on-a-beach-chair.svg",
    imageDescription: "Ícone de um homem descansando em uma cadeira de praia",
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
        canonicalLink="https://www.pier.digital/seguro-auto/lp/seu-carro-de-leilao-protegido-sem-burocracia"
      >
        <HeroTwoColumns
          mt={24}
          textMaxWidth={380}
          title="Seu carro de leilão não precisa ficar sem seguro"
          subtitle="Pague a partir de R$32,90 e receba reembolso de acordo com o valor de compra"
          imageSrc="/static_assets/images/rebranding/woman-holding-a-key-car.jpg"
          imageDescription="Mulher olhando pela janela do carrro segundo a chave do seu carro"
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
                generalTracker.trackButton(`${BASE_TRACKING_NAME} Quote`)
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
          title="Vantagens do Seguro Auto Pier"
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
