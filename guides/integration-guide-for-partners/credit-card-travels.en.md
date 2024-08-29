# Payment model Credit Card - Tourism/Travels

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'x-platform-id: {{PLATFORM_ID provided by the Partners team}}' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 150.34,
    "installments": 1,
    "statement_descriptor": "Seller's store",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": {{ID of your Mercado Pago account related to your platform}},
    "payment_method_id": "{{payment_method_id}}",
    "token":  "{{card_token_id}}",
    "external_reference": "Platform identifier",
    "notification_url": "{{notification_url}}",
    "description": "Date (in the format dd/mm/yyyy) | Description of the passage",
    "payer": {
        "first_name": "Name. Example: John",
        "last_name": "Last name. Example: Jones",
        "email": "Example: test_user_1677282147@testuser.com",
        "identification": {
            "type": "Document type. Example: CPF",
            "number": "Number. Example: 19119119100"
        },
        "address": {
            "zip_code": "Zip code. Example: 06233-200",
            "street_name": "Nombre de la calle. Example: Av. das Nações Unidas",
            "street_number": "Street number. Example: 3003",
            "neighborhood": "Neighborhood. Example: Bonfim",
            "city": "City. Example: Osasco",
            "federal_unit": "Federal unit. Example: SP"
        }
    },
    "additional_info": {
        "referral_url": "Example: www.sellertest123.com",
        "drop_shipping": false,
        "delivery_promise": "2022-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1234",
                "title": "Date (in the format dd/mm/yyyy) | Description of the passage",
                "description": "Date (in the format dd/mm/yyyy) | Description of the passage",
                "picture_url": "Example: www.google.com",
                "category_id": "travels",
                "category_descriptor": {
                    "passenger": {
                        "first_name": "Name. Example: John",
                        "last_name": "Last name. Example: Jones"
                    },
                    "route": {
                        "departure": "Example: Osasco",
                        "destination": "Example: Buenos Aires",
                        "departure_date_time": "2023-03-12T12:58:41.425-04:00",
                        "arrival_date_time": "2023-03-14T12:58:41.425-04:00",
                        "company": "Companhia"
                    }
                },
                "quantity": 1,
                "unit_price": 150.34
            }
        ],
        "payer": {
            "first_name": "Name. Example: John",
            "last_name": "Last name. Example: Jones",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2019-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "Area code. Example: 11",
                "number": "Number. Example: 987654321"
            },
            "address": {
                "zip_code": "Zip code. Example: 06233-200",
                "street_name": "Street name. Example: Av. das Nações Unidas",
                "street_number": "Number. Example: 3003"
            },
            "registration_date": "2020-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "Zip code. Example: 06233-200",
                "street_name": "Street name. Example: Av. das Nações Unidas",
                "street_number": "Number. Example: 3003",
                "floor": "Floor (if it's an apartment). Example: Second",
                "apartment": "Apartment number (if it's an apartment). Example: 93"
            }
        }
     }
  }'
```
