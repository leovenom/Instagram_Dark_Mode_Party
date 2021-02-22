import styled from "styled-components";

import { autoTracker } from "helpers/mixpanelTracker";
import Text from "ui/Text";

const Link = styled.a`
  // Typography
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary600};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    // Typography
    text-decoration: underline;
  }
`;

const TextContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BASE_TRACKING_NAME = "UserSignup";

interface Props {
  optLogin: () => void;
}

const LoginText = ({ optLogin }: Props) => {
  const handleClick = (e) => {
    e.preventDefault();
    optLogin();
    autoTracker.trackLink(`${BASE_TRACKING_NAME} Login`);
  };

  return (
    <TextContainer>
      <Text variant="bodySmall">
        Já tem conta?{" "}
        <Link onClick={handleClick} role="button" tabIndex={0}>
          Faça login
        </Link>
      </Text>
    </TextContainer>
  );
};

export default LoginText;
