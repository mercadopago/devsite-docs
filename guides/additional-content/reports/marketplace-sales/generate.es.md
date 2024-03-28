# Generar reporte

Para generar el reporte, primero debes realizar la [creación de las configuraciones](#bookmark_crear_configuraci%C3%B3n) necesarias, donde podrás definir los emails a los que se enviará el reporte o la frecuencia con la que quieres que se genere, entre otras opciones. Luego, deberás [crear el reporte](#bookmark_crear_reporte), que podrá ser de **forma automática** (_event_) o **manual** (_statement_).

> WARNING
>
> Importante
>
> Para generar los reportes, será necesario contar con el Access Token de tus credenciales de producción. Se trata de una clave privada de la aplicación, que siempre debe ser usada en el backend para generar pagos. En caso de no contar con esta información todavía, sigue los pasos descritos a continuación.

## Generar Access Token

Las credenciales son contraseñas exclusivas utilizadas para identificar una integración en tu cuenta. Desempeñan un papel fundamental en la captura segura de pagos en tiendas en línea y otras aplicaciones. Puedes encontrarlas en **Detalles de la aplicación > Credenciales** dentro del [Panel del desarrollador](https://www.mercadopago.com.uy/developers/panel/app) o en tu cuenta de Mercado Pago, accediendo a [Tu negocio > Configuraciones > Gestión y administración > Credenciales](https://www.mercadopago.com.ar/settings/account/credentials).

Existen dos tipos diferentes de credenciales:
* **Credenciales de prueba**: Utiliza las credenciales de prueba para probar tus integraciones. Pueden combinarse con tarjetas de crédito de prueba para simular transacciones y verificar el correcto funcionamiento de las integraciones. Se recomienda utilizar estas credenciales antes de pasar a las credenciales de producción.
* **Credenciales de producción**: Utiliza las credenciales de producción para recibir pagos.
Ambos tipos de credenciales constan de dos pares de claves que debes utilizar según el producto elegido. Consulta la documentación específica de cada producto para obtener detalles sobre las claves que debes utilizar.

| Tipo        | Descripción                                                                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Public key  | La clave pública de la aplicación se utiliza generalmente en el frontend. Permite, por ejemplo, acceder a información sobre los medios de pago y cifrar los datos de la tarjeta. |
| Access token | Clave privada de la aplicación que siempre se debe utilizar en el backend para generar pagos. Es esencial mantener esta información segura en tus servidores.       |

Para poder generar el reporte de ventas, deberás utilizar tu **Access Token** productivo.

![Generar Access Token](/images/manage-account/reports/marketplace-sales/image1.png)

## Crear configuración

Previo a la generación del reporte, deberás crear las configuraciones del mismo, que te permitirán personalizar los emails a los que se enviará el reporte o la frecuencia con la que quieres que se genere, además de su estructura.
La creación de configuraciones consta de 2 pasos: primero, definir la **estructura del reporte**, y luego, configurar las **vías de notificación**.

### Estructurar reporte

Crear la estructura del reporte te permitirá definir las características que este tendrá al momento de su generación. 
A través de _structures_ podrás indicar la zona horaria en la que quieres que el reporte se genere, agregar un prefijo para identificar el archivo generado e incorporar la cantidad de columnas deseadas, junto con separadores de columnas y decimales. 
Para definir esta estructura, realiza el siguiente llamado a la API, teniendo en cuenta las especificaciones de la tabla a continuación:

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "display_timezone": "GMT-03",
    "name": "Structure de mi marketplace",
    "file_format": {
        "prefix": "marketplace",
        "column_separator": ";",
        "decimal_separator": "."
    },
    "columns": [
        {
            "key": "COLLECTOR",
            "alias": ""
        },
        {
            "key": "COLLECTOR_NICKNAME",
            "alias": ""
        },
        {
            "key": "PAYMENT",
            "alias": ""
        },
        {
            "key": "STATUS_DESCRIPTION",
            "alias": ""
        },
        {
            "key": "STATUS_DETAIL",
            "alias": ""
        },
        {
            "key": "PURCHASE_ORDER",
            "alias": ""
        },
        {
            "key": "PAYMENT_METHOD_TYPE",
            "alias": ""
        },
        {
            "key": "TRANSACTION_AMOUNT",
            "alias": ""
        },
        {
            "key": "DATE_CREATED",
            "alias": ""
        },
        {
            "key": "DATE_APPROVED",
            "alias": ""
        },
        {
            "key": "MARKETPLACE_FEE_AMOUNT",
            "alias": ""
        },
        {
            "key": "MERCADOPAGO_FEE_AMOUNT",
            "alias": ""
        },
        {
            "key": "TOTAL_PAID_AMOUNT",
            "alias": ""
        },
        {
            "key": "NET_RECEIVED_AMOUNT",
            "alias": ""
        }
    ]
}'
```

#### Respuesta
```json
{
    "id": {{structure_id}},
    "version": 0,
    "date_created": null,
    "date_last_updated": null,
    "name": null,
    "file_format": null,
    "columns": null,
    "file_config": null,
    "report_translation": null,
    "include_withdraw": null,
    "refund_detailed": null,
    "show_fee_prevision": null,
    "coupon_detailed": null,
    "show_chargeback_cancel": null
}
```

| Campo                      | Descripción                                                                                          |
|----------------------------|----------------------------------------------------------------------------------------------------|
| `display_timezone` (opcional) | Este campo determina la fecha y la hora que se visualiza en los reportes. Si no configuras este campo con una zona horaria, el sistema tomará por defecto el valor GMT-04. Si eliges una zona horaria que utiliza horario de verano, es necesario que hagas el ajuste manual cuando cambie la hora. |
| `columns` (obligatorio)       | Campo con el detalle de columnas a incluir en tu reporte. Encuentra todos los posibles valores en la sección [Glosario](/developers/es/docs/checkout-pro/additional-content/reports/marketplace-sales-report/report-fields).|
| `name` (obligatorio)| Campo para asignar nombre a la estructura. |
| `file_format.prefix` (obligatorio) | Prefijo que compone el nombre del reporte una vez generado. |
| `file_column_separator` (obligatorio) | Caracter que puedes usar en el archivo .csv cuando no quieras que el separador sea un punto y coma. |

### Vías de notificación

Después de establecer la estructura del reporte, determine cómo desea recibir las notificaciones, ya sea por email o SFTP. Configure un _notifier_ como se muestra a continuación y preste atención a las características de cada campo descritas en la tabla siguiente.

#### Email
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/notifiers' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "email",
    "data": {
        "recipients": ["test@mercadolibre.com"]
    },
    "description": "test notifier email"
}'
```

#### Respuesta
```json
{
    "id": {{notifier_id}},
    "type": "email",
    "data": {
        "recipients": [
            "test@mercadolibre.com"
        ]
    },
    "description": null,
    "version": 0,
    "status": "ACTIVE",
    "is_pii_data": true
}
```

#### SFTP
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/notifiers?type=ftp' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "ftp",
    "data": {
        "ip": "test.files.com",
        "port": 22,
        "password": "test",
        "protocol": "SFTP",
        "username": "test@mercadolibre.com",
        "remote_dir": "/"
    },
    "description": "test notifier sftp"
}'
```

#### Respuesta
```json
{
    "id": {{notifier_id}},
    "type": "ftp",
    "data": {
        "protocol": "SFTP",
        "ip": "test.files.com",
        "username": "test@mercadolibre.com",
        "password": "test",
        "remote_dir": "/",
        "port": 22
    },
    "description": null,
    "version": 0,
    "status": "ACTIVE",
    "is_pii_data": false
}
```

| Campo             | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type` (obligatorio) | Define el tipo de notificación a configurar. Valores posibles: **email**; **ftp**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `data` (obligatorio) | Contiene la información del destinatario del **notifier**. Dependiendo del valor indicado en `type`, puede contener los siguientes objetos: <br><br> - **email:** Contendrá el campo `recipients`, donde podrás indicar los emails a los que el reporte será enviado. Puede ser más de uno, si lo deseas. <br><br> - **ftp:** Contendrá los siguientes campos: <br>   - `ip`: URL del servidor FTP <br>   - `port`: Puerto del servidor FTP <br>   - `password`: Contraseña de acceso al servidor FTP <br>   - `protocolo`: `SFTP` <br>   - `username`: Usuario para acceder al servidor FTP <br>   - `remote_dir`: Carpeta destino en el servidor FTP.   |

