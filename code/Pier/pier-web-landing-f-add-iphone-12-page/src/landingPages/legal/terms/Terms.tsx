import styled from "styled-components";
import { useRouter } from "next/router";

import breakpoints from "ui/theme/breakpoints";
import Button from "ui/Button";
import Tabs from "ui/Tabs";
import Text from "ui/Text";
import Divider from "ui/Divider";
import HeroCenteredContent from "landingPages/sharedSections/heroSections/HeroCenteredContent";
import SmartphoneTerms from "./smartphone";
import AutoTerms from "./auto";

import data from "./data";

const MainContainer = styled.div`
  margin-top: 120px;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 48px;
`;

const ProductTitleContainer = styled.div`
  width: 750px;
  max-width: 100%;
  padding: 0 24px;
  box-sizing: border-box;

  ${breakpoints.desktop} {
    padding: 0;
  }
`;

const GeneralConditionsContainer = styled.div`
  padding: 56px 24px 0px;

  ${breakpoints.desktop} {
    max-width: 750px;
    padding: 56px 0 0;
  }
`;

const TabsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`;

interface Props {
  variant: "auto" | "smartphone";
  version?: any;
}

const PageContent = ({ version, variant }: Props) => {
  const ProductTerms = variant === "auto" ? AutoTerms : SmartphoneTerms;
  const versionToRender = version || ProductTerms.last;
  const oldVersions = version ? [] : ProductTerms.old;

  return (
    <>
      <HeroCenteredContent
        bg="yellow400"
        title={data.mainContent.title}
        subtitle={data.mainContent.subtitle}
        imageSrc={data.mainContent.imageSrc}
        imageDescription={data.mainContent.imageDescription}
      >
        <TabsContainer>
          <Tabs>
            <Tabs.Item
              route="/seguro-celular/condicoes-gerais"
              defaultActive={variant === "smartphone"}
            >
              Seguro de celular
            </Tabs.Item>
            <Tabs.Item
              route="/seguro-auto/condicoes-gerais"
              defaultActive={variant === "auto"}
            >
              Seguro auto
            </Tabs.Item>
          </Tabs>
        </TabsContainer>
      </HeroCenteredContent>

      <MainContainer>
        <ProductTitleContainer>
          <Text variant="sectionSecondary" mb={8}>
            Seguro de {versionToRender.label}
          </Text>
          <Text variant="body" mb={40}>
            Atualizado em {versionToRender.updatedAt}
          </Text>
          <Divider />
        </ProductTitleContainer>
        <GeneralConditionsContainer>
          {versionToRender.component(versionToRender, oldVersions)}
        </GeneralConditionsContainer>
        <Button
          asLink
          href={`/static_assets/${
            variant === "auto" ? "seguro-auto" : "seguro-celular"
          }/legal/generalConditions/${versionToRender.id}.pdf`}
          download
        >
          Baixe em PDF
        </Button>
      </MainContainer>
    </>
  );
};

const Terms = ({ variant }: Props) => {
  const ProductTerms = variant === "auto" ? AutoTerms : SmartphoneTerms;
  const router = useRouter();
  const { version } = router.query;

  const versionToRender = ProductTerms.old.find((v) => v.id === version);

  return <PageContent version={versionToRender} variant={variant} />;
};

export default Terms;
