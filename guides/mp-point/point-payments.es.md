# Pagos de Point
Los pagos de Point se pueden buscar en la API de Payments. Podes encontrar más información en el artículo de [API's](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get)

A su vez, existe una API exclusiva de Point que cuenta con alguna información adicional del pago:

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer <access_token>' \
https://api.mercadopago.com/point/services/payment/<payment_id>
```

La respuesta tendra el siguiente formato:

```json
{
  "payment_id": 12345,
  "caller_id": 44444,
  "poi": "BBPOS-123123123",
  "poi_type": "BBPOS",
  "operator_id": 555555,
  "buyer_info": {
    "email": "email@email.com"
  }
}
```

> El campo "poi" es el identificador físico del dispositivo Point.