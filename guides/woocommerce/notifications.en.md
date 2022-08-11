# Enable IPN notifications

Notifications are messages sent by the Mercado Pago server from events that take place in your application. **IPN** (Instant Payment Notification) is a mechanism that allows your application to receive notifications from Mercado Pago, reporting the status of a certain payment, chargeback and merchant_order, through an HTTP POST call to report on their transactions.

If you want to know more about IPN notifications, go to [this documentation](/developers/en/docs/WooCommerce/additional-content/notifications/ipn).

To receive IPN notifications, follow the steps below:

1. Go to [Your IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn).
2. Complete the requested fields:
    - URL of the website in production: put the URL of the store.
    - Events: select the events you want to receive notifications about.
3. Go to your [Wordpress](https://wordpress.com/) account.
4. Access your account Dashboard and click **Plugins > Installed Plugins**.
5. Enter option **2. Customize your business > Advanced integration options (optional)**.
6. Fill in the **URL for IPN** fields with the URL of the production website.
7. Complete the **integrator_id** field with your Mercado Pago **&lt;dev&gt;program** member number. If you are not yet a member, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/developer-program) for more information.
8. Click **Save and Continue**.

> PREV_STEP_CARD_EN
>
> Integration settings
>
> Learn how to configure the Mercado Pago plugin with WooCommerce.
>
> [Plugin configuration](/developers/en/docs/woocommerce/integration-configuration/plugin-configuration)

> NEXT_STEP_CARD_EN
>
> Test the integration
>
> Test your integration to verify it is complete.
>
> [Testing the integration](/developers/en/docs/woocommerce/integration-test)
