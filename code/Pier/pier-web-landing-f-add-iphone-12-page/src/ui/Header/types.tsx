export const CONSTANTS = {
  ROLES: {
    BUTTON: "BUTTON",
    DROPDOWN: "DROPDOWN",
    LINK: "LINK",
    NEW_TAB_LINK: "NEW_TAB_LINK",
  },
  LINKS: {
    SMARTPHONE_PAGE: "/seguro-celular",
    REFUNDS: "/seguro-celular/tabela-pipe",
    SEGURO_AUTO: "/seguro-auto",
    ASSISTANCE: "/seguro-auto/sobre-os-servicos",
    BLOG: "https://blog.pier.digital",
    AUTO_TERMS: "/seguro-auto/condicoes-gerais",
    SMARTPHONE_TERMS: "/seguro-celular/condicoes-gerais",
    HELP: "https://ajuda.pier.digital/pt-BR/",
    CLAIMS: "/pedir-reembolso",
    LOGIN: "/auth/session/new?step=kind",
  },
};

// This generates an array with ["BUTTON", "DROPDOWN", "LINK", "NEW_TAB_LINK"]
const menuItemRoles = Object.values(CONSTANTS.ROLES);

// This generates the union "BUTTON" | "DROPDOWN" | "LINK" | "NEW_TAB_LINK"
// More info here: https://dev.to/angular/managing-key-value-constants-in-typescript-221g
export type RoleType = typeof menuItemRoles[number];

export type DropdownType = {
  name: string;
  linkTo: string;
}[];

export type MenuType = {
  name: string;
  role: RoleType;
  responsiveRole?: RoleType;
  dropdown?: DropdownType;
  linkTo?: string;
  onClick?: () => void;
  metadata?: any;
}[][];
