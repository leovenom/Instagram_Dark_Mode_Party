import { InsuredItemsProps } from "landingPages/sharedSections/InsuredItems";

export default {
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
  press: [
    {
      id: 1,
      url:
        "https://revistapegn.globo.com/Startups/noticia/2019/07/eles-ganham-dinheiro-oferecendo-seguro-digital-descomplicado-para-celulares.html",
      image: "pequenas-empresas-grandes-negocios.svg",
      imageDescription: "Logo da Pequenas Empresas e Grandes Negócios",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=0s25rHv1LYU",
      image: "image_press_1.svg",
      imageDescription: "Logo da Globo news",
    },
    {
      id: 3,
      url:
        "https://economia.uol.com.br/empreendedorismo/noticias/redacao/2019/08/10/onsurance-pier-digital-seguro-por-demanda-carro-celular.htm",
      image: "image_press_3.svg",
      imageDescription: "Logo do Uol",
    },
    {
      id: 4,
      url:
        "https://www.terra.com.br/noticias/tecnologia/inovacao/videos/startup-promete-100-de-reembolso-em-furto-de-celular,8913215.html",
      image: "logo-terra.svg",
      imageDescription: "Logo do portal Terra",
    },
  ],
  testimonials: [
    {
      id: 0,
      photo: "/static_assets/images/luiz_cinesio.jpg",
      name: "Luiz Cinesio",
      testimonial:
        "Sem dúvidas, a melhor seguradora do mundo! Sem burocracia, nada sistemático, tudo de uma maneira bem humana e direta! O reembolso foi o mais rápido que poderia ser, e o atendimento do João foi simplesmente perfeito! Fica aqui meu agradecimento à empresa e ao João que me atendeu super bem! Muito MUITO obrigado!",
    },
    {
      id: 1,
      photo: "/static_assets/images/dany_prado.jpg",
      name: "Dany Prado",
      testimonial:
        "São maravilhosos, contratei o seguro fui roubada e eles me reembolsaram sem nenhuma burocracia, são transparentes e super recomendo. Parabéns a toda equipe. RECOMENDADÍSSIMO 👏🏻👏🏻",
    },
    {
      id: 2,
      photo: "/static_assets/images/jonas_lopes.jpg",
      name: "Jonas Lopes",
      testimonial:
        "Minha experiência com a Pier foi fantástica, empresa transparente e ética. Já tive outros seguros e todos são extremamente burocráticos, demorados, cansativos, parabéns pela praticidade e por facilitar a nossa vida <3",
    },
    {
      id: 3,
      photo: "/static_assets/images/vitoria_dias.jpg",
      name: "Vitória Dias",
      testimonial:
        "Não poderia estar mais feliz! A Pier é sem dúvidas a melhor opção para seguro que poderia ter feito para meu celular! O atendimento é incrível, recebi o reembolso super rápido, de forma simples, transparente e o melhor, sem burocracias! É muito raro existir empresas que contratamos que podemos sentir que são de fato nossos aliados na vida. A Pier sem dúvidas é uma dessas. 💜",
    },
    {
      id: 4,
      photo: "/static_assets/images/sylvio_vieira.jpg",
      name: "Sylvio Vieira",
      testimonial:
        "Super recomendo a Pier! Sempre muito solícitos nas horas que mais precisamos, tem um atendimento fora de série! Fui reembolsado em menos de 2 horas, mega rápido! Agradeço de coração fazer parte desta comunidade <3",
    },
  ],
  refund: {
    title: "Reembolso rápido",
    description:
      "8 de cada 10 pessoas, recebem o pagamento em até 5 dias úteis após o envio do B.O. e bloqueio do aparelho (IMEI)",
    linkDescription: "Pedir reembolso",
    details: [
      {
        title: "Aplicativo instalado",
        description:
          "Ter o aplicativo instalado no seu celular no momento da ocorrência",
        imagePath: "/static_assets/images/purple-smartphone.svg",
        imageDescription: "smartphone",
      },
      {
        title: "Ter o B.O. em mãos",
        description:
          "Registre e nos envie o boletim de ocorrência incluindo o número único do celular (IMEI)",
        imagePath: "/static_assets/images/badge.svg",
        imageDescription: "distintivo policial",
      },
      {
        title: "Bloquear aparelho",
        description:
          "O número de identificação do celular (IMEI) precisa estar bloqueado na Anatel",
        imagePath: "/static_assets/images/chip.svg",
        imageDescription: "chip de celular",
      },
    ],
  },
  coverage: {
    title: "Proteção contra roubo e todos os tipos de furtos",
    coveredItems: [
      "Cobrimos celulares usados, comprados no exterior e sem nota-fiscal",
      "Seu pagamento é mensal e você pode cancelar quando quiser",
      "Contratação em minutos. Ativou o aplicativo, você já está segurado",
    ],
    notCoveredItems: [
      "Danos Físicos (Quebrou a tela ou danificou o aparelho)",
      "Perdas (Perdeu seu celular ou não sabe onde colocou)",
      "Ocorrências fora do Brasil",
    ],
  },
  howItWorks: {
    title: "Como funciona",
    descriptionItems: [
      'Selecione o seu modelo e memória nos campos acima e clique em "Ver preços”. Escolha um dos planos e crie uma conta para pedir um convite',
      "Com o convite aprovado, é só baixar o app e ativar sua proteção 😎",
      "Você receberá seu cashback na sua conta Méliuz em até 60 dias após sua ativação",
      `Ao completar R$20 de saldo disponível, você informa seus dados bancários no <a href="https://meliuz.onelink.me/2657008059/9f25b5e8">site ou app do Méliuz</a> e pode resgatar o valor para sua conta ou poupança 😉`,
    ],
    imageSource: "/static_assets/images/rebranding/woman-yoga.svg",
  },
  mainContent: {
    title: "Seguro Pier de celular com R$40 de cashback",
    subtitle: "Cobertura contra roubo, furto qualificado e furto simples",
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
        imageSrc: "/static_assets/images/rebranding/yound-and-happy.png",
        imageDescription: "Ícone de uma jovem e feliz mulher",
      },
      itemTwo: {
        title: "Seguro por assinatura",
        description:
          "Pague mensalmente no cartão de crédito e cancele quando quiser, sem multa.",
        imageSrc: "/static_assets/images/rebranding/credit-card.png",
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
        "Cobrimos aparelhos novos, usados ou comprados no exterior - independente do tempo de uso!",
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
};
