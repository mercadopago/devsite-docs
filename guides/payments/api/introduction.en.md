---
  description: Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees, manteniendo la experiencia de compra.
---

# Introduction to our Payments API

MercadoPago has APIs that allow you to securely receive payments on your website, mobile application, or anywhere you want.

With our APIs:
*	You can create your own checkout, so your buyers do not have to leave your website.
*	Card data will never go through your servers, thus preserving the security.
*	You can save your customers’ card details for future purchases.

## Credentials

You have two pairs of keys to connect to the API, one for a test mode and the other for the production mode. You can find these keys in the [credenciales de tu cuenta](https://www.mercadopago.com.ar/account/credentials).

The **public key**, or *public_key*, is used to access all features your frontend will need to collect the credit card info and tokenize it.

The **private keys**, or *access_token*, are used for all requests to the APIs, such as processing payments, refunds, storing cards, etc. The private keys must be kept **confidentially** in your backend servers and should never be published.


> By clicking on the “renew credentials” button you get new pairs of keys and the previous ones stop working. Use this only when you believe your private credentials have been compromised or for security reasons, like a password change, occasionally. Remember to replace the credentials in your application to keep it running.


## Sandbox and Production Mode

Initially, your application will only be able to interact with MercadoPago in **Sandbox Mode**, an exact replica of the **Production Mode**, designed with the purpose of facilitating tests during the integration.

We will provide you with test cards, so that you can simulate transactions as if they were real.

As soon as you have [tested your application](/guides/payments/api/testing.en.md), you must complete the “I want to go to production” form that you will find in your [credentials.](https://www.mercadopago.com.ar/account/credentials)

Your application will be automatically activated. All you should do is replace the sandbox keys with the production ones in your code.

#### [Start integrating the API](/guides/payments/api/receiving-payment-by-card.es.md)
