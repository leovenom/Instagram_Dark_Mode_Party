import {
  Item,
  ItemTitle,
  StyledOrderedList,
  StyledUnorderedList,
  Paragraph,
  ExternalLink,
} from "landingPages/legal/styles";

const GeneralConditions = ({ currentVersion, oldVersions }) => (
  <>
    <Item>
      <ItemTitle>1. ​Definição</ItemTitle>
      <Paragraph>
        A Pier é uma <strong>Seguradora</strong>, constituída no âmbito do
        Sandbox Regulatório da Susep, sob processo SUSEP n.
        15414.616242/2020-87. Estamos aqui para oferecer um seguro digital
        simples, descomplicado, como você nunca viu. A proposta da Pier é
        simples: oferecer um produto 100% digital e permitir que pessoas
        compartilhem riscos e recursos através de uma plataforma autônoma. Para
        isso, a Pier é responsável por:
      </Paragraph>
      <StyledOrderedList>
        <li>
          Avaliar a entrada de cada membro criando uma comunidade mais segura;
        </li>
        <li>
          Gerenciar o fluxo de pagamentos de mensalidades e pagamentos de
          indenizações;
        </li>
        <li>
          Prezar para que o índice de perda da comunidade fique sempre dentro do
          esperado;
        </li>
        <li>Realizar o pagamento dos reembolsos.</li>
      </StyledOrderedList>
    </Item>

    <Item>
      <ItemTitle>2. Valor da mensalidade</ItemTitle>
      <Paragraph>
        Você pode acessar o valor da sua mensalidade na hora da contratação.
        Esse valor é reajustado duas vezes ao ano, nas ocasiões em que a{" "}
        <ExternalLink
          href="https://blog.pier.digital/blog/tabela-pipe-qual-o-valor-do-meu-iphone-usado"
          target="_blank"
          rel="noopener"
        >
          {" "}
          Tabela PIPE.
        </ExternalLink>{" "}
        é reajustada. Sua mensalidade pode sofrer variações temporárias conforme
        a gestão do índice de perda explicado no item abaixo.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>3. Pedido ​de indenização</ItemTitle>
      <Paragraph>
        Faremos de tudo para aprovar um pedido de indenização, mas o cliente
        deverá estar com o pagamento da mensalidade em dia e deverá também:
      </Paragraph>
      <StyledOrderedList>
        <li>
          Ativar e manter instalado o aplicativo da Pier no aparelho para o qual
          a proteção foi contratada;
        </li>
        <li>
          Informar a ocorrência no website com dados bancários no nome e CPF do
          cliente para reembolso;
        </li>
        <li>
          Enviar em até 5 dias úteis o boletim de ocorrência incluindo o número
          IMEI após o informe de ocorrência;
        </li>
        <li>
          Bloquear o IMEI junto à operadora de telefonia em até 5 dias úteis
          após o informe de ocorrência;
        </li>
        <li>
          Caso o aparelho celular segurado possua dois números IMEIs, é
          necessário que os dois sejam bloqueados e constem no boletim de
          ocorrência.
        </li>
      </StyledOrderedList>
      <Paragraph>
        Após constatação do bloqueio do IMEI no{" "}
        <ExternalLink
          href="http://www.anatel.gov.br/celularlegal/"
          target="_blank"
          rel="noopener"
        >
          website da Anatel
        </ExternalLink>{" "}
        e o recebimento do boletim de ocorrência, o reembolso será realizado em
        5 dias úteis, podendo se estender a até 30 dias em casos de necessidade
        de maior análise. Caso sejam solicitados documentos adicionais, a
        contagem do prazo de 30 dias será pausada até que todas as documentações
        sejam enviadas pelo membro, conforme normas da SUSEP. Se o prazo de
        limite de 30 dias for excedido, a Pier contabilizará ao pagamento as
        devidas correções e multa pelo seu próprio atraso. A Pier irá monitorar
        o bloqueio nos meses subsequentes e tomará todas as providências legais
        caso haja o desbloqueio indevido do aparelho.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>4.​ ​Casos não compreendidos</ItemTitle>
      <Paragraph>Não são reembolsáveis:</Paragraph>
      <StyledOrderedList>
        <li>
          Riscos de quebra, acidentes, queda de líquidos ou perdas do aparelho;
        </li>
        <li>
          Situações em que o aplicativo da Pier não tenha sido instalado ou
          tenha sido desinstalado há mais de 48h do momento do pedido de
          reembolso;
        </li>
        <li>
          Situações em que o IMEI bloqueado não equivale ao cadastrado ou que os
          IMEIs referentes ao aparelho não foram bloqueados;
        </li>
        <li>
          Situações em que o aparelho não tenha recebido sinal de rede de
          telefonia ou wi-fi nas últimas 72h anteriores à ocorrência;
        </li>
        <li>Situações em que seja detectado qualquer tipo de dolo ou má-fé;</li>
        <li>
          Aparelhos que possuem "root", ou seja, que os usuários têm acesso de
          administrador ao sistema do aparelho;
        </li>
        <li>Ocorrência fora do Brasil;</li>
        <li>
          Situações em que o segurado se recuse a enviar os documentos
          adicionais solicitados; e
        </li>
        <li>
          Situações em que o CPF indicado no boletim de ocorrência seja
          diferente do cadastrado no momento de contratação do seguro.
        </li>
      </StyledOrderedList>
    </Item>

    <Item>
      <ItemTitle>5. Valor da indenização</ItemTitle>
      <Paragraph>
        O valor da indenização do seu celular é calculado em relação ao valor de
        um seminovo e em boas condições. Esse valor pode ser reajustado até duas
        vezes ao ano e está publicamente disponível na{" "}
        <ExternalLink
          href="https://blog.pier.digital/blog/tabela-pipe-qual-o-valor-do-meu-iphone-usado"
          target="_blank"
          rel="noopener"
        >
          {" "}
          Tabela PIPE.
        </ExternalLink>
        . Ou seja, o valor pago será aquele que estiver nessa tabela no momento
        do pedido de reembolso.
      </Paragraph>
      <Paragraph>Oferecemos dois tipos de planos:</Paragraph>
      <StyledOrderedList>
        <li>Premium: Você será reembolsado pelo valor cheio de um seminovo.</li>
        <li>
          Econômico: Você será reembolsado em 80% do valor de um seminovo.
        </li>
      </StyledOrderedList>
      <Paragraph>
        Referente a um aparelho similar seminovo e em boas condições. Esse valor
        pode ser reajustado até duas vezes ao ano e está publicamente disponível
        na{" "}
        <ExternalLink
          href="https://blog.pier.digital/blog/tabela-pipe-qual-o-valor-do-meu-iphone-usado"
          target="_blank"
          rel="noopener"
        >
          {" "}
          Tabela PIPE.
        </ExternalLink>
        . Ou seja, o valor pago será aquele que estiver nessa tabela no momento
        do pedido de reembolso.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>6. Cancelamento</ItemTitle>
      <Paragraph>
        Você pode cancelar seu plano a qualquer momento pelo aplicativo ou
        website sem custos.
      </Paragraph>
      <Paragraph>
        O atraso de 25 dias no pagamento da mensalidade causa cancelamento
        automático.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>7. Documentos Adicionais</ItemTitle>
      <Paragraph>
        Podemos pedir documentos adicionais para realizar uma análise mais
        detalhada do seu pedido de reembolso. Visando à segurança da comunidade,
        diminuição do índice de perda e consequente redução das mensalidades, a
        Pier faz uso de big data e machine learning. Nos casos em que for
        necessário o prazo para pagamento de indenizações poderá ser estendido
        para averiguação da situação.
      </Paragraph>
      <Paragraph>
        Em caso de necessidade, poderão ser solicitados documentos adicionais
        tais como:
      </Paragraph>

      <StyledOrderedList>
        <li>Selfie com um documento de identificação;</li>
        <li>Documento de identificação;</li>
        <li>Comprovante de residência;</li>
        <li>NF do aparelho;</li>
        <li>Vídeo da vítima explicando o ocorrido;</li>
        <li>Telefone; e</li>
        <li>Outros a depender da necessidade de avaliação da ocorrência.</li>
      </StyledOrderedList>
      <Paragraph>
        Caso a Pier verifique evidência de fraude, visando ao melhor interesse
        da comunidade, tomará as medidas legais cabíveis junto às autoridades
        competentes contra o possível fraudador.
      </Paragraph>
    </Item>

    {currentVersion && (
      <Item>
        <ItemTitle>Mais Informações</ItemTitle>
        <Paragraph>
          Para mais informações, acesse nossos termos completos:
        </Paragraph>

        <StyledOrderedList>
          <li>
            {" "}
            <ExternalLink
              href={`/static_assets/seguro-celular/legal/generalConditions/${currentVersion.id}.pdf`}
              target="_blank"
              rel="noopener"
            >
              Condições Gerais (PDF)
            </ExternalLink>{" "}
          </li>
          <li>
            {" "}
            <ExternalLink
              href={`/seguro-celular/termos-de-uso?version=${currentVersion.termsOfUse.id}`}
              target="_blank"
              rel="noopener"
            >
              Termos de Uso
            </ExternalLink>{" "}
          </li>
          <li>
            {" "}
            <ExternalLink
              href={`/seguro-celular/politica-de-privacidade?version=${currentVersion.dataPolicy.id}`}
              target="_blank"
              rel="noopener"
            >
              Política de Privacidade
            </ExternalLink>{" "}
          </li>
        </StyledOrderedList>
      </Item>
    )}
    {oldVersions && oldVersions.length > 0 && (
      <>
        <Paragraph>Versões anteriores em PDF</Paragraph>

        <StyledUnorderedList contentPath="/static_assets/images/download.svg">
          {oldVersions.map((version) => (
            <li key={version.id}>
              {" "}
              <ExternalLink
                href={`/static_assets/seguro-celular/legal/generalConditions/${version.id}.pdf`}
                target="_blank"
                rel="noopener"
              >
                Versão de {version.updatedAt}
              </ExternalLink>{" "}
            </li>
          ))}
        </StyledUnorderedList>
      </>
    )}
  </>
);

export default GeneralConditions;
