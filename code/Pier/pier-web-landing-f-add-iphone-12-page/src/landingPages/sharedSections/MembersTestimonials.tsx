import * as React from "react";
import styled from "styled-components";

import { CustomFilledIcon } from "ui/Icon/CustomizedIcon";
import ExternalLink from "ui/ExternalLink";
import { StyledGrid } from "ui/Grid";
import GridItem from "ui/GridItem";
import { RatingStars, RatingBigNumber } from "ui/Rating";
import { Slideshow, Slide } from "ui/Slideshow/TestimonialLikeSlideshow";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

import { generalTracker, autoTracker } from "helpers/mixpanelTracker";

const BASE_TRACKING_NAME = "MembersTestimonials";
const PIER_FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/pg/pierdigitalbrasil/reviews/?ref=page_internal";

const Content = styled.section`
  padding: 104px 24px;
  justify-content: center;
`;

const Grid = styled(StyledGrid)`
  margin 0 auto;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

  h2,
  p {
    text-align: center;
  }

  & > div:first-child {
    max-width: 470px;
  }

  ${breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 96px;
    padding-bottom: 48px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

    h2,
    p {
      text-align: left;
    }

    h2 {
      font-size: 48px;
      line-height: 58px;
    }

    & > div:first-child {
      max-width: 470px;
    }
  }
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.desktop} {
    display: block;
  }
`;

const SlideHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Thumbnail = styled.div<{ bgImg: string }>`
  background: url(${({ bgImg }) => bgImg});
  background-size: cover;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

const PaidClaimTag = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: -4px;
  }
`;

interface Testimonial {
  id: number;
  photo: string;
  name: string;
  testimonial: string;
}

interface Props {
  spyThisElement?: boolean;
  testimonials: Testimonial[];
  children?: React.ReactNode;
  product?: string;
}

const MembersTestimonials = ({
  testimonials,
  spyThisElement,
  product = "general",
}: Props) => {
  const testimonialsLastIndex = testimonials.length - 1;

  const onSlideChange = (action: "Next" | "Back") => {
    if (product === "auto") {
      autoTracker.trackButton(`${BASE_TRACKING_NAME} ${action}`);
    } else {
      generalTracker.trackButton(`${BASE_TRACKING_NAME} ${action}`);
    }
  };

  return (
    <Content
      id="members-testimonials"
      className={spyThisElement && "section-spy"}
    >
      <Grid>
        <GridItem m={2} t={8} d={12}>
          <SectionTitle>
            <div>
              <Text variant="bodyLarge" bold color="secondary600" mb={8}>
                Comentários
              </Text>
              <Text variant="section" mb={40}>
                Amamos os elogios da nossa comunidade
              </Text>
            </div>
            <RatingContainer>
              <RatingStars score={4.7} size={30} />
              <Text variant="bodySmall" color="gray600" mt={[32, 32, 8]}>
                Nota no Facebook
              </Text>
              <RatingBigNumber score={4.7} />
              <ExternalLink
                href={PIER_FACEBOOK_REVIEWS_URL}
                withArrow
                mt={[32, 32, 16]}
              >
                Mais de 300 depoimentos reais
              </ExternalLink>
            </RatingContainer>
          </SectionTitle>

          <Slideshow
            id="scroll-container"
            slides={testimonials}
            onSlideChange={onSlideChange}
            render={({ slide, index }) => (
              <Slide largerPaddingRight={testimonialsLastIndex === index}>
                <SlideHeader>
                  <Thumbnail
                    role="img"
                    aria-label={`Foto de ${slide.name}, membro da Pier`}
                    bgImg={slide.photo}
                  ></Thumbnail>
                  <div>
                    <Text variant="bodySmall" bold>
                      {slide.name}
                    </Text>
                    <PaidClaimTag>
                      <CustomFilledIcon
                        name="checkedShield"
                        fill="secondary400"
                      />
                      <Text variant="bodySmall" color="gray">
                        Reembolso pago
                      </Text>
                    </PaidClaimTag>
                  </div>
                </SlideHeader>
                <div>
                  <Text variant="body" mb={24}>
                    {slide.testimonial}
                  </Text>
                </div>
              </Slide>
            )}
          />
        </GridItem>
      </Grid>
    </Content>
  );
};

export default MembersTestimonials;
