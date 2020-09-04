---
sites_supported:
  - mla
  - mco
indexable: false
---

# Cancel an Advanced Payment

> WARNING
>
> Commercial contact required
>
> This product is only available through prior contact with one of our executives.

You can cancel an Advanced Payment that has remained in the `authorized` state.

### Request
```curl
curl -X PUT \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=APPLICATION_TOKEN' \
    -d '{...}'
```

### Body
```json
{
  "status": "cancelled"
}
```
