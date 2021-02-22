import { useRouter } from "next/router";
import SmartphoneLandingLayout from "layouts/AutoLandingLayout";
import Terms from "landingPages/legal/terms/Terms";

const AutoTerms = () => {
  const router = useRouter();
  const { embedded } = router.query;

  return (
    <SmartphoneLandingLayout
      pageTitle="Pier Seguro Auto - Conheça e entenda todos os nossos termos"
      pageDescription="Saiba todos os nossos termos, condições gerais, termos de uso e política de privacidade referente ao nosso seguro auto."
      canonicalLink="https://www.pier.digital/seguro-auto/condicoes-gerais"
      noFooter={embedded === "true"}
      noHeader={embedded === "true"}
      allowTransparentHeader
    >
      <Terms variant="auto" />
    </SmartphoneLandingLayout>
  );
};

export default AutoTerms;
