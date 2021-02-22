import Collapse from ".";

import { storiesOf } from "@storybook/react";

storiesOf("Components|Collapse", module).add("Basic example", () => (
  <>
    <Collapse>
      <Collapse.Title>
        Como funciona a atualização da Tabela Pipe?
      </Collapse.Title>
      <Collapse.Content>
        A Tabela Pipe reúne os valores de nossos reembolsos. Assim como carros,
        televisões e outros aparelhos, com o passar do tempo, smartphones também
        passam a valer menos. Por isso, 2 vezes ao ano, nós atualizamos nossa
        Tabela Pipe com valores que estejam mais próximos dos praticados pelo
        mercado.
      </Collapse.Content>
    </Collapse>
    <Collapse>
      <Collapse.Title>
        Posso pagar com boleto ou débito automático?
      </Collapse.Title>
      <Collapse.Content>
        O pagamento é mensal e realizado via cartão de crédito. Mas fique
        tranquilo que o seu limite não é comprometido. Além disso, pelo APP você
        pode alterar o cartão, a data de vencimento e até mesmo cancelar a sua
        proteção quando quiser. Nós aceitamos as bandeiras Visa, MasterCard,
        Diners, American Express e Elo.
      </Collapse.Content>
    </Collapse>
  </>
));
