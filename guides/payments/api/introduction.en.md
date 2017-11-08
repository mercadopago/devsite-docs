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

## Go live requisites

Once you have tested you application in _Sandbox_ mode, you have to complete the homologation process consisting of:

* Using the _SDK_ mercadopago.js to consult the payment methods, post payments ensure a good user experience and avoid fraudulent transactions.
* Use the `data_checkout` attribute in the` input` tags to handle data securely and prevent it from reaching your server. Make sure you do NOT include the `name` attribute in these tags.
* Have an SSL certificate to ensure safe browsing and that the payment form is sent via HTTPS.
* Communicate correctly the result of the payment to the user to try the recovery of the payment in case of rejection. To do this, use the [recommended response codes] (http://beta.mercadopago.com.ar/developers/en/guides/payments/api/handling-responses).
* Communicate the [promotions and financing possibilities] (https://www.mercadopago.com.ar/promociones) offered by Mercado Pago. You can include our [institutional banners] (https://www.mercadopago.com/mla/com.mercadopago.web.landing.LandingController?id=banners#!institucionales).


> When you have fulfilled the requirements, you must complete the form **I want to go live** that you can find in your account [credentials](https://www.mercadopago.com/mla/account/credentials)

The failure of fulfillment of these rules may involve: not processing payments and legal actions in accordance with the [terms and conditions] (https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299) .
You must have a policy of terms and conditions, in which you specify that you are responsible for all the data that is entered into your site.

#### [Start integrating the API](/guides/payments/api/receiving-payment-by-card.es.md)
