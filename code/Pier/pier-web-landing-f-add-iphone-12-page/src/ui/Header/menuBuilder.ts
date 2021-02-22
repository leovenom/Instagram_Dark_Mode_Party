import { MenuType, CONSTANTS } from "./types";

const menuBuilder = (product: "auto" | "smartphone" | "pier"): MenuType => {
  const { ROLES, LINKS } = CONSTANTS;

  const leftMenu = [
    {
      role: ROLES.DROPDOWN,
      name: "Celular",
      dropdown: [
        { name: "Seguro de celular", linkTo: LINKS.SMARTPHONE_PAGE },
        { name: "Tabela Pipe", linkTo: LINKS.REFUNDS },
      ],
    },
    {
      role: ROLES.DROPDOWN,
      name: "Auto",
      dropdown: [
        { name: "Seguro auto", linkTo: LINKS.SEGURO_AUTO },
        { name: "Assistência 24h", linkTo: LINKS.ASSISTANCE },
      ],
    },
    { name: "Blog", role: ROLES.NEW_TAB_LINK, linkTo: LINKS.BLOG },
    {
      name: "Termos",
      role: ROLES.LINK,
      linkTo: product === "auto" ? LINKS.AUTO_TERMS : LINKS.SMARTPHONE_TERMS,
    },
    { name: "Dúvidas", role: ROLES.NEW_TAB_LINK, linkTo: LINKS.HELP },
  ];

  const rightMenu = [
    { name: "Pedir Reembolso", role: ROLES.LINK, linkTo: LINKS.CLAIMS },
    {
      name: "Login",
      role: ROLES.LINK,
      responsiveRole: ROLES.BUTTON,
      linkTo: LINKS.LOGIN,
    },
  ];

  return [leftMenu, rightMenu];
};

export default menuBuilder;
