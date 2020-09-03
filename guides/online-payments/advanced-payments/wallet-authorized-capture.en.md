---
  indexable: false
---

# Deferred Capture

* First, you must authorize the payment by sending the `capture` field as `false`.
* Then the obtained Advanced Payment `id` is used to capture a `PUT`.

#### Request
```curl
curl -X PUT \
    -H 'Accept: application/json' \
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
