curl -X POST \
  'https://api.mercadopago.com/checkout/preferences?access_token=ACCESS_TOKEN_ENV' \
  -H 'content-type:application/json' \
  -d '{
        "items": [
            {
            "title": "Dummy Item",
            "description": "Multicolor Item",
            "quantity": 1,
            "currency_id": "ARS",
            "unit_price": 10.0
            }
        ]
    }'






    