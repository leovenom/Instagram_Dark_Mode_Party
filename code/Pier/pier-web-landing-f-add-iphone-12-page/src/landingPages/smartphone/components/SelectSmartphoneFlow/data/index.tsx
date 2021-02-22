import * as Yup from "yup";

export default {
  fakeDoor: {
    form: {
      title: "Não cobrimos esse aparelho... ainda!",
      description:
        "A boa notícia é que estamos trabalhando para adicionar mais modelos e podemos te avisar assim que estiver disponível 💗",
      contentLabel: "Modal para submissão de novo aparelho",
      inputs: {
        email: {
          label: "Email",
          placeholder: "exemplo@loremipsum.com",
        },
        manufacturer: {
          label: "Fabricante",
        },
        model: {
          label: "Modelo",
        },
        phone: {
          label: "Telefone (opcional)",
          placeholder: "(99) 99999-9999",
          disclaimer:
            "Vamos te notificar por Whatsapp quando seu modelo estiver disponível 😉",
        },
      },
      submit: "Enviar",
      schema: Yup.object({
        email: Yup.string()
          .email("Email inválido")
          .required("Email obrigatório"),
        manufacturer: Yup.string().required("Fabricante obrigatório"),
        model: Yup.string().required("Modelo obrigatório"),
      }),
      error:
        "Oops!! Algo deu errado! 😢 Tente novamente ou entre em contato com o suporte.",
      image: {
        src: "/static_assets/images/rebranding/person-inside-phone.svg",
        alt: "Pessoa acenando dentro de um celular",
      },
      tracking: {
        screenViewed: "Smartphone Fakedoor",
        buttonCliked: "Smartphone Fakedoor Send",
      },
    },
    success: {
      title: "Tudo certo!",
      description: "Vamos te notificar quando seu modelo estiver disponível 😉",
      contentLabel:
        "Modal de sucesso após submeter contato sobre novo aparelho",
      image: {
        src: "/static_assets/images/rebranding/person-chilling-on-a-couch.svg",
        alt: "Pessoa relaxando num sofá com uma xícara na mão",
      },
      button: "Voltar para o início",
    },
  },
};
