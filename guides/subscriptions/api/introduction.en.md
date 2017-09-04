---
sites_supported:
    - mla
    - mlb
    - mlm
---

# Introduction to the Subscriptions API

> WARNING
>
> Prerequisites
>
> * Have the [card information capture](/guides/payments/api/receiving-payment-by-card.en.md#collect-card-information) implemented.
> * Have the [Stored Customers and Cards](/guides/payments/api/customers-and-cards.en.md) implemented.

MercadoPago allows you to receive recurring payments through subscriptions.

You only have to subscribe your customers to the subscription plans and we will process the payments on an automatic and recurring manner. We will send you a webhook notification to inform you of the payments results.

In the subscription plans, you can set:

* Payment frequency: Between how many days or months and on which day of the month it will be collected.
* Subscription duration: unlimited or limited to a number of repetition of collections.
* Free trial period.
* Additional fee for starting a subscription.

## Credentials
You have two pairs of keys to connect to the API, one for a test mode and the other for the production mode. You can find these keys in the section [account credentials](https://www.mercadopago.com.ar/account/credentials).

The **public key** is used to access all features your frontend will need to collect the credit card info, and tokenize it.

The **private keys**, or *access_token*, are used for all requests to the APIs, such as processing payments, refunds, storing cards, etc. The private keys must be kept **confidentially** in your backend servers and should never be published.

>By clicking on the “renew credentials” button you get new pairs of keys and the previous ones will stop working. Use this only when you believe your private credentials have been compromised or for security reasons, similar to password change, every once in a while. Remember to replace the credentials in your application to keep it running.

## Sandbox and Production Mode

Initially, your application will only be able to interact with MercadoPago in **Sandbox Mode**, an exact replica of the **Production Mode**, designed with the purpose of facilitating tests during the integration.

We will provide you test cards, so that you can simulate transactions as if they were real.

As soon as you have [tested your application](/guides/subscriptions/api/testing.en.md), you must complete the “I want to go to production” form you will find in your [credentials](https://www.mercadopago.com.ar/account/credentials).

Your application will be automatically activated. All you have to do is replace the sandbox keys with the production ones in your code.

#### [Start creating plans and subscribe customers](/guides/subscriptions/api/create-subscription.en.md)
