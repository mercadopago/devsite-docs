---
  indexable: false
---

# Capturar um Advanced Payment

A API de Advanced Payment permite realizar pagamentos do tipo [Autorização e Captura](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/other-features). Para estes casos deve-se criar um Advanced Payment com o campo `capture` em `false`, o qual reservará o valor até que se capture.

Para capturá-lo faça da seguinte forma:

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
