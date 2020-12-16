---
  indexable: false
---

# Captura diferida

* Primero debe autorizarse el pago enviando el campo `capture` en `false`.
* Luego se usa el `id` del Advanced Payment obtenido para capturar realizando un `PUT`.

#### Request
```curl
curl -X PUT \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer SELLER_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID' \
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