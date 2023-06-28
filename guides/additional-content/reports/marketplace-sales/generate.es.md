# Generar reporte

## ¿Cómo generar tu reporte de ventas de Marketplace?

Por el momento, el reporte de ventas del Marketplace de Mercado Pago puede ser generado solamente vía API.
Esta generación comprende dos pasos: 
   1. **Creación de las configuraciones**: podrás definir los emails a los que se enviará el reporte o la frecuencia con la que quieres que este se genere, entre otras opciones.
   2. **Programación del reporte**: habilitarás el envío programado del reporte según los parámetros configurados en el paso anterior.

## Creación de la configuración

El proceso de creación de la configuración puede variar dependiendo de si es la primera vez que generas este reporte, o si ya lo has generado previamente y quieres consultar y modificar esas configuraciones anteriores. 
Para crear la configuración del reporte de ventas de Marketplace por primera vez, sigue los pasos a continuación. Si ya lo generaste previamente y quieres consultar y modificar las configuraciones anteriores, puedes saltar al siguiente paso.

### Creación de la configuración por primera vez

Si es la primera vez que configuras y generas el reporte de ventas de Marketplace, deberás enviar un POST con el siguiente cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
            "file_name_prefix": "release-report-MKP-test-v1",
            "display_timezone": "GMT-03",
            "notification_email_list": [
                "juanpablo.rozada@mercadolibre.com"
            ],
            "frequency": {
                "hour": 15,
                "type": "weekly",
                "value": "tuesday"
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
                },
                {
                    "key": "MP_FEE_AMOUNT"
                },
                {
                    "key": "PAYMENT_METHOD"
                },
                {
                    "key": "STORE_NAME"
                },
                {
                    "key": "RECORD_TYPE"
                },
                {
                    "key": "DESCRIPTION"
                }
            ]
    }'

```

A continuación encontrarás un listado de los parámetros obligatorios y opcionales que deberás configurar.

| Parámetro                 | ¿Obligatorio u opcional? | Descripción                                                                                                                                       |
|---------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `file_name_prefix`        | Obligatorio              | Prefijo que compondrá el nombre del informe al ser descargado.                                                                                     |
| `display_timezone`        | Opcional                 | Zona horaria que se utilizará en los horarios del informe. En caso de quedar vacío, se utilizará GMT-04 por defecto.                             |
| `notification_email_list` | Opcional                 | Frecuencia deseada de generación del informe. Deberá especificarse:                                                                                |
|                           |                          | - `hour`: hora del día en que se generará el informe.                                                                                             |
|                           |                          | - `type`: frecuencia de generación (mensual si es mensual, semanal si es semanal, diaria si es diaria).                                             |
|                           |                          | - `value`: día de la semana en que se desea generar el informe.                                                                                    |
|                           |                          | **Atención**: este parámetro solo configura la frecuencia. Para programar efectivamente el envío del informe, dirígete al paso "Programación del informe". |
| `columns`                 | Obligatorio              | Datos que se desean incluir en el informe. Para más detalles sobre cada uno, consulta los Usos del report.                                        |

Una vez definidas estas configuraciones puedes continuar con la generación del reporte. Si, en cambio, deseas consultar las configuraciones definidas, sigue los pasos a continuación.

### Consulta y modificación de configuraciones anteriores

Si ya has generado un reporte de ventas de Marketplace anteriormente, puedes consultar las configuraciones definidas y modificarlas, si así lo deseas. 

Para consultar las configuraciones definidas previamente, envía un GET con el siguiente cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

Para modificar las configuraciones establecidas en reportes de ventas de Marketplace previos, envía un PUT con el siguiente cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
            "file_name_prefix": "release-report-MKP-test-v1",
            "display_timezone": "GMT-03",
            "notification_email_list": [
                "exemplo@exemplo.com"
            ],
            "frequency": {
                "hour": 15,
                "type": "weekly",
                "value": "tuesday"
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
                },
                {
                    "key": "MP_FEE_AMOUNT"
                },
                {
                    "key": "PAYMENT_METHOD"
                },
                {
                    "key": "STORE_NAME"
                },
                {
                    "key": "RECORD_TYPE"
                },
                {
                    "key": "DESCRIPTION"
                }
            ]
    }'
```

