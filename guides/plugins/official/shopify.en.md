# Shopify

----[mlb]----

[Shopify](https://www.shopify.com/?shpxid=76f6bf35-F67D-4311-0725-B4A8C1AC2254) is an e-commerce platform that offers all the features you need to make online sales.

By integrating Mercado Pago into your Shopify, you will be able to receive payments through [Checkout Pro](https://www.mercadopago.com.br/developers/en/guides/online-payments/checkout-pro/introduction), where the buyer is redirected to a Mercado Pago page to complete the payment, or to the [Checkout API](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/introduction) that allows the buyer to carry out the entire payment process within the environment of your store.

If you prefer, you can use only one type of checkout in your store (Checkout Pro or Checkout API), however, **to offer Checkout API, it is mandatory to integrate Checkout Pro first**.

To perform the integration, you will need to follow the steps below.

1. [Install Checkout Pro](#bookmark_checkout_pro)
2. [Install Checkout API](#bookmark_checkout_api)

## Checkout Pro

The first phase of the Mercado Pago integration with Shopify is the installation of Checkout Pro. In this checkout model, the customer is redirected to a Mercado Pago page where you must fill in the requested information and complete the payment.

If you already have Checkout Pro installed, [click here](#bookmark_checkout_api) and follow the steps to install Checkout API.

> NOTE
>
> Important
>
> Mercado Pago's Checkout Pro is installed exclusively in **Production mode**, that is, it already allows the processing of real payments. This means that **you don't need to set up a production mode** to start receiving payments made in your store.

### Installation

1. Go to the Administration Panel of your store and click on **Settings > Payments**.
2. In **Payment Providers**, click on **Choose a provider**.
3. Search for Mercado Pago in the search bar and click on the available option.
4. In _Client_id_ and _Client_secret_, enter your **Production** credentials. To learn how to obtain this information, access our [Credentials](https://www.mercadopago.com.br/developers/en/guides/resources/credentials) documentation.
5. Select the images referring to the payment methods you want to display in your store. These images are for illustrative purposes only and do not imply activation of the selected payment method.
6. In **Test Mode**, select the option **Enable test mode** if you want to keep your store in a test environment before making it available to your customers, however, if you prefer to leave your store enabled to receive real sales, keep the field disabled.
7. When finished filling in, click on **Save**.

### Configuration
 
To ensure a better shopping experience and tighter integration with Shopify apps, it's important to customize specific information on your store's checkout. To do so, follow the steps below.
 
 
1. Go to the **Administration Panel** of your store and click on **Settings > Checkout**.
2. On **Form options**, flag the field **Company name** as **Required**.
3. Go back to **Settings** and click on **Languages**.
4. On the section **Default language**, click on **Change theme language**.
5. Select Portuguese and click on Save.
6. While still on the language page, use the search bar and search for the word **Company**.
7. Replace the following entries **Company label**, **Optional company label**, **Address company blank**, and **Address – Company** with the text CPF/CNPJ.
8. Click on **Save**.
 
Once you have completed these steps, the checkout will be installed and configured. Now, make a test purchase to ensure the checkout works correctly.

### Test purchase

[TXTSNIPPET][/guides/snippets/test-integration/shopify-test-purchase]

## Checkout API

Mercado Pago's Checkout API allows the entire purchase process to be finished in your store's environment, without the need to redirect to an external page to complete the payment.

> WARNING
>
> Important
>
> If you already have a previous version Checkout API installed, you will need to uninstall it before configuring the new version. To do this, go to your Shopify admin panel and click on **Apps > Delete Mercado Pago**.

### Installation

To install the Checkout Api on your Shopify, follow the steps below.

1. [Click here](https://apps.shopify.com/checkout-transparente-mp) to access the Mercado Pago Checkout API app installation page.
2. In the lower right corner of the screen, click on **Install app**.
3. On the next screen, you will be asked to enter your **Public key** and **Access token** credentials for **test** and **production**. [Click here](https://www.mercadopago.com.br/developers/en/guides/resources/credentials) and access our documentation to learn how to obtain this information.
4. In **How do you want to operate**, select the option **I want to test my store**. This will allow you to carry out tests to ensure the checkout works.
5. Click on **Save**.

### Configuration
 
To ensure a better shopping experience and tighter integration with Shopify apps, it's important to customize specific information on your store's checkout. To do so, follow the steps below.
 
 
1. Go to the **Administration Panel** of your store and click on **Settings > Checkout**.
2. On **Form options**, flag the field **Company name** as **Required**.
3. Go back to **Settings** and click on **Languages**.
4. On the section **Default language**, click on **Change theme language**.
5. Choose Portuguese and click on Save.
6. Still on the language page, use the search bar and search for the word **Company**.
7. Replace the following entries **Company label**, **Optional company label**, **Address company blank**, and **Address – Company** with the text CPF/CNPJ.
8. Click on **Save**.
 
Once you have completed these steps, the checkout will be installed and configured. Now, make a test purchase to ensure the checkout works correctly.

### Test purchase

[TXTSNIPPET][/guides/snippets/test-integration/shopify-test-purchase]

### Activating production mode

Enabling production mode will allow your store to receive actual sales. To activate it, follow the steps below.

1. Access your store's **Administration Panel** and click on **Apps**.
2. Click the option **Checkout API**.
3. In **How do you want to operate?**, select the option **I want to go to production**.
4. Click on **Save**.

Done! Mercado Pago's Checkout API is installed and working correctly. 

------------

----[mla, mlm, mlu, mpe, mco, mlc]----

[Shopify](https://www.shopify.com/?shpxid=76f6bf35-F67D-4311-0725-B4A8C1AC2254) is an e-commerce platform that offers all the features you need to make online sales.

By integrating Mercado Pago into your Shopify, you will be able to receive payments through [Checkout Pro](https://www.mercadopago.com.br/developers/en/guides/online-payments/checkout-pro/introduction), where the buyer is redirected to a Mercado Pago page to complete the payment.

For more information about Checkout Pro and its benefits, [click here](https://www.mercadopago.com.br/developers/en/guides/online-payments/checkout-pro/introduction) and access our documentation.

## Checkout Pro

When installing Checkout Pro, your customer will be redirected to a Mercado Pago page where you will have to fill in the requested information and make the payment, that is, the transaction is processed and completed outside your store's environment.

To install Checkout Pro, follow the steps below.

> NOTE
>
> Important
>
> Mercado Pago's Checkout Pro is installed exclusively in **Production mode**, that is, it already allows the processing of real payments. This means that **you don't need to set up a production mode** to start receiving payments made in your store.

### Installation

1. Go to the Administration Panel of your store and click on **Settings > Payments**.
2. In **Payment Providers**, click on **Choose a provider**.
3. Search for Mercado Pago in the search space and click on the available option.
4. In _Client_id_ and _Client_secret_, enter your **Production** credentials. To learn how to obtain this information, access our [Credentials](https://www.mercadopago.com.br/developers/en/guides/resources/credentials) documentation.
5. Select the images referring to the payment methods you want to display in your store. These images are for illustrative purposes only and do not imply activation of the selected payment method.
6. In **Test Mode**, select the option **Enable test mode** if you want to keep your store in a test environment before making it available to your customers, however, if you prefer to leave your store enabled to receive real sales, keep the field disabled.
7. When finished filling in, click on **Save**.

### Configuration
 
To ensure a better shopping experience and tighter integration with Shopify apps, it's important to customize specific information on your store's checkout. To do so, follow the steps below.
 
 
1. Go to the **Administration Panel** of your store and click on **Settings > Checkout**.
2. On **Form options**, flag the field **Company name** as **Required**.
3. Go back to **Settings** and click on **Languages**.
4. On the section **Default language**, click on **Change theme language**.
5. Choose Portuguese and click on Save.
6. Still on the language page, use the search bar and search for the word **Company**.
7. Replace the following entries **Company label**, **Optional company label**, **Address company blank**, and **Address – Company** with the text CPF/CNPJ.
8. Click on **Save**.
 
Once you have completed these steps, the checkout will be installed and configured. Now, make a test purchase to ensure the checkout works correctly.

### Test purchase

[TXTSNIPPET][/guides/snippets/test-integration/shopify-test-purchase]

------------
