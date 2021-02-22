import { InputHTMLAttributes } from "react";
import styled from "styled-components";

import Checkbox from "ui/Checkbox/Checkbox";
import Text from "ui/Text";

const Link = styled.a`
  // Typography
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary600};
  text-decoration: underline;

  &:hover {
    // Typography
    text-decoration: underline;
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  termsHref: string;
  politicsHref: string;
}

const TermsAndConditions = (props: Props) => {
  return (
    <Checkbox onChange={props.onChange} name={props.name} value={props.value}>
      <Text variant="bodySmall">
        Li e concordo com os{" "}
        <Link rel="noopener" target="_blank" href={props.termsHref}>
          Termos de Uso
        </Link>{" "}
        e{" "}
        <Link target="_blank" rel="noopener" href={props.politicsHref}>
          Políticas de Dados
        </Link>
      </Text>
    </Checkbox>
  );
};

export default TermsAndConditions;
