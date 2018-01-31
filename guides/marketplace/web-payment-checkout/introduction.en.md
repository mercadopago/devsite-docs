# Introduction

A **MarketPlace** is a website or application that allows sellers and buyers to interact with each other to make commercial transactions. The owner of a Marketplace provides a space for sellers to display their products or services and is responsible for managing all aspects of the transaction. For example, Mercado Libre is a Marketplace.

Mercado Pago allows you to collect payments on behalf of the sellers of your platform and optionally charge a commission for the transaction.

When a payment is generated, the amount is immediately divided between the seller’s account and your account, in case you charge a fee.


> NOTE
>
> Note
>
> Mercado Pago’s fee will be deducted from the funds received by the seller.

The Marketplace requires 3 steps:

1. **Create a Marketplace** application.
2. **Connect** your sellers’ accounts.
3. **Charge** on behalf of them.

After creating the application, you only need to take the second and third steps for each subsequent vendor.


## Credentials

Similar to the Checkout of Payments, you have a pair of private keys to connect to the API. You can find these keys in the [credentials section of your account](https://www.mercadopago.com.ar/account/credentials).

The **private keys** (also known as `access_token`) are used for all the requests to the APIs, such as processing payments, refunds, etc. The private keys must be kept **confidentially** in your backend servers and should never be published.

#### [Start creating my Marketplace](/guides/marketplace/web-checkout/create-marketplace.en.md)
