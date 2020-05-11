---
  indexable: false
---
# VirtueMart - Mercado Pago Module (v3.0.x)

## Requirements

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

## Available versions

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

## Features

The module of Mercado Pago to VirtueMart is integrated with the features and payment solutions:

* [Basic Checkout (Redirect, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
  * Split payments (Two cards)


* Custom Checkout
  * [Payment with Credit Card](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
  * [One Click Pay (Customers and Cards)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)
  * [Paid with other payment methods](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)

## Installation

1. Download the zip module
2. Go to **Extensions > Extension Manager**
3. In **Upload Package File > Package File** select the **cart-virtuemart.zip** and click **Upload & Installation**

## Standard Checkout Configuration

1. Go to **VirtueMart > Payment Methods** and click **New**

2. Complete the fields:
  - **Payment Name** set **Mercado Pago**
  - **Sef Alias** set **mercadopago**
  - **Payment Method** select **Mercado Pago**
  - **Published** set to **true**
3. Click in **Save**

4. Go to **Configuration** tab <br/>
  First of all, you need to configure your client credentials. To make it, fill your **Client_id** and **Client_secret** in Credentials Configuration section.

  ![Setting client id and client secret](/images/virtuemart-credentials.png) <br />

 > You can obtain your **Client id** and **Client secret**,[in the following link]([FAKER][CREDENTIALS][URL_BASIC]).

5. Checkout settings. <br/>

  ![Settings checkout](/images/virtuemart-checkout_settings.png) <br />

  **Type Checkout**: How your customers will interact with Mercado Pago to pay their orders;<br />
  **Auto Redirect**: If set, the platform will return to your store when the payment is approved.<br />
  **Maximum Number of Installments**: The maximum installments allowed for your customers;<br />
  **Exclude Payment Methods**: Select the payment methods that you want to not work with Mercado Pago.<br />
  **iFrame Width**: The width, in pixels, of the iFrame (used only with iFrame Integration Method);<br />
  **iFrame Height**: The height, in pixels, of the iFrame (used only with iFrame Integration Method);<br />
  **Mercado Pago Sandbox**: Test your payments in Mercado Pago sandbox environment;<br/>

6. IPN settings. <br/>

  ![Setting Notification - IPN](/images/virtuemart-ipn_settings.png) <br />

  * **Choose the status of approved orders**: Sets up the order status when payments are approved.
  * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
  * **Choose the status when payment is process**: Sets up the order status when payments are in process.
  * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
  * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
  * **Choose the status when payment was chargeback**: Sets up the order status when payments are chargeback.
  * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.
  * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.

7. Other settings. <br/>

  ![Store category](/images/virtuemart-other_settings.png) <br />

  **Store Category**: Sets up the category of the store;<br />
  **Log**: Enables/disables logs.<br />
  **Logo**: Select the logo. You must add the file in the folder /images/stories/virtuemart/payment <br />

## Credit Card - Custom Checkout Configuration

  1. Go to **VirtueMart > Payment Methods** and click **New**

  2. Complete the fields:
  - **Payment Name** set **Credit Card - Mercado Pago**
  - **Sef Alias** set **mercadopago**
  - **Payment Method** select **Mercado Pago**
  - **Published** set to **true**

  3. Click in **Save**

  4. Go to **Configuration** tab

  5. On **Mercado Pago Product** select **Credit Card - Checkout Custom**

  6. Now configure your credentials. To make it, fill your **access_token** in Credentials Configuration section.

  ![Settings credentials - Transparent checkout - Credit card](/images/virtuemart-credentials_custom.png) <br />

  Find your **Public key** and **Access token** in the [Credentials section]([FAKER][CREDENTIALS][URL])

  7. Checkout settings. <br/>

  ![Instruciones para la instalación](/images/virtuemart-checkout_settings_custom.png) <br />

  **Statement Descriptor**: Sets the label as the customer will see the charge for amount in his/her bill;<br />
  **Binary**: When set to true, the payment can only be approved or rejected. Otherwise in_process status is added.<br />

  8. IPN settings. <br/>

  ![Setting Notification - IPN](/images/virtuemart-ipn_settings.png) <br />

  * **Choose the status of approved orders**: Sets up the order status when payments are approved.
  * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
  * **Choose the status when payment is process**: Sets up the order status when payments are in process.
  * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
  * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
  * **Choose the status when payment was chargeback**: Sets up the order status when payments are chargeback.
  * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.
  * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.

## Ticket - Custom Checkout Configuration

  1. Go to **VirtueMart > Payment Methods** and click **New**

  2. Complete the fields:
  - **Payment Name** set **Ticket - Mercado Pago**
  - **Sef Alias** set **mercadopago**
  - **Payment Method** select **Mercado Pago**
  - **Published** set to **true**

  3. Click in **Save**

  4. Go to **Configuration** tab

  5. On **Mercado Pago Product** select **Ticket - Checkout Custom**

  6. Now configure your credentials. To make it, fill your **public_key** and **access_token** in Credentials Configuration section.

  ![Settings credentials - Transparent checkout - Ticket](/images/virtuemart-credentials_custom_ticket.png) <br />

  Find your **Access token** in the [Credentials section]([FAKER][CREDENTIALS][URL]).  

> Find all the information about your credentials in our [FAQs](https://www.mercadopago.com.ar/developers/en/guides/faqs/credentials/). 

  7. IPN settings.
  <br/>![Setting Notification - IPN](/images/virtuemart-ipn_settings.png) <br />

  * **Choose the status of approved orders**: Sets up the order status when payments are approved.
  * **Choose the status when payment is pending**: Sets up the order status when payments are pending.
  * **Choose the status when payment is process**: Sets up the order status when payments are in process.
  * **Choose the status when client open a mediation**: Sets up the order status when client opens a mediation.
  * **Choose the status of refunded orders**: Sets up the order status when payments are refunded.
  * **Choose the status when payment was chargeback**: Sets up the order status when payments are chargeback.
  * **Choose the status when payment was canceled**: Sets up the order status when payments are canceled.
  * **Choose the status when payment was reject**: Sets up the order status when payments are rejected.

## Support

If you have any questions, problems or errors we have a support channel. Write us at our [support form](/support) with the following information:

* Email of your account Mercado Pago.
* Details about your question, problem or error.
* Files that can help in understanding (Print-Screen, Video, Log Files, etc.).
* Version of VirtueMart and Joomla.
* Module version, if you are using.
