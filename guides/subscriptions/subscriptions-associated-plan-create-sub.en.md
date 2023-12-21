# Create subscription

> WARNING
>
> Important
>
> Before starting to create the subscription, you need to have a plan created. If you haven't done so yet, go to [Create plan](/developers/es/docs/subscriptions/integration-configuration/subscriptions-associated-plan/create-plan).

A subscription is a payer authorization for recurring charges with a defined payment method (credit card, for example). When subscribing to a product/service, the customer agrees to be periodically charged a certain amount for the defined period.

To create a subscription, you first need to have the `preapproval_plan_id` value.

Then, you can continue the integration through two paths: you can access the endpoint [/preapproval](/developers/es/reference/subscriptions/_preapproval/post) and fill in the attributes as indicated in the parameter table, or you can also use the curl command we provided below.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/preapproval' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -d '{
  "preapproval_plan_id": "2c938084726fca480172750000000000",
  "reason": "Yoga classes",
  "external_reference": "YG-1234",
  "payer_email": "test_user@testuser.com",
  "card_token_id": "e3ed6f098462036dd2cbabe314b9de2a",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "start_date": "2020-06-02T13:07:14.260Z",
    "end_date": "2022-07-20T15:59:52.581Z",
    "transaction_amount": 10,
    "currency_id": "ARS"
  },
  "back_url": "https://www.mercadopago.com.ar",
  "status": "authorized"
}'
```
]]]

When you finish filling in the attributes, execute the request, and that's it! Your subscription with an associated plan will be created.