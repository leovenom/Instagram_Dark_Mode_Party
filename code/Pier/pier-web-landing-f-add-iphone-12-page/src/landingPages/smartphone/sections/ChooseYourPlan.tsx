import { useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Text from "ui/Text";
import ExternalLink from "ui/ExternalLink";
import { BannerVariants } from "ui/Banner";
import breakpoints from "ui/theme/breakpoints";
import Section from "landingPages/sharedSections/Section";
import PlanCard from "landingPages/smartphone/components/PlanCard";
import PipeBanner from "landingPages/smartphone/components/PipeBanner";
import maskMoney from "helpers/maskMoney";
import pluralize from "helpers/pluralize";
import toSnakeUpperCase from "helpers/toSnakeUppercase";
import spacings from "ui/theme/spacings";
import useToggle from "hooks/useToggle";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { nextPipeUpdateAt, pipePlansValues } from "helpers/pipePlansValues";
import { getDate } from "helpers/date";

interface PlanValues {
  insuredValue: string;
  price: string;
  discount?: { type: string; amount: number; duration: number };
}

interface Props {
  selectedSmartphone: {
    serie: string;
    model: string;
    memory: string;
    brand: string;
    deviceOs: string;
    id: string;
    plansValues: {
      economic: PlanValues;
      premium: PlanValues;
    };
  };
  toggleSmartphoneSelector?: () => void;
}

interface Banner {
  title: string;
  description: string;
  variant: BannerVariants;
}

const StyledSection = styled(Section)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 24px;

    ${breakpoints.tablet} {
      margin-top: 80px;
    }
  }
