import Text from "ui/Text";
import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import { InsuredItemsProps } from "landingPages/sharedSections/InsuredItems";
import { BannerVariants } from "ui/Banner";

const BreakLineDesktop = styled.br`
  display: none;
  ${breakpoints.tablet} {
    display: block;
  }
`;

const config = {
  mainContent: {
    title: "Seguro essencial com preço justo",
    subtitle: [
      "Cobertura simplificada",
      "Contratação por assinatura",
      "Preços indiscutíveis",
    ],
    imageSrc: "/static_assets/images/rebranding/man-driving",
    imageDescription:
      "Imagem frontal de um homem dirigindo um carro olhando para a estrada e sorrindo",
  },
  ourProtection: {
    description: "O que oferecemos",
    title: "Seguro essencial por assinatura",
    items: {
      itemOne: {
        title: "Cobertura simplificada",
        description:
          "Cobrimos somente Roubo e Furto. Você também pode utilizar os nossos Serviços quando precisar.",
        imageSrc: "/static_assets/images/rebranding/man-in-the-car.svg",
        imageDescription:
          "Homem encostado em um carro rosa utilizando seu celular",
      },
      itemTwo: {
        title: "Seguro por assinatura",
        description:
          "Você paga mensalmente no cartão de crédito ou com o PIX, igual ao seu aplicativo de filmes favorito. ",
        imageSrc:
          "/static_assets/images/rebranding/man-holding-a-smartphone.svg",
        imageDescription:
          "Ícone de um homem sorrindo, com mochila nas costas, vestindo uma camiseta rosa e segurando um smartphone",
      },
      itemThree: {
        title: "Preço indiscutível",
        description:
          "Utilizamos nossa inteligência de dados para oferecer um preço baixo e justo.",
        imageSrc:
          "/static_assets/images/rebranding/man-chilling-on-a-beach-chair.svg",
        imageDescription:
          "Ícone de um homem descansando em uma cadeira de praia",
      },
    },
  },
  faq: {
    description: "Confira as principais dúvidas sobre o nosso Seguro de Auto",
    questions: [
      {
        question: "Qual é a garantia de que eu estou segurado de verdade?",
        answer: `O seguro da Pier é autorizado pela Susep, o órgão regulador dos seguros no Brasil, e isso te garante um padrão de qualidade e de segurança. Além disso, o seu seguro é completamente digital, então não vamos te enviar papeladas para acumularem na sua gaveta em casa.
        Toda comunicação que a gente faz com você é por meio das telinhas: aplicativo e e-mail, de maneira descomplicada e rápida. Uma vez que sua vistoria e seu pagamento foram aprovados, sua contratação foi realizada com sucesso e você já está segurado.
        Essa informação ficará clara no seu processo de compra pelo app e você receberá confirmações por e-mail também. Para verificar seu contrato e todas as informações relativas a ele, acesse a área do seu seguro no aplicativo. Por lá, será possível visualizar e editar informações pessoais e de pagamento, acionar o seguro, e falar com nosso time de atendimento a hora que quiser.`,
      },
      {
        question:
          "Já sou cliente do seguro celular, posso ter um seguro auto também?",
        answer: `Sim! Se você já é membro da nossa comunidade, já tem meio caminho andado pra contratar outros produtos Pier. Mas é importante ressaltar que, por se tratar de um novo produto, uma nova análise dos seus dados será feita, tudo bem?!`,
      },
      {
        question: "Como funciona a mensalidade variável?",
        answer: `Em caso de sinistro, as seguradoras tradicionais costumam reembolsar uma parte ou a totalidade do valor do seu veículo na tabela FIPE, mas a parcela do seu seguro continua a mesma desde a contratação até o momento de acionar a empresa. Isso não faz muito sentido, não é mesmo? Como seu veículo desvaloriza ao longo do tempo, nós também diminuímos o valor da sua mensalidade de acordo com a variação da tabela FIPE!
        Além disso, vira e mexe acontece de o valor do seu carro na FIPE aumentar. Nesse caso, nós garantimos o valor da sua mensalidade do jeito que está, sem aumentá-la!`,
      },
      {
        question:
          "Quais são as formas de pagamento aceitas? Posso pagar com débito ou boleto?",
        answer: `Aceitamos o pagamento das mensalidades com o Cartão de Crédito ou PIX. Caso não possua um cartão ou PIX, pode utilizar o de um amigo ou familiar sem problemas.`,
      },
    ],
  },
  insuredItems: [
    {
      id: 1,
      icon: "theft",
      name: "Roubo e Furto",
      longDescription:
        "Se seu carro foi roubado ou furtado, fique tranquilo. Pagamos o valor integral da tabela Fipe.",
    },
    {
      id: 2,
      icon: "trafficCone",
      name: "Guincho",
      longDescription:
        "Te atendemos em todo território nacional e levamos seu carro até a oficina, concessionária ou local indicado, no raio de até 200 km de onde você estiver. Obs: Se passar do limite, você paga pelo km excedente.",
    },
    {
      id: 3,
      icon: "thunder",
      name: "Pane elétrica ou mecânica",
      longDescription:
        "Se seu carro apagou ou o motor travou, enviamos um mecânico ou reboque no local que você precisar.",
    },
    {
      id: 4,
      icon: "droplet",
      name: "Falta de gasolina",
      longDescription:
        "Faltou gasolina? Providenciamos um reboque pra seu carro até o posto de abastecimento mais próximo. Já o combustível é por sua conta 😉",
    },
    {
      id: 5,
      icon: "tire",
      name: "Troca de pneu",
      longDescription:
        "Se tiver problemas com o pneu, a gente te ajuda a trocar ou reboca até o borracheiro mais próximo.",
    },
    {
      id: 6,
      icon: "key",
      name: "Chaveiro",
      longDescription:
        "Enviamos uma ajuda pra abrir seu carro ou fazer uma nova chave.",
    },
    {
      id: 7,
      icon: "garage",
      name: "Estacionamento por uma noite",
      longDescription:
        "Seu carro deu problema e você não tem onde deixá-lo? Tudo bem, a gente guarda ele por uma noite pra você sem pagar nada.",
    },
  ] as InsuredItemsProps[],
  notInsuredItems: [
    {
      id: 1,
      name: "Colisões",
      longDescription:
        "Não cobrimos qualquer dano causado por batidas no seu carro ou de terceiros. ",
    },
    {
      id: 2,
      name: "Cobertura para terceiros",
      longDescription:
        "Não garantimos o atendimento e a cobertura para terceiros envolvidos em quaisquer acidentes.",
    },
    {
      id: 3,
      name: 'Perda Total ("PT")',
      longDescription:
        "Não cobrimos a perda total do seu carro. Obs: cobrimos somente em caso de roubo!",
    },
    {
      id: 4,
      name: "Acessórios instalados",
      longDescription:
        "Não cobrimos qualquer instalação no veículo, como ex: Kit gás ou som automotivo...",
    },
    {
      id: 5,
      name: "Desastres naturais",
      longDescription:
        "Não cobrimos incêndios, alagamentos ou qualquer evento natural.",
    },
    {
      id: 6,
      name: "Carro reserva",
      longDescription: "Ainda não oferecemos essa vantagem",
    },
    {
      id: 7,
      name: "Usos comerciais",
      longDescription:
        "Não protegemos o seu carro em caso de uso para trabalho. Ex: Uber, 99...",
    },
  ],
  smartCoverage: {
    title: "Somos descomplicados",
    description:
      "Menos papelada, menos preocupação, mais agilidade e transparência em tudo o que fazemos.",
    linkDescription: "Pedir reembolso",
    details: [
      {
        title: "Valor do seguro em 1 min",
        description: "Confira o valor do seguro para o seu carro em 3 passos.",
        imagePath: "/static_assets/images/purple-smartphone.svg",
        imageDescription: "ícone de um celular",
      },
      {
        title: "Pagamento mensal",
        description: "Você só paga pelo mês que seu carro estiver protegido.",
        imagePath: "/static_assets/images/purple-calendar.svg",
        imageDescription: "ícone de um calendário",
      },
      {
        title: "Cancele quando quiser",
        description:
          "Não temos fidelidade, você pode cancelar quando quiser sem pagar taxas.",
        imagePath: "/static_assets/images/purple-badge.svg",
        imageDescription: "ícone de um distintivo policial",
      },
    ],
  },
  testimonials: [
    {
      id: 0,
      photo: "/static_assets/images/renata_luiza.jpg",
      name: "Renata Luiza Lima",
      testimonial:
        "Ótimo atendimento ! Em meio ao caos que ficamos após um assalto... ter uma empresa que se põe prestativa a ajudar é incrível! Super rápido o pagamento do seguro e o atendimento é muito atencioso! Obrigada, continuo sendo cliente e indico a todos !!!",
    },
    {
      id: 1,
      photo: "/static_assets/images/ricardo_costa.jpg",
      name: "Ricardo Costa",
      testimonial:
        "A atenção e suporte que tive com toda a equipe da Pier que me atendeu desdo dia que fui roubado, até o dia do pagamento do reembolso do seguro foi perfeita, sempre estavam preparados para me atender e ajudar. Além disso, o processo de reembolso foi super simples e rápido. Nota 10!",
    },
    {
      id: 2,
      photo: "/static_assets/images/luiz_cinesio.jpg",
      name: "Luiz Cinesio",
      testimonial:
        "Sem dúvidas, a melhor seguradora do mundo! Sem burocracia, nada sistemático, tudo de uma maneira bem humana e direta! O reembolso foi o mais rápido que poderia ser, e o atendimento do João foi simplesmente perfeito! Fica aqui meu agradecimento à empresa e ao João que me atendeu super bem! Muito MUITO obrigado!",
    },
    {
      id: 3,
      photo: "/static_assets/images/dany_prado.jpg",
      name: "Dany Prado",
      testimonial:
        "São maravilhosos, contratei o seguro fui roubada e eles me reembolsaram sem nenhuma burocracia, são transparentes e super recomendo. Parabéns a toda equipe. RECOMENDADÍSSIMO 👏🏻👏🏻",
    },
  ],
  trust: {
    data: [
      {
        imagePath: "/static_assets/images/susep.png",
        imageDescription: "Logo da Susep",
        description: () => (
          <Text variant="body" maxWidth={340} mt={24}>
            Somos <strong>regulados</strong> e <strong>fiscalizados</strong>{" "}
            pelo mais importante órgão governamental responsável pelo mercado de
            seguros no Brasil.
          </Text>
        ),
      },
      {
        imagePath: "/static_assets/images/mercado-livre-logo.svg",
        imageDescription: "Logo do Mercado Livre",
        description: () => (
          <Text variant="body" maxWidth={320} mt={24}>
            A <strong>Pier Seguros</strong> tem como um dos seus investidores o{" "}
            <strong>Mercado Livre,</strong> a maior empresa da América Latina.
          </Text>
        ),
      },
    ],
  },
  quotation: {
    notCoveredZipcode: (onPlanCardClick, quotationHasEmail) => ({
      displayText: () => (
        <Text variant="display" mb={[24, 32, 32]}>
          Simulação para o
        </Text>
      ),
      banner: {
        title: "Ainda não cobrimos a sua área",
        description:
          "O valor da mensalidade  pode mudar quando estiver disponível em sua área.",
        variant: "warning",
      },
      buttonText: quotationHasEmail
        ? "Você está na lista de espera"
        : "Lista de Espera",
      onSelectPlan: onPlanCardClick,
    }),
    coveredZipcode: (onPlanCardClick) => ({
      displayText: () => (
        <Text variant="section" mb={0} bold={false}>
          Valores para o<BreakLineDesktop />
        </Text>
      ),
      buttonText: "Criar conta",
      onSelectPlan: onPlanCardClick,
    }),
    blackFriday: {
      banner: {
        title: "Promoção de Black Friday 🎁",
        description: "50% de desconto por 2 meses",
        variant: "success" as BannerVariants,
      },
    },
  },
};

export default config;
