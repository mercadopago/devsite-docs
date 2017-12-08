# OpenCart - Mercado Pago Module (v1.4.9, 1.5.x, 2.x - 2.2, 2.3)

* [Features](#features)
* [Available Versions](#versions)
* [Installation](#installation)
* [Custom Configuration](#configuration_custom)
* [Standard Configuration](#configuration_standard)
* [Ticket Configuration](#configuration_ticket)
* [Feedback](#feedback)

<a name="features"></a>
## Features:

Payment options for your business:
We offer two methods of payment that facilitate the safe acceptance of payments of any person, anywhere.

* [Checkout (Redirected, Iframe or Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * Payment with two cards
    * [Shipping Market](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [Return of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)
    * [Signature (Recurrence)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/subscriptions/)

* Checkout transparent
    * [Payment by credit card](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [One-Click Payment (Customers and Cards)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Payment with other media (Ticket)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)
    * Payment with two cards
    * [Return of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)

<a name="versions"></a>
## Available Versions:
<table>
  <thead>
    <tr>
      <th>Plugin Version</th>
      <th>Status</th>
      <th>Compatible Versions</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v1.4.9">v1.4.9</a></td>
      <td>Deprecated (Old Version)</td>
      <td>OpenCart v1.4.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v1.5.x">v1.5.x</a></td>
      <td>Deprecated (Old Version)</td>
      <td>OpenCart v1.5.x</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v2.x%20-%202.2">v2.x - v2.2</a></td>
      <td>Stable (Current Version)</td>
      <td>OpenCart v2.x - v2.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v2.3">v2.3</a></td>
      <td>Stable (Current Version)</td>
      <td>OpenCart v2.3</td>
    </tr>
  </tbody>
</table>

## Requirements:

**Operating System**

* Linux x86-64

**Web Server**

* Apache 2.x
* Nginx 1.7.x

**Database**

* MySQL 5.6 (Oracle or Percona)

**PHP**

* PHP 5.4.x / 5.5.x
* Required extensions: PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl

**SSL certificate**

It is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.

<a name="installation"></a>
## Installation:

1. Download Mercado Pago module:
    * OpenCart 1.4.9
    * OpenCart 1.5.x
    * OpenCart 2.x - 2.2
    * OpenCart 2.3

2. Copy the folders **admin**, **catalog** and **image** to your OpenCart ROOT installation. Make sure to keep the OpenCart folders structure intact.

**Important**: If you're using OpenCart 2.x, you'll find 3 different types of checkout inside the OpenCart 2.x folder: Standard, Custom and Ticket. You can use them all together or individually, without any problems or dependencies between them. Each one of these folders have its own Admin, Catalog and Image folders and the installation process is the same described above.

<a name="configuration_custom"></a>
## Custom Configuration

1. In the management of your store, in **extensions > payments > Mercado Pago Custom** click on **Edit**.

  ![Cuenta de Mercado Pago](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/custom/1.gif?raw=true)

2. Insert your **PUBLIC_KEY** and **ACCESS_TOKEN** and make other settings in your store:

 ![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/custom/2.gif?raw=true)

3. Set notifications for your store. Finally, click the Save button. Ready! The configuration for your store is done!
  
![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/custom/3.gif?raw=true)

<a name="configuration_standard"></a>
## Standard Configuration

1. In the management of your store, in **extensions > payments > Mercado Pago Standard** click on **Edit**.

  ![Cuenta de Mercado Pago](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/standard/1.gif?raw=true)

2. Insert your **CLIENT_ID** and **CLIENT SECRET** and make other settings in your store:

 ![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/standard/2.gif?raw=true)

3. Set notifications for your store. Finally, click the Save button. Ready! The configuration for your store is done!
  
![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/standard/3.gif?raw=true)

<a name="configuration_ticket"></a>
## Ticket Configuration

1. In the management of your store, in **extensions > payments > Mercado Pago Standard** click on **Edit**.

  ![Cuenta de Mercado Pago](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/ticket/1.gif?raw=true)

2. Insert your **ACCESS_TOKEN** and make other settings in your store:

 ![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/ticket/2.gif?raw=true)

3. Set notifications for your store. Finally, click the Save button. Ready! The configuration for your store is done!

![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/ticket/3.gif?raw=true)

<a name="Feedback"></a>
## Feedback ##

If you have any doubts, problems or errors we have a channel of attention. Send an email to modulos@mercadopago.com with the following information:

  * Email of your account Mercado Pago.
  * Details about your doubt, problem or error.
  * Files that can help in understanding (Print-Screen, Video, Log Files, etc.).
  * Opencart version.
  * Module version, if used.