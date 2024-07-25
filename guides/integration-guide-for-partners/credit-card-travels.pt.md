# Modelo de pagamento Cartão de Crédito - Turismo/Travels

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'x-platform-id: {{PLATFORM_ID fornecido pelo time de Partners}}' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 150.34,
    "installments": 1,
    "statement_descriptor": "Loja do vendedor",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": {{ID da sua conta Mercado Pago referente à sua plataforma}},
    "payment_method_id": "{{payment_method_id}}",
    "token":  "{{card_token_id}}",
    "external_reference": "Identificador da plataforma",
    "notification_url": "{{notification_url}}",
    "description": "Data (no formato dd/mm/aaaa) | Descrição da passagem",
    "payer": {
        "first_name": "Nome",
        "last_name": "Sobrenome",
        "email": "test_user_1677282147@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "zip_code": "06233-200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
    },
    "additional_info": {
        "referral_url": "www.sellertest123.com",
        "drop_shipping": false,
        "delivery_promise": "2022-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1234",
                "title": "Data (no formato dd/mm/aaaa) | Descrição da passagem",
                "description": "Data (no formato dd/mm/aaaa) | Descrição da passagem",
                "picture_url": "www.google.com",
                "category_id": "travels",
                "category_descriptor": {
                    "passenger": {
                        "first_name": "Nome",
                        "last_name": "Sobrenome"
                    },
                    "route": {
                        "departure": "Osasco",
                        "destination": "Londres",
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
            "first_name": "Nome",
            "last_name": "Sobrenome",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2019-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "11",
                "number": "987654321"
            },
            "address": {
                "zip_code": "06233-200",
                "street_name": "Av. das Nações Unidas",
                "street_number": "3003"
            },
            "registration_date": "2020-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "06233-200",
                "street_name": "Av. das Nações Unidas",
                "street_number": "3003",
                "floor": "",
                "apartment": ""
            }
        }
     }
  }'
```
