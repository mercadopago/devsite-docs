curl -X POST \
  'https://api.mercadopago.com/v1/customers/{customer_id}/cards' \
  -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \
  -d '{
    "token": "b3a7dbec3eb0d71798c4f19fec445795"
  }'