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

Done! You have created the subscription plan with associated plan. To complete the integration, proceed to the next step, which is **creating a subscription**.


