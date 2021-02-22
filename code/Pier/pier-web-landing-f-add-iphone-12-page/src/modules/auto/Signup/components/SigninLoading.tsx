import styled from "styled-components";

import Spinner from "ui/Spinner";
import Text from "ui/Text";

const SpinnerContainer = styled.div`
  // Position
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 240px;

  // Box Model
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function SigninLoading() {
  return (
    <SpinnerContainer>
      <Spinner />
      <Text variant="label" color="darkerGray">
        Aguarde, estamos verificando...
      </Text>
    </SpinnerContainer>
  );
}

export default SigninLoading;
