curl -X POST \
  'https://api.mercadopago.com/merchant_orders' \
  -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \
  -d '{
    "preference_id": "preference_id",
    "items": [
        {
            "id": "item_id",
            "category_id": "category_id",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "description": "item description",
            "picture_url": "picture_url",
            "title": "item title",
            "quantity": 1,
            "unit_price": 5
        }
    ],
    "marketplace": "",
    "external_reference": "default",
    "additional_info": "additional information"
}'
