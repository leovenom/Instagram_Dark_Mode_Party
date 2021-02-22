type SourceType = "Instagram" | "Facebook";

export interface TestimonialType {
  photo: string;
  name: string;
  source: SourceType;
  testimonial: string;
  url: string;
}

const testimonials: TestimonialType[] = [
  {
    photo: "/static_assets/images/rebranding/wellington-nobrega.jpg",
    name: "Wellington Nóbrega",
    source: "Facebook",
    testimonial:
      "Não tenho como agradecer e felicitar toda equipe Pier, pois em um momento horroroso em minha vida, onde tive meu carro roubado, fui completamente feliz em contratar esse seguro, todo suporte e direcionamento foi dado e tudo muito rápido e fácil, tive meu reembolso muito, mas muito rápido. Hoje recomendo a amigos e familiares. Muito obrigado Pier.",
    url: "https://www.facebook.com/well.nobrega/posts/3829631607075546",
  },
  {
    photo: "/static_assets/images/rebranding/cris-machado.jpg",
    name: "Cris Machado",
    source: "Facebook",
    testimonial:
      "Serviço de muita qualidade, atendimento excepcional e super prático. Melhor custo benefício!!! Quando precisei utilizar os serviços de assistência me atenderam com muita rapidez e eficiência. Recomendo!!",
    url: "https://www.facebook.com/crisp.machado/posts/3586264331433671",
  },
  {
    photo: "/static_assets/images/rebranding/lucas-neurian.jpg",
    name: "Lucas Neurian",
    source: "Facebook",
    testimonial:
      "“Muito bom, fiz a cotação,vistoria tudo online em menos de 48 horas tive o retorno com a aprovação, agora estou tranquilo com meu carro segurado contra roubo e furto, sem contar que achei a assistência bem completa....”",
    url:
      "https://www.facebook.com/permalink.php?story_fbid=695722234371674&id=175231949754041&comment_id=698409717436259",
  },
  {
    photo: "/static_assets/images/rebranding/heitor-yamim.jpg",
    name: "Heitor Yamim",
    source: "Instagram",
    testimonial:
      "“Seguradora incrivel!! Tenho a pouco tempo e tanto o setor de suporte, bem como pós vendas e setor de qualidade são fantásticos. Sempre prestativos e atenciosos com os clientes. Pretendo ser cliente por muito tempo!!”",
    url: "https://www.instagram.com/p/CDj9bg6BgvW/",
  },
  {
    photo: "/static_assets/images/rebranding/ale-ozorio.jpg",
    name: "Ale Ozorio",
    source: "Facebook",
    testimonial:
      "”Fiz para o meu carro e precisei 2x da assistência. Vieram sempre em menos de 50 minutos. Fui muito bem atendido, todos cordiais, simpáticos. Não posso falar de indenização pois não precisei. Mas que são atenciosos com o cliente, posso garantir. Entraram em contato por telefone para saber se fui bem atendido, se estava satisfeito, e ainda me mandaram esse brinde. Estou gostando, que continuem assim.”",
    url:
      "https://www.facebook.com/permalink.php?story_fbid=695722234371674&id=175231949754041&comment_id=706049940005570",
  },
  {
    photo: "/static_assets/images/rebranding/aron-goldberg.jpg",
    name: "Aron Goldberg",
    source: "Facebook",
    testimonial:
      "Tudo perfeito realizei o seguro do carro da minha esposa!! Susep ok Pier ok então tudo ok. Fui indicado por amigo que teve sinistro não teve problemas...",
    url:
      "https://www.facebook.com/permalink.php?story_fbid=648705222406709&id=175231949754041&comment_id=654299275180637",
  },
  {
    photo: "/static_assets/images/rebranding/izha-alcantra.jpg",
    name: "Izha Alcantra",
    source: "Facebook",
    testimonial:
      "Estou muito satisfeita com o seguro da Pier, atendimento rápido, assistência imediata! Super recomendo! Aguardando anciosa a cobertura para motos.",
    url:
      "https://www.facebook.com/permalink.php?story_fbid=3589327117786559&id=175231949754041",
  },
];

const config = {
  insuredItems: [
    {
      icon: "brokenCar",
      name: "Roubo e Furto",
      longDescription:
        "Se seu carro foi roubado ou furtado, fique tranquilo. Pagamos o valor integral da tabela Fipe.",
    },
    {
      icon: "cone",
      name: "Guincho 200km",
      longDescription:
        "Quando precisar, enviamos um guincho para buscar o seu carro em qualquer lugar do Brasil.",
    },
    {
      icon: "thunder",
      name: "Pane elétrica ou mecânica",
      longDescription:
        "Se seu carro apagou ou o motor travou, enviamos um mecânico ou reboque no local que você precisar.",
    },
    {
      icon: "droplet",
      name: "Falta de gasolina",
      longDescription:
        "Se o combustivel acabar e você precisar de ajuda, enviamos um reboque para levar seu carro ao posto mais próximo.",
    },
    {
      icon: "tire",
      name: "Troca de pneu",
      longDescription:
        "Se tiver problemas com o pneu, a gente te ajuda a trocar ou reboca até o borracheiro mais próximo.",
    },
    {
      icon: "key",
      name: "Chaveiro",
      longDescription:
        "Enviamos uma ajuda pra abrir seu carro ou fazer uma nova chave.",
    },
    {
      icon: "garage",
      name: "Estacionamento por uma noite",
      longDescription:
        "Se seu carro deu algum problema e você não tem onde deixá-lo, nós guardamos ele por uma noite sem nenhum custo.",
    },
  ],
  notInsuredItems: [
    {
      name: "Colisões",
      longDescription:
        "Não cobrimos qualquer dano causado por batidas no seu carro ou de terceiros. ",
    },
    {
      name: "Cobertura para terceiros",
      longDescription:
        "Não garantimos o atendimento e a cobertura para terceiros envolvidos em quaisquer acidentes.",
    },
    {
      name: 'Perda Total ("PT")',
      longDescription:
        "Não cobrimos a perda total do seu carro. Obs: cobrimos somente em caso de roubo!",
    },
    {
      name: "Desastres naturais",
      longDescription:
        "Não cobrimos incêndios, alagamentos ou qualquer evento natural.",
    },
    {
      name: "Acessórios instalados",
      longDescription:
        "Não cobrimos qualquer instalação no veículo, como ex: Kit gás ou som automotivo...",
    },
  ],
  testimonials,
};

export default config;
