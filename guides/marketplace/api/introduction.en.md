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

## Credentials

Similar to the Payment API, you have a pair of private keys to connect to the API. You can find these keys in the [credentials of your account](https://www.mercadopago.com/mla/account/credentials).

The **credencial pública**, or *public\_key*, is used to access all features your frontend will need to collect the credit card info, and tokenize it.

The **credencial privada**, or *access\_token*, are used for all requests to the APIs, such as processing payments, refunds, storing cards, etc. The private keys must be kept **confidentially** in your backend servers and should never be published.

> By clicking on the “renew credentials” button you get new pairs of keys and the previous ones will stop working. Use this only when you believe your private credentials have been compromised or for security reasons, similar to password change, every once in a while. Remember to replace the credentials in your application to keep it running.


## Sandbox and Production Mode

Initially, your application will only be able to interact with Mercado Pago in **Sandbox Mode**, an exact replica of the **Production Mode**, designed with the purpose of facilitating tests during the integration.

We will provide you with [test cards](/guides/marketplace/web-checkout/testing-marketplace.en.md/), so that you can simulate transactions as if they were real.

Once you have tested your application, you must complete the [homologation process](/guides/marketplace/api/goto-production.es.md/) and complete the “I want to go to production” form that you will find in your credentials.

**Before you can start using your production credentials you must complete the "I want to go to production" form in order to activate them.** 
If not, you´ll get the "Invalid use of live credentials" error.  

Your application will be automatically activated. All you have to do is replace the sandbox keys with the production ones in your code.


#### [Start creating my Marketplace](/guides/marketplace/api/create-marketplace.en.md)
