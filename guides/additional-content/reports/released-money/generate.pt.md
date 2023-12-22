# Gerar relatório

Você pode gerar um relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ através da sua conta Mercado Pago ou por meio da integração via API. Veja a tabela a seguir para obter mais informações.

----[mla]----
> NOTE
>
> Gerencie suas vendas com código QR de um jeito fácil
>
> Criamos novas colunas que permitem que você identifique as carteiras digitais ou os bancos que seus clientes utilizam ao pagarem com um código QR do Mercado Pago. Atualize suas preferências de configuração [no painel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/release/settings) ou [via API](/developers/pt/guides/additional-content/reports/released-money/api) para incluir as colunas nos seus relatórios.

------------

## Canais de geração

Você pode gerar um relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ pela sua conta Mercado Pago:

| Canais                    | Descrição                                                                                                                                                                                                                                                                                                                  |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Painel do Mercado Pago     | É possível criar o relatório manualmente através do painel Mercado Pago. Acesse a seção de [Relatórios e faturamento](https://www.mercadopago.com.br/movements), clique em **Ir para Relatórios de pagamentos e extratos de conta** e selecione o relatório. Para mais informações, leia a documentação [Gerar relatório pelo painel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/panel).                                               |
| Integração via API         | Crie o relatório de forma manual ou agendada de acordo com a frequência desejada utilizando nossa integração via API. Para mais informações, consulte a documentação [Gerar relatório via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/api). |

## Características técnicas do relatório

Considere as seguintes informações técnicas sempre que for criar, programar ou configurar um relatório.

### Estrutura do relatório

Entenda as características dos elementos que compõem seu relatório.

| Ações e componentes | Características |
| --- | --- |
| Detalhes das tabelas | Os detalhes das tabelas compreendem as informações de no mínimo 1 dia. |
| Ordem das colunas | Fixa |
| Período máximo | Relatórios com dados de até 60 dias. |
| Moeda | Local (com base no país onde está cadastrada a conta do Mercado Pago). |
| Fuso horário das colunas: | GMT-4 <br/> <br/> Tome como referência o lugar de onde o relatório é baixado. |
| Seleção de datas via web | Com base no fuso horário da conta do usuário. <br/>Por exemplo, a conta do usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. |

### Exportação do relatório

Todas as opções disponíveis na hora de baixar seu relatório.

| Ações e componentes | Características |
| --- | --- |
| Formato do nome do arquivo | Relatório programado ou manual:<br/> "prefixo-configuravel-<span style='color:#999999;'>data-de-criacao.csv</span>" <br/> Exemplo: minhaloja-28-05-2024.csv. |
| Formatos de download | ._csv_, ._xlsx_ <br/><br/>**Nota**: baixe o relatório em ._csv_ para importar os dados e usá-los em outros aplicativos. Baixe-o em ._xlsx_ para ler as informações em tabelas de planilha. |
| Arquivo | Os relatórios gerados são salvos na sua conta do Mercado Pago. |

## Notificações

### Webhook

Webhook, também chamado de "retorno de chamada web", é um método eficiente para receber informações em tempo real sempre que um evento ocorre em um aplicativo ou sistema. Essa abordagem permite a transferência passiva de dados entre dois sistemas por meio de solicitações HTTP POST. Em relação aos relatórios utilizados na reconciliação, uma notificação é enviada ao usuário que tiver configurado este serviço assim que os arquivos correspondentes forem gerados.

| Atributo        | Descrição                         |
|-----------------|-----------------------------------|
| transaction_id  | ID da transação                   |
| request_date    | Data da solicitação               |
| generation_date | Data da criação                   |
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

A senha de criptografia é essencial para assegurar o processo de notificação ao sistema. No corpo da mensagem (_payload_), um atributo chamado **_"signature"_** é enviado para validar a origem legítima da notificação Webhook do Mercado Pago, evitando possíveis imitações.

A criação da **signature** ocorre pela combinação do `transaction_id` com a `senha criptografada` na seção **_"Notificação por Webhook"_**, juntamente com o `generation_date` do relatório. Esses valores são então criptografados utilizando o algoritmo **_BCrypt_** da seguinte forma:

`signature = BCrypt(transaction_id + '-' + password_for_encryption + '-' + generation_date)`

Para validar que foi o Mercado Pago quem emitiu a notificação, é necessário utilizar a **_função de verificação oferecida_** pelo algoritmo do **_BCrypt_** para a linguagem desejada.

**Exemplo em Java:**

`BCrypt.checkpw(transaction_id + '-' + password_for_encryption + '-' + generation_date, payload_signature)`

> Tenha o [Glossário do relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/glossary) à mão para consulta sempre que necessário ou para conferir algum termo técnico.