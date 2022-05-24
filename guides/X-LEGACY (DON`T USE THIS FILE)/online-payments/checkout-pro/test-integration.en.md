# Test your integration

[TXTSNIPPET][/guides/snippets/test-integration/type-of-test-users]

## Create test users

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

> There are two ways to make the payment: as a **guest user**, using an email address of your choice, and as a **registered user**, using a Mercado Pago account with username and password. In this last scenario, money available in the account and pre saved cards will be enabled as payment methods.

## Test the payment flow

### 1. Configure the checkout with the information of your selling user

Generate a preference with the [credentials]([FAKER][CREDENTIALS][URL]) of the test user that you want to use as a seller.

### 2. Make a payment with your buyer user

#### Purchase as a guest user

When opening the checkout created with the data of your seller user:

1. Select `Card` as the payment method.
2. Enter the details of a [test card](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).
3. Fill in the desired email.

#### Buy as a registered user

When opening the checkout created with the data of your seller user:

1. Log in to a Mercado Pago account with your buyer test user.
2. Select `Card` as the payment method.
3. Choose a pre saved card or enter the details of a new [test card](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).

>WARNING
>
>Important
>
> * Use low amounts to make the payment tests.
> * Always use test cards, since it is not possible to withdraw money.


### Test Cards

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Receive payments

To start charging, you must [activate your credentials]([FAKER][CREDENTIALS][URL]).

Before activating them, verify if the credentials used in your integration are the same as those of the account responsible for receiving the money from sales.

---

### Next step

> LEFT_BUTTON_REQUIRED_EN
>
> Preferences configurations
>
> Configure the attributes of your preferences and adapt the Checkout Pro to your business model.
>
> [Preferences configurations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations)
