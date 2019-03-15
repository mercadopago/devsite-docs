# Obtener un pago existente

#### Request
```curl
curl -X GET \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=SELLER_TOKEN' \
```

#### Response
`HTTP Status 200 OK`
```json
{
   "id":10458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
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
         "description":"Payment Google",
         "capture":true,
         "external_reference":"Pago_123"
      }
   ],
   "payer":{
      "id":78654
   },
   "binary_mode":true,
   "date_created":"2018-10-20T09:34:20.518-04:00",
   "date_last_updated":"2018-10-20T09:34:20.518-04:00"
}
```