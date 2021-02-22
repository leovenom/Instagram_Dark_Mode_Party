import * as React from "react";
import Head from "next/head";

import Header from "ui/Header";
import menuBuilder from "ui/Header/menuBuilder";
import Footer from "landingPages/sharedSections/Footer";
import { useScrollYPosition } from "hooks/useScrollPosition";

interface Props {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription?: string;
  toggleSmartphoneSelector?: () => void;
  fixedHeader?: boolean;
  fixedCover?: boolean;
  canonicalLink: string | null;
  allowTransparentHeader?: boolean;
  noFooter?: boolean;
  noHeader?: boolean;
  crumbs?: {
    text: string;
    href: string;
  }[];
}

const LEGAL_LINKS = {
  termsOfUse: "/seguro-auto/termos-de-uso",
  dataPolicy: "/seguro-auto/politica-de-privacidade",
};

const META_DESCRIPTION =
  "Um seguro de carro sem franquia, sem carência e por um preço que você nem imaginava que existia. Faça sua cotação e contrate em minutos.";

const LandingLayout: React.FC<Props> = ({
  pageTitle,
  children,
  fixedHeader,
  canonicalLink,
  allowTransparentHeader,
  noHeader,
  noFooter,
  pageDescription = META_DESCRIPTION,
}) => {
  const { isScrollYLessWindowHeight } = useScrollYPosition();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        {canonicalLink && <link rel="canonical" href={canonicalLink} />}
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      {!noHeader && (
        <Header
          fixed={fixedHeader}
          transparent={isScrollYLessWindowHeight() && allowTransparentHeader}
          menuItems={menuBuilder("auto")}
          rootPage="/"
        />
      )}
      {children}
      {!noFooter && <Footer legalLinks={LEGAL_LINKS} />}
    </>
  );
};

export default LandingLayout;
