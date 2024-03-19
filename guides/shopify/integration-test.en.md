# Test payments

Purchase tests are essential to ensure that payments are being processed correctly before authorizing real transactions. To verify that your store is set up correctly, we recommend testing payments before going live.

----[mla, mlm, mpe, mco, mlu, mlc]----
> WARNING
>
> Important
>
> Testing can only be performed after the [integration configuration](/developers/en/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlb]----
> WARNING
> 
> Important
>
> The test can only be performed after the integration configuration step. To set up Checkout Pro, access [this documentation.](/developers/en/docs/shopify/integration-configuration/checkout-pro) To configure Checkout Transparente, access [this documentation.](/developers/en/docs/shopify/integration-configuration/transparent-checkout)

------------
Here's how to test the integration:

1. Access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** in the Mercado Pago admin pannel and select the application you want to test.
2. Click on **Test accounts** in the left menu.
3. Within the **Test accounts** section, click on **Create test account** and create two different accounts: one for the seller and another for the buyer. It's not possible to use the same test account for both seller and buyer. Refer to the [Test accounts documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/accounts) for step-by-step account creation.

<center>

![Create account](/images/shopify/test-create-account-es.gif)

</center>

4. Open a new incognito window and log in to Mercado Pago using the seller's test account created in the previous step.
5. In the same incognito window logged in as a seller, access the [Developer dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and create a new application, following the detailed instructions in the [Developer dashboard documentation](/developers/en/docs/shopify/additional-content/your-integrations/dashboard).

![Login](/images/shopify/test-login-esp.gif)
----[mlb]----
Now, follow the step-by-step according to the chosen checkout type to process payments:
## Checkout Pro
------------
----[mlb]----
6. Access the application created in step 5 and click on **Production credentials** in the left menu. Copy the `client_id` and `client_secret`.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
6. Access the application created in step 5 and click on **Production credentials** in the left menu. Copy the `public_key` and `access_token`.

------------
![Production credentials](/images/shopify/test-prod-credentials-es.png)

7. Go to the Shopify panel settings (**Settings > Payments**) and click on **Manage** for the Mercado Pago provider.
----[mlb]----
8. Enter the `client_id` and `client_secret` from the seller's test account.

![Panel](/images/shopify/test-pro-shopify.png)

9. Click on **Save**.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
8. Enter the `public_key` and `access_token` from the seller's test account.

![Panel](/images/shopify/test-pro-shopify-es-all.jpg)

------------
9. Click on **Save credentials**.
10. Open a new incognito window and log in to Mercado Pago using the buyer's test account created in step 3.
----[mlb]----
11. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as CPF, RG, phone, and email from the buyer's test account. Also, use the test cards available in the [corresponding documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards) .

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
11. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as phone and email from the buyer's test account. In "Documento," select the option **OTRO** and enter 9 digits. Also, use the test cards available in the [corresponding documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

------------
----[mlb]---- 
## Checkout Transparente

> WARNING
>
> Important
>
> To ensure the correct operation of Checkout Transparente, it is essential to set up Checkout Pro and use the respective production credentials of the seller's test account in both configurations, both in Checkout Transparente and Checkout Pro.

6. Access the application created in step 5 and click on **Production credentials** in the left menu. Copy the `public_key`.

![Production credentials](/images/shopify/test-prod-credentials-es.png)

7. Go to the Shopify panel settings (**Apps > Checkout Transparente MP**).
8. Enter the `public_key` from the seller's test account.
9. Activate **Production Mode for Mercado Pago checkouts**. Since we are using test accounts to test the integration, it is necessary to enable the production mode in Checkout Transparente.

![Panel](/images/shopify/test-api-shopify.png)

10. Click **Save Changes**.
11. Open a new incognito window and log in to Mercado Pago using the buyer's test account created in step 3.
12. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as CPF, RG, phone, and email from the buyer's test account. Also, use the test cards available in the [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards) corresponding.

------------
> WARNING
> 
> Important
>
> During testing, you will be operating in the production environment. However, this is a test in which you will be using fictitious credentials to simulate real scenarios. After completing the tests, remember to replace the seller's credentials (both production and test) entered in the plugin panel in steps 8 with the actual credentials from your Mercado Pago account. This action will allow you to continue selling in your store and avoid confusion.

After completing a test purchase using Checkout Pro----[mlb]---- or Checkout Transparente------------, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made offline----[mlb]---- and Pix------------, which will remain with pending status.

Furthermore, orders will be recorded in the history of the Mercado Pago test seller account.