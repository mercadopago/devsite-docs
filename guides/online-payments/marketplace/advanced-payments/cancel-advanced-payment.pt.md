---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Cancelar um Advanced Payment

É possível cancelar um Advanced Payment que tenha ficado com o estado `pending`. Isso no caso de pagamentos com Meios off-line ou algum pagamento com cartão de crédito que tenha entrado no fluxo de revisão manual.

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
  "status": "cancelled"
}
```  