`;

const goToContractFlow = (
  planType: "economic" | "premium",
  selectedSmartphone: {
    model: string;
    serie: string;
    memory: string;
    deviceOs: string;
  },
  referralParams: {
    referral_name: string | string[];
    referral_id: string | string[];
  }
): void => {
  const { model, memory, deviceOs } = selectedSmartphone;
  const { referral_id, referral_name } = referralParams;

  const referralQueryParams =
    referral_id && referral_name
      ? `&referral_id=${referral_id}&referral_name=${referral_name}`
      : "";

  const selectedModelSnakeUpperCase = toSnakeUpperCase(model);
  const flowUrl = `/waiting_registration/new?device_model=${encodeURIComponent(
    selectedModelSnakeUpperCase
  )}_${memory}&device_os=${deviceOs}&plan=${planType}${referralQueryParams}&source=undefined`;

  window.location.href = `${window.location.origin}${flowUrl}`;
};

const ChooseYourPlan: React.FC<Props> = ({
  selectedSmartphone,
  selectedSmartphone: { model, memory, plansValues, id: modelId, brand, serie },
  toggleSmartphoneSelector,
}): JSX.Element => {
  const router = useRouter();
  const { referral_id, referral_name } = router.query;
  const referralParams = { referral_id, referral_name };

  const pipeValues = pipePlansValues[modelId];

  const [shouldShowPipeValues, toggleSwitcher] = useToggle();

  const premiumInsuredValue = shouldShowPipeValues
    ? pipeValues.premium.insuredValue
    : plansValues.premium.insuredValue;

  const economicInsuredValue = shouldShowPipeValues
    ? pipeValues.economic.insuredValue
    : plansValues.economic.insuredValue;

  useEffect(() => {
    smartphoneTracker.trackScreen("ChoosePlan", {
      brand,
      family: serie,
      model,
      capacity: memory,
    });
  }, [smartphoneTracker]);

  const computePlanPrice = (plan: string) => {
    if (plansValues[plan].discount) {
      return maskMoney(
        (1 - plansValues[plan].discount.amount / 100.0) *
          parseFloat(plansValues[plan].price)
      );
    }

    const planPrice = shouldShowPipeValues
      ? pipeValues[plan].price
      : plansValues[plan].price;

    return maskMoney(planPrice);
  };
  const computePreviousPlanPrice = (plan: string) => {
    return plansValues[plan].discount && maskMoney(plansValues[plan].price);
  };

  const bannerInfo = (plan: string): Banner => {
    const duration = plansValues[plan].discount?.duration;
    const amount = plansValues[plan].discount?.amount;
    return (
      plansValues[plan].discount && {
        title: `Desconto de ${amount}% por ${duration} ${pluralize(
          duration,
          "mês",
          "meses"
        )} 🎁`,
        description: "Após esse período seu plano voltará ao valor original",
        variant: "success",
      }
    );
  };

  const renderPipeBanner = () => {
    const today = getDate();
    const isPipeBannerVisible = nextPipeUpdateAt.isAfter(today) && !!pipeValues;

    return (
      isPipeBannerVisible && (
        <GridItem
          m={2}
          t={8}
          d={12}
          mb={[spacings.GIGA, spacings.GIGA, spacings.PETA]}
        >
          <PipeBanner
            switcherChecked={shouldShowPipeValues}
            onToggleSwitcher={toggleSwitcher}
          />
        </GridItem>
      )
    );
  };

  const handleSelectOtherDevice = () => {
    smartphoneTracker.trackLink("Choose Plan Select Other Model");
    toggleSmartphoneSelector();
  };

  return (
    <StyledSection bg="secondary100" py={80}>
      <Grid mb={[24, 32, 32]}>
        <GridItem m={2} t={8} d={12} alignItems="center">
          <Text variant="body" align="center">
            Valores para um{" "}
          </Text>
          <Text variant="sectionSecondary" align="center" mb={[36, 40, 40]}>
            {model} {memory}
          </Text>
        </GridItem>
        {renderPipeBanner()}
      </Grid>
      <Grid>
        <GridItem
          m={2}
          t={8}
          d={6}
          mb={[40, 40, 0]}
          alignItems="center"
          justifyContent="flex-start"
        >
          <PlanCard
            plan="economic"
            planPrice={computePlanPrice("economic")}
            previousPlanPrice={computePreviousPlanPrice("economic")}
            itemPrice={maskMoney(premiumInsuredValue)}
            refundValue={maskMoney(economicInsuredValue)}
            buttonText="Pedir convite"
            onSelectPlan={() => {
              smartphoneTracker.trackButton("ChoosePlan Plan", {
                plan: "economic",
              });
              goToContractFlow("economic", selectedSmartphone, referralParams);
            }}
            dataTracking="plan-quote-smartphone"
            testId="economic-card"
            banner={bannerInfo("economic")}
            hasPricingUpdate={shouldShowPipeValues}
          />
        </GridItem>
        <GridItem
          m={2}
          t={8}
          d={6}
          alignItems="center"
          justifyContent="flex-start"
        >
          <PlanCard
            plan="premium"
            planPrice={computePlanPrice("premium")}
            previousPlanPrice={computePreviousPlanPrice("premium")}
            itemPrice={maskMoney(premiumInsuredValue)}
            refundValue={maskMoney(premiumInsuredValue)}
            buttonText="Pedir convite"
            onSelectPlan={() => {
              smartphoneTracker.trackButton("ChoosePlan Plan", {
                plan: "premium",
              });
              goToContractFlow("premium", selectedSmartphone, referralParams);
            }}
            dataTracking="plan-quote-smartphone"
            testId="premium-card"
            banner={bannerInfo("premium")}
            hasPricingUpdate={shouldShowPipeValues}
          />
        </GridItem>
        <GridItem alignItems="center">
          <ExternalLink
            onClick={handleSelectOtherDevice}
            withArrow
            mt={[40, 40, 60]}
          >
            Selecione outro modelo
          </ExternalLink>
        </GridItem>
      </Grid>
    </StyledSection>
  );
};

ChooseYourPlan.defaultProps = {
  toggleSmartphoneSelector: undefined,
};

export default ChooseYourPlan;
