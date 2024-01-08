# Gerar relatório via API

Você pode gerar seu relatório via API manualmente quantas vezes quiser ou programe-o de acordo com a frequência desejada por meio de nossa API.

## Configurar seus relatórios

### Atributos configuráveis

Confira os campos que você pode configurar para ajustar suas preferências antes de começar:

> WARNING
>
> Importante
>
> Configurar este atributo de `frequency` não significa que o relatório será gerado automaticamente. A configuração será aplicada somente quando o agendamento automático for ativado. Para mais detalhes, confira a seção [Agende seus relatórios.](#bookmark_agende_seus_relatórios_automáticos)

| Campos configuráveis | Descrição |
| --- | --- |
| *`coupon_detailed` (opcional)* | <br/>Inclui uma coluna para mostrar os detalhes dos cupons de desconto.<br/><br/> |
| `columns` | <br/>Campo com os detalhes das colunas a serem incluídas no seu relatório. Encontre todos os valores possíveis na seção [Glossário](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/account-money/glossary).<br/><br/>|
| `file_name_prefix` | <br/>Prefixo que compõe o nome do relatório assim que estiver gerado e pronto para baixar.<br/><br/> |
| `frequency` | <br/>Indica a frequência diária, semanal ou mensal dos relatórios programados.<br/><br/> - `frequency` aplica type *monthly* ao dia do mês ou weekly ao dia da semana<br/> - `hour` hora do dia que o relatório deve ser gerado <br/> - `type` indica o tipo de frequência: *daily* (diária), *weekly* (semanal) e *monthly* (mensal).<br/><br/> |
| `display_timezone` (opcional) | <br/>Este campo determina a data e o horário mostrados nos relatórios. Se você não configurar um fuso horário para esse campo, o sistema considerará o fuso GMT-04 como padrão. Caso escolha um fuso que adote horário de verão, você precisará fazer o ajuste manual quando o horário mudar.<br/><br/> |
| `include_withdraw` | <br/>Este parâmetro permite ignorar (false) ou incluir (true) os saques de dinheiro no relatório.<br/><br/> |
| `report_translation` (opcional) | <br/>Permite mudar o idioma padrão dos cabeçalhos das colunas de relatórios gerados em formato Excel (.xlsx). Se você tiver uma integração com base nesse formato e configurar esse recurso, recomendamos que verifique se ela está funcionando corretamente.<br/><br/> Caso a integração não esteja funcionando corretamente, por favor, atualize-a tendo os novos cabeçalhos como referência.<br/><br/> |
| *`refund_detailed` (opcional)* | <br/>Mostra o código de referência (`external_reference`) do reembolso em vez do código de referência (`external_reference`) do pagamento.<br/><br/> |
| `scheduled` (read_only) | <br/>Campo informativo que indica se já existem relatórios programados na conta do usuário.<br/> `True` A geração automática está ativada <br/> `False` A geração automática está desativada<br/><br/> |
| *`separator` (opcional)* | <br/>Separador que pode ser usado no arquivo .csv quando não quiser que o separador seja uma vírgula. <br/><br/> |
| `notification_email_list` (opcional) | <br/>Permite adicionar um grupo de destinatários de e-mail para que recebam uma notificação quando um relatório estiver pronto e disponível para download. Certifique-se de incluir o e-mail associado à sua conta Mercado Pago para que você também receba as notificações.<br/><br/> |
| *`sftp_info` (opcional)* | <br/>Indica os dados para subir a SFTP quando precisar.<br/><br/> |
| *`shipping_detail` (opcional)* | <br/> Inclui os detalhes dos envios. <br/> <br/>|
| *`show_chargeback_cancel` (opcional)* | <br/> Inclui os detalhes dos cancelamentos das contestações. <br/> <br/>|
| *`show_fee_prevision` (opcional)* | <br/> Inclui os detalhes das comissões. <br/> <br/>|

Você pode configurar seus relatórios conforme necessário. Abaixo, destacamos as chamadas de API disponíveis para que você possa gerenciar a configuração do seu relatório e, posteriormente, com base nessas configurações, gerar os relatórios.

### Criar uma nova configuração

Personalize seus relatórios atribuindo diferentes propriedades de criação executando o seguinte _curl_: 

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/config' \
    -d '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$data = '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }';
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                    \\"file_name_prefix\\": \\"settlement-report-USER_ID\\",
                    \\"show_fee_prevision\\": false,
                    \\"show_chargeback_cancel\\": true,
                    \\"coupon_detailed\\": true,
                    \\"include_withdraw\\": true,
                    \\"shipping_detail\\": true,
                    \\"refund_detailed\\": true,
                    \\"display_timezone\\": \\"GMT-04\\",
                    \\"notification_email_list\\": [
                        \\"example@email.com\\",
                        \\"john@example.com\\",
                    ],
                    \\"frequency\\": {
                        \\"hour\\": 0,
                        \\"type\\": \\"monthly\\",
                        \\"value\\": 1
                    },
                    \\"columns\\": [
                        { \\"key\\": \\"TRANSACTION_DATE\\" },
                        { \\"key\\": \\"SOURCE_ID\\" },
                        { \\"key\\": \\"EXTERNAL_REFERENCE\\" },
                    ]
                }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

