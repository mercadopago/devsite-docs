# Create test user

The testing stage allows you to analyze whether the integration was done correctly and whether payments are being processed without errors.

To carry out the integration test, test users will be needed that will allow evaluating the operation of the checkout through payment flows in an environment identical to that of the integration.

Below we list the two types of users required to test the Checkout API payment flow.

* **Seller:** This is the account you use to configure the application and the credentials for billing.
* **Buyer:** This is the account you use to test the purchase process.

To create a test user, send a **POST** with your **production credential** _Access token_ to the [/users/test_user](/developers/en/reference/test_user/_users_test_user/post) endpoint and execute the request.

> WARNING
>
> Important
>
> It is possible to generate up to 10 test user accounts at the same time. Therefore, we recommend saving each one's email and password. Trial users expire after 60 days without activity on Mercado Pago. Both buyer and seller must be test users.