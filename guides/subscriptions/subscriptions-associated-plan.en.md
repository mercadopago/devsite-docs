# Subscription with an associated plan

Subscriptions with an associated plan are used when it is necessary to use the same subscription on different occasions to organize them into identifiable groups. For example, for a monthly and yearly subscription to a gym.

The integration of **subscriptions with an associated plan** happens in two steps: In the first one, it is necessary to **create a plan** to be associated with the subscription, and in the second step, to **create a subscription**.

## Create plan 

The subscription plan allows you to define, among other attributes, the title, value, and frequency of subscriptions created by the seller. To create a plan and associate it with a subscription, check out the [preapproval_plan](/developers/en/reference/subscriptions/_preapproval_plan/post) endpoint, fill in the necessary attributes, and execute the request. If you prefer, use the _curl_ below.

> NOTE
>
> Important
>
> As soon as you run the API, the plan is created, and you will then have access to the `preapproval_plan_id` **that will be displayed as  `id` in the API response**. This attribute is mandatory for **creating the subscription** in the next step.

[[[
```curl
curl -X POST \

      'https://api.mercadopago.com/preapproval_plan' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -d '{
  "reason": "Yoga classes",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "repetitions": 12,
    "billing_day": 10,
    "billing_day_proportional": true,
    "free_trial": {
      "frequency": 1,
      "frequency_type": "months"
    },
    "transaction_amount": 10,
    "currency_id": "ARS"
  },
  "payment_methods_allowed": {
    "payment_types": [
      {}
    ],
    "payment_methods": [
      {}
    ]
  },
  "back_url": "https://www.yoursite.com"
}'
```
]]]

> NOTE
>
> Important
>
> A subscription with an associated plan must always be created with your `card_token_id` and with the status `Authorized`.

Done! You have created the subscription with associated plan. To complete the integration, proceed to **create a subscription**.

## Create subscription

A subscription is a payer authorization for recurring charges with a defined payment method (credit card, for example). When subscribing to a product/service, the customer agrees to be periodically charged a certain amount for the defined period.

To create a subscription, you first need to have the `preapproval_plan_id` value.

Then, you can continue the integration through two paths: you can access the endpoint [/preapproval](/developers/en/reference/subscriptions/_preapproval/post) and fill in the attributes as indicated in the parameter table, or you can also use the curl command we provided below.

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