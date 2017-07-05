# Reportes de conciliación

Mercado Pago te brinda reportes para conciliar tus operaciones con tus sistemas internos. Tenemos dos reportes para distintas necesidades.

**Reporte de dinero en cuenta (Settlement Report)**

Contiene todos los eventos de pagos (acreditación, devolución, mediación y contracargos) que afectaron el balance de tu cuenta de Mercado Pago para un período específico.

**Reporte de dinero disponible (Bank Report)**

Contiene el detalle de los pagos que fueron liberados y están listos para ser retirados a cuenta bancarias.
Puede solicitarse para un período especifico o cada vez que se ejecuta un retiro.

Este reporte generalmente se utiliza para conciliar un retiro a cuenta bancaria. De esta forma, por cada retiro realizado se generará un *Bank Report* con las transacciones que lo componen.

## ¿Cómo se usan?

Ambos reportes pueden generarse en forma manual (indicando un período de fechas específicas) o de forma programada.

### Uso manual

#### Reporte de dinero disponible (Bank Report)

##### 1. Generación:
Realiza el POST a la API especificando las fechas de inicio y fin de la siguiente manera:

```php
<?php

// SDK Version >= 0.5.0

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
Para ver si se terminó de generar deberás consultar la API de esta manera:

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

Recibirás como respuesta un listado similar a este:

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


#### Reporte de dinero en cuenta (Settlement Report)

##### 1. Generación:
Realiza el POST a la API especificando las fechas de inicio y fin de la siguiente manera:

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

Recibirás como respuesta un listado similar a este:

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

Otra forma de utilizar los reportes de conciliación es haciendo la generacin de forma automática.

### Reporte de dinero disponible (Bank Report)

##### 1. Generación:

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo `scheduled` en la configuración a `true`:

	POST /v1/account/bank_report/schedule


Detiene la generación automática del reporte. Actualiza el atributo `scheduled` en la configuración a `false`:

	DELETE /v1/account/bank_report/schedule

### 2. Descarga

Realiza la descarga del archivo especificado:

	GET /v1/account/bank_report/:file_name

### Reporte de dinero en cuenta (Settlement Report)

##### 1. Generación:

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo `scheduled` en la configuración a `true`:

	POST /v1/account/settlement_report/schedule
	
Detiene la generación automática del reporte. Actualiza el atributo `scheduled` en la configuración a `false`:

	DELETE /v1/account/settlement_report/schedule

### 2. Descarga

Realiza la descarga del archivo especificado:

	GET /v1/account/settlement_report/:file_name

