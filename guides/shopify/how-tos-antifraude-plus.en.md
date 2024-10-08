# How to prevent fraud in card payments

The **Mercado Pago Antifraude Plus** is an add-on for [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) that optimizes security validation and maintains high approval rates, adding more security by identifying the device ID of buyers and preventing fraud and chargebacks.

The app uses **3DS 2.0 (3-D Secure Authentication 2.0)** technology to authenticate credit card transactions before completing the payment, verifying whether the person making the purchase is actually the cardholder or has access to the cardholder's accounts. Check [3DS 2.0](/developers/en/docs/how-tos/improve-payment-approval/3ds) for more information on how this type of authentication works.

To install Mercado Pago Antifraude Plus, follow the steps below.

1. Access the [**Mercado Pago Antifraude Plus** app page](https://apps.shopify.com/mercado-pago-antifraud-plus) in the "Marketplace" and click on **Install**. If you haven't done so already, log in with your Shopify account.
2. Carefully read the information about the requested permissions and click on **Install** again.
3. If you have already installed the [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) app, you do not need to enter your credentials again, but you can change them if necessary.

> WARNING
>
> Important
> 
> Remember that, when changing the Shopify password, **it is necessary to renew your credentials**. To do so, follow the instructions in the [Best practices for credentials](/developers/en/docs/shopify/best-practices/credentials-best-practices/secure-credentials) documentation. Then, to update them on your Shopify account, click on **Manage account** and fill in the corresponding fields with your `access_token` and `public_key` **being careful not to swap the fields when copying and pasting the credentials**.

4. Finally, click on the **Verify activation** option of Mercado Pago Antifraude Plus, go to the "Settings" section of Shopify and click on **Save** to enable the app and complete the installation.

That's it! **Mercado Pago Antifraude Plus** has been successfully installed!