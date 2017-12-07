![Mercado Pago](https://raw.githubusercontent.com/mercadopago/cart-wp-commerce/master/assets/images/mplogo.png)

# Mercado Pago integration module for WP-eCommerce
* [System Requirements](#system-requirements)
* [Features](#features)
* [Installation](#installation)
* Custom Checkout
  * [Configuring Credit Card](#configuring-credit-card)
  * [Configuring Tickets](#configuring-tickets)
* Basic Checkout
  * [Configuring Checkout by Redirect, Iframe, or LightBox](#configuring-checkout-by-redirect-iframe-or-lightbox)
* [Instant Payment Notification Settings](#instant-payment-notification-settings)
* [Upgrade](#upgrade)
* [FAQ](#faq)
* [Technical Support](#technical-support)
* [How to Contribute](#how-to-contribute)

# System Requirements
### Platform Version
* <a href="https://wordpress.org/download/">WordPress</a> 4.1 or greater
* <a href="https://wordpress.org/plugins/wp-e-commerce/">WP eCommerce</a> 3.11 or greater

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
* WP eCommerce

### Additional Settings
* safe_mode off
* memory_limit greater than 256MB (512MB is the recommended)

### SSL
* For Credit Cards and Tickets, it is a requirement that you have a SSL certificate.

# Features
The module of Mercado Pago for WP eCommerce is integrated with the following features and payment solutions:

### [Basic Checkout (Redirect, Iframe or Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
* Mercado Pago Pre-Builded Interfaces<br>![Basic Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-wp-commerce/images/basic_checkout_payment.png)

### Custom Checkout
* [Payment with Credit Card](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)<br>![Custom Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-wp-commerce/images/order_custom.png)
* [One Click Pay (Customer Cards)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)<br>![One Click Payment](https://raw.githubusercontent.com/wiki/mercadopago/cart-wp-commerce/images/order_cust_card.png)
* [Other Payment Methods, Such as Tickets](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)<br>![Tickets](https://raw.githubusercontent.com/wiki/mercadopago/cart-wp-commerce/images/order_ticket.png)

### Other Features
* Credentials and platform status checkings
* Customizable success page
* Installments calculator
* Currency conversion
* Instant payment notification and webhooks
* Log and debug tools

# Installation
If you have already the module installed, please follow the [Upgrade Instructions](#upgrade) first.

You have two options to install this module: from your WordPress Store, or by downloading and manually copying the module directory.

### Install from WordPress

1. On your store administration, go to *Plugins* option in sidebar;

2. Click in *Add New* button and type "WPeComm Mercado Pago Module" in the *Search Plugins* text field. Press Enter;

3. You should find the module ready to be installed. Click install. Its done!

### Manual Download

1. Get the module sources from a repository (<a href="https://github.com/mercadopago/cart-wp-commerce/archive/master.zip">Github</a> or <a href="https://br.wordpress.org/plugins/wpecomm-mercado-pago-module/">WordPress Plugin Directory</a>);

2. Unzip the folder and find "wpecomm-mercado-pago-module" directory;

3. Copy "wpecomm-mercado-pago-module" directory to *[WordPressRootDirectory]/wp-content/plugins/* directory. Its done!

> HINT: To confirm that your module is really installed, you can click in *Plugins* item in the store administration menu, and check your just installed module. Just click *enable* to activate it and you should receive the message "Plugin enabled." as a notice in your WordPress.

# Configuring Credit Card
This page will explain how to configure the module to accept payments with Credit Card of Custom Checkout. On your store administration, go to *Settings > Store > Payments* tab. Click in *Mercado Pago - Custom Checkout*. You should get the following page:

![Custom Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-wp-commerce/images/custom_config_screenshot.png)

### Mercado Pago Credentials
  * Here you should place your *Public Key* and *Access Token* keys, the credentials that uniquely identifies you in Mercado Pago.

### Checkout Options
How checkout is shown.
  * *Statement Descriptor*: The description that will be shown in your customer's invoice;
  * *Binary Mode*: When charging a credit card, only [approved] or [reject] status will be taken;
  * *Store Category*: Sets up the category of the store;
  * *Store Identificator*: A prefix to identify your store, when you have multiple stores for only one Mercado Pago account;
  * *URL Approved Payment*: Customize a URL to be redirected when a payment is approved. Let blank to redirect to the store;
  * *URL Pending Payment*: Customize a URL to be redirected when a payment has failed. Let blank to redirect to the store.

### Payment Options
How the payment option behaves.
  * *Currency conversion*: Enable currency conversion mode for sells with Basic Checkout. Currency conversion is a feature that enables you to set an unsupported currency in WP eCommerce while maintaining Mercado Pago as payment method. It will convert the unsupported currency for the currency used in your country. Pay attention that this service converts values on-the-fly in real-time and can bring some additional delay to your server.

### Test and Debug Options
Offers logging tools so you can analyze problems that may be occurring. Maintain this disabled if working in production with a stable system.
  * *Enable Sandbox*: Enable this to activate sandbox testing mode;
  * *Debug mode*: Enable this to log messages in browser console.

# Configuring Tickets
This page will explain how to configure the module to accept payments with Tickets of Custom Checkout. On your store administration, go to *Settings > Store > Payments* tab. Click in *Mercado Pago - Ticket*. You should get the following page:

![Ticket Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-wp-commerce/images/ticket_config_screenshot.png)

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

# Configuring Checkout by Redirect, Iframe, or LightBox
This page will explain how to configure the module to accept payments with Basic Checkout in Redirect, Iframe or Lightbox. On your store administration, go to *Settings > Store > Payments* tab. Click in *Mercado Pago - Basic Checkout*. You should get the following page:

![Basic Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-wp-commerce/images/basic_config_screenshot.png)

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

# Instant Payment Notification Settings
Instant Payment Notifications (IPN) is a mechanism that enables your store to receive messages from Mercado Pago server about the status of a given payment. In this plugin, you don't need to worry about IPN configuration as it is already implemented and configured for you.

> HINT 1: When configuring or testing your IPN/Webhooks and server communications be sure that your server can access Mercado Pago server.

> HINT 2: Make sure that your firewall haves [Mercado Pago IP Ranges](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) within its white-list.

> HINT 3: Pay attention that Mercado Pago uses TSL protocol version 1.0, so your server needs to support/accept connections with this protocol version.

> HINT 4: Make sure that any other WordPress plugin can block Mercado Pago.

# Upgrade
If you already had installed a previous version of WPeComm Mercado Pago Module, please follow the instructions. In same way of the installation, again you have two options: from your WordPress Store, or by downloading and manually copying the module directory.

### Upgrade from WordPress
1. On your store administration, go to *Plugins* option in sidebar;
2. Click in *update now* button in your plugin dashboard window;
3. In a few seconds it should be installed with *Updated!* message shown.

### Upgrade with Manual Download
1. Get the module sources from a repository (<a href="https://github.com/mercadopago/cart-wp-commerce/archive/master.zip">Github</a> or <a href="https://br.wordpress.org/plugins/wpecomm-mercado-pago-module/">WordPress Plugin Directory</a>);
2. Unzip the folder and find "wpecomm-mercado-pago-module" directory;
3. Go to *[WordPressRootDirectory]/wp-content/plugins/* directory and delete the existing directory "wpecomm-mercado-pago-module";
4. Copy "wpecomm-mercado-pago-module" directory to *[WordPressRootDirectory]/wp-content/plugins/* directory.

To confirm that your module is really updated, you can see in *Plugins* item in the store administration menu, and check your just updated module. The version should match the just-updated plugin.

> HINT: Always remember to make a backup of your system and data before making any changes.

# FAQ
Under construction...

# Technical Support
If you have any questions, problems or errors we have a support channel. Send an email to modulos@mercadopago.com with the following information:

* Email of your account Mercado Pago;
* Details about your question, problem or error;
* Files that can help in understanding (Print-Screen, Video, Log Files, etc.);
* Version of WPeCommerce;
* Module version, if you are using.

> HINT: You can get the module version in the plugin list of your WordPress administration page:
>
> ![Developer](https://raw.githubusercontent.com/wiki/mercadopago/cart-wp-commerce/images/plugin_adm.png)

Don't worry... We will help you as soon as possible.

# How to Contribute
Here are some tips to help with the development and maintenance of this project.

## Cloning for development:

Go to `wp-content/plugins` under your development WordPress installation and clone this repository using the follow command:

```bash
git clone git@github.com:mercadopago/cart-wp-commerce.git wpecomm-mercado-pago-module
```

## Updating the Wiki

### Cloning

```bash
git clone git@github.com:mercadopago/cart-wp-commerce.wiki.git
```

### Directory tree and files

```
├── English
├── _Footer.md
├── Home.md
├── images
├── Portugues
└── Espanol

```

The directories `English`, `Portugues`, and `Espanol` contains specific documentation for each language.

It's possible generate new files into each directory in the follow way:

```
touch English/New-Wiki-Page.md
```

This will generate a wiki page with the name of `New Wiki Page`.

For images we should use the `images` directory and use the follow syntax to link each image into the content:

```
[[/images/image-name.png|Alt text]]
```