import Lottie from "react-lottie";
import styled from "styled-components";

import Text from "ui/Text";

import loading from "./spinningBallsAnimations.json";

const Container = styled.div`
  max-width: 50%;
  margin: 0 auto 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingContainer = styled.div`
  max-width: 100px;
  margin-bottom: 56px;
`;

interface Props {
  title?: string;
  description?: string;
}

export function AnimatedLoading() {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
    />
  );
}

function SpinningBallsLoading({ title, description }: Props) {
  return (
    <Container>
      <LoadingContainer>
        <AnimatedLoading />
      </LoadingContainer>
      {title && (
        <Text variant="subtitle" bold mb={16} align="center">
          {title}
        </Text>
      )}
      {description && (
        <Text variant="body" align="center">
          {description}
        </Text>
      )}
    </Container>
  );
}

export default SpinningBallsLoading;
