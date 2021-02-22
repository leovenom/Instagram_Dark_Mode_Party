import styled from "styled-components";

import Text from "ui/Text";
import colors from "ui/theme/colors";
import { font } from "ui/theme/typography";

import { renderStars } from "./Stars";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;

  *:nth-child(n + 2) {
    margin: 0 1px;
  }

  h5 {
    margin-right: 8px;
  }
`;

const BigNumber = styled.div<{ color?: keyof typeof colors }>`
  &,
  & > * {
    font-family: ${font.secondary};
    color: ${({ color }) => (color ? colors[color] : colors.primary300)};
  }
  font-size: 32px;

  span {
    font-size: 64px;
  }
`;

const MAX_STARS = 5;

function getStarsCounting(score: number) {
  if (score < 0) return [0, 0, 5];

  const fullStars = Math.floor(score);
  const halfStars = score - fullStars > 0 ? 1 : 0;
  const emptyStars = MAX_STARS - fullStars - halfStars;

  return [fullStars, halfStars, emptyStars];
}

interface RatingStarsProps {
  score: number;
  fill?: keyof typeof colors;
  size?: number;
}

export function RatingStars({ score, fill, size }: RatingStarsProps) {
  const [fullStars, halfStars, emptyStars] = getStarsCounting(score);
  const starsColor = fill || "secondary";

  return (
    <RatingContainer>
      {renderStars({
        state: "FULL",
        numberOfStars: fullStars,
        size,
        starsColor,
      })}
      {renderStars({
        state: "HALF",
        numberOfStars: halfStars,
        size,
        starsColor,
      })}
      {renderStars({ state: "EMPTY", numberOfStars: emptyStars, size })}
    </RatingContainer>
  );
}

interface RatingBigNumberProps {
  score: number;
  color?: keyof typeof colors;
}

export function RatingBigNumber({ score, color }: RatingBigNumberProps) {
  return (
    <BigNumber color={color}>
      <span>{score}</span> / 5
    </BigNumber>
  );
}

interface Props {
  score: number;
  reviews?: number;
  fill?: keyof typeof colors;
}

function Rating({ score, reviews, fill }: Props) {
  const [fullStars, halfStars, emptyStars] = getStarsCounting(score);
  const starsColor = fill ? fill : "secondary";

  return (
    <div>
      <RatingContainer>
        <Text variant="subtitleSmall" bold color="secondary">
          {score}
        </Text>
        {renderStars({ state: "FULL", numberOfStars: fullStars, starsColor })}
        {renderStars({ state: "HALF", numberOfStars: halfStars, starsColor })}
        {renderStars({ state: "EMPTY", numberOfStars: emptyStars })}
      </RatingContainer>
      {reviews && (
        <Text variant="bodySmallest" color="gray600">
          {reviews} Avaliações
        </Text>
      )}
    </div>
  );
}

export default Rating;
