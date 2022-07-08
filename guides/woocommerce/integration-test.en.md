# Test the integration

To verify that the store is configured correctly, we recommend that you test your store before launching it into production.
To activate test mode for your store, follow these steps:

1. Go to your [Wordpress](https://wordpress.com/) account.
2. Access your account Dashboard and click **Plugins > Installed Plugins**.
3. In the plugin search engine, search for “Mercado Pago payments for WooCommerce”.
4. Click **Configure Plugin**.
5. Click **4. Test your store before selling** to display the options.
6. Under **Choose how you want to run your store**, select **Test Mode**.
7. Click **Save Changes** to finish.

## CheckoutPro
1. Select the option **I want to pay with Mercado Pago at no additional cost**.
1. Click **order with mandatory payment** to be redirected to the Mercado Pago payment environment.
1. On the payment screen, choose to pay with a new credit card and use the [test cards](https://mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/woocommerce/additional- content/test-cards) to make the payment. It is important not to log in to the Mercado Pago account or try to pay with cards for personal use.
1. Add the information of the indicated test card (card number, CVV and expiration date).
1. At the end of the purchase, you will be able to view, within Mercado Pago, proof that the purchase was made and you will be redirected back to the store.

----[mlb]----
## Transparent Checkout
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
## Checkout API
------------
1. Select the option **I want to pay by credit card**.
1. Choose to pay with a new credit card and use the [test cards](https://mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/woocommerce/additional-content/test-cards) to make the payment. It is important not to pay with cards for personal use.
1. Add the indicated test card information (card number, CVV and expiration date).
1. Click **order with payment required**.
1. At the end of the purchase, you can see that the purchase has been approved.

> PREV_STEP_CARD_EN
>
> Configure the means of payment
>
> Learn how to configure the different payment methods in the store.
>
> [Configure payment methods](/developers/en/docs/woocommerce/payments-methods-configuration)

> NEXT_STEP_CARD_EN
>
> Exit to production
>
> Activate the store and go to production.
>
> [Go to production](/developers/en/docs/woocommerce/go-to-production)