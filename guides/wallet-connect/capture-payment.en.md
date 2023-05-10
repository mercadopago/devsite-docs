# Capture payment

The payment capture is a confirmation of the amount you want to charge from the buyer. At this point in the payment flow, the seller needs a certain payment to be withdrawn from the customer's wallet at the time of its creation.

See the diagram below that illustrates the payment capture process through the Advanced Payments API.

![Capture-payment-flow](/images/wallet-connect/captured-payment.en.png)

## Send request

When sending the request to the Advanced Payments endpoint, ensure that the following attributes are included as shown below.

| Parameter | Description |
| --- | --- |
| X-Idempotency-Key | This parameter must be inserted in the header of all requests. For more information, see the Idempotency section. |
| wallet_payment | Indicates that it is an advanced payment from a previously linked Wallet Connect seller. |
| transaction_amount | Total amount to be charged to the buyer. |
| description | Payment description. |
| external_reference | Payment reference assigned by seller |
| payer | Payer information required to create advanced payment |
| token | payer_token obtained after completion of the agreement flow. |
| type_token | Type of payment, to use it in the Wallet Connect flow, the “wallet-token” value must be defined. |
| binary_mode | The value of this field is mandatory "true". |

With these parameters in hands, send a **POST** to the endpoint [/v1/advanced_payments](/developers/en/reference/wallet_connect/_advanced_payments/post) and execute the request or, if you prefer, use the `curl` below .

[[[
```curl

curl -X POST \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -d '{
           "wallet_payment":{
              "transaction_amount":700.50,
              "description":"Payment Description",
              "external_reference":"Pago_123"     
           },
           "payer":{
              "token":"PAYER_TOKEN",
              "type_token": "wallet-token"
            },
           "binary_mode": true
        }'


```
]]]

When running the `request` you may receive different types of responses originating from specific reasons. See the [Responses](/developers/en/docs/wallet-connect/advanced-payments/capture-payment/returns) section for more information.
