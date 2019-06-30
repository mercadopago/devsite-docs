* [Requirements](#Requirements)
* [Features](#Features)
* [Installation](#Installation)
* [Configure Credit Card and Ticket (Checkout Custom)](#Configure_Credit_Card_and_Ticket_(Checkout_Custom))
* [Configure Checkout Redirect, Iframe, and LightBox](#Configure_Checkout_Redirect,_Iframe,_and_LightBox_(Basic_Checkout)) 
∫
<a name="Requirements"></a>
## Requirements:

### Magento Version
* 2.x

### Environment
* LAMP (Linux, Apache, MySQL, and PHP)
* LNMP stack

### Operational System
* Linux x86-64

### Memory requirement
* Minimum 2GB of RAM

### Web Server
* Apache 2.x
* Nginx 1.7.x

### PHP Versions
* 5.6.x
* 7.0.2
* 7.0.6–7.0.x

### MySQL Version
* MySQL 5.6
* MariaDB and Percona are compatible with Magento because we support MySQL 5.6 APIs.

### Extension Dependencies
* bc-math (Magento Commerce only)
* curl
* gd, ImageMagick 6.3.7 (or later) or both
* intl
m* bstring
* mcrypt
* hash
* openssl
* PDO/MySQL
* SimpleXML
* soap
* xml
* xsl
* zip

PHP 7 only:
   * json
   * iconv

### SSL
* It is a requirement that you have an SSL certificate.
* During testing in Sandbox you will be able to run at http.

<a name="Features"></a>
## Features:

The module of Mercado Pago to Magento is integrated with the features and payment solutions:

* [Basic Checkout (Redirect, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * Split payments (Two cards)
    * [Mercado Envios](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [Refunds of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)


* Custom Checkout
    * [Payment with Credit Card](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [One Click Pay (Customers and Cards)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Paid with other payment methods](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)
    * [Refunds of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)


* Other features
    * Customizable success page

<a name="Installation"></a>
## Installation:

    This process will explain the installation of the Mercado Pago module via Composer:

**Installation via Composer**

1. Currently available two versions of modules, where each of them will provide a type of checkout:

* If you want to process payments with **Checkout Redirect**, you will need to install version 2.x of the Mercado Pago module. To install this version run the command:

> composer require mercadopago/magento2-plugin:2.*

* If you want to process payments with **Custom Checkout** with Credit Card or Ticket, use version 3.x of the module. This version is optimized for this type of checkout. To install this version run the command:

> composer require mercadopago/magento2-plugin:3.*

2. Then update magento with new modules:

> bin/magento setup:upgrade

3. Execute the command to clean the Magento cache:

> bin/magento cache:clean

4. When the store is in **productive** mode, it is necessary to generate the static files again:

> bin/magento setup:static-content:deploy

5. If you have problems with folder permission when accessing the store, you must renew the permissions:

> chmod 777 -R var/ pub/ generated/

6. Very Good! The module of Mercado Pago was successfully installed.

<a name="Configure Credit Card and Ticket"></a>
## Configure Credit Card and Ticket:

This process will explain how to configure the module to accept payments with Checkout Custom with Credit Card and Tickets:

1. Go to **Stores > Configuration > Sales > Payment Methods**.

2. To set up the credentials go to **Mercado Pago** > **Credentials**, you will see the field **Public Key** and **Access Token**. You can get the credentials at the link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)

> There are two types of credentials:
> * Modo Sandbox: The credentials in this way are used for testing.
> * Modo Produção: The credentials in this way are used to receive payments in production. To use the credentials of the production mode you must complete the form "I want to go to production".

3. With your credentials filled, you need to enable payment methods. Go to **Checkout Custom - Credit And Debit Card**, click in **Configure** and check **Enable** as **Yes**. Make this process for **Checkout Custom - Credit And Debit Card** and **Checkout Custom - Offline Payment Methods (Ticket)** and then click on **Save Config**.

![Mercado Pago Custom Checkout Configuration](images/magento2/mercadopago_global_configuration.png)

4. Very good! The Checkout Custom with Credit Card and Ticket has been configured and enabled successfully!

<a name="Configure Checkout Redirect, Iframe and LightBox"></a>
##Configure Checkout Redirect, Iframe and LightBox:

This process will explain how to configure the module to accept payments with Basic Checkout in Redirect, Iframe or Lightbox:

1. Go to **Stores > Configuration > Sales > Payment Methods**.

2. To set up the credentials go to **Mercado Pago - Classic Checkout**, click in **Configure**. you will see the field **Client id** and **Client Secret**. You can get the credentials at the link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Mercado Pago Checkout Redirect Configuration](images/magento2/mercadopago_global_configuration.png)


3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. Configure the **Type Checkout** and if the user must return to your store at the end of the checkout (**Auto Redirect**).

images/magento2/mercadopago_custom_checkout_configuration.png

4.  Very good! The Basic Checkout with Credit Card and Ticket has been configured and enable successfully!

<a name="Payment Notification status settings"></a>
##Payment Notification status settings:

This process will explain how to set up order statuses for payment notifications:

1. Go to **Stores > Configuration > Sales > Payment Methods**.

2. To configure the statuses go to **Mercado Pago - Global Configuration**, go to the option **Order Status Options**. 
For each payment status you can choose an order status, as soon as your store receives the payment notification the module will automatically update the order to the chosen status. To save the settings click the **Save Config** button.

> The module is prepared to receive payment notifications automatically, that is, without the need to configure your Mercado Pago account or module.

3. Very Good! The notification statuses have been successfully configured.
