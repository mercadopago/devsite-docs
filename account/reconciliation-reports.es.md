# Reportes de conciliación

Mercado Pago te brinda reportes para conciliar tus operaciones con tus sistemas internos. Tenemos dos reportes para distintas necesidades.

**Reporte de dinero en cuenta (Settlement Report)**

Contiene todos los eventos de pagos (acreditación, devolución, mediación y contracargos) que afectaron el balance de tu cuenta de Mercado Pago para un período específico.

**Reporte de dinero disponible (Bank Report)**

Contiene el detalle de los pagos que fueron liberados y están listos para ser retirados a cuenta bancarias.
Puede solicitarse para un período especifico o cada vez que se ejecuta un retiro.

Este reporte generalmente se utiliza para conciliar un retiro a cuenta bancaria. De esta forma, por cada retiro realizado se generará un *Bank Report* con las transacciones que lo componen.

## ¿Cómo se usan?

Ambos reportes pueden generarse en forma manual o automática.

### Generación manual

Ambos reportes pueden generarse de forma manual (indicando un período especifico) o de forma programada.

#### Reporte de dinero disponible

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

Recibirás como respuesta un `HTTP STATUS 202 (Accepted)`, y el reporte se generará de manera asincrónica. Para ver si se terminó de generar deberás consultar la API de esta manera:

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

Utilizando el atributo `file_name`, puedes descargar el reporte desde la siguiente URL:


	https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token= ACCESS_TOKEN



## Reporte de dinero disponible (Bank Report)

### Generación y búsqueda

Genera un nuevo reporte de dinero disponible con las fechas especificadas. El informe se generará asincrónicamente:

	POST /v1/account/bank_report

Busca reportes existentes:

	GET /v1/account/bank_report/search

Buscar reportes existentes generados en un intervalo de tiempo:

	GET /v1/account/bank_report/search?range=date_created&range_begin_date=2016-01-01T00:00:00Z&range_end_date=2016-01-01T12:00:00Z

### Configuración

Genera una nueva configuración de reporte de dinero disponible:

	POST /v1/account/bank_report/config

Actualiza una configuración de reporte de dinero existente:

	PUT /v1/account/bank_report/config

Devuelve la configuración del reporte de dinero existente:

	GET /v1/account/bank_report/config

### Programa la generación automática

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo `scheduled` en la configuración a `true`:

	POST /v1/account/bank_report/schedule
	
Detiene la generación automática del reporte. Actualiza el atributo `scheduled` en la configuración a `false`:

	DELETE /v1/account/bank_report/schedule

### Descarga

Realiza la descarga del archivo especificado:

	GET /v1/account/bank_report/:file_name


## Reporte de dinero en cuenta (Settlement Report)

### Generación y búsqueda

Genera un nuevo reporte de dinero en cuenta con las fechas especificadas. El reporte se generará asincrónicamente:

	POST /v1/account/settlement_report

Busca reportes existentes:

	GET /v1/account/settlement_report/search
	
Buscar reportes existentes generados en un intervalo de tiempo:

	GET /v1/account/settlement_report/search?range=date_created&range_begin_date=2016-01-01T00:00:00Z&range_end_date=2016-01-01T12:00:00Z

### Configuración

Genera una nueva configuración de reporte de dinero en cuenta:

	POST /v1/account/settlement_report/config

Actualiza una configuración de reporte de dinero en cuenta existente:

	PUT /v1/account/settlement_report/config

Devuelve la configuración del reporte en cuenta existente: 

	GET /v1/account/settlement_report/config

### Programa la generación automática

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo `scheduled` en la configuración a `true`:

	POST /v1/account/settlement_report/schedule
	
Detiene la generación automática del reporte. Actualiza el atributo `scheduled` en la configuración a `false`: 

	DELETE /v1/account/settlement_report/schedule

### Descarga

Realiza la descarga del archivo especificado:

	GET /v1/account/settlement_report/:file_name
