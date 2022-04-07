
# Geração via API

Gere manualmente o relatório de dinheiro ----[mla]----liquidado------------ ----[mlm, mlb, mlc, mco, mlu, mpe]----liberado------------ quantas vezes quiser ou programe-o de acordo com a frequência que você escolher por meio de nossa API.

----[mlm, mlb, mlc, mco, mla]----
> WARNING
>
> Importante
>
> O relatório Dinheiro disponível será desativado nos próximos meses. Para continuar acompanhando todos os saques, transferências e movimentações do seu saldo disponível, por favor, use o relatório [Liberações.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/released-money/introduction)
------------

## Configurar seus relatórios

É possível configurar seus relatórios de acordo com o que você precisa. A seguir, mostramos quais as chamadas de API necessárias para criar, consultar e atualizar seus relatórios.

### Criar configuração

Crie suas preferências de geração via API para exportar colunas, nomear seus arquivos e configurar outros ajustes:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/config' \
    -d '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
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
                    "key": "DATE"
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
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
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
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
    }';
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"execute_after_withdrawal\\": true,
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
                    { \\"key\\": \\"DATE\\" },
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
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
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
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
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
                    "key": "DATE"
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
    url: 'https://api.mercadopago.com/v1/account/bank_report/config',
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

Como resposta, você receberá um  `HTTP STATUS 201 (Created)`

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "scheduled": false,
    "execute_after_withdrawal": true,
    "separator": ",",
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
            "key": "DATE"
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

Consulte a configuração dos seus relatórios via API da seguinte maneira:

