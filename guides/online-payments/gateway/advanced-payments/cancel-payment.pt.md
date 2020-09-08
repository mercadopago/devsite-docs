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
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=APPLICATION_TOKEN' \
    -d '{...}'
```

### Body
```json
{
  "status": "cancelled"
}
```
