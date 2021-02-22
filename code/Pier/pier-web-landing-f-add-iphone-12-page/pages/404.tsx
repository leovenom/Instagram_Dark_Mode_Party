import { useEffect } from "react";
import { generalTracker } from "helpers/mixpanelTracker";
import Router from "next/router";

import Button from "ui/Button";
import PierLandingLayout from "layouts/PierLandingLayout";
import HeroCenteredContent from "landingPages/sharedSections/heroSections/HeroCenteredContent";

const HALF_CIRCLE_IMG_PATH = "/static_assets/images/rebranding/half-circle.svg";

const NotFoundPage = () => {
  useEffect(() => {
    generalTracker.trackScreen("NotFound", { url: Router.pathname });
  }, []);

  const goToHome = () => Router.push("/");

  return (
    <PierLandingLayout
      pageTitle="Pier - Algo deu errado"
      canonicalLink="https://www.pier.digital/404"
    >
      <HeroCenteredContent
        bg="yellow400"
        title="Ué..."
        subtitle="Essa página não existte"
        imageSrc={HALF_CIRCLE_IMG_PATH}
        imageDescription="Meio círculo da cor azul escuro"
        withMarginBottom
      >
        <Button size="small" onClick={goToHome}>
          Voltar para a home
        </Button>
      </HeroCenteredContent>
    </PierLandingLayout>
  );
};

export default NotFoundPage;
