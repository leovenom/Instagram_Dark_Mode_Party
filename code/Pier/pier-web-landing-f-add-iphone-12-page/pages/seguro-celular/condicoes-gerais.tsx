import { useRouter } from "next/router";
import SmartphoneLandingLayout from "layouts/SmartphoneLandingLayout";
import Terms from "landingPages/legal/terms/Terms";

const SmartphoneTerms = () => {
  const router = useRouter();
  const { embedded } = router.query;

  return (
    <SmartphoneLandingLayout
      pageTitle="Pier seguro celular - Conheça e entenda todos os nossos termos"
      canonicalLink="https://www.pier.digital/seguro-celular/condicoes-gerais"
      noFooter={embedded === "true"}
      noHeader={embedded === "true"}
    >
      <Terms variant="smartphone" />
    </SmartphoneLandingLayout>
  );
};

export default SmartphoneTerms;
