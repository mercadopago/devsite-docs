----[mlb]----
# Transações via Checkout Transparente
------------
----[mla, mlm, mlc, mco, mpe, mlu]----
# Transações via Checkout API
------------

Transactions via Checkout Transparente

Após receber o seu ID referente ao `PLATFORM_ID` de sua plataforma, você poderá adicioná-lo ao _header_ da requisição de pagamento (`/v1/payments`) ao criar uma transação junto ao Mercado Pago.

Exemplo:

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'x-platform-id: {{PLATFORM_ID fornecido pelo time de Partners}}' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 100,
    "installments": 1,
    "statement_descriptor": "Loja do vendedor",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": {{ID da sua conta Mercado Pago referente à sua plataforma}},
    "payment_method_id": "{{payment_method_id}}",
    "token": {{card_token_id}},
    "external_reference": "Identificador da plataforma",
    "notification_url": "{{notification_url}}",
    "description": "Descrição do produto do vendedor",
    "payer": {
        "first_name": "Nome. Exemplo: João",
        "last_name": "Sobrenome. Exemplo: Silva",
        "email": "test_user_1677272335@testuser.com",
        "identification": {
            "type": "Tipo. Exemplo: CPF",
            "number": "Número do documento. Exemplo: 19119119100"
        },
        "address": {
            "zip_code": "CEP. Exemplo: 06233-200",
            "street_name": "Rua. Exemplo: Av. das Nações Unidas",
            "street_number": "Número. Exemplo: 3003",
            "neighborhood": "Bairro. Exemplo: Bonfim",
            "city": "Cidade. Exemplo: Osasco",
            "federal_unit": "UF. Exemplo: SP"
        }
    },
    "additional_info": {
        "referral_url": "URL de referência. Exemplo: www.sellertest123.com",
        "drop_shipping": true,
        "delivery_promise": "2022-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1941",
                "title": "Produto do seller",
                "description": "Descrição do produto do vendedor",
                "picture_url": null,
                "category_id": "Categoria. Exemplo: electronics",
                "quantity": 1,
                "unit_price": 100.00
            }
        ],
        "payer": {
            "first_name": "Nome. Exemplo: João",
            "last_name": "Sobrenome. Exemplo: Silva",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2019-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "Exemplo: 11",
                "number": "Exemplo: 987654321"
            },
            "address": {
                "zip_code": "CEP. Exemplo: 06233-200",
                "street_name": "Nome da rua. Exemplo: Av. das Nações Unidas",
                "street_number": "Número. Exemplo: 3003"
            },
            "registration_date": "2013-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "CEP. Exemplo: 95630000",
                "street_name": "Nome da rua. Exemplo: São Luiz",
                "street_number": "Número. Exemplo: 15",
                "floor": "Andar (caso seja apartamento). Exemplo: Segundo",
                "apartment": "Número do apartamento (caso seja apartamento). Exemplo: 93"
            }
        }
    }
}'
```