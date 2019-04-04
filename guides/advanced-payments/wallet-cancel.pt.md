# Cancelar um pagamento pendente

Se um pagamento não for aprovado no no ato, ele poderá ser criado no estado `pendente`. Isso pode acontecer se o pagamento entrar em revisão manual.

Após a aprovação ou recusa, essa alteração será informada via webhook.

Se, após aguardar um determinado período de tempo, você quiser cancelar esse pagamento, poderá chamar o seguinte endpoint:


#### Request
```curl
curl -X PUT \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=SELLER_TOKEN' \
    -d '{...}'
```

#### Body
`HTTP Status 200 OK`
```json
{
   "status":"cancelled"
}
```

#### Response
`HTTP Status 200 OK`
```json
{
   "id":10458724,
   "status":"cancelled",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
      "external_reference":"Pago_123"
   },
   "payments":[
      {
         "id":3870106238,
         "status":"cancelled",
         "status_detail":"by_collector",
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
      "id":786547
   },
   "binary_mode":true,
   "date_created":"2018-10-20T09:34:20.518-04:00",
   "date_last_updated":"2018-10-20T09:34:20.518-04:00"
}
```