data = '{  
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'

response = requests.post('https://api.mercadopago.com/v1/account/settlement_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/config',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

Na ausência de erros, será emitido um código de status `HTTP 201 (Created)`. A API responderá com uma estrutura JSON, cujas propriedades representarão a configuração que você criou.

#### Resposta

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "scheduled": false,
    "coupon_detailed": true,
    "include_withdraw": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "display_timezone": "GMT-04",
    "notification_email_list": [
        "example@email.com",
        "john@example.com"
    ],
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    },
    "columns": [
        {
            "key": "TRANSACTION_DATE"
        },
        {
            "key": "SOURCE_ID"
        },
        {
            "key": "EXTERNAL_REFERENCE"
        }
    ]
}
```

### Consultar configurações

Consulte a configuração atual dos seus relatórios executando o seguinte _curl_:

[[[
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/config' \
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$response = Requests::get('https://api.mercadopago.com/v1/account/settlement_report/config', $headers);
```
```java
 URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests
headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.get('https://api.mercadopago.com/v1/account/settlement_report/config', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/config',
    headers: headers
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
```
]]]

Na ausência de erros, será emitido um código de status `HTTP 200 (Ok)`. A API responderá com uma estrutura JSON cujas propriedades representarão as características dos seus relatórios.

#### Resposta

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "scheduled": false,
    "coupon_detailed": true,
    "include_withdraw": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "display_timezone": "GMT-04",
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    },
     "columns": [
        {
            "key": "TRANSACTION_DATE"
        },
        {
            "key": "SOURCE_ID"
        },
        {
            "key": "EXTERNAL_REFERENCE"
        }
    ]
}
```

### Atualizar configurações

Atualize as configurações predefinidas dos seus relatórios quando necessário executando o _curl_ abaixo.

> NOTE
>
> Nota
>
> Se, ao atualizar a configuração, você quiser alterar o atributo `frequency`, e já tiver ativado a criação automática dos seus relatórios, siga os seguintes passos: <br/><br/> 1. Cancele a criação agendada dos seus relatórios seguindo os passos descritos na seção **Desativar criação automática** em [Agendar relatório automaticamente.](#bookmark_agendar_relatório_automaticamente) <br/> 2. Atualize a configuração. <br/> 3. Habilite novamente a criação automática dos seus relatórios seguindo os passos da seção **Ativar criação automática** em [Agendar relatório automaticamente.](#bookmark_agendar_relatório_automaticamente)


[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/config' \
    -d '{
        "file_name_prefix": "settlement-report-USER_ID",
        "show_fee_prevision": false,
        "show_chargeback_cancel": true,
        "coupon_detailed": true,
        "include_withdraw": true,
        "shipping_detail": true,
        "refund_detailed": true,
        "display_timezone": "GMT-04",
        "notification_email_list": [
            "example@email.com",
            "john@example.com"
        ],
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        },
        "columns": [
            {
                "key": "TRANSACTION_DATE"
            },
            {
                "key": "SOURCE_ID"
            },
            {
                "key": "EXTERNAL_REFERENCE"
            }
        ]
    }'
```
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$data = '{
        "file_name_prefix": "settlement-report-USER_ID",
        "show_fee_prevision": false,
        "show_chargeback_cancel": true,
        "coupon_detailed": true,
        "include_withdraw": true,
        "shipping_detail": true,
        "refund_detailed": true,
        "display_timezone": "GMT-04",
        "notification_email_list": [
            "example@email.com",
            "john@example.com"
        ],
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        },
        "columns": [
            {
                "key": "TRANSACTION_DATE"
            },
            {
                "key": "SOURCE_ID"
            },
            {
                "key": "EXTERNAL_REFERENCE"
            }
        ]
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/settlement_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                    \\"file_name_prefix\\": \\"settlement-report-USER_ID\\",
                    \\"show_fee_prevision\\": false,
                    \\"show_chargeback_cancel\\": true,
                    \\"coupon_detailed\\": true,
                    \\"include_withdraw\\": true,
                    \\"shipping_detail\\": true,
                    \\"refund_detailed\\": true,
                    \\"display_timezone\\": \\"GMT-04\\",
                    \\"notification_email_list\\": [
                        \\"example@email.com\\",
                        \\"john@example.com\\",
                    ],
                    \\"frequency\\": {
                        \\"hour\\": 0,
                        \\"type\\": \\"monthly\\",
                        \\"value\\": 1
                    },
                    \\"columns\\": [
                        { \\"key\\": \\"TRANSACTION_DATE\\" },
                        { \\"key\\": \\"SOURCE_ID\\" },
                        { \\"key\\": \\"EXTERNAL_REFERENCE\\" },
                    ]
            }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

