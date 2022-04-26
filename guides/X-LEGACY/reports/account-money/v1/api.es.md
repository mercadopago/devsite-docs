
# Generación por API

Puedes generar tu reporte por API, tanto de forma manual como de forma programada. Gana tiempo y **automatiza la frecuencia de generación del reporte** de Todas las transacciones las veces que quieras.

## Configurar tus reportes

Ejecuta la solicitud que necesites para consultar, crear y actualizar tus reportes.

### Consultar configuración

Consulta la configuración de tus reportes por API de esta forma:

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

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "detailed": true,
    "scheduled": false,
    "coupon_detailed": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "extended": false,
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    }
}
```

### Crear configuración

Crea tus preferencias de generación por API para exportar columnas, nombrar a tus archivos y configurar otros ajustes:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/config' \
    -d '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
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
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$data = '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "detailed": true,
            "coupon_detailed": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "extended": false,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
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
                    \\"detailed\\": true,
                    \\"coupon_detailed\\": true,
                    \\"shipping_detail\\": true,
                    \\"refund_detailed\\": true,
                    \\"extended\\": false,
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
            "detailed": true,
            "coupon_detailed": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "extended": false,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
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
            "detailed": true,
            "coupon_detailed": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "extended": false,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
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

Recibirás como respuesta un `HTTP STATUS 201 (Created)`

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "detailed": true,
    "scheduled": false,
    "coupon_detailed": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "extended": false,
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    }
}
```

### Actualizar configuración

Cuando necesites actualizar tu configuración, puedes ajustar los siguientes atributos:


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
        "detailed": true,
        "coupon_detailed": true,
        "shipping_detail": true,
        "refund_detailed": true,
        "extended": false,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
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
        "detailed": true,
        "coupon_detailed": true,
        "shipping_detail": true,
        "refund_detailed": true,
        "extended": false,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
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
                    \\"detailed\\": true,
                    \\"coupon_detailed\\": true,
                    \\"shipping_detail\\": true,
                    \\"refund_detailed\\": true,
                    \\"extended\\": false,
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
            "detailed": true,
            "coupon_detailed": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "extended": false,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
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
        "detailed": true,
        "coupon_detailed": true,
        "shipping_detail": true,
        "refund_detailed": true,
        "extended": false,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
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


Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "detailed": true,
    "scheduled": false,
    "coupon_detailed": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "extended": false,
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    }
}
```


## Atributos configurables

Conoce los campos que puedes configurar para ajustar tus preferencias antes de empezar:


| Campos configurables | Descripción |
| --- | --- |
| *`coupon_detailed` (opcional)* | <br/>Incluye una columna para mostrar el detalle de los cupones de descuento.<br/><br/> |
| `detailed` | <br/>Incluye columnas con información más detallada sobre tus operaciones:<br/> - Comisión de Mercado Libre (`mkp_fee_amount`)<br/> - Impuesto financiero (`financing_fee_amount`)<br/> - Impuesto de envío (`shipping_fee_amount`)<br/> ----[mla]---- - Impuestos  cobrados por retenciones de IIBB (`taxes_amount`) ------------ ----[mlm, mlu, mco, mlc, mpe, mlb]---- - Impuestos cobrados (`taxes_amount`) ------------ <br/> - Cuotas (`installments`)<br/> <br/><br/>|
| *`extended` (opcional)* | <br/>Incluye el detalle de las comisiones en el reporte:<br/> - Detalle del impuesto (`tax_detail`)<br/> - Detalle del impuesto (`tax_amount_telco`)<br/> - ID del punto de venta (`pos_id`)<br/> - ID de la sucursal (`store_id`)<br/> - Nombre de la sucursal (`store_name`)<br/> - ID externo del punto de venta (`external_pos_id`)<br/> - Nombre del punto de venta (`pos_name`)<br/> - ID externo de la sucursal (`external_store_id`)<br/> <br/><br/> |
| `file_name_prefix` | <br/>Prefijo que compone el nombre del reporte una vez generado y listo para descargar.<br/><br/> |
| `frequency` | <br/>Indica la frecuencia diaria, semanal o mensual de los reportes programados.<br/><br/> - `frequency` aplica type *monthly* al día del mes o *weekly* el día de la semana<br/> - `hour` hora del día en la que generar el reporte <br/> - `type` indica el tipo de frecuencia *daily* (diaria), *weekly* (semanal) y *monthly* (mensual).<br/><br/> |
| *`refund_detailed` (opcional)* | <br/>Muestra el código de referencia (`external_reference`) del reembolso en vez del código de referencia (`external_reference`) del pago.<br/><br/> |
| `scheduled` (read_only) | <br/>Campo informativo que indica si ya existen reportes programados en la cuenta de usuario.<br/><br/> |
| *`separator` (opcional)* | <br/>Separador que puedes usar en el archivo .csv cuando no quieras que el separador sea una coma. <br/><br/> |
| *`sftp_info` (opcional)* | <br/>Indica los datos de subida a SFTP cuando lo necesites.<br/><br/> |
| *`shipping_detail` (opcional)* | <br/> Incluye el detalle de los envíos <br/> <br/>|
| *`show_chargeback_cancel` (opcional)* | <br/> Incluye el detalle de las cancelaciones de los contracargos <br/> <br/>|
| *`show_fee_prevision` (opcional)* | <br/> Incluye el detalle de las comisiones <br/> <br/>|

> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/glossary) de Todas las transacciones para revisarlo cuando necesites o quieras consultar algún término técnico.


## Generar de forma manual

Genera tus reportes de forma manual configurando tres instancias: generación, búsqueda y descarga.

### 1. Generación

Haz el POST a la API especificando las fechas de inicio y fin de la siguiente manera:

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

Recibirás como respuesta un `HTTP STATUS 202 (Accepted)`, y el reporte se generará de manera asincrónica.

### 2. Búsqueda

Consulta la API para ver si la generación de reportes quedó lista:

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
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/list', $headers, $data);
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

response = requests.post('https://api.mercadopago.com/v1/account/settlement_report/list', headers=headers)
```
```node
var request = require('request');
var headers = { 'accept': 'application/json'};
var dataString = 'access_token=ENV_ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/list',
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

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

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

### 3. Descarga

Utilizando el atributo `file_name`, puedes descargar el reporte desde la siguiente URL:

[[[
```curl
curl -X GET
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
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/:file_name',
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


Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

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

## Generar de forma programada

Genera tus reportes de forma programada configurando tres instancias: generación, configuración y descarga.

### 1. Generación

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo *`scheduled`* en la configuración a *`true`*:

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

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

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


### 2. Configuración

Ejecuta el curl que necesites para cancelar la generación programada de tus reportes.


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

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

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

### 3. Descarga

Descarga el archivo con este comando:


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
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$response = Requests::get('https://api.mercadopago.com/v1/account/settlement_report/:file_name', $headers);
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
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/:file_name',
    method: 'GET',
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

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

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

> WARNING
>
> Esta documentación corresponde a una versión anterior de la API
>
> Para ver la versión más reciente, visita la [sección de Generación por API nueva](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/api).

<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Generación desde Mercado Pago
>
> Descarga tus reportes de forma manual o programada desde tu cuenta de Mercado Pago.         
>
> [Generación desde Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/panel)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Glosario
>
> Conoce qué significa cada término y el detalle de las columnas que componen al reporte.
>
> [Glosario](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/glossary)
