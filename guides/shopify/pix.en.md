# Pix

**Mercado Pago Pix** facilitates financial transactions using QR codes or the Pix Copia e Cola functionality, allowing customers to make payments instantly at any time. Additionally, this service ensures immediate approval of transactions and offers the lowest fee when receiving payments.

To integrate Mercado Pago Pix, install the application through the [Shopify panel](/developers/en/docs/shopify/integration-configuration/pix#installviashopifyadminpanel) or the [Marketplace](/developers/en/docs/shopify/integration-configuration/pix#bookmark_install_via_marketplace). After installation, you can [configure the expiration period](/developers/en/docs/shopify/integration-configuration/pix#bookmark_configure_expiration_period).

> WARNING
>
> Importante
>
> To enable Pix payments, it's necessary to verify if the Pix keys have been created in your Mercado Pago account. If you haven't created them yet, we recommend watching the [video tutorial](https://www.youtube.com/watch?v=60tApKYVnkA) for a step-by-step guide.

## Install via Shopify admin panel

To install Mercado Pago Pix through the Shopify admin panel, follow the steps below:

1. Log in to you [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's admin panel, click **Settings** in the lower-left corner of the page.

![Configurations](/images/shopify/pix-configurations-es.png) 

3. Once there, select the **Payments** option in the menu on the left side of the page.
4. Under **Payment methods accepted**, click **Add payment method**.

![Add payment method](/images/shopify/pix-add-payment-method-es.png) 

5. Select the **Search by provider** tab, search for the "Mercado Pago Pix" app, and select the corresponding option.

![Add](/images/shopify/pix-app-search-es.png) 

6. Click **Install**.

![Install](/images/shopify/pix-install-es.png) 

7. Carefully read the information about the requested permissions and click **Install** again.

![Permissions](/images/shopify/pix-permissions-es.png) 

8. After accepting the requested permissions, click **Manage account** to link your Mercado Pago account to the store using your credentials.

![Manage](/images/shopify/pix-manage-account-es.png) 

> WARNING
>
> Important
>
> If you have already installed the [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) app, you do not need to enter your credentials again. Proceed to step 13 of this tutorial.

9. In the Mercado Pago admin, go to [Your integrations](https://www.mercadopago.com.br/developers/panel/app) and select your application. If you haven't created an application yet, refer to the [Developer Dashboard documentation](/developers/en/docs/shopify/additional-content/your-integrations/dashboard) to learn how to create one.

10. In the application, click  **Production credentials** in the left menu. Copy the `public_key` and the `access_token`.

![Production credentials](/images/woocomerce/test-prod-credentials-api-es.png)

11. Enter your production credentials `access_token` and `public_key` in the corresponding fields. **Make sure not to swap the fields when copying and pasting the credentials**.
12. Click **Save credentials**.

![Save credentials](/images/shopify/pix-save-credentials-es.png)

> NOTE
>
> Nota
>
> Renew your credentials as needed by consulting the [documentación correspondiente](/developers/en/docs/shopify/best-practices/credentials-best-practices/secure-credentials) as a guide. After renewal, it is essential to update them in the Shopify panel. Remember: **when changing the password of your Mercado Pago account, it is necessary to renew your credentials**. To do this, delete the old credentials from the panel, copy the new ones, and enter them in the store's admin panel.

13. Click the **Check activation** option for Mercado Pago Pix.

![Check activation](/images/shopify/pix-check-activation-es.png)

14. If the app is not yet activated, click **Go to Settings** to activate it.

![Go to settings](/images/shopify/pix-go-to-settings-es.png)

15. On the next screen, click **Activate**.

![Activate](/images/shopify/pix-activate-es.png)

Done! Mercado Pago Pix is ready to receive payments from your store.

## Install via Marketplace

To install Mercado Pago Pix via Marketplace, follow the steps below:

1. Log in to your [Shopify](https://accounts.shopify.com/store-login) store.
2. Go to the Mercado Pago Pix page on the Marketplace and click **Install**.

![Marketplace](/images/shopify/pix-marketplace-install-es.png)

3. Carefully read the information about the requested permissions and click **Install** again.

![Permissions](/images/shopify/pix-permissions-es.png) 

4. After accepting the requested permissions, click **Manage account** to link your Mercado Pago account to the store using your credentials.

![Manage](/images/shopify/pix-manage-account-es.png) 

> WARNING
>
> Important
>
> If you have already installed the [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) app, you do not need to enter your credentials again. Proceed to step 9 of this tutorial.

5. In the Mercado Pago admin, go to [**Your integrations**](https://www.mercadopago.com.br/developers/panel/app) and select your application. If you haven't created an application yet, refer to the [Developer Dashboard documentation](/developers/en/docs/shopify/additional-content/your-integrations/dashboard) to learn how to create one.
6. In the application, click **Production credentials** in the left menu. Copy the `public_key` and the `access_token`.

![Production credentials](/images/woocomerce/test-prod-credentials-api-es.png)

7. Enter your production credentials `access_token` and `public_key` in the corresponding fields. **Make sure not to swap the fields when copying and pasting the credentials**.
8. Click **Save credentials**.

![Save credentials](/images/shopify/pix-save-credentials-es.png)

> NOTE
>
> Nota
>
> Renew your credentials as needed by consulting the [corresponding documentation](/developers/en/docs/shopify/best-practices/credentials-best-practices/secure-credentials) as a guide. After renewal, it is essential to update them in the Shopify panel. Remember: **when changing the password of your Mercado Pago account, it is necessary to renew your credentials**. To do this, delete the old credentials from the panel, copy the new ones, and enter them in the store's admin panel.

9. Click the **Check activation** option for Mercado Pago Pix.

![Check activation](/images/shopify/pix-check-activation-es.png)

10. If the app is not yet activated, click **Go to Settings** to activate it.

![Go to settings](/images/shopify/pix-go-to-settings-es.png)

11. On the next screen, click **Activate**.

![Activate](/images/shopify/pix-activate-es.png)

Done! Mercado Pago Pix is ready to receive payments from your store.

## Configure expiration period

After installing the Mercado Pago Pix app, follow the steps below to configure the expiration period for Pix payments.

1. In the store's admin panel, go to **Settings > Payments**.
2. Locate the **Mercado Pago Pix** app and select the corresponding option.
3. On the next screen, click **More actions > Manage**.

![More actions](/images/shopify/pix-more-actions-es.png)

4. In the **"Expiration period for Pix payments"** field, select the desired option.

![Expiration date](/images/shopify/pix-expiration-date-es.png)

5. Click **Save**.

![Save expiration date](/images/shopify/pix-save-expiration-date-es.png)

Done! The expiration period has been set.