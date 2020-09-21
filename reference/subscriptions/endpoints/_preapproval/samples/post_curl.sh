curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=<APP_ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "ARS",
    "transaction_amount": 10,
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00",
   
  },
  "back_url": "https://www.mercadopago.com.ar",
  "collector_id": 555435388,
  "external_reference": "1245AT234562",
  "payer_email": "test_user@testuser.com",
  "reason": "Suscripción particular",
  "status": "pending"
}'