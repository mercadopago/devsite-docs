---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Capturar um Advanced Payment

A API de Advanced Payment permite realizar pagamentos do tipo [Autorização e Captura](https://www.mercadopago.com.br/developers/pt/guides/payments/api/other-features). Para estes casos deve-se criar um Advanced Payment com o campo `capture` em `false`, o qual reservará o valor até que se capture.

Para capturá-lo faça da seguinte forma:

#### Request
```curl
curl -X PUT \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

#### Body
```json
{
  "capture": true
}
```  
