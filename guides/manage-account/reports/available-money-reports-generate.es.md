# Genera tus reportes de Dinero Disponible

> INDEX
>
> En esta página
>
> - [Generación por retiro](#bookmark_generación_por_retiro) 
>
> - [Generación vía web](#bookmark_generación_vía_web)
>
> - [Generación vía API](#bookmark_generación_vía_api)
>
>    + de forma manual
>
>    + de forma programada
>
> - [Ficha técnica](#bookmark_ficha_técnica)
>


## Generación vía web

Genera tus reportes de Dinero Disponible desde tu panel de Mercado Pago. Solo podrás programar los reportes por retiro. Sigue estos pasos para hacerlo:

1. [Inicia sesión](https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAy2OQQ7DIAwE_-JzlNw59iPIIoagQo2MI1pF_XtN1OOux2NfUDjll9dPI3BA71ZyyAoLtIIaWarPuw1qs6pnpX8sOBEUrKQkHdw1RYn2B9nSVKmcZAyeevhYeFh1n7IusYVDtXW3bWOMtZIE3Llh4jVwXVE2w4RS7man-cCt-y4QsatXwfAEF7F0-v4AxU1qhMMAAAA/user) en Mercado Pago y ve a los Reportes desde la sección de Informes.
1. Ingresa en la sección de Dinero Disponible y haz click en ‘Generar reporte’.
1. Busca los retiros por **período de tiempo** y selecciona el retiro quieras conciliar.

<span style="margin-left:40px">¡Y listo! Vas a ver tu reporte **en preparación.** </span>

También podrás programar la generación de estos reportes por cada retiro automático.

## Generación vía API

Ganá tiempo programando la **frecuencia de generación** del reporte de Dinero Disponible las veces que quieras, tanto de forma manual como de forma programada.

### De forma manual

Genera tus reportes de forma manual configurando estas tres instancias: 

#### 1. Generación

Haz el POST a la API especificando las fechas de inicio y fin de la siguiente manera:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report?access_token=´ENV_ACCESS_TOKEN´' \
    -d '{
            "begin_date": "2019-05-01T00:00:00Z",
            "end_date": "2019-06-01T00:00:00Z"
    }'
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = { 'access_token', 'ENV_ACCESS_TOKEN' }
data = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }'

response = requests.post('https://api.mercadopago.com/v1/account/bank_report', headers=headers, params=params, data=data)

```
```node
var request = require('request');

var headers = { 'accept': 'application/json', 'content-type': 'application/json' };

var dataString = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report?access_token='ENV_ACCESS_TOKEN,
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

Recibirás como respuesta un `HTTP STATUS 202` (Accepted), y el reporte se generará de manera asincrónica.

#### 2. Búsqueda

Consulta la API de esta forma para ver si la generación de reportes quedó lista:

[[[
```curl
curl -G \
    -H 'accept: application/json' \
    -d 'access_token=ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/list'
```
```Python
import requests
headers = { 'accept': 'application/json' }
data = { 'access_token': 'ENV_ACCESS_TOKEN' }
response = requests.post('https://api.mercadopago.com/v1/account/bank_report/list', headers=headers, data=data)
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

Recibirás como respuesta un `HTTP STATUS 200` (OK):

```json
[
    {
        "id": 1234,
        "user_id": 130379930,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T00:00:00Z",
        "file_name": "BK-TEST-1234567890123.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
    	...
    }
]
```

#### 3. Descarga

Utilizando el atributo `file_name`, puedes descargar el reporte desde la siguiente URL:

```curl
curl -X GET 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=`ENV_ACCESS_TOKEN`' 
```

Recibirás como respuesta un `HTTP STATUS 200` (OK) :

```json
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
```

### De forma programada

#### 1. Generación

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo *`scheduled`* en la configuración a *`true`*:

```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=`ENV_ACCESS_TOKEN`' \
    -d '{
        "user_id": USER-ID
    }'
``` 

Recibirás como respuesta un `HTTP STATUS 200`(OK)

```json
{
    "id": 2541818,
    "user_id": USER-ID,
    "begin_date": "2019-07-01T06:00:00Z",
    "end_date": "2019-08-01T06:00:00Z",
    "created_from": "schedule",
    "is_test": false,
    "status": "pending",
    "report_type": "bank",
    "generation_date": "2019-08-01T06:00:00.000Z",
    "report_id": null,
    "last_modified": "2019-07-24T13:45:33.479-04:00",
    "retries": 0
}
```

Detiene la generación automática del reporte. Actualiza el atributo *`scheduled`* en la configuración a *`false`*:

```curl
curl -X DELETE \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN' \
  -d '{"user_id": USER-ID}'
```

Recibirás como respuesta un `HTTP STATUS 200` (OK)

```json
{
    "id": 2538023,
    "begin_date": "2019-07-24T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-07-25T06:00:00Z",
    "generation_date": "2019-07-25T02:00:00.000-04:00",
    "is_test": false,
    "last_modified": "2019-07-24T13:50:10.719-04:00",
    "report_id": null,
    "report_type": "bank",
    "retries": 0,
    "status": "deleted",
    "user_id": USER-ID
}
```


#### 2. Descarga

Descarga el archivo con este comando: 

```curl
curl -X GET 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=`ENV_ACCESS_TOKEN`' 
```

Recibirás como respuesta un `HTTP STATUS 200` (OK):

```json
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
```


#### 3. Configuración

###### Consultar configuración 

[[[

```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
```

```Python
import requests
headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = {'access_token', 'ENV_ACCESS_TOKEN'}

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


###### Crear configuración

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

```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token', 'ENV_ACCESS_TOKEN'}

data = '{  
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
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

###### Actualizar configuración

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
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }'
```

```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = (
    ('access_token', 'ENV_ACCESS_TOKEN'),
)

data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
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

###### Iniciar generación programada

[[[

```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN'
```

```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = (
    ('access_token', 'ENV_ACCESS_TOKEN'),
)

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

##### Cancelar generación programada

[[[

```curl
curl -X DELETE \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN'
```

```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = {'access_token', 'ENV_ACCESS_TOKEN'}

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

## Ficha técnica

| `Elemento o acción` |`Características`|
| ------------ |	--------    |
| `Programacion`| <br/> -  Diaria.<br/><br/>  -  Semanal.<br/><br/> -  Mensual. <br/> <br/> |
| `Generación`  | <br/> -  Manual.<br/><br/>  -  Automática por retiro de dinero disponible, total o parcial <br/><br/> Las tres instancias de generación conviven. Es decir, aunque programes la generación de tus reportes automáticamente, cada vez que retires dinero se generará un reporte adicional.<br/> <br/>  |
| `Detalle de tablas` | <br/> El detalle de las tablas comprende información generada en día 1 como mínimo. Excepto en los reportes generados por retiro de dinero. <br/> <br/>  |
| `Formato del filename` | <br/>Cuando el reporte es programado o manual:<br/> "prefijo-configurable-fecha-de-creación.csv" <br/> Ejemplo:  mitienda-28-05-2019.csv <br/><br/> Cuando el reporte se genera por un retiro de dinero: "\<prefijo-configurable>-<id-de-retiro>-<fecha-de-creación>.csv"<br/> Ejemplo: mitienda-ID23902138-28-05-2019.csv <br/> <br/> |
| `Formatos de descarga` | <br/> .csv, .xlsx <br/><br/>Tip: descarga el reporte en .csv para importar los datos y usarlos en otras aplicaciones. Descárgalo en .xlsx para leer la información en las tablas de la hoja de cálculo. <br/> <br/> |
| `Configuración disponible vía API` | <br/>-  Columnas a generar por reporte<br/> -  Prefijo del archivo para identificarlo fácilmente<br/> -  Carga por SFTP<br/> -  Separador de columnas (punto o punto y coma)<br/> -  Separador decimal (coma o punto)<br/> -  Notificación por e-mail<br/> -  Retiro al final del reporte (opcional) <br/> <br/> |
| `Orden de columnas` |<br/> Fijo <br/> <br/> |
| `Archivo` | <br/> Los reportes generados quedan guardados en tu cuenta de Mercado Pago <br/> <br/> |
| `Período máximo` | <br/> Reportes con datos de hasta 60 días <br/> <br/> |
| `Moneda` | <br/> Local (basada en el país donde esté registrada la cuenta de Mercado Pago) <br/> <br/> |
| `Zona horaria de las columnas con fechas` | <br/> GMT-4 <br/> <br/> |
| `Selección de fechas vía API` |<br/>  Formato del timezone: UTC / GMT-0 <br/> <br/> |
| `Selección de fechas vía web`  | <br/> Debe basarse en el timezone de la cuenta del usuario. <br/>Por ejemplo, a la cuenta de usuario registrada en Brasil le corresponde el timezone de Sao Paulo. <br/> <br/> |
