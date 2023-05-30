# Configure Checkout Transparente

With the [Checkout Transparente](/developers/en/docs/checkout-api/landing), the entire checkout process will take place within the online store environment, without the need to redirect to an external page. In addition to allowing greater control in the customization and integration process, the checkout offers a complete structure for processing payments with the main means available on the market.

> WARNING
>
> Attention
>
> To integrate Checkout Transparente you must have Checkout Pro in your Shopify store. To learn how to integrate it, go to the [documentation.](/developers/en/docs/shopify/integration-configuration/checkout-pro)

To install Checkout Transparente in a Shopify store, follow the steps below:

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. Access the installation site of Mercado Pago’s Checkout Transparent [clicking here](https://apps.shopify.com/checkout-transparente-mp).
3. Click on the **Add app** button. You will be redirected to an authorization screen, where the permissions you grant to Checkout Transparent's application will be displayed. To continue, click on **Install app**. 
4. On the next screen, you must enter your test and production Public Key and Access Token credentials. Go to [Dashboard](https://www.mercadopago.com.ar/developers/panel/app) to get the credentials of your application. If you have not created an application yet, learn how to do it in [this documentation](/developers/en/docs/shopify/additional-content/dashboard/introduction).  
5. In the field **How do you want to operate?**, select the option "I want to test my store" to perform test transactions and ensure the smooth operation of the checkout.
6. Then, you can **configure installments and interests** in case you want the store to offer this. To configure it, click on **Edit**.
7. In the section **What payment methods do you want to offer?**, select the type of payment methods that the store will offer through Checkout Transparent. You can choose Mercado Pago, credit cards, boleto, or Pix.
8. Click on **Save changes** to complete the installation.

> In case of renewing your credentials, remember to replace both the production and test credentials in your integration.

![installation choapi](/images/shopify/configurar-chotransparente-pt.gif)

> NOTE
>
> Important
>
> After installed, the Transparent Checkout can take up to 10 minutes to appear linked in the Shopify store due to the storage in the cache. If you need help to install Transparent Checkout, contact [Support.](https://www.mercadopago.com/developers/en/support)



> WARNING
>
> Attention
>
> If you are using the old Mercado Pago app ("Mercado Pago"), [click here](/developers/en/docs/shopify/how-tos/migration) to find out how to migrate to the current version ("Checkout Mercado Pago" ).

To install Checkout Pro in a Shopify store, follow the steps below:

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's administrative panel, click on **Settings**.
3. Once there, select the **Payments** option. 
4. In "Additional payment methods", click on the **Add payment methods** option.
5. Go to the **Search by provider** tab and look for the new app with the name "Checkout Mercado Pago".
6. Once you have found it, select it and click **Activate** and then **Connect**.
7. Select **Install App** and then **Manage**.
8. Put your **production credentials** (`public key` and `access token`) in the fields that request it and click **Save**. Remember to keep your [credentials](/developers/en/docs/shopify/additional-content/credentials) handy.
9. To finish the installation, select **Activate Checkout Mercado Pago**.

> In this step, you can select the images of the means of payment that you want to show in your store for illustrative purposes. Also, if you wish, you can enable [test mode.](/developers/en/docs/shopify/sales-processing/integration-test)
> <br/><br/>
> In case of renewing your credentials, remember to replace both the production and test credentials in your integration.