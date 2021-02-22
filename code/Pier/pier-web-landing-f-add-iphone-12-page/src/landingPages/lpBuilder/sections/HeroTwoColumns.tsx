import * as React from "react";
import styled from "styled-components";

import Text from "ui/Text";
import Section from "landingPages/sharedSections/Section";
import breakpoints from "ui/theme/breakpoints";
import { StyledGrid as Grid } from "ui/Grid";
import { StyledGridItem as GridItem } from "ui/GridItem";

import { HEADER_HEIGHT } from "ui/Header/styles";

const GRID_MAX_WIDTH = 1440;

const DEFAULT_MOBILE_MARGIN_TOP = HEADER_HEIGHT;
const DEFAULT_TABLET_MARGIN_TOP = HEADER_HEIGHT + 24;

const StyledSection = styled(Section)<{ textMaxWidth: number; mt?: number }>`
  &&& {
    position: relative;
    margin: ${({ mt }) => mt || DEFAULT_MOBILE_MARGIN_TOP}px 0 0;
    padding: 0;

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
        color: inherit;
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

      ${breakpoints.tablet} {
        filter: none;
        min-height: unset;
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
    margin-top: 80px;

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
}

const HeroTwoColumns = ({
  imageSrc,
  imageDescription,
  title,
  subtitle,
  children,
  textMaxWidth = 480,
  mt,
}: Props) => (
  <StyledSection id="hero-section" textMaxWidth={textMaxWidth} mt={mt}>
    <StyledGrid maxWidth={GRID_MAX_WIDTH}>
      <StyledGridItem m={2} t={8} d={6} justifyContent="center">
        <div>
          <Text variant="display" mb={24} mt={[40, 40, 0]}>
            {title}
          </Text>
          {typeof subtitle === "string" ? (
            <Text variant="bodyLarge" mb={[24, 40, 40]}>
              {subtitle}
            </Text>
          ) : (
            <TextContaier>
              {subtitle.map((item) => (
                <Text key={item} variant="bodyLarge" mb={8}>
                  {item}
                </Text>
              ))}
            </TextContaier>
          )}
          <CtaContainer>{children}</CtaContainer>
        </div>
      </StyledGridItem>
      <GridItem m={2} t={8} d={6}>
        {/* TODO: pass alt description over datoCMS */}
        <img src={imageSrc} alt="imagem da seção principal" />
      </GridItem>
    </StyledGrid>
  </StyledSection>
);

export default HeroTwoColumns;