data = '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'

response = requests.put('https://api.mercadopago.com/v1/account/settlement_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
        "file_name_prefix": "settlement-report-USER_ID",
        "show_fee_prevision": false,
        "show_chargeback_cancel": true,
        "coupon_detailed": true,
        "include_withdraw": true,
        "shipping_detail": true,
        "refund_detailed": true,
        "display_timezone": "GMT-04",
        "notification_email_list": [
            "example@email.com",
            "john@example.com"
        ],
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        },
        "columns": [
            {
                "key": "TRANSACTION_DATE"
            },
            {
                "key": "SOURCE_ID"
            },
            {
                "key": "EXTERNAL_REFERENCE"
            }
        ]
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/config',
    method: 'PUT',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

Na ausência de erros, será emitido um código de status `HTTP 200 (Ok)`. A API responderá com uma estrutura JSON cujas propriedades representarão a configuração que você atualizou.

#### Resposta

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "scheduled": false,
    "coupon_detailed": true,
    "include_withdraw": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "display_timezone": "GMT-04",
    "notification_email_list": [
        "example@email.com",
        "john@example.com"
    ],
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    },
    "columns": [
        {
            "key": "TRANSACTION_DATE"
        },
        {
            "key": "SOURCE_ID"
        },
        {
            "key": "EXTERNAL_REFERENCE"
        }
    ]
}
```

> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/account-money/glossary) de Dinheiro em conta para consultá-lo quando precisar ou queira conferir algum termo técnico.

## Criar relatório manualmente

Você tem à sua disposição vários recursos que permitirão interagir com seus relatórios manualmente.

### Criar relatório

Faça uma requisição POST à API para gerar manualmente um novo relatório dentro de um intervalo de datas específico:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report' \
    -d '{
            "begin_date": "2019-05-01T00:00:00Z",
            "end_date": "2019-06-01T00:00:00Z"
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$data ='{
            "begin_date": "2019-05-01T00:00:00Z",
            "end_date": "2019-06-01T00:00:00Z"
    }';

$response = Requests::post("https://api.mercadopago.com/v1/account/settlement_report", $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");
connection.setDoOutput(true);

String body = "{\\"begin_date\\":\\"2019-05-01T00:00:00Z\\",\\"end_date\\": \\"2019-06-01T00:00:00Z\\"}";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}


data = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }'

response = requests.post('https://api.mercadopago.com/v1/account/settlement_report', headers=headers, data=data)
```
```node
var request = require('request');

var headers = { 
    'accept': 'application/json', 
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report',
    method: 'POST',
    headers: headers,
    body: dataString
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
```
]]]

