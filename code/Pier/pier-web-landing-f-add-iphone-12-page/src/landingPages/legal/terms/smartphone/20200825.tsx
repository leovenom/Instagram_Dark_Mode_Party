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
        A Pier é uma maneira simples para quem quer compartilhar riscos com seus
        pares. Juridicamente constituída como uma plataforma, a Pier é
        responsável por:
      </Paragraph>
      <StyledOrderedList>
        <li>
          Avaliar a entrada de cada membro criando uma comunidade confiável;
        </li>
        <li>
          Gerenciar o fluxo de pagamentos de mensalidades e pagamentos de
          indenizações;
        </li>
        <li>
          Prezar para que o índice de perda da comunidade fique sempre dentro do
          esperado.
        </li>
      </StyledOrderedList>
      <Paragraph>
        Seu contrato de proteção na Pier é garantido por um certificado de
        seguro emitido pela Too Seguros.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>2. Valor da mensalidade</ItemTitle>
      <Paragraph>
        O valor da mensalidade é conhecido pelo cliente no ato da contratação e
        é reajustado duas vezes ao ano, nas ocasiões em que a{" "}
        <ExternalLink
          href="https://blog.pier.digital/blog/tabela-pipe-qual-o-valor-do-meu-iphone-usado"
          target="_blank"
          rel="noopener"
        >
          {" "}
          Tabela Pipe é reajustada.
        </ExternalLink>{" "}
        Esse valor pode sofrer variações temporárias conforme a gestão do índice
        de perda explicado na cláusula 3.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>3.​ Gestão do índice de perda</ItemTitle>
      <Paragraph>
        A plataforma é estruturada para que, ao final, as mensalidades sejam
        divididas da seguinte forma:
      </Paragraph>
      <StyledOrderedList>
        <li>
          20% são destinados à remuneração da Pier para gerenciar a plataforma,
          acrescido dos custos da Pier com o processamento do pagamento das
          indenizações;
        </li>
        <li>
          20% são destinados à remuneração da Too Seguros, que garante que os
          membros adimplentes sejam sempre indenizados;
        </li>
        <li>
          Os 60% restantes são utilizados em favor da comunidade, especialmente
          no pagamento de indenizações.
        </li>
      </StyledOrderedList>
      <Paragraph>
        Caso o valor destinado à comunidade não seja suficiente para o pagamento
        das indenizações devidas, as mensalidades poderão ter aumentos
        temporários. Caso o índice de perda seja inferior ao esperado, as
        mensalidades poderão ter reduções temporárias. O cliente receberá
        relatórios trimestrais e, em casos de alteração de mensalidades, será
        comunicado antes da cobrança.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>4. Pedido ​de indenização</ItemTitle>
      <Paragraph>
        Faremos de tudo para aprovar um pedido de indenização, mas o cliente
        deverá estar adimplente e deverá também:
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
      <ItemTitle>5.​ ​Casos não compreendidos</ItemTitle>
      <Paragraph>Não são reembolsáveis:</Paragraph>
      <StyledOrderedList>
        <li>Riscos de quebra, acidentes, queda de líquidos ou perdas;</li>
        <li>
          Situações em que o aplicativo da Pier não tenha sido instalado ou
          tenha sido desinstalado há mais de 48h do momento do pedido de
          indenização;
        </li>
        <li>Situações em que o IMEI bloqueado não equivale ao cadastrado;</li>
        <li>
          Situações em que apenas um dos dois IMEIs, quando houver, foi
          bloqueado;
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
          Situações que sejam identificadas que houve perda do aparelho; e
        </li>
        <li>
          Situações em que o CPF indicado no boletim de ocorrência seja
          diferente do cadastrado no momento de contratação do seguro.
        </li>
      </StyledOrderedList>
    </Item>

    <Item>
      <ItemTitle>6. Valor da indenização</ItemTitle>
      <Paragraph>
        Referente a um aparelho similar seminovo e em boas condições. Esse valor
        pode ser reajustado até duas vezes por ano e está publicamente
        disponível na Tabela PIPE . Ou seja, o valor pago será aquele que
        estiver nessa tabela no momento do pedido de reembolso.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>7. Cancelamento</ItemTitle>
      <Paragraph>
        Poderá ser realizado a qualquer momento pelo aplicativo ou website sem
        custos. O atraso de 25 dias na mensalidade também provoca o cancelamento
        automático.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>8. Documentos Adicionais</ItemTitle>
      <Paragraph>
        Visando à segurança da comunidade, diminuição do índice de perda e
        consequente redução das mensalidades, a Pier faz uso de big data e
        machine learning. Nos casos em que for necessário, o prazo para
        pagamento de indenizações poderá ser estendido para averiguação da
        situação.
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
        <li>Telefone.</li>
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
              href={`/seguro-celular/politica-de-dados?version=${currentVersion.dataPolicy.id}`}
              target="_blank"
              rel="noopener"
            >
              Política de Dados
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
