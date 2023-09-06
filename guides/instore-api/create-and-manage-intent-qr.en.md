# Create and manage intents for QR

Below, you can see how to create an intent for QR, how to check its status, and how to cancel it, as well as how to configure its notifications.

## Create intent for QR

To create an intent using QR, make a POST call to the endpoint ----[mla]----[Create QR intent](/developers/en/reference/instore_api_mla/_instore-api_integrationsintents_qr_pos_external_id/post)------------ ----[mlb]----[Create QR intent](/developers/en/reference/instore_api_mlb/_instore-api_integrationsintents_qr_pos_external_id/post)------------ replacing `external.id` for the value with which the point of sale was created.

Here is an example payload for creating an intent for QR:


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

Please note that if you provide the necessary information for the `item` field in this type of operation, the `amount` field will not be required. It will be calculated based on the `total_amount` of each item. Similarly, if you provide the `amount` field, you do not need to send information for the items.



## Check the status of a QR intent

To check the current status of an intent, make a GET call to the endpoint ----[mla]----[Get intent information](/developers/en/reference/instore_api_mla/_instore-api_integrationsintents_intent_id_qr/get)------------ ----[mlb]----[Get intent information](/developers/en/reference/instore_api_mlb/_instore-api_integrationsintents_intent_id_qr/get)------------, replacing `intent_id` with the value obtained in that field at the time of creation.

Below is an example response when querying the status:

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

Within the `status` field, you can see the state of the intent. The only final states are `CANCELED`, `CLOSED`, and `EXPIRED`. For more information on the possible states of an intent, refer to the [Glossary](/developers/en/docs/instore-api/glossary).

Note that for the final state `CLOSED`, you will see an additional `results` node in the response. This node contains payment information related to the operation results, namely, the list of transactions associated with it.

This object is structured as follows:

| Value | Description |
|---|---|
| `id` | Payment identification. You can use it to go to the [Payments API](/developers/en/reference/payments/_payments_id/get) and check the final status of the payment. |
| `source` | Entity to which the `id` belongs. It will return `PAYMENT` when the payment flow has been successfully created. Go to [Payments API](/developers/en/reference/payments/_payments_id/get) to verify the final status of the payment with the received `id`. |



## Cancel a QR intent

If the payment has not yet been made, you can cancel an intent and make it no longer available for processing.

Make a DELETE call to the endpoint ----[mla]----[Cancel an intent](/developers/en/reference/instore_api_mla/_instore-api_integrationsintents_intent_id_qr/delete)------------ ----[mlb]----[Cancel an intent](/developers/en/reference/instore_api_mlb/_instore-api_integrationsintents_intent_id_qr/delete)------------, replacing `external.id` and `intent_id` with the values obtained when creating a box and the payment intent, respectively.


## Configure notifications

Additionally, we recommend **setting up your Webhook notifications**. These will help you receive real-time information every time an intent reaches a final state.

To configure your notifications, follow the instructions provided in the [Webhooks notifications documentation](/developers/en/docs/instore-api/additional-content/your-integrations/notifications/webhooks).

> WARNING
>
> Important
>
> To set up notifications for Instore API, you must use the **Instore Integration** event, which will contain the `type` field with the value `topic_instore_integration_wh`. Through this event, you will receive notifications of the final states of intents, whether processed by Point or QR in integrated mode.

Below is an example of a notification you can receive for QR when an intent reaches a final (`status`) state.

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
            }        ],
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
            }        ],
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

## Refunding a Payment 

If, once the payment has been made, you need to refund that received money, we recomend to [Create a refund](/developers/en/reference/chargebacks/_payments_id_refunds/post) by making a POST request to our API.  

If you want to refund the money manually, you can follow the steps below: 

1. In the Mercado Pago app on your mobile device, access the **Activity** section, located in the bottom left corner. 
2. There, select the payment you wish to refund. 
3. Press the "Refund payment" option, and confirm the refund.

