## Get payment information

This endpoint is used to obtain the data of an Advanced Payment made from your id. See the diagram below that illustrates the payment capture process through the Advanced Payments API.

![get-payment-info](/images/wallet-connect/get-payment-information.en.png)


To obtain information on a specific payment, send a **GET** to the endpoint [/v1/advanced_payments/{advanced_payment_id}](/developers/en/reference/wallet_connect/_advanced_payments_advanced_payment_id/get) and execute the request or, if you prefer, use the `curl` below.

[[[
```curl

curl -X GET \
    'https://api.mercadopago.com/v1/advanced_payments/ADVANCED_PAYMENT_ID' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'

```
]]]

When running the `request` you may receive different types of responses originating from specific reasons. See the [Responses](/developers/en/docs/wallet-connect/payment-flow/capture-payment/responses) section for more information.
