# Transactions via Checkout Pro

When making a payment request (`/checkout/preferences`), simply assign your Mercado Pago account ID to the `sponsor_id` field in the request body.

Example:

```curl
curl --location --request POST 'https://api.mercadolibre.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
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
    "sponsor_id": "{{ID of your Mercado Pago account related to your platform.}}",
    "items": [
        {
            "id": "1234",
            "currency_id": "Currency. Example: BRL",
            "title": "Product",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 4
        },
        {
            "id": "1234",
            "currency_id": "Currency. Example: BRL",
            "title": "frete",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 1
        }
    ],
  
    "payment_methods": {
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": []
    },
    "installments": null,
    "shipments": {
        "receiver_address": {
	         "zip_code": "Zip code. Example: 95630000",
	         "street_name": "Street name. Example: Av. St. Luiz",
	         "street_number": "Número. Example: 15"
        }
    }
}'
```

> WARNING
>
> Important
>
> The information in the `collector_id` field is not the same as the `sponsor_id`.
> * The `collector-id` is the seller;
> * The `sponsor-id` is the platform (where the seller is), such as Vtex, LI, Adobe Commerce, etc.
>
> Both the `collector` and the `sponsor-id` can be obtained in the step [How to get the sponsor ID](/developers/en/guides/integration-guide-for-partners/how-to-get-sponsor-id). However, they are distinct Mercado Pago accounts.
If you send the same information in both fields, the API will return an error: "Invalid users involved".

Still have questions about credentials? Access the content [Where can i find the credentials](/developers/es/support/20214).