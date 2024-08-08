# Transacciones a través del Checkout Transparente

Después de recibir tu ID correspondiente al `PLATFORM_ID` de tu plataforma, podrás añadirlo al _header_ de la solicitud de pago (`/v1/payments`) al crear una transacción con Mercado Pago.

Ejemplo:

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
    "token": {{card_token_id}},
    "external_reference": "Identificador de la plataforma",
    "notification_url": "{{notification_url}}",
    "description": "Descripción del producto del vendedor",
    "payer": {
        "first_name": "Nombre. Ejemplo: John",
        "last_name": "Apellido. Ejemplo: Jones",
        "email": "test_user_1677272335@testuser.com",
        "identification": {
            "type": "Tipo de documento",
            "number": "Número del documento. Ejemplo: 19119119100"
        },
        "address": {
            "zip_code": "Código postal",
            "street_name": "Nombre de la calle. Ejemplo: Av. das Naciones",
            "street_number": "Número. Ejemplo: 3003",
            "neighborhood": "Barrio. Ejemplo: Bonfim",
            "city": "Ciudad. Ejemplo: Rio",
            "federal_unit": "Estado. Ejemplo: RJ"
        }
    },
    "additional_info": {
        "referral_url": "URL de referencia. Ejemplo: www.sellertest123.com",
        "drop_shipping": true,
        "delivery_promise": "2022-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1941",
                "title": "Produto do seller",
                "description": "Descripción del producto del vendedor",
                "picture_url": null,
                "category_id": "Categoría. Ejemplo: electronics",
                "quantity": 1,
                "unit_price": 100.00
            }
        ],
        "payer": {
            "first_name": "Nombre. Ejemplo: John",
            "last_name": "Apellido. Ejemplo: Jones",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2019-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "Código de área. Ejemplo: 11",
                "number": "Teléfono. Ejemplo: 987654321"
            },
            "address": {
                "zip_code": "CEP. Ejemplo: 06233-200",
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
                "street_number": "Número. Ejemplo: 15",
                "floor": "Piso (si es un apartamento). Ejemplo: Segundo",
                "apartment": "Número del apartamento (si es un apartamento). Ejemplo: 93"
            }
        }
    }
}'
```