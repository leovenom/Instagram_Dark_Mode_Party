import { InsuredItemsProps } from "landingPages/sharedSections/InsuredItems";

const config = {
  mainContent: {
    title: " Seguro celular feito por quem se importa",
    subtitle:
      "Cobertura inteligente que protege até contra furto simples. Planos mensais e sem burocracia.",
    imageSrc: "/static_assets/images/rebranding/man-with-smartphone",
    imageDescription: "Homem jovem sorrindo segurando um smartphone",
  },
  ourProtection: {
    title: "Conheça o seguro celular da Pier",
    subtitle: "Somos uma seguradora digital sem burochatice!",
    items: {
      itemOne: {
        title: "Com você para todo rolê",
        description:
          "Proteja seu aparelho em caso de roubo, furto simples e furto qualificado.",
        imageSrc: "/static_assets/images/rebranding/young-and-happy.svg",
        imageDescription: "Ícone de uma jovem e feliz mulher",
      },
      itemTwo: {
        title: "Seguro por assinatura",
        description:
          "Pague mensalmente no cartão de crédito e cancele quando quiser, sem multa.",
        imageSrc: "/static_assets/images/rebranding/credit-card.svg",
        imageDescription: "Ícone de dois cartões de crédito",
      },
      itemThree: {
        title: "Sem surpresas e burocracia",
        description:
          "Ative pelo app e fique protegido na hora! Sem carência, franquia ou letras miúdas.",
        imageSrc:
          "/static_assets/images/rebranding/man-chilling-on-a-beach-chair.svg",
        imageDescription: "Ícone de uma mulher sentada usando seu smartphone",
      },
    },
  },
  faq: {
    description: "Respondemos as perguntas mais populares",
    questions: [
      {
        question: "Como funciona a atualização da Tabela Pipe?",
        answer:
          "A Tabela Pipe reúne os valores de nossos reembolsos. Assim como carros, televisões e outros aparelhos, com o passar do tempo, smartphones também passam a valer menos. Por isso, 2 vezes ao ano, nós atualizamos nossa Tabela Pipe com valores que estejam mais próximos dos praticados pelo mercado.",
      },
      {
        question: "Posso pagar com boleto ou débito automático?",
        answer:
          "O pagamento é mensal e realizado via cartão de crédito. Mas fique tranquilo que o seu limite não é comprometido. Além disso, pelo APP você pode alterar o cartão, a data de vencimento e até mesmo cancelar a sua proteção quando quiser. Nós aceitamos as bandeiras Visa, MasterCard, Diners, American Express e Elo.",
      },
      {
        question: "A Pier emite um contrato do meu seguro?",
        answer:
          "Sim! Ao contratar o nosso seguro você passa a ter um contrato mensal com Pier Seguradora, que será sempre atualizado automaticamente até que o seu plano seja cancelado. Para verificar seu contrato, basta fazer login em nosso site, clicar em Seu Contrato e clicar em Visualizar Contrato.",
      },
      {
        question: "Existe fidelidade ou prazo mínimo de permanência?",
        answer:
          "O nosso contrato é mensal, o prazo mínimo de permanência é de 1 mês e você pode cancelar quando quiser, sem pagar nada a mais por isso. Imagine que você tenha contratado a Pier no dia 05 de Abril, e no dia 10 de Abril você opte por cancelar o contrato. Sua proteção fica ativa até o dia 10 de Maio, porque você já pagou pela proteção desse período.",
      },
    ],
  },
  insuredItems: [
    {
      id: 1,
      icon: "robber",
      name: "Roubo",
      shortDescription:
        "Quando você é abordado com violência e/ou ameaça e levam o seu aparelho.",
    },
    {
      id: 2,
      icon: "rupture",
      name: "Furto Qualificado",
      shortDescription:
        "Quando seu aparelho é levado e existe algum vestígio do crime, como uma mochila rasgada, por exemplo.",
    },
    {
      id: 3,
      icon: "blockedSmartphone",
      name: "Furto Simples",
      shortDescription:
        "Quando seu aparelho é levado sem vestígios do crime - somos uma das poucas empresas a oferecer isso! 💕",
    },
    {
      id: 4,
      icon: "smartphoneScreen",
      name: "Celulares sem nota fiscal",
      shortDescription:
        "Cobrimos aparelhos novos, usados ou comprados no exterior  - independente do tempo de uso!",
    },
    {
      id: 5,
      icon: "brFlag",
      name: "Cobertura nacional",
      shortDescription:
        "De norte a sul, você está protegido com a gente em todo o Brasil.",
    },
  ] as InsuredItemsProps[],
  notInsuredItems: [
    {
      id: 1,
      name: "Danos físicos",
      shortDescription:
        "Não cobrimos queda acidental ou outros danos ao aparelho",
    },
    {
      id: 2,
      name: "Perdas",
      shortDescription: "Não cobrimos a perda do aparelho",
    },
    {
      id: 3,
      name: "Ocorrências fora do Brasil",
      shortDescription: "Não cobrimos roubos e furtos ocorridos no exterior",
    },
  ],
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
  fastRefund: {
    title: "Reembolso rápido",
    subtitle:
      "8 de cada 10 pessoas, recebem o pagamento em até 5 dias úteis após o envio do B.O. e bloqueio do aparelho (IMEI)",
    items: {
      itemOne: {
        title: "Aplicativo instalado",
        description:
          "Ter o aplicativo instalado no seu celular no momento da ocorrência.",
        imageSrc: "/static_assets/images/rebranding/dark-blue-smartphone.svg",
        imageDescription: "Ícone de uma mulher fazendo yoga",
      },
      itemTwo: {
        title: "Ter o B.O. em mãos",
        description:
          "Registre e nos envie o boletim de ocorrência incluindo o número único do celular (IMEI)",
        imageSrc: "/static_assets/images/rebranding/dark-blue-badge.svg",

        imageDescription: "Ícone de uma mulher sentada usando seu smartphone",
      },
      itemThree: {
        title: "Bloquear aparelho",
        description:
          "O número de identificação do celular (IMEI) precisa estar bloqueado na Anatel",
        imageSrc: "/static_assets/images/rebranding/dark-blue-chip.svg",
        imageDescription: "ícone de um homem atrás de um documento",
      },
    },
  },
};

export default config;
