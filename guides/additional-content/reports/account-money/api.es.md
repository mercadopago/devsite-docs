# Crear reporte a través de la API

Puedes generar tu reporte manualmente tantas veces como desees o prográmalo según la frecuencia deseada a través de nuestra API.

## Configurar tus reportes

### Atributos configurables

Consulta los campos que puedes configurar para ajustar tus preferencias antes de empezar:

> WARNING
>
> Importante
>
> Configurar el atributo `frequency` no implica que el reporte se genere automáticamente. La configuración aplicará solo cuando se active la programación automática. Para mayor detalle puedes dirigirte a la sección [Programa tus reportes](#bookmark_programa_tus_reportes_automáticos).

| Campos configurables | Descripción |
| --- | --- |
| *`coupon_detailed` (opcional)* | <br/>Incluye una columna para mostrar el detalle de los cupones de descuento.<br/><br/> |
| `columns` | <br/>Campo con el detalle de columnas a incluir en tu reporte. Encuentra todos los posibles valores en la sección de  [Glosario](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/account-money/glossary).<br/><br/>|
| `file_name_prefix` | <br/>Prefijo que compone el nombre del reporte una vez generado y listo para descargar.<br/><br/> |
| `display_timezone` (opcional) | <br/>Este campo determina la fecha y la hora que se visualiza en los reportes. Si no configuras este campo con una zona horaria, el sistema tomará por defecto el valor GMT-04. Si eliges una zona horaria que utiliza horario de verano, es necesario que hagas el ajuste manual cuando cambie la hora.<br/><br/> |
| `include_withdraw` | <br/>Este parámetro nos permite ignorar (false) o incluir (true) los retiros de dinero en el reporte.<br/><br/> |
| `report_translation` (opcional) | <br/>Permite cambiar el idioma predeterminado de los encabezados de las columnas. En caso de habilitarlo, se recomienda verificar que funcionen correctamente las integraciones con archivos de Excel (.xlsx) que permiten conciliar de forma automática.<br/><br/> Si la integración no funciona bien, asegúrate de actualizarla tomando como referencia los nuevos encabezados.<br/><br/> |
| `frequency` | <br/>Indica la frecuencia diaria, semanal o mensual de los reportes programados.<br/><br/> - `frequency` aplica type *monthly* al día del mes o *weekly* el día de la semana<br/> - `hour` hora del día en la que generar el reporte <br/> - `type` indica el tipo de frecuencia *daily* (diaria), *weekly* (semanal) y *monthly* (mensual).<br/><br/> |
| *`refund_detailed` (opcional)* | <br/>Muestra el código de referencia (`external_reference`) del reembolso en vez del código de referencia (`external_reference`) del pago.<br/><br/> |
| `scheduled` (read_only) | <br/>Campo informativo que indica si ya existen reportes programados en la cuenta de usuario.<br/> `True` la generación automática se encuentra activada. <br/> `False` la generación automática se encuentra Desactivada.<br/><br/> |
| *`separator` (opcional)* | <br/>Separador que puedes usar en el archivo .csv cuando no quieras que el separador sea una coma. <br/><br/> |
| `notification_email_list` (opcional) | <br/>Permite agregar un grupo de destinatarios de correo electrónico para que reciban una notificación cuando un reporte está listo y disponible para descargar. Asegúrate de incluir el correo asociado a tu cuenta de Mercado Pago para que también recibas las notificaciones.<br/><br/> |
| *`sftp_info` (opcional)* | <br/>Indica los datos de subida a SFTP cuando lo necesites.<br/><br/> |
| *`shipping_detail` (opcional)* | <br/> Incluye el detalle de los envíos <br/> <br/>|
| *`show_chargeback_cancel` (opcional)* | <br/> Incluye el detalle de las cancelaciones de los contracargos <br/> <br/>|
| *`show_fee_prevision` (opcional)* | <br/> Incluye el detalle de las comisiones <br/> <br/>|

Puedes configurar tus reportes según sea necesario. A continuación, destacamos las llamadas de la API disponibles para que puedas gestionar la configuración de tu reporte y, posteriormente, en función de esas configuraciones, generar los reportes.

### Crear una nueva configuración

Personaliza tus reportes asignando diferentes propiedades de creación ejecutando el siguiente _curl_:

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
            "include_withdraw": true,
            "coupon_detailed": true,
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
            "include_withdraw": true,
            "coupon_detailed": true,
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

En ausencia de errores, se emitirá un código de estado `HTTP 201 (Created)`. El API responderá con una estructura JSON cuyas propiedades representarán la configuración que has creado. 

#### Respuesta

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

### Consultar configuraciones

Consulta la configuración actual de tus reportes ejecutando el siguiente _curl_:

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. El API responderá con una estructura JSON cuyas propiedades representarán las características de tus reportes. 

#### Respuesta

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

### Actualizar configuraciones

Actualiza las configuraciones predeterminadas de tus reportes cuando sea necesario ejecutando el _curl_ a continuación.

> NOTE
>
> Nota
>
> Si, al actualizar la configuración, deseas cambiar el atributo `frequency` y ya has activado la creación automática de tus reporte, sigue los siguientes pasos: <br/><br/> 1. Cancela la creación programada de tus reportes siguiendo los pasos descritos en la sección **Desactivar creación automática** en [Programar reporte automáticamente.](#bookmark_programar_reporte_automaticamente) <br/> 2. Actualiza la configuración. <br/> 3. Vuelve a habilitar la creación automática de tus reportes siguiendo los pasos de la sección **Activar creación automática** en [Programar reporte automáticamente.](#bookmark_programar_reporte_automaticamente)

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. El API responderá con una estructura JSON cuyas propiedades representarán la configuración que has actualizado. 

#### Respuesta

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
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/account-money/glossary) de Todas las transacciones para revisarlo cuando necesites o quieras consultar algún término técnico.

## Agendar reporte manualmente

Tienes a tu disposición varios recursos que te permitirán interactuar con tus reportes manualmente.

### Crear reporte

Realiza una solicitud POST a la API para generar manualmente un nuevo reporte dentro de un intervalo de fechas específico:

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

En ausencia de errores, se emitirá un código de estado `HTTP 202 (Accepted)`. Después de esto, su reporte se generará de forma asíncrona. Recibirá como respuesta una estructura JSON con información relevante a su solicitud de creación.

----[mlm, mla, mco, mpe, mlu, mlc]----
Una respuesta `HTTP STATUS 203 (Non-Authoritative Information)` indica que la solicitud se realizó según lo esperado; sin embargo, no fue posible crear su reporte y será necesario solicitarlo nuevamente con las fechas indicadas en el sistema.

------------
### Consultar reporte

Consulta la API según se muestra a continuación para explorar la lista de reportes que has generado:

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
var headers = { 'accept': 'application/json'};
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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. La API responderá con una estructura JSON Array en la cual encontrarás el listado de todos los reportes que has generado.

#### Respuesta

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

### Descargar reporte

Utilizando el atributo `file_name`, puedes descargar cualquiera de tus reportes desde la siguiente URL:

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. En la respuesta del API tendrás a disposición el archivo del reporte que solicitaste descargar. 

#### Respuesta

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

## Programar reporte automaticamente

Programa la generación de tu reporte configurando dos instancias: activación y desactivación.

### Activar generación automática

Programa la generación automática del reporte utilizando la frecuencia asignada durante la configuración de tus reportes. Al consumir este servicio, la propiedad `scheduled` de tu configuración se actualizará automáticamente a `true`:

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. La API responderá con una estructura JSON en la cual encontrarás información asociada al reporte que has programado. 

#### Respuesta

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

### Desactivar generación automática

Puedes desactivar la generación automática de tus reportes en cualquier momento, cuando lo necesites. Al consumir este servicio, la propiedad `scheduled` de tu configuración se actualizará automáticamente a `false`.

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. El API responderá con una estructura JSON en la cual encontrarás información asociada al reporte que has desactivado. 

#### Respuesta

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