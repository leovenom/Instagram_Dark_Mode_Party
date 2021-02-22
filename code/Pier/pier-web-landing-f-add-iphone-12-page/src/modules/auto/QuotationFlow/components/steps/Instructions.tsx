import { useEffect } from "react";
import styled from "styled-components";

import withServiceMachine from "modules/auto/QuotationFlow/stateMachine/withServiceMachine";
import { StyledButton } from "ui/Button";
import Button from "ui/Button";
import Text from "ui/Text";
import Logo from "ui/Logo";
import { useRouter } from "next/router";
import { autoTracker } from "helpers/mixpanelTracker";
import breakpoints from "ui/theme/breakpoints";
import { fadeIn } from "ui/theme/animations";

const BASE_TRACKING_NAME = "QuoteInstructions";

const stepsInfo = [
  {
    title: "Selecione o seu carro",
    description:
      "Vamos analisar o valor do seu carro de acordo com a Tabela FIPE",
  },
  {
    title: "Informe seu endereço",
    description: "Precisamos verificar a incidência de roubo da sua região",
  },
  { title: "Informe seu CPF", description: "Vamos analisar o seu perfil" },
  {
    title: "Informe seu email",
    description: "Precisamos do seu email para te enviar a cotação do seguro",
  },
];

const Container = styled.div`
  animation: ${fadeIn} 0.4s;
`;

const StepItemsList = styled.ul`
  list-style: none;
  margin: 0 0 48px;
  padding: 0;

  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

const StepItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 20px 0 16px;

  div:first-of-type {
    margin-right: 32px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  ${breakpoints.desktop} {
    padding-top: 56px;
  }
`;

const CancelButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 14px;
  line-height: 20px;
`;

const Instructions = ({ machineActions }) => {
  useEffect(() => {
    autoTracker.trackScreen(BASE_TRACKING_NAME);
  }, []);

  const router = useRouter();

  const startQuotation = () => {
    autoTracker.trackButton("QuoteInstructions Start Quotation");
    machineActions.success();
  };

  const goToAutoLandingPage = () => {
    autoTracker.trackButton("QuoteInstructions Cancel Quotation");
    router.push("/seguro-auto");
  };

  return (
    <Container>
      <Header>
        <Logo />
        <CancelButton variant="plainText" onClick={goToAutoLandingPage}>
          Cancelar
        </CancelButton>
      </Header>
      <div>
        <Text color="secondary600" variant="body" mb={4} mt={40} bold>
          Cotação em 1 min
        </Text>
        <Text variant="sectionSecondary" mb={40}>
          Vamos começar?
        </Text>
      </div>
      <StepItemsList>
        {stepsInfo.map(({ title, description }, index) => (
          <StepItem>
            <div>
              <Text variant="bodyLarge" bold>
                {index + 1}
              </Text>
            </div>
            <div>
              <Text variant="body" bold mb={4}>
                {title}
              </Text>
              <Text variant="bodySmall">{description}</Text>
            </div>
          </StepItem>
        ))}
      </StepItemsList>
      <Button variant="secondary" onClick={startQuotation} fullWidth mb={20}>
        Iniciar cotação
      </Button>
    </Container>
  );
};

export default withServiceMachine(Instructions);
