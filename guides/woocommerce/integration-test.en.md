# Testing payments

Purchase tests are essential to ensure that payments are processed correctly before authorizing real transactions. To verify if your store is configured correctly, we recommend testing payments before launching it in production.

> WARNING
> 
> Important
>
> Testing can only be performed after the [integration configuration.](/developers/en/docs/woocommerce/integration-configuration/plugin-configuration)

Here's how to test the integration:
1. Access **[Your integrations](https://www.mercadopago.com/developers/panel/app)** in the Mercado Pago admin and select the application you want to test.
2. Click on **Test accounts** in the left menu.
3. Within the **Test accounts** section, click on **Create test account** and create two different accounts: one for the seller and another for the buyer. It is not possible to use the same test account for both roles. Refer to the [Test accounts documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/accounts) for a step-by-step guide on creating test accounts.

![Create account](/images/woocomerce/test-create-account.gif)

4. Open a new incognito window and log in to [Mercado Pago](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEA42QTU_DMAyG_0sPnNAGQuJjUoXSUrZq6zrWDTYuVpZ4aUTSVGlKhxD_nbTAnaOf149j5zNQRsgK3EeNwSTAU60kky44D2pF3dFYDZL7QNceNdLhb6kOfQu1VKND2wSTz36QQB6hl_pRR6oa9E20dSUclek8G97yTDaAJ-9VVEGHh3eJffpnCOOL0rm6mYzHXdeNNFpGuampMCNm9OhgxzWV_J4ZjuHDZbFaXOyn-VnrNDSmtQxDYYxQOBCNXLY6bJBaVg6EUe11UYXZIoJsBVMgOUTzF9hBkZB1PIN0WWxgsytglmfJj2Mqh5ULh6SnXhwCf4UOY5KtyHJGhv7BTjfbOM2XZAGr7To_09Q5cMao8Obi9uru-vryB3XG8v-uIZiSPExIStMnc4jLLK35x_yE8bQk2fMueUxJdAXYvW4TQvakICQR85s9PEDUJcHXuf_fxi9hKXsLJs62-PUNyyMqtf0BAAA/user) using the seller's test account created in the previous step.
5. In the same incognito window logged in as the seller, access the [Developer dashboard](https://www.mercadopago.com/developers/panel/app) and create a new application, following the detailed instructions in the [Developer dashboard documentation.](/developers/pt/docs/woocommerce/additional-content/your-integrations/dashboard)

![Login](/images/woocomerce/test-login.gif)

6. Access the application created in the previous step and click on **Production credentials** in the left menu. Copy the `access_token` and the `public_key`.

![Production credentials](/images/woocomerce/test-prod-credentials.png)

7. Go to the settings of the Woocommerce panel (**WooCommerce > Mercado Pago > Integrate your store with Mercado Pago**).
8. Enter the production credentials `access_token` and `public_key` of the seller's test account in the **Production credentials** field.
9. In the application created in step 5, click on **Test credentials** in the left menu. Copy the `access_token` and `public_key`.

![Test credentials](/images/woocomerce/test-test-credentials.png)

10. Also, enter the test credentials `access_token` and `public_key` of the seller's test account in the **Test credentials** field.

![Panel](/images/woocomerce/test-woo.png)

11. Click on **Save and continue**.
12. Access [Mercado Pago](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEA42QTU_DMAyG_0sPnNAGQuJjUoXSUrZq6zrWDTYuVpZ4aUTSVGlKhxD_nbTAnaOf149j5zNQRsgK3EeNwSTAU60kky44D2pF3dFYDZL7QNceNdLhb6kOfQu1VKND2wSTz36QQB6hl_pRR6oa9E20dSUclek8G97yTDaAJ-9VVEGHh3eJffpnCOOL0rm6mYzHXdeNNFpGuampMCNm9OhgxzWV_J4ZjuHDZbFaXOyn-VnrNDSmtQxDYYxQOBCNXLY6bJBaVg6EUe11UYXZIoJsBVMgOUTzF9hBkZB1PIN0WWxgsytglmfJj2Mqh5ULh6SnXhwCf4UOY5KtyHJGhv7BTjfbOM2XZAGr7To_09Q5cMao8Obi9uru-vryB3XG8v-uIZiSPExIStMnc4jLLK35x_yE8bQk2fMueUxJdAXYvW4TQvakICQR85s9PEDUJcHXuf_fxi9hKXsLJs62-PUNyyMqtf0BAAA/user) and log in to the buyer's test account created in step 3.
13. In the same window logged in as the buyer, access your store and make a purchase providing test information such as CPF, RG, phone number, and email from the buyer's test account. Also, use the test cards available in the [documentation](/developers/pt/docs/woocommerce/additional-content/your-integrations/test/cards) accordingly.

> WARNING
> 
> Important
>
> During testing, you will be operating in the production environment. However, this is a test in which you will be using fictional credentials to simulate real scenarios. After completing the tests, remember to replace the seller's credentials (both production and test), entered in the plugin panel in steps 8 and 10, with the real credentials from your Mercado Pago account. This action will allow you to continue selling in your store and avoid confusion.

After completing a test purchase using either Checkout Pro or Checkout----[mlb]----Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------, theapproval of the purchase will be visible in the Woocommerce Administrative Panel, except for purchases made through offline methods and Pix, which will remain in pending status.

Additionally, the orders will be recorded in the order history of the Mercado Pago seller's test account.