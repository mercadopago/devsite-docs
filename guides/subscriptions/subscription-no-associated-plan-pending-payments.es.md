# Suscripciones con pago pendiente 

Las suscripciones con pago pendiente son un modelo de suscripción donde no se define un método de pago en el momento de su creación. Cuando esto ocurre, los pagos pasan automáticamente al estado `pending` y dependen de que el usuario busque una forma de completar el pago.

En este caso, es posible actualizar la suscripción y definir un medio de pago a través del endpoint [/preapproval/{id}](/developers/es/reference/subscriptions/_preapproval_id/put), o compartir un link de pago para que el comprador pueda completar la compra con el método de pago de su elección.

Para ofrecer **suscripciones sin plan asociado y con pago pendiente**, envía un POST con los atributos necesarios al endpoint [/preapproval](/developers/es/reference/subscriptions/_preapproval/post) y presta atención al parámetro `status`, que debe ser rellenado con el valor `pending`. Si prefieres, usa el curl a continuación.

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