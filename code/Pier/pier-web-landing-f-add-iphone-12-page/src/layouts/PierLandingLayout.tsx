import * as React from "react";

import Header from "ui/Header";
import Footer from "landingPages/sharedSections/Footer";
import Head from "next/head";

import { useScrollYPosition } from "hooks/useScrollPosition";

import menuBuilder from "ui/Header/menuBuilder";

interface Props {
  children: React.ReactNode;
  pageTitle: string;
  toggleSmartphoneSelector?: () => void;
  fixedHeader?: boolean;
  canonicalLink: string;
  noFooter?: boolean;
  noHeader?: boolean;
}

const LEGAL_LINKS = {
  termsOfUse: "termos-de-uso",
  dataPolicy: "politica-de-privacidade",
};

const META_DESCRIPTION =
  "Proteção compartilhada para o seu carro e celular. Contrate em minutos. Sem franquia e sem surpresas!";

const META_TITLE = "Seu carro e celular segurados por quem se importa.";

const LandingLayout: React.FC<Props> = ({
  pageTitle,
  children,
  fixedHeader,
  canonicalLink,
  noFooter,
  noHeader,
}) => {
  const { isScrollYLessWindowHeight } = useScrollYPosition();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={canonicalLink} />
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:description" content={`Pier. ${META_TITLE}`} />
        <meta name="twitter:title" content={`Pier - ${META_TITLE}`} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
      </Head>
      {!noHeader && (
        <Header
          fixed={fixedHeader}
          transparent={isScrollYLessWindowHeight()}
          menuItems={menuBuilder("pier")}
        />
      )}
      {children}
      {!noFooter && <Footer legalLinks={LEGAL_LINKS} />}
    </>
  );
};
export default LandingLayout;
