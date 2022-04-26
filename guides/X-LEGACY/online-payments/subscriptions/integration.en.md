# Integrate subscriptions  

## Integration types

There are two ways to integrate subscriptions: 

* __With an associated plan__: Use this form when you need to use the same subscription on different occasions and want to organize them into identifiable groups. For example, for a monthly and annual subscription to a gym.  

* __Without an associated plan__: Use this form when you know that different subscriptions will not share any features because they will be very specific or specialized for each payer. For example, for a single month subscription with a special discount.

![Basic-subscriptions](/images/subscriptions/Integrations-EN.png)

> NOTE
> 
> Key concepts
> 
> Do you have questions about what a plan or other concept is? Keep the [key concepts](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/subscriptions/introduction) handy to review them when needed.


## Subscriptions with an associated plan

If you want to use a subscription with an associated plan, you must first create a plan.  

### Create plan

When generating the plan you will get the `preapproval_plan_id` that you will use to make the subscription. 

To create the plan, make the following call to our API with the data you need:

```curl 
curl --location --request POST 'https://api.mercadopago.com/preapproval_plan' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
	"back_url":"https://www.mercadopago[FAKER][URL][DOMAIN]",
	"reason":"Plan Pase Mensual Gold",
	"auto_recurring":{
		"frequency":"1",
		"frequency_type":"months",
        "transaction_amount":1100,
		"currency_id":"[FAKER][CURRENCY][ACRONYM]",
		"repetitions":12,
		"free_trial":{
			"frequency_type":"months",
			"frequency":"1"
		}
	}
}'
```

#### Attributes

| Attribute |	Definition |
| --- | --- |
| `reason` (required) | It is the description that the subscriber will see when making the subscription and the detail that will be seen in the card statement. |
| `auto_recurring.frequency` (required) | Indicates the length of time or cycle based on the type of frequency. |
| `auto_recurring.frequency_type` (required) | Indicates the type of frequency. It can be monthy or daily. <br><br> Along with the frequency, they define the installment cycle that a subscription will have. <br><br>For example, if every fifteen days you need to generate an installment to be charged it would look like this: `auto_recurring.frequency`: 15 y `auto_recurring.frequency_type`: days |
| `auto_recurring.transaction_amount` | If we indicate the amount, it is fixed. If this field is blank, it is understood as a variable amount. A maximum of two decimals separated by a period is allowed. |
| `auto_recurring.currency_id` (required) | Identifies the currency that corresponds to the country. |
| `auto_recurring.repetitions` | Indicates if the subscription will have a limit. If not specified, there is no limit. This limit is related to `auto_recurring.frequency` y `auto_recurring.frequency_type`. |
| `auto_recurring.free_trial.frequency` | Defines an initial test period and delays the first collection. Indicates the length of time that the service will not be charged, for based on the type of frequency. It must be consistent with `auto_recurring.frequency`. |
| `auto_recurring.free_trial.frequency_type` | Indicates the number of installments that will not be charged for the service. It must be consistent with `auto_recurring.frequency_type`. |

#### Response

`HTTP Status 200 OK`
```json
{
    "id": "2c938084726e18d60172720000000000",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "reason": "Plan Pase Mensual Gold",
    "status": "active",
    "date_created": "2020-06-01T20:14:35.008-04:00",
    "last_modified": "2020-06-01T20:14:35.008-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_plan_id=2c938084726e18d60172720000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_plan_id=2c938084726e18d60172720000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "repetitions": 12,
        "free_trial": {
            "frequency": 1,
            "frequency_type": "months"
        }
    }
}
```

Done! We can now create the subscription and associate it to your plan.

![Basic-subscriptions](/images/subscriptions/status-plan-en.png)


### Create subscription

Once you have generated your plan and obtained your `preapproval_plan_id`, create the subscription of the payer by API as follows: 

```curl 
curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
   "preapproval_plan_id":"2c938084726e18d60172720000000000",
   "card_token_id":"9fca87c7338585abd000111222333444",
   "payer_email":"test_user_XXXX@testuser.com"
   
}'
```

#### Attributes

| Attribute |	Definition |
| --- | --- |
| `preapproval_plan_id` (required) | Refers to the previously generated plan. |
| `card_token_id` (required) | The information on the card will be converted into a token to send the data securely. |
| `payer_email` (required) | Payer's email address. |

