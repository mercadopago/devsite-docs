# Test your integration

We will explain how to use our test cards and users to check that your payments are correctly created and your messages are effective.

## How to test your integration

[TXTSNIPPET][/guides/snippets/test-integration/type-of-test-users]

## How to create users

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

## Test the payment flow

### 1. Configure the integration with seller user data

Configure your **seller test user's** [productive public key]([FAKER][CREDENTIALS][URL]) at your application frontend, and the **buyer test user's** [productive private key]([FAKER][CREDENTIALS][URL]) at the backend.

### 2. Make a payment with your buyer user

#### Credit card tests

Start the integration with your test seller user credentials:

1. Fill out [test card data](#bookmark_test_cards).
1. Enter your test buyer user e-mail.
1. Confirm purchase. Done!

## Test Cards

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

> WARNING
>
> Important
>
> Consider that you can't test the entire flow for cash payment methods.

## Start receiving payments

To start charging, you need to meet the [requirements to go to production](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/goto-production), and must [activate your credentials]([FAKER][CREDENTIALS][URL]).

Before activating them, verify that the credentials in your integration are those of the account that receives the money from the sales.<br/>

---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Error Response Handling
>
> Help your customers make error-free payments.
>
> [Error Response Handling](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/handling-responses)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)