## Crear reporte

Después de crear las configuraciones iniciales, tienes dos opciones para crear el reporte:

* **Programar un evento**: Esto automatiza la creación de reportes, indicando su periodicidad. 
* **Generar un evento manualmente**: Puedes crear un reporte a demanda, definiendo el período que deseas que abarque.

### Programar un reporte (Events)

Al programar un evento, es posible generar reportes de manera automática y establecer su periodicidad. Para realizar esta programación, crea un _event_ siguiendo el ejemplo a continuación. Asegúrate de tener las configuraciones previamente establecidas y la información de la tabla a continuación a mano para garantizar una programación exitosa del reporte.

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "frequency",
    "data": {
        "period": "daily",
        "value": 0,
        "hour": 0
    },
    "description": "event test",
    "structure_id": {{structure_id}},
    "notifiers": [      
       {{notifier_id}}
    ],
    "status": "ACTIVE",
    "version": 0
}'
```

#### Respuesta
```json
{
    "id": {{event_id}},
    "type": "frequency",
    "data": {
        "period": "daily",
        "value": 0,
        "hour": 20,
        "skip_non_working_days": false
    },
    "description": "event test",
    "structure_id": {{structure_id}},
    "notifiers": [],
    "status": "ACTIVE",
    "version": 0,
    "user_id": {{user_id}}
}
```

Puedes ver la descripción de los campos presente en los _curls_ en la tabla a continuación. 

| Campo           | Descripción                                                                                                                                                                                                                                 |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type` (obligatorio) | Este campo define el tipo de evento. El único valor posible es `frequency`.                                                                                                                                                                 |
| `data` (obligatorio) | Este campo contiene la frecuencia con la que se generará el reporte. Puede ser diaria (`period=daily`), semanal (`period=weekly`) o mensual (`period=monthly`). Dentro de `value`, podrás definir qué día de la semana quieres que se genere el reporte (si `period=weekly`), asignándole un número de 1 a 7, o qué día del mes (si `period=monthly`), asignándole un número del 1 al 31. Además, en el campo _hour_ puedes programar la hora del día en la que se generará el reporte. |
| `description` (obligatorio) | Campo para asignar un nombre al evento. Valor máximo: 50 caracteres.                                                                                                                                                                          |
| `structure_id` (obligatorio) | Campo para asignar la estructura con la que se va a generar el reporte. Deberás completarlo con el valor obtenido para este mismo campo en la respuesta a la creación de la estructura.                                                             |
| `notifier_id` (obligatorio)  | Campo para asignar la vía por la que deseas recibir las notificaciones. Deberás completarlo con la identificación obtenida en la respuesta a la creación de notificaciones.                                                                     |

