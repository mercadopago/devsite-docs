---
  indexable: false
---

# Captura diferida

* Primero debe autorizarse el pago enviando el campo `capture` en `false`.
* Luego se usa el `id` del Advanced Payment obtenido para capturar realizando un `PUT`.

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