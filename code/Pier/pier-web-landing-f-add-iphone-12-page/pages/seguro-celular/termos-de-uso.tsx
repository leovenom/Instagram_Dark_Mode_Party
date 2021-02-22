import styled from "styled-components";
import { useRouter } from "next/router";

import SmartphoneLandingLayout from "layouts/SmartphoneLandingLayout";
import breakpoints from "ui/theme/breakpoints";
import TermsOfUse20201222 from "landingPages/legal/termsOfUse/20201222";
import TermsOfUse20190112 from "landingPages/legal/termsOfUse/20190112";
import HeroCenteredContent from "landingPages/sharedSections/heroSections/HeroCenteredContent";
import data from "landingPages/legal/termsOfUse/data";

const MainContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TermsOfUseContainer = styled.div`
  padding: 56px 24px;

  ${breakpoints.desktop} {
    max-width: 750px;
    padding: 56px 0;
  }
`;

const docs = {
  last: {
    component: TermsOfUse20201222,
    id: "20201222",
    updatedAt: "22/12/2020",
  },
  old: [
    {
      component: TermsOfUse20190112,
      id: "20190112",
      updatedAt: "12/01/2019",
    },
  ],
};

const pageContent = (version) => {
  const versionToRender = version || docs.last;
  const oldVersions = version ? [] : docs.old;
  return (
    <>
      <HeroCenteredContent
        bg="yellow400"
        title={data.mainContent.title}
        subtitle={`Atualizado em  ${versionToRender.updatedAt}`}
        imageSrc={data.mainContent.imageSrc}
        imageDescription={data.mainContent.imageDescription}
      ></HeroCenteredContent>
      <MainContainer>
        <TermsOfUseContainer>
          {versionToRender.component(versionToRender, oldVersions)}
        </TermsOfUseContainer>
      </MainContainer>
    </>
  );
};

const TermsOfUse = () => {
  const router = useRouter();
  const { embedded, version } = router.query;
  const versionToRender = docs.old.find((v) => v.id === version);

  return (
    <SmartphoneLandingLayout
      pageTitle="Termos de Uso - Pier"
      canonicalLink="https://www.pier.digital/seguro-celular/termos-de-uso"
      noFooter={embedded === "true"}
      noHeader={embedded === "true"}
    >
      {pageContent(versionToRender)}
    </SmartphoneLandingLayout>
  );
};

export default TermsOfUse;
