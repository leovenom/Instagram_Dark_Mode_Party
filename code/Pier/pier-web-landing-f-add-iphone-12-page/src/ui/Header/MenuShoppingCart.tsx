import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

import {
  getVehicleDisplayName,
  getFormattedPrice,
} from "helpers/getFormattedVehicleInfo";
import useLocalStorage from "hooks/useLocalStorage";
import Button from "ui/Button";
import Text from "ui/Text";

const ShoppingCart = styled.section`
  border-left: 1px solid ${({ theme }) => theme.colors.gray400};
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 8px;

  & button {
    max-width: 120px;
  }
`;

const ItemContainer = styled.div`
  margin: 0 16px 0 24px;
`;

const isAutoQuotationRoute = (path: string) =>
  path.includes("seguro-auto/cotacao");

function MenuShoppingCart() {
  const [vehicle, setVehicle] = useState(null);
  const [autoQuotation] = useLocalStorage("autoQuotation", null);
  const router = useRouter();

  useEffect(() => {
    if (autoQuotation) {
      const vehicle = getVehicleDisplayName(
        autoQuotation.model.value.attributes
      );
      const price = getFormattedPrice(
        autoQuotation.values["formatted_proposed_premium"]
      );
      setVehicle({
        name: vehicle,
        price,
        quoteId: autoQuotation.quoteId,
      });
    }
  }, [autoQuotation]);

  if (!vehicle) return null;

  if (isAutoQuotationRoute(router.pathname)) return null;

  return (
    <ShoppingCart>
      <ItemContainer>
        <Text variant="bodySmallest">Cotação para:</Text>
        <Text variant="bodySmallest" bold>
          {vehicle.name}
        </Text>
      </ItemContainer>
      <div>
        <Link href={`/seguro-auto/cotacao/valores/${vehicle.quoteId}`}>
          <a>
            <Button variant="secondary" size="small">
              Continuar
            </Button>
          </a>
        </Link>
      </div>
    </ShoppingCart>
  );
}

export default MenuShoppingCart;
