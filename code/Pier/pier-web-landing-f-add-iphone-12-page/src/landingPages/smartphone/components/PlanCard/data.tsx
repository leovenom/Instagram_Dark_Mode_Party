export default {
  planTypes: {
    economic: {
      name: "Econômico",
      monthly: "Econômico",
      imageSource: "/static_assets/images/rebranding/tilted-smartphone.svg",
      imageDescription: "Emoji de um navio",
      description: {
        action: "Receba",
        percentage: "80% do valor",
        regarding: "de um modelo seminovo",
      },
    },
    premium: {
      name: "Premium",
      monthly: "Premium",
      imageSource: "/static_assets/images/rebranding/tilted-smartphone.svg",
      description: {
        action: "Receba",
        percentage: "100% do valor",
        regarding: "de um modelo seminovo",
      },
      imageDescription: "Emoji de um Barco a vela",
    },
  },
  pricingUpdate: (date: string) => `A partir de ${date}`,
};
