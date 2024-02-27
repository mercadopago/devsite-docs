# Testing payments

Purchase tests are essential to ensure that payments are processed correctly before authorizing real transactions. To verify that your store is set up correctly, we recommend testing payments before launching it in production.

> WARNING
> 
> Important
>
> Testing can only be performed after the [integration configuration.](/developers/en/docs/adobe-commerce/integration-configuration)

Here's how to test the integration:
1. Access **[Your integrations](https://www.mercadopago.com/developers/panel/app)** in the Mercado Pago admin and select the application you want to test.
2. Click on **Test Accounts** in the left menu.
3. Within the **Test Accounts** section, click on **Create test account** and create two different accounts: one for the seller and another for the buyer. It is not possible to use the same test account for both roles. Refer to the [Test accounts documentation](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/accounts) for a step-by-step guide on creating test accounts.

![Create Account](/images/adobe-commerce/test-create-account.gif)

4. Open a new incognito window and log in to [Mercado Pago](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEA42QTU_DMAyG_0sPnNAGQuJjUoXSUrZq6zrWDTYuVpZ4aUTSVGlKhxD_nbTAnaOf149j5zNQRsgK3EeNwSTAU60kky44D2pF3dFYDZL7QNceNdLhb6kOfQu1VKND2wSTz36QQB6hl_pRR6oa9E20dSUclek8G97yTDaAJ-9VVEGHh3eJffpnCOOL0rm6mYzHXdeNNFpGuampMCNm9OhgxzWV_J4ZjuHDZbFaXOyn-VnrNDSmtQxDYYxQOBCNXLY6bJBaVg6EUe11UYXZIoJsBVMgOUTzF9hBkZB1PIN0WWxgsytglmfJj2Mqh5ULh6SnXhwCf4UOY5KtyHJGhv7BTjfbOM2XZAGr7To_09Q5cMao8Obi9uru-vryB3XG8v-uIZiSPExIStMnc4jLLK35x_yE8bQk2fMueUxJdAXYvW4TQvakICQR85s9PEDUJcHXuf_fxi9hKXsLJs62-PUNyyMqtf0BAAA/user) using the seller's test account created in the previous step.
5. In the same incognito window logged in as the seller, access the [Developer dashboard](https://www.mercadopago.com/developers/panel/app) and create a new application, following the detailed instructions in the [Developer dashboard documentation.](/developers/en/docs/adobe-commerce/additional-content/your-integrations/dashboard)

![Login](/images/adobe-commerce/test-login.gif)

6. Access the application created in the previous step and click on **Production credentials** in the left menu. Copy the `access_token` and `public_key`.

![Production credentials](/images/adobe-commerce/test-prod-credentials.png)

7. Go to the settings of the Adobe Commerce panel (**Stores > Configuration > Sales > Payment Methods > Other payment methods > Configure > Basic Settings > Mercado Pago Integration**).
8. Select the **Production** option in the "Checkout operation mode" field.
9. Enter the production credentials `access_token` and `public_key` of the seller's test account.

![Panel](/images/adobe-commerce/test-adobe-commerce.png)

11. Click on **Save Config**.
12. Access [Mercado Pago](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEA42QTU_DMAyG_0sPnNAGQuJjUoXSUrZq6zrWDTYuVpZ4aUTSVGlKhxD_nbTAnaOf149j5zNQRsgK3EeNwSTAU60kky44D2pF3dFYDZL7QNceNdLhb6kOfQu1VKND2wSTz36QQB6hl_pRR6oa9E20dSUclek8G97yTDaAJ-9VVEGHh3eJffpnCOOL0rm6mYzHXdeNNFpGuampMCNm9OhgxzWV_J4ZjuHDZbFaXOyn-VnrNDSmtQxDYYxQOBCNXLY6bJBaVg6EUe11UYXZIoJsBVMgOUTzF9hBkZB1PIN0WWxgsytglmfJj2Mqh5ULh6SnXhwCf4UOY5KtyHJGhv7BTjfbOM2XZAGr7To_09Q5cMao8Obi9uru-vryB3XG8v-uIZiSPExIStMnc4jLLK35x_yE8bQk2fMueUxJdAXYvW4TQvakICQR85s9PEDUJcHXuf_fxi9hKXsLJs62-PUNyyMqtf0BAAA/user) and log in to the buyer's test account created in step 3.
13. In the same window logged in as the buyer, access your store and make a purchase providing test information such as [CPF](https://www.4devs.com.br/gerador_de_cpf), [RG](https://www.4devs.com.br/gerador_de_rg), [phone number](https://geradornv.com.br/gerador-telefone/), and email from the buyer's test account. Also, use the test cards available in the [documentation](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/cards) accordingly.

> WARNING
> 
> Important
>
> During testing, you will be operating in the production environment. However, this is a test in which you will be using fictional credentials to simulate real scenarios. After completing the tests, remember to replace the seller's credentials (both production and test), entered in the plugin panel in step 9, with the real credentials from your Mercado Pago account. This action will allow you to continue selling in your store and avoid confusion.

After completing a test purchase using either Checkout Pro or Checkout----[mlb]----Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------, the approval of the purchase will be visible in the Adobe Administrative Panel, except for purchases made through offline methods and Pix, which will remain in pending status.

Additionally, the orders will be recorded in the order history of the Mercado Pago seller's test account.