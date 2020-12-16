---
sites_supported:
  - mla
  - mco
indexable: false
---

# Capture um Advanced Payment

> WARNING
>
> Contato comercial necessário
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias para isso.

A API de pagamento avançado permite pagamentos do tipo [Autorização e Captura](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-features). Para estes casos deve ser criado um Advanced Payment com o campo `capture` em ` false`, que reservará o valor até que seja capturado.

Para capturá-lo, você deve fazer da seguinte maneira:

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
