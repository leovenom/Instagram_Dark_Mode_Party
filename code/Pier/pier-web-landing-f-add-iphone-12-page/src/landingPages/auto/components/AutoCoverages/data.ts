const CAR_DASHED_IMAGE_SOURCE = "/static_assets/images/car-dashed.svg";
const TOOLBOX_IMAGE_SOURCE = "/static_assets/images/toolbox.svg";
const CONES_IMAGE_SOURCE = "/static_assets/images/cones.svg";
const GARAGE_IMAGE_SOURCE = "/static_assets/images/garage.svg";
const SINALIZATION_IMAGE_SOURCE = "/static_assets/images/sinalization.svg";
const TIRES_IMAGE_SOURCE = "/static_assets/images/tires.svg";
const TOOLBOX2_IMAGE_SOURCE = "/static_assets/images/toolbox2.svg";

export const insuranceCoverages = [
  {
    key: "dotted-car",
    image: CAR_DASHED_IMAGE_SOURCE,
    service: "Roubo e furto",
    subtitle: "Cobertura de seguro",
    description:
      "Se seu carro foi roubado ou furtado, fique tranquilo. Você pode pedir reembolso pelo aplicativo ou pelo site.",
  },
];

export const insuranceAssistances = [
  {
    key: "traffic-cone",
    image: CONES_IMAGE_SOURCE,
    service: "Reboque",
    subtitle: "Guincho Nacional",
    description:
      "Levamos seu carro até a oficina, concessionária ou local indicado por você, no raio de até 200 km de onde você estiver. Se passar do limite, você paga pelo km excedente.",
  },
  {
    key: "car-break",
    image: TOOLBOX_IMAGE_SOURCE,
    service: "Pane no carro",
    subtitle: "Elétrica ou Mecânica",
    description:
      "Se seu carro apagou ou o motor travou, enviamos um mecânico ou reboque no local que você precisar.",
  },
  {
    key: "fuel-break",
    image: SINALIZATION_IMAGE_SOURCE,
    service: "Pane seca",
    subtitle: "Falta de gasolina",
    description:
      "Faltou gasolina? Providenciamos um reboque pra seu carro até o posto de abastecimento mais próximo. Já o combustível é por sua conta 😉",
  },
  {
    key: "tire-change",
    image: TIRES_IMAGE_SOURCE,
    service: "Troca de pneus",
    subtitle: "Problemas com o pneu",
    description:
      "Se tiver problemas com o pneu,  a gente te ajuda a trocar ou reboca até o borracheiro mais próximo.",
  },
  {
    key: "locksmith",
    image: TOOLBOX2_IMAGE_SOURCE,
    service: "Chaveiro",
    subtitle: "Problemas com a chave",
    description:
      "Enviamos uma ajuda pra abrir seu carro ou fazer uma nova chave.",
  },
  {
    key: "car-battery",
    image: GARAGE_IMAGE_SOURCE,
    service: "Guarda do veículo",
    subtitle: "Ter onde deixar o carro",
    description:
      "Seu carro deu problema e você não tem onde deixá-lo? Tudo bem, a gente guarda ele por uma noite pra você.",
  },
];

export const uncoveredItems = [
  "Danos parciais, totais e a terceiros",
  "Kit gás, adaptações e acessórios instalados",
];
