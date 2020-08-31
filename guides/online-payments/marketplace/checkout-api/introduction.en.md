# Introduction to the MarketPlace API

A **MarketPlace** is a website or application that allows sellers and buyers to interact with each other to make commercial transactions. The owner of a Marketplace provides a space for sellers to display their products or services, and is responsible for managing all aspects of the transaction. For example, Mercado Libre is a Marketplace.

Mercado Pago allows you to collect payments on behalf of the sellers of your platform and optionally charge a commission for the transaction.

When a payment is generated, the amount is immediately divided between the seller’s account and your account, in case you charge a fee.
_Clarification: The payment split can only be done between two Mercado Pago accounts (Marketplace and the seller associated to it), no more._

> NOTE
>
> Note
>
> Mercado Pago’s fee will be deducted from the funds received by the seller.
> First the Mercado Pago fee is discounted, and after that the Marketplace fee. 

The Marketplace requires 3 steps:

1. Create a Marketplace application.
2. Connect your sellers’ accounts.
3. Charge on behalf of them.

After creating the application, you only need to take the second and third steps for each subsequent vendor.

### Credentials

Your <a href="[FAKER][CREDENTIALS][URL]" target="_blank"> credentials </a> are the **keys we provide so you can configure your integrations.**. 

* The public key, or **Public Key**, is used to access the resources that your frontend needs. You will be able to collect credit card data and convert it into a representative token that you can safely store on your servers to create a payment.


* The private key, or **Access Token**, will allow you to call the rest of the APIs. For example, how to process a payment, make a refund or store cards.

> Do you have any questions? Check our [FAQs](https://www.mercadopago.com.ar/developers/es/guides/resources/faqs/credentials/).


## Sandbox and Production Mode

Initially, your application will only be able to interact with Mercado Pago in **Sandbox Mode**, an exact replica of the **Production Mode**, designed with the purpose of facilitating tests during the integration.

We will provide you with [test cards](https://www.mercadopago.com.ar/developers/en/guides/online-payments/marketplace/checkout-pro/testing-marketplace/), so that you can simulate transactions as if they were real.

Once you have tested your application, you must complete the [homologation process](https://www.mercadopago.com.ar/developers/en/guides/online-payments/marketplace/checkout-api/goto-production/) and must [activate your credentials]([FAKER][CREDENTIALS][URL]).

**Before you can start using your production credentials you must activate them.**
If not, you´ll get the "Invalid use of live credentials" error.

Your application will be automatically activated. All you have to do is replace the sandbox keys with the production ones in your code.


#### [Start creating my Marketplace](https://www.mercadopago.com.ar/developers/en/guides/online-payments/marketplace/checkout-api/create-marketplace)
