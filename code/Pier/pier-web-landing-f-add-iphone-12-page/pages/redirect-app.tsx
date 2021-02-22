import { useEffect } from "react";
import { useRouter } from "next/router";
import AutoLandingLayout from "layouts/AutoLandingLayout";
import styled from "styled-components";

const PurleBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
`;

const buildDeepLinkParams = (utm_campaign, utm_term, utm_content) => {
  if (!utm_campaign) return "";

  const campaignParam = `?utm_campaign=${utm_campaign}`;
  const termParam = utm_term ? `&utm_term=${utm_term}` : "";
  const contentParam = utm_content ? `&utm_content=${utm_content}` : "";

  return `${campaignParam}${termParam}${contentParam}`;
};

const RedirectApp = () => {
  const router = useRouter();
  const { utm_campaign, utm_term, utm_content } = router.query;

  const redirectIfAppNotInstalled = (webLocation) => {
    setTimeout(() => window.location.replace(webLocation), 1500);
  };

  useEffect(() => {
    if (Object.keys(router.query)?.length) {
      const appPath = router.query.appPath;
      const deepLinkParams = buildDeepLinkParams(
        utm_campaign,
        utm_term,
        utm_content
      );

      const appLocation = `pier://${
        appPath || "home/contracts"
      }${deepLinkParams}`;

      const webPath = router.query.webPath || "";
      const webLocation = `https://pier.digital/${webPath}`;

      window.location.replace(appLocation);
      redirectIfAppNotInstalled(webLocation);
    }
  }, [router.query]);

  return (
    <AutoLandingLayout
      pageTitle="Redirect"
      canonicalLink="https://www.pier.digital/redirect-app"
      allowTransparentHeader
      noFooter
    >
      <PurleBackground />
    </AutoLandingLayout>
  );
};

export default RedirectApp;
