import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { CURRENT_DATE, format as formatDate } from "helpers/date";
import { autoTracker } from "helpers/mixpanelTracker";
import breakpoints from "ui/theme/breakpoints";
import AutoLandingLayout from "layouts/AutoLandingLayout";
import { HEADER_HEIGHT } from "ui/Header/styles";
import WaitingList from "modules/auto/QuotationFlow/components/steps/WaitingList";
import WaitingListSuccess from "modules/auto/QuotationFlow/components/steps/WaitingListSuccess";
import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import { STEPS } from "modules/auto/QuotationFlow/utils/constants";
import Signup from "modules/auto/Signup";
import Drawer from "ui/Drawer";
import PriceUpdatedModal from "landingPages/autoQuotation/components/PriceUpdatedModal";
import { BottomFloatingCallToAction } from "ui/BottomFloatingContainer";
import quoteApi from "services/auto/quote";
import icons from "ui/Icon/icons";

import {
  Chat,
  Covered,
  Details,
  Faq,
  Footer,
  Optionals,
  QuoteCard,
  ReclameAqui,
  ShareOptions,
  Susep,
  Testimonials,
  Uncovered,
} from "./sections";
import useStoredQuotation, { QuotationStatus } from "hooks/useStoredQuotation";
import { useToast } from "ui/Toast";
import { NotAvailableStatus } from "modules/auto/QuotationFlow/utils/constants";
import QuoteProps from "./types/QuoteProps";

const PageContent = styled.div`
  margin: ${HEADER_HEIGHT}px auto 0;
  display: grid;
  grid-template-areas:
    "intro"
    "card"
    "share"
    "optionals"
    "covered"
    "uncovered"
    "faq"
    "reclame"
    "testimonials"
    "susep"
    "chat"
    "footer";

  ${breakpoints.custom(930)} {
    max-width: 1440px;
    grid-template-columns: minmax(470px, 1fr) 460px;
    grid-template-areas:
      "intro card"
      "share card"
      "optionals card"
      "covered card"
      "uncovered card"
      "faq card"
      "reclame card"
      "testimonials card"
      "susep card"
      "chat card"
      "footer card";

    section,
    footer {
      margin-right: 56px;
      margin-left: 56px;
    }
  }

  /* FIXME: weird margin-bottom on body element */
  margin-bottom: -24px;
`;

const getCoveredCoefficientAsNumber = (value) => Number(value) * 100;

const UNLIMITED_KM_MODIFIER = "assistance_with_unlimited_km";
const UNLIMITED_KM_PRICE_IN_CENTS = 500;

const hasUnlimitedKmOnQuote = (quote) =>
  quote?.values.modifiers.includes(UNLIMITED_KM_MODIFIER);

const getBasePrice = (quote) => {
  const additionals = hasUnlimitedKmOnQuote(quote)
    ? UNLIMITED_KM_PRICE_IN_CENTS
    : 0;

  return quote.values["proposed_premium"].cents - additionals;
};

const transformQuote = (quote) => {
  return {
    vehicle: quote.model.value.attributes.name,
    coveragePercentage: getCoveredCoefficientAsNumber(
      quote.values["market_value_coefficient"]
    ),
    insurancePriceInCents: quote.values["proposed_premium"].cents,
    basePriceInCents: getBasePrice(quote),
    fipeValueInCents: quote.values["item_market_value"].cents,
    isZipCodeCovered: !quote.values["refusal_reasons"]?.includes(
      NotAvailableStatus.NOT_COVERED_ZIP_CODE
    ),
    assistanceWithUnlimitedKm: hasUnlimitedKmOnQuote(quote),
    email: quote.values["driver_email"],
    modifiers: quote.values?.modifiers || [],
  };
};

export const SCREEN_NAME = "122020 Quote Screen";

interface OptionalProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
  priceInCents: number;
  quoteCardLabel: string;
  optionalLabel: string;
}

export const OPTIONALS: OptionalProps[] = [
  {
    icon: "pin",
    title: "Guincho com km ilimitado",
    description:
      "Ao adicionar esse benefício, você poderá utilizar o serviço de guincho para deslocar o seu carro ao local desejado sem restrição de quilometragem (km).",
    priceInCents: 500,
    quoteCardLabel: "Guincho com km ilimitado",
    optionalLabel: "unlimitedKm",
  },
];

const unlimitedKmOptional = OPTIONALS[0];

const isUnlimitedKmOptionalEnabled = (optionals) => {
  return optionals.some(
    (optional) => optional?.label === unlimitedKmOptional.quoteCardLabel
  );
};

