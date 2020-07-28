---
sites_supported:
  - mla
  - mco
---

# Cancelar un Advanced Payment

> WARNING
>
> Contacto comercial requerido
>
> Solo puedes integrar este producto si tu contacto comercial te compartió toda la información necesaria para hacerlo.

Se podrá cancelar un Advanced Payment que haya quedado en estado `authorized`.

#### Request
```curl
curl -X PUT \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=APPLICATION_TOKEN' \
    -d '{...}'
```

#### Body
```json
{
  "status": "cancelled"
}
```  
