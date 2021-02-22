import Text from "ui/Text";
import Template from "./FaqModalsTemplate";

const MAIN_DRIVER_DETAILS = [
  {
    title: "Condutor principal",
    subtitle: "É aquele que dirige 70% do tempo",
  },
  {
    title: "Outro motorista",
    subtitle:
      "Outra pessoa que precise dirigir o carro as vezes.Menos que 30% do tempo",
  },
];

interface Props {
  hide: () => void;
}

function MainDriver({ hide }: Props) {
  return (
    <Template
      title="Motorista principal"
      listItems={MAIN_DRIVER_DETAILS}
      hide={hide}
    >
      <Text variant="body" color="gray600" mb={24}>
        O Seguro Auto Pier protege somente o condutor principal do veículo. O
        contrato precisa ser feito no CPF deste condutor
      </Text>
    </Template>
  );
}

export default MainDriver;
