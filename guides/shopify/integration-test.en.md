# Test payments

Purchase tests are essential to ensure that payments are being processed correctly before authorizing real transactions. To verify that your store is set up correctly, we recommend testing payments before going live.

----[mla, mpe, mco, mlu, mlc]----
> WARNING
> 
> Important
>
> The test can only be performed after the integration configuration stage of [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).


------------
----[mlb]----
> WARNING
> 
> Important
>
> The test can only be performed after the integration configuration stage of one of the payment checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm]----
> WARNING
> 
> Important
>
> The test can only be performed after the integration configuration stage of one of the payment checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).

------------

See below how to test the integration:

1. Access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** in the Mercado Pago admin and select the application you want to test.
2. Click on **Test accounts** in the menu on the left.
3. In the "Test accounts" section, click on **Create test account** and create two different accounts: one for the seller and one for the buyer. You cannot use the same test account for both seller and buyer. Refer to the [Test accounts documentation](/developers/es/docs/shopify/additional-content/your-integrations/test/accounts) for step-by-step instructions on creating test accounts.
4. Open a new incognito window and log in to Mercado Pago using the seller test account created in the previous step.
5. In the same incognito window logged in as the seller, access the [Developer panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and create a new application, following the detailed instructions in the [Developer panel documentation](/developers/es/docs/shopify/additional-content/your-integrations/dashboard).

> WARNING
>
> Important
>
> If, when logging in with a test account or navigating through the Your integrations sections, email authentication is requested, refer to our documentation to learn [how to validate login in test accounts](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validate_login_with_test_users).

6. Access the application created in step 5 and click on **Production credentials** in the menu on the left. Copy the `public_key` and the `access_token`.

----[mlm]----
7. Go to the settings of the Shopify panel (**Settings > Payments**) and click to **Manage** one of the Mercado Pago checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).
8. Enter the `public_key` and `access_token` of the seller test account.
9. Click on **Save credentials**.

Now, follow the step-by-step instructions according to the selected checkout type to process payments:

## Mercado Pago Cards

10. Access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

## Mercado Pago Checkout Pro

10. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.
11. In the same window logged in as the buyer, access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

After completing a test purchase using one of the checkouts, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made through offline methods which will remain in pending status.

> WARNING
> 
> Important
>
> During testing, you will be operating in the production environment; however, it is a test where you will be using fictitious credentials to simulate real scenarios. Upon completing the tests, remember to replace the seller credentials (both production and test), entered in the plugin panel in step 8, with your real Mercado Pago account credentials. This action will allow you to continue selling in your store and avoid confusion.
> <br><br>
> Additionally, the orders will be recorded in the transaction history of the Mercado Pago seller test account.

------------
----[mlb]----
7. Go to the settings of the Shopify panel (**Settings > Payments**) and click to **Manage** one of the Mercado Pago checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).
8. Enter the `public_key` and `access_token` of the seller test account.
9. Click on **Save credentials**.

Now, follow the step-by-step instructions according to the selected checkout type to process payments:

## Mercado Pago Cards

10. Access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

## Mercado Pago Checkout Pro

10. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.
11. In the same window logged in as the buyer, access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

After completing a test purchase using one of the checkouts, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made through offline methods which will remain in pending status.

> WARNING
> 
> Important
>
> During testing, you will be operating in the production environment; however, it is a test where you will be using fictitious credentials to simulate real scenarios. Upon completing the tests, remember to replace the seller credentials (both production and test), entered in the plugin panel in step 8, with your real Mercado Pago account credentials. This action will allow you to continue selling in your store and avoid confusion.
> <br><br>
> Additionally, the orders will be recorded in the transaction history of the Mercado Pago seller test account.

------------
----[mla, mpe, mco, mlu, mlc]----
7. Go to the settings of the Shopify panel (**Settings > Payments**) and click to **Manage** [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).
8. Enter the `public_key` and `access_token` of the seller test account.
9. Click on **Save credentials**.
10. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.
11. In the same window logged in as the buyer, access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

After completing a test purchase using one of the checkouts, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made through offline methods which will remain in pending status.

> WARNING
> 
> Important
>
> During testing, you will be operating in the production environment; however, it is a test where you will be using fictitious credentials to simulate real scenarios. Upon completing the tests, remember to replace the seller credentials (both production and test), entered in the plugin panel in step 8, with your real Mercado Pago account credentials. This action will allow you to continue selling in your store and avoid confusion.
> <br><br>
> Additionally, the orders will be recorded in the transaction history of the Mercado Pago seller test account.

------------