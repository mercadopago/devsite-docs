# Checkout Pro

----[mlb]----
When installing [Checkout Pro](/developers/en/docs/checkout-pro/landing), there may be an **increase in the approval rate of online store sales**. This happens because buyers will be able to pay using a Mercado Pago account and the entire purchase process will be done in our environment, which facilitates payment. At the end of the transaction, these buyers are redirected to the store environment.

To configure Checkout Pro in a Shopify store, follow the steps below:

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's administrative panel, click on **Settings**.
3. Once there, select the **Payments** option. Then, click on the **Choose a provider** button.
4. Type Mercado Pago in the search bar. Once you find it, select it as your payment method.
5. Enter your **production credentials** (`client_id` and `client_secret`) in the fields that require them. Remember to keep your [credentials](/developers/en/docs/shopify/additional-content/your-integrations/credentials) handy.
6. In the next step, you will be able to select the images of the payment methods you want to display in the store. 

> These images are for **illustrative purposes only and do not imply the activation of the payment method selected**.

7. Lastly, the store will offer you the option to **Enable test mode**. By activating this option, orders completed with Checkout Pro **will not be real orders**. That is, they will be test orders that, even if completed, will not have their status updated on the platform and will not appear on the Mercado Pago panel in the seller's account.
8. To finish, click on **Activate Mercado Pago**.
 
> In case of renewing your credentials, remember to replace both the production and test credentials in your integration.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
When installing [Checkout Pro](/developers/en/docs/checkout-pro/landing) (**Mercado Pago Checkout**), you may experience **an increase in the approval rate of your online store sales**. This is because buyers will be able to pay using a Mercado Pago account, and the entire checkout process will be conducted in our environment, facilitating the payment process. At the end of the transaction, these buyers are redirected to the store environment.

To install Checkout Pro (**Mercado Pago Checkout**) on your Shopify store, follow these steps:

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.

2. In the store's admin panel, click on **Settings** in the bottom-left corner of the page.

![Panel](/images/shopify/store-panel-es.png)

3. Once there, select the **Payments** option from the menu on the left side of the page.

4. Under "Accepted payment methods," click on **Add payment method**.

![Payments](/images/shopify/payments-page-es.png)

5. Select the **Search provider** tab and search for the "Mercado Pago Checkout" app.

![Add payment method](/images/shopify/add-payment-method-es.png)

6. Once you locate it, select it and click **Install**.

![Add payment method](/images/shopify/provider-es.png)

7. Carefully read the information about the requested permissions and click **Install** again.

![Add payment method](/images/shopify/install-app-es.png)

8. After accepting the requested permissions, click **Manage account** to link your Mercado Pago account to your store using your credentials.

![Add payment method](/images/shopify/manage-account-es.png)

> WARNING
>
> Important
>
> The credentials are responsible for identifying the payment collecting account that you will receive in your store. If you do not enter your credentials in the store's admin panel, you will be automatically redirected to set up this step. **Remember, enabling payment methods will only be possible after the successful insertion of your credentials**.

9. In the Mercado Pago admin, go to **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** and select your application. If you haven't created an application yet, access the [developer Dashboard documentation](/developers/en/guides/additional-content/your-integrations/dashboard) to learn how to create one.

10. Click on **Production credentials** in the left menu. Copy the `public_key` and `access_token`.

![Production credentials](/images/woocomerce/test-prod-credentials-api-es.png)

11. Enter your production credentials `access_token` and `public_key` in the corresponding fields, being **careful not to invert the fields when copying and pasting the credentials**.

![Add payment method](/images/shopify/add-credentials-es.png)

> NOTE
>
> Note
>
> Renew your credentials as necessary, consulting the corresponding [documentation](/developers/en/docs/shopify/best-practices/credentials-best-practices/secure-credentials) as a guide. After renewal, it is essential to update them in the Shopify panel. Remember: when changing the password, **it is necessary to renew your credentials**. To do this, delete the old credentials from the panel, copy the new ones, and paste them into the admin panel of the store.

12. Click **Save credentials**.

13. To complete the installation, click **Activate**.

![Activate](/images/shopify/shopify-activate-mp.png)

> At this stage, you can select the images of the payment methods you want to display in your store for illustrative purposes.

------------
Ready! Mercado Pago's Checkout Pro is ready to process payments for your store.