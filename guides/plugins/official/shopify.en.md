# Mercado Pago for Shopify


## Introduction

Mercado Pago solutions in Shopify will allow you to collect online on your website, with no need to have technical or programming knowledge.

> Mercado Pago is an official Shopify partner: we provide security to all payments made in your store.


### Integration types

----[mlb]----
Choose the solution that best suits your business:

__Mercado Pago Transparent Checkout__: Shopify *app extension* that provides a fast and secure shopping experience, without leaving your store! You can install it from [Shopify app store](https://apps.shopify.com/).
------------
__Mercado Pago Redirect Checkout__: configure Checkout Pro, so that your customers finalize their payment on our website. It is already pre-installed in your Shopify administrator.

----[mlb]----


## Transparent Checkout

Install the [app extension of our transparent checkout](https://apps.shopify.com/checkout-transparente) in your Shopify store and leave everything in our hands: your customers can enter their information in one step and complete the purchase quickly and safely.


### What can I do with Mercado Pago Transparent Checkout?

| Characteristics    | Description                                                                                    |
|---|---|
| One-step purchases | Offer a clear and fast shopping experience, developed within your store and on the same page.  |
| Mobile experience  | Provides a thought and optimized purchase flow for mobile devices.                             |
| Shipments          | Connect the checkout with your shipping tool and offer deliveries during the purchase process. |
| Ads tracking       | Track your marketing campaigns in detail throughout the process.                               |
| Payment methods    | Accept payments with credit and debit card, cash and money in Mercado Pago account.            |
| Financing          | Sell in installments and offer the promotions available.                                       |
| Payment as guest   | Allow your customers to pay even if they don’t have a Mercado Pago account.                    |


### How to install the Transparent Checkout?

Install Mercado Pago for Shopify automatically by following these steps from [Shopify app store](https://apps.shopify.com/):

1. Enter the website [https://apps.shopify.com/](https://apps.shopify.com/) from your browser and log in to your account. You can also access it from the Apps section of your Shopify panel.
1. Search for “Mercado Pago Transparent Checkout” in the apps offer.
1. Click on "Add app".
1. Go to the Apps section of your admin panel.

**Excellent! The checkout is already installed in your store, and you only need to activate it in order to start selling.**


### How to activate it with my Mercado Pago account?

Connect a Mercado Pago account to the app to capture the collections of your orders on Shopify. It’s easy! You only need to have a seller account in Mercado Pago and obtain the test and production credentials.

Once the checkout is installed, follow these steps:

1. Create a [seller account](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-company?confirmation_url=https%3A%2F%2Fwww.mercadopago[FAKER][URL][DOMAIN]%2Fcomo-cobrar) in Mercado Pago if you don’t have one yet.
1. Get the **Public Key** and **Access Token** [credentials]([FAKER][CREDENTIALS][URL]), and paste them in the Production and Testing fields that you will find in the app settings.
1. Approve the account to [go to Production](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/goto-production/) and receive the money from your sales in Mercado Pago.

**Done! With this configuration you can start selling and get the payments you receive in your Mercado Pago account.**

> WARNING
>
> Importante
>
> The [credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/faqs/credentials) are the keys that uniquely identify you within Mercado Pago. They will allow you to simulate payments in a test environment and receive real payments once you are ready to go to production.


### How to test the checkout?

The Mercado Pago app extension comes with the default testing environment, so that you can simulate payments in the store and verify that everything works well before you start receiving real payments from your customers.
 
This is where the test credentials you entered in the module when integrating Mercado Pago to your store come into play.

When you test, check that the payment flow works correctly.

**When you see that everything is going well, deactivate the Tests mode and go to the Production mode to receive real payments.**


### Go to production

To start receiving payments, you must [activate your credentials]([FAKER][CREDENTIALS][URL]/).

> Check the [requirements to go to production](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/goto-production/) if you have any questions about the process.

To activate them, make sure that the production credentials entered are those of the account that you receive money from sales.

Activate the Production mode only if you are ready to sell and you have tested the checkout with simulated payments in the testing phase.

**Done! Mercado Pago Transparent Checkout is ready to receive payments online.**

------------


## Mercado Pago Redirect Checkout

Configure our module to finalize the purchase on Mercado Pago site during the purchase process in your Shopify store.


### What can I do with Mercado Pago payment gateway?

| Characteristics        | Description                                                                              |
|---|---|
| Mercado Pago Interface | We take care of it! You don't have to worry about implementing and designing a checkout. |
| Ads tracking           | Track your marketing campaigns in detail throughout the process.                         |
| Payment methods        | Accept payments with credit and debit card, cash and money in Mercado Pago account.      |
| Financing              | Sell in installments and offer the promotions available.                                 |
| Payment as guest       | Allow your customers to pay even if they don’t have a Mercado Pago account.              |
| Discounts              | Use coupons to offer promotions to your customers.                                       |


### How to configure Mercado Pago module?

Follow these steps to process payments with Mercado Pago Checkout:

1. In Shopify admin panel, go to the *Payments* section under *Settings*.
1. In the *Third-party providers* box, search for Mercado Pago and select it.
1. Get the [credentials]([FAKER][CREDENTIALS][URL]) **Client id** e **Client secret**, and paste them into the corresponding fields.
1. Choose the payment methods you want to offer your clients.
1. Be sure to select Test mode to verify everything is working properly before going into production.
1. Activate the module to save the changes.

**Done! Mercado Pago was installed and configured. Once you have done tests, you can come to this same section to deactivate the test environment and receive real payments.**

> NOTE
>
> Nota
>
> Check [Mercado Pago Checkout](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/web-payment-checkout/introduction/) documentation to learn more about all its features and functionalities.


### Payment status mapping

The following diagram represents the correlation between the status of a payment in Mercado Pago and the order status in Shopify.

| Estado del pago | Mercado Pago status | Shopify order status |
|---|---|---|
| Approved        | Approved            | Completed            |
| Pending         | Pending             | Pending              |
| In process      | In process          | Pending              |
| In mediation    | In mediation        | Pending              |
| Cancelled       | Cancelled           | Failed               |
| Refunded        | Refunded            | Failed               |
| Rejected        | Rejected            | Failed               |
