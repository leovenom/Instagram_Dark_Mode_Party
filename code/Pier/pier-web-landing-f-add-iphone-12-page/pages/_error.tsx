import { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import Logo from "ui/Logo";
import PierLandingLayout from "layouts/PierLandingLayout";
import HeroCenteredContent from "landingPages/sharedSections/heroSections/HeroCenteredContent";

const HALF_CIRCLE_IMG_PATH = "/static_assets/images/rebranding/half-circle.svg";

const SimpleHeader = styled.nav`
  height: 80px;
  width: 100%;
  display: grid;
  place-content: center center;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #e4e4e4;
`;

const ErrorPage = () => {
  useEffect(() => {
    const rollbar = window["Rollbar"];
    if (rollbar) rollbar.error("ErrorPage Screen Viewed");
  }, []);

  return (
    <PierLandingLayout
      pageTitle="Pier - Algo deu errado"
      canonicalLink="https://www.pier.digital/error"
      noHeader
    >
      <SimpleHeader>
        <Link href="/">
          <a href="/" title="Pier Logo">
            <Logo color="secondary" />
          </a>
        </Link>
      </SimpleHeader>

      <HeroCenteredContent
        bg="gray200"
        title="Algo deu errado..."
        subtitle="Tivemos algum erro no sistema. 
        Tente novamente mais tarde."
        imageSrc={HALF_CIRCLE_IMG_PATH}
        imageDescription="Meio círculo da cor azul escuro"
        withMarginBottom
      />
    </PierLandingLayout>
  );
};

export default ErrorPage;
