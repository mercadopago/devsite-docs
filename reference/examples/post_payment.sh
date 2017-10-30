curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
        -d '{
                "transaction_amount": 100,
                "token": "ENV_CARD_TOKEN",
                "description": "Title of what you are paying for",
                "installments": 1,
                "payment_method_id": "visa",
                "payer": {
                        "email": "test_user_19653727@testuser.com"
                }
        }'