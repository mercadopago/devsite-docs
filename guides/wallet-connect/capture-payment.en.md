# Capture payment

The payment capture is a confirmation of the amount you want to charge from the buyer. At this point in the payment flow, the seller needs a certain payment to be withdrawn from the customer's wallet at the time of its creation.

See the diagram below that illustrates the payment capture process via the Wallet Connect API Payments endpoint.

![Capture-payment-flow](/images/wallet-connect/captured-payment.en.png)

## Send request

When sending the request to the Payments endpoint, ensure that the following attributes are included as shown below.

| Parameter | Description |
| --- | --- |
| X-Idempotency-Key | This parameter must be inserted in the header of all requests. For more information, see the Idempotency section. |
| X-Meli-Session-Id | This parameter can be included in the header of requests. It represents a unique identifier for the buyer's device at the time of purchase. It is mandatory only for integrations belonging to the Gambling industry. If you have any doubts, consult your commercial representative. |
| wallet_payment | Indicates that it is a payment from a previously linked Wallet Connect seller. |
| transaction_amount | Total amount to be charged to the buyer. |
| description | Payment description. |
| external_reference | Payment reference assigned by seller |
| forward_data.sub_merchant | Forwarded data from the `sub_merchant`. Information that payment facilitators must send mandatorily to identify the sub-merchants during the transaction. For more details on each field belonging to `forward_data.sub_merchant`, access the [Submerchants](/developers/en/docs/wallet-connect/payment-flow/capture-payment/submerchants) documentation. |
| payer | Payer information required to create a payment. |
| token | payer_token obtained after completion of the agreement flow. |
| type_token | Type of payment. To use it in the Wallet Connect flow, the “wallet-token” value must be defined. |
| binary_mode | The value of this field is mandatory "true". |

With these parameters in hands, send a **POST** to the endpoint [/v1/advanced_payments](/developers/en/reference/wallet_connect/_advanced_payments/post) and execute the request or, if you prefer, use the `curl` below .

[[[
```curl
curl -X POST \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
    -H 'X-Meli-Session-Id: DEVICE_ID' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -d '{
         "wallet_payment": {
          "transaction_amount": 700.50,
          "description": "Descrição do pagamento",
          "external_reference": "Pago_123"
          "forward_data": {
             "sub_merchant": {
                "sub_merchant_id": 123123,
                "mcc": "5462",
                "country": "BRA",
                "address_door_number": 1,
                "zip": "2222222",
                "document_number": "222222222222222",
                "city": "SÃO PAULO",
                "address_street": "RUA A",
                "legal_name": "LOJINHA DO ZÉ",
                "region_code_iso": "BR-MG",
                "region_code": "BR",
                "document_type": "CNPJ",
                "phone": "123123123",
                "url": "www.nomedofacilitador.com.br"
               }
            }
         },
         "payer": {
            "token": "PAYER_TOKEN",
              "type_token": "wallet-token"
         },
         "binary_mode": true
      }'
```
]]]

When running the `request` you may receive different types of responses originating from specific reasons. See the [Responses](/developers/en/docs/wallet-connect/advanced-payments/capture-payment/returns) section for more information.
