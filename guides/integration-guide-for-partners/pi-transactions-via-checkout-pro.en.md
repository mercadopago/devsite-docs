# Transactions via Checkout Pro

After receiving your ID related to the `PLATFORM_ID` of your platform, you can add it to the header of the payment request (`/checkout/preferences`) when creating a payment preference with Mercado Pago.

Example:

```curl
curl --location --request POST 'https://api.mercadolibre.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'x-platform-id: {{PLATFORM_ID provided by the Partners team}}' \
--data-raw '{
    "auto_return": "all",
    "back_urls": {
        "success": "https://httpbin.org/get?status=pago",
        "failure": "https://httpbin.org/get?status=recusado",
        "pending": "https://httpbin.org/get?status=pendente"
    },
    "redirect_urls": {
        "failure": "https://httpbin.org/get?status=redirectrecusado",
        "pending": "https://httpbin.org/get?status=redirectpendente",
        "success": "https://httpbin.org/get?status=redirectsuccess"
    },
    "notification_url": "https://webhook.site/d69d1102-b677-44f6-ae6d-104a7e813b93",
    "expires": false,
    "external_reference": "Order - Test",
    "date_of_expiration": "2022-04-01T22:59:00.000-04:00",
    "sponsor_id": <CUST_ID>,
    "items": [
        {
            "id": "1234",
            "currency_id": "Currency. Example: BRL",
            "title": "Produto",
            "category_id": "Category. Example: entertainment",
            "quantity": 1,
            "unit_price": 4
        },
        {
            "id": "1234",
            "currency_id": "Currency. Example: BRL",
            "title": "Freight",
            "category_id": "Category. Example: entertainment",
            "quantity": 1,
            "unit_price": 1
        }
    ],
    "payment_methods": {
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": [],
        "installments": null
    },
    "shipments": {
        "receiver_address": {
            "zip_code": "Zip code. Example: 95630000",
            "street_name": "Street name. Example: Av. das Nações Unidas",
            "street_number": "Street number. Example: 3003"
        }
    }
}'
```