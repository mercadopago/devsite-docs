# Create and manage intents on Point devices

Below, you can see how to create an intent on Point devices, how to check its status, and how to cancel it, as well as how to configure its notifications.

## Create intent on Point devices

To create an intent on your Point device, you have two options:
 * You can make a POST call to the endpoint [Create intent for a device associated with a point of sale](/developers/en/reference/instore-api/), replacing `external.id` with the value chosen when creating the point of sale.
 * Alternatively, you can make a POST call to the endpoint [Create intent for a POS device](/developers/en/reference/instore-api/), replacing `device.id` with the value obtained when querying the list of devices.

You can choose the option that best suits your needs. The result will be the same, and you will have created an intent for the chosen Point device.


----[mlb]----
> Keep in mind that for the `amount` field, the minimum allowed amount is 1.00, and the maximum is 70000.00.

------------

----[mla]----
> Keep in mind that for the `amount` field, the minimum allowed amount is 5.00, and the maximum is 4000000.00.

------------

## Check the status of an intent on Point devices

To know the current status of an intent, make a GET call to the endpoint [Get information about an intent](/developers/en/reference/instore-api/), replacing `intent_id` with the value obtained in that field when creating it.

Here's an example of a response when querying the status:

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

Within the `status` field, you can see the status of the intent. The only final states are `CANCELED`, `CLOSED`, `EXPIRED`, `ERROR`, and `CONFIRMATION_REQUIRED`.
For more information about the possible states of an intent, refer to the [Glossary](/developers/en/docs/ecosistema-presencial/glossary).

Please note that for the final state `Closed`, you will see an additional `results` node in the response. This node contains payment information related to the results of the operation; that is, the list of transactions associated with it.

This object is composed as follows:

| Value | Description |
|---|---|
| `id` | It is the payment ID. With it, you can go to the [Payments API](/developers/en/reference/payments/_payments_search/get) and check the final status of the payment. |
| `source` | Entity to which the `id` belongs. It will return the value `PAYMENT` when the payment flow has been created correctly. Go to the [Payments API](/developers/en/reference/payments/_payments_search/get) to check the final status of the payment with the received `id`. |

## Cancel an intent on Point devices

If the payment has not been made yet and you haven't loaded the intent on the device, you can cancel a payment intent and make that attempt no longer available for processing. 
Make a DELETE call to the endpoint [Get information about an intent](/developpers/en/reference/instore-api/), replacing `external.id` and `intent_id` with the values obtained when creating a cash register and the payment intent, respectively.

> WARNING
>
> Important
>
> Please note that you can only cancel an intent using this method if its status is `opened`. If this is not the current state of the intent you are trying to cancel and instead it is `on_terminal`, you must do it from the Point device. For more information about the possible states of an intent, refer to the [Glossary](/developers/en/docs/ecosistema-presencial/glossary).

## Configure notifications

Additionally, we recommend **setting up your Webhook notifications**. These will facilitate receiving real-time information every time an intent reaches a final state.

To configure your notifications, follow the instructions provided in the [Webhooks notifications documentation](/developers/en/docs/ecosistema-presencial/additional-content/your-integrations/notifications/webhooks).

> WARNING
>
> Important
>
> To set up notifications for the Presencial Ecosystem, you must use the event **Integraciones Presenciales**, whose message will contain the `type` field with the value `topic_instore_integration_wh`. Through this event, you will receive notifications of final states of the intents, whether processed by Point or QR in integrated mode.

Here's an example of a notification you can receive for a Point device when an intent reaches a final `status`. Keep in mind that the information notified within the `data` node will depend on the information used to create the intent.

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

## Refunding a payment 

If, once the payment has been made, you need to refund that received money, follow the steps below: 
1. On your Point device, press the **Menu** button. 
2. Go to the "Last payments" option and select the payment you want to refund. 
3. Click on "Refund charge" option, and confirm the refund.
