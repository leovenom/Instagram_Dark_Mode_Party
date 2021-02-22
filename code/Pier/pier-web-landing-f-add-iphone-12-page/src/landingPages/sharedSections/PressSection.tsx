import styled from "styled-components";

import { StyledGrid } from "ui/Grid";
import GridItem from "ui/GridItem";
import ExternalLink from "ui/ExternalLink";
import Text from "ui/Text";
import { font } from "ui/theme/typography";

import { Slideshow, Slide } from "ui/Slideshow/TestimonialLikeSlideshow";

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 24px 96px;

  h4 {
    text-align: center;
  }
`;

const Grid = styled(StyledGrid)`
  margin 0 auto;
`;

const ChannelLogo = styled.img`
  height: auto;
  width: 130px;
`;

const NewsPreview = styled.p`
  font-family: ${font.primary};
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;

interface Press {
  id: number;
  url: string;
  newsDescription: string;
  image: string;
  imageDescription: string;
}

interface PressSection {
  pressList: Press[];
}

function PressSection({ pressList }) {
  return (
    <Content>
      <Grid>
        <GridItem m={2} t={8} d={12}>
          <Text variant="subtitleLarge" mb={[56, 56, 80]}>
            Pier na mídia
          </Text>

          <Slideshow
            id="press-slideshow"
            slides={pressList}
            alwaysShowOneSlide
            cardFullWidth
            render={({ slide }) => (
              <Slide>
                <ChannelLogo
                  width="130"
                  height="80"
                  loading="lazy"
                  src={`/static_assets/images/${slide.image}`}
                  alt={slide.imageDescription}
                />
                <NewsPreview>{slide.newsDescription}</NewsPreview>
                <ExternalLink href={slide.url}>
                  Confira a notícia aqui
                </ExternalLink>
              </Slide>
            )}
          />
        </GridItem>
      </Grid>
    </Content>
  );
}

export default PressSection;
