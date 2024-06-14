----[mlb]----
# Cards

**Mercado Pago Cards** ([Checkout Transparente](/developers/en/docs/checkout-api/landing)) is an app that allows transparent payments with debit or credit cards, where the entire checkout process happens within the online store environment, without the need to redirect to an external page. In addition to providing greater control in the customization and integration process, it reduces cart abandonment and increases the possibility of conversion.

> WARNING
>
> Attention
>
> The new app is only for card payments. To process payments with **Pix** or **boleto bancário**, use [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).
> <br><br>
> We will soon announce the launch of the new app exclusively for Pix and provide the necessary documentation for migration or installation.

------------
----[mlm]----
# Cards

**Mercado Pago Cards** ([Checkout API](/developers/en/docs/checkout-api/landing)) is an app that allows transparent payments with debit or credit cards, where the entire checkout process happens within the online store environment, without the need to redirect to an external page. In addition to providing greater control in the customization and integration process, it reduces cart abandonment and increases the possibility of conversion.

------------

To install the **Mercado Pago Cards** checkout on a Shopify store, we offer the two installation models below.

## Install via Shopify admin panel

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's administration panel, click on **Settings** in the bottom-left corner of the page.
3. Once there, select the **Payments** option from the left-hand side menu.
4. In "Accepted payment methods," click on **Add payment method**.
5. On the "External payment providers" screen, serach for the app "Mercado Pago Cards".
6. Once you've found it, select it and click **Install**. Carefully read the information about the requested permissions and click **Install** again.
7. After accepting the requested permissions, click **Manage account** to input your credentials and link your Mercado Pago account to the store.

> The credentials are responsible for identifying the account collecting the payments that you will receive in your store.

8. In the Mercado Pago admin, go to **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** and select your application. If you haven't created an application yet, access the [developer Dashboard documentation](/developers/en/guides/additional-content/your-integrations/dashboard) to learn how to create one.
9. Click on **Production credentials** in the left menu. Copy the `public_key` and `access_token`.
10. Return your store settings on Shopify and enter your production credentials (`access_token` and `public_key`) in the corresponding fields, **being careful not to swap the fields when copying and pasting the credentials**.

> NOTE
>
> Note
>
> Once entered, the credentials will no longer be required for future installations of Mercado Pago apps for Shopify.
> <br><br>
> Remember that, when changing the Shopify password, **it is necessary to renew your credentials**. To do so, follow the instructions in the [Best practices for credentials](/developers/en/docs/shopify/best-practices/credentials-best-practices/secure-credentials) documentation. Then, to update them on your Shopify account,  click on **Manage account** and fill in the corresponding fields with your `access_token` and `public_key` **being careful not to swap the fields when copying and pasting the credentials**.

11. Click on **Save credentials**.
12. Finally, click on the **Verify activation** option of Mercado Pago Cards, go to the **Settings** section of Shopify, and click **Activate** to activate the app and complete the installation.

Done! The **Mercado Pago Cards** checkout is ready to receive payments.

## Install via Marketplace

----[mlb]----

1. From [this link](https://apps.shopify.com/mercado-pago-cartoes?locale=pt-BR), access the **Mercado Pago Cards** app page on the "Marketplace" and click **Install**. If you haven't already, log in with your Shopify account.

------------
----[mlm]----

1. From [this link](https://apps.shopify.com/mercado-pago-tarjetas-mx?locale=pt-BR), access the **Mercado Pago Cards** app page on the "Marketplace" and click **Install**. If you haven't already, log in with your Shopify account.

------------
2. Read carefully the information about the requested permissions and click **Install** again.
3. After accepting the requested permissions, click **Manage account** to input your credentials and link your Mercado Pago account to the store.

> The credentials are responsible for identifying the account collecting the payments that you will receive in your store.

4. In the Mercado Pago admin, go to **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** and select your application. If you haven't created an application yet, access the [developer Dashboard documentation](/developers/en/guides/additional-content/your-integrations/dashboard) to learn how to create one.
5. Click on **Production credentials** in the left menu. Copy the `public_key` and `access_token`.
6. Return your store settings on Shopify and enter your production credentials (`access_token` and `public_key`) in the corresponding fields, **being careful not to swap the fields when copying and pasting the credentials**.

> NOTE
>
> Note
>
> Once entered, the credentials will no longer be required for future installations of Mercado Pago apps for Shopify.
> <br><br>
> Remember that, when changing the Shopify password, **it is necessary to renew your credentials**. To do so, follow the instructions in the [Best practices for credentials](/developers/en/docs/shopify/best-practices/credentials-best-practices/secure-credentials) documentation. Then, to update them on your Shopify account,  click on **Manage account** and fill in the corresponding fields with your `access_token` and `public_key` **being careful not to swap the fields when copying and pasting the credentials**.

7. Click on **Save credentials**.
8. Finally, click on the **Verify activation** option of Mercado Pago Cards, go to the "Settings" section of Shopify, and click **Activate** to activate the app and complete the installation.

Done! The **Mercado Pago Cards** checkout is ready to receive payments.

## Configure interest-free installments

After installing and activating the **Mercado Pago Cards** app, set up the option to offer your customers the possibility to pay in interest-free installments with any credit card. To do this, follow the steps below.

1. Log in to your [Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. Go to the **Your business > Costs** section and select the **Checkout** option.
3. In "Interest-free installments," click on **Configure installments**.
4. Next, click on **Configure interest-free installments**.
5. Finally, enable the **Offer interest-free installments** option and choose how many installments you want to offer in your store.