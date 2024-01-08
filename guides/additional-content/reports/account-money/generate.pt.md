# Gerar relatório

Você pode gerar um relatório de Dinheiro em conta através da sua conta Mercado Pago ou por meio da integração via API. Veja a tabela a seguir para obter mais informações.

> NOTE
>
> Atenção
>
> Gerencie suas vendas com código QR de um jeito fácil. Criamos novas colunas que permitem que você identifique as carteiras digitais ou os bancos que seus clientes utilizam ao pagarem com um código QR do Mercado Pago. Atualize suas preferências de configuração [no painel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/settlement/settings) ou [via API](/developers/pt/guides/additional-content/reports/account-money/api) para incluir as colunas nos seus relatórios.
> 
> O relatório somente irá gerar informações após a configuração do relatório ter sido feita e este seja executado a primeira vez.
Desse modo, a primeira execução terá um relatório vazio. Não é possível gerar o relatório com informações retroativas à data da configuração e primeira execução.

## Canais de criação

Há duas formas de gerar um relatório de Dinheiro em conta:

| Canais | Descrição |
| --- | --- |
| Painel do Mercado Pago | É possível criar o relatório manualmente através do painel Mercado Pago. Acesse a seção de [Relatórios e faturamento](https://www.mercadopago.com.br/movements), clique em **Ir para Relatórios de pagamentos e extratos de conta** e selecione o relatório. Para mais informações, leia a documentação [Gerar relatório pelo painel](/developers/pt/guides/additional-content/reports/account-money/panel). |
| Integração via API | Crie o relatório de forma manual ou agendada de acordo com a frequência desejada utilizando nossa integração via API. Para mais informações, consulte a documentação [Gerar relatório via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/account-money/api). |

## Características técnicas do relatório

Considere as seguintes informações técnicas sempre que for gerar, programar e configurar seus relatórios.

### Programação do relatório

Programe como e com que frequência você quer gerar seus relatórios. 

| Elemento | Características |
| --- | --- |
| Programação | <br/>- Diária<br/> - Semanal<br/>- Mensal<br/><br/> |
| Criação | <br/>- Manual<br/><br/> | <br/>- Automática<br/><br/> |

### Estrutura do relatório

Saiba as características dos elementos que compõem seu relatório.

| Elemento ou ação | Características |
| --- | --- |
| Detalhes das tabelas | <br/>Os detalhes das tabelas compreendem as informações de, no mínimo, 1 dia. <br/> <br/> |
| Ordem das colunas |<br/> Fixa <br/> <br/> |
| Período máximo | <br/> Relatórios com dados de até 60 dias. <br/> <br/> |
| Moeda | <br/> Local (com base no país onde está cadastrada a conta do Mercado Pago) <br/> <br/> |
| Fuso horário das colunas: | <br/> GMT-3 (Horário de Brasília) <br/> <br> Tome como referência o lugar de onde o relatório é baixado. <br/><br/> |
| Seleção de datas via API |<br/> Formato do fuso horário: UTC / GMT-0 <br/> <br/> |
| Seleção de datas via web | <br/> Deve ter como base o fuso horário da conta do usuário.<br/> Por exemplo, a conta do usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. <br/> <br/> |

### Exportação do relatório

Todas as opções disponíveis na hora de baixar seu relatório.

| Ações e componentes | Características |
| --- | --- |
| Formato do nome do arquivo | <br/>Quando o relatório é programado ou manual:<br/> "&#60;prefixo-configurável&#62;-<span>&#60;yyyy-MM-dd-hhmmss&#62;.&#60;formato&#62;</span>" <br/> Exemplo: minhaloja-2019-05-28-104010.csv<br/><br/> |
| Formatos de download | <br/>.csv, .xlsx <br/><br/>Dica: baixe o relatório em .csv para importar os dados e usá-los em outros aplicativos. Baixe-o em .xlsx para ler as informações nas tabelas da planilha. <br/><br/> |
| Arquivo | <br/>Os relatórios gerados ficam salvos na sua conta do Mercado Pago.<br/><br/> |
| Configuração disponível via API | <br/>- Colunas a gerar por relatório<br/> - Prefixo do arquivo para identificá-lo facilmente<br/> - Envio por SFTP<br/> - Separador de colunas (ponto ou ponto e vírgula)<br/> - Notificação por e-mail<br/><br/> |

## Notificações

### Webhook

Webhook, também chamado de "retorno de chamada web", é um método eficiente para receber informações em tempo real sempre que um evento ocorre em um aplicativo ou sistema. Essa abordagem permite a transferência passiva de dados entre dois sistemas por meio de solicitações HTTP POST. Em relação aos relatórios utilizados na reconciliação, uma notificação é enviada ao usuário que tiver configurado este serviço assim que os arquivos correspondentes forem gerados.

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

A senha de criptografia é essencial para assegurar o processo de notificação ao sistema. No corpo da mensagem (_payload_), um atributo chamado **_"signature"_** é enviado para validar a origem legítima da notificação Webhook do Mercado Pago, evitando possíveis imitações.

A criação da **signature** ocorre pela combinação do `transaction_id` com a `senha criptografada` na seção **_"Notificação por Webhook"_**, juntamente com o `generation_date` do relatório. Esses valores são então criptografados utilizando o algoritmo **_BCrypt_** da seguinte forma:

`signature = BCrypt(transaction_id + '-' + password_for_encryption + '-' + generation_date)`

Para validar que foi o Mercado Pago quem emitiu a notificação, é necessário utilizar a **_função de verificação oferecida_** pelo algoritmo do **_BCrypt_** para a linguagem desejada.

**Exemplo em Java:**

`BCrypt.checkpw(transaction_id + '-' + password_for_encryption + '-' + generation_date, payload_signature)`

> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](/developers/pt/guides/additional-content/reports/account-money/glossary) de Dinheiro em conta para consultá-lo quando precisar ou queira conferir algum termo técnico.
