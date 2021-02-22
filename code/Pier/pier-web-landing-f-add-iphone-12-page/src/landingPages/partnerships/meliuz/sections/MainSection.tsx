import * as React from "react";
import Section from "../../../sharedSections/Section";
import Text from "ui/Text";
import ExternalLink from "ui/ExternalLink";
import Breakpoint from "ui/theme/breakpoints";
import styled from "styled-components";

import { StyledGridItem as GridItem } from "ui/GridItem";

const CenterContentGrid = styled(GridItem)`
  text-align: center;
  width: 930px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  ${Breakpoint.tablet} {
    margin-bottom: 0px;
  }
`;

const Image = styled.img`
  margin-left: 13px;
`;

interface Props {
  title: string;
  subtitle: string;
  partnerDescription: string;
  partnerImgPath: string;
  partnerImgExternalLink?: string;
}

const MainSection: React.FC<Props> = ({
  title,
  subtitle,
  partnerDescription,
  partnerImgPath,
  partnerImgExternalLink,
}): JSX.Element => {
  return (
    <Section bg="primaryGradient">
      <CenterContentGrid m={2} t={8} d={7}>
        <Text variant="display" color="white" mb={[24, 32, 32]}>
          {title}
        </Text>
        <Text variant="bodyLarge" color="white" mb={[24, 32, 32]}>
          {subtitle}
        </Text>
        <Row>
          <Text variant="bodySmallest" color="white">
            {partnerDescription}
          </Text>
          <ExternalLink href={partnerImgExternalLink}>
            <Image src={partnerImgPath} alt="Logotipo da Méliuz" />
          </ExternalLink>
        </Row>
      </CenterContentGrid>
    </Section>
  );
};

export default MainSection;
