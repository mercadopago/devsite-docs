# Crear reporte a través de la API

Crea el Reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ manualmente tantas veces como desees o prográmalo según la frecuencia deseada a través de nuestra API.

## Configurar el Reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------

### Atributos configurables

Consulta los campos que puedes configurar para ajustar tus preferencias antes de empezar:

> WARNING
>
> Importante
> 
> Configurar el atributo `frequency` no implica que el reporte se genere automáticamente. La configuración se aplicará solo cuando se active la programación automática. Para obtener más información, consulta la sección [Programar reporte automáticamente](#bookmark_programar_reporte_automaticamente)

| Campo configurable        | Tipo       | Ejemplo                                                                                                                | Descripción                                                                                                                                                                                                                                                                                                       |
|---------------------------|------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `columns`                   | JSON Array | ``` [{"key": "DATE"}, {"key": "SOURCE_ID"}] ```                                                                       | Campo con los detalles de las columnas que se incluirán en tu reporte. Encuentra todos los valores posibles en la sección [Glossário](/developers/es/docs/checkout-pro/additional-content/reports/released-money/report-use).                                                                                                                                                                                   |
| `file_name_prefix`          | String     | "conciliation-settlement-report"                                                                                      | Prefijo que compone el nombre del reporte generado y listo para descargar.                                                                                                                                                                                                                                           |
| `frequency`                 | JSON       | ``` {"hour": 0, "type": "monthly", "value": 1} ```                                                                    | Indica la frecuencia diaria, semanal o mensual de los reportes programados.<br> - `frequency`: aplica type _monthly_ al día del mes o _weekly_ al día de la semana.<br> - `hour`: hora del día en que se debe generar el reporte.<br> - `type`: indica el tipo de frecuencia: _daily_ (diaria), _weekly_ (semanal) y _monthly_ (mensual).                                            |
| `sftp_info` (opcional)      | JSON       | ``` {"server": "sftp.myserver.com", "password": "mypassword", "remote_dir": "/myfolder", "port": 22, "username": "myusername"} ```                                                  | Proporciona los datos de conexión necesarios para acceder al servidor.<br> - `server`: URL o dirección IP (pública) del servidor.<br> - `password`: contraseña del usuario con el que estableceremos la conexión.<br> - `remote_dir`: carpeta donde depositaremos tus reportes.<br> - `port`: puerto utilizado para establecer la conexión.<br> - `username`: usuario con el que nos autenticaremos en tu servidor.<br>               |
| `separator` (opcional)      | String     | ";"                                                                                                                    | Separador alternativo para archivos _csv_ cuando se desea utilizar un carácter diferente de la coma (',').                                                                                                                                                                                                   |
| `display_timezone` (opcional)| String     | "GMT-04"                                                                                                               | Este campo determina la fecha y la hora mostradas en los reportes. Si no configuras una zona horaria para este campo, el sistema considerará la zona horaria GMT-04 como predeterminada. Si eliges una zona horaria que utiliza horario de verano, deberás ajustar manualmente cuando cambie la hora.                           |
| `report_translation` (opcional)| String   | "es"                                                                                                                  | Permite cambiar el idioma predeterminado de los encabezados de las columnas. Si está activado, asegúrate de verificar si las integraciones con archivos Excel (_xlsx_) están funcionando correctamente para permitir la conciliación automática. Si la integración no funciona correctamente, actualízala utilizando los nuevos encabezados como referencia. Idiomas admitidos: en (inglés), es (español neutro), pt (portugués). |
| `notification_email_list` (opcional)| Array| ``` ["example@email.com", "john@example.com"] ```                                                                    | Permite agregar un grupo de destinatarios de correo electrónico para que reciban una notificación cuando un reporte esté listo y disponible para descargar. Asegúrate de incluir el correo electrónico asociado a tu cuenta de Mercado Pago para que también recibas las notificaciones.                                              |
| `refund_detailed` (opcional) | Boolean    | true                                                                                                                   | Muestra el código de referencia (`external_reference`) del reembolso en lugar del código de referencia (`external_reference`) del pago.                                                                                                                                                                               |
| `include_withdrawal` (opcional)| Boolean  | true                                                                                                                   | Incluye las retiradas de dinero en el reporte.                                                                                                                                                                                                                                                                   |
| `coupon_detailed` (opcional)| Boolean    | true                                                                                                                   | Incluye una columna para mostrar los detalles de los cupones de descuento.                                                                                                                                                                                                                                               |
| `scheduled` (read_only)      | Boolean    | true                                                                                                                   | Campo informativo que indica si ya existen reportes programados en la cuenta del usuario.<br> - `True`: La generación automática está activada. - `False`: La generación automática está desactivada.                                                                                                                                                                                     |
| `check_available_balance` (opcional)| Boolean| true                                                                                                                  | Saldo antes y después de hacer una retirada, que explica el balance de la cuenta. (Esta configuración es meramente informativa. No debe considerarse como prueba de saldo y/o saldo de cuenta).                                                                                                                |
| `compensate_detail` (opcional)| Boolean  | true                                                                                                                  | Bloqueo y desbloqueo de dinero que se compensan entre sí y que no afectan el saldo final. Ayuda a entender cómo se realiza el balance final del reporte, en una lectura cronológica (recomendado si tienes un volumen alto de transacciones).                                                           |

Puedes configurar tus reportes según sea necesario. A continuación, destacamos las llamadas de la API disponibles para que puedas gestionar la configuración de tu reporte y, posteriormente, en función de esas configuraciones, generar los reportes.

> Ten a mano el [Glossário del Reporte de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/glossary) para consultarlo siempre que sea necesario o para verificar algún término técnico.


## Crear una nueva configuración

Personaliza tus reportes asignando diferentes propiedades de creación ejecutando el siguiente _curl_:

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

En ausencia de errores, se emitirá un código de estado `HTTP 201 (Created)`. El API responderá con una estructura JSON cuyas propiedades representarán la configuración que has creado. 

#### Respuesta

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

### Consultar configuraciones

Consulta la configuración actual de tus reportes ejecutando el siguiente _curl_:

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. El API responderá con una estructura JSON cuyas propiedades representarán las características de tus reportes. 

#### Respuesta

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. El API responderá con una estructura JSON cuyas propiedades representarán la configuración que has actualizado. 

#### Respuesta

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. La API responderá con una estructura JSON Array en la cual encontrarás el listado de todos los reportes que has generado.

#### Respuesta

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

### Descargar reporte

Utilizando el atributo `file_name`, puedes descargar cualquiera de tus reportes desde la siguiente URL:

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

En ausencia de errores, se emitirá un código de estado `HTTP 200 (Ok)`. En la respuesta del API tendrás a disposición el archivo del reporte que solicitaste descargar. 

#### Respuesta

```csv
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
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
    "report_type": "release",
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
    "report_type": "release",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```