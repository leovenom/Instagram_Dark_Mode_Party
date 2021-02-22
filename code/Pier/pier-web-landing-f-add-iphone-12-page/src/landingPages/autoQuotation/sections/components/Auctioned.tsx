import Text from "ui/Text";
import Template from "./FaqModalsTemplate";

const ACTIONED_DETAILS = [
  { title: "Carros recuperados" },
  { title: "Carros de leilão" },
];

interface Props {
  hide: () => void;
}

function Actioned({ hide }: Props) {
  return (
    <Template
      title="Carros de leilão ou sinistrados"
      listItems={ACTIONED_DETAILS}
      hide={hide}
    >
      <Text variant="body" color="gray600" mb={24}>
        Protegemos os carros comprados em leilão com algum tipo de sinistro no
        documento. Confira os tipos de carros:
      </Text>
    </Template>
  );
}

export default Actioned;
