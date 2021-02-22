import { useEffect } from "react";
import AutoLandingLayout from "layouts/AutoLandingLayout";
import { autoTracker } from "helpers/mixpanelTracker";
import Assistance from "landingPages/assistance/LandingPage";
import ShoppingCart from "landingPages/auto/components/ShoppingCart";

const BASE_TRACKING_NAME = "Sobre os Serviços Page";

const AboutServices = () => {
  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  return (
    <AutoLandingLayout
      allowTransparentHeader
      fixedHeader
      pageTitle="Pier Seguro Auto - Confira todos os serviços disponíveis"
      pageDescription="Membros Pier tem seguro contra roubo e furto e serviços de reboque, troca de pneus, chaveiro, guarda do veículo e pane, elétrica, mecânica ou seca."
      canonicalLink="https://www.pier.digital/seguro-auto/sobre-os-servicos"
    >
      <Assistance baseTracking={BASE_TRACKING_NAME} />
      <ShoppingCart
        variant="mobile-bottom-fixed"
        quoteEvent={() =>
          autoTracker.trackButton(`${BASE_TRACKING_NAME} Quote`, {
            floating: true,
          })
        }
        spyParams={{
          bottomSelector: "#need-help",
          bottomOffset: -50,
        }}
      />
    </AutoLandingLayout>
  );
};

export default AboutServices;