## Programación del reporte

Si a la hora de configurar tu reporte de ventas de Marketplace elegiste la periodicidad con la que deseas recibirlo, deberás también activar su envío programado. Puedes hacerlo mediante el siguiente cURL:

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/account/marketplace_sales_report/schedule' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

> Este cURL sólo habilita el envío programado. Para configurar la periodicidad con la que quieres que este envío suceda, debes hacerlo durante la creación de las configuraciones.

También es posible deshacer la programación del envío del reporte. Para eso, realiza un llamado con el siguiente cURL:

```curl
curl --location --request DELETE 'https://api.mercadopago.com/v1/account/marketplace_sales_report/schedule' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

## Generación del reporte

Una vez que hayas creado las configuraciones y programado el envío del reporte de ventas de Marketplace, podrás generarlo y obtenerlo de manera automática, vía email, o de manera manual, vía archivo de texto. 
En los diagramas a continuación puedes ver cómo es cada proceso.

![Automática](/images/manage-account/reports/marketplace-sales/image3.png)
![Manual](/images/manage-account/reports/marketplace-sales/image4.png)

### Generación para descarga automática

Para realizar la generación del reporte y su descarga de manera automática, vía email, deberás hacerlo mediante el siguiente cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data '{
    "marketplaces": ["MP-MKT-3362814541380534"],
    "site": "MLB",
    "begin_date": "2023-06-01T00:00:00Z",
    "end_date": "2023-06-10T00:00:00Z"
}'
```

La generación del reporte es un proceso asíncrono. Por este motivo, recibirás el email que te permitirá descargar el reporte luego de algunos minutos.  

![Automática](/images/manage-account/reports/marketplace-sales/image1.png)

### Generación para descarga manual

Para realizar la generación del reporte y realizar su descarga de manera manual, deberás realizarlo con el siguiente cURL: 

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/{{REPORT_FILE_NAME}}' \
--header 'Authorization: Bearer {{APP_USER_TOKEN}}'
```

El reporte será devuelto por la API en formato de texto como resultado.

Dejamos a continuación una collection de Postman para que puedan utilizar como ejemplo: archivo

## Consultar los reportes configurados

Cuando desees consultar los reportes que tienes configurados, puedes hacerlo con el siguiente cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report'/list?access_token={{USER_APP_TOKEN}}'
```

El llamado devolverá una respuesta similar a la siguiente:

```curl
[
    {
        "id": 34326722,
        "account_id": 1214966328,
        "begin_date": "2023-04-11T19:00:00Z",
        "created_from": "schedule",
        "currency_id": "BRL",
        "date_created": "2023-04-18T15:00:03.000-04:00",
        "download_date": null,
        "end_date": "2023-04-18T18:59:59Z",
        "file_name": "reserve-release-report-4-USER_ID-2023-04-18-160003.csv",
        "internal_management": "{\"notify\": true, \"is_visible\": true, \"use_exact_time\": false}",
        "is_visible": true,
        "metadata": "{\"user_tags\": [\"test_user\", \"normal\"], \"generation_model\": \"reserve\"}",
        "origin": "date_range",
        "status": "enabled",
        "subtype": "release",
        "user_id": 1291581847
    },
    {
        "id": 34203258,
        "account_id": 1214966328,
        "begin_date": "2023-02-28T03:00:00Z",
        "created_from": "manual",
        "currency_id": "BRL",
        "date_created": "2023-04-13T08:04:50.000-04:00",
        "download_date": null,
        "end_date": "2023-03-12T02:59:59Z",
        "file_name": "reserve-release-report-4-USER_ID-2023-04-13-090450.csv",
        "internal_management": "{\"notify\": true, \"is_visible\": true, \"use_exact_time\": false}",
        "is_visible": true,
        "metadata": "{\"user_tags\": [\"test_user\", \"normal\"], \"generation_model\": \"reserve\", \"last_movement_id\": 164882712542}",
        "origin": "date_range",
        "status": "enabled",
        "subtype": "release",
        "user_id": 1291581847
    }
]
```

Para distinguir cada reporte, puedes recurrir a los parámetros `id` y `file_name`, que te indicarán el número de identificación de cada uno y el nombre configurado para la descarga del archivo, respectivamente.