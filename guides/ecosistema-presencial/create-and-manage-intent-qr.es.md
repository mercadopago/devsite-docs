# Crear y administrar intents para QR

A continuación, puedes ver cómo crear un intent para QR, cómo consultar su estado, y cómo cancelarlo, así como la vía para configurar sus notificaciones.

## Crear intent para QR

Para crear un intent utilizando QR, realiza una llamada POST al endpoint [Crear intent QR](developers/es/reference/instore-api/integrations/v1/intents/qr/pos) reemplazando `external.id` por el valor obtenido al crear la caja.

A continuación, te mostramos un ejemplo de payload para crear un intent de las tres operaciones disponibles para QR:

* **Creación de una compra (`PURCHASE`)**
  
``` json
{
        "description": "description",
        "external_reference": "external_reference",
        "sponsor": {
         "id": "1234567",
        },
        "operations": [
            {
                "type": "PURCHASE",
                "amount": "14.53",
                "items": [
                    {
                        "sku_number": "sku_number",
                        "external_categories": [
                            {
                                "id": "category_id"
                            }
                        ],
                        "title": "title",
                        "unit_price": "14.53",
                        "quantity": 1,
                        "unit_measure": "UNIT",
                        "total_amount": "14.53"
                    }
                ]
            }
        ],
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC",
                "DYNAMIC"
            ]
        }
}
```

Ten en cuenta que si en este tipo de operaciones envías la información necesaria para el campo `item`, no será requerido el campo `amount`. Este se calculará teniendo en cuenta el `total_amount` de cada uno de los ítems.
De la misma forma, si envías el campo `amount`,  no es necesario que envíes la información correspondiente a los ítems.

* **Creación de un retiro de dinero en efectivo (`CASH_OUT`)**

----[mla]----

``` json
{
        "description": "description",
        "external_reference": "external_reference",
        "sponsor": {
            "id": 1234567,
        },
        "operations": [
            {
                "type": "CASH_OUT",
                "amount": "14.53"
            }
        ],
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC",
                "DYNAMIC"
            ]
        }
}

```

------------
----[mlb]----

``` json
{
        "description": "description",
        "external_reference": "external_reference",
        "sponsor": {
            "id": "1234567",
        },
        "operations": [
            {
                "type": "CASH_OUT",
                "amount": "14.53",
                "additional_configuration": {
                    "fixed_amount": true,
                    "agency_type": "AGTOT",
                    "bank_service_code": "BANK CODE"
                }
            }
        ],
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC",
                "DYNAMIC"
            ]
        }
}

```
------------
    
Para ejecutar esta operación, a diferencia de la creación de un intent de compra, sí es requerido que envíes el valor del campo `amount`.

* **Creación de compra y retiro de dinero en una misma transacción (Extra cash)**

----[mla]----

``` json
{
        "description": "description",
        "external_reference": "external_reference",
        "sponsor": {
            "id": "1234567",
        },
        "operations": [
            {
                "type": "PURCHASE",
                "amount": "14.53",
                "items": [
                    {
                        "sku_number": "sku_number",
                        "external_categories": [
                            {
                                "id": "category_id"
                            }
                        ],
                        "title": "title",
                        "unit_price": "14.53",
                        "quantity": 1,
                        "unit_measure": "UNIT",
                        "total_amount": "14.53"
                    }
                ]
            },
            {
                "type": "CASH_OUT",
                "amount": "14.53"
            }
        ],
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC",
                "DYNAMIC"
            ]
        }
    }

```

------------
----[mlb]----

``` json
{
        "description": "description",
        "external_reference": "external_reference",
        "sponsor": {
            "id": "1234567",
        },
        "operations": [
            {
                "type": "PURCHASE",
                "amount": "14.53",
                "items": [
                    {
                        "sku_number": "sku_number",
                        "external_categories": [
                            {
                                "id": "category_id"
                            }
                        ],
                        "title": "title",
                        "unit_price": "14.53",
                        "quantity": 1,
                        "unit_measure": "UNIT",
                        "total_amount": "14.53"
                    }
                ]
            },
            {
                "type": "CASH_OUT",
                "amount": "14.53",
                "additional_configuration": {
                    "fixed_amount": true,
                    "agency_type": "AGTOT",
                    "bank_service_code": "BANK CODE"
                }
            }
        ],
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC",
                "DYNAMIC"
            ]
        }
}

```
------------

A este payload se aplican las reglas individuales expuestas anteriormente para los intents de compra y retiro de dinero.

## Consultar el estado de un intent para QR

