import Text from "ui/Text";
import Template from "./FaqModalsTemplate";

const PAYMENT_DETAILS = [{ title: "Cartão de Crédito" }, { title: "PIX" }];

interface Props {
  hide: () => void;
}

function Payment({ hide }: Props) {
  return (
    <Template
      title="Formas de pagamento"
      listItems={PAYMENT_DETAILS}
      hide={hide}
    >
      <Text variant="body" color="gray600" mb={24}>
        Nosso seguro é por assinatura, você paga mensalmente. Confira abaixo as
        formas de pagamento:
      </Text>
    </Template>
  );
}

export default Payment;
