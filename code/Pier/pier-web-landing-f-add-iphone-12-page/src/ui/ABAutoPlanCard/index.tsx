import { AnimatePresence } from "framer-motion";

import { recalculateCurrency } from "helpers/mathUtils";
import QuoteProps from "landingPages/autoQuotation/types/QuoteProps";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";
import Button from "ui/Button";
import Divider from "ui/Divider";
import { CustomFilledIcon } from "ui/Icon/CustomizedIcon";
import Text from "ui/Text";
import CustomizedIcon from "ui/Icon/CustomizedIcon";

import {
  CardContainer,
  Details,
  Price,
  PriceContainer,
  PriceInfo,
  QuoteAgainButton,
  UpdatePriceButton,
  BannerContainer,
} from "./styles";
import LoadingPlaceholder from "ui/LoadingPlaceholder";

function getValuesArray(coverages) {
  return coverages.map(function (coverage) {
    return coverage.priceInCents;
  });
}

function sumValuesArray(values) {
  return values.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}

function getFinalPrice(coverages) {
  return sumValuesArray(getValuesArray(coverages));
}

interface Props {
  quoteInfo: QuoteProps;
  allCoverages: {
    label: string;
    priceInCents: number;
  }[];
  config: {
    ctaText: (email: string | undefined) => string;
    ctaAction: () => void;
  };
  isLoading: boolean;
  openPriceDisclaimerModal: () => void;
  startNewQuote: () => void;
}

const RIDE_HAILING_MODIFIER = "ride_hailing";

const isHideHailing = (quote) =>
  quote?.modifiers.includes(RIDE_HAILING_MODIFIER);

const LoadingContainer = ({ isLoading, loadingPlaceholder, children }) => {
  if (isLoading) return loadingPlaceholder;

  return children;
};

function ABAutoPlanCard({
  quoteInfo,
  allCoverages,
  openPriceDisclaimerModal,
  config,
  isLoading,
  startNewQuote,
}: Props) {
  return (
    <CardContainer>
      {quoteInfo && !quoteInfo?.isZipCodeCovered && (
        <BannerContainer>
          <div>
            <Text variant="body" bold mb={4}>
              Ainda não cobrimos a sua área
            </Text>
            <Text variant="body">
              O valor da mensalidade pode mudar quando estiver disponível em sua
              área.
            </Text>
          </div>
          <CustomizedIcon name="alert" />
        </BannerContainer>
      )}

      <LoadingContainer
        isLoading={isLoading}
        loadingPlaceholder={
          <LoadingPlaceholder width="100%" height="24px" margins="0 0 24px 0" />
        }
      >
        <Text variant="body" mb={24}>
          {quoteInfo?.vehicle}
        </Text>
      </LoadingContainer>

      <Divider />
      <PriceContainer>
        <img
          src="/static_assets/images/rebranding/gray-drawing-car.svg"
          alt="carro cinza"
          width="101"
          height="74"
        />
        <PriceInfo>
          <Text variant="bodySmall" color="gray600">
            Assinatura mensal
          </Text>
          <LoadingContainer
            isLoading={isLoading}
            loadingPlaceholder={
              <LoadingPlaceholder width="150px" height="58px" />
            }
          >
            <Price variant="bodyLarge" bold>
              R${" "}
              <span>
                {recalculateCurrency(getFinalPrice(allCoverages), 1, false)}
              </span>
            </Price>
          </LoadingContainer>
        </PriceInfo>
      </PriceContainer>

      <AnimatePresence initial={false}>
        {allCoverages.map(function ({ label, priceInCents }) {
          return (
            <Details
              key={label}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 36 }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Text variant="bodySmall">{label}:</Text>

              <LoadingContainer
                isLoading={isLoading}
                loadingPlaceholder={
                  <LoadingPlaceholder width="60px" height="20px" />
                }
              >
                <Text variant="bodySmall">
                  <strong>{recalculateCurrency(priceInCents, 1)}</strong>
                </Text>
              </LoadingContainer>
            </Details>
          );
        })}
      </AnimatePresence>

      <Divider mb={16} />

      <LoadingContainer
        isLoading={isLoading}
        loadingPlaceholder={<LoadingPlaceholder width="100%" height="20px" />}
      >
        {isHideHailing(quoteInfo) && (
          <Details mb={16}>
            <Text variant="bodySmall">Observação:</Text>
            <Text variant="bodySmall" bold>
              Motorista de Aplicativo
            </Text>
          </Details>
        )}
      </LoadingContainer>

      <Details>
        <LoadingContainer
          isLoading={isLoading}
          loadingPlaceholder={
            <>
              <LoadingPlaceholder width="155px" height="20px" />
              <LoadingPlaceholder width="85px" height="20px" />
            </>
          }
        >
          <>
            <Text variant="bodySmall">
              Cobertura de{" "}
              <strong>{quoteInfo?.coveragePercentage}% FIPE</strong>:
            </Text>
            <Text variant="bodySmall" bold>
              {recalculateCurrency(quoteInfo?.fipeValueInCents, 1)}
            </Text>
          </>
        </LoadingContainer>
      </Details>

      <UpdatePriceButton onClick={openPriceDisclaimerModal}>
        <CustomFilledIcon circle="gray600" fill="white" name="info" />
        <Text
          variant="bodySmallest"
          color="gray600"
          decoration="underline"
          ml={12}
        >
          Os valores dessa cotação podem mudar após a vistoria do seu carro.
        </Text>
      </UpdatePriceButton>

      <LoadingContainer
        isLoading={isLoading}
        loadingPlaceholder={<LoadingPlaceholder width="100%" height="48px" />}
      >
        <Button
          variant="secondary"
          fullWidth
          onClick={config?.ctaAction}
          mb={24}
          disabled={!quoteInfo?.isZipCodeCovered && !!quoteInfo?.email}
        >
          {config?.ctaText(quoteInfo?.email)}
        </Button>
      </LoadingContainer>

      <QuoteAgainButton
        variant="plainText"
        asLink
        href={STEPS_CONFIG.LICENSE_PLATE.PATH}
        onClick={startNewQuote}
      >
        Cotação para outro carro
      </QuoteAgainButton>
    </CardContainer>
  );
}

export default ABAutoPlanCard;
