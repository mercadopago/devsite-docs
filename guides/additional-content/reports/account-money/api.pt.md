# Geração via API

Você pode gerar seu relatório via API, tanto de forma manual quanto programada.
Ganhe tempo e **automatizá la frecuencia de generación del reporte** de Dinheiro em conta sempre que quiser.
 ## Atributos configuráveis

Confira os campos que você pode configurar para ajustar suas preferências antes de começar:

> WARNING
>
> Warning
>
> Configurar este atributo de `frequency` não significa que o relatório será gerado automaticamente. A configuração será aplicada somente quando o agendamento automático for ativado. Para mais detalhes, confira a seção [Agende seus relatórios](#bookmark_agende_seus_relatórios_automáticos).

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

## Configurar seus relatórios

Execute o curl que você precisa para consultar, gerar e atualizar seus relatórios.

### Consultar configurações

Consulte a configuração dos seus relatórios via API da seguinte maneira:

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

Como resposta, você receberá um `HTTP STATUS 200 (Ok)`

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

### Criar configuração

Crie suas preferências de geração via API para exportar colunas, nomear seus arquivos e configurar outros ajustes:

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

Como resposta, você receberá um `HTTP STATUS 201 (Created)`

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

### Atualizar configuração

> NOTE
>
> Nota
>
>Se, ao atualizar a configuração, você quiser alterar o atributo "Frequency", e já tiver ativado a geração automática dos seus relatórios, siga estes passos: <br/><br/> 1. Cancele a geração agendada dos seus relatórios, seguindo os passos na seção [Desativação](#bookmark_2._desativação). <br/> 2. Atualize a configuração alterando o atributo `frequency` pelos snippets disponíveis nessa seção.  <br/> 3. Agende novamente a geração automática do relatório, seguindo os passos da seção [Ativação](#bookmark_1._ativação).

Quando precisar atualizar sua configuração, você pode ajustar os seguintes atributos:


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


Como resposta, você receberá um `HTTP STATUS 200 (Ok)`

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

## Gerar de forma manual

Gere seus relatórios de forma manual configurando três cenários: geração, pesquisa e download.

### 1. Geração

Faça o POST à API especificando as datas de início e fim, assim:

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

Como resposta, você receberá um `HTTP STATUS 202 (Accepted)`, e o relatório será gerado de forma assincrônica.

### 2. Busca

Para ver se a geração de relatórios está pronta, consulte a API desta forma: 

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

Como resposta, você receberá um `HTTP STATUS 200 (Ok)`

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

### 3. Download

Usando o atributo `file_name`, você pode baixar o relatório na seguinte URL:

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


Como resposta, você receberá um `HTTP STATUS 200 (Ok)`

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

<br/>

## Agende seus relatórios automáticos

Gere seus relatórios de forma programada configurando duas instâncias: ativação e desativação.

### 1. Ativação

Programe a geração automática do relatório usando a frequência do recurso de configuração. Atualize o atributo *`scheduled`* na configuração *`true`*:

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

Como resposta, você receberá um  `HTTP STATUS 200 (Ok)`

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

### 2. Desativação

Execute o curl que precisar para iniciar e cancelar a geração programada dos seus relatórios.


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

Como resposta, você receberá um `HTTP STATUS 200 (Ok)`

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

> NOTE
>
> Esta documentação corresponde à nova versão da API
>
> Para consultar a versão anterior, por favor, acesse a [seção Geração por API antiga](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/account-money/v1/api).

> NEXT_STEP_CARD_PT
>
> Geração a partir do Mercado Pago
>
> Baixe seus relatórios de forma manual ou programada na sua conta do Mercado Pago.     
>
> [Geração a partir do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/account-money/panel)

> NEXT_STEP_CARD_PT
>
> Glossário
>
> Saiba o que significa cada termo e os detalhes das colunas que compõem o relatório.
>
> [Glossário](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/account-money/glossary)
