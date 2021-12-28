# Wix

[Wix](https://pt.wix.com/) is an e-commerce platform that allows you to create, design and manage your virtual store, where you can offer your customers the possibility of making payments through Mercado Pago or directly on your store page. 

By integrating **Mercado Pago** into your Wix store, your payments will be processed by [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction), in which the buyer is directed to a Mercado Pago page to complete the payment, or by [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/introduction), which allows the buyer to make payment within your stores environment.

Before integrating Mercado Pago with your Wix store, check the prerequisites and ensure that they are all met.

# Prerequisites

In the table below, you can find the necessary requirements to integrate Mercado Pago to your Wix store. It is important to ensure that all of them are met for the integration process to work correctly.


| Requirements | Description |
|---|---|
| Wix platform account | To perform the integration, you must have an active Wix account. If you still don't have one, [visit this Wix page](https://users.wix.com/signin) to create.|
| Mercado Pago seller account | To make sales, you need a seller account at Mercado Pago. If you don't have it yet, [visit this Mercado Pago page](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create. |
| Production and Test credentials | Credentials are unique passwords with which we identify an integration in your account and are used to securely capture payments in virtual stores and other applications. [Access our documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) for more information on obtaining your credentials. |
----[mlb]----| Pix key | To configure Pix in the integration with Mercado Pago, your Pix key must be configured. For more information on how to configure it, [check out our documentation.](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/17843). |------------

If all prerequisites are met, proceed to the step to integrate Checkout Pro and/or Checkout API in your store.


# Checkout integration

With all prerequisites met , you can integrate Checkout Pro and / or Checkout API in your store. You can integrate one of the two or both, depending on your business requirements.

In the following sections, you will find all the necessary steps for the complete integration of the mentioned models. To do this, follow the steps below.


## Checkout Pro

When offering Checkout Pro, your buyer is redirected to a Mercado Pago page where they must select the desired payment method and complete the payment for their purchase directly in the Mercado Pago environment.

For more information about available payment methods and the main benefits that Checkout Pro offers, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction) and access our documentation.

To install Checkout Pro in your store, follow the steps below.


1. Connect the _plugin_ Mercado Pago as described [in this Wix documentation](https://support.wix.com/en/article/connecting-mercadopago-as-a-payment-provider). You will automatically be taken to the plugin's configuration page.
2. On the configuration page, fill in the fields with your **test credentials** (Public Key and Access Token) so that you can test the integration.
3. In **Enable Sandbox Mode**, click to enable. This will allow you to perform test purchases to guarantee the integration works correctly.

Done! With Checkout Pro installed in your store, make a test purchase and ensure the integration is working properly. 
 

### Test purchase

[TXTSNIPPET][/guides/snippets/test-integration/wix-test-purchase]


### Activating production mode

[TXTSNIPPET][/guides/snippets/test-integration/wix-production-mode]

----[mlb, mlm]----
## Checkout API

Unlike Checkout Pro, by installing Checkout API the entire payment process will be completed in your store environment. This means that the buyer will not be redirected to a Mercado Pago page to make the payment.

To integrate Checkout API in your store, follow the steps below.

1. Go to your [Wix control panel](https://manage.wix.com/dashboard/) and select the store you want to configure.
2. From the main menu, click **Settings** > **Accept Payments**.
3. At the bottom of the page, click on **See More Payment Options**.
4. In the section **Third-Party Credit/Debit Card Providers**, click on **See Options**.
5. In **Mercado Pago** click on **Connect**.
6. On the configuration page, fill in the fields with your test credentials (Public Key and Access Token) so that you can test the integration.
7. In **Enable Sandbox Mode**, click to enable. This will allow you to perform test purchases to assess the functionality of the integration.
8. Click on **Connect**.
------------

----[mla, mpe, mco, mlu, mlc]----
## Checkout API

Unlike Checkout Pro, installing Transparent Checkout will complete the entire payment process in your store environment. This means that the buyer will not be redirected to a Mercado Pago page to make the payment.

To integrate Checkout Transparent in your store, follow the steps below.

1. Go to your [Wix control panel](https://manage.wix.com/dashboard/) and select the store you want to configure.
2. From the main menu, click **Settings** > **Accept Payments**.
3. In **Mercado Pago** click on **Connect**.
4. On the configuration page, fill in the fields with your test credentials (Public Key and Access Token) so that you can test the integration.
5. In **Enable Sandbox Mode**, click to enable. This will allow you to perform test purchases to assess the functionality of the integration.
6. Click on **Connect**.
------------

Done! With Checkout API installed in your store, make a test purchase and ensure that the integration was done correctly.


### Test purchase

[TXTSNIPPET][/guides/snippets/test-integration/wix-test-purchase]


### Activating production mode

[TXTSNIPPET][/guides/snippets/test-integration/wix-production-mode]
