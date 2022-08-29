# Test your subscriptions

We explain how to use our cards and test users to verify that your subscriptions are created correctly.


## How to test your integration

**Test users allow you to test your subscriptions** by generating payment flows with an exact copy of your settings.

User types | Description  
--- |	---
Seller | This is the test account you use to set up your subscription and billing credentials.        
Payer  | This is the test account that you use to test recurring payments.

## How to create users

To start, you need to have at least two test users: a buyer and a seller.

To set up the seller account you can use your test user's credentials. 

Run the following curl to generate a test user:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

### Response

`HTTP Status 200 OK`
```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_XXXX@testuser.com"
}
```

### Test the payment flow

#### 1. Set the subscription with the data of your seller user

Use the `access_token` of the [productive credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials) of your test user.
<br>

#### 2. Make a payment with your buyer user

Credit card testing

1. Access the subscription you created and want to review.
1. Enter the details of a **test card**.
1. Enter the details of your test payer user.
1. Confirm your purchase and you're done!

### Test cards

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

------------
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Advanced integration
>
> Update, edit or cancel your subscriptions.
>
> [Advanced integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/subscriptions/advanced-integration)

> RIGHT_BUTTON
>
> Reattempts to collect
>
> In case you have problems, we explain the logic of retrying collections. 
>
> [Reattempts to collect](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/subscriptions/payment-retry)
