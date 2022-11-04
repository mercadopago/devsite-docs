# Test your integration

## Create test users

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

> There are two ways to make the payment: as a **guest user**, using an email address of your choice, and as a **registered user**, using a Mercado Pago account with username and password. In this last scenario, money available in the account and pre saved cards will be enabled as payment methods.

## Test the payment flow

### 1. Configure the checkout with the information of your selling user

Generate a preference with the [credentials](/developers/en/docs/checkout-pro/additional-content/credentials) of the test user that you want to use as a seller.

### 2. Make a payment with your buyer user

#### Purchase as a guest user

When opening the checkout created with the data of your seller user:

1. Select `Card` as the payment method.
2. Enter the details of a [test card](/developers/en/docs/checkout-pro/additional-content/test-cards).
3. Fill in the desired email.

#### Buy as a registered user

When opening the checkout created with the data of your seller user:

1. Log in to a Mercado Pago account with your buyer test user.
2. Select `Card` as the payment method.
3. Choose a pre saved card or enter the details of a new [test card](/developers/en/docs/checkout-pro/additional-content/test-cards).

>WARNING
>
>Important
>
> * Use low amounts to make the payment tests.
> * Always use test cards, since it is not possible to withdraw money.


### Test Cards

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Receive payments

To start charging, you must [activate your credentials](/developers/en/docs/checkout-pro/additional-content/credentials).

Before activating them, verify if the credentials used in your integration are the same as those of the account responsible for receiving the money from sales.

---

> PREV_STEP_CARD_EN
>
> Integrate with Checkout Pro
>
> Follow the step by step to start receiving payments on your website through Checkout Pro.
>
> [Integrate with Checkout Pro](/developers/en/docs/checkout-pro/integration-configuration/integrate-checkout-pro)

> NEXT_STEP_CARD_EN
>
> Preferences configurations
>
> Configure the attributes of your preferences and adapt the Checkout Pro to your business model.
>
> [Preferences configurations](/developers/en/docs/checkout-pro/checkout-customization/preferences)