import { useEffect } from "react";

import { generalTracker } from "helpers/mixpanelTracker";
import AutoLandingLayout from "layouts/AutoLandingLayout";

import buildSections from "./buildSections";

const BASE_TRACKING_NAME = "Mkt Landing Page";

const LandingPage = ({ pageData }) => {
  useEffect(() => {
    generalTracker.trackScreen(BASE_TRACKING_NAME, { url: pageData.url });
  }, []);

  return (
    <AutoLandingLayout
      allowTransparentHeader
      fixedHeader={false}
      pageTitle="Pier Seguro Auto - Seu carro protegido por quem se importa"
      canonicalLink={`https://www.pier.digital/lp/${pageData.url}`}
    >
      {buildSections(pageData)}
    </AutoLandingLayout>
  );
};

export default LandingPage;
