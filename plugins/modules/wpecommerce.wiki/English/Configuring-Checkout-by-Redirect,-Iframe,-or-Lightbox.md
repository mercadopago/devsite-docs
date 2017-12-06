This page will explain how to configure the module to accept payments with Basic Checkout in Redirect, Iframe or Lightbox. On your store administration, go to *Settings > Store > Payments* tab. Click in *Mercado Pago - Basic Checkout*. You should get the following page:

[[/images/basic_config_screenshot.png|Basic Checkout]]

### Mercado Pago Credentials
  * Here you should place your *Client Id* and *Client Secret* keys, the credentials that uniquely identifies you in Mercado Pago.

### Checkout Options
How checkout is shown.
  * *Description*: This is the description of the payment option that will be shown to your customers;
  * *Store Category*: Sets up the category of the store;
  * *Store Identificator*: A prefix to identify your store, when you have multiple stores for only one Mercado Pago account;
  * *Integration Method*: How your customers will interact with Mercado Pago to pay their orders;
  * *iFrame Width*: The width, in pixels, of the iFrame (used only with iFrame Integration Method);
  * *iFrame Height*: The height, in pixels, of the iFrame (used only with iFrame Integration Method);
  * *Auto Return*: If set, the platform will return to your store when the payment is approved;
  * *URL Approved*: Customize a URL to be redirected when a payment is approved. Let blank to redirect to the store;
  * *URL Pending*: Customize a URL to be redirected when a payment has failed. Let blank to redirect to the store.

### Payment Options
How the payment option behaves.
  * *Max Installments*: The maximum installments allowed for your customers;
  * *Currency conversion*: Enable currency conversion mode for sells with Basic Checkout. Currency conversion is a feature that enables you to set an unsupported currency in WP eCommerce while maintaining Mercado Pago as payment method. It will convert the unsupported currency for the currency used in your country. Pay attention that this service converts values on-the-fly in real-time and can bring some additional delay to your server;
  * *Exclude Payment Methods*: Select the payment methods that you want to not work with Mercado Pago.

### Test and Debug Options
Offers logging tools so you can analyze problems that may be occurring. Maintain this disabled if working in production with a stable system.
  * *Enable Sandbox*: Enable this to activate sandbox testing mode;
  * *Debug mode*: Enable this to log messages in browser console.