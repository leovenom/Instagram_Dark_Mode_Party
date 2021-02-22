import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import SmallFooter from "landingPages/sharedSections/SmallFooter";

const Section = styled.div`
  grid-area: footer;
  height: 300px;
  padding: 80px 24px 0;

  ${breakpoints.custom(930)} {
    padding: 52px 0 0;
  }
`;

const LEGAL_LINKS = {
  termsOfUse: "/seguro-auto/termos-de-uso",
  dataPolicy: "/seguro-auto/politica-de-privacidade",
};

function Footer() {
  return (
    <Section>
      <SmallFooter legalLinks={LEGAL_LINKS} />
    </Section>
  );
}

export default Footer;
