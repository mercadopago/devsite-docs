# OpenCart

## Mercado Pago Module (Opencart v1.4.9, 1.5.x, 2.x - 2.2, 2.3, 3.x)

* [Features](#bookmark_Features)
* [Available Versions](#bookmark_Available_Versions)
* [Requirements](#bookmark_Requirements)
* [Installation](#bookmark_Installation)
* [Configuration](#bookmark_Configuration)
* [Upgrade](#bookmark_Upgrade)
* [Feedback](#bookmark_Feedback)

## Features:

Checkout options right for your business:
We offer two checkout methods that make it easy to securely accept payments from anyone, anywhere.

| Feature                                                   | Basic  Checkout   | Customized Checkout     |
|---------------------------------------------------------- |-------------------|-------------------------|
| Credit card Payments                                      | ✔                 | ✔                       |
| Other payment methods                                     | ✔                 | ✔                       |
| Mercado Pago's interface                                  | ✔                 |                         |
| Installments calculator                                   | ✔                 | ✔                       |
| IPN and webhooks                                          | ✔                 | ✔                       |
| Mercado Pago coupon discounts                             | ✔                 |                         |
| Log and debugging tools                                   | ✔                 | ✔                       |
| Currency conversion                                       |                   | ✔                       |
| Platform and credential Status                            | ✔                 | ✔                       |

**Basic Checkout**

Great for merchants who want to get going quickly and easily.

* Easy website integration— no coding required.
* Limited control of buying experience— display Checkout window as redirect, modal or iframe.
* Store buyer’s card for fast checkout.
* Accept tickets, bank transfer and account money in addition to cards.
* Accept MercadoPago's discount coupons.

*Available for Argentina, Brazil, Chile, Colombia, Mexico, Peru andUruguay *

**Custom Checkout**

Offer a checkout fully customized to your brand experience with our simple-to-use payments API.

* Seamless integration— no coding required, unless you want to.
* Full control of buying experience.
* Store buyer’s card for fast checkout.
* Accept tickets in addition to cards.
* Improve conversion rate.

*Available for Argentina, Brazil, Colombia, Mexico and Peru*


## Requirements:

| Requirement               | Detail                                                    |
|---------------------------|-----------------------------------------------------------|
| OS                        | Linux x86-64                                              |
| Web Server                | Apache 2.x, Nginx 1.7.x                                   |
| Data base                 | MySQL 5.6 (Oracle or Percona)                             |
| PHP version               | PHP 5.4.x / 5.5.x                                         |
| Extensions                | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl  |
| SSL                       | SSL required to process card Payments                     |

>It is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.


## Available Versions:

| Plugin Version                                                                          | Status                    | Compatible versions   |
|-----------------------------------------------------------------------------------------|---------------------------|-----------------------|
| [v1.4.9](https://github.com/mercadopago/cart-opencart/tree/master/v1.4.9)               | Deprecated (Old Versión)  | OpenCart v1.4.9       |
| [v1.5.x](https://github.com/mercadopago/cart-opencart/tree/master/v1.5.x)               | Deprecated (Old Versión)  | OpenCart v1.5.x       |
| [v2.x - v2.2](https://github.com/mercadopago/cart-opencart/tree/master/v2.x%20-%202.2)  | Deprecated (Old Versión)  | OpenCart v2.x - v2.2  |
| [v2.3](https://github.com/mercadopago/cart-opencart/tree/master/v2.3)                   | Stable (Current Versión)  | OpenCart v2.3         |
| [v3.x](https://github.com/mercadopago/cart-opencart/tree/master/v3.x)                   | Stable (Current Versión)  | OpenCart v3.x         |

## Installation:

1. Download Mercado Pago module:

  * [OpenCart 2.3](https://github.com/mercadopago/cart-opencart/tree/master/v2.3)
  * [OpenCart 3.x](https://github.com/mercadopago/cart-opencart/tree/master/v3.x)

2. Copy the folders **admin**, **catalog** and **image** to your OpenCart ROOT installation. Make sure to keep the OpenCart folders structure intact.

**Important**: If you're using OpenCart 2.0, you'll find 3 different types of checkout inside the OpenCart 2.x folder: Standard, Custom and Ticket. You can use them all together or individually, without any problems or dependencies between them. Each one of these folders have its own Admin, Catalog and Image folders and the installation process is the same described above.

## Setup MercadoPago

1. On your store administration, go to **extensions > payments > MercadoPago** and click **Install**.

2. Again in **extensions > payments > MercadoPago**, click **Edit** to Setup your Mercado Pago account:

	![Mercado Pago Account](https://raw.github.com/mercadopago/cart-opencart/master/README.img/MPAccount.png)

## Configuration

1. Again in **Extensions > Payments > MercadoPago**, click **Edit** to Setup your Mercado Pago account:

 ![Mercado Pago Account](https://raw.github.com/brunocodeman/cart-opencart/master/README.img/MPAccount.png)

2.  Set your **CLIENT_ID** and **CLIENT_SECRET**, or **PUBLIC_KEY** and **ACCESS_TOKEN** (depending on which module you're using).  
  In order to get them check the following links according to the country you are opperating in:

  * Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
  * Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)

4. If you're using **Custom Checkout** or **Standard Checkout**, select the country related to your **MercadoPago** account. If you're using **Ticket Checkout**, there is no need to configure the country.

5. Other general configurations:

  * **Category of your store**: Sets up the category of the store.
  * **Choose the status of approved orders**: Sets up the order status when payments are approved.
  * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
  * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
  * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
  * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.
  * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.
  * **Choose the status when payment was chargeback**: Sets up the order status when payments are chargeback.
  * **Logs**: Enables/disables system logs.
  * **Debug Mode**: If enabled, displays the raw response from the API instead of a friendly message.
  *  **Enabled**: Enables/disables this payment solution.
  * **Type Checkout (you're using Standard Checkout)**: Sets the type of checkout, the options are:
    *  *Iframe*: Opens an OpenCart URL with a iframe as the content.
    *  *Redirect*: Redirects to Mercado Pago URL.
    *  *Lightbox*: Similar to Iframe option but opens a lightbox instead of an iframe.

## Notifications

Your store will automatically sync with MercadoPago. The notification URL will be sent in each payment.

## Upgrade Mercado Pago Plugin

Follow the same steps that you did to [install the module](#bookmark_Installation).
