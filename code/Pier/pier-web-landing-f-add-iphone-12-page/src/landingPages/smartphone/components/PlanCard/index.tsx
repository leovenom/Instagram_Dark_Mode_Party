import * as React from "react";

import Button from "ui/Button";
import Icon from "ui/Icon";
import breakpoints from "ui/theme/breakpoints";
import spacings from "ui/theme/spacings";
import Text from "ui/Text";
import Banner, { BannerVariants } from "ui/Banner";
import styled from "styled-components";

import { nextPipeUpdateAt } from "helpers/pipePlansValues";

import data from "./data";

interface Props {
  fixed?: boolean;
  planPrice: string;
  previousPlanPrice?: string;
  itemPrice?: string;
  refundValue: string;
  plan: keyof typeof data.planTypes;
  buttonText: string;
  onSelectPlan?: () => void;
  hasPricingUpdate: boolean;
  banner?: { title: string; description: string; variant: BannerVariants };
  dataTracking?: string;
  testId?: string;
}

const Card = styled.div<{ fixed?: boolean }>`
  box-sizing: border-box;
  width: 100%;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  padding: 24px 24px 32px;

  ${breakpoints.tablet} {
    width: unset;
    max-width: 320px;
  }

  ${breakpoints.custom(1020)} {
    width: 400px;
    max-width: unset;
    padding: 48px 48px 32px;
  }
`;

const Header = styled.div<{ plan: keyof typeof data.planTypes }>`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  ${breakpoints.desktop} {
    flex-direction: column;
  }
`;

const PriceContent = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.desktop} {
    margin-top: 4px;

    > p {
      text-align: center;
    }
  }
`;

const PriceValueContent = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Price = styled.span`
  margin: 0;
  padding: 0;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
  letter-spacing: -1px;

  ${breakpoints.desktop} {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -2px;
  }
`;

const PlanContent = styled.div`
  margin-bottom: 24px;
`;

const PlanItemContent = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  padding: 16px 0;
  margin: 24px 0;
  display: flex;
  justify-content: center;
`;

const PlanItemValueContent = styled.div`
  display: flex;
  justify-content: space-between;

  :first-child {
    margin-top: 24px;
  }
`;

const PricingUpdateContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  padding-top: ${spacings.GIGA}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 40px;
  ${breakpoints.desktop} {
    max-height: none;
    margin: -70px 0 16px;
  }
`;

const StyledBanner = styled(Banner)`
  flex-grow: 1;
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  max-width: none;
  border-radius: 4px 4px 0 0;
  margin: -24px -24px 16px;

  ${breakpoints.desktop} {
    margin: 16px 0 0;
    border-radius: 4px;
    text-align: center;
    justify-content: center;
  }
`;

const BannerTitle = styled(Text)`
  opacity: 0.8;
`;

const PlanCard: React.FunctionComponent<Props> = ({
  planPrice,
  previousPlanPrice,
  itemPrice,
  refundValue,
  plan,
  buttonText,
  onSelectPlan,
  dataTracking,
  banner,
  hasPricingUpdate,
  testId,
}): JSX.Element => {
  const currentPlan = data.planTypes[plan];

  return (
    <Card data-tracking={dataTracking} data-testid={testId}>
      <Header plan={plan}>
        <Img src={currentPlan.imageSource} alt={currentPlan.imageDescription} />
        <PriceContent>
          <Text variant="bodySmall" bold color="primary300" mb={8}>
            {currentPlan.monthly.toUpperCase()}
          </Text>
          {previousPlanPrice && (
            <Text
              variant="body"
              bold
              color="gray"
              mb={4}
              decoration="line-through"
            >
              R$ {previousPlanPrice.substring(2)}
            </Text>
          )}

          <PriceValueContent>
            <Text variant="body" bold>
              R${" "}
            </Text>
            <Price>{planPrice.substring(2)}</Price>
            <Text variant="body" bold>
              / mês
            </Text>
          </PriceValueContent>
        </PriceContent>
        {banner && (
          <StyledBanner variant={banner.variant}>
            <div>
              <BannerTitle variant="bodySmall" bold>
                {banner.title}
              </BannerTitle>
              <Text variant="bodySmallest">{banner.description}</Text>
            </div>
          </StyledBanner>
        )}
      </Header>
      <PlanContent>
        <PlanItemContent>
          <Text variant="bodySmall" align="center">
            {currentPlan.description.action}{" "}
            {currentPlan.description.percentage}{" "}
            {currentPlan.description.regarding}
          </Text>
        </PlanItemContent>
        <PlanItemValueContent>
          <Text variant="bodySmall">Valor de um seminovo:</Text>
          <Text variant="bodySmall">{itemPrice}</Text>
        </PlanItemValueContent>
        <PlanItemValueContent>
          <Text variant="bodySmall" bold>
            Valor da cobertura:
          </Text>
          <Text variant="bodySmall" bold>
            {refundValue}
          </Text>
        </PlanItemValueContent>
      </PlanContent>
      {hasPricingUpdate ? (
        <PricingUpdateContainer>
          <Icon name="calendar" fill="gray" size={24} />
          <Text variant="bodySmall" ml={spacings.KILO} color="darkGray" mb={-4}>
            {data.pricingUpdate(nextPipeUpdateAt.format("DD/MM/YYYY"))}
          </Text>
        </PricingUpdateContainer>
      ) : (
        <Button
          fullWidth
          onClick={onSelectPlan}
          data-tracking="plan-request-invitation-smartphone"
        >
          {buttonText}
        </Button>
      )}
    </Card>
  );
};

export default PlanCard;
