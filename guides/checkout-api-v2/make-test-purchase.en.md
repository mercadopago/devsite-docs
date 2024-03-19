# Make test purchase

The testing stage allows you to analyze whether the integration was done correctly and whether payments are being processed without errors, preventing errors from appearing when making the checkout available to end buyers.

To make a t purchase, you must use the **test credentials** of your **production user**. To obtain them, go to **Application details > Credentials** within the [Developer dashboard](/developers/panel/app) or in your Mercado Pago account by accessing [Your Business > Settings > Management and Administration > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

With the credentials in hand, follow the steps below to make the test purchase.

1. Start the integration configured with the **Test credentials**.
2. Enter your e-mail (remembering that it must be different from the email you use on Mercado Pago).
4. Enter data from one of our [test cards](/developers/en/docs/checkout-api/additional-content/your-integrations/test/cards).
3. Confirm the purchase.

Done! Once these steps are finished, the integration will be complete and you will be able to use your production credentials to use the Checkout API. For more information, see the section [Requirements to go to production](/developers/en/docs/checkout-api/integration-test/go-to-production-requirements)