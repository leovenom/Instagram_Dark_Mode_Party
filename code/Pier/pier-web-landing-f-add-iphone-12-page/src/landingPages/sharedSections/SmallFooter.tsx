import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import { PIER_DESCRIPTION } from "./Footer";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${breakpoints.tablet} {
    padding: 32px 0 48px;
  }

  ${breakpoints.desktop} {
    align-items: flex-start;
  }
`;

const FooterText = styled.p`
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 32px;
`;

const TermsContent = styled.p`
  margin: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    font-size: 13px;
    line-height: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
    :hover {
      text-decoration: underline;
    }
  }

  a:not(:last-of-type) {
    padding-right: 16px;
  }
`;

interface Props {
  legalLinks: {
    termsOfUse: string;
    dataPolicy: string;
  };
}

const Footer = ({ legalLinks }: Props) => {
  return (
    <StyledFooter id="page-footer">
      <FooterText>{PIER_DESCRIPTION}</FooterText>
      <TermsContent>
        <a href={legalLinks.termsOfUse}>Termos de uso</a>
        <a href={legalLinks.dataPolicy}>Política de Privacidade</a>
      </TermsContent>
    </StyledFooter>
  );
};

export default Footer;
