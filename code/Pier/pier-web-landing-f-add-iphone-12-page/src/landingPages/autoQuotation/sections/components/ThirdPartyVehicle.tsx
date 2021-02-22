import Text from "ui/Text";
import Template from "./FaqModalsTemplate";

const THIRD_PARTY_DETAILS = [
  { title: "Cônjuge (Esposa / Marido)" },
  { title: "Mãe / Pai" },
  { title: "Filho(a)" },
  { title: "Irmão(ã)" },
  { title: "Sogro(a)" },
  { title: "Cunhado(a)" },
  { title: "Tio(a)" },
  { title: "Sobrinho(a)" },
  { title: "Nora / Genro" },
];

interface Props {
  hide: () => void;
}

function ThirdPartyVehicle({ hide }: Props) {
  return (
    <Template
      title="Carro em nome de outra pessoa"
      listItems={THIRD_PARTY_DETAILS}
      hide={hide}
    >
      <Text variant="body" color="gray600" mb={24}>
        Protegemos um carro que não está no nome do condutor principal. Confira
        a lista de parentes que o carro pode estar no nome:
      </Text>
    </Template>
  );
}

export default ThirdPartyVehicle;
