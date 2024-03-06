# Test payments

Purchase tests are essential to ensure that payments are processed correctly before authorizing real transactions. To verify that your store is set up correctly, we recommend testing payments before launching it in production.

> WARNING
> 
> Important
>
> Testing can only be performed after the [integration configuration.](/developers/en/docs/adobe-commerce/integration-configuration)

Here's how to test the integration:
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout Pro

------------
1. Access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** in the Mercado Pago admin and select the application you want to test.
2. Click on **Test Accounts** in the left menu.
3. Within the **Test Accounts** section, click on **Create test account** and create two different accounts: one for the seller and another for the buyer. It is not possible to use the same test account for both roles. Refer to the [Test accounts documentation](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/accounts) for a step-by-step guide on creating test accounts.

<center>

![Create Account](/images/adobe-commerce/test-create-account-es.gif)

</center>

4. Open a new incognito window and log in to Mercado Pago using the seller's test account created in the previous step.
5. In the same incognito window logged in as the seller, access the [Developer dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and create a new application, following the detailed instructions in the [Developer dashboard documentation.](/developers/en/docs/adobe-commerce/additional-content/your-integrations/dashboard)

![Login](/images/adobe-commerce/test-login-esp.gif)

6. Access the application created in the previous step and click on **Production credentials** in the left menu. Copy the `access_token` and `public_key`.

![Production credentials](/images/adobe-commerce/test-prod-credentials-es.png)

7. Go to the settings of the Adobe Commerce panel (**Stores > Configuration > Sales > Payment Methods > Other payment methods > Configure > Basic Settings > Mercado Pago Integration**).
8. Select the **Production** option in the "Checkout operation mode" field.
9. Enter the production credentials `access_token` and `public_key` of the seller's test account.

![Panel](/images/adobe-commerce/test-adobe-commerce.png)

11. Click on **Save Config**.
12. Open a new incognito window and log in to Mercado Pago using the buyer's test account created in step 3.
----[mlb]----
13. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as CPF, RG, phone, and email from the buyer's test account. Also, use the test cards available in the [documentation](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/cards) corresponding.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
13. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as phone and email from the buyer's test account. In the "Documento" field, select the option **OTRO** and enter 9 digits. Also, use the test cards available in the [documentation](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/cards) corresponding.

------------
----[mlb]----
> WARNING
> 
> Important
>
> During testing, you will be operating in the production environment. However, this is a test in which you will be using fictional credentials to simulate real scenarios. After completing the tests, remember to replace the seller's credentials (both production and test), entered in the plugin panel in step 9, with the real credentials from your Mercado Pago account. This action will allow you to continue selling in your store and avoid confusion.

After completing a test purchase using either Checkout Pro or Checkout----[mlb]---- Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------, the approval of the purchase will be visible in the Adobe Administrative Panel, except for purchases made through offline methods----[mlb]---- and Pix------------, which will remain in pending status.

Additionally, the orders will be recorded in the order history of the Mercado Pago seller's test account.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
> WARNING
> 
> Important
>
> During tests on Checkout Pro, you will be operating in the production environment; however, this is a test in which you will be using fictitious credentials to simulate real scenarios. Upon completing the tests, remember to replace the seller's credentials (both production and test) entered in the plugin panel in step 9 with the actual credentials of your Mercado Pago account. This action will allow you to continue selling in your store and avoid confusion.

After completing a test purchase using Checkout Pro, the purchase approval will be visible in the Adobe Administrative Panel, except for purchases made through offline means, which will remain pending.

Additionally, the orders will be recorded in the test seller's Mercado Pago account history.

## Checkout API

1. Access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** in the Mercado Pago admin and select the application you want to test.
2. Click on **Test credentials** in the left menu. Copy the `access_token` and `public_key`.

![Test credentials](/images/adobe-commerce/test-test-credentials-es.png)

3. Go to the Adobe Commerce panel settings (**Stores > Configuration > Sales > Payment Methods > Other payments methods > Configure > Basic Settings > Mercado Pago Integration**).
4. Select the **Sandbox** option in the "Checkout operation mode" field.
5. Enter the test credentials `access_token` and `public_key` for your application.

![Panel](/images/adobe-commerce/test-adobe-commerce.png)

6. Click on **Save Config**.
7. Access your store and make a purchase by providing test information, such as a different phone number and email address than the one associated with your Mercado Pago account. In the "Documento" field, select the **OTRO** option and enter 9 digits. Also, use the test cards available in the [documentation](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/cards) corresponding.

------------