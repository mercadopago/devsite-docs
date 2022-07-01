# Create test user
 
The testing stage allows you to analyze whether the integration was done correctly and whether payments are being processed without errors.
 
To carry out the integration test, test users will be needed that will allow evaluating the operation of the checkout through payment flows in an environment identical to that of the integration.
 
Below, we list the two types of users required to perform the Checkout Pro payment flow.
 
* **Seller:** This is the account you use to configure the application and the credentials for billing.
* **Buyer:** This is the account you use to test the purchase process.
 
To create a test user, send your **production credential** _Access token_ to the endpoint [/users/test](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/test_user/_users_test/post) and execute the request.
 
> NOTE
>
> Important
>
> It is possible to generate up to 10 test user accounts at the same time. For this reason, we recommend saving each one's email and password. Trial users expire after 60 days without activity on Mercado Pago. Buyer and seller must be test users.

> PREV_STEP_CARD_EN
>
> Mercado Pago Wallet   
>
> Check how to set up payments with Mercado Pago Wallet. 
>
> [Mercado Pago Wallet](/developers/en/docs/checkout-pro/checkout-customization/mp-wallet)

> NEXT_STEP_CARD_EN
>
> Test purchase
>
> Learn how to make a test purchase and ensure the integration works correctly.  
>
> [Test purchase](/developers/en/docs/checkout-pro/integration-test/test-purchase)