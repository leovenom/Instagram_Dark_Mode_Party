import IphoneLandingPage from "landingPages/iphone12/LandingPage";
import { buildModelsPlans } from "helpers/smartphone/plans/buildModelsPlans";

interface Props {
  plansValues: {};
  smartphoneModels: [];
}

const IPhonePage: React.FC<Props> = ({ smartphoneModels, plansValues }) => {
  return (
    <IphoneLandingPage
      smartphoneModels={smartphoneModels}
      plansValues={plansValues}
    />
  );
};

export async function getStaticProps() {
  const { plansValues, smartphoneModels } = await buildModelsPlans();
  return { props: { plansValues, smartphoneModels } };
}

export default IPhonePage;
