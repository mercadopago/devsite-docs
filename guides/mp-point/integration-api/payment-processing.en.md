#  Payment processing

To start processing your payments with Point of Sale (POS), follow the steps below.

## Get the list of your available devices

Before creating a payment intent, you must [obtain the list of Point devices](/developers/en/reference/integrations_api/_point_integration-api_devices/get) associated with your account. You can do it through the following call:

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices?offset=0&limit=50' \ 
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' 
```

You will receive a response like this:

```json
{
    "devices": [
        {
            "id": "INGENICO_MOVE2500__ING-ARG-1123345670",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "PDV"
        },
        {
            "id": "INGENICO_MOVE2500__ING-ARG-0987654P",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "STANDALONE"
        },
        {
            "id": "INGENICO_MOVE2500__ING-5467853",
            "operating_mode": "PDV",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
        },
        {
            "id": "INGENICO_MOVE2500__ING-ARG-1233456",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "STANDALONE"
        }
    ],
    "paging": {
        "total": 4,
        "limit": 50,
        "offset": 0
    }
}

```

## Create the payment intent

A payment intent is a call that contains all the details of the transaction to be made, and it must be created in order to start a payment. It is an attempt that, if successful, will return a payment `id`  and its status.

You can [create a payment intent](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post) and assign it to your Point device in the following way:

----[mla]----
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
   "amount": 1500,
   "additional_info": {
       "external_reference": "4561ads-das4das4-das4754-das456",
       "print_on_terminal": true,
       "ticket_number": "S0392JED"
   }
}'
```

| Field | Description |
|---|---|
| `amount` | Total amount of the payment intent. <br>**Minimum amount allowed**: 500 (POS and SMART devices). <br>**Maximum amount allowed**: 400000000 (both devices). <br>**Important**: this field does not allow decimal points. Therefore, if you want to generate a payment intent, you must consider the two decimals of the value in its total. For example: to generate payment order value "15.00" you must enter "1500". |
| `external_reference` | Field exclusively used by the integrator to include references to their system. |
| `print_on_terminal` | Field that determines if the device prints the payment receipt. |
| `ticket_number` | Ticket number of the payment intent. |

In response, you will receive something similar to this:

```json
{
 "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
 "device_id": "INGENICO_MOVE2500__ING-ARG-14886780",
 "amount": 1500,
 "additional_info": {
     "external_reference": "4561ads-das4das4-das4754-das456",
     "print_on_terminal": true,
     "ticket_number": "S0392JED"
 }
}
```

------------
----[mlb]----
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "amount": 1500,
    "description": “this is an example”,
    "payment": {
      "installments": 1,
      "type": “credit_card”
     },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}'
```

| Field | Description |
|---|---|
| `amount` | Total amount of the payment intent. <br>**Minimum amount allowed**: 100 (POS and SMART devices). <br>**Maximum amount allowed**: 7000000 (both devices). <br>**Important**: this field does not allow decimal points. Therefore, if you want to generate a payment intent, you must consider the two decimals of the value in its total. For example: to generate payment order value "15.00" you must enter "1500". |
| `description` | Description of payment intent. |
| `payment.type` | Payment method type. |
| `payment.installments` | Number of payment installments |
| `payment.installments_cost` | Cost for payment installments. This field determines who takes the cost and the accepted values are `seller` and `buyer`. |
| `external_reference` | Field exclusively used by the integrator to include references to their system. |
| `print_on_terminal` | Field that determines if the device prints the payment receipt. |

In response, you will receive something similar to this:

```json
{
  "id":"7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id":"INGENICO_MOVE2500__ING-ARG-14886780",
  "amount":1500,
  "description":"this is an example",
  "payment":{
     "type":"credit_card",
     "installments":1,
     "installments_cost":"seller"
  },
  "additional_info":{
     "external_reference":"4561ads-das4das4-das4754-das456",
     "print_on_terminal":true
  }
}
```

------------
----[mlm]----

```curl

curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN'  \
--data-raw '{
    "amount": 1500,
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}'

```

| Field | Description |
|---|---|
| `amount` | Total amount of the payment intent. <br>**Minimum amount allowed**: 500 (SMART devices). <br>**Maximum amount allowed**: 35000000. <br>**Important**: this field does not allow decimal points. Therefore, if you want to generate a payment intent, you must consider the two decimals of the value in its total. For example: to generate payment order value "15.00" you must enter "1500". |
| `external_reference` | Field exclusively used by the integrator to include references to their system. |
| `print_on_terminal` | Field that determines if the device prints the payment receipt. |

You will receive a response like this:

[[[
```json

