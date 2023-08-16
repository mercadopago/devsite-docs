# Crear y administrar intents en dispositivos Point

A continuación, puedes ver cómo crear un intent en dispositivos Point, cómo consultar su estado, y cómo cancelarlo, así como la vía para configurar sus notificaciones.

## Crear intent en dispositivos Point

Para crear un intent en tu dispositivo Point, tienes dos posibilidades:

* Puedes realiza una llamada POST al endpoint [Crear intent para un dispositivo asociado a una caja](/developers/es/reference/instore-api/integrationsintents_point_pos_external_id/post), reemplazando `external.id` por el valor escogido al crear la caja.
* O bien, puedes realizar una llamada POST al endpoint [Crear intent para un dispositivo PDV](/developers/es/reference/instore-api/integrationsintents_point_device_id/post), reemplazando `device.id` por el valor obtenido al consultar el listado de dispositivos. 

Puedes elegir la opción que mejor se adapte a tus necesidades. El resultado será el mismo y habrás creado un intent para el dispositivo Point elegido.

----[mlb]----
> Ten en cuenta que para el campo `amount`, el monto mínimo permitido para dispositivos Point Pro 2 es 1.00, y el máximo 70000.00. 
------------

----[mla]----
> Ten en cuenta que para el campo `amount`, el monto mínimo permitido para dispositivos POS y SMART es 5.00, y el máximo 4000000.00.
------------

## Consultar el estado de un intent en dispositivos Point

Para conocer el estado actual de un intent, realiza una llamada GET al endpoint [Obtener información de un intent](/developers/es/reference/instore-api/integrationsintents_intent_id_point/get), reemplazando `intent_id` por el valor obtenido en ese campo al momento de crearlo. 

A continuación, te mostramos un ejemplo de respuesta a la consulta de un estado:

``` json
{
    "description": "description",
    "external_reference": "external_reference",
    "status": "CLOSED",
    "operations": [
        {
            "type": "PURCHASE",
            ....
            "results": [
                {
                    "id": 123456,
                    "source": "PAYMENT"
                }
            ]
            ...
        }
    ],
    "enabler_configuration": {
        "ticket_number": "Ticket001",
         "device_payment_mode": "CARD",
         "print_on_terminal": [
             "SELLER_TICKET"
         ]
     }
}
```

Dentro del campo `status` podrás ver el estado del intent. Los únicos estados finales son `CANCELED`, `CLOSED`, `EXPIRED` , `ERROR` y  `CONFIRMATION_REQUIRED`.  
Para obtener más información sobre los estados posibles de un intent, dirígete al [Glosario](/developers/es/docs/ecosistema-presencial/glossary).

Ten en cuenta que, para el estado final `CLOSED`,  verás en la respuesta el nodo adicional `results`. Este nodo contiene la información del pago relacionada a los resultados de la operación; es decir, el listado de transacciones asociadas a la misma. 

Este objeto se compone de la siguiente manera: 

| Valor | Descripción |
|---|---|
| `id` | Es la identificación del pago. Con ella, puedes dirigirte a [Payments API](/developers/es/reference/payments/_payments_id/get) y consultar el estado final del pago. |
| `source` | Entidad a la que pertenece el `id`.  Arrojará el valor `PAYMENT` cuando el flujo del pago se haya creado correctamente. Dirígete a [Payments API](/developers/es/reference/payments/_payments_id/get) para verificar el estado final del pago con el `id` recibido. |

## Cancelar un intent en dispositivos Point

Si todavía no se ha realizado el pago y no has cargado el intent en el dispositivo, puedes cancelar una intención de pago y hacer que ese intento ya no esté disponible para su procesamiento. 
Realiza una llamada DELETE al endpoint [Cancelar un intent](/developers/es/reference/instore-api/integrationsintents_intent_id_point/delete), reemplazando `external.id` e `intent_id` por los valores obtenidos al crear una caja y el intento de pago, respectivamente.

> WARNING
>
> Importante
>
> Ten en cuenta que sólo se permite la cancelación de un intent por este método si su estado es `OPENED`. En caso de que este no sea el estado actual del intent que estás queriendo cancelar y, en cambio, sea `ON_TERMINAL`, deberás hacerlo desde el dispositivo Point. Para más información sobre los posibles estados de un intent, dirígete al [Glosario](/developers/es/docs/ecosistema-presencial/glossary).

## Configurar notificaciones

Recomendamos **configurar tus notificaciones Webhook**. Estas facilitarán que recibas información en tiempo real cada vez que un intent llega a un estado final. 

Para configurar tus notificaciones, sigue las instrucciones proporcionadas en la [documentación de notificaciones Webhooks](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/notifications/webhooks).

> WARNING
>
> Importante
>
> Para configurar las notificaciones de Ecosistema Presencial, deberás utilizar el evento **Integraciones Presenciales**, cuyo mensaje contendrá el campo `type` con el valor  `topic_instore_integration_wh`. Por medio de este evento recibirás las notificaciones de estados finales de los intent, ya sean procesados por Point o QR en modo integrado.  

A continuación, te mostramos un ejemplo de notificación que puedes recibir para un dispositivo Point cuando un intent llega a un estado (`status`) final. Ten en cuenta que la información que se notifica dentro del nodo `data` va a depender de la información con la que se cree el intent.

----[mla]----
``` json
{
    "id": "1234567-12345-12345678-1234567890",
    "action": "topic_instore_integration_wh.application.authorized",
    "api_version": "v1",
    "data": {
        "enabler_configuration": {
            "ticket_number": "Ticket001",
            "device_payment_mode": "CARD",
            "print_on_terminal": [
                "SELLER_TICKET"
            ]
        },
        "external_reference": "123132342341",
        "description": "abc",
        "id": "1234567-12345-12345678-1234567890",
        "operations": [
            {
                "amount": "10.14",
                "type": "PURCHASE"
            }
        ],
        "status": "CANCELED",
        "url": "https://api.mercadopago.com/instore-api/integrations/v1/intents/1234567-12345-12345678-1234567890/point"
    },
    "date_created": "2023-07-27 20:24:21.776642198-0400",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 12345667
}

```
------------
----[mlb]----
``` json
{
    "id": "1234567-12345-12345678-1234567890",
    "action": "topic_instore_integration_wh.application.authorized",
    "api_version": "v1",
    "data": {
        "enabler_configuration": {
            "device_payment_mode": "CARD",
            "print_on_terminal": [
                "SELLER_TICKET"
            ]
        },
        "external_reference": "123132342341",
        "description": "abc",
        "id": "1234567-12345-12345678-1234567890",
        "operations": [
            {
                "amount": "10.14",
                "type": "PURCHASE"
            }
        ],
        "status": "CANCELED",
        "url": "https://api.mercadopago.com/instore-api/integrations/v1/intents/1234567-12345-12345678-1234567890/point"
    },
    "date_created": "2023-07-27 20:24:21.776642198-0400",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 12345667
}

```
------------

## Devolver un pago

Si, una vez que el pago fue realizado, necesitas realizar una devolución de ese dinero percibido, recomendamos [crear un reembolso](/developers/es/reference/chargebacks/_payments_id_refunds/post) realizando una llamada POST a la API. 

Si, en cambio, quieres hacer un reembolso manual, sigue los pasos a continuación:

1. En tu dispositivo Point, presiona el botón **Menú**.
2. Dirígete a la opción “Últimos pagos” y selecciona el pago que deseas devolver.
3. Presiona la opción “Devolver cobro”, y confirma esa devolución.