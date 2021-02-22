import MeliuzLandingPage from "landingPages/partnerships/meliuz/LandingPage";
import { buildModelsPlans } from "helpers/smartphone/plans/buildModelsPlans";

interface Props {
  plansValues: {};
  smartphoneModels: [];
}

const MeliuzPage: React.FC<Props> = ({ smartphoneModels, plansValues }) => {
  return (
    <MeliuzLandingPage
      smartphoneModels={smartphoneModels}
      plansValues={plansValues}
    />
  );
};

export async function getStaticProps() {
  const { plansValues, smartphoneModels } = await buildModelsPlans();
  return { props: { plansValues, smartphoneModels } };
}

export default MeliuzPage;
