# ZenCart - Mercado Pago Module (v1.5.x)

## Features

The module of Mercado Pago to Zencart is integrated with the feature and payment solutions:

* [Basic Checkout (Redirect, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * Split payments (Two cards)
    * [Refunds of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)

## Available versions

Plugin Version | Status | Compatible Versions
-------------- | ------ | -------------------
v1.0.1 | Stable (Current version) | ZenCart 1.5.x

## Requirements

**PHP**

* PHP v5+
* Required extensions: MySQL, cURL

**Database**

* MySQL v5+

## Installation

1. Download Mercado Pago module.

2. Copy the module folder to your ZenCart ROOT installation.

## Setup MercadoPago

1. On your store administration, go to **Modules > Payment**.

2. In Payment Modules click on **MercadoPago**.

3. In **MercadoPago** click on the **Install** button.

4. Now, is very important to set your **CLIENT_ID** and **CLIENT_SECRET**.

  ![Setting client id and client secret](/images/zencart-credentials.png) <br />

	Get your CLIENT_ID and CLIENT_SECRET in the following address:
  * Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
  * Brasil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

5. Set the status for IPN (Instant Payment Notification):

  ![Setting notification](/images/zencart-notification.png) <br />

  * **Choose the default status for a new order**: Sets up the order status when payments are approved.
  * **Choose the status of approved orders**: Sets up the order status when payments are approved.
  * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
  * **Choose the status when payment is process**: Sets up the order status when payments are in process.
  * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.
  * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
  * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
  * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.

6. Other settings. <br/>

![Store Category](/images/zencart-other_config_1.png) <br />

![Checkout type setting](/images/zencart-other_config_2.png) <br />

![Number of installments and other settings](/images/zencart-other_config_3.png) <br />

  * **Store Category**: Sets up the category of the store;
  * **Redirect URL**: The Redirect url were also generated automatically, but if you're testing in a localhost, it will not work. You can change the address to any of your choice, but can't be localhost.
  * **Enable Auto Return?**: If set, the platform will return to your store when the payment is approved.
  * **Type Checkout**: How your customers will interact with Mercado Pago to pay their orders;
  * **Limit installments**: The maximum installments allowed for your customers;
  * **Exclude Methods**: Complete the payment methods that you do not accept with MercadoPago.
  * **Live or Sandbox**: Test your payments in Mercado Pago sandbox environment;
  * **Sort order of display**: Complete the display order of MercadoPago

## Support:

If you have any questions, problems or errors we have a support channel. Write us at our [support form](/support) with the following information:

* Email of your account Mercado Pago.
* Details about your question, problem or error.
* Files that can help in understanding (Print-Screen, Video, Log Files, etc.).
* Version of Zencart.
* Module version, if you are using.
