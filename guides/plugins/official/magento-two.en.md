# Magento 2

> WARNING
>
> Attention
>
> Protect your integration!
>
> In October 2022, the Magento 2 plugin versions before 3.5.0 will be discontinued. Keep your store always up to date with the latest version to avoid having to suspend transactions and exposing sensitive data.
>
> This documentation is for internal team use only,  as it has been deprecated or is an exclusive product. For further details, talk to the sales or integrations team.

## Requirements to integrate

| Requirement | Description |
| --- | --- |
| Magento Version | 2.x |
| Environment | LAMP (Linux, Apache, MySQL, and PHP)<br/>LNMP stack |
| Operational System | Linux x86-64 |
| Memory requirement | Minimum 2GB of RAM |
| Web Server | Apache 2.x<br/>Nginx 1.7.x |
| PHP Versions | 5.6.x<br/>7.0.2<br/>7.0.6–7.0.x<br/> |
| MySQL Version | MySQL 5.6<br/>MariaDB and Percona are compatible with Magento because we support MySQL 5.6 APIs. |
| Extension Dependencies | bc-math (Magento Commerce only)<br/>curl<br/>gd, ImageMagick 6.3.7 (or later) or both<br/>intl<br/>bstring<br/>mcrypt<br/>hash<br/>openssl<br/>PDO/MySQL<br/>SimpleXML<br/>soap<br/>xml<br/>xsl<br/>zip<br/> |
| PHP 7 only | json<br/>iconv |
| SSL | It is a requirement that you have an SSL certificate.<br/>During testing in Sandbox you will be able to run at http. |

## Features

The module of Mercado Pago to Magento is integrated with the features and payment solutions:

* [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction)
    * [Split payments (Two cards)](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations/#bookmark_payments_with_two_credit_cards)
    * [Refunds of Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds)


* Custom Checkout
    * [Payment with Credit Card](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card)
    * [One Click Pay (Customers and Cards)](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/advanced-integration)
    * [Paid with other payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/other-payment-ways)
    * [Refunds of Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds)


* Other features
    * Customizable success page


## Installation

This process will explain the installation of the Mercado Pago module via Composer:

**Installation via Composer**

1) Execute the command to get the plugin with Composer:

> composer require mercadopago/magento2-plugin:3.*

2) Then update magento with new modules:

> bin/magento setup:upgrade

3) Execute the command to clean the Magento cache:

> bin/magento cache:clean

4) When the store is in **productive** mode, it is necessary to generate the static files again:

> bin/magento setup:static-content:deploy

5) If you have problems with folder permission when accessing the store, you must renew the permissions:

> chmod 777 -R var/ pub/ generated/

6) Very Good! The module of Mercado Pago was successfully installed.


## Credit Card----[mlb]----, Pix------------ and Ticket Configuration (Custom Checkout)

Here is how to set up the module to accept Credit Card ----[mlb]----, Pix------------ and Boleto payments in Custom Checkout (Transparent).

1) Go to **Stores > Configuration > Sales > Payment Methods**.

2) To set up the credentials go to Mercado Pago > Credentials, you will see the field Public Key and Access Token. Get your credentials in [the Credentials section]([FAKER][CREDENTIALS][URL]).

> There are two types of credentials:
> * Trial credentials: The credentials in this way are used for testing.
> * Productive credentials: The credentials in this way are used to receive payments in production. To use the credentials of the production mode you must activate your credentials.
> * Read [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]//developers/en/guides/resources/credentials) for more information.

3) With your credentials filled, you need to enable payment methods.
First, access the method that you want to enable.

To enable payments via credit card > **Checkout - Credit and Debit Card**.<br>
To enable payments via ticket > C**ustom Checkout - Offline Payment Methods (Ticket)**.<br>
----[mlb]----To enable payments via Pix  > **Custom Checkout - Pix**.------------

----[mlb]----
> WARNING
>
> Important
>
> Before setting up Pix as a payment method, remember to:<br><br>
> - [Verify the latest version](https://marketplace.magento.com/mercadopago-core.html#product.info.details.release_notes) and update your Mercado Pago plugin.<br>
> - Register your key in Mercado Pago. If this is not done, your customers will not be able to finalize the purchase. [See how to do it](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).
------------

Once logged in, click on the button **Configure** to view the configuration options. Select the options as you prefer and mark the **Enabled** field as **Yes**. Then click **Save Config**.

![Mercado Pago Custom Checkout Configuration](images/magento2/mercadopago_custom_checkout_configuration.png)

4) That's it! The payment method will be successfully enabled in the checkout!


## Checkout Pro Configuration

This process will explain how to configure the module to accept payments with Checkout Pro in Redirect, Iframe or Lightbox:

1) Go to **Stores > Configuration > Sales > Payment Methods**.

2) To set up the credentials go to Mercado Pago - Classic Checkout, click in Configure. you will see the field Client id and Client Secret. Get your credentials in the [Credentials section]([FAKER][CREDENTIALS][URL]).

3) With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. Configure the **Type Checkout** and if the user must return to your store at the end of the checkout (**Auto Redirect**).

![Checkout Pro Redirect Configuration](images/magento2/mercadopago_global_configuration.png)

4) Done! Checkout Pro with Credit Card and Ticket has been configured and enabled successfully.


## Payment Notification status settings

This process will explain how to set up order statuses for payment notifications:

1) Go to **Stores > Configuration > Sales > Payment Methods**.

2) To configure the statuses go to **Mercado Pago - Global Configuration**, go to the option **Order Status Options**.
For each payment status you can choose an order status, as soon as your store receives the payment notification the module will automatically update the order to the chosen status. To save the settings click the **Save Config** button.

> The module is prepared to receive payment notifications automatically, that is, without the need to configure your Mercado Pago account or module.

3) Very Good! The notification statuses have been successfully configured.
