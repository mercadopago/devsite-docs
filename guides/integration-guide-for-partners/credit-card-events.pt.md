# Modelo de pagamento Cartão de Crédito - Eventos/Tickets

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'x-platform-id: {{PLATFORM_ID fornecido pelo time de Partners}}' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 120.34,
    "installments": 1,
    "statement_descriptor": "LOJA DO SELLER",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": {{ADICIONE O ID DE SUA CONTA MERCADO PAGO REFERENTE A SUA PLATAFORMA}},
    "payment_method_id": "{{payment_method_id}}",
    "token":  "{{card_token_id}}",
    "external_reference": "IDENTIFICADOR DA PLATAFORMA",
    "notification_url": "{{notification_url}}",
    "description": "DD/MM/AAAA | NOME DO EVENTO",
    "payer": {
        "first_name": "Compra",
        "last_name": "Teste",
        "email": "test_user_1677281849@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "zip_code": "06233-200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
    },
    "additional_info": {
        "referral_url": "www.sellertest123.com",
        "drop_shipping": false,
        "delivery_promise": "2022-11-20",
        "contrated_plan": "premium",
        "items": [
            {
                "id": "1941",
                "title": "DD/MM/AAAA | NOME DO EVENTO",
                "description": "DD/MM/AAAA | NOME DO EVENTO",
                "picture_url": null,
                "category_id": "tickets",
                "quantity": 1,
                "unit_price": 120.34,
                "event_date": "2019-12-25T19:30:00.000-03:00"
            }
        ],
        "payer": {
            "first_name": "Nome",
            "last_name": "Sobrenome",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2020-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "11",
                "number": "987654321"
            },
            "address": {
                "zip_code": "06233-200",
                "street_name": "Av. das Nações Unidas",
                "street_number": "3003"
            },
            "registration_date": "2013-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": "0",
            "pick_up_on_seller": "1",
            "receiver_address": {
                "zip_code": "95630000",
                "street_name": "são Luiz",
                "street_number": "15",
                "floor": "",
                "apartment": ""
            }
        }
    }  
}'
```