
# Generación por retiro


Puedes crear un reporte de Dinero retirado de forma automática cada vez que hagas un retiro de dinero de tu cuenta de Mercado Pago a una cuenta bancaria. Programa esta opción desde tu panel de Mercado Pago o vía API.

----[mlm, mlb, mlc, mco, mla]----
> WARNING
>
> Importante
>
> El reporte Dinero retirado será deshabilitado en los próximos meses. Para seguir llevando el control de todos los retiros y movimientos de tu dinero disponible usa el [reporte de------------ ----[mla]----Liquidaciones------------ ----[mlm, mlb, mlc, mco]----Liberaciones------------ ----[mlm, mlb, mlc, mco, mla]----](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/released-money/introduction)
------------
----[mpe, mlu]----
> WARNING
>
> Importante
>
> A partir del 15 de mayo no podrás crear nuevos reportes. Tendrás a disposición tu historial para que puedas descargar los archivos que necesites. Para seguir llevando el control de todos los retiros y movimientos de tu dinero disponible puedes usar el [reporte de liberaciones.](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/23879?utm_source=faq_mp&utm_medium=faq&utm_campaign=bank_disable)
------------


## Generar desde el panel de Mercado Pago

Desde la sección Reportes de Mercado Pago, programa la generación de reportes por retiro siguiendo estos pasos:

1. Desde tu cuenta de Mercado Pago, ve a [tus Reportes](https://www.mercadopago.com.ar/balance/reports) y de ahí a *Reportes de Dinero retirado*.
1. Haz click en *Programar reportes* y confirma *Programar*.
1. ¡Y listo! Cada vez que retires dinero, tendrás tu reporte disponible.

Genera tus reportes cada vez que quieras consultar un retiro de dinero

1. Desde tu cuenta de Mercado Pago, ve a [tus Reportes](https://www.mercadopago.com.ar/balance/reports).
1. Entra en la sección [Dinero retirado](https://www.mercadopago.com.ar/balance/reports?page=1#!/bank-report) y haz click en *Crear reporte*.
1. Ubica tus retiros por período de tiempo y selecciona el retiro quieras consultar.

<span style="margin-left:40px">¡Y listo! Vas a ver tu reporte _en preparación_.</span>

> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/available-money/glossary) de Dinero retirado para revisarlo cuando lo necesites o quieras consultar algún término técnico.


## Generar por API

Actualiza el atributo `execute_after_withdrawal` con el valor `true`.

¡Y listo! Ahora tendrás un reporte por cada retiro de dinero que hagas.


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
        "scheduled": true,
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
        "scheduled": true,
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
                \\"schedule\\": true,
                \\"display_timezone\\": \\"GMT-04\\",
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
        "scheduled": true,
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
            "scheduled": true,
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

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "display_timezone": "GMT-04",
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
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

> WARNING
>
> Importante
>
> La generación por retiro es una de las tres formas que tenemos de generar este reporte. No modifica la generación que configures desde tu panel de Mercado Pago o vía API. Explora el resto de la documentación para conocer de qué otras formas puedes generar tus reportes: desde el panel de Mercado Pago y por API. 

<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Generación desde Mercado Pago
>
> Puedes generar tus reportes de Dinero retirado desde el panel de Mercado Pago en tres simples pasos.
>
> [Generación desde Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/available-money/panel)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Generación por API
>
> Crea reportes de forma programada y manual por medio de una integración con Mercado Pago.
>
> [Generación por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/available-money/api)
