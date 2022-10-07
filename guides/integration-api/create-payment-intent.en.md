#  Start processing your payments

To start processing your payments, follow these steps:

## Get the list of your available devices

Before creating a payment intent, you must obtain the list of Point devices associated with your account. You can do it in the following way:

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices?offset=0&limit=50' \ 
--header 'Authorization: Bearer ${ACCESS_TOKEN}' 
```

You will receive a response like this:

----[mlb, mla]----

```json
{
   "devices": [
       {
           "id": "INGENICO_MOVE2500__ING-ARG-1123345670",
           "operating_mode": "STANDALONE"
       },
       {
           "id": "INGENICO_MOVE2500__ING-ARG-0987654P",
           "operating_mode": "STANDALONE"
       },
       {
           "id": "INGENICO_MOVE2500__ING-5467853",
           "operating_mode": "PDV"
       },
       {
           "id": "INGENICO_MOVE2500__ING-ARG-1233456",
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
------------

----[mlm]----

```json
{
   "devices": [
       {
           "id": "PAX_A910__SMARTPOS1234567890",
           "operating_mode": "STANDALONE"
       },
       {
           "id": "PAX_A910__SMARTPOS12345678901",
           "operating_mode": "STANDALONE"
       },
       {
           "id": "INGENICO_MOVE2500__ING-5467853",
           "operating_mode": "PDV"
       },
       {
           "id": "PAX_A910__SMARTPOS123456789042",
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

------------

## Create the payment intent

You can create a payment intent and assign it to your Point device in the following way:

----[mla]----
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{{device.id}}/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--data-raw '{
   "amount": 1500,
   "additional_info": {
       "external_reference": "4561ads-das4das4-das4754-das456",
       "print_on_terminal": true,
       "ticket_number": "S0392JED"
   }
}'
```

Field | Description
:--- | :--- |
'amount'             | Total amount of the payment intent. **Important**: this field does not allow decimal points. Therefore, if you want to generate a payment intent, you must consider the two decimals of the value in its total. For example: to generate payment order value "15.00" you must enter "1500". |
'external_reference' | Field exclusively used by the integrator to include references to their system.|
'print_on_terminal'  | Field that determines if the device prints the payment receipt. |
'ticket_number'      | Ticket number of the payment intent. |

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
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
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
Field | Description
:--- | :---
amount                    | Total amount of the payment intent. |
description               | Description of payment intent. |
payment.type              | Payment method type. |
payment.installments      | Number of payment installments. |
payment.installments_cost | Cost for payment installments. This field determines who takes the cost and the accepted values are `seller` and `buyer` |
external_reference        | Field exclusively used by the integrator to include references to their system. |
print_on_terminal         | Field that determines if the device prints the payment receipt. |

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

curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--data-raw '{
    "amount": 1500,
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}'
```

| Campo |  Descrição |
| --- | --- |
| amount | Total amount of the payment intention. Important: this field does not allow decimal places, so if you want to generate a payment intent, you must consider the two decimal places of the total amount. For example: to generate a payment order for the amount "15.00" you must enter "1500". |
| external_reference | Integrator-only field to include references specific to your system. |
| print_on_terminal | Field that determines whether the device prints the payment receipt. |

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

## Cancel a payment intent

You can cancel a payment intent assigned to a Point device in the following way:


``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents/:paymentIntentId' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

You will receive this response:

``` json
{
 "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```

## Process your payment intent

Once the payment intent has been created, you can obtain it from your Point device by pressing on the key to pay (in the case of Point Plus and Point Pro 2 the green button, in the case of the Point Smart the digital button “Charge now”) and following the steps shown on the screen to complete the payment.


## Check the status of your payment intent

You can check the current status of your payment intent using the `id` that you received in the response when creating the payment intent.

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/:paymentIntentID' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

Sample response:

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

> NOTE
>
> Note
>
> Check out all the information corresponding to the payment in the section [Payment API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) of our API Reference.