Na ausência de erros, será emitido um código de status `HTTP 202 (Accepted)`. Após isso, o seu relatório será gerado de forma assíncrona. Você receberá como resposta uma estrutura JSON com informações relevantes ao seu pedido de criação.

----[mlm, mla, mco, mpe, mlu, mlc]----
Uma resposta `HTTP STATUS 203 (Non-Authoritative Information)` indica que a solicitação ocorreu conforme o esperado, apesar disso, não foi possível criar seu relatório e será necessário solicitá-lo novamente com as datas indicadas no sistema.

------------

### Consultar relatório

Consulte a API conforme abaixo para explorar a lista de relatórios que você gerou:

[[[
```curl
curl -G \
    -H 'accept: application/json' \
    -d 'access_token=ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/list'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json'
);
$data = array(
    'access_token' => 'ENV_ACCESS_TOKEN'
);
$response = Requests::get('https://api.mercadopago.com/v1/account/settlement_report/list', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/list");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = { 
    'accept': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN' 
}

response = requests.get('https://api.mercadopago.com/v1/account/settlement_report/list', headers=headers)
```
```node
var request = require('request');
var headers = { 
    'accept': 'application/json',
};
var dataString = 'access_token=ENV_ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/list',
    method: 'GET',
    headers: headers,
    body: dataString
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
```
]]]

Na ausência de erros, será emitido um código de status `HTTP 200 (Ok)`. A API responderá com um JSON Array no qual você encontrará a lista de todos os relatórios que gerou.

#### Resposta

```json
[
    {
        "id": 12345678,
        "user_id": USER-ID,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T23:59:59Z",
        "file_name": "settlement-report-USER_ID-2016-01-20-131015.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
        ...
    }
]
```

### Baixar relatório

Usando o atributo `file_name`, você pode baixar qualquer um de seus relatórios na seguinte URL:

