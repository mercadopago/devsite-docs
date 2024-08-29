# Transações via Checkout Transparente

Ao realizar uma requisição de pagamento (`/v1/payments`), basta atribuir o ID da sua conta Mercado Pago ao campo `sponsor_id` no corpo (_body_) da requisição.

Exemplo:

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 100,
    "installments": 1,
    "statement_descriptor": "Loja do seller",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": "{{ID da sua conta Mercado Pago referente à sua plataforma}}",
    "payment_method_id": "master",
    "token": "{{CARD_TOKEN_ID}}",
    "external_reference": "Identificador da plataforma",
    "notification_url": "{{notification_url}}",
    "description": "Descrição do produto do vendedor",
    "payer": {
        "first_name": "Nome. Exemplo: John",
        "last_name": "Sobrenome. Exemplo: Jones",
        "email": "Exemplo: test_user_1677270314@testuser.com",
        "identification": {
            "type": "Tipo do documento. Exemplo: CPF",
            "number": "Número do documento. Exemplo: 19119119100"
        },
        "address": {
            "zip_code": "CEP. Exemplo: 06233-200",
            "street_name": "Nome da rua. Exemplo: Av. das Nações Unidas",
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
                "description": "Descrição produto do vendedor",
                "picture_url": null,
                "category_id": "Categoria. Exemplo: electronics",
                "quantity": 1,
                "unit_price": 100.00
            }
        ],
        "payer": {
            "first_name": "Nome. Exemplo: John",
            "last_name": "Sobrenome. Exemplo: Jones",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2019-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "Código de área. Exemplo: 11",
                "number": "Número de telefone. Exemplo: 987654321"
            },
            "address": {
                "zip_code": "CEP. Exemplo: 06233-200",
                "street_name": "Rua. Exempllo: Av. das Nações Unidas",
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