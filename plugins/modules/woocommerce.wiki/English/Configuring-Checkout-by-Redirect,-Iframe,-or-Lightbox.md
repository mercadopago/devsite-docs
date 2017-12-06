This page will explain how to configure the module to accept payments with Basic Checkout in Redirect, Iframe or Lightbox. On your store administration, go to *WooCommerce > Settings > Checkout* tab. In *Checkout Options*, click in *Mercado Pago - Basic Checkout*. You should get the following page:

[[/images/wiki3/basic_checkout_config.png|Basic Checkout]]

If you have properly configured your credentials in <a href="https://github.com/mercadopago/cart-woocommerce/wiki/General-Mercado-Pago-Settings">General Mercado Pago Settings</a>, then you can now customize your ticket checkout:

### Checkout Interface
How checkout is shown.
  * *Title*: This is the title of the payment option that will be shown to your customers;
  * *Description*: This is the description of the payment option that will be shown to your customers;
  * *Integration Method*: How your customers will interact with Mercado Pago to pay their orders;
  * *iFrame Width*: The width, in pixels, of the iFrame (used only with iFrame Integration Method);
  * *iFrame Height*: The height, in pixels, of the iFrame (used only with iFrame Integration Method).

### Checkout Navigation
How checkout navigations will behave.
  * *Auto Return*: If set, the platform will return to your store when the payment is approved;
  * *Success URL*: Customize a URL to be redirected when a payment is approved. Let blank to redirect to the store;
  * *Failure URL*: Customize a URL to be redirected when a payment has failed. Let blank to redirect to the store;
  * *Pending URL*: Customize a URL to be redirected when a payment is pending. Let blank to redirect to the store.

### Payment Options
How the payment option behaves.
  * *Max Installments*: The maximum installments allowed for your customers;
  * *Exclude Payment Methods*: Select the payment methods that you want to not work with Mercado Pago;
  * *Discount by Gateway*: Gives a percentual discount for your customers if they use Credit Cards as payment method;
  * *Two Cards Mode*: Enable this to let your customers pay with two different cards.