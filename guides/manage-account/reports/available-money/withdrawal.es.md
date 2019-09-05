
# Generación por retiro


> INDEX
>
> En esta página
>
> [Generar desde el panel de Mercado Pago](#bookmark_generar_desde_el_panel_de_mercado_pago)
>
> [Generar por API](#bookmark_generar_por_api)


## Generar desde el panel de Mercado Pago

Puedes crear un reporte de Dinero Disponible de forma automática cada vez que hagas un retiro de dinero de tu cuenta de Mercado Pago a una cuenta bancaria. Programa esta opción desde tu panel de Mercado Pago o vía API. 

Desde la sección Reportes de Mercado Pago, programá la generación de reportes por retiro siguiendo estos pasos:

1. Desde tu cuenta de Mercado Pago, ve a [tus Informes](https://www.mercadopago.com.ar/balance/reports) y elige la opción de *Reportes*.
1. Haz click en *Programar reportes* y confirma *Programar*.
1. ¡Y listo! No necesitas escribir ni una sola línea de código.

Genera tus reportes cada vez que quieras consultar un retiro de dinero

1. Desde tu cuenta de Mercado Pago, ve a [tus Informes](https://www.mercadopago.com.ar/balance/reports) y elige la opción de *Reportes*.
1. Ve a tus [reportes de Dinero Disponible](https://www.mercadopago.com.ar/balance/reports?page=1#!/bank-report) y haz click en *Crear reporte*.
1. Ubica tus retiros por **período de tiempo** y selecciona el retiro quieras consultar.<br/><br/>¡Y listo! Vas a ver tu reporte en preparación.


> NOTE
>
> Nota
>
> Ten a mano el [Glosario](https://www.mercadopago.com/developers/es/guides/manage-account/reports/available-money/glossary) del reporte de Dinero Disponible para revisarlo cuando lo necesites o quieras consultar algún término técnico.


## Generar por API

Actualiza el atributo `execute_after_withdrawal` con el valor `true`.

Y ¡listo! Ahora tendrás un reporte por cada retiro de dinero que hagas.


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

Recibirás como respuesta un `HTTP STATUS 200` (Ok):

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

> NOTE
> 
> Nota
>
> La generación por retiro es una opción más de generación del reporte de Dinero Disponible. No modifica la generación que configures desde tu panel de Mercado Pago o vía API. Explora el resto de la documentación para conocer de qué otras formas puedes generar tus reportes: desde el panel de Mercado Pago y por API. 