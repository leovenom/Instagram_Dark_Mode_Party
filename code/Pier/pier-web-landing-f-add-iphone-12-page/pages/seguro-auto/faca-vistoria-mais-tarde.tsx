import AutoLandingLayout from "layouts/AutoLandingLayout";
import InspectLaterComponent from "modules/auto/Signup/steps/InspectLater";

function InspectLater() {
  return (
    <AutoLandingLayout
      pageTitle="Pier Seguro Auto - Faça a vistoria"
      pageDescription="Agora só falta a vistoria do seu carro para você começar a usar o seguro da Pier"
      canonicalLink="https://www.pier.digital/seguro-auto/faca-vistoria-mais-tarde"
    >
      <InspectLaterComponent />
    </AutoLandingLayout>
  );
}

export default InspectLater;
