# Test payments

Purchase tests are essential to ensure that payments are processed correctly before authorizing real transactions. To verify that your store is set up correctly, we recommend testing payments before going live.

> WARNING
>
> Important
>
> Testing can only be performed after the [integration setup step](/developers/en/docs/shopify/integration-configuration/checkout-pro).

Here's how to test the integration:

1. Access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** in the Mercado Pago admin and select the application you want to test.
2. Click on **Test accounts** in the left menu.
3. Within the **Test accounts** section, click on **Create test account** and create two different accounts: one for the seller and another for the buyer. It's not possible to use the same test account for both seller and buyer. Refer to the [Test accounts documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/accounts) for step-by-step account creation.

![Create account](/images/shopify/test-create-account.gif)

4. Open a new incognito window and log in to Mercado Pago using the seller's test account created in the previous step.
5. In the same incognito window logged in as a seller, access the [Developer dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and create a new application, following the detailed instructions in the [Developer dashboard documentation](/developers/en/docs/shopify/additional-content/your-integrations/dashboard).

![Login](/images/shopify/test-login.gif)

Now, follow the step-by-step according to the chosen checkout type to process payments:

## Checkout Pro

6. Access the application created in step 5 and click on **Production credentials** in the left menu. Copy the `client_id` and `client_secret`.

![Production Credentials](/images/shopify/test-prod-credentials.png)

7. Go to the Shopify panel settings (**Settings > Payments > Manage**).
8. Enter the `client_id` and `client_secret` from the seller's test account.

![Panel](/images/shopify/test-pro-shopify.png)

9. Click **Save**.
10. Access Mercado Pago and log in to the buyer's test account created in step 3.
----[mlb]----
11. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as CPF, RG, phone, and email from the buyer's test account. Also, use the test cards available in the [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards) corresponding.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
11. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as phone and email from the buyer's test account. In "Documento," select the option **OTRO** and enter 9 digits. Also, use the test cards available in the [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards) corresponding.

------------

## Checkout Transparente

> WARNING
>
> Important
>
> To ensure the correct operation of Checkout Transparente, it is essential to set up Checkout Pro and use the respective production credentials of the seller's test account in both configurations, both in Transparent Checkout and Checkout Pro.

6. Access the application created in step 5 and click on **Production credentials** in the left menu. Copy the `public_key`.

![Production credentials](/images/shopify/test-prod-credentials.png)

7. Go to the Shopify panel settings (**Apps > Transparent Checkout MP**).
8. Enter the `public_key` from the seller's test account.

![Panel](/images/shopify/test-api-shopify.png)

9. Click **Save Changes**.
10. Access Mercado Pago and log in to the buyer's test account created in step 3.
----[mlb]----
11. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as CPF, RG, phone, and email from the buyer's test account. Also, use the test cards available in the [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards) corresponding.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
11. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as phone and email from the buyer's test account. In "Documento," select the option **OTRO** and enter 9 digits. Also, use the test cards available in the [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards) corresponding.

------------

> WARNING
> 
> Important
>
> During testing, you will be operating in the production environment. However, this is a test in which you will be using fictitious credentials to simulate real scenarios. After completing the tests, remember to replace the seller's credentials (both production and test) entered in the plugin panel in steps 8 with the actual credentials from your Mercado Pago account. This action will allow you to continue selling in your store and avoid confusion.

After completing a test purchase using Checkout Pro or Checkout Transparente, the purchase approval will be visible in the Shopify admin panel, except for purchases made offline and with Pix, which will remain with pending status.

Furthermore, orders will be recorded in the history of the Mercado Pago test seller account.