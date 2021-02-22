import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

import Button from "ui/Button";
import Text from "ui/Text";
import { CustomFilledIcon } from "ui/Icon/CustomizedIcon";
import { customFilledIcons } from "ui/Icon/customizedIcons";
import breakpoints from "ui/theme/breakpoints";
import { autoTracker } from "helpers/mixpanelTracker";

import DownloadAppButton from "../components/DownloadAppButton";

const Content = styled.div`
  margin-top: 80px;
  box-sizing: border-box;
  padding: 40px 24px 80px;

  ${breakpoints.desktop} {
    max-width: 452px;
    margin: 80px auto 0;
  }
`;

const Steps = styled.div`
  display: grid;
  row-gap: 32px;
  margin-bottom: 32px;
`;

const StepItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
`;

const ButtonContainer = styled.div`
  display: grid;
  row-gap: 16px;
`;

const Circle = styled.div`
  background: ${({ theme }) => theme.colors.secondary100};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BASE_TRACKING_NAME = "Start Inspection";

interface StepListProps {
  icon: keyof typeof customFilledIcons;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

const stepsList: StepListProps[] = [
  {
    icon: "camera",
    title: "Vistoria sem sair de casa",
    description:
      "Você mesmo faz sua vistoria, tirando poucas fotos do seu carro e documento. É simples e rápido.",
  },
  {
    icon: "clock",
    width: 24,
    height: 24,
    title: "Análise em 24 horas",
    description:
      "Depois de enviar a vistoria, a nossa análise leva em média 24 horas. Aí é só ficar ligado que a resposta da sua aprovação chega pelo app e email.",
  },
];

function StartInspection() {
  function inspectLater() {
    autoTracker.trackButton(`${BASE_TRACKING_NAME} Inspect Later`);
  }

  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  return (
    <Content>
      <Text variant="section" align="center" mb={64}>
        Baixe o App para
        <br /> fazer a vistoria
      </Text>

      <Steps>
        {stepsList.map(function ({ icon, title, description, ...props }) {
          return (
            <StepItem key={title}>
              <Circle>
                <CustomFilledIcon name={icon} fill="secondary600" {...props} />
              </Circle>

              <div>
                <Text variant="body" bold>
                  {title}
                </Text>
                <Text variant="bodySmall">{description}</Text>
              </div>
            </StepItem>
          );
        })}
      </Steps>

      <ButtonContainer>
        <DownloadAppButton page={BASE_TRACKING_NAME}>
          Baixe o App
        </DownloadAppButton>
        <Text variant="bodySmall" bold align="center" color="gray600">
          ou
        </Text>
        <Link href="/seguro-auto/faca-vistoria-mais-tarde">
          <Button fullWidth asLink onClick={inspectLater}>
            Deixar para depois
          </Button>
        </Link>
      </ButtonContainer>
    </Content>
  );
}

export default StartInspection;
