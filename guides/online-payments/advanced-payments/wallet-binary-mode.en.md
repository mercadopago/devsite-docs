---
  indexable: false
---

# Binary Payment

#### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer SELLER_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -d '{...}'
```

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   },
   "binary_mode": true
}

```

#### Response
`HTTP Status 201 Created`
```json
{
   "id":10458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment",
      "external_reference":"Pago_123"
   },
   "payments":[
      {
         "id":3870106238,
         "status":"approved",
         "status_detail":"accredited",
         "payment_type_id":"account_money",
         "payment_method_id":"account_money",
         "transaction_amount":700.50,
         "installments":1,
         "description":"Payment",
         "capture":true,
         "external_reference":"Pago_123"
      }
   ],
   "payer":{
      "id":786547
   },
   "binary_mode":true,
   "date_created":"2018-10-20T09:34:20.518-04:00",
   "date_last_updated":"2018-10-20T09:34:20.518-04:00"
}
```
