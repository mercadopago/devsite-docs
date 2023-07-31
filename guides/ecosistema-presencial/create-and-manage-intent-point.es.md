# Crear y administrar intents en dispositivos Point

## Crear intent en dispositivos Point

Para crear un intent en tu dispositivo Point, realiza una llamada POST a la API [https://api.mercadopago.com/instore-api/integrations/v1/intents/point/pos/{external.id}}]() reemplazando `external.id` por el valor obtenido al crear la caja.

----[mlb]----
> Ten en cuenta que para el campo `amount`, el monto mínimo permitido es 1.00, y el máximo 70000.00. 
------------

----[mla]----
> Ten en cuenta que para el campo `amount`, el monto mínimo permitido es 5.00, y el máximo 4000000.00.
------------

Adicionalmente, recomendamos **configurar tus notificaciones Webhook**. Estas facilitarán que recibas información en tiempo real cada vez que un intent llega a un estado final. 

Para configurar tus notificaciones, sigue las instrucciones proporcionadas en la [documentación de notificaciones Webhooks](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/notifications/webhooks).

A continuación, te mostramos un ejemplo de notificación que puedes recibir para un dispositivo Point cuando un intent llega a un estado (`status`) final. Ten en cuenta que la información que se notifica dentro del nodo `data` va a depender de la información con la que se cree el intent.

``` json
{
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
    "id": "1234567-12345-12345678-1234567890",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 12345667
}

```

## Consultar el estado de un intent en dispositivos Point

Para conocer el estado actual de un intent, realiza una llamada GET a la API [https://api.mercadopago.com/instore-api/integrations/v1/intents/{{intent_id}}/point](), reemplazando `intent_id` por el valor obtenido en ese campo al momento de crearlo. 

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
            ],
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
Para obtener más información sobre los estados posibles de un intent, dirígete al [Glosario](/developers/es/docs/ecosistema-presencial/additional-content/glossary).

Ten en cuenta que, para el estado final `Closed`,  verás en la respuesta el nodo adicional `results`. Este nodo contiene la información del pago relacionada a los resultados de la operación; es decir, el listado de transacciones asociadas a la misma. 

Este objeto se compone de la siguiente manera: 

| Valor | Descripción |
|---|---|
| `id` | Es la identificación del pago. Con ella, puedes dirigirte a [Payments API](/developers/es/reference/payments/_payments_search/get) y consultar el estado final del pago. |
| `source` | Entidad a la que pertenece el `id`.  Arrojará el valor `PAYMENT` cuando el flujo del pago se haya creado correctamente. Dirígete a [Payments API](/developers/es/reference/payments/_payments_search/get) para verificar el estado final del pago con el `id` recibido. |


## Cancelar un intent en dispositivos Point

Si todavía no se ha realizado el pago y no has cargado el intent en el dispositivo, puedes cancelar una intención de pago y hacer que ese intento ya no esté disponible para su procesamiento. 
Realiza una llamada DELETE a la API [https://api.mercadopago.com/instore-api/integrations/v1/intents/{{intent_id}}/point/pos/{{external.id}}]() , reemplazando `external.id` e `intent_id` por los valores obtenidos al crear una caja y el intento de pago, respectivamente.

> WARNING
>
> Importante
>
> Ten en cuenta que sólo se permite la cancelación de un intent por este método si su estado es `opened`. En caso de que este no sea el estado actual del intent que estás queriendo cancelar y, en cambio, sea `on_terminal`, deberás hacerlo desde el dispositivo Point. Para más información sobre los posibles estados de un intent, dirígete al [Glosario](/developers/es/docs/ecosistema-presencial/additional-content/glossary).