---
sites_supported:
  - mlb
---

# Reporte de dinero en cuenta (_Settlement Report_)

Contiene todos los eventos de pagos (acreditación, devolución, mediación y contracargos) que afectaron el balance de tu cuenta de Mercado Pago para un período específico.


## ¿Cómo se usa?

Puede generarse en forma manual (indicando un período de fechas específicas) o de forma programada.

Consulta el [glosario de los reportes](https://www.mercadopago.com.ar/ayuda/glosario-reporte-conciliacion_2118).

### Uso manual

#### 1. Generación:
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

#### 2. Búsqueda:
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

#### 3. Descarga
Utilizando el atributo `file_name`, puedes descargar el reporte desde la siguiente URL:

	`https://api.mercadopago.com/v1/account/settlement_report/:file_name?access_token=ACCESS_TOKEN`


### Uso programado

Otra forma de utilizar los reportes de conciliación es haciendo la generación de forma automática.

#### 1. Generación:

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo `scheduled` en la configuración a `true`:

	`POST` /v1/account/settlement_report/schedule

Detiene la generación automática del reporte. Actualiza el atributo `scheduled` en la configuración a `false`:

	`DELETE` /v1/account/settlement_report/schedule

#### 2. Descarga

Realiza la descarga del archivo especificado:

	`GET` /v1/account/settlement_report/:file_name
