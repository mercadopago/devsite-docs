# Assinaturas com pagamento pendente 

Assinaturas com pagamento pendente são um modelo de assinaturas onde um meio de pagamento não é definido no momento de sua criação. Quando isso ocorre, os pagamentos automaticamente ficam com status `pending` e dependem que o usuário busque uma forma de concluir o pagamento.

Neste caso, é possível atualizar a assinatura e definir um meio de pagamento através do endpoint [/preapproval/{id}](/developers/pt/reference/subscriptions/_preapproval_id/put), ou compartilhar um link de pagamento para que o comprador possa concluir a compra com o meio de pagamento de sua preferência.

Para oferecer **assinaturas sem um plano associado e com pagamento pendente**, envie um POST com os atributos necessários ao endpoint [/preapproval](/developers/pt/reference/subscriptions/_preapproval/post) e atente-se ao parâmetro `status`, que deverá ser preenchido com o valor `pending`. Se preferir, utilize o curl disponível abaixo.

[[[
```curl
curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Authorization: Bearer YOU_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "reason": "Yoga classes",
    "external_reference": "YG-1234",
    "payer_email": "test_user_75650838@testuser.com",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "end_date": "2023-07-20T15:59:52.581Z",
        "transaction_amount": 10,
        "currency_id": "BRL"
    },
    "back_url": "https://www.yoursite.com",
    "status": "pending"
}'
```
]]]