[[[
```curl
curl -X GET \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/:file_name'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json'
);
$data = array(
    'access_token' => 'ENV_ACCESS_TOKEN'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/:file_name', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/:file_name");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.get('https://api.mercadopago.com/v1/account/settlement_report/:file_name', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/:file_name'
    method: 'GET',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

Na ausência de erros, será emitido um código de status `HTTP 200 (Ok)`. Na resposta da API, você terá à disposição o arquivo do relatório que solicitou baixar.

#### Resposta

```csv
EXTERNAL_REFERENCE;SOURCE_ID;USER_ID;PAYMENT_METHOD_TYPE;PAYMENT_METHOD;SITE;TRANSACTION_TYPE;TRANSACTION_AMOUNT;TRANSACTION_CURRENCY;TRANSACTION_DATE;FEE_AMOUNT;SETTLEMENT_NET_AMOUNT;SETTLEMENT_CURRENCY;SETTLEMENT_DATE;REAL_AMOUNT;COUPON_AMOUNT;METADATA;MKP_FEE_AMOUNT;FINANCING_FEE_AMOUNT;SHIPPING_FEE_AMOUNT;TAXES_AMOUNT;INSTALLMENTS;ORDER_ID;SHIPPING_ID;SHIPMENT_MODE;PACK_ID
2112818453;5067634447;123456789;account_money;account_money;MLB;SETTLEMENT;79.00;BRL;2019-08-11T22:20:19.000-04:00;-8.85;70.15;BRL;2019-08-11T22:20:19.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112818453;28067695419;me1;2E+15
2112815686;5067535844;123456789;account_money;account_money;MLB;SETTLEMENT;819.00;BRL;2019-08-11T22:15:32.000-04:00;-91.73;727.27;BRL;2019-08-11T22:15:32.000-04:00;727.27;0.00;[{}];-91.73;0.00;0.00;0.00;1;2112815686;28067772278;me1;2E+15
2112811587;5067365727;123456789;account_money;account_money;MLB;SETTLEMENT;769.00;BRL;2019-08-11T22:11:13.000-04:00;-86.13;682.87;BRL;2019-08-11T22:11:13.000-04:00;682.87;0.00;[{}];-86.13;0.00;0.00;0.00;1;2112811587;28067612908;me1;2E+15
2112784039;5067781790;123456789;credit_card;master;MLB;SETTLEMENT;199.00;BRL;2019-08-11T21:38:18.000-04:00;-22.29;176.71;BRL;2019-08-11T21:38:24.000-04:00;176.71;0.00;[{}];-22.29;0.00;0.00;0.00;1;2112784039;;;
2112755183;5067186172;123456789;credit_card;master;MLB;SETTLEMENT;79.00;BRL;2019-08-11T21:10:20.000-04:00;-8.85;70.15;BRL;2019-08-11T21:10:27.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112755183;;;
2112747018;5067323570;123456789;credit_card;visa;MLB;SETTLEMENT;3109.00;BRL;2019-08-11T21:00:11.000-04:00;-348.21;2760.79;BRL;2019-08-11T21:00:18.000-04:00;2760.79;0.00;[{}];-348.21;0.00;0.00;0.00;12;2112747018;;;
2112742918;5067175589;123456789;account_money;account_money;MLB;SETTLEMENT;154.00;BRL;2019-08-11T20:57:05.000-04:00;-17.25;136.75;BRL;2019-08-11T20:57:05.000-04:00;136.75;0.00;[{}];-17.25;0.00;0.00;0.00;1;2112742918;28067593333;me1;2E+15
2112736997;5067585992;123456789;digital_currency;consumer_credits;MLB;SETTLEMENT;94.00;BRL;2019-08-11T20:51:12.000-04:00;-10.53;83.47;BRL;2019-08-11T20:51:18.000-04:00;83.47;0.00;[{}];-10.53;0.00;0.00;0.00;1;2112736997;;;
2112736008;5067314803;123456789;digital_currency;consumer_credits;MLB;SETTLEMENT;79.00;BRL;2019-08-11T20:48:08.000-04:00;-8.85;70.15;BRL;2019-08-11T20:48:15.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112736008;;;
2112729919;5067463621;123456789;credit_card;master;MLB;SETTLEMENT;79.00;BRL;2019-08-11T20:41:46.000-04:00;-8.85;70.15;BRL;2019-08-11T20:41:55.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112729919;;;
```

## Agendar relatório automaticamente

Crie seus relatórios de forma programada configurando duas instâncias: ativação e desativação.

### Ativar criação automática

Programe a criação automática do relatório utilizando a frequência atribuída durante a configuração dos seus relatórios. Ao consumir este serviço, a propriedade `scheduled` da sua configuração será atualizada automaticamente para `true`:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/schedule'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/schedule', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/schedule");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.post('https://api.mercadopago.com/v1/account/settlement_report/schedule', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/schedule',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

Na ausência de erros, será emitido um código de status `HTTP 200 (OK)`. A API responderá com uma estrutura JSON na qual você encontrará informações associadas ao relatório que você agendou.

#### Resposta

```json
{
    "id": 2541818,
    "user_id": "USER-ID",
    "begin_date": "2019-07-01T06:00:00Z",
    "end_date": "2019-08-01T05:59:59Z",
    "created_from": "schedule",
    "status": "pending",
    "report_type": "settlement",
    "generation_date": "2019-08-01T06:00:00.000Z",
    "last_modified": "2019-07-24T13:45:33.479-04:00",
    "retries": 0
}
```

### Desativar criação automática

Pode desativar a geração automática dos seus relatórios a qualquer momento, quando necessário. Ao consumir este serviço, a propriedade `scheduled` da sua configuração será atualizada automaticamente para `false`.

[[[
```curl
curl -X DELETE \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \  
    'https://api.mercadopago.com/v1/account/settlement_report/schedule'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$response = Requests::delete('https://api.mercadopago.com/v1/account/settlement_report/schedule', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/schedule");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("DELETE");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.delete('https://api.mercadopago.com/v1/account/settlement_report/schedule', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/schedule',
    method: 'DELETE',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

Na ausência de erros, será emitido um código de status `HTTP 200 (OK)`. A API responderá com uma estrutura JSON na qual você encontrará informações associadas ao relatório que desativou.

#### Resposta

```json
{
    "id": 2787882,
    "begin_date": "2019-08-15T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-08-16T05:59:59Z",
    "generation_date": "2019-08-16T02:00:00.000-04:00",
    "last_modified": "2019-08-15T15:41:53.681-04:00",
    "report_type": "settlement",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```