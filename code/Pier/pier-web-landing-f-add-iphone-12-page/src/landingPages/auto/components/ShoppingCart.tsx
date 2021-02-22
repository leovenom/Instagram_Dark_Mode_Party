import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

import BottomFloatingContainer, {
  BottomFloatingCallToAction,
} from "ui/BottomFloatingContainer";
import { StyledButton } from "ui/Button";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

import { getVehicleDisplayName } from "helpers/getFormattedVehicleInfo";
import { autoTracker } from "helpers/mixpanelTracker";
import useLocalStorage from "hooks/useLocalStorage";
import useScrollSpy from "hooks/useScrollSpy";
import { STEPS_CONFIG } from "modules/auto/QuotationFlow/utils/constants";

const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:first-of-type {
    margin-right: 4px;
  }

  ${breakpoints.desktop} {
    div:first-of-type {
      margin-right: 24px;
    }
  }
`;

const CartButton = styled(StyledButton)`
  height: 46px;
`;

const VerticalSeparator = styled.span`
  display: none;

  ${breakpoints.desktop} {
    display: block;
    width: 0;
    height: 20px;
    border-right: 1px solid ${({ theme }) => theme.colors.white};
    margin-right: 24px;
  }
`;

interface Props {
  variant: "navbar-item" | "mobile-bottom-fixed";
  quoteEvent?: () => void;
  spyParams?: {
    topSelector?: string;
    topOffset?: number;
    bottomSelector?: string;
    bottomOffset?: number;
  };
}

function ShoppingCart({ variant, quoteEvent, spyParams }: Props) {
  const [autoQuotation] = useLocalStorage("autoQuotation", null);
  const [show, setShow] = useState<boolean>(false);

  let bottomSelector: string | undefined;
  let bottomOffset: number | undefined;

  if (spyParams) {
    bottomSelector = spyParams.bottomSelector;
    bottomOffset = spyParams.bottomOffset;
  }

  const spyFn = useScrollSpy({
    ...spyParams,
    bottomSelector: bottomSelector ? bottomSelector : "#need-help",
    bottomOffset: bottomOffset ? bottomOffset : -50,
    elementHasEffect: show,
    toggleFn: setShow,
  });

  function trackCartButtonClick() {
    if (variant === "mobile-bottom-fixed") {
      autoTracker.trackButton("Floating Shopping Cart Continue", {
        url: window.location.pathname,
      });
    } else {
      autoTracker.trackButton("Navbar Shopping Cart Continue", {
        url: window.location.pathname,
      });
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", spyFn);
    document.addEventListener("DOMContentLoaded", spyFn);

    return () => {
      document.removeEventListener("scroll", spyFn);
      document.removeEventListener("DOMContentLoaded", spyFn);
    };
  }, [spyFn]);

  if (!autoQuotation)
    return (
      <BottomFloatingCallToAction
        buttonText="Cotação"
        linkTo={STEPS_CONFIG.LICENSE_PLATE.PATH}
        spyParams={spyParams}
        onClick={quoteEvent}
      />
    );

  function renderBaseComponent() {
    return (
      <ValuesContainer>
        <VerticalSeparator />
        <div>
          <Text variant="bodySmall">Cotação para:</Text>
          <Text variant="bodySmall" bold>
            {getVehicleDisplayName(autoQuotation.model?.value?.attributes)}
          </Text>
        </div>
        <Link href={`/seguro-auto/cotacao/valores/${autoQuotation.quoteId}`}>
          <CartButton
            variant="secondary"
            size="tiny"
            onClick={trackCartButtonClick}
          >
            Continuar
          </CartButton>
        </Link>
      </ValuesContainer>
    );
  }

  if (variant === "mobile-bottom-fixed") {
    return (
      <BottomFloatingContainer show={show} excludeDesktop>
        {renderBaseComponent()}
      </BottomFloatingContainer>
    );
  }

  return renderBaseComponent();
}

export default ShoppingCart;
