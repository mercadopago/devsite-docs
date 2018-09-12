# Reportes de conciliación

Mercado Pago te brinda reportes para conciliar tus operaciones con tus sistemas internos. Tenemos dos reportes para distintas necesidades.

**Reporte de dinero en cuenta (_Settlement Report_)**

Contiene todos los eventos de pagos (acreditación, devolución, mediación y contracargos) que afectaron el balance de tu cuenta de Mercado Pago para un período específico.

**Reporte de dinero disponible (_Bank Report_)**

Contiene el detalle de los pagos que fueron liberados y están listos para ser retirados a cuenta bancaria.
Puede solicitarse para un período específico o cada vez que se ejecuta un retiro.

Este reporte generalmente se utiliza para conciliar un retiro a cuenta bancaria. De esta forma, por cada retiro realizado se generará un *Bank Report* con las transacciones que lo componen.

## ¿Cómo se usan?

Ambos reportes pueden generarse en forma manual (indicando un período de fechas específicas) o de forma programada.

Consulta el [glosario de los reportes](https://www.mercadopago.com.ar/ayuda/glosario-reporte-conciliacion_2118).

### Uso manual

#### Reporte de dinero disponible (_Bank Report_)

##### 1. Generación:
Realiza el _POST_ a la API especificando las fechas de inicio y fin de la siguiente manera:
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report?access_token=ACCESS_TOKEN' \
    -d '{
            "begin_date": "2015-05-01T00:00:00Z",
            "end_date": "2015-06-01T00:00:00Z"
    }'

```

```php
<?php

$request =

$mp = new MP("ACCESS_TOKEN");

$request = array(
        "uri" => "/v1/account/bank_report",
        "data" => array(
            "begin_date" => "2015-05-01T00:00:00Z",
            "end_date" => "2015-06-01T00:00:00Z"
        )
    );

$mp->post($request);

?>
```

Recibirás como respuesta un `HTTP STATUS 202 (Accepted)`, y el reporte se generará de manera asincrónica.

##### 2. Búsqueda:
Para ver si se terminó de generar el reporte deberás consultar la API de esta manera:
```curl
curl -G \
    -H 'accept: application/json' \
    -d 'access_token=ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/list'
```

```php
<?php

// SDK Version >= 0.5.0

$mp = new MP("ACCESS_TOKEN");

$request = array(
        "uri" => "/v1/account/bank_report/list"
    );

$mp->get($request);

?>
```

Recibirás como respuesta:

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

##### 3. Descarga
Utilizando el atributo `file_name`, puedes descargar el reporte desde la siguiente URL:

	https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ACCESS_TOKEN


#### Reporte de dinero en cuenta (_Settlement Report_)

##### 1. Generación:
Realiza el _POST_ a la API especificando las fechas de inicio y fin de la siguiente manera:

```php
<?php

// SDK Version >= 0.5.0

$mp = new MP("ACCESS_TOKEN");

$request = array(
        "uri" => "/v1/account/settlement_report",
        "data" => array(
            "begin_date" => "2015-05-01T00:00:00Z",
            "end_date" => "2015-06-01T00:00:00Z"
        )
    );

$mp->post($request);

?>
```

Recibirás como respuesta un `HTTP STATUS 202 (Accepted)`, y el reporte se generará de manera asincrónica.

##### 2. Búsqueda:
Para ver si se terminó de generar deberás consultar la API de esta manera:

```php
<?php

// SDK Version >= 0.5.0

$mp = new MP("ACCESS_TOKEN");

$request = array(
        "uri" => "/v1/account/settlement_report/list"
    );

$mp->get($request);

?>
```

Recibirás como respuesta:

```json
[
    {
        "id": 1234,
        "user_id": 130379930,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T00:00:00Z",
        "file_name": "SR-TEST-1234567890123.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
    	...
    }
]
```

##### 3. Descarga
Utilizando el atributo `file_name`, puedes descargar el reporte desde la siguiente URL:

	https://api.mercadopago.com/v1/account/settlement_report/:file_name?access_token=ACCESS_TOKEN


### Uso programado

Otra forma de utilizar los reportes de conciliación es haciendo la generación de forma automática.

### Reporte de dinero disponible (_Bank Report_)

##### 1. Generación:

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo `scheduled` en la configuración a `true`:

	POST /v1/account/bank_report/schedule


Detiene la generación automática del reporte. Actualiza el atributo `scheduled` en la configuración a `false`:

	DELETE /v1/account/bank_report/schedule

### 2. Descarga

Realiza la descarga del archivo especificado:

	GET /v1/account/bank_report/:file_name

### Reporte de dinero en cuenta (_Settlement Report_)

##### 1. Generación:

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo `scheduled` en la configuración a `true`:

	POST /v1/account/settlement_report/schedule

Detiene la generación automática del reporte. Actualiza el atributo `scheduled` en la configuración a `false`:

	DELETE /v1/account/settlement_report/schedule

### 2. Descarga

Realiza la descarga del archivo especificado:

	GET /v1/account/settlement_report/:file_name
