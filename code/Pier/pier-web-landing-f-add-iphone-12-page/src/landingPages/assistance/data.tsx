import { InsuredItemsProps } from "landingPages/sharedSections/InsuredItems";

const config = {
  mainContent: {
    title: "Assistência Auto 24h",
    subtitle:
      "Nunca sabemos quando teremos algum problema com nosso possante, mas caso aconteça estamos aqui para te ajudar.",
    imageSrc: "/static_assets/images/rebranding/dog-in-the-car",
    imageDescription:
      "Cachorro dentro do carro com a cabeça para fora da janela",
  },
  howItWorks: {
    title: "Como funciona",
    subtitle: "Entenda como funcionam os nossos serviços",
    items: {
      itemOne: {
        title: "Assistência todo mês",
        description:
          "Nossa cobertura te dá o direito de usar 1 assistência por mês.",
        imageSrc: "/static_assets/images/rebranding/dark-blue-tool.svg",
        imageDescription: "ícone de uma chave fixa",
      },
      itemTwo: {
        title: "Cobertura nacional",
        description:
          "Cobrimos todo o território nacional com as nossas assistências! Isso quer dizer que se precisar de ajuda longe de casa, nós estaremos aqui 😁",
        imageSrc: "/static_assets/images/rebranding/dark-blue-compass.svg",
        imageDescription: "ícone de uma bússola",
      },
      itemThree: {
        title: "Assistências Tempo Assist",
        description:
          "As assistências são prestadas pela nossa parceira, Tempo Assist, uma das maiores e melhores do mercado!",
        imageSrc: "/static_assets/images/rebranding/dark-blue-tow.svg",
        imageDescription: "ícone de um reboque",
      },
    },
  },
  howToUse: {
    title: "Como utilizar",
    steps: [
      "Quando precisar ligue para um dos telefones de pedido de serviços.",
      "Se puder, tenha seu CPF à mão e procure saber o endereço onde está. Vai agilizar seu atendimento. 😉",
      "Fique atento ao tempo previsto para a chegada do prestador do serviço.",
    ],
  },
  insuredItems: [
    {
      id: 1,
      icon: "theft",
      name: "Roubo e Furto",
      shortDescription: "Cobertura do seguro",
      longDescription:
        "Se seu carro foi roubado ou furtado, fique tranquilo. Você pode pedir reembolso pelo aplicativo ou pelo site.",
    },
    {
      id: 2,
      icon: "trafficCone",
      name: "Reboque Nacional",
      shortDescription: "200km de guincho",
      longDescription:
        "Levamos seu carro até a oficina, concessionária ou local indicado por você, no raio de até 200 km de onde você estiver. Se passar do limite, você paga pelo km excedente.",
    },
    {
      id: 3,
      icon: "thunder",
      name: "Pane no carro",
      shortDescription: "Elétrica ou mecânica",
      longDescription:
        "Se seu carro apagou ou o motor travou, enviamos um mecânico ou reboque no local que você precisar.",
    },
    {
      id: 4,
      icon: "droplet",
      name: "Pane seca",
      shortDescription: "Falta de gasolina",
      longDescription:
        "Faltou gasolina? Providenciamos um reboque pra seu carro até o posto de abastecimento mais próximo. Já o combustível é por sua conta 😉",
    },
    {
      id: 5,
      icon: "tire",
      name: "Troca de pneus",
      shortDescription: "Problemas com o pneu",
      longDescription:
        "Se tiver problemas com o pneu,  a gente te ajuda a trocar ou reboca até o borracheiro mais próximo.",
    },
    {
      id: 6,
      icon: "key",
      name: "Chaveiro",
      shortDescription: "Problemas com a chave",
      longDescription:
        "Enviamos uma ajuda pra abrir seu carro ou fazer uma nova chave.",
    },
    {
      id: 7,
      icon: "garage",
      name: "Guarda do veículo",
      shortDescription: "Ter onde deixar o carro",
      longDescription:
        "Seu carro deu problema e você não tem onde deixá-lo? Tudo bem, a gente guarda ele por uma noite pra você.",
    },
  ] as InsuredItemsProps[],
};

export default config;
