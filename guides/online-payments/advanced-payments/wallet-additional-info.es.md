---
  indexable: false
---

# Información adicional

Es posible enviar información que puede mejorar el análisis de prevención de fraude y la tasa de conversión. Para ello es debido enviar el campo `additional_info` con información del pagador y la dirección de envío. Mientras más información se envíe, mejor será la tasa conversión de los pagos.

#### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer SELLER_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments' \
```

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   },
   "binary_mode": true,
   "additional_info": {
      "shipments": {
         "receiver_address": {
         "zip_code": "1111",
         "street_name": "Avenida Uno y tres cuartos",
         "street_number": 123,
         "floor": 4,
         "apartment": "C"
      }
    },
    "payer": {
      "address": {
         "street_name": "Calle Cuatro",
         "street_number": "342"
      }
    }
  }
}
```
