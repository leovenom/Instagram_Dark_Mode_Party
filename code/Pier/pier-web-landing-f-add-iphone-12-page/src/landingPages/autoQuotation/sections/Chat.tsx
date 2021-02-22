import styled from "styled-components";

import { StyledButton } from "ui/Button";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

import { autoTracker } from "helpers/mixpanelTracker";
import { SCREEN_NAME } from "landingPages/autoQuotation/LandingPage";
import {
  isOnline,
  START_OF_WORKING_TIME,
  START_OF_WORKING_TIME_ON_WEEKEND,
  END_OF_WORKING_TIME,
} from "helpers/getSupportOnlineStatus";
import useIntercom from "hooks/useIntercom";

const Container = styled.section`
  box-sizing: border-box;
  grid-area: chat;
  padding: 72px 24px;
  background: ${({ theme }) => theme.colors.yellow400};

  ${breakpoints.custom(1100)} {
    max-width: 100%;
    padding: 80px 24px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 270px;
  margin: 0 auto;
  text-align: center;

  ${breakpoints.custom(1100)} {
    grid-area: 1 / 1 / 2 / 5;
    max-width: 330px;
    align-items: flex-start;
    margin: 0;
    text-align: left;
  }
`;

const SupportInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 40px;
  }

  div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${breakpoints.custom(1100)} {
    border: none;
  }
`;

const Schedule = styled.div`
  margin-top: 32px;
  padding-bottom: 40px;
`;

const Button = styled(StyledButton)`
  width: auto;
  padding: 16px 40px;
`;

const OnlineStatus = styled.span<{ isOnline: boolean }>`
  display: block;
  color: ${({ theme, isOnline }) =>
    isOnline ? theme.colors.success : theme.colors.danger};

  &:before {
    content: "";
    display: inline-block;
    background: ${({ theme, isOnline }) =>
      isOnline ? theme.colors.success : theme.colors.danger};
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const Box = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(135, 87, 63, 0.21);

  ${breakpoints.custom(1100)} {
    flex-direction: row;
  }
`;

interface Props {
  sourcePage: string;
}

function Support() {
  const openIntercom = useIntercom();

  function showIntercom() {
    autoTracker.trackLink(`${SCREEN_NAME} Talk To Us`);
    openIntercom();
  }

  return (
    <Container>
      <Box>
        <Title>
          <Text variant="bodyLarge" bold color="secondary600" mb={8}>
            Precisa de ajuda?
          </Text>
          <Text variant="subtitleExtraLarge" mb={40}>
            Fale com a gente por chat
          </Text>
          <Button
            variant="primary"
            fullWidth={false}
            mb={24}
            onClick={showIntercom}
          >
            Fale agora
          </Button>
        </Title>
        <SupportInfo>
          <div>
            <img
              src="/static_assets/images/rebranding/lovers.png"
              alt="Foto dos Lovers da Pier"
            />
          </div>
          <div>
            <OnlineStatus isOnline={isOnline()}>{`${
              isOnline() ? "Online" : "Offline"
            } agora`}</OnlineStatus>
          </div>
        </SupportInfo>
      </Box>
      <Schedule>
        <Text variant="bodySmallest" color="yellow700" mb={8}>
          Horário de atendimento
        </Text>
        <Text variant="bodyLarge">{`Segunda a Sexta: ${START_OF_WORKING_TIME}h às ${END_OF_WORKING_TIME}h`}</Text>
        <Text variant="bodyLarge">{`Domingo: ${START_OF_WORKING_TIME_ON_WEEKEND}h às ${END_OF_WORKING_TIME}h`}</Text>
      </Schedule>
    </Container>
  );
}

export default Support;
