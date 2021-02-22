const data = {
  today: {
    title: "Antes da atualização",
    subtitle: (date) => `Anterior a ${date}`,
  },
  nextPrice: {
    title: "Após a atualização",
    subtitle: (date) => `A partir de ${date}`,
  },
  monthlyPayment: "Mensalidade",
  plan: "Plano",
  economic: "Econômico",
  premium: "Premium",
  totalInsuranceValue: "Valor do reembolso",
  insuranceValueUsed: "Valor de um semi-novo: ",
  samePrice: {
    imageSrc: "/static_assets/images/rebranding/woman-with-smartphone.svg",
    imageDescription:
      "Pessoa pensativa ao lado de um celular indicando queda de preço",
    title: "Sem reajustes",
    description: "Nada mudou para você nessa atualização!",
  },
};

export default data;
