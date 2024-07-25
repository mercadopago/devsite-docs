# Modelo de pagamento Cartão de Crédito - PSP/Mensageria

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'x-platform-id: {{PLATFORM_ID proporcionado por el equipo de Partners}}' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 100,
    "installments": 1,
    "statement_descriptor": "Tienda del vendedor",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": {{ID de su cuenta Mercado Pago referente a su plataforma}},
    "payment_method_id": "{{payment_method_id}}",
    "token":  "{{card_token_id}}",
    "external_reference": "Identificador de la plataforma",
    "notification_url": "{{notification_url}}",
    "description": "[Tipo de producto][Código del producto][Descripción del producto][Código del productor][URL]",
    "payer": {
        "first_name": "Nombre",
        "last_name": "Apellido",
        "email": "test_user_1677282230@testuser.com",
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
        "drop_shipping": true,
        "delivery_promise": "2023-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1941",
                "title": "Producto del vendedor",
                "description": "Descripción del producto del vendedor",
                "picture_url": null,
                "category_id": "electronics",
                "quantity": 1,
                "unit_price": 100.00
            }
        ],
        "payer": {
            "first_name": "Nombre",
            "last_name": "Apellido",
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
            "registration_date": "2013-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "95630000",
                "street_name": "São Luiz",
                "street_number": "15",
                "floor": "",
                "apartment": ""
            }
        }
    }
}'
```