Para conocer el estado actual de un intent, realiza una llamada GET al endpoint [Obtener información de un intent](https://api.mercadopago.com/instore-api/integrations/v1/intents/{{intent_id}}/qr), reemplazando `intent_id` por el valor obtenido en ese campo al momento de crearlo. 

A continuación, te mostramos un ejemplo de respuesta a la consulta de un estado:

``` json
{
    "id": "12345-3245-123423-234235", 
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
        },
        {
            "type": "CASH_OUT",
            ....
            "results": [
                {
                    "id": 123456,
                    "source": "PAYOUT"
                }
            ],
            ...
        }
    ],
    "enabler_configuration": {
        "qr_payment_mode": [
            "STATIC",
            "DYNAMIC"
        ]
    }
}

```

Dentro del campo `status` podrás ver el estado del intent. Los únicos estados finales son `CANCELED`, `CLOSED` y `EXPIRED`.  
Para obtener más información sobre los estados posibles de un intent, dirígete al [Glosario](/developers/es/docs/ecosistema-presencial/glossary).

Ten en cuenta que, para el estado final `Closed`,  verás en la respuesta el nodo adicional `results`. Este nodo contiene la información del pago relacionada a los resultados de la operación; es decir, el listado de transacciones asociadas a la misma. 

Este objeto se compone de la siguiente manera: 

| Valor | Descripción |
|---|---|
| `id` | Es la identificación del pago. Con ella, puedes dirigirte a [Payments API](/developers/es/reference/payments/_payments_search/get) y consultar el estado final del pago. |
| `source` | Entidad a la que pertenece el `id`.  Arrojará el valor `PAYMENT` cuando el flujo del pago se haya creado correctamente. Dirígete a [Payments API](/developers/es/reference/payments/_payments_search/get) para verificar el estado final del pago con el `id` recibido. |

Esto ocurre tanto para las operaciones `PURCHASE` como `CASH_OUT`. 

## Cancelar un intent para QR

Si todavía no se ha realizado el pago, puedes cancelar un intent y hacer que ya no esté disponible para su procesamiento. 

Realiza una llamada DELETE al endpoint [Obtener información de un intent](https://api.mercadopago.com/instore-api/integrations/v1/intents/{{intent_id}}/qr/pos/{{external.id}}), reemplazando `external.id` e `intent_id` por los valores obtenidos al crear una caja y el intento de pago, respectivamente.

## Configurar notificaciones

Adicionalmente, recomendamos **configurar tus notificaciones Webhook**. Estas facilitarán que recibas información en tiempo real cada vez que un intent llega a un estado final. 

Para configurar tus notificaciones, sigue las instrucciones proporcionadas en la [documentación de notificaciones Webhooks](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/notifications/webhooks).

> WARNING
>
> Importante
>
> Para configurar las notificaciones de Ecosistema Presencial, deberás utilizar el evento **Integraciones Presenciales**, cuyo mensaje contendrá el campo `type` con el valor `topic_instore_integration_wh`.  Por medio de este evento recibirás las notificaciones de estados finales de los intent, ya sean procesados por Point o QR en modo integrado.  

A continuación, te mostramos un ejemplo de notificación que puedes recibir para QR cuando un intent llega a un estado (`status`) final. 

----[mla]----

``` json
{
    "action": "topic_instore_integration_wh.application.authorized",
    "api_version": "v1",
    "data": {
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC" ,"DYNAMIC" 
            ]
        },
        "qr": {
           "data":"qr-data"
        },
        "external_reference": "123132342341",
        "description": "abc",
        "id": "1234567-12345-12345678-1234567890",
        "operations": [
            {
                "amount": "10.14",
                "type": "PURCHASE",
                "items": [
                   {
                    "sku_number": "sku_number",
                    "external_categories": [
                        {
                            "id": "category_id"
                        }
                    ],
                    "title": "title",
                    "unit_price": "10.14",
                    "quantity": 1,
                    "unit_measure": "UNIT",
                    "total_amount": "10.14"
                }
              ]
            },
            {
                "amount": "12.20",
                "type": "CASH_OUT"
            }
        ],
        "status": "CANCELED",
        "url": "https://api.mercadopago.com/instore-api/integrations/v1/intents/1234567-12345-12345678-1234567890/qr"
    },
    "date_created": "2023-07-27 20:24:21.776642198-0400",
    "id": "1234567-12345-12345678-1234567890",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 123456678
}

```

------------
----[mlb]----

``` json
{
    "action": "topic_instore_integration_wh.application.authorized",
    "api_version": "v1",
    "data": {
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC" ,"DYNAMIC" 
            ]
        },
        "qr": {
           "data":"qr-data"
        },

        "external_reference": "123132342341",
        "description": "abc",
        "id": "1234567-12345-12345678-1234567890",
        "operations": [
            {
                "amount": "10.14",
                "type": "PURCHASE",
                "items": [
                   {
                    "sku_number": "sku_number",
                    "external_categories": [
                        {
                            "id": "category_id"
                        }
                    ],
                    "title": "title",
                    "unit_price": "10.14",
                    "quantity": 1,
                    "unit_measure": "UNIT",
                    "total_amount": "10.14"
                }
              ]
            },
            {
                "amount": "12.20",
                "type": "CASH_OUT",
                "additional_configuration": {
                   "fixed_amount": true,
                   "agency_type": "AGTOT",
                   "bank_service_code": "BANK CODE"
                }
            }
        ],
        "status": "CANCELED",
        "url": "https://api.mercadopago.com/instore-api/integrations/v1/intents/1234567-12345-12345678-1234567890/qr"
    },
    "date_created": "2023-07-27 20:24:21.776642198-0400",
    "id": "1234567-12345-12345678-1234567890",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 12345667
}

```
------------

## Devolver un pago

Si, una vez que el pago fue realizado, necesitas realizar una devolución de ese dinero percibido, sigue los pasos a continuación:

1. En la App de Mercado Pago en tu móvil, accede a la sección **Actividad**, ubicada en la esquina inferior izquierda.
2. Allí, selecciona el pago que deseas devolver.
3. Presiona la opción “Devolver cobro”, y confirma esa devolución.