---
sites_supported:
  - mla
  - mco
indexable: false
---

# Capture an Advanced Payment

> WARNING
>
> Commercial contact required
>
> This product is only available through prior contact with one of our executives.

The Advanced Payment API allows you to make [Authorization and Capture](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/other-features) payments. For these cases, an Advanced Payment must be created with the `capture` field set to `false`, which will reserve the amount until it is captured.

To capture it, you have to do it like this:

### Request
```curl
curl -X PUT \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer APPLICATION_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID' \
    -d '{...}'
```

### Body
```json
{
  "capture": true
}
```
