---
sites_supported:
- mla
- mco
---

# Información adicional

Es posible enviar información que puede mejorar el análisis de prevención de fraude. Para ello se debe enviar el campo `additional_info` con información del pagador y la dirección de envío. Mientras más información se envíe, mejor será la tasa de conversión de los pagos.

Además se puede enviar el objeto `metadata` con información relevante a su negocio que quiera agregar el vendedor. La información que puede contener este objeto es del tipo clave/valor.

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=APPLICATION_TOKEN' \
```

#### Body
```json
{
  "payments": [
    ...
  ],
  "payer": {
    "email": "test_user_p@testuser.com"
  },
  ...
  "additional_info": {
    "shipments": {
      "receiver_address": {
        "zip_code": "1111",
        "street_name": "AvenidaUnoytrescuartos",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    },
    "payer": {
      "address": {
        "street_name": "CalleCuatro",
        "street_number": "342"
      }
    }
  },
  "metadata": {
    "key1": "value1",
    "key2": "value2"
  }
}
```
