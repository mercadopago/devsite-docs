
# Como gerar o seu relatório de Liberações?

----[mla]----
> NOTE
>
> Gerencie suas vendas com código QR de um jeito fácil
>
> Criamos novas colunas que permitem que você identifique as carteiras digitais ou os bancos que seus clientes utilizam ao pagarem com um código QR do Mercado Pago. Atualize suas preferências de configuração [no painel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/release/settings) ou [via API](/developers/pt/guides/additional-content/reports/released-money/api) para incluir as colunas nos seus relatórios.
------------

## Canais de geração

Você pode gerar um relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ pela sua conta Mercado Pago:

| Canais | Descrição |
| --- | --- |
| Painel do Mercado Pago | Para gerar manualmente o relatório a partir do seu painel Mercado Pago, vá até [Relatórios](https://www.mercadopago[FAKER][URL][DOMAIN]/movements) e selecione a opção "Relatórios criados".<br/><br/>Siga o passo a passo para [gerar seus relatórios a partir do painel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/panel). |
| Integração via API | Para gerar manualmente o report ou agendar um de acordo com a frequência desejada, use a nossa integração via API. <br/><br/> Leia a documentação para [gerar relatórios por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/api). |

## Características técnicas do relatório

Considere as seguintes informações técnicas sempre que for gerar, programar e configurar seus relatórios.


### Estrutura do relatório

Saiba as características dos elementos que compõem seu relatório.


| Ações e componentes | Características |
| --- | --- |
| Detalhes das tablas | Os detalhes das tabelas compreende as informações no mínimo de 1 dia. |
| Ordem das colunas | Fixa |
| Período máximo | Relatórios com dados de até 60 dias. |
| Moeda | Local (com base no país onde está cadastrada a conta do Mercado Pago) |
| Fuso horário das colunas: | GMT-4 <br/> <br/> Tome como referência o lugar de onde o relatório é baixado. |
| Seleção de datas via web | Deve ter como base o fuso horário da conta do usuário. <br/>Por exemplo, a conta do usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. |


### Exportação do relatório

Todas as opções disponíveis na hora de baixar seu relatório.

| Ações e componentes | Características |
| --- | --- |
| Formato do nome do arquivo | Quando o relatório é programado ou manual:<br/> "prefixo-configuravel-<span style='color:#999999;'>data-de-criacao.csv</span>" <br/> Exemplo: minhaloja-28-05-2019.csv |
| Formatos de download | .csv, .xlsx <br/><br/>Dica: baixe o relatório em .csv para importar os dados e usá-los em outros aplicativos. Baixe-o em .xlsx para ler as informações nas tabelas da planilha. |
| Arquivo | Os relatórios gerados ficam salvos na sua conta do Mercado Pago. |


## Notificações

### Webhook

Webhook (também conhecido como "retorno de chamada web"), é um método simples que permite que um aplicativo ou sistema forneça informações em tempo real toda vez que um evento acontece, ou seja, é uma maneira de receber dados entre dois sistemas de forma passiva, por meio de um HTTP POST. No caso dos relatórios usados na reconciliação, uma notificação é enviada ao usuário que tiver configurado este serviço quando seus arquivos forem gerados.

| Atributo        | Descrição                         |
|-----------------|-----------------------------------|
| transaction_id  | ID da transação                   |
| request_date    | Data da solicitação               |
| generation_date | Data da geração                   |
| files           | Arquivos disponíveis              |
| type            | Formato do arquivo                |
| url             | Link de download                  |
| name            | Nome do arquivo                   |
| status          | Status do relatório               |
| creation_type   | Criação manual ou agendada        |
| report_type     | Tipo de relatório                 |
| is_test         | Determina se é um teste           |
| signature       | Assinatura digital da notificação |

### Senha para criptografia

Para garantir o processo de notificação ao sistema, será enviado no corpo da mensagem (payload) um atributo chamado **_"signature"_** para validar que a notificação Webhook teve origem no Mercado Pago e que não se trata de uma imitação.

A **signature** é criada ao unir o `transaction_id` com a `senha criptografada` na seção **_"Notificação por Webhook"_** e o `generation_date` do relatório. Assim que os valores forem vinculados, eles são criptografados usando o algoritmo **_BCrypt_** da seguinte maneira:

`signature = BCrypt(transaction_id + '-' + password_for_encryption + '-' + generation_date)`

Para validar que foi o Mercado Pago quem emitiu a notificação, é necessário usar a **_função de verificação oferecida_** pelo algoritmo do **_BCrypt_** para a linguagem desejada.

**Exemplo Java:**

`BCrypt.checkpw(transaction_id + '-' + password_for_encryption + '-' + generation_date, payload_signature)`

> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/glossary) de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ para consultá-lo quando precisar ou queira conferir algum termo técnico.