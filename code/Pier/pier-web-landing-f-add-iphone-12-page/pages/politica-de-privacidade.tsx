import styled from "styled-components";
import { useRouter } from "next/router";

import AutoLandingLayout from "layouts/AutoLandingLayout";
import breakpoints from "ui/theme/breakpoints";
import HeroCenteredContent from "landingPages/sharedSections/heroSections/HeroCenteredContent";
import data from "landingPages/legal/dataPolicy/data";
import DataPolicy20201222 from "landingPages/legal/dataPolicy/20201222";
import DataPolicy20181217 from "landingPages/legal/dataPolicy/20181217";

const MainContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DataPolicyContainer = styled.div`
  padding: 56px 24px;

  ${breakpoints.desktop} {
    max-width: 750px;
    padding: 56px 0;
  }
`;

const docs = {
  last: {
    component: DataPolicy20201222,
    id: "20201222",
    updatedAt: "22/12/2020",
  },
  old: [
    {
      component: DataPolicy20181217,
      id: "20181217",
      updatedAt: "17/12/2018",
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
      />
      <MainContainer>
        <DataPolicyContainer>
          {versionToRender.component(versionToRender, oldVersions)}
        </DataPolicyContainer>
      </MainContainer>
    </>
  );
};

const DataPolicy = () => {
  const router = useRouter();
  const { version } = router.query;
  const versionToRender = docs.old.find((v) => v.id === version);

  return (
    <AutoLandingLayout
      allowTransparentHeader
      fixedHeader
      pageTitle="Política de Privacidade - Pier"
      canonicalLink="https://www.pier.digital/politica-de-privacidade"
    >
      {pageContent(versionToRender)}
    </AutoLandingLayout>
  );
};

export default DataPolicy;