{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id": "PAX_A910__SMARTPOS123456789075",
  "amount": 1500,
  "additional_info": {
      "external_reference": "4561ads-das4das4-das4754-das456",
      "print_on_terminal": true
  }
}
```
]]]

------------

Please note that payment intents are the foundation for processing payments with Point devices. For this reason, it is important that you register and save the data obtained during their creation, especially their `id`.

> NOTE
>
> Recommendation
>
> You can use the [Point Simulator](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/point-simulator) to safely test your integration and the creation of payment intents.

## Process your payment intent

Once the payment intent is created, you can retrieve it from your Point device.

On **Point Plus and Point Pro 2** devices, you will need to press the **green button** to initiate the payment collection.

On **Point Smart** devices, the payment process will automatically begin once the payment intent is created. If this doesn't happen, press the **Update** button.

Then, on any of the devices, follow the steps shown on the screen afterwards to complete the payment.

> WARNING
>
> Important
>
> We recommend assessing your [integration’s quality](/developers/en/docs/mp-point/how-tos/integration-quality) to check if you are meeting the Mercado Pago quality and security standards that would help you obtain a good payment approval rate.

## Check the status of your payment intent

If you want to know the status of a particular payment intent, you can [check the current status of your payment intent](/developers/en/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) using the `id` that you received in the response when creating it.

Remember that `id`and `status`of the **payment intent** are not the same as `id`and `status`of the payment. In this case, you will be trying to obtain the details of an attempt. If you want to check out all the information corresponding to the payment, access the [Payment API section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) in our API Reference.

> WARNING
>
> Important
>
> The main recommended mechanism to know the result of a payment intent is the subscription to [integration notifications](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). The endpoint presented here is recommended only as an alternative mechanism.

----[mlm]----

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' 
```
------------

----[mla, mlb]----

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/:paymentIntentID' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN'  
```
------------

You will receive a response similar to this one below:

----[mlb]----
``` json
{
  "state":"FINISHED",
  "id":"f8f50814-a8c5-4524-95b6-672958523121",
  "device_id":"GERTEC_MP35P__8701016695109435",
  "description":"this is an example",
  "amount":1500,
  "payment":{
     "type":"credit_card",
     "installments":1
  },
  "additional_info":{
     "external_reference":"4561ads-das4das4-das4754-das456",
     "print_on_terminal":true
  }
}
```

------------
----[mla]----
``` json
{
   "state": "FINISHED",
   "id": "0aa0519d-d985-4e83-b62d-dda123456789",
   "device_id": "88731317_INGENICO_MOVE2500_ING-ARG-14123456",
   "amount": 600,
   "payment": {
       "id": "11123456789"
   },
   "additional_info": {
       "ticket_number": "123456789123456789"
   }
}
```

------------
----[mlm]----

[[[
```json

{
    "state": "FINISHED",
    "id": "0aa0519d-d985-4e83-b62d-dda123456789",
    "device_id": "PAX_A910__SMARTPOS1234567890123",
    "amount": 600,
    "payment": {
        "id": "11123456789"
    },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456"
    }
}
```
]]]

------------

> WARNING
>
> Important
>
> `Confirmation_required` is a final status and will not change. If you receive it as a response to the payment intent, you must check on your device the status of the payment, using the `payment_id` given in said response. Do not deliver your service or product until you verify it.

You can check all the possible status of a payment intent by accessing our [Glossary](/developers/en/docs/mp-point/integration-api/glossary).

If, on the other hand, you want to query a **list of payment intents and their final states**, you can do so through the endpoint [Get list of payment intents](/developers/en/reference/integrations_api/_point_integration-api_payment-intents_events/get). Please note that you will need to assign a date range to the query, which cannot exceed 30 days.

This call can also be useful if you don't know the `payment_intent_id` of a specific payment intent.

## Cancel a payment intent

If you want to, you can cancel a payment intent assigned to a Point device. To do so,  you have two posibilities:

* If the status of the intent is `opened` and it has not yet been sent to the terminal, you can [cancel it via API](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents_paymentintentid/delete) by making the following call:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents/{paymentintentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN'  \
```

You will receive this response:

``` json
{
 "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```

* If the status of the payment intent is `on_terminal`, you will need to cancel it directly from the Point device.