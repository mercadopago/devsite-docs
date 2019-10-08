# Prestashop 1.6


### Mercado Pago Module (Prestashop 1.6.x)

* [Features](#bookmark_Features)
* [Requirements](#bookmark_Requirements)
* [Versions](#bookmark_Versions)
* [Installation](#bookmark_Installation)
* [Configuration](#bookmark_Configuration)
* [Notifications](#bookmark_Notifications)
* [Upgrade](#bookmark_Upgrade)

## Features

The module of Mercado Pago to Prestahop is integrated with the features and payment solutions:

|                                     	| Basic Checkout 	| Custom Checkout 	|
|-------------------------------------	|----------------	|-----------------	|
| Payment with Credit Card            	| ✔              	| ✔               	|
| Paid with other payment methods     	|                	| ✔               	|
| Split payments (Two cards)          	| ✔              	| ✔               	|
| One Click Pay (Customers and Cards) 	|                	| ✔               	|
| Subscriptions                       	| ✔              	|                 	|
| MercadoEnvios                       	| ✔              	|                 	|
| Refunds of Payments                 	| ✔              	| ✔               	|
| Order update via Cron               	|                	| ✔               	|
| Customizable success page           	|                	| ✔               	|
| Installments calculator             	| ✔              	| ✔               	|
| Installments shipment calculator    	| ✔              	| ✔               	|


## Requirements

|                            | Detail                                                                                         |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versions Supported         | Prestashop 1.6.x                                                                      |
| Environment                | LAMP (Linux, Apache, MySQL, and PHP) ó LNMP stack                                              |
| Operating System           | Linux x86, Windows x86-64                                                                      |
| Web Server                 | Apache 2.x,  Nginx 1.7.x                                                                       |
| PHP Versions               | PHP 5.6, 5.5 y 5.4                                                                             |
| DataBase                   | MySQL 5.6 (Oracle or Percona)                                                                  |
| Extension Dependencies     | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)           |
| Additional Settings        | safe_mode off * memory_limit maior que 256MB (512MB é o recomendado)                           |
| SSL                        | It is a requirement that you have an SSL certificate, During testing in Sandbox you will be able to run at http.|

>It is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.


## Versions

| Plugin Version                                             | Status                   |Available Versions |
|------------------------------------------------------------|--------------------------|-------------------|
| [v1.6.x](https://github.com/mercadopago/cart-prestashop-6/)| Stable (Current Version) | Prestashop v1.6.x   |


## Installation

1) Download the file **mercadopago.zip** in our Github repository according to the version of Prestashop you use.

> NOTE
>
> DOWNLOAD
>
> Mercado Pago Module for Prestashop [1.6](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip).

2) Access the Prestashop administrative panel in **IMPROVEMENTS** -> **Modules** -> **Modules and Services**, click on the button **"Send a Module"** and select the file **mercadopago.zip** downloaded previously.

3) Very good! Mercado Pago module was installed successfully.

![Settings](/images/prestashop/prestashop_select_mp_file.gif)


## Configuration

1) After the module installation, go to **IMPROVEMENTS** -> **Modules** -> **Modules and Services** and click **Configure** in the Mercado Pago Plugin.

2) On the screen **BASIC SETTINGS** you will be asked for the  **Client ID** and **Client Secret**. These are the credentials of your Mercado Pago account and can be obtained through the following link: [Get your credentials](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials?type=basic).

![Settings](/images/prestashop/prestashop_credentials_configuration.gif)

> There are two types of credentials:
* **Sandbox mode**: These credentials are used for the tests.
> * **Production mode**: These credentials are used for purchases in production.

3) Now on the screen **PAYMENT SETTINGS** keep Checkout Standard as active to use the Redirected Checkout of Mercado Pago.

![Checkout Standard](/images/prestashop/prestashop_checkout_standard.png)

4) In PAYMENT METHOD you can enable the payment methods with which you will work:

![Payment Method](/images/prestashop/prestashop_payment_method.png)

5) Well done! You have enabled payments via Checkout Standard (redirected)!

### Mercado Envíos Configuration

> IMPORTANT: Mercado Envíos works with the Standard Checkout (redirected). When using it the other means of payment will be disabled.

1) First, you need [enable Mercado Envíos in your account](http://shipping.mercadopago.com.ar/optin/doOptin).

> NOTE
>
> IMPORTANT
> * Your Mercado Pago account needs to be of the **Seller** type.
>The submitted product must have its dimensions (width, height, length and weight) properly configured and within the rules and limits supported by the specified country.

2) To enable the module, simply activate it by accessing the Prestashopp administrative panel in **IMPROVEMENTS -> Modules -> Modules and Services** and clicking **Configure** in the Mercado Pago module:

3) In **Mercado Envíos** it is possible to configure a text to be displayed in the delivery through the field **Custom text to use with delivery**. To activate, mark the field **Enable Mercado Envíos** as **YES**.

![Enable Mercado Envíos](/images/prestashop/prestashop_mercado_envios.png)

4) Very good! Now you can offer Mercado Envíos as a means of transportation for your customers!


## Notifications

Your store will automatically synchronize with Mercado Pago. The notification URL will be sent in each payment.


### Upgrade

Follow the same steps you did to [install the module](#bookmark_installation).
