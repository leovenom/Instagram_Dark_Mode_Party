import * as React from "react";

import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Divider from "ui/Divider";
import Logo from "ui/Logo";
import Icon from "ui/Icon";
import Button from "ui/Button";
import CustomizedIcon from "ui/Icon/CustomizedIcon";
import styled from "styled-components";
import Link from "next/link";
import Text from "ui/Text";

import breakpoints from "ui/theme/breakpoints";

import useIntercom from "hooks/useIntercom";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.primary};

  padding: 64px 24px 64px 24px;

  ${breakpoints.tablet} {
    padding: 64px 32px 48px 32px;
  }

  ${breakpoints.desktop} {
    padding: 64px 32px 48px 32px;
  }
`;

const ListTitle = styled.p`
  text-transform: uppercase;
  line-height: 18px;

  letter-spacing: 1px;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  margin: 0px;
  color: ${({ theme }) => theme.colors.gray};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 32px;

  li {
    margin-bottom: 16px;
  }

  svg {
    margin-right: 8px;
    min-height: 16px;
    margin-bottom: -3px;
  }

  li a,
  li div {
    position: relative;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.lighterGray};
    :hover {
      text-decoration: underline;
    }
  }
`;

const TermsContent = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray};

  display: flex;
  align-items: center;
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

  span {
    margin: 0 4px;
  }
`;

const MediaLink = styled.a<{ mb?: number; noMarginDesktop?: boolean }>`
  text-decoration: none;
  display: block;

  cursor: pointer;
  ${({ mb }) =>
    mb &&
    `
    margin-bottom: ${mb}px;
  `}

  ${breakpoints.desktop} {
    ${({ noMarginDesktop }) =>
      noMarginDesktop &&
      `
      margin-bottom: 0px;
    `}
  }

  img {
    width: 137px;
    height: auto;
  }
`;

const SocialMediaContainer = styled.div`
  margin-bottom: 48px;

  a {
    cursor: pointer;
    margin-right: 20px;
  }
`;

const AppStoreButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;

  div {
    width: 160px;
  }
  div:first-child {
    margin: 0 24px 24px 0;
  }

  ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

const StyledDivider = styled(Divider)`
  background: ${({ theme }) => theme.colors.gray600};
`;

const ADJUST_URL = "https://app.adjust.com/epnx8wl";

export const PIER_DESCRIPTION = `A Pier Seguradora S.A., popularmente conhecida como Pier, é a seguradora digital mais amada do Brasil. O nosso
CNPJ é o 39.380.513/0001-00 e o nosso escritório fica na Rua Cláudio Soares, 72, conj. 705, São Paulo, SP, CEP 05422-030. Quando sair a vacina, aparece para um café! ;)`;

interface Props {
  legalLinks: {
    termsOfUse: string;
    dataPolicy: string;
  };
}

interface FooterListItemProps {
  path: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterListItem = ({ path, children, external }: FooterListItemProps) => {
  const externalLinkProps = external
    ? { target: "_blank", rel: "noopener" }
    : {};

  const Wrapper = ({ children, ...props }) =>
    external ? (
      <>{children}</>
    ) : (
      <Link href={props.path} {...props}>
        {children}
      </Link>
    );

  return (
    <li>
      <Wrapper href={path}>
        <a {...externalLinkProps} {...(external && { href: path })}>
          {children}
        </a>
      </Wrapper>
    </li>
  );
};

const FooterListTitle = ({ children }) => (
  <li>
    <ListTitle>{children}</ListTitle>
  </li>
);

const Footer = ({ legalLinks }: Props) => {
  const showIntercom = useIntercom();

  return (
    <StyledFooter id="page-footer">
      <Grid>
        <GridItem m={2} t={8} d={4}>
          <MediaLink mb={32}>
            <Logo color="secondary" />
          </MediaLink>

          <SocialMediaContainer>
            <a
              target="_blank"
              aria-label="Acesse o Facebook da Pier"
              rel="noopener"
              href="https://www.facebook.com/pierdigitalbrasil/"
            >
              <Icon name="facebook" fill="white" size={32} />
            </a>
            <a
              target="_blank"
              aria-label="Acesse o Instagram da Pier"
              rel="noopener"
              href="https://www.instagram.com/pierdigital/"
            >
              <Icon name="instagram" fill="white" size={32} />
            </a>
          </SocialMediaContainer>

          <AppStoreButtonsContainer>
            <div>
              <Button
                fullWidth
                variant="black"
                asLink
                href={ADJUST_URL}
                title="Baixar na App Store"
              >
                <CustomizedIcon name="downloadAppStore" />
              </Button>
            </div>
            <div>
              <Button
                fullWidth
                variant="black"
                asLink
                href={ADJUST_URL}
                title="Disponível no Google Play"
              >
                <CustomizedIcon name="downloadPlayStore" />
              </Button>
            </div>
          </AppStoreButtonsContainer>
        </GridItem>

        <GridItem m={2} t={2} d={2}>
          <List>
            <FooterListTitle>Pier</FooterListTitle>
            <FooterListItem path="/pedir-reembolso">
              Pedir reembolso
            </FooterListItem>
            <FooterListItem path="https://careers.pier.digital" external>
              Carreira
            </FooterListItem>
            <FooterListItem path="https://blog.pier.digital" external>
              Blog
            </FooterListItem>
            <FooterListItem path="/lp/sandbox-regulatorio-pier" external>
              Sandbox
            </FooterListItem>
          </List>
        </GridItem>

        <GridItem m={2} t={2} d={2}>
          <List>
            <FooterListTitle>Celular</FooterListTitle>
            <FooterListItem path="/seguro-celular">
              Seguro de celular
            </FooterListItem>
            <FooterListItem path="/seguro-celular/tabela-pipe">
              Tabela Pipe
            </FooterListItem>
          </List>
        </GridItem>

        <GridItem m={2} t={2} d={2}>
          <List>
            <FooterListTitle>Auto</FooterListTitle>
            <FooterListItem path="/seguro-auto">Seguro auto</FooterListItem>
            <FooterListItem path="/seguro-auto/sobre-os-servicos">
              Assistência
            </FooterListItem>
          </List>
        </GridItem>

        <GridItem m={2} t={2} d={2}>
          <List>
            <FooterListTitle>Contato</FooterListTitle>
            <li>
              <div role="button" onClick={showIntercom}>
                <Icon name="chat" fill="white" /> Chat
              </div>
            </li>
            <FooterListItem path="mailto:contato@pier.digital" external>
              <Icon name="mail" fill="white" /> Email
            </FooterListItem>
            <FooterListItem path="/imprensa">
              <Icon name="megaphone" fill="white" /> Imprensa
            </FooterListItem>
          </List>
        </GridItem>

        <GridItem m={2} t={2} d={2}></GridItem>
        <GridItem>
          <StyledDivider my={32} />
          <div>
            <Text color="gray" variant="bodySmallest">
              {PIER_DESCRIPTION}
            </Text>
          </div>
          <TermsContent>
            <a href={legalLinks.termsOfUse}>Termos de uso</a>
            <span> ∙</span>
            <a href={legalLinks.dataPolicy}>Política de Privacidade</a>
          </TermsContent>
        </GridItem>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
