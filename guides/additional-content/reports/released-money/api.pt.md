# Gerar relatório via API

Gere o relatório de ----[mla]----Liquidações------------ ----[mlm, mlb, mlc, mco, mlu, mpe]----Liberações------------ manualmente quantas vezes quiser ou programe-o de acordo com a frequência desejada por meio de nossa API.

## Configurar o relatório de ----[mla]----Liquidações------------ ----[mlm, mlb, mlc, mco, mlu, mpe]----Liberações------------

### Atributos configuráveis

Confira os campos que você pode configurar para ajustar as suas preferências antes de começar:

> WARNING
>
> Importante
> 
> Configurar o atributo `frequency` não significa que o relatório será gerado automaticamente. A configuração será aplicada somente quando o agendamento automático for ativado. Para mais informações, confira a seção [Agendar relatório automaticamente.](#bookmark_agendar_relatório_automaticamente)

| Campo configurável        | Tipo       | Exemplo                                                                                                                | Descrição                                                                                                                                                                                                                                                                                                       |
|---------------------------|------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `columns`                   | JSON Array | ``` [{"key": "DATE"}, {"key": "SOURCE_ID"}] ```                                                                       | Campo com os detalhes das colunas a serem incluídas no seu relatório. Encontre todos os valores possíveis na seção [Glossário](/developers/pt/docs/checkout-pro/additional-content/reports/released-money/report-use).                                                                                                                                                                                   |
| `file_name_prefix`          | String     | "conciliation-settlement-report"                                                                                      | Prefixo que compõe o nome do relatório gerado e pronto para download.                                                                                                                                                                                                                                           |
| `frequency`                 | JSON       | ``` {"hour": 0, "type": "monthly", "value": 1} ```                                                                    | Indica a frequência diária, semanal ou mensal dos relatórios programados.<br> - `frequency`: aplica type _monthly_ ao dia do mês ou _weekly_ ao dia da semana.<br> - `hour`: hora do dia que o relatório deve ser gerado.<br> - `type`: indica o tipo de frequência: _daily_ (diária), _weekly_ (semanal) y _monthly_ (mensal).                                            |
| `sftp_info` (opcional)      | JSON       | ``` {"server": "sftp.myserver.com", "password": "mypassword", "remote_dir": "/myfolder", "port": 22, "username": "myusername"} ```                                                  | Fornece os dados de conexão necessários para acessar o servidor.<br> - `server`: URL ou endereço IP (pública) do servidor.<br> - `password`: senha do usuário com o qual estabeleceremos a conexão.<br> - `remote_dir`: pasta onde depositaremos seus relatórios.<br> - `port`: porta usada para estabelecer a conexão.<br> - `username`: usuário com o qual nos autenticaremos no seu servidor.<br>               |
| `separator` (opcional)      | String     | ";"                                                                                                                    | Separador alternativo para arquivos _csv_ quando se deseja utilizar um caractere diferente da vírgula (',').                                                                                                                                                                                                   |
| `display_timezone` (opcional)| String     | "GMT-04"                                                                                                               | Este campo determina a data e o horário mostrados nos relatórios. Se você não configurar um fuso horário para esse campo, o sistema considerará o fuso GMT-04 como padrão. Caso escolha um fuso que adote horário de verão, você precisará fazer o ajuste manual quando o horário mudar.                           |
| `report_translation` (opcional)| String   | "es"                                                                                                                  | Permite alterar o idioma padrão dos cabeçalhos das colunas. Caso esteja ativado, recomenda-se verificar se as integrações com arquivos do Excel (_xlsx_) estão funcionando corretamente para permitir a conciliação automática. Caso a integração não esteja funcionando corretamente, por favor, atualize-a tendo os novos cabeçalhos como referência. Idiomas suportados: en (Inglês), es (Espanhol neutro), pt (Português).  |
| `notification_email_list` (opcional)| Array| ``` ["example@email.com", "john@example.com"] ```                                                                    | Permite adicionar um grupo de destinatários de e-mail para que recebam uma notificação quando um relatório estiver pronto e disponível para download. Certifique-se de incluir o e-mail associado à sua conta Mercado Pago para que você também receba as notificações.                                              |
| `refund_detailed` (opcional) | Boolean    | true                                                                                                                   | Mostra o código de referência (`external_reference`) do reembolso em vez do código de referência (`external_reference`) do pagamento.                                                                                                                                                                               |
| `include_withdrawal` (opcional)| Boolean  | true                                                                                                                   | Inclui as retiradas de dinheiro no relatório.                                                                                                                                                                                                                                                                   |
| `coupon_detailed` (opcional)| Boolean    | true                                                                                                                   | Inclui uma coluna para mostrar os detalhes dos cupons de desconto.                                                                                                                                                                                                                                               |
| `scheduled` (read_only)      | Boolean    | true                                                                                                                   | Campo informativo que indica se já existem relatórios programados na conta do usuário.<br> - `True`: A geração automática está ativada. - `False`: A geração automática está desativada.                                                                                                                                                                                     |
| `check_available_balance` (opcional)| Boolean| true                                                                                                                  | Saldo antes e depois de fazer um saque, que explica o balanço da conta. (Esta configuração é meramente informativa. Ela não deve ser considerada para comprovação de balanço e/ou saldo da conta).                                                                                                                |
| `compensate_detail` (opcional)| Boolean  | true                                                                                                                  | Bloqueio e desbloqueio de dinheiro que se compensam entre si e que não afetam o saldo final. Ajuda a entender como é feito o balanço final do relatório, em um formato cronológico (configuração recomendada caso você tenha um grande volume de transações).                                                           |

Você pode configurar seus relatórios conforme necessário. Abaixo, destacamos as chamadas de API disponíveis para que você possa gerenciar a configuração do seu relatório e, posteriormente, com base nessas configurações, gerar os relatórios.

> Tenha o [Glossário do relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/glossary) à mão para consulta sempre que necessário ou para conferir algum termo técnico.

### Criar uma nova configuração

Personalize seus relatórios atribuindo diferentes propriedades de criação executando o seguinte _curl_: 

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/release_report/config' \
    -d '{
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
$response = Requests::post('https://api.mercadopago.com/v1/account/release_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"release-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": true,
                \\"execute_after_withdrawal\\": false,
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
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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

response = requests.post('https://api.mercadopago.com/v1/account/release_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
    url: 'https://api.mercadopago.com/v1/account/release_report/config',
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
    "file_name_prefix": "release-report-USER_ID",
    "include_withdrawal_at_end": true,
    "scheduled": false,
    "execute_after_withdrawal": false,
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

Consulte a configuração atual dos seus relatórios executando o seguinte _curl_:

[[[
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/release_report/config' \
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
$response = Requests::get('https://api.mercadopago.com/v1/account/release_report/config', $headers);
```
```java
 URL url = new URL("https://api.mercadopago.com/v1/account/release_report/config");

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

response = requests.get('https://api.mercadopago.com/v1/account/release_report/config', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/config',
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
    "file_name_prefix": "release-report-USER_ID",
    "include_withdrawal_at_end": true,
    "scheduled": false,
    "execute_after_withdrawal": false,
    "separator": ";",
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
    'https://api.mercadopago.com/v1/account/release_report/config' \
    -d '{
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
$response = Requests::put('https://api.mercadopago.com/v1/account/release_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"release-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": true,
                \\"execute_after_withdrawal\\": false,
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
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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

response = requests.put('https://api.mercadopago.com/v1/account/release_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": falsre,
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
    url: 'https://api.mercadopago.com/v1/account/release_report/config',
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
    "file_name_prefix": "release-report-USER_ID",
    "include_withdrawal_at_end": true,
    "scheduled": false,
    "execute_after_withdrawal": false,
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
    'https://api.mercadopago.com/v1/account/release_report' \
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

$response = Requests::post("https://api.mercadopago.com/v1/account/release_report", $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report");

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

response = requests.post('https://api.mercadopago.com/v1/account/release_report', headers=headers, data=data)
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
    url: 'https://api.mercadopago.com/v1/account/release_report',
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
    'https://api.mercadopago.com/v1/account/release_report/list'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/release_report/list', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/list");

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

response = requests.post('https://api.mercadopago.com/v1/account/release_report/list', headers=headers)
```
```node
var request = require('request');
var headers = { 'accept': 'application/json'};
var dataString = 'access_token=ENV_ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/list',
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

Na ausência de erros, será emitido um código de status `HTTP 200 (Ok)`. A API responderá com um JSON Array no qual você encontrará a lista de todos os relatórios que gerou.

#### Resposta

```json
[
    {
        "id": 12345678,
        "user_id": "USER_ID",
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T23:59:59Z",
        "file_name": "release-report-USER_ID-2016-01-20-131015.csv",
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
    'https://api.mercadopago.com/v1/account/release_report/:file_name'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/release_report/:file_name', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/:file_name");

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

response = requests.get('https://api.mercadopago.com/v1/account/release_report/:file_name', headers=headers)
```
```node
var request = require('request');

var headers = {
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};


var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/:file_name',
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

Na ausência de erros, será emitido um código de status `HTTP 200 (Ok)`. Na resposta da API, você terá à disposição o arquivo do relatório que solicitou baixar.

#### Resposta

```csv
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
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
    'https://api.mercadopago.com/v1/account/release_report/schedule'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/release_report/schedule', $headers);
```

```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/schedule");

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

response = requests.post('https://api.mercadopago.com/v1/account/release_report/schedule', headers=headers)
```

```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/schedule',
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
    "report_type": "release",
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
    'https://api.mercadopago.com/v1/account/release_report/schedule'
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
$response = Requests::delete('https://api.mercadopago.com/v1/account/release_report/schedule', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/schedule");

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

response = requests.delete('https://api.mercadopago.com/v1/account/release_report/schedule', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/schedule',
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
    "report_type": "release",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```