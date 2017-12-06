This page will explain how to configure the module to accept payments with Tickets of Custom Checkout. On your store administration, go to *Settings > Store > Payments* tab. Click in *Mercado Pago - Ticket*. You should get the following page:

[[/images/ticket_config_screenshot.png|Ticket Checkout Config]]

### Mercado Pago Credentials
  * Here you should place your *Access Token* key, the credential that uniquely identifies you in Mercado Pago.

### Checkout Options
How checkout is shown.
  * *Store Category*: Sets up the category of the store;
  * *Store Identificator*: A prefix to identify your store, when you have multiple stores for only one Mercado Pago account;
  * *URL Approved Payment*: Customize a URL to be redirected when a payment is approved. Let blank to redirect to the store;
  * *URL Pending Payment*: Customize a URL to be redirected when a payment has failed. Let blank to redirect to the store.

### Payment Options
How the payment option behaves.
  * *Currency conversion*: Enable currency conversion mode for sells with Basic Checkout. Currency conversion is a feature that enables you to set an unsupported currency in WP eCommerce while maintaining Mercado Pago as payment method. It will convert the unsupported currency for the currency used in your country. Pay attention that this service converts values on-the-fly in real-time and can bring some additional delay to your server.

### Test and Debug Options
Offers logging tools so you can analyze problems that may be occurring. Maintain this disabled if working in production with a stable system.
  * *Debug mode*: Enable this to log messages in browser console.