[[[
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/config' \
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
$response = Requests::get('https://api.mercadopago.com/v1/account/bank_report/config', $headers);
```
```java
 URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config");

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

response = requests.get('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config',
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

Como resposta, você receberá `HTTP STATUS 200 (Ok)`:

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "scheduled": false,
    "execute_after_withdrawal": true,
    "separator": ",",
    "display_timezone": "GMT-04",
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    },
    "columns": [
        {
            "key": "DATE"
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

Quando precisar atualizar sua configuração, você pode ajustar os seguintes atributos:


[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/config' \
    -d '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
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
                    "key": "DATE"
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
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
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
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/bank_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"execute_after_withdrawal\\": true,
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
                    { \\"key\\": \\"DATE\\" },
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
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
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
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'

response = requests.put('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
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
                    "key": "DATE"
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
    url: 'https://api.mercadopago.com/v1/account/bank_report/config',
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
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "scheduled": false,
    "execute_after_withdrawal": true,
    "separator": ",",
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
            "key": "DATE"
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



## Atributos configuráveis

Confira os campos que você pode configurar para ajustar suas preferências antes de começar:

| Campos configuráveis | Descrição |
| --- | --- |
| `sftp_info` (opcional) | <br/>Indica os dados para subir a SFTP quando precisar.<br/><br/> |
| `separator` (opcional) | <br/>Separador que pode ser usado no arquivo .csv quando não quiser que o separador seja uma vírgula (‘,’). <br/><br/> |
| `display_timezone` (opcional) | <br/>Este campo determina a data e o horário mostrados nos relatórios. Se você não configurar um fuso horário para esse campo, o sistema considerará o fuso GMT-04 como padrão. Caso escolha um fuso que adote horário de verão, você precisará fazer o ajuste manual quando o horário mudar.<br/><br/> |
| `notification_email_list` (opcional) | <br/>Permite adicionar um grupo de destinatários de e-mail para que recebam uma notificação quando um relatório estiver pronto e disponível para download. Certifique-se de incluir o e-mail associado à sua conta Mercado Pago para que você também receba as notificações.<br/><br/> |
| `refund_detailed` (opcional) | <br/>Mostra o código de referência (external_reference) do reembolso em vez do código de referência (external_reference) do pagamento.<br/><br/> |
| `include_withdrawal` (opcional) | <br/>Inclui as retiradas de dinheiro no relatório.<br/><br/> |
| `coupon_detailed` (opcional) | <br/>Inclui uma coluna para mostrar os detalhes dos cupons de desconto.<br/><br/> |
| `columns` | <br/>Campo com os detalhes das colunas a serem incluídas no seu relatório. Encontre todos os valores possíveis na seção [Glossário](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/available-money/glossary).<br/><br/>|
| `file_name_prefix` | <br/>Prefixo que compõe o nome do relatório assim que estiver gerado e pronto para baixar.<br/><br/> |
| `frequency` | <br/>Indica a frequência diária, semanal ou mensal dos relatórios programados.<br/><br/> - `frequency` aplica type *monthly* ao dia do mês ou *weekly* ao dia da semana<br/> - `hour` hora do dia que o relatório deve ser gerado<br/> - `type` indica o tipo de frequência: *daily* (diária), *weekly* (semanal) y *monthly* (mensal).<br/><br/> |
| `scheduled` (read_only) | <br/>Campo informativo que indica se já existem relatórios programados na conta do usuário.<br/><br/> |

> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/available-money/glossary) de Dinheiro Disponível para consultá-lo quando precisar ou queira conferir algum termo técnico.


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
    'https://api.mercadopago.com/v1/account/bank_report' \
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

$response = Requests::post("https://api.mercadopago.com/v1/account/bank_report", $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report");

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

response = requests.post('https://api.mercadopago.com/v1/account/bank_report', headers=headers, data=data)
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
    url: 'https://api.mercadopago.com/v1/account/bank_report',
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
    'https://api.mercadopago.com/v1/account/bank_report/list'
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
$response = Requests::get('https://api.mercadopago.com/v1/account/bank_report/list', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/list");

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

response = requests.get('https://api.mercadopago.com/v1/account/bank_report/list', headers=headers)
```
```node
var request = require('request');
var headers = { 'accept': 'application/json'};
var dataString = 'access_token=ENV_ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/list',
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
        "file_name": "bank-report-USER_ID-2016-01-20-131015.csv",
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
    'https://api.mercadopago.com/v1/account/bank_report/:file_name'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/:file_name', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/:file_name");

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

response = requests.get('https://api.mercadopago.com/v1/account/bank_report/:file_name', headers=headers)
```
```node
var request = require('request');

var headers = {
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};


var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/:file_name',
    headers: headers,
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
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
```


## Gerar de forma programada

Gere seus relatórios de forma programada configurando três instâncias: geração, configuração e download.

### 1. Geração

Programe a geração automática do relatório usando a frequência do recurso de configuração. Atualize o atributo *`scheduled`* na configuração *`true`*:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/schedule', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule");

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

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule',
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

Como resposta, você receberá `HTTP STATUS 200 (Ok)`:

```json
{
    "id": 2541818,
    "user_id": "USER_ID",
    "begin_date": "2019-07-01T06:00:00Z",
    "end_date": "2019-08-01T05:59:59Z",
    "created_from": "schedule",
    "status": "pending",
    "report_type": "bank",
    "generation_date": "2019-08-01T06:00:00.000Z",
    "last_modified": "2019-07-24T13:45:33.479-04:00",
    "retries": 0
}
```

### 2. Cancelar

Execute o curl que precisar para iniciar e cancelar a geração programada dos seus relatórios.


[[[
```curl
curl -X DELETE \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule'
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
$response = Requests::delete('https://api.mercadopago.com/v1/account/bank_report/schedule', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule");

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

response = requests.delete('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule',
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

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
{
    "id": 2787882,
    "begin_date": "2019-08-15T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-08-16T05:59:59Z",
    "generation_date": "2019-08-16T02:00:00.000-04:00",
    "last_modified": "2019-08-15T15:41:53.681-04:00",
    "report_type": "bank",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```

### 3. Download

Baixe o arquivo com este comando: 


[[[
```curl
curl -X GET \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/:file_name'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$response = Requests::get('https://api.mercadopago.com/v1/account/bank_report/:file_name', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/:file_name");

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

response = requests.get('https://api.mercadopago.com/v1/account/bank_report/:file_name', headers=headers)
```
```node
var request = require('request');

var headers = {
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/:file_name',
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
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
```

> NOTE
>
> Esta documentação corresponde à nova versão da API
>
> Para consultar a versão anterior, por favor, acesse a [seção Geração por API antiga](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/available-money/v1/api).

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Geração a partir do Mercado Pago
>
> Gere seus relatórios de Dinheiro Disponível a partir do painel do Mercado Pago em 3 etapas simples.
>
> [Geração a partir do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/available-money/panel)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Geração por retirada
>
> Gere um relatório a cada vez que retirar dinheiro para uma conta bancária.
>
> [Geração por retirada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/available-money/withdrawal)
