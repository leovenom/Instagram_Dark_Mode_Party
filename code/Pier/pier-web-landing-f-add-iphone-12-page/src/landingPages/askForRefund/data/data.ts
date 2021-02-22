import { ItemProps } from "ui/ListWithIcon/utils/interface-props";

const config = {
  mainContent: {
    title: "Pedir reembolso",
    subtitle:
      "Foi roubado ou furtado? Não se preocupe! Siga as instruções a seguir para receber seu reembolso. É rápido e fácil!",
    imageSrc: "/static_assets/images/rebranding/green-forms.svg",
    imageDescription: "Conjunto de formas geométricas de cor verde",
    cta: "Pedir Reembolso",
  },
  tabs: {
    smartphone: "Seguro de celular",
    auto: "Seguro Auto",
  },
  auto: {
    goToUrl: (embedded) =>
      `/claim/new?product=auto${embedded ? "&embedded=true" : ""}`,
    title: "Instruções",
    step_1: "Aceitar o Termo de Honestidade",
    step_2: "Fornecer seus dados bancários",
    step_3: "Aguardar novas instruções por email",
  },
  smartphone: {
    title: "Instruções",
    goToUrl: (embedded) =>
      `/claim/new?product=smartphone${embedded ? "&embedded=true" : ""}`,
    instructions: [
      {
        id: 1,
        icon: "checkIntoCircle",
        name: "Aceitar o Termo de Honestidade",
        shortDescription:
          "Reafirme sua participação em uma comunidade de confiança",
      },
      {
        id: 2,
        icon: "piggyBank",
        name: "Colocar os dados bancários",
        shortDescription: "Vamos fazer a transferência para essa conta",
      },
      {
        id: 3,
        icon: "document",
        name: "Enviar o Boletim de Ocorrência (B.O.)",
        shortDescription: "Pode ser o B.O. virtual ou físico",
      },
      {
        id: 4,
        icon: "blockedSmartphone",
        name: "Bloquear o IMEI em sua operadora",
        shortDescription:
          "Te mostramos como fazer o bloqueio, caso não tenha feito!",
      },
    ] as ItemProps[],
    disclaimer: {
      title: "Lembre-se de checar o seu e-mail",
      desc: "Atualizaremos sempre o seu pedido por lá 😉",
    },
  },
};

export default config;
