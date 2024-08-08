# Payment model - Bank Slip

By default, the due date for payments via bank slip is 3 days. However, it is possible to change this setting at the time of creation by using the `date_of_expiration` field in the payment creation request, defining a period between 1 and 30 days from the issue date of the bank slip.

To use this field, it is necessary to follow the ISO 8601 date format: yyyy-MM-dd'T'HH:mm:ssz.

Example:

```curl
"date_of_expiration": "2023-01-28T22:59:59.000-04:00"
```

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'x-platform-id: {{PLATFORM_ID provided by the Partners team}}' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 100,
    "installments": 1,
    "statement_descriptor": "Seller's store",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": {{ID of your Mercado Pago account related to your platform}},
    "payment_method_id": "bolbradesco",
    "date_of_expiration": "2023-02-28T22:59:59.000-04:00",
    "external_reference": "Platform identifier",
    "notification_url": "{{notification_url}}",
    "description": "Seller's product description",
    "payer": {
        "first_name": "Name. Example: John",
        "last_name": "Last name. Example: Jones",
        "email": "Example: test_user_{{$timestamp}}@testuser.com",
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
        "referral_url": "Referral USP. Example: www.sellertest123.com",
        "drop_shipping": true,
        "delivery_promise": "2022-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1941",
                "title": "Seller's product",
                "description": "Description of the seller's product",
                "picture_url": null,
                "category_id": "electronics",
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
                "number": "Number. Example: 987654321"
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
                "street_number": "Number. Example: 15",
                "floor": "Floor (if it's an apartment). Example: Second",
                "apartment": "Apartment number (if it's an apartment). Example: 93"
            }
        }
    }
}'
```