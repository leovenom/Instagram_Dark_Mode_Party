import * as React from "react";
import styled from "styled-components";

import Text from "ui/Text";
import ImageResponsive, { addResponsiveImageProps } from "ui/ImageResponsive";
import Section from "landingPages/sharedSections/Section";
import breakpoints from "ui/theme/breakpoints";
import { StyledGrid as Grid } from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";

import { HEADER_HEIGHT } from "ui/Header/styles";

const GRID_MAX_WIDTH = 1440;

const DEFAULT_MOBILE_MARGIN_TOP = HEADER_HEIGHT;
const DEFAULT_TABLET_MARGIN_TOP = HEADER_HEIGHT + 24;

const variants = {
  dark: "dark",
  default: "default",
};

const StyledSection = styled(Section)<{
  textMaxWidth: number;
  mt?: number;
  variant?: keyof typeof variants;
}>`
  &&& {
    position: relative;
    margin: ${({ mt }) => mt || DEFAULT_MOBILE_MARGIN_TOP}px 0 0;
    padding: 0;

    ${({ theme, variant }) =>
      variant === variants.dark &&
      `background-image: ${theme.colors.darkGradient}`};

    ${breakpoints.tablet} {
      margin: ${({ mt }) => mt || DEFAULT_TABLET_MARGIN_TOP}px 24px 0;
    }

    p,
    h1 {
      text-rendering: optimizelegibility;
    }
    h1 {
      max-width: 300px;
    }

    ${breakpoints.tablet} {
      p,
      h1 {
        max-width: ${({ textMaxWidth }) => textMaxWidth}px;
        ${({ variant }) =>
          variant === variants.default &&
          `
            color: inherit;
          `}
      }
    }

    .hero-wrapper {
      height: 100%;
      ${breakpoints.tablet} {
        height: 682px;
      }
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      margin-bottom: -7px;

      ${breakpoints.tablet} {
        filter: none;
        min-height: unset;
        margin-bottom: unset;
      }
    }
  }
`;

const StyledGrid = styled(Grid)`
  ${breakpoints.tablet} {
    grid-template-rows: unset;
  }
`;

const StyledGridItem = styled(GridItem)`
  &&& {
    padding: 0 24px;

    ${breakpoints.desktop} {
      margin-top: 0;
      padding: 0;
      padding-left: 80px;
      display: flex;

      justify-content: center;
    }
  }
`;

const CtaContainer = styled.div`
  width: 100%;
  padding-bottom: 24px;

  ${breakpoints.tablet} {
    padding: 0;
    margin: 0;
  }

  ${breakpoints.desktop} {
    width: 329px;
  }
`;

const TextContaier = styled.div`
  margin-bottom: 24px;
  ${breakpoints.desktop} {
    margin-bottom: 40px;
  }
`;

interface Props {
  imageSrc: string;
  imageDescription?: string;
  title: string;
  subtitle: string | string[];
  children?: React.ReactNode;
  mainTextMt?: number;
  textMaxWidth?: number;
  mt?: number;
  variant?: keyof typeof variants;
}

const HeroTwoColumns = ({
  imageSrc,
  imageDescription,
  title,
  subtitle,
  children,
  textMaxWidth = 480,
  mt,
  variant = "default",
}: Props) => {
  return (
    <StyledSection
      variant={variant}
      id="hero-section"
      textMaxWidth={textMaxWidth}
      mt={mt}
    >
      <StyledGrid maxWidth={GRID_MAX_WIDTH}>
        <StyledGridItem m={2} t={8} d={6} justifyContent="center">
          <div>
            <Text
              variant="display"
              mb={24}
              mt={[40, 40, 0]}
              color={variant === variants.dark ? "secondary" : undefined}
            >
              {title}
            </Text>
            {typeof subtitle === "string" ? (
              <Text
                variant="bodyLarge"
                mb={[24, 40, 40]}
                color={variant === variants.dark ? "white" : undefined}
              >
                {subtitle}
              </Text>
            ) : (
              <TextContaier>
                {subtitle.map((item) => (
                  <Text
                    key={item}
                    variant="bodyLarge"
                    mb={8}
                    color={variant === variants.dark ? "white" : undefined}
                  >
                    {item}
                  </Text>
                ))}
              </TextContaier>
            )}
            <CtaContainer>{children}</CtaContainer>
          </div>
        </StyledGridItem>
        <GridItem m={2} t={8} d={6}>
          <ImageResponsive
            {...addResponsiveImageProps(imageSrc)}
            alt={imageDescription}
          />
        </GridItem>
      </StyledGrid>
    </StyledSection>
  );
};

export default HeroTwoColumns;
