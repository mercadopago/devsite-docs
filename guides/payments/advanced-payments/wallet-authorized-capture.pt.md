# Captura diferida

* O pagamento deve primeiro ser autorizado enviando o campo `capture` para ` false`.
* Então o `id` do Advanced Payment obtido para capturar é usado, fazendo um `PUT`.

#### Request
```curl
curl -X PUT \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=SELLER_TOKEN' \
    -d '{...}'
```

#### Body
```json
{
   "wallet_payment":{
      "access_token":"PAYER_ACCESS_TOKEN",
      "capture":true
   }
}

```

#### Response
`HTTP Status 200 OK`
```json
{
   "id":10458724,
   "status":"approved",
   ...
}
```
