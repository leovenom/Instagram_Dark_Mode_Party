import AutoLandingLayout from "layouts/AutoLandingLayout";
import StartInspectionComponent from "modules/auto/Signup/steps/StartInspection";

function StartInspection() {
  return (
    <AutoLandingLayout
      pageTitle="Pier Seguro Auto - Faça a vistoria"
      pageDescription="Agora só falta a vistoria do seu carro para você começar a usar o seguro da Pier"
      canonicalLink="https://www.pier.digital/seguro-auto/faca-vistoria"
    >
      <StartInspectionComponent />
    </AutoLandingLayout>
  );
}

export default StartInspection;
