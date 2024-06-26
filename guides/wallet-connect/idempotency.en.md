# Idempotency

Connection problems or service outages can interrupt communication when sending or receiving data to create an payment.

To ensure the correct creation of an payment, you can make a new attempt to send the data, however, it is possible that it has already been created and due to the interruption you have not received the correct response. Therefore, these retries will create a new payment.

To avoid duplication, it is mandatory to send a unique key in the header `X-Idempotency-Key` that identifies the creation of a single payment. This way, when a new attempt is made, the same key can be sent to indicate that it is the same process.

> NOTE
>
> Important
>
> If the payment has already been created, your information is returned without creating a new payment.

Check below the diagram that illustrates how the `Idempotency Key` works in the process of creating an payment.

![idempotency-flow](/images/wallet-connect/idempotency.en.png)

## Send request

[[[
```curl

curl -X POST \
    -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
    -H 'Authorization: Bearer ACCESS_TOKEN'
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -d '{
        "wallet_payment":{
           "transaction_amount":700.50,
           "description":"Payment Description",
           "external_reference":"Pago_123"     
        },
       "payer":{
           "token":"PAYER_TOKEN",
           "type_token": "wallet-token"
        }
      }'

```
]]]

When running the `request` you may receive different types of responses originating from specific reasons. See the [Responses](/developers/en/docs/wallet-connect/payment-flow/idempotency/responses) section for more information.