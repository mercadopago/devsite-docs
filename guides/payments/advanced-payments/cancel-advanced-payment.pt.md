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
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

#### Body
```json
{
  "status": "cancelled"
}
```  