### Generar reporte manualmente (Statements)

La creación manual permite generar un reporte a demanda, especificando el intervalo de tiempo deseado.

Para hacerlo, crea una _statement_, como se muestra a continuación. Además, asegúrate de tener a mano las configuraciones que creaste previamente y la información de la tabla siguiente para garantizar la creación exitosa del reporte.

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/statements' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data-raw '{
    "user_description": "",
    "created_by": "automatic",
    "origin": {
        "type": "date_range",
        "data": {
            "date_start": "2023-04-01T03:00:00Z",
    		"date_end": "2023-04-02T02:27:44Z"
        }
    },
    "structure_id": {{structure_id}},
    "notifiers_id": [{{notifier_id}}]
}'
```

#### Respuesta
```json
{
    "status_code": 201,
    "request_id": {{statement_id}},
    "message": ""
}
```

Puedes ver la descripción de los campos presente en los _curls_ en la tabla a continuación. 

| Campo                        | Descripción                                                                                                                                                                                                                                  |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `user_description` (obligatorio) | Descripción deseada. Extensión máxima: 50 caracteres.                                                                                                                                                                                         |
| `created_by` (obligatorio)       | Creador de la solicitud. De momento, sólo puede recibir el valor _automatic_.                                                                                                                                                                   |
| `Origin` (obligatorio)          | Este campo contiene la información del período que se desea incluir en el reporte.<br>- `type`: el único valor posible es `date_range`, ya que deberás indicar el período a consultar.<br>- `date_start`: indica el inicio del período que deseas consultar en formato: **yyyy-MM-dd HH:mm:ss.SSS**.<br>- `date_end`: indica el fin del período que deseas consultar en formato: **yyyy-MM-dd HH:mm:ss.SSS**. |
| `structure_id` (obligatorio)    | Campo para asignar la estructura con la que se va a generar el reporte. Deberás completarlo con el valor obtenido para este mismo campo en la respuesta a la creación de la estructura.                                                        |
| `notifiers_id` (obligatorio)    | Campo para asignar la vía por la que deseas recibir las notificaciones. Deberás completarlo con la identificación obtenida en la respuesta a la creación de notificaciones.                                                                  |
