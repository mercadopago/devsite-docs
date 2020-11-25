---
  indexable: false
---

# Cancelar un Advanced Payment

Se podrá cancelar un Advanced Payment que haya quedado en estado `pending`. Estos casos se pueden dar para los pagos con Medios offline o algún pago con tarjeta de crédito que haya entrado en el flujo de revisión manual.

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
