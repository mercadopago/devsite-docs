---
  description: Crea campañas de descuento para potenciar tus ventas utilizando las herramientas de marketing de tu cuenta de MercadoPago
  indexable: false
---


# Discount campaigns

Create discount campaigns to boost your sales using the marketing tools of your Mercado Pago account in the section Configuration for your Business: [Create discount](https://www.mercadopago[FAKER][URL][DOMAIN]/campaigns/create).

You can create two types of campaigns:

*	Encompassing all your buyers, e.g. seasonal discounts.
*	With a discount code sent to your buyers.

All you should do is choose how much you want to invest and when, without any additional costs.

## Check for discounts to include in the payment

Before creating the payment, check whether your buyer is eligible for any of your discount campaigns.

### Campaigns for all buyers

To check it, use your [application’s credentials]([FAKER][CREDENTIALS][URL]):

```curl
curl -H "Accept: application/json" \
 -H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_85556797@testuser.com' \
```

- The `transaction_amount` is the total payment amount.
- The `payer_email` is the buyer’s email on your platform.

**Response**

```json
{
    "id": 1118,
    "name": "Test discount campaign",
    "percent_off": 10,
    "amount_off": 0,
    "coupon_amount": 30,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]"
}
```

- The `id` identifies the campaign. You will use it when processing the payment.
-	The `percent_off` is the discount rate that will be applied, in case you have created a campaign with discount percentage.
-	The `amount_off` is the fixed amount you defined in your discount campaign.
- The `coupon_amount` is the amount of the discount to be applied. You will use it when processing the payment.

#### Process the payment

To receive a payment with a campaign that applies to all your buyers, you must add the `campaign_id` and `coupon_amount` fields:

```curl
curl -X POST -H 'accept: application/json' 
-H 'content-type: application/json' \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/v1/payments \
-d '{
    "transaction_amount": 299.99,
    "description": "Title of what you are paying for",
    "payment_method_id": "master",
    "payer":{
        "email": "test_user_85556797@testuser.com"
    },
    "campaign_id": 1118,
    "coupon_amount": 30
}'
```

**Response**

```json
{
	"id": 25417,
	"description": "Title of what you are paying for",
	"payment_method_id": "master",
	"payer": {
		"email": "test_user_23700775@testuser.com",
		...
	},
	"transaction_amount": 299.99,
	"currency_id": "[FAKER][CURRENCY][ACRONYM]",
	"coupon_amount": 30,
	"transaction_details": {
		"total_paid_amount": 269.99,
		...
	},
	...
}
```

- The `transaction_amount` is the original amount of the items payable.
- The `total_paid_amount` is the total amount paid by the buyer.
- The `coupon_amount` is the amount of the discount to be applied.


### Coupon with discount code

Add an additional field on the payment form to capture the coupon code entered by your buyer.

#### Check if the buyer has any discount available:

To check it, use your [application’s credentials]([FAKER][CREDENTIALS][URL]):

```curl
curl -X GET \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_99525168@testuser.com&coupon_code=TESTMP'
```

- The `coupon_code` is the code entered by the buyer. It will be used when processing the payment in case the buyer has the discount.
- The `transaction_amount` is the total purchase amount.
- The `payer_email` is the buyer’s email on your platform.

If the buyer has the discount available, the API will return:

```json
{
    "id": 1117,
    "name": "Test coupon campaign",
    "percent_off": 10,
    "amount_off": 0,
    "coupon_amount": 100,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]"
}
```

- The `id` identifies the campaign.
- The `percent_off` is the discount rate that will be applied, in case you have created a campaign with discount percentage.
- The `amount_off` is the fixed amount you defined in your discount campaign.
- The `coupon_amount` is the amount of the discount to be applied. You should save it, you will also use it when processing the payment.

If the buyer has already used the discount, the API will return:

```json
{
    "message": "Run Out of uses per user",
    "error": "run-out-of-uses",
    "status": 404,
    "cause": []
}
```

At this point, you can indicate that the coupon is invalid or is no longer available.

#### Process the payment

To receive a payment with a discount coupon you must add the `coupon_code`:

```curl
curl -X POST \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/v1/payments \
-d '{
    "transaction_amount": 299.99,
    "description": "Title of what you are paying for",
    "token": "ff8080814d71d513014d8d42173452f7",
    "installments": 1,
    "payment_method_id": "master",
    "payer": {
        "email": "test_user_99525168@testuser.com"
    },
    "coupon_code": "TESTMP"
}'
```

**Response:**

```json
{
	"id": 25416,
	"description": "Title of what you are paying for",
	"payment_method_id": "master",
	"payer": {
		"email": "test_user_99525168@testuser.com",
		...
	},
	"transaction_amount": 299.99,
	"currency_id": "[FAKER][CURRENCY][ACRONYM]",
	"coupon_amount": 29.99,
	"transaction_details": {
		"total_paid_amount": 269.98,
		...
	},
	...
}
```

### Discount not available

If the buyer does not have the discount available, the API will return:

```json
{
    "message": "invalid parameters",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": "campaign_code_doesnt_match",
            "description": "doesn't find a campaign with the given code"
        }
    ]
}
```
