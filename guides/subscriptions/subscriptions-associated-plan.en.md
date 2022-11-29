# Subscription with an associated plan

Subscriptions with an associated plan are used when it is necessary to use the same subscription on different occasions to organize them into identifiable groups. For example, for a monthly and yearly subscription to a gym.

> NOTE
>
> Important
>
> A subscription with an associated plan must always be created with your `card_token_id` and with the status `Authorized`

## Create plan 

The integration of **subscriptions with an associated plan** happens in two steps: In the first one, it is necessary to **create a plan** to be associated with the subscription, and in the second step, to **create a subscription**.

The subscription plan allows you to define, among other attributes, the title, value, and frequency of subscriptions created by the seller. To create a plan and associate it with a subscription, check out the [preapproval_plan](/developers/en/reference/subscriptions/_preapproval_plan/post) endpoint, fill in the necessary attributes, and execute the request. If you prefer, use the _curl_ below.

> NOTE
>
> Important
>
> As soon as you run the API, the plan is created, and you will then have access to the `preapproval_plan_id` **that will be displayed as  `id` in the API response**. This attribute is mandatory for **creating the subscription** in the next step.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval_plan?access_token=APP_USR-????' \
--header 'Content-Type: application/json' \
--data-raw '{
	"back_url":"https://www.google.com",
	"reason":"Test Subscription",
	"auto_recurring":{
		"frequency":"6",
		"frequency_type":"months",
		"repetitions":10,
		"transaction_amount":2300,
		"currency_id":"BRL",
		"free_trial":{
			"frequency_type":"months",
			"frequency":"6"
		}
	}
}'
```
]]]

## Create subscription

Once you create a plan, you can create a subscription. A subscription is a payer authorization for recurring charges with a defined payment method (credit card, for example). When subscribing to a product/service, the customer agrees to be periodically charged a certain amount for the defined period.

To create a subscription, have the `preapproval_plan_id` at hand, access the [/preapproval](/developers/en/reference/subscriptions/_preapproval/post) endpoint, and fill in the attributes as indicated in the parameter table. 

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=APP_USR-????????' \
--header 'Content-Type: application/json' \
--header 'X-scope: stage' \
--data-raw '{
	"preapproval_plan_id":"{{THE_PREAPPROVAL_PLAN_ID_THAT_WAS_CREATED}}",
    "payer_email": "test_user_+1020927396@testuser.com",
    "card_token_id":"{{THE_CARD_TOKEN_ID_THAT_WAS_CREATED}}",
	"status":"authorized"
}'
```
]]]

When you finish filling in the attributes, execute the request, and that's it! Your subscription with an associated plan will be created.
