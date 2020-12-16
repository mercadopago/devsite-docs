curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'content-type:application/json' \
  -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \
  -d '{
        "items": [
            {
            "title": "Dummy Item",
            "description": "Multicolor Item",
            "quantity": 1,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "unit_price": 10.0
            }
        ]
    }'






    