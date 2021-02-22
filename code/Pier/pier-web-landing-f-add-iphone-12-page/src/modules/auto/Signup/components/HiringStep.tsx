import * as React from "react";
import styled from "styled-components";

import Text from "ui/Text";

const ShrinkedStep = styled.div`
  display: flex;
  margin-bottom: 16px;

  div {
    margin-left: 8px;
  }
`;

const HIRING_STEPS = {
  1: {
    title: "Crie sua conta",
    subtitle: "",
  },
  2: {
    title: "Baixar o App",
    subtitle: "A contratação é feita no App.",
  },
  3: {
    title: "Vistoria",
    subtitle: "Você faz em 15 minutos sem sair de casa.",
  },
  4: {
    title: "Pagamento",
    subtitle: "O pagamento é só depois de aprovado.",
  },
  5: {
    title: "Carro protegido 🎉🎉🎉",
    subtitle: "Você já pode dirigir tranquilo por aí.",
  },
};

interface Props {
  stepNumber: number;
  title?: string;
  children?: React.ReactNode;
}

function HiringStep({ stepNumber, title, children }: Props) {
  if (children) {
    return (
      <div>
        <Text variant="bodySmall" bold color="gray600" mb={8}>
          {stepNumber}º passo
        </Text>
        <Text variant="subtitle" bold mb={24}>
          {title}
        </Text>
        {children}
      </div>
    );
  }

  return (
    <ShrinkedStep>
      <Text variant="bodySmall" bold>
        {stepNumber}º
      </Text>
      <div>
        <Text variant="bodySmall" bold>
          {HIRING_STEPS[stepNumber].title}
        </Text>
        <Text variant="bodySmall">{HIRING_STEPS[stepNumber].subtitle}</Text>
      </div>
    </ShrinkedStep>
  );
}

export default HiringStep;
