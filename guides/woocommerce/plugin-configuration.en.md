# Integration configuration

Once the Mercado Pago plugin for WooCommerce is installed, it needs to be configured. Follow these steps to do so:

1. Access your [Wordpress](https://wordpress.com/) account.
2. Go to your account dashboard and click on **Plugins > Installed Plugins**.

![Add plugin](woocomerce/installed-plugins-es.png)

3. Search for **Mercado Pago** in the search bar on the right.
4. The search result will display the Mercado Pago plugin. Click on **Configure plugin**.

![Plugin MP](woocomerce/mp-plugin-es.png)

> NOTE
>
> We are constantly improving the plugin to provide the best possible experience. To take advantage of the latest features and ensure the security and smooth operation of the plugin, we recommend keeping it up to date by clicking on **Activate automatic updates** in the previous step.

Next, we'll explain how to configure each item of the plugin.

## Integrate store with Mercado Pago

1. Click on **1. Enter your credentials to integrate your store with Mercado Pago**.

![Plugin MP](woocomerce/insert-credentials-es.png)

2. Now, you need to link your Mercado Pago account to your store using your credentials. In the Mercado Pago admin panel, access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** and select your application. If you haven't created an application yet, refer to the [Developer Dashboard documentation](/developers/en/docs/woocommerce/additional-content/your-integrations/dashboard) to learn how to do it.

> WARNING
>
> Important
>
> The credentials are responsible for identifying the payment-receiving account for your store. If you don't enter your credentials in the store's admin panel, you'll be automatically redirected to configure this step. **Remember, activating payment methods will only be possible after successfully entering your credentials**.

3. Click on **Production credentials** in the left menu. Copy the `access_token` and the `public_key`.

![Production credentials](woocomerce/test-prod-credentials-api.png)

4. Enter your production credentials `access_token` and `public_key` in the **Production credentials** field, being **careful not to reverse the fields when copying and pasting the credentials**.
5. In your application, click on **Test credentials** in the left menu. Copy the `access_token` and the `public_key`.

![Test credentials](woocomerce/test-test-credentials-api.png)

6. Also, enter the test credentials `access_token` and `public_key` in the **Test credentials** field, being **careful not to reverse the fields when copying and pasting the credentials**.

![Panel](woocomerce/test-woo.png)

7. Click on **Save and continue**.

> NOTE
>
> Note
>
> Renew your credentials as necessary, referring to the [documentation](/developers/en/docs/woocommerce/additional-content/best-practices/credentials-best-practices/secure-credentials) as a guide. After renewal, it's essential to update them in the WooCommerce panel. Remember: when changing your Mercado Pago account password, **you need to renew your credentials**. To do this, delete the old credentials from the panel, copy the new ones, and enter them in the store's admin panel.

## Customize business

In the **2. Customize your store information** section, you have the possibility to provide specific details about your store, providing a more comprehensive experience for customers with additional information.

* **Store name on customer invoices**: Enter your store name. If this field is empty, the customer's purchase will be identified as "Mercado Pago" on the invoice.
* **Identification in Mercado Pago Activities**: In Mercado Pago Activities, you will see the term entered in this field before the order number.
* **Store category**: Enter the category of your store's products. If you can't find a suitable category, select "Other categories".

![Panel](woocomerce/customization-es.png) 

### Advanced options

In **Advanced integration options**, click on **View advanced options** and configure the options related to your store's integration with Mercado Pago.

* **IPN URL**: Enter the URL to receive payment notifications.
* **Integrator ID**: Enter your partner `integrator_id` from the **&lt;dev&gt;program** of Mercado Pago. If you're not yet a member of the program, visit the [page](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/developer-program) for more information.
* **Debug and log mode**: Enable this option to allow logging of your store's activities, enabling more efficient support and better debugging of technical issues.

> NOTE
>
> Note
>
> To access your store's logs, return to the administrative panel of the plugin under **WooCommerce > Mercado Pago** and click on "Need help?". Within this component, follow step 4 to locate and download the error history. On the **error history** page, you will have access to all logs available for download.

![Panel](woocomerce/advanced-settings-es.png) 

Finally, click on **Save and continue**.