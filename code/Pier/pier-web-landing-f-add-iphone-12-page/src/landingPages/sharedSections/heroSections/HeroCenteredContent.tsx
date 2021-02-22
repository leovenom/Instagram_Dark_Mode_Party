import * as React from "react";
import styled, { css } from "styled-components";

import Text from "ui/Text";
import Section from "landingPages/sharedSections/Section";
import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";

import { HEADER_HEIGHT } from "ui/Header/styles";

const StyledSection = styled(Section)<{
  withMarginBottom?: boolean;
  withMarginTop?: boolean;
}>`
  &&& {
    position: relative;
    flex-direction: column;
    height: 464px;
    align-items: center;

    ${({ withMarginTop }) =>
      withMarginTop &&
      css`
        margin-top: ${HEADER_HEIGHT}px;
      `}

    p {
      max-width: 600px;
    }
    ${breakpoints.desktop} {
      ${({ withMarginTop }) =>
        withMarginTop &&
        css`
          margin-top: ${HEADER_HEIGHT + 24}px;
        `}

      ${({ withMarginBottom }) =>
        withMarginBottom &&
        css`
          margin-bottom: 24px;
        `}
    }
  }
`;

interface Props {
  bg: keyof typeof colors;
  imageSrc: string;
  imageDescription: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  withMarginBottom?: boolean;
  withMarginTop?: boolean;
  withoutTabs?: boolean;
}

const CenteredContent = ({
  bg,
  imageSrc,
  imageDescription,
  title,
  subtitle,
  children,
  withoutTabs,
  withMarginBottom,
  withMarginTop = true,
}: Props) => (
  <StyledSection
    bg={bg}
    id="hero-section"
    withMarginBottom={withMarginBottom}
    withMarginTop={withMarginTop}
  >
    <img src={imageSrc} alt={imageDescription} />
    <Text variant="display" mb={16} mt={40} align="center">
      {title}
    </Text>
    <Text variant="bodyLarge" mb={withoutTabs ? 0 : 40} align="center">
      {subtitle}
    </Text>
    {children}
  </StyledSection>
);

export default CenteredContent;
