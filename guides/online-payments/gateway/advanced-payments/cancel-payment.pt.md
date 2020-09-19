---
sites_supported:
  - mla
  - mco
indexable: false
---

# Cancelar um Advanced Payment

> WARNING
>
> Contato comercial necessário
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias para isso.

Você pode cancelar um Advanced Payment que permaneceu no estado `autorizado`.


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
  "status": "cancelled"
}
```
