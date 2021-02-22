import LPBuilderLandingPage from "landingPages/lpBuilder/LandingPage";

import { getPageDetailsByPath, getAllPagesPaths } from "services/datoCms/api";

const Landing = ({ pageData }) => {
  if (!pageData) return null;
  return <LPBuilderLandingPage pageData={pageData[0]} />;
};

export async function getStaticPaths() {
  const pagesPaths = await getAllPagesPaths();
  const allParams = pagesPaths
    ? pagesPaths.map(({ url }) => ({
        params: { subroute: url },
      }))
    : [];

  return {
    paths: allParams,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageData = await getPageDetailsByPath(params.subroute);

  return {
    props: {
      pageData,
    },
  };
}

export default Landing;
