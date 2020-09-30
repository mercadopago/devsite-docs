---
indexable: false
---

# Test your subscriptions

We explain how to use our cards and test users to verify that your subscriptions are created correctly.

> WARNING
> 
> Subscription testing limitations
> 
> At the moment, with test users it is only possible to carry out the flow of creating a subscription and you will not be able to see the impact or registration of the quota, either through the Mercado Pago panel or by API.



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


[[[
```curl curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ENV_ACCESS_TOKEN" \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```
]]]

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

Use the <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/account/credentials" target="_blank">test public key</a> of your seller user at the time of creating the subscription you want to test.<br>

#### 2. Make a payment with your buyer user

Credit card testing

1. Access the subscription you created and want to review.
1. Enter the details of a **test card**.
1. Enter the details of your test payer user.
1. Confirm your purchase and you're done!

### Test cards

Card |   Number  | CVV   |   Expiration date
--- |	--- | --- | --- 
Mastercard       |  5031 7557 3453 0604 |   123 | 11/25            
Visa             |  4509 9535 6623 3704 |   123 | 11/25   
American Express |  3711 803032 57522   |   1234| 11/25   

------------
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Advanced integration
>
> Update, edit or cancel your subscriptions.
>
> [Advanced integration](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/subscriptions/advanced-integration/)

> RIGHT_BUTTON
>
> Reattempts to collect
>
> In case you have problems, we explain the logic of retrying collections. 
>
> [Reattempts to collect](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/subscriptions/payment-retry/)
