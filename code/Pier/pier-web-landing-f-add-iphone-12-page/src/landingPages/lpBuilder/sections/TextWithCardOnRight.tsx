import styled from "styled-components";
import Link from "next/link";

import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Text from "ui/Text";
import Markdown from "ui/Markdown";

import Section from "landingPages/sharedSections/Section";

interface Props {
  title: string;
  bodyText?: string;
  image?: {
    src: string;
    description: string;
  };
  bodyTextSecondary?: string;
  cardTitle?: string;
  cardBody?: string;
  cardLink?: string;
}

const SectionContainer = styled.div`
  max-width: 808px;
`;

const CardContainer = styled.a`
  margin-top: 24px;
  width: 288px;
  cursor: pointer;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.black12};
  border-radius: 6px;

  ${({ theme }) => theme.styles.rippleEffect};
  transition: background 250ms ease-out;
`;

const CardHeader = styled.div`
  height: 180px;
`;

const CardBody = styled.div`
  padding: 24px;
`;

const CardImage = styled.img`
  transition: transform 0.2s;
  border-radius: 6px 6px 0px 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWithCenteredImage = ({
  title,
  bodyText,
  image,
  bodyTextSecondary,
  cardTitle,
  cardBody,
  cardLink = "/seguro-auto",
}: Props) => (
  <Section pb={20} pt={20}>
    <SectionContainer>
      <Grid>
        <GridItem m={2} t={8} d={12} alignItems="center">
          <Text variant="section" align="center" mb={24}>
            {title}
          </Text>
        </GridItem>

        <GridItem>{bodyText && <Markdown>{bodyText}</Markdown>}</GridItem>

        <GridItem m={2} t={8} d={6}>
          {bodyTextSecondary && <Markdown>{bodyTextSecondary}</Markdown>}
        </GridItem>

        <GridItem m={2} t={8} d={6} alignItems="center">
          <Link href={cardLink}>
            <CardContainer href={cardLink}>
              <CardHeader>
                <CardImage src={image.src} alt={image.description} />
              </CardHeader>
              <CardBody>
                <Text variant="bodyLarge" mb={16}>
                  {cardTitle}
                </Text>
                <Text variant="body" color="gray600">
                  {cardBody}
                </Text>
              </CardBody>
            </CardContainer>
          </Link>
        </GridItem>
      </Grid>
    </SectionContainer>
  </Section>
);

export default TextWithCenteredImage;
