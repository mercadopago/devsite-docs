# Capturando pagamentos

Uma vez que já se conte com o access token do pagador, pode-se utilizá-lo para realizar pagamentos, seguindo os exemplos definidos mais abaixo.

### Pagamento com captura direta

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=SELLER_TOKEN' \
    -d '{...}'
```

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   }
}
```

#### Response Payment Approved
`HTTP Status 201 Created`
```json
{
   "id":90458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google Pay"
   },
   "payments":[
      {
         "id":3870106238,
         "status":"approved",
         "status_detail":"accredited",
         "payment_type_id":"account_money",
         "payment_method_id":"account_money",
         "transaction_amount":700.50,
         "description":"Payment Google Pay",
         "capture":true
      }
   ],
   "payer":{
      "id":786547
   },
   "binary_mode":true 
}
```

#### Response Payment Rejected
`HTTP Status 201 Created`
```json
{
   "id":90458724,
   "status":"rejected",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google Pay"
   },
   "payments":[
      {
         "id":null,
         "status":"rejected",
         "status_detail":"insufficient_amount",
         "payment_type_id":"account_money",
         "payment_method_id":"account_money",
         "transaction_amount":700.50,
         "description":"Payment Google Pay",
         "capture":true
      }
   ],
   "payer":{
      "id":786547
   },
   "binary_mode":true 
}
```

#### Response Failed
`HTTP Status 4xx/5xx`
```json
{
   "status": "4xx/5xx",
   "error":  "error",
   "message": "Invalid access token.",
   "cause": [
    {
      "code":"4xx|YY or  5xx|YY",
      "message": "Invalid access token",
      "data": "{}"
    }
   ]
}
```
