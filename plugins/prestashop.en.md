# Prestashop - Mercado Pago Module (v1.3.6 - 1.4.7.3x, 1.5.x, 1.6.x, 1.7.x)
---

* [Features](#features)
* [Requirements](#requirements)
* [Available versions](#available_versions)
* [Installation](#installation)
* [Setup](#setup)
* [Notifications](#notifications)
* [Example features](#pictures_features)
* [Social](#social)

<a name="features"></a>
##Features##

Checkout options right for your business:
We offer two checkout methods that make it easy to securely accept payments from anyone, anywhere.

**Custom Checkout**

Offer a checkout fully customized to your brand experience with our simple-to-use payments API.

* Seamless integration— no coding required, unless you want to.
* Full control of buying experience.
* Store buyer’s card for fast checkout.
* Accept tickets in addition to cards.
* Accept MercadoPago's discount coupons.
* Improve conversion rate.

*Available for Argentina, Brazil, Colombia, Mexico, Peru and Venezuela*

**Basic Checkout**

Great for merchants who want to get going quickly and easily.

* Easy website integration— no coding required.
* Limited control of buying experience — display Checkout window as redirect, modal or iframe.
* Store buyer’s card for fast checkout.
* Accept tickets, bank transfer and account money in addition to cards.
* Accept MercadoPago's discount coupons.

*Available for Argentina, Brazil, Chile, Colombia, Mexico, Peru, Uruguay and Venezuela*

<a name="requirements"></a>
##Requirements##
Basically, the requirements of this plugin are same as you need to run WooCommerce. Your machine should have:

**Platforms**

* <a href="https://www.prestashop.com/en/download">Prestashop</a> 1.6 or greater;

**Web Server Host**

* <a href="http://php.net/">PHP</a> 5.6 or greater with CURL support;
* <a href="http://www.mysql.com/">MySQL</a> version 5.6 or greater OR <a href="https://mariadb.org/">MariaDB</a> version 10.0 or greater;
* <a href="https://httpd.apache.org/">Apache 2.x</a>.

**SSL certificate**

If you're using Custom Checkout, it is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.


<a name="available_versions"></a>
##Available versions##
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
      <td><a href="https://github.com/mercadopago/cart-prestashop/tree/master/v1.3.6%20-%201.4.7.3x">v1.3.6 - 1.4.7.3x</a></td>
      <td>Deprecated (Old Version)</td>
      <td>Prestashop v1.3.6 - 1.4.7.3x</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-prestashop/tree/master/v1.5.x/mercadopago">v1.5.x</a></td>
      <td>Deprecated (Old Version)</td>
      <td>Prestashop v1.5.x</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-prestashop/tree/master/v1.6.x">v1.6.x</a></td>
      <td>Stable (Current Version)</td>
      <td>Prestashop v1.6.x</td>
     </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-prestashop/tree/master/v1.7.x">v1.7.x</a></td>
      <td>Stable (Current Version)</td>
      <td>Prestashop v1.7.x</td>
     </tr>
  </tbody>
</table>

<a name="installation"></a>
##Installation##

1. Download Prestashop: https://www.prestashop.com/es/versiones-para-programadores#previous-version
    * Prestashop v1.3.6 - 1.4.7.3x
    * Prestashop v1.5.x
    * Prestashop v1.6.x
    * Prestashop v1.7.x

<a name="setup"></a>
##Setup##

1. Copy **mercadopago** folder to **modules** folder.

2. On your store administration, go to **Modules > Modules**.

3. Search by **MercadoPago** and click install. <br />
You will receive the following message: " Module(s) installed successfully."
  ![Installation](https://raw.github.com/mercadopago/cart-prestashop/master/README.img/Installation.JPG)<br />

4. Set your **CLIENT_ID** and **CLIENT_SECRET**, or **PUBLIC_KEY** and **ACCESS_TOKEN** (depending on which module you're using). 

  Get your credentials in the following address:
  * Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
  * Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
  * Peru: [https://www.mercadopago.com/mlp/account/credentials](https://www.mercadopago.com/mlp/account/credentials)
  * Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)

***IMPORTANT:*** *This module will only work with the following currencies:*

* Argentina:
  * **ARS** (Argentinian Peso)
* Brazil:
  * **BRL** (Brazilian Real)
* Chile:
  * **CLP** (Chilean Peso)
* Colombia:
  * **COP** (Colombian Peso)
* Mexico:
  * **MXN** (Mexican Peso)
* Peru:
  * **PEN** (Peruvian Sol)
* Uruguay:
  * **UYU** (Peso Uruguayo)
* Venezuela:
  * **VEF** (Venezuelan Bolivar)


<a name="notifications"></a>
## Notifications
Your store will automatically sync with MercadoPago. The notification URL will be sent in each payment.

<a name="pictures_features"></a>
## Example features

**Credit Card Customized Checkout**
<br/>
![pictures_features](https://raw.github.com/mercadopago/cart-prestashop/master/README.img/Checkout.jpg)

**Print Ticket**
<br/>
![pictures_features](https://raw.github.com/mercadopago/cart-prestashop/master/README.img/Ticket.jpg)

**Customer Card** <strong>Prestashop v1.6.x</strong>
<br/>
![pictures_features](https://raw.github.com/mercadopago/cart-prestashop/master/README.img/CustomerCard.jpg)

**Discount Coupon** <strong>Prestashop v1.6.x</strong>
<br/>
![pictures_features](https://raw.github.com/mercadopago/cart-prestashop/master/README.img/Coupon.jpg)

<a name="social"></a>
##Social##

Follow our facebook group and watch our videos
<ul>
  <li><a href="https://www.facebook.com/groups/modulos.mercadopago/?ref=ts&fref=ts" target="_blank">FACEBOOK</a></li>
  <li><a href="https://www.youtube.com/playlist?list=PLl8LGzRu2_sXxChIJm1e0xY6dU3Dj_tNi" target="_blank">YOUTUBE</a></li>
</ul>