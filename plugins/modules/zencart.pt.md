# ZenCart - Mercado Pago Module (v1.5.x)
---

* [Features](#features)
* [Available versions](#available_versions)
* [Requirements](#requirements)
* [Installation](#installation)
* [Setup](#setup)
* [Social](#social)


<a name="features"></a>
##Features##

**Standard Checkout**

Great for merchants who want to get going quickly and easily.

* Easy website integration— no coding required.
* Limited control of buying experience— display Checkout window as redirect, modal or iframe.
* Store buyer’s card for fast checkout.
* Accept tickets, bank transfer and account money in addition to cards.
* Accept MercadoPago's discount coupons.

*Available for Argentina, Brazil, Chile, Colombia, Mexico, Peru and Venezuela*


<a name="available_versions"></a>
##Available versions##

Plugin Version | Status | Compatible Versions
-------------- | ------ | -------------------
v1.0.1 | Stable (Current version) | ZenCart 1.5.x


<a name="requirements"></a>
## Requirements:

**PHP**

* PHP v5+
* Required extensions: MySQL, cURL

**Database**

* MySQL v5+


<a name="installation"></a>
## Installation:

1. Download Mercado Pago module.

2. Copy the module folder to your ZenCart ROOT installation.


<a name="setup"></a>
## Setup MercadoPago

1. On your store administration, go to **Modules > Payment**.

2. In Payment Modules click on **MercadoPago**.

3. In **MercadoPago** click on the **Install** button.

4. Now, is very important to set your **CLIENT_ID** and **CLIENT_SECRET**.

  ![Installation Instructions](https://raw.github.com/gmatsuoka/cart-zencart/master/README.img/credentials.png) <br />

	Get your CLIENT_ID and CLIENT_SECRET in the following address:
	* Argentina: [https://www.mercadopago.com/mla/herramientas/aplicaciones](https://www.mercadopago.com/mla/herramientas/aplicaciones)
	* Brazil: [https://www.mercadopago.com/mlb/ferramentas/aplicacoes](https://www.mercadopago.com/mlb/ferramentas/aplicacoes)
	* Chile: [https://www.mercadopago.com/mlc/herramientas/aplicaciones](https://www.mercadopago.com/mlc/herramientas/aplicaciones)
	* Colombia: [https://www.mercadopago.com/mco/herramientas/aplicaciones](https://www.mercadopago.com/mco/herramientas/aplicaciones)
	* Mexico: [https://www.mercadopago.com/mlm/herramientas/aplicaciones](https://www.mercadopago.com/mlm/herramientas/aplicaciones)
	* Peru: [https://www.mercadopago.com/mpe/herramientas/aplicaciones](https://www.mercadopago.com/mpe/herramientas/aplicaciones)
	* Venezuela: [https://www.mercadopago.com/mlv/herramientas/aplicaciones](https://www.mercadopago.com/mlv/herramientas/aplicaciones)

5. Set the status for IPN (Instant Payment Notification):

  ![Installation Instructions](https://raw.github.com/gmatsuoka/cart-zencart/master/README.img/notification.png) <br />

  * **Choose the default status for a new order**: Sets up the order status when payments are approved.
  * **Choose the status of approved orders**: Sets up the order status when payments are approved.
  * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
  * **Choose the status when payment is process**: Sets up the order status when payments are in process.
  * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.
  * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
  * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
  * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.

6. Other settings. <br/>

![Installation Instructions](https://raw.github.com/gmatsuoka/cart-zencart/master/README.img/other_config_1.png) <br />

![Installation Instructions](https://raw.github.com/gmatsuoka/cart-zencart/master/README.img/other_config_2.png) <br />

![Installation Instructions](https://raw.github.com/gmatsuoka/cart-zencart/master/README.img/other_config_3.png) <br />

  * **Store Category**: Sets up the category of the store;
  * **Redirect URL**: The Redirect url were also generated automatically, but if you're testing in a localhost, it will not work. You can change the address to any of your choice, but can't be localhost.
  * **Enable Auto Return?**: If set, the platform will return to your store when the payment is approved.
  * **Type Checkout**: How your customers will interact with Mercado Pago to pay their orders;
  * **Limit installments**: The maximum installments allowed for your customers;
  * **Exclude Methods**: Complete the payment methods that you do not accept with MercadoPago.
  * **Live or Sandbox**: Test your payments in Mercado Pago sandbox environment;
  * **Sort order of display**: Complete the display order of MercadoPago

<a name="social"></a>
##Social##

Follow our facebook group and watch our videos
<ul>
  <li><a href="https://www.facebook.com/groups/modulos.mercadopago/?ref=ts&fref=ts" target="_blank">FACEBOOK</a></li>
  <li><a href="https://www.youtube.com/playlist?list=PLl8LGzRu2_sXxChIJm1e0xY6dU3Dj_tNi" target="_blank">YOUTUBE</a></li>
</ul>