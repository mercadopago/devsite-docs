# Transactions via Checkout Transparente

When making a payment request (`/v1/payments`), simply assign your Mercado Pago account ID to the `sponsor_id` field in the request body.

Example:

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 100,
    "installments": 1,
    "statement_descriptor": "Seller's store",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": "{{ID of your Mercado Pago account related to your platform}}",
    "payment_method_id": "master",
    "token": "{{CARD_TOKEN_ID}}",
    "external_reference": "Platform identifier",
    "notification_url": "{{notification_url}}",
    "description": "Seller's product description",
    "payer": {
        "first_name": "Name. Example: John",
        "last_name": "Last name. Example: Jones",
        "email": "Example: test_user_1677270314@testuser.com",
        "identification": {
            "type": "Document type. Example: CPF",
            "number": "Document number. Example: 19119119100"
        },
        "address": {
            "zip_code": "Zip code. Example: 06233-200",
            "street_name": "Street name. Example: Av. das Nações Unidas",
            "street_number": "Number. Example: 3003",
            "neighborhood": "Neighborhood. Example: Bonfim",
            "city": "City. Example: Osasco",
            "federal_unit": "Federal unit. Example: SP"
        }
    },
    "additional_info": {
        "referral_url": "Referral URL. Example: www.sellertest123.com",
        "drop_shipping": true,
        "delivery_promise": "2022-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1941",
                "title": "Seller's product",
                "description": "Description of the seller's product",
                "picture_url": null,
                "category_id": "Category. Example: electronics",
                "quantity": 1,
                "unit_price": 100.00
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
                "number": "Telephone number. Example: 987654321"
            },
            "address": {
                "zip_code": "Zip code. Example: 06233-200",
                "street_name": "Street name. Example: Av. das Nações Unidas",
                "street_number": "Number. Example: 3003"
            },
            "registration_date": "2013-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "Zip code. Example: 95630000",
                "street_name": "Street name. Example: São Luiz",
                "street_number": "Street number. Example: 15",
                "floor": "Floor (in case it is an apartment). Example: Second",
                "apartment": "Apartment number (in case it is an apartment). Example: 93"
            }
        }
    }
 }'
```