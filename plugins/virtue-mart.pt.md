# VirtueMart - Mercado Pago Module (v3.0.x)

* [Features](#features)
* [Requirements](#requirements)
* [Available versions](#available_versions)
* [Installation](#installation)
* [Standard Checkout Configuration](#configuration_std)
* [Credit Card - Custom Checkout Configurationn](#configuration_custom)
* [Ticket - Custom Checkout Configuration](#configuration_custom_ticket)
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

Basically, the requirements of this plugin are same as you need to run Virtuemart and Joomla. Your machine should have:

**Platforms**

* <a href="https://www.joomla.org/download.html">Joomla</a> 2.5 or greater;
* <a href="https://virtuemart.net/downloads/">VirtueMart</a> 3.0.x or greater;

**Web Server Host**

* <a href="http://php.net/">PHP</a> 5.3 or greater with CURL support;
* <a href="http://www.mysql.com/">MySQL</a> version 5.5;
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
      <th>VirtueMart Compatible Versions</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>v2.0.3</td>
      <td>Stable (Current version)</td>
      <td>VirtueMart v3.0.x</td>
    </tr>
  </tbody>
</table>

<a name="installation"></a>
##Installation##

1. Download the zip module
2. Go to **Extensions > Extension Manager**
3. In **Upload Package File > Package File** select the **cart-virtuemart.zip** and click **Upload & Installation**

<a name="configuration_std"></a>
##Standard Checkout Configuration##

1. Go to **VirtueMart > Payment Methods** and click **New**

2. Complete the fields:
  - **Payment Name** set **MercadoPago**
  - **Sef Alias** set **mercadopago**
  - **Payment Method** select **MercadoPago**
  - **Published** set to **true**
3. Click in **Save**

4. Go to **Configuration** tab <br/>
  First of all, you need to configure your client credentials. To make it, fill your **Client_id** and **Client_secret** in Credentials Configuration section.

  ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/credentials.png) <br />

  You can obtain your **Client_id** and **Client_secret**, accordingly to your country, in the following links:

  * Argentina: https://www.mercadopago.com/mla/herramientas/aplicaciones
  * Brazil: https://www.mercadopago.com/mlb/ferramentas/aplicacoes
  * Chile: https://www.mercadopago.com/mlc/herramientas/aplicaciones
  * Colombia: https://www.mercadopago.com/mco/herramientas/aplicaciones
  * Mexico: https://www.mercadopago.com/mlm/herramientas/aplicaciones
  * Peru: https://www.mercadopago.com/mpe/account/credentials?type=basic
  * Venezuela: https://www.mercadopago.com/mlv/herramientas/aplicaciones

5. Checkout settings. <br/>

  ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/checkout_settings.png) <br />

  **Type Checkout**: How your customers will interact with Mercado Pago to pay their orders;<br />
  **Auto Redirect**: If set, the platform will return to your store when the payment is approved.<br />
  **Maximum Number of Installments**: The maximum installments allowed for your customers;<br />
  **Exclude Payment Methods**: Select the payment methods that you want to not work with MercadoPago.<br />
  **iFrame Width**: The width, in pixels, of the iFrame (used only with iFrame Integration Method);<br />
  **iFrame Height**: The height, in pixels, of the iFrame (used only with iFrame Integration Method);<br />
  **Mercado Pago Sandbox**: Test your payments in Mercado Pago sandbox environment;<br/>

6. IPN settings. <br/>

  ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/ipn_settings.png) <br />

  * **Choose the status of approved orders**: Sets up the order status when payments are approved.
  * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
  * **Choose the status when payment is process**: Sets up the order status when payments are in process.
  * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
  * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
  * **Choose the status when payment was chargeback**: Sets up the order status when payments are chargeback.
  * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.
  * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.

7. Other settings. <br/>

  ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/other_settings.png) <br />

  **Store Category**: Sets up the category of the store;<br />
  **Log**: Enables/disables logs.<br />
  **Logo**: Select the logo. You must add the file in the folder /images/stories/virtuemart/payment <br />

<a name="configuration_custom"></a>
##Credit Card - Custom Checkout Configuration##

  1. Go to **VirtueMart > Payment Methods** and click **New**

  2. Complete the fields:
    - **Payment Name** set **Credit Card - MercadoPago**
    - **Sef Alias** set **mercadopago**
    - **Payment Method** select **MercadoPago**
    - **Published** set to **true**

  3. Click in **Save**

  4. Go to **Configuration** tab

  5. On **Mercado Pago Product** select **Credit Card - Checkout Custom**

  6. Now configure your credentials. To make it, fill your **access_token** in Credentials Configuration section.

    ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/credentials_custom.png) <br />

    You can obtain your **Public Key** and **Access Token**, accordingly to your country, in the following links:

    * Argentina: https://www.mercadopago.com/mla/account/credentials
    * Brazil: https://www.mercadopago.com/mlb/account/credentials
    * Colombia: https://www.mercadopago.com/mco/account/credentials
    * Mexico: https://www.mercadopago.com/mlm/account/credentials
    * Venezuela: https://www.mercadopago.com/mlv/account/credentials

  7. Checkout settings. <br/>

    ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/checkout_settings_custom.png) <br />

    **Statement Descriptor**: Sets the label as the customer will see the charge for amount in his/her bill;<br />
    **Binary**: When set to true, the payment can only be approved or rejected. Otherwise in_process status is added.<br />

  8. IPN settings. <br/>

    ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/ipn_settings.png) <br />

    * **Choose the status of approved orders**: Sets up the order status when payments are approved.
    * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
    * **Choose the status when payment is process**: Sets up the order status when payments are in process.
    * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
    * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
    * **Choose the status when payment was chargeback**: Sets up the order status when payments are chargeback.
    * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.
    * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.

<a name="configuration_custom_ticket"></a>
##Ticket - Custom Checkout Configuration##

  1. Go to **VirtueMart > Payment Methods** and click **New**

  2. Complete the fields:
    - **Payment Name** set **Ticket - MercadoPago**
    - **Sef Alias** set **mercadopago**
    - **Payment Method** select **MercadoPago**
    - **Published** set to **true**

  3. Click in **Save**

  4. Go to **Configuration** tab

  5. On **Mercado Pago Product** select **Ticket - Checkout Custom**

  6. Now configure your credentials. To make it, fill your **public_key** and **access_token** in Credentials Configuration section.

    ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/credentials_custom_ticket.png) <br />

    You can obtain your **Access Token**, accordingly to your country, in the following links:

    * Argentina: https://www.mercadopago.com/mla/account/credentials
    * Brazil: https://www.mercadopago.com/mlb/account/credentials
    * Colombia: https://www.mercadopago.com/mco/account/credentials
    * Mexico: https://www.mercadopago.com/mlm/account/credentials
    * Venezuela: https://www.mercadopago.com/mlv/account/credentials

  7. IPN settings. <br/>

    ![Installation Instructions](https://raw.github.com/mercadopago/cart-virtuemart/master/README.img/ipn_settings.png) <br />

    * **Choose the status of approved orders**: Sets up the order status when payments are approved.
    * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
    * **Choose the status when payment is process**: Sets up the order status when payments are in process.
    * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
    * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
    * **Choose the status when payment was chargeback**: Sets up the order status when payments are chargeback.
    * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.
    * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.
