# Subscriptions with pending payment 

Subscriptions with pending payments are a model in which the payment method is not defined when the subscription is created. According to this model, payments automatically go into `pending` status and depend on the users to complete it.

In this case, there are two options: The first one is to update the subscription by defining a payment method through the [/preapproval/{id}](/developers/en/reference/subscriptions/_preapproval_id/put) endpoint. The second one is to share a payment link with the buyer so they can complete the purchase with the payment method of their choice.

To offer **subscriptions without an associated plan and with pending payments**, send a POST with the necessary attributes to the [/preapproval](/developers/en/reference/subscriptions/_preapproval/post) endpoint and then pay attention to the `status` parameter, which must be filled in with the `pending` value. If you prefer, use the _curl_ below.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Authorization: Bearer YOU_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reason": "Yoga classes",
    "external_reference": "YG-1234",
    "payer_email": "test_user_75650838@testuser.com",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "end_date": "2023-07-20T15:59:52.581Z",
        "transaction_amount": 10,
        "currency_id": "BRL"
    },
    "back_url": "https://www.yoursite.com",
    "status": "pending"
}'
```
]]]