> WARNING
> 
> Important
> 
> Do you have questions about how to create the payment token? Find all the information in the [Capture data from the card](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card#bookmark_card_data_capture) section.

#### Response 

`HTTP Status 200 OK`
```json
{
    "id": "2c938084726e18d60172750000000000",
    "preapproval_plan_id": "2c938084726e18d60170001112223334",
    "payer_id": 100200300,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 10101,
    "application_id": 1234567812345678,
    "status": "authorized",
    "reason": "Plan Pase Mensual Gold",
    "external_reference": "125124513",
    "date_created": "2020-06-02T08:37:42.734-04:00",
    "last_modified": "2020-06-02T08:37:42.735-04:00",
    "init_point":  "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726e18d60172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726e18d60172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-07-02T08:37:42.734-04:00",
        "end_date": "2021-07-02T11:59:52.581-04:00"
}
```
>You can get more information about the fields in the [API Reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval/post).

Done! You have already created a subscription with an associated plan.


## Subscriptions without an associated plan 

If you want to use a subscription without an associated plan, you must first set up the payment status.

### Create subscription with authorized payment

To create a subscription with `authorized` status, the card details must be submitted to be associated as follows:

```curl 
curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": 1100,
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00"
  },
  "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
  "collector_id": 100200300,
  "external_reference": "1245AT234562",
  "payer_email": "test_user_XXXX@testuser.com",
  "reason": "Suscripción Pase Mensual Gold - Particular",
  "card_token_id":"9fca87c7338585abdf1edf0000000000",
  "status": "authorized"
}'
```

#### Response 

`HTTP Status 200 OK`
```json
{
    "id": "2c938084726fca480172750000000000",
    "payer_id": 400500600,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "status": "authorized",
    "reason": "Suscripción Pase Mensual Gold - Particular",
    "external_reference": "23546246234",
    "date_created": "2020-06-02T09:07:14.260-04:00",
    "last_modified": "2020-06-02T09:07:14.263-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-06-02T09:07:14.260-04:00",
        "end_date": "2022-07-20T11:59:52.581-04:00"
    },
    "payment_method_id": "visa",
    "version": 0
}
```

> NOTE
> 
> Validation payment
> 
> To prove that the card is valid, we make a validation payment with a minimum amount. If the payment is successful, we proceed with the return of that payment. The amount may differ according to each country.

### Create subscription with pending payment

You can create a subscription with `pending` status and no associated payment method. 

In order to subscribe, the card data must be uploaded with our form. Only the link returned in the `init_point` property must be shared with the payer:

```curl 
curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": 1100,
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00"
  },
  "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
  "collector_id": 100200300,
  "external_reference": "1245AT234562",
  "payer_email": "test_user_XXXX@testuser.com",
  "reason": "Suscripción Pase Mensual Gold - Particular",
  "status": "pending"
}'
```

> NOTE
> 
> Increase the security of your website
>
> With our security code, you can further protect your website and get more payments approved. It will help you to prevent fraud and unjustified rejected payments.<br><br>
> It's simple! [Add the code](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/payment-rejections#bookmark_tips_to_improve_the_approval_process) in easy steps.


#### Response

`HTTP Status 200 OK`
```json
{
    "id": "2c938084726fca480172750000000000",
    "payer_id": 400500600,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "status": "pending",
    "reason": "Suscripción Pase Mensual Gold - Particular",
    "external_reference": "23546246234",
    "date_created": "2020-06-02T09:07:14.260-04:00",
    "last_modified": "2020-06-02T09:07:14.263-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-06-02T09:07:14.260-04:00",
        "end_date": "2022-07-20T11:59:52.581-04:00"
    },
    "version": 0
}
```

> You can get more information about the fields in the [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/subscriptions/_preapproval/post).


Attributes

| Attribute |	Definition |
| --- | --- |
| `reason` | It is the description that the subscriber will see when making the subscription and the detail that will be seen in the card statement. |
| `status` | Subscription status. It can be `pending` or `authorized`. |
| `auto_recurring.frequency` | Indicates the length of time or cycle based on the type of frequency. |
| `auto_recurring.frequency_type` | Indicates the type of frequency. It can be by month (months) or day (days). Along with the frequency, they define the installment cycle that a subscription will have.<br><br> For example, if every fifteen days you need to generate an installment to be collected it would look as follows: `auto_recurring.frequency`: 15 y `auto_recurring.frequency_type`: days |
| `auto_recurring.transaction_amount` | Amount applicable to the subscription. |
| `auto_recurring.currency_id` | Identifies the currency that corresponds to the country. |
| `auto_recurring.start_date` | Indicates the start date of the subscription. If not specified, it starts at the moment. |
| `auto_recurring.end_date` | Indicates if the subscription will have a limit. If not specified, there is no limit. |
| `auto_recurring.free_trial.frequency` | Indicates the length of time that the service will not be charged. It must be consistent with `auto_recurring.frequency`. |
| `auto_recurring.free_trial.frequency_type` | Indicates the amount of installments that will not be charged for the service. It must be consistent with `auto_recurring.frequency_type`. |
| `collector_id` | Seller's identifier. |
| `payer_email` | Payer's email address. |
| `card_token_id` | If the subscription was already authorized, the information on the card will be converted into a token to send the data securely. |


### Search of preapprovals

This call allows you to obtain all subscriptions (pre-approvals) associated with a subscription plan.

```curl 
curl --location --request GET 'https://api.mercadopago.com/preapproval/search?sort=date_created:desc&limit=10&status=authorized,paused,cancelled&offset=0&payerId=100100100' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
```

------------
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Tests
>
> Check that your subscriptions are properly configured with the test users. 
>
> [Tests](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/subscriptions/testing)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Advanced integration
>
> Update, edit or cancel your subscriptions. 
>
> [Advanced integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/subscriptions/advanced-integration)
