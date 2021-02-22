import styled from "styled-components";
import { Slide } from "pure-react-carousel";

import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

import { TestimonialType } from "../../data";

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

const StyledSlide = styled(Slide)`
  ${breakpoints.custom(930)} {
    :not(:last-child) {
      padding-right: 24px;
    }
  }
`;

interface Props {
  testimonial: TestimonialType;
  index: number;
}

function TestimonialCard({ testimonial, index }: Props) {
  const { name, photo, url, source, testimonial: text } = testimonial;

  return (
    <StyledSlide index={index}>
      <SlideHeader>
        <Thumbnail
          role="img"
          aria-label={`Foto de ${name}, membro da Pier`}
          bgImg={photo}
        ></Thumbnail>
        <div>
          <Text variant="body" bold>
            {name}
          </Text>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Text color="secondary600" variant="body" decoration="underline">
              {source}
            </Text>
          </a>
        </div>
      </SlideHeader>
      <div>
        <Text variant="body" mb={24}>
          {text}
        </Text>
      </div>
    </StyledSlide>
  );
}

export default TestimonialCard;
