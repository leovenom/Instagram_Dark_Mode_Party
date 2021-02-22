import {
  Item,
  ItemTitle,
  StyledOrderedList,
  StyledUnorderedList,
  ExternalLink,
  Paragraph,
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
      </StyledOrderedList>
    </Item>

    <Item>
      <ItemTitle>2. Valor da mensalidade</ItemTitle>
      <Paragraph>
        Você pode acessar o valor da sua mensalidade na hora da contratação.
        Esse valor será reajustado mensalmente com base nas atualizações da{" "}
        <ExternalLink
          href="https://veiculos.fipe.org.br/"
          target="_blank"
          rel="noopener"
        >
          {" "}
          Tabela Fipe
        </ExternalLink>
        .
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>3.​ Vistoria</ItemTitle>
      <Paragraph>
        A vistoria do automóvel é feita pelo aplicativo da Pier, de maneira 100%
        digital. Para isso, serão pedidas fotos internas e externas do
        automóvel, além da foto do documento do carro (CRV, CLRV ou DUT). Após o
        envio da vistoria, analisaremos as fotos e voltaremos com uma resposta
        em até 48 horas, prorrogáveis caso o envio de outros documentos seja
        necessário.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>4. Pedido de indenização para Roubo/Furto</ItemTitle>
      <Paragraph>Se alguém roubar ou furtar seu carro, você deve:</Paragraph>
      <StyledOrderedList>
        <li>
          Acionar a Polícia e fazer um Boletim de Ocorrência o mais rápido
          possível;
        </li>
        <li>
          Informar a ocorrência no website com dados bancários no nome e CPF do
          cliente para reembolso;
        </li>
        <li>
          Enviar em até 5 dias úteis:
          <StyledUnorderedList>
            <li>
              O boletim de ocorrência incluindo dados do veículo, após o informe
              de ocorrência;
            </li>
            <li>
              Conta corrente para pagamento que deverá ser de titularidade do
              condutor principal;
            </li>
            <li>
              DUT/CRV original com transferência feita com reconhecimento de
              firma;
            </li>
            <li>Chave principal e chave reserva;</li>
            <li>
              Termo de quitação assinado pelo proprietário(esse documento será
              enviado pela Pier no momento do pedido do reembolso); e,
            </li>
            <li>Comprovante do pagamento do IPVA.</li>
          </StyledUnorderedList>
        </li>
      </StyledOrderedList>
    </Item>

    <Item>
      <ItemTitle>4.1.​ Documentos adicionais</ItemTitle>
      <Paragraph>
        O reembolso será realizado em 20 dias úteis após o recebimento de toda a
        documentação solicitada. Em alguns casos, esse prazo poderá se estender
        a até 30 dias, conforme as normas da SUSEP. Em caso de esse prazo de 30
        dias ser excedido, a Pier contabilizará ao pagamento as devidas
        correções e multa pelo seu próprio atraso.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>4.2.​ Em caso de localização de veículo</ItemTitle>
      <Paragraph>
        Caso o veículo seja localizado, comunique imediatamente à Pier, mesmo
        que seja localizado com quaisquer danos para que possamos orientá-lo
        sobre como proceder.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>5.​ ​Casos compreendidos</ItemTitle>
      <StyledOrderedList>
        <li>Roubo e furto</li>
        <li>Reboque em um raio de 200km</li>
        <li>Pane elétrica e mecânica</li>
        <li>Pane seca</li>
        <li>Chaveiro</li>
        <li>Troca de Pneus</li>
        <li>Guarda do veículo: 1 noite</li>
      </StyledOrderedList>
    </Item>

    <Item>
      <ItemTitle>6.​ ​Casos não compreendidos</ItemTitle>
      <Paragraph>Não são reembolsáveis:</Paragraph>
      <StyledOrderedList>
        <li>
          Riscos decorrentes de danos, ou seja, colisão, quebra do veículo,
          danos pessoais;
        </li>
        <li>Situações em que seja detectado qualquer tipo de dolo ou má-fé;</li>
        <li>
          Se o carro for encontrado e tiver custos de conserto que não
          ultrapassem 75% do valor do carro, de acordo com a Tabela FIPE.
        </li>
        <li>
          Situações em que você se recuse a enviar os documentos adicionais
          necessários para a conclusão da análise do pedido de reembolso.
        </li>
      </StyledOrderedList>
    </Item>

    <Item>
      <ItemTitle>7. Valor da indenização</ItemTitle>
      <Paragraph>
        Após o recebimento de toda a documentação solicitada, realizaremos o
        pagamento do valor da indenização com base na tabela FIPE do mês em que
        for entregue a documentação completa. Deste valor, poderão ser
        descontadas eventuais parcelas pendentes do Seguro, deduzir débitos do
        veículo, tais como multas, IPVA, entre outras, quando for o caso.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>8. Cancelamento</ItemTitle>
      <Paragraph>
        Poderá ser realizado a qualquer momento pelo aplicativo ou website sem
        custos. O atraso de 25 dias na mensalidade também provoca o cancelamento
        automático.
      </Paragraph>
    </Item>

    <Item>
      <ItemTitle>9. Fraude</ItemTitle>
      <Paragraph>
        Visando à segurança da comunidade, diminuição do índice de perda e
        consequente redução das mensalidades, a Pier faz uso de big data e
        machine learning para detectar possíveis fraudes. Nos casos em que a
        Pier identificar riscos de fraude, o seguro não será renovado e o prazo
        para pagamento de indenizações poderá ser estendido para averiguação da
        situação.
      </Paragraph>
      <Paragraph>
        Caso a Pier levante indícios de fraude, visando ao melhor interesse e
        segurança da comunidade, tomará as medidas legais cabíveis junto às
        autoridades competentes contra o possível fraudador.
      </Paragraph>

      <Paragraph>
        Em caso de necessidade, poderão ser solicitados documentos adicionais
        tais como:
      </Paragraph>

      <StyledOrderedList>
        <li>
          Selfie com um documento de identificação (obrigatório o envio caso
          solicitado);
        </li>
        <li>
          Documento de identificação (obrigatório o envio caso solicitado);
        </li>
        <li>Comprovante de residência;</li>
        <li>Vídeo da vítima explicando o ocorrido.</li>
      </StyledOrderedList>
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
              href={`/static_assets/seguro-auto/legal/generalConditions/${currentVersion.id}.pdf`}
              target="_blank"
              rel="noopener"
            >
              Condições Gerais (PDF)
            </ExternalLink>{" "}
          </li>
          <li>
            {" "}
            <ExternalLink
              href={`/seguro-auto/termos-de-uso?version=${currentVersion.termsOfUse.id}`}
              target="_blank"
              rel="noopener"
            >
              Termos de Uso
            </ExternalLink>{" "}
          </li>
          <li>
            {" "}
            <ExternalLink
              href={`/seguro-auto/politica-de-privacidade?version=${currentVersion.dataPolicy.id}`}
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
                href={`/static_assets/seguro-auto/legal/generalConditions/${version.id}.pdf`}
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
