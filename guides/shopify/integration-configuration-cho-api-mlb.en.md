# Checkout Transparente

With [Checkout Transparente](/developers/en/docs/checkout-api/landing), the entire checkout process will take place within the online store environment, without the need to redirect to an external page. In addition to allowing greater control in the customization and integration process, the checkout offers a complete structure for processing payments with the main means available on the market.

> WARNING
>
> Attention
>
> To integrate Checkout Transparente you must have Checkout Pro ("**Checkout Mercado Pago**") in your Shopify store. To learn how to integrate it, go to the [documentation](/developers/en/docs/shopify/integration-configuration/checkout-pro).

To install Checkout Transparente in a Shopify store, follow the steps below:

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. Access the installation site of Mercado Pago’s Checkout Transparente by [clicking here](https://apps.shopify.com/checkout-transparente-mp).
3. Click on the **Add app** button. You will be redirected to an authorization screen, where the permissions you grant to Checkout Transparente's application will be displayed. To continue, click on **Install app**. 
4. On the next screen, put your **production credentials** (`public key` and `access token`) in the fields that request it. Go to [Dashboard](https://www.mercadopago.com.ar/developers/panel/app) to get the credentials of your application and, if you have not created an application yet, check [this documentation](/developers/en/docs/shopify/additional-content/your-integrations/introduction) to learn how to create it.
5. In the field **How do you want to operate?**, select the option "I want to test my store" to perform test transactions and ensure the smooth operation of the checkout.
6. Then, you can **configure installments and interests** in case you want to offer them in the store. To configure it, click on **Edit**.
7. In the section **What payment methods do you want to offer?**, select the type of payment methods that the store will offer through Checkout Transparente. You can choose Mercado Pago, credit cards, boleto bancário, or Pix.
8. Click on **Save changes** to complete the installation.

> In case of renewing your credentials, remember to replace both the production and test credentials in your integration.

![installation choapi](/images/shopify/configurar-chotransparente-pt.gif)

> NOTE
>
> Important
>
> After installed, the Transparent Checkout can take up to 10 minutes to appear linked in the Shopify store due to the storage in the cache. If you need help to install Transparent Checkout, contact [Support.](https://www.mercadopago.com/developers/en/support)