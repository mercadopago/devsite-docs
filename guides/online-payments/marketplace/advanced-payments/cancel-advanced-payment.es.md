---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Cancelar un Advanced Payment

Se podrá cancelar un Advanced Payment que haya quedado en estado `pending`. Estos casos se pueden dar para los pagos con Medios offline o algún pago con tarjeta de crédito que haya entrado en el flujo de revisión manual.

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
  "status": "cancelled"
}
```  
