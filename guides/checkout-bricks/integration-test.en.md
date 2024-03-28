# Make test purchase

The testing stage allows you to analyze whether the integration was done correctly and whether payments are being processed without errors, preventing errors from appearing when making the checkout available to end buyers.

To make a t purchase, you must use the **test credentials** of your **production user**. To obtain them, go to **Application details > Credentials** within the [Developer dashboard](/developers/panel/app) or in your Mercado Pago account by accessing [Your Business > Settings > Management and Administration > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

With the credentials in your possession and the [integration completed](/developers/en/docs/checkout-bricks/common-initialization), follow the steps below to perform the test purchase.

> WARNING
>
> Attention
>
> Do not use test user email into the Brick email field (if applicable).

## Cards

1. Start the integration of your project with the **test credentials**.
2. Enter any email as the paying user (**remember it must be different from the email you use on Mercado Pago**).
3. Enter the details of one of our [test cards](/developers/en/guides/additional-content/your-integrations/test-cards).
4. Test different payment outcomes using the table available on the [test cards](/developers/en/guides/additional-content/your-integrations/test-cards) and filling in the desired status in the cardholder's name (field `card_holder_name`).
5. Confirm the purchase. A payment with the **indicated status for testing** will be generated.

## Offline payment methods

1. Start the integration of your project with the **test credential**s.
2. Enter any email as the paying user (**remember it must be different from the email you use on Mercado Pago**).
3. Enter the required data into the form.
4. Confirm the purchase. A payment with a **pending status** will be generated.

## Payment with Mercado Pago

----[mlb, mla, mlm]----

1. [Create a preference](/developers/en/reference/preferences/_checkout_preferences/post) with your test credentials and initiate the integration of your project with the used credentials.
2. Go to Mercado Pago (via [Payment Brick](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) or [Wallet Brick](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering)).
3. Log in to Mercado Pago with an account different from the one used to **create the preference**.
4. Confirm the purchase.

------------
----[mpe, mco, mlu, mlc]----

1. [Create a preference](/developers/en/reference/preferences/_checkout_preferences/post) with your test credentials and initiate the integration of your project with the used credentials.
2. Go to Mercado Pago (via [Payment Brick](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet) or [Wallet Brick](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering)).
3. Log in to Mercado Pago with an account different from the one used to **create the preference**.
4. Confirm the purchase.

------------

Done! Once these steps are finished, the integration will be complete and you will be able to use your production credentials to use the Checkout Bricks.