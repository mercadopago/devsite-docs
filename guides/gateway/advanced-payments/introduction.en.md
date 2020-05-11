---
sites_supported:
  - mla
  - mco
indexable: false
---

# Payments in Gateway mode in Advanced Payments

## Introduction

The `Gateway` mode in Advanced Payments allows you to make multiple payments with different own merchant numbers and the same card token. This implies that the buyer must enter his card details only once.

To be able to make payments in this modality, you must upload your merchant numbers, agreements and associated payment methods from the configuration of your Mercado Pago account. They will be used in the integration with the API.
----[mco]----
In the event that your Mercado Pago account is from Colombia, please contact your account executive in order to upload your merchant numbers, agreements and associated payment methods.
------------

## Configure Application to process payments in Gateway mode

### Create a Mercado Pago account

You must create an account from the Mercado Pago website in the country where you wish to receive payments. The Gateway mode is currently available only for Argentina and Colombia:

* [Argentina](https://www.mercadopago.com.ar)
* [Colombia](https://www.mercadopago.com.co)

### Create an Application

The application will be used to upload the merchant numbers, agreements and payment methods and, subsequently, perform the integration with the API. You must create an application by accessing the Mercado Pago applications page of the country corresponding to your account and completing the requested information:

* [Argentina](https://applications.mercadopago.com.ar)
* [Colombia](https://applications.mercadopago.com.co)

Once the application is created, you will get the value of APP_ID, which will be necessary for the next steps.

### Enable the application to receive payments in Gateway mode

You must contact your account executive informing the APP_ID of your application in order to require the activation of the Gateway mode.


### Upload information corresponding to merchant numbers, agreements and associated payment methods


To be able to make payments in this modality, you must upload your merchant numbers, agreements and associated payment methods from the configuration of your Mercado Pago account. They will be used in the integration with the API.

In the event that your Mercado Pago account is from Colombia, please contact your account executive to upload your merchant numbers, agreements and associated payment methods.


### Generate a card token

You must generate the payer card token to process payments with the API. This guide assumes that you know [how to generate a card token](https://www.mercadopago.com.ar/developers/es/guides/payments/api/receiving-payment-by-card).
