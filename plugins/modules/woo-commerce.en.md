![Mercado Pago](https://raw.githubusercontent.com/mercadopago/cart-woocommerce/master/assets/images/mplogo.png)

# Mercado Pago integration module for WooCommerce
* [System Requirements](#system-requirements)
* [Features](#features)
* [Installation](#installation)
* [General Mercado Pago Settings](#general-mercado-pago-settings)
* Custom Checkout
  * [Configuring Credit Card](#configuring-credit-card)
  * [Configuring Tickets](#configuring-tickets)
* Basic Checkout
  * [Configuring Checkout by Redirect, Iframe, or LightBox](#configuring-checkout-by-redirect-iframe-or-lightbox)
  * [Configuring Mercado Envios](#configuring-mercado-cnvios)
  * [Configuring Subscriptions](#configuring-subscriptions)
* [Instant Payment Notification Settings](#instant-payment-notification-settings)
* [Upgrade](#Upgrade)
* [FAQ](#faq)
* [Technical Support](#technical-support)
* [How to Contribute](#how-to-contribute)

# System Requirements
### Platform Version
* <a href="https://wordpress.org/download/">WordPress</a> 3.1.x - 4.7.x
* <a href="https://wordpress.org/plugins/woocommerce/">WooCommerce</a> 2.6.x - 3.1.x

### Environment
* LAMP (Linux, Apache, MySQL, and PHP)

### Operational System
* Linux x86
* x86-64

### Web Server
* <a href="https://httpd.apache.org/">Apache 2.x</a>

### Hosting
* Can override the .htaccess file

### PHP Versions
* <a href="http://php.net/">PHP</a> 5.6 or greater, with CURL support

### MySQL Version
* <a href="http://www.mysql.com/">MySQL</a> version 5.6 or greater OR <a href="https://mariadb.org/">MariaDB</a> version 10.0 or greater

### Extension Dependencies
* WooCommerce

### Additional Settings
* safe_mode off
* memory_limit greater than 256MB (512MB is the recommended)

### SSL
* For Credit Cards and Tickets, it is a requirement that you have a SSL certificate.

# Features
The module of Mercado Pago for WooCommerce is integrated with the following features and payment solutions:

### [Basic Checkout (Redirect, Iframe or Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
* Mercado Pago Pre-Builded Interfaces<br>![Basic Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/basic_checkout_payment.png)
* [Refunds/Cancel of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)
* Split Payments (Two Cards)
* [Subscriptions](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/subscriptions/)
* [Mercado Envios](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)

### Custom Checkout
* [Payment with Credit Card](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)<br>![Custom Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/custom_checkout_form.png)
* [One Click Pay (Customer Cards)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)<br>![One Click Payment](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/oneclick_form.png)
* [Refunds/Cancel of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)
* [Other Payment Methods, Such as Tickets](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)<br>![Tickets](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/ticket.png)

### Other Features
* Credentials and platform status checkings
* Customizable success page
* Installments calculator
* Currency conversion
* Instant payment notification and webhooks
* Discounts by payment method or Mercado Pago coupon
* Log and debug tools