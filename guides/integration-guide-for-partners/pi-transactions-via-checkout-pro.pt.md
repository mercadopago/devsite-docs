# Transações via Checkout Pro

Após receber o seu ID referente ao `PLATFORM_ID` de sua plataforma, você poderá adicioná-lo ao _header_ da requisição de pagamento (`/checkout/preferences`) ao criar uma preferência de pagamento junto ao Mercado Pago.

Exemplo:

```curl
curl --location --request POST 'https://api.mercadolibre.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'x-platform-id: {{PLATFORM_ID fornecido pelo time de Partners}}' \
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
    "external_reference": "Pedido - Teste",
    "date_of_expiration": "2022-04-01T22:59:00.000-04:00",
    "sponsor_id": <CUST_ID>,
    "items": [
        {
            "id": "1234",
            "currency_id": "Moeda. Exemplo: BRL",
            "title": "Produto",
            "category_id": "Categoria. Exemplo: entertainment",
            "quantity": 1,
            "unit_price": 4
        },
        {
            "id": "1234",
            "currency_id": "Moeda. Exemplo: BRL",
            "title": "Frete",
            "category_id": "Categoria: entertainment",
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
            "zip_code": "CEP. Exemplo: 95630000",
            "street_name": "Nome da rua. Exemplo: Av. das Nações Unidas",
            "street_number": "Número da rua. Exemplo: 3003"
        }
    }
}'
```