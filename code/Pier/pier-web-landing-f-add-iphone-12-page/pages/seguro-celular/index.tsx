import SmartphoneLandingPage from "landingPages/smartphone/LandingPage";
import { buildModelsPlans } from "helpers/smartphone/plans/buildModelsPlans";

interface Props {
  plansValues: {};
  smartphoneModels: [];
}

const Landing: React.FC<Props> = ({ plansValues, smartphoneModels }) => {
  return (
    <SmartphoneLandingPage
      plansValues={plansValues}
      smartphoneModels={smartphoneModels}
    />
  );
};

export async function getStaticProps() {
  const { plansValues, smartphoneModels } = await buildModelsPlans();
  return { props: { plansValues, smartphoneModels } };
}

export default Landing;
