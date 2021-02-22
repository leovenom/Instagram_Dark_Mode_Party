import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Section from "../../sharedSections/Section";
import ExternalLink from "ui/ExternalLink";
import Text from "ui/Text";
import Button from "ui/Button";
import Icon from "ui/Icon";

const HANDS_WITH_GLOVES = "/static_assets/images/hands-with-gloves.png";
const SHARE_MESSAGE =
  "Pensando na proteção de quem cuida da gente, a Pier está oferecendo Seguro grátis para o celular dos profissionais de saúde 😍 Veja mais detalhes no link https://www.pier.digital/covid19-saude";

interface Cta {
  text: string;
  url: string;
}

interface Props {
  title: string;
  description: string;
  cta: Cta;
  shareText: string;
}

const SocialMediaContainer = styled.div`
  a {
    cursor: pointer;
    margin-right: 20px;
  }
  text-align: center;
  margin-bottom: 30px;
  ${breakpoints.desktop} {
    text-align: left;
  }
  ${breakpoints.tablet} {
    text-align: left;
  }
`;

const HandsImage = styled.img`
  width: 100%;
  margin-left: 24px;
  ${breakpoints.tablet} {
    margin-left: 32px;
  }
  ${breakpoints.desktop} {
    margin-left: 112px;
  }
`;

const CampaignButton = styled(Button)`
  margin: 30px 0;
  min-width: 100%;
  ${breakpoints.tablet} {
    max-width: 300px;
    min-width: 0;
  }
  ${breakpoints.desktop} {
    max-width: 300px;
    min-width: 0;
  }
`;

const Campaign = ({ title, description, cta, shareText }: Props) => (
  <Section bg="white">
    <Grid>
      <GridItem m={2} t={4} d={6} maxWidth={560}>
        <Text variant="section" mb={32}>
          {title}
        </Text>
        <Text variant="bodyLarge">{description}</Text>
        <a target="_blank" rel="noopener" href={cta.url}>
          <CampaignButton asLink variant="secondary">
            {cta.text}
          </CampaignButton>
        </a>
        <SocialMediaContainer>
          <Text variant="bodySmall" color="darkerGray" mb={16}>
            {shareText}
          </Text>
          <ExternalLink
            aria-label="Compartilhe pelo Facebook"
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.pier.digital/covid19-saude"
          >
            <Icon name="facebook" fill="primary" size={32} />
          </ExternalLink>
          <ExternalLink
            aria-label="Compartilhe pelo Twitter"
            href={`https://twitter.com/intent/tweet?url=&text=${SHARE_MESSAGE}`}
          >
            <Icon name="twitter" fill="primary" size={32} />
          </ExternalLink>
          <ExternalLink
            aria-label="Compartilhe pelo WhatsApp"
            href={`https://wa.me/?text=${SHARE_MESSAGE}`}
          >
            <Icon name="whatsapp" fill="primary" size={32} />
          </ExternalLink>
        </SocialMediaContainer>
      </GridItem>
      <GridItem m={2} t={4} d={6}>
        <HandsImage src={HANDS_WITH_GLOVES} alt="Mãos com luvas" />
      </GridItem>
    </Grid>
  </Section>
);

export default Campaign;
