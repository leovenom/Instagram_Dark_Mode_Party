import styled, { css } from "styled-components";
import Link from "next/link";

import Text from "ui/Text";
import Icon from "ui/Icon";
import theme from "ui/theme";
import breakpoints from "ui/theme/breakpoints";

const MobileContainer = styled.div`
  ${breakpoints.desktop} {
    display: none;
  }
`;

const DesktopContainer = styled.div<{ leftOffset?: number }>`
  display: none;
  ${breakpoints.desktop} {
    display: block;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

    ${({ leftOffset }) =>
      leftOffset &&
      css`
        border-left: ${leftOffset}px solid transparent;
      `}
  }
`;

const Container = styled.nav`
  margin-bottom: ${({ theme }) => theme.spacings.GIGA}px;

  ${breakpoints.desktop} {
    margin: 0 auto;
    padding: 16px 24px;
    max-width: 1224px;
  }
`;

const Crumb = styled(Text)<{ last: boolean }>`
  display: inline;
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ last }) => (last ? "default" : "pointer")};

  ${breakpoints.desktop} {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NextCrumb = styled.span`
  padding: 0 8px;
  ${breakpoints.desktop} {
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

interface Crumb {
  text: string;
  href: string;
}

interface Props {
  variant: "mobile" | "desktop";
  crumbs: Crumb[];
  leftOffset?: number;
}

function Breadcrumb({ variant, crumbs, leftOffset }: Props) {
  const lastCrumbIndex = crumbs.length - 1;

  function renderCrumbs() {
    return (
      <Container>
        {crumbs.map(
          ({ text, href }, i): JSX.Element => (
            <>
              <Link href={href}>
                <Crumb variant="tag" last={i === lastCrumbIndex}>
                  {text}
                </Crumb>
              </Link>
              {i !== lastCrumbIndex && (
                <NextCrumb>
                  <Icon
                    name="chevronRight"
                    fill="white"
                    size={theme.spacings.KILO}
                  />
                </NextCrumb>
              )}
            </>
          )
        )}
      </Container>
    );
  }

  if (variant === "mobile") {
    return <MobileContainer>{renderCrumbs()}</MobileContainer>;
  }

  return (
    <DesktopContainer leftOffset={leftOffset}>
      {renderCrumbs()}
    </DesktopContainer>
  );
}

export default Breadcrumb;
