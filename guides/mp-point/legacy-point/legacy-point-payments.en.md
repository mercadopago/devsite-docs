# Point payments

Point payments can be searched in the Payments API. For more information, check the [API's](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get) article.

We also have an exclusive Point API that has some additional information about the payments: 

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer <access_token>' \
https://api.mercadopago.com/point/services/payment/<payment_id>
```

The responde of the status will have the following format:

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