function NewLandingPage({ quotationValues }) {
  const [optionals, setOptionals] = useState<
    { label: string; priceInCents: number }[]
  >([]);
  const [isSignupDrawerOpen, setSignupDrawerState] = useState<boolean>(false);
  const [formattedQuote, setFormattedQuote] = useState<QuoteProps | null>(null);

  const toast = useToast();
  const router = useRouter();
  const {
    quotation,
    create_account: createAccount,
    show_intercom: showIntercom,
  } = router.query;
  const { currentQuote, status, setCurrentQuote } = useStoredQuotation(
    quotation?.toString()
  );

  const isLoadingQuote = () =>
    status === QuotationStatus.IDLE || status === QuotationStatus.FETCHING;

  function closeSignupDrawer() {
    setSignupDrawerState(false);
  }

  const updateUnlimitedKmModifier = async () => {
    try {
      await quoteApi.updateQuote({
        quoteId: currentQuote.quoteId,
        assistance_with_unlimited_km: isUnlimitedKmOptionalEnabled(optionals),
      });
      await quoteApi.calculatePrice(currentQuote.quoteId);
    } catch {
      toast.error("Falha ao adicionar km ilimitado na cotação");
      setOptionals([]);
      closeSignupDrawer();
    }
  };

  function openSignupDrawer() {
    setSignupDrawerState(true);
    autoTracker.trackButton(`${SCREEN_NAME} Contract`);
    updateUnlimitedKmModifier();
  }

  function addUnlimitedKmOptional() {
    setOptionals([
      ...optionals,
      {
        label: unlimitedKmOptional.quoteCardLabel,
        priceInCents: unlimitedKmOptional.priceInCents,
      },
    ]);
  }

  function addOptional(
    label: string,
    priceInCents: number,
    optionalLabel: string
  ) {
    setOptionals([...optionals, { label, priceInCents }]);
    autoTracker.trackButton(`${SCREEN_NAME} Changed`, {
      [optionalLabel]: true,
    });
  }

  function removeOptional(label: string, optionalLabel: string) {
    const remainingOptionals = optionals.filter(
      (optional) => optional.label !== label
    );
    setOptionals(remainingOptionals);
    autoTracker.trackButton(`${SCREEN_NAME} Changed`, {
      [optionalLabel]: false,
    });
  }

  useEffect(() => {
    if (currentQuote) {
      setFormattedQuote(transformQuote(currentQuote));

      autoTracker.track(`${SCREEN_NAME} Price Displayed`, {
        quote_id: currentQuote?.quoteId,
        formatted_proposed_premium:
          currentQuote?.values["formatted_proposed_premium"],
        formatted_item_market_value:
          currentQuote?.values["formatted_item_market_value"],
        proposed_premium_coefficient:
          currentQuote?.values["proposed_premium_coefficient"],
        viewed_at: formatDate(CURRENT_DATE, "DD/MM/YYYY - HH:mm"),
      });

      if (hasUnlimitedKmOnQuote(currentQuote)) {
        addUnlimitedKmOptional();
      }
    }
  }, [currentQuote]);

  useEffect(() => {
    autoTracker.trackScreen(SCREEN_NAME);
  }, []);

  function renderQuote() {
    return (
      <>
        <AutoLandingLayout
          allowTransparentHeader
          fixedHeader
          fixedCover
          canonicalLink={null}
          pageTitle="Cotação auto - Pier"
          noFooter
        >
          <PageContent>
            <Details />
            <QuoteCard
              isLoadingQuote={isLoadingQuote()}
              quoteInfo={formattedQuote}
              optionals={optionals}
              openSignupDrawer={openSignupDrawer}
            />
            <ShareOptions quoteInfo={currentQuote} />
            <Optionals
              addOptional={addOptional}
              removeOptional={removeOptional}
              assistanceWithUnlimitedKm={
                formattedQuote?.assistanceWithUnlimitedKm
              }
            />
            <Covered />
            <Uncovered />
            <Faq />
            <ReclameAqui />
            <Testimonials />
            <Susep />
            <Chat />
            <Footer />
          </PageContent>
        </AutoLandingLayout>
        <WaitingList
          isOpen={quotationValues.step === STEPS.WAITING_LIST}
          quoteId={currentQuote?.quoteId}
        />
        <WaitingListSuccess
          isOpen={quotationValues.step === STEPS.WAITING_LIST_SUCCESS}
        />
        {status === QuotationStatus.FOUND && (
          <>
            <Drawer
              isOpen={isSignupDrawerOpen}
              hide={closeSignupDrawer}
              contentLabel="Modal de cadastro"
            >
              <Signup quoteId={quotation.toString()} allowSendEmail={false} />
            </Drawer>
            <PriceUpdatedModal
              createdAt={currentQuote.values?.created_at}
              priceUpdatedAt={currentQuote.values?.price_updated_at}
            />
            <BottomFloatingCallToAction
              buttonText="Continuar contratação"
              onClick={openSignupDrawer}
              spyParams={{
                topSelector: "#quotation-greetings",
              }}
            />
          </>
        )}
      </>
    );
  }

  switch (status) {
    case QuotationStatus.IDLE:
    case QuotationStatus.FETCHING:
    case QuotationStatus.FOUND:
      return renderQuote();
    case QuotationStatus.NOT_FOUND:
      toast.error("Cotação não encontrada");
      router.push("/seguro-auto");
      return null;
    default:
      return null;
  }
}

export default withServiceMachine(NewLandingPage);
