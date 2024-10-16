# Modelo de pago con tarjeta de crédito - Eventos/Entradas

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'x-platform-id: {{PLATFORM_ID proporcionado por el equipo de Partners}}' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 120.34,
    "installments": 1,
    "statement_descriptor": "Tienda del vendedor",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": {{ID de su cuenta Mercado Pago referente a su plataforma}},
    "payment_method_id": "{{payment_method_id}}",
    "token": "{{card_token_id}}",
    "external_reference": "Identificador de la plataforma",
    "notification_url": "{{notification_url}}",
    "description": "Fecha (en el formato dd/mm/aaaa) | Nombre del evento",
    "payer": {
        "first_name": "Nombre. Ejemplo: John",
        "last_name": "Apellido. Ejemplo: Jones",
        "email": "Ejemplo: test_user_1677281849@testuser.com",
        "identification": {
            "type": "Tipo de documento.",
            "number": "Número del documento. Ejemplo: 19119119100"
        },
        "address": {
            "zip_code": "Código postal. Ejemplo: 06233-200",
            "street_name": "Nome de la calle. Ejemplo: Av. das Nações Unidas",
            "street_number": "Número. Ejemplo: 3003",
            "neighborhood": "Barrio. Ejemplo: Bonfim",
            "city": "Ciudad. Ejemplo: Osasco",
            "federal_unit": "UF. Ejemplo: SP"
        }
    },
    "additional_info": {
        "referral_url": "URL de referencia. Ejemplo: www.sellertest123.com",
        "drop_shipping": false,
        "delivery_promise": "2022-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1941",
                "title": "Fecha (en el formato dd/mm/aaaa) | Nombre del evento",
                "description": "Fecha (en el formato dd/mm/aaaa) | Nombre del evento",
                "picture_url": null,
                "category_id": "Categoría. Ejemplo: tickets",
                "quantity": 1,
                "unit_price": 120.34,
                "event_date": "2019-12-25T19:30:00.000-03:00"
            }
        ],
        "payer": {
            "first_name": "Nombre. Ejemplo: John",
            "last_name": "Apellido. Ejemplo: Jones",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2020-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "Código de área. Ejemplo: 11",
                "number": "Número. Ejemplo: 987654321"
            },
            "address": {
                "zip_code": "Código postal. Ejemplo: 06233-200",
                "street_name": "Nombre de la calle. Ejemplo: Av. das Nações Unidas",
                "street_number": "Número. Ejemplo: 3003"
            },
            "registration_date": "2013-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "Código postal. Ejemplo: 95630000",
                "street_name": "Nombre de la calle. Ejemplo: São Luiz",
                "street_number": "Number. Ejemplo: 15",
                "floor": "Piso (si es un apartamento). Ejemplo: Segundo",
                "apartment": "Número del apartamento (si es un apartamento). Ejemplo: 93"
            }
        }
    }  
}'
```