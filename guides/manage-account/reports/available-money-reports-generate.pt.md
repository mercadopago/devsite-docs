# Gere seus relatórios de Dinheiro Disponível

> INDEX
>
> Nesta página
>
> - [Geração por retirada](#bookmark_geração_por_retirada)
>
> - [Geração via web](#bookmark_geração_via_web)
>
> - [Geração via API](#bookmark_geração_via_api)
>
>    + [de forma manual](#bookmark_de_forma_manual)
>
>    + [de forma programada](#bookmark_de_forma_programada)<br/>
>
> - [Ficha técnica](#bookmark_ficha_técnica)
>


## Geração por retirada

Você pode criar um relatório de Dinheiro Disponível de forma automática cada vez que fizer uma retirada de dinheiro da sua conta do Mercado Pago a uma conta bancária. Programe essa opção pelo seu painel do Mercado Pago ou via API.

Pela seção de Relatórios do Mercado Pago:

1. [Entre](https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAy2OQQ7DIAwE_-JzlNw59iPIIoagQo2MI1pF_XtN1OOux2NfUDjll9dPI3BA71ZyyAoLtIIaWarPuw1qs6pnpX8sOBEUrKQkHdw1RYn2B9nSVKmcZAyeevhYeFh1n7IusYVDtXW3bWOMtZIE3Llh4jVwXVE2w4RS7man-cCt-y4QsatXwfAEF7F0-v4AxU1qhMMAAAA/user) na sua conta do Mercado Pago e acesse os relatórios de Dinheiro Disponível.
1. Clique em “Programar relatórios” e confirme “Programar”.
1. E pronto! Não é necessário escrever código nem mesmo para uma única linha. 

Via API:

Atualize o atributo *`execute_after_withdrawal`* com o valor *`true`* e pronto! Você vai gerar um relatório por cada retirada de dinheiro que fizer.


> NOTE
> 
> Note
>
>  A geração por retirada é uma opção a mais de geração do relatório de Dinheiro Disponível. Não afeta nem modifica a geração que você configurar via web ou via API. Continue lendo para ver os outros dois tipos de geração de relatórios.


[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
    -d '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"detailed\\": true,
                \\"execute_after_withdrawal\\": true,
                \\"extended\\": true,
                \\"schedule\\":true,
                \\"frequency\\": {
                    \\"hour\\": 0,
                    \\"type\\": \\"monthly\\",
                    \\"value\\": 1
                }
            }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {"hour": 0,"type": "monthly","value": 1}

        }'

response = requests.put('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var dataString = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN',
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


Você receberá como resposta `HTTP STATUS 200`(Ok)

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "detailed": true,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "extended": true,
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
    }
}
```


## Geração via web

Gere seus relatórios de Dinheiro Disponível do seu painel do Mercado Pago. Você poderá programar somente os relatórios por retirada. Siga essas dicas para fazer isso:

1. [Inicie uma sessão](https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAy2OQQ7DIAwE_-JzlNw59iPIIoagQo2MI1pF_XtN1OOux2NfUDjll9dPI3BA71ZyyAoLtIIaWarPuw1qs6pnpX8sOBEUrKQkHdw1RYn2B9nSVKmcZAyeevhYeFh1n7IusYVDtXW3bWOMtZIE3Llh4jVwXVE2w4RS7man-cCt-y4QsatXwfAEF7F0-v4AxU1qhMMAAAA/user) no Mercado Pago e acesse os relatórios na seção de Relatórios.
1. Acesse a seção de Dinheiro Disponível e clique em “Gerar relatório”.
1. Veja as retiradas por **período de tempo** e selecione a retirada que quiser conciliar.

<span style="margin-left:40px">Pronto! Você verá seu relatório **em preparação**. </span>

Você também pode programar a geração destes relatórios por cada retirada automática.

## Geração via API

Economize tempo programando a frequência de geração do relatório de Dinheiro Disponível quantas vezes quiser, tanto de forma manual como de forma programada.

### De forma manual

Gere seus relatórios de forma manual configurando estas três instâncias:

#### 1. Geração

Poste a API especificando as datas de início e término da seguinte forma:


[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report?access_token=ENV_ACCESS_TOKEN' \
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
    'content-type' => 'application/json'
);
$data ='{
            "begin_date": "2019-05-01T00:00:00Z",
            "end_date": "2019-06-01T00:00:00Z"
    }';

$response = Requests::post("https://api.mercadopago.com/v1/account/bank_report?access_token=ENV_ACCESS_TOKEN", $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
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
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = { 'access_token': 'ENV_ACCESS_TOKEN' }

data = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }'

response = requests.post('https://api.mercadopago.com/v1/account/bank_report', headers=headers, params=params, data=data)
```
```node
var request = require('request');

var headers = { 'accept': 'application/json', 'content-type': 'application/json' };

var dataString = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report?access_token=ENV_ACCESS_TOKEN',
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

Você receberá um `HTTP STATUS 202` (Accepted) como resposta e o relatório será gerado de forma assincrônica.

#### 2. Busca

Consulte a API desta forma para ver se a geração de relatórios está pronta:

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
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/list', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/list?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = { 'accept': 'application/json' }

params = { 'access_token': 'ENV_ACCESS_TOKEN' }

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/list', headers=headers, params=params)
```
```node
var request = require('request');
var headers = { 'accept': 'application/json'};
var dataString = 'access_token=ENV_ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/list',
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

Você receberá como resposta `HTTP STATUS 200` (OK):

```json
[
    {
        "id": 12345678,
        "user_id": USER-ID,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T00:00:00Z",
        "file_name": "bank-report-USER_ID-2016-01-20-131015.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
        ...
    }
]
```

#### 3. Download

Usando o atributo `file_name`, você pode baixar o relatório pela seguinte URL:

[[[
```curl
curl -X GET 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN'
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
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.get('https://api.mercadopago.com/v1/account/bank_report/:file_name', params=params)
```
```node
var request = require('request');

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]


Você receberá como resposta `HTTP STATUS 200` (OK) :

```csv
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
```


### De forma programada

#### 1. Geração

Programe a geração automática do relatório usando a frequência no recurso de configuração. Atualize o atributo `scheduled` na configuração para `true`:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN' 
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN',
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

Você receberá como resposta `HTTP STATUS 200`(OK)

```json
{
    "id": 2541818,
    "user_id": "USER-ID",
    "begin_date": "2019-07-01T06:00:00Z",
    "end_date": "2019-08-01T06:00:00Z",
    "created_from": "schedule",
    "status": "pending",
    "report_type": "bank",
    "generation_date": "2019-08-01T06:00:00.000Z",
    "last_modified": "2019-07-24T13:45:33.479-04:00",
    "retries": 0
}
```

Pare a geração automática do relatório. Atualize o atributo *`scheduled`* na configuração para *`false`*:


[[[
```curl
curl -X DELETE \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN' \
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::delete('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("DELETE");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.delete('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN',
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


Você receberá como resposta `HTTP STATUS 200` (OK)

```json
{
    "id": 2538023,
    "begin_date": "2019-07-24T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-07-25T06:00:00Z",
    "generation_date": "2019-07-25T02:00:00.000-04:00",
    "last_modified": "2019-07-24T13:50:10.719-04:00",
    "report_type": "bank",
    "retries": 0,
    "status": "deleted",
    "user_id": "USER-ID"
}
```



#### 2. Download

Baixe o arquivo com este comando:


[[[
```curl
curl -X GET 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN' 
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array();
$response = Requests::get('https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
 URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.get('https://api.mercadopago.com/v1/account/bank_report/:file_name', params=params)
```
```node
var request = require('request');

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

Você receberá como resposta `HTTP STATUS 200` (OK):

```csv
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
```


#### 3. Configuração


| Atributo | Descrição |
| ---------- | ----------- |
| sftp_info (opcional) | Indica dados de upload do SFTP, se necessário |
| extended (opcional) | Indica se os detalhes da comissão são desejados |
| include_withdrawal_at_end | Indica se deve incluir a retirada para a qual o relatório é gerado no final do relatório |
| detailed | Indica se o relatório deve incluir colunas extras, como `financing`, `fee amount`, `mp fee amount`, etc. |
| file_name_prefix | Prefixo estático do nome do arquivo de relatório gerado |
| scheduled (read_only) | Informativo, indica se já existem relatórios agendados para este usuário |
| frequency | Se estiver usando relatórios agendados, indique a frequência (`daily`,`weekly`,`monthly`) |
| value | Aplica-se ao tipo `monthly` (dia do mês) ou `weekly` (dia da semana) |
| hour | Hora do dia em que o relatório deve ser gerado |
| type | Tipo de freqüência: `daily`, `weekly`, `monthly` |
| execute_after_withdrawal | Indica se um relatório será gerado automaticamente após a retirada de dinheiro de cada usuário |

```json
{
	"sftp_info": {
    	    "port": 22,
    	    "username": "username",
    	    "server": "sftp.urlserver.com",
    	    "remote_dir": "/",
    	    "password": "xxxxxxxx"
	},
    "extended": false,
	"file_name_prefix": "bank-report-USER-ID-",
	"detailed": true,
	"include_withdrawal_at_end": false,
	"scheduled": false,
	"execute_after_withdrawal": false,
	"frequency": {
    	    "hour": 0,
    	    "type": "weekly",
    	    "value": "monday"
	}
}
```

##### Consultar configuração

[[[
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::get('http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
 URL url = new URL("http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests
headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.get('http://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN',
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

Você receberá como resposta `HTTP STATUS 200` (OK):

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "detailed": true,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "v1": {
        "language": null,
        "generate_bank_report": false
    },
    "extended": true,
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
    }
}
```

##### Criar configuração

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
    -d '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
    }';
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"detailed\\": true,
                \\"execute_after_withdrawal\\": true,
                \\"extended\\": true,
                \\"schedule\\":true,
                \\"frequency\\": {
                    \\"hour\\": 0,
                    \\"type\\": \\"monthly\\",
                    \\"value\\": 1
                }
                }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

data = '{  
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {"hour": 0,"type": "monthly","value": 1}
        }'

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var dataString = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN',
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

Você receberá como resposta `HTTP STATUS 201` (Created):

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "detailed": true,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "v1": {
        "language": null,
        "generate_bank_report": false
    },
    "extended": true,
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
    }
}
```

##### Atualizar configuração

[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
    -d '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"detailed\\": true,
                \\"execute_after_withdrawal\\": true,
                \\"extended\\": true,
                \\"schedule\\":true,
                \\"frequency\\": {
                    \\"hour\\": 0,
                    \\"type\\": \\"monthly\\",
                    \\"value\\": 1
                }
            }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {"hour": 0,"type": "monthly","value": 1}

        }'

response = requests.put('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var dataString = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN',
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


Você receberá como resposta `HTTP STATUS 200` (OK):

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "detailed": true,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "v1": {
        "language": null,
        "generate_bank_report": false
    },
    "extended": true,
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
    }
}
```

##### Iniciar geração programada

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN',
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


Você receberá como resposta `HTTP STATUS 201` (Created):

```json
{
    "id": 2787882,
    "user_id": USER_ID,
    "begin_date": "2019-08-15T06:00:00Z",
    "end_date": "2019-08-16T06:00:00Z",
    "created_from": "schedule",
    "status": "pending",
    "report_type": "bank",
    "generation_date": "2019-08-16T06:00:00.000Z",
    "last_modified": "2019-08-15T15:40:00.899-04:00",
    "retries": 0
}
```


##### Cancelar geração programada

[[[
```curl
curl -X DELETE \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::delete('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("DELETE");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.delete('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN',
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

Você receberá como resposta `HTTP STATUS 200` (OK):

```json
{
    "id": 2787882,
    "begin_date": "2019-08-15T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-08-16T06:00:00Z",
    "generation_date": "2019-08-16T02:00:00.000-04:00",
    "last_modified": "2019-08-15T15:41:53.681-04:00",
    "report_type": "bank",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```


## Ficha técnica

| Ações e componentes | Características |
| ------------ |	--------    |
| Programação | <br/> -  Diaria.<br/><br/>  -  Semanal.<br/><br/> -  Mensual. <br/> <br/> |
| Geração | <br/> -  Manual.<br/><br/>  -  Automática por retirada de saldo disponível, total ou parcial <br/><br/> As três instâncias de geração convivem. Ou seja, mesmo que programe a geração dos seus relatórios automaticamente, cada vez que você retirar dinheiro, um relatório adicional será gerado. <br/> <br/>  |
| Detalhe de tabelas | <br/> O detalhe das tabelas inclui informações geradas pelo menos no dia 1. Exceto nos relatórios gerados por retirada de dinheiro. <br/> <br/>  |
| Formato do nome do arquivo | <br/>Quando o relatório é programado ou manual:<br/> "prefijo-configurable-<span style='color:#999999;'>fecha-de-creación.csv</span>" <br/> Exemplo:  minhaloja-28-05-2019.csv <br/><br/> Quando o relatório é gerado por uma retirada de dinheiro: <br/> "prefijo-configurable-<span style='color:#999999;'>id-de-retiro-fecha-de-creación.csv</span>"<br/> Exemplo: minhaloja-ID123456789-28-05-2019.csv <br/><br/>|
| Formatos de download | <br/> .csv, .xlsx<br/><br/>Dica: baixe o relatório em .csv para importar os dados e usá-los em outros aplicativos. Baixe-o em .xlsx para ler as informações nas tabelas da planilha. <br/> <br/>|
| Configuração disponível via API | <br/>-  Colunas a gerar por relatório<br/> -  Prefixo do arquivo para identificá-lo facilmente<br/> -  Envio por SFTP<br/> -  Separador de colunas (ponto ou ponto e vírgula)<br/> -  Separador decimal (vírgula ou ponto)<br/> -  Notificação por e-mail<br/> -  Retirada no final do relatório (opcional)<br/><br/> |
| Ordem das colunas |<br/> Fixo <br/> <br/> |
| Arquivo | <br/> Os relatórios gerados ficam salvos na sua conta do Mercado Pago <br/> <br/> |
| Período máximo | <br/> Relatórios com dados de até 60 dias <br/> <br/> |
| Moeda | <br/> Local (com base no país onde está cadastrada a conta do Mercado Pago) <br/> <br/> |
| Fuso horário das colunas | <br/> GMT-4 <br/> <br/> |
| Seleção de datas via API |<br/>  Formato de fuso horário: UTC / GMT-0 <br/> <br/> |
| Seleção de datas via web | <br/> Deve ser baseada no fuso horário da conta do usuário. <br/>Por exemplo, a conta de usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. <br/> <br/> |
