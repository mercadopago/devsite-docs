# How to migrate to the new Mercado Pago app for cards

See below how to install the new app (**Mercado Pago Cards**) and uninstall the old one (**Checkout Transparente MP**) to avoid service interruption on Shopify.

----[mlb]----
The **Mercado Pago Cards** ([Checkout Transparente](/developers/en/docs/checkout-api/landing)) is an app that allows transparent payments with debit or credit cards where the entire checkout process happens within the online store environment, without the need to redirect to an external page. In addition to providing greater control in the customization and integration process, it reduces cart abandonment and increases the possibility of conversion.

> WARNING
>
> Attention
>
> The new app is only for card payments. To process payments with **Pix** or **boleto bancário**, use [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm]----
**Mercado Pago Cards** ([Checkout API](/developers/en/docs/checkout-api/landing)) is an app that allows transparent payments with debit or credit cards, where the entire checkout process happens within the online store environment, without the need to redirect to an external page. In addition to providing greater control in the customization and integration process, it reduces cart abandonment and increases the possibility of conversion.

------------

## Deactivate the old app

Before installing the new version, it is necessary to uninstall the configuration of the old app.

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's admin panel, click on **Settings**.
3. Once there, select the **Apps and sales channels** option.
4. Locate the app named "Checkout Transparente MP" and click on **Manage**.
5. Click on the **additional options menu** and then on **Uninstall**.
6. Return to the store's admin panel and click on **Settings** again.
7. Once there, select the **Payments** option.
8. Locate the old app named "Mercado Pago" and click on **Manage**.
9. Finally, click on **Deactivate** and then on **Uninstall**.

> WARNING
>
> Attention
>
> In this new version, it is no longer mandatory to install another app for the **Mercado Pago Cards** to function.
> <br><br>
> However, it is important to note that the new app is only for card payments. To process payments with **Pix** or **boleto bancário**, use [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).

## Install the new app

To install the **Mercado Pago Cards** checkout on a Shopify store, we offer two installation models below.

### Install via Marketplace

1. From the link received from Mercado Pago's commercial department, access the **Mercado Pago Cards** app page on the "Marketplace" and click **Install**. If you haven't already, log in with your Shopify account.
2. Read carefully the information about the requested permissions and click **Install** again.
3. After accepting the requested permissions, click **Manage account** to input your credentials and link your Mercado Pago account to the store.

> The data to be entered are the **production credentials**. For more information, access the [Credentials](/developers/en/guides/additional-content/your-integrations/credentials) documentation.

4. Enter your production credentials (`access_token` and `public_key`) in the corresponding fields, **being careful not to swap the fields when copying and pasting the credentials**.

> NOTE
>
> Note
>
> Once entered, the credentials will no longer be required for future installations of Mercado Pago apps for Shopify.<br><br>
> <br><br>
> Renew your credentials as needed, referring to the relevant [documentation](/developers/en/docs/shopify/best-practices/credentials-best-practices/secure-credentials)  as a guide. After renewal, it is essential to update them in the Shopify panel. 
> <br><br>
> Remember: when changing the password, **it is necessary to renew your credentials**. To do this, click on **Manage account** to change your production credentials (`access_token` and `public_key`) in the corresponding fields, **being careful not to swap the fields when copying and pasting the credentials**.

5. Click on **Save credentials**.
6. Finally, click on the **Verify activation** option of Mercado Pago Cards, go to the "Settings" section of Shopify, and click **Activate** to activate the app and complete the installation.

Done! The **Mercado Pago Cards** checkout is ready to receive payments.

### Install via Shopify admin panel

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's administration panel, click on **Settings** in the bottom-left corner of the page.
3. Once there, select the **Payments** option from the left-hand side menu.
4. Under "Payment providers" click **Choose a provider**.
5. On the "External payment providers" screen, select the **Search for a provider** tab and search for the "Mercado Pago Cartões" app.
6. Once you've found it, select it and click **Install**. Carefully read the information about the requested permissions and click **Install** again.
7. After accepting the requested permissions, click **Manage account** to input your credentials and link your Mercado Pago account to the store.

> The data to be entered are the **production credentials**. For more information, access the [Credentials](/developers/en/guides/additional-content/your-integrations/credentials) documentation.

8. Enter your production credentials (`access_token` and `public_key`) in the corresponding fields, **being careful not to swap the fields when copying and pasting the credentials**.

> NOTE
>
> Note
>
> Once entered, the credentials will no longer be required for future installations of Mercado Pago apps for Shopify.<br><br>
> <br><br>
> Renew your credentials as needed, referring to the relevant [documentation](/developers/en/docs/shopify/best-practices/credentials-best-practices/secure-credentials)  as a guide. After renewal, it is essential to update them in the Shopify panel. <br><br>
> <br><br>
> Remember: when changing the password, **it is necessary to renew your credentials**. To do this, click on **Manage account** to change your production credentials (`access_token` and `public_key`) in the corresponding fields, **being careful not to swap the fields when copying and pasting the credentials**.

9. Click on **Save credentials**.
10. Finally, click on the **Verify activation** option of Mercado Pago Cards, go to the "Settings" section of Shopify, and click **Activate** to activate the app and complete the installation.

Done! The **Mercado Pago Cards** checkout is ready to receive payments.

### Configure interest-free installments

After installing and activating the **Mercado Pago Cards** app, set up the option to offer your customers the possibility to pay in interest-free installments with any credit card. To do this, follow the steps below.

1. Log in to your [Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/home)..
2. o to the "Your business > Costs" section and select the **Checkout** option.
3. In "Interest-free installments," click on **Configure installments**.
4. Next, click on **Configure interest-free installments**.
5. Finally, enable the **Offer interest-free installments** option and choose how many installments you want to offer in your store.