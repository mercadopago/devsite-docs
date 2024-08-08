# Modelo de pago - Boleto Bancario

Por defecto, el período de vencimiento para pagos mediante boleto bancario es de 3 días. Sin embargo, es posible cambiar la configuración en el momento de la creación, utilizando el campo `date_of_expiration` en la solicitud de creación del pago, definiendo un período entre 1 y 30 días a partir de la fecha de emisión del boleto.

Para utilizar este campo, es necesario seguir el formato de fecha ISO 8601: yyyy-MM-dd'T'HH:mm:ssz.

Ejemplo:

```curl
"date_of_expiration": "2023-01-28T22:59:59.000-04:00"
```

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
    "payment_method_id": "bolbradesco",
    "date_of_expiration": "2023-02-28T22:59:59.000-04:00",
    "external_reference": "Identificador de la plataforma",
    "notification_url": "{{notification_url}}",
    "description": "Descripción del producto del vendedor",
    "payer": {
        "first_name": "Nombre. Ejemplo: John",
        "last_name": "Apellido. Ejemplo: Jones",
        "email": "Ejemplo: test_user_{{$timestamp}}@testuser.com",
        "identification": {
            "type": "Tipo de documento.",
            "number": "Número del documento. Ejemplo: 19119119100"
        },
        "address": {
            "zip_code": "Código postal. Ejemplo: 06233-200",
            "street_name": "Nombre de la calle. Ejemplo: Av. das Nações Unidas",
            "street_number": "Número de la calle. Ejemplo: 3003",
            "neighborhood": "Barrio. Ejemplo: Bonfim",
            "city": "Ciudad. Ejemplo: Osasco",
            "federal_unit": "UF. Ejemplo: SP"
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
                "title": "Producto del vendedor",
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
                "number": "Número del teléfono. Ejemplo: 987654321"
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
                "street_number": "Número. Ejemplo: 15",
                "floor": "Piso (si es un apartamento). Ejemplo: Segundo",
                "apartment": "Número del apartamento (si es un apartamento). Ejemplo: 93"
            }
        }
    }
}'
```