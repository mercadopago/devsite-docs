# PCI DSS

No Mercado Pago garantimos a Confidencialidade, Disponibilidade e Integridade de todos os nossos processos seguindo as melhores práticas do mercado para que você possa utilizar todos os nossos produtos com segurança. 

Além disso, para que o Mercado Pago possa operar com cartões de crédito e débito, devemos cumprir um dos mais exigentes padrões de segurança da indústria de pagamentos: o Payment Card Industry Data Security Standard.

## Definição e contexto

Se você já armazenou, processou ou transmitiu dados de cartão em sua empresa, provavelmente já ouviu falar de PCI. Do Mercado Pago queremos ajudá-lo e simplificar a tarefa de compreensão deste regulamento e das diferentes responsabilidades associadas.

Como Prestadora de Serviços, devemos cumprir as responsabilidades regulatórias e de segurança em relação às bandeiras e adquirentes de cartões, mas, ainda assim, a segurança em todo o processo de pagamento é obrigação de ambas as partes. Os comerciantes e / ou plataformas de e-commerce integradas a processadores de pagamentos, como o Mercado Pago, devem atender a requisitos mínimos de segurança para mitigar riscos de fraude e vazamento de informações, protegendo os dados do usuário.

PCI DSS (Payment Card Industry Data Security Standard) é um padrão de segurança internacional que deve ser atendido por todas as entidades que armazenam, processam ou transmitem dados de cartão.

Os regulamentos PCI estabelecem um nível básico de proteção para os portadores de cartão (portadores de cartão) e ajudam a reduzir fraudes e violações de dados em todo o ecossistema de pagamentos. 
A conformidade com os regulamentos PCI envolve 3 aspectos importantes:
- Transmitir com segurança as informações correspondentes aos dados do titular do cartão.
- Armazene os dados de acordo com as melhores práticas de segurança do setor, de acordo com os 12 requisitos regulamentares incluídos no padrão PCI.
- Validação anual de conformidade com os controles de segurança e formulários de avaliação propostos pelo PCI Council.

Recomendamos que você visite o [site oficial do PCI](https://www.pcisecuritystandards.org/) para obter mais informações. Aqui está um resumo dos objetivos dos controles de segurança PCI.

**Objetivo** | **Requisito**
------------- | ---------------
CRIAR E MANTER SISTEMAS E REDE SEGUROS | Instalar e manter um firewall configurado para proteger os dados do portador do cartão. <br> <br>Não use padrões fornecidos pelo fornecedor para senhas do sistema e outros parâmetros de segurança. 
PROTEJA OS DADOS DOS PORTADORES DE CARTÃO | Proteja os dados armazenados do titular do cartão. <br> <br>Criptografe a transmissão dos dados do titular do cartão em redes abertas ou públicas.
MANTENHA UM PROGRAMA DE GERENCIAMENTO DE VULNERABILIDADE | Proteja todos os sistemas contra software malicioso e atualize regularmente o software antivírus. <br> <br>Desenvolva e mantenha sistemas e aplicativos seguros.
MEDIDAS DE CONTROLE SÓLIDOS APLICANDO ACESSO | Restrinja o acesso aos dados de acordo com a necessidade de saber quem tem a organização. <br> <br>Identifique e autentique o acesso aos componentes do sistema. Restrinja o acesso físico aos dados do titular do cartão.
MONITORE E VERIFIQUE PERIODICAMENTE AS REDES | Track and monitor all access to network resources and cardholder data. <br> <br>Periodically verify security systems and processes.
TENHA UMA POLÍTICA DE SEGURANÇA DA INFORMAÇÃO | Tenha uma política que inclua a segurança da informação para todo o pessoal.

> Leia o documento PCI DSS - Data Security Standard para obter mais detalhes. O documento está disponível na [biblioteca de documentos do site oficial do PCI](https://www.pcisecuritystandards.org/document_library).

Para cada um dos doze requisitos de PCI, existem basicamente quatro níveis diferentes de conformidade, normalmente com base no volume de transações através de cartão que sua organização processa anualmente, e cada nível tem um conjunto de obrigações.

- **Nível 1**: (i) Organizações que processam mais de 6 milhões de transações por ano para Visa ou MasterCard ou mais de 2,5 milhões para American Express; (ii) organizações que sofreram violação de dados; (iii) organizações consideradas nível 1 por qualquer associação de cartão.
   - Relatório Anual de Conformidade (ROC) por um Avaliador de Segurança Qualificado (QSA) ou Auditor Interno.
   - Digitalização de rede trimestral por fornecedor aprovado (ASV). 
   - Certificação de conformidade (AOC).
   <br>
- **Nível 2**: Organizações que processam entre 1 e 6 milhões de transações por ano.
   - Questionário anual de autoavaliação PCI (SAQ) correspondente.
   - Digitalização de rede trimestral por fornecedor aprovado (ASV).
   - Certificação de conformidade (AOC) para cada um dos dois SAQs correspondentes.
   <br>
- **Nível 3**: Organizações que processam entre 20.000 e 1 milhão de transações online por ano e organizações que processam menos de 1 milhão de transações no total.
   - Questionário anual de autoavaliação PCI (SAQ) correspondente.
   - Digitalização de rede trimestral por fornecedor aprovado (ASV).
   - Certificação de conformidade (AOC) para cada um dos dois SAQs correspondentes.
   <br>
- **Nível 4**: Organizações que processam menos de 20.000 transações online por ano e organizações que processam até 1 milhão de transações totais por ano. 
   - Questionário anual de autoavaliação PCI (SAQ) correspondente.
   - Digitalização de rede trimestral por fornecedor aprovado (ASV).
   - Certificação de conformidade (AOC) para cada um dos dois SAQs correspondentes.
   
>O [SAQ (Self-Assessment Questionnaire)](https://www.pcisecuritystandards.org/pci_security/completing_self_assessment) é um formulário de autoavaliação PCI que deve ser preenchido por empresas ou prestadores de serviços que não são elegíveis para preencher um Relatório de Conformidade de Nível 1 e cujo objetivo é validar a conformidade regulamentar por meio de uma série de controles resumidos em perguntas "sim" ou "não". 

## Compliance

Mercado Pago é responsável por garantir as informações dos dados do titular do cartão assim que ele entrar em seu ambiente, por isso é importante que as empresas e / ou plataformas de comércio eletrônico realizem os controles de segurança apropriados para transmiti-los corretamente. Como prestador de serviços, o Mercado Pago pode validar a conformidade solicitando comprovação da documentação do PCI correspondente de acordo com o produto utilizado.

O Mercado Pago simplifica consideravelmente o ônus do cumprimento deste regulamento para as organizações que adotam o Checkout Pro, uma vez que utilizam um campo que se origina diretamente de nossos servidores em uma área segura para a entrada de dados do cartão do cliente. Desta forma, a maioria dos requisitos do PCI DSS recai no Mercado Pago e isso reduzirá consideravelmente seus esforços em controles de segurança.

Para estar em conformidade com o PCI DSS, demonstrar sua conformidade e, por sua vez, proteger os detalhes do cartão de seus clientes, é importante utilizar integrações de pagamento seguras como o Checkout Pro para assegurar que os dados de portadores de cartão não cheguem a seus sevidores.

Como vimos nas seções anteriores, para o nível 1, é necessário realizar uma auditoria com um consultor externo. Por outro lado, para os níveis 2 a 4, existem diferentes tipos de SAQ dependendo do método de integração de pagamento que você usa. Recomendamos que você complete o SAQ correspondente de acordo com o tipo de Caixa escolhido devido às obrigações impostas pelos regulamentos PCI. 

Aqui resumimos que tipo de SAQ você deve preencher para cada solução de integração oferecida pelo Mercado Pago.

**Solução** | **SAQ**
------ | ------
Checkout Bricks | A
Checkout Pro | A
Checkout Transparente | A

>Consulte o documento **SAQ Instructions and Guidelines** da [biblioteca oficial do PCI](https://www.pcisecuritystandards.org/document_library) para obter detalhes sobre a descrição de cada SAQ.





