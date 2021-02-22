import * as React from "react";
import styled, { css } from "styled-components";

import Text from "ui/Text";
import ImageResponsive, { addResponsiveImageProps } from "ui/ImageResponsive";
import Section from "landingPages/sharedSections/Section";
import breakpoints from "ui/theme/breakpoints";
import { StyledGrid as Grid } from "ui/Grid";

import { HEADER_HEIGHT } from "ui/Header/styles";

const GRID_MAX_WIDTH = 1440;

const StyledSection = styled(Section)`
  &&& {
    position: relative;
    margin: ${HEADER_HEIGHT}px 0 0;
    padding: 0;

    ${breakpoints.tablet} {
      margin: ${HEADER_HEIGHT + 24}px 24px 0;
    }

    p,
    h1 {
      text-rendering: optimizelegibility;
    }

    ${breakpoints.tablet} {
      p,
      h1 {
        max-width: 500px;
      }
    }

    ${breakpoints.desktop} {
      p,
      h1 {
        color: inherit;
      }
    }

    .hero-wrapper {
      background: ${({ theme }) => theme.colors.gray400};
      height: 568px;
      grid-area: 3 / 1 / 3 / 3;

      ${breakpoints.tablet} {
        grid-area: 3 / 1 / 3 / 9;
      }
      ${breakpoints.desktop} {
        height: 682px;
        background: ${({ theme }) => theme.colors.gray400};
        grid-area: 1 / 1 / 1 / 13;
      }
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;

      ${breakpoints.tablet} {
        filter: none;
      }
    }
  }
`;

const StyledGrid = styled(Grid)`
  ${breakpoints.tablet} {
    grid-template-rows: unset;
  }
`;

const StyledGridItem = styled.div<{ maxWidth?: number }>`
  grid-area: 1 / 1 / 3 / 3;
  z-index: 1;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  h1,
  p {
    padding: 0 24px;
  }

  ${breakpoints.tablet} {
    background: unset;
    grid-area: 1 / 1 / 1 / 9;
    padding-left: 80px;
    justify-content: center;

    ${({ maxWidth }) =>
      maxWidth &&
      css`
        max-width: ${maxWidth}px;
      `}
  }

  ${breakpoints.desktop} {
    h1,
    p {
      padding: 0;
    }
    grid-area: 1 / 1 / 1 / 7;
  }
`;

const CtaContainer = styled.div`
  box-sizing: border-box;
  padding: 24px;

  ${breakpoints.tablet} {
    background: transparent;
    padding: 0 24px;
    margin: 0;
  }

  ${breakpoints.desktop} {
    padding: 0;
    width: 329px;
  }
`;

interface Props {
  imageSrc: string;
  imageDescription?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  titleMaxWidth?: number;
}

const HeroTwoColumns = ({
  imageSrc,
  imageDescription,
  title,
  subtitle,
  children,
  titleMaxWidth,
}: Props) => (
  <StyledSection id="hero-section">
    <StyledGrid maxWidth={GRID_MAX_WIDTH}>
      <StyledGridItem maxWidth={titleMaxWidth}>
        <Text variant="display" mb={24} mt={[40, 40, 0]}>
          {title}
        </Text>
        <Text variant="bodyLarge" mb={[0, 40, 40]}>
          {subtitle}
        </Text>
        <CtaContainer>{children}</CtaContainer>
      </StyledGridItem>
      <ImageResponsive
        {...addResponsiveImageProps(imageSrc)}
        alt={imageDescription}
      />
    </StyledGrid>
  </StyledSection>
);

export default HeroTwoColumns;
