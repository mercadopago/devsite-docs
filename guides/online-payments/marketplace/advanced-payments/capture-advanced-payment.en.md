---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Capture an Advanced Payment

The Advanced Payment API allows you to make payments of the [Authorization and Capture](https://www.mercadopago.com.br/developers/en/guides/online-payments/checkout-api/other-features) type. For these cases, an Advanced Payment must be created with the `capture` field as `false`, which will reserve the amount until it is captured.

To capture it you must do as follows:

#### Request
```curl
curl -X PUT \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID' \
    -d '{...}'
```

#### Body
```json
{
  "capture": true
}
```  
