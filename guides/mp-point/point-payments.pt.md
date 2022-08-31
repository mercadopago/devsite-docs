# Pagamentos de Point

Os pagamentos de Point podem ser buscados na API de Payments. Pode-se encontrar mais informações no artigo de [API's](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get)

Existe uma API exclusiva de Point que conta com informações adicionais do pagamento: 

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer <access_token>' \
https://api.mercadopago.com/point/services/payment/<payment_id>
```

A resposta terá o seguinte formato:

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

> O campo "poi" é o identificador físico do dispositivo Point.
