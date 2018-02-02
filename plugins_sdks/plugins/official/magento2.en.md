# Magento

* [Requirements](#Requirements)
* [Features](#Features)
* [Installation](#Installation)
* [Checkout Custom](#CheckoutCustom)
* [Basic Checkout](#BasicCheckout)
* [Payment Notification status Settings](#Payment-Notification-status-settings) 

The module of Mercado Pago to Magento is integrated with the features and payment solutions:

|                                     	| Basic Checkout 	| Custom Checkout 	|
|-------------------------------------	|----------------	|-----------------	|
| Payment with Credit Card            	| ✔              	| ✔               	|
| Paid with other payment methods     	|                	| ✔               	|
| Split payments (Two cards)          	| ✔              	| ✔               	|
| One Click Pay (Customers and Cards) 	|                	| ✔               	|
| Mercado Envios                       	| ✔              	|                 	|
| Refunds of Payments                 	| ✔              	| ✔               	|
| Order update via Cron               	| ✔              	| ✔               	|
| Customizable success page           	| ✔               	| ✔               	|
| Installments calculator             	| ✔              	| ✔               	|

<a name="Requirements"></a>
## Requirements:

|                            | Detail                                                                                         |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versions Supported         | 2.x                                                                                            |
| Environment                | LAMP (Linux, Apache, MySQL, and PHP) or LNMP stack                                             |
| Operating System           | Linux x86                                                                                      |
| Memory requirement         | Minimum 2GB of RAM                                                                             |
| Web Server                 | Apache 2.x,  Nginx 1.7.x                                                                       |
| PHP Versions               | 5.6.x, 7.0.2, 7.0.6–7.0.                                                                       |
| DataBase                   | MySQL 5.6, MariaDB and Percona are compatible with Magento because we support MySQL 5.6 APIs.  |
| Extension Dependencies     | curl                                                                                           |
| SSL                        | It is a requirement that you have an SSL certificate, During testing in Sandbox you will be able to run at http.|


<a name="Installation"></a>
## Installation: ##

This process will explain the installation of the Mercado Pago module via Composer:

**Installation via Composer**

1. Add repository to your Magento installation composer.json file:

  > "repositories": [ { "type": "vcs", "url": "https://github.com/mercadopago/cart-magento2" } ]\

  or run the command:
  > composer config repositories.repo-name vcs https://github.com/mercadopago/cart-magento2

2. Execute **composer** command to download plugin package:

> composer require mercadopago/magento2-plugin

3. Then update magento with new modules:

> bin/magento setup:upgrade

4. Very Good! The module of Mercado Pago was successfully installed.

<a name="CheckoutCustom"></a>
## Configure Credit Card and Ticket: ##

This process will explain how to configure the module to accept payments with Checkout Custom with Credit Card and Tickets:

1. Go to **Stores > Configuration > Sales > Payment Methods**.

2. To set up the credentials go to **Mercado Pago - Custom Checkout**, you will see the field **Public Key** and **Access Token**. You can get the credentials at the link:

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

3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. Make this process for **Checkout Custom - Credit Card** and **Checkout Custom - Ticket** and then click on **Save Config**.

![MercadoPago Custom Checkout Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento2/master/README.img/mercadopago_custom_checkout_configuration.png)

4. Very good! The Checkout Custom with Credit Card and Ticket has been configured and enabled successfully!


<a name="BasicCheckout"></a>
## Configure Checkout Redirect, Iframe, and LightBox: ##

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

![Configuration](https://github.com/mercadopago/cart-magento2/blob/master/README.img/mercadopago_global_configuration.png?raw=true)

3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. Configure the **Type Checkout** and if the user must return to your store at the end of the checkout (**Auto Redirect**).

4.  Very good! The Basic Checkout with Credit Card and Ticket has been configured and enable successfully!


<a name="Configure-Mercado-Envios"></a>
## Configure Mercado Envios: ##

This process will explain how to configure the module to accept Mercado Envios:

1. First, You need to enable Mercado Envios in your Mercado Pago account.

	You can do this by accessing, according to your country, the link:

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> 	IMPORTANT: Your Mercado Pago account must be of type **Seller**.

2. Setup Mercado Pago Standard Checkout (redirect, iframe or lightbox).

3. Go to **Sales > Configuration > Sales > Shipping Methods > MercadoEnvios**.

4. Setup the plugin:


![MercadoEnvios Configuration](https://github.com/mercadopago/cart-magento2/raw/master/README.img/mercadoenvios.png?raw=true)

* **Enabled**: Enables/disables this Mercado Envios solution.
* **Title**: Sets up the shipping method label displayed in the shipping section in checkout process.
* **Product attributes mapping**: Maps the system attributes with the dimensions and weight. Also allows to set up the attribute unit.
* **Available shipping methods**: Sets up the shipping options visible in the checkout process.
* **Free Method**: Sets up the method to use as free shipping.
* **Free Shipping with Minimum Order Amount**: Enables/disables the order minimum for free shipping to be available.
* **Minimum Order Amount for Free Shipping**: Define Minimum Order Amount for Free Shipping
* **Show method if not applicable**: If enabled, the shipping method is displayed when it's not available.
* **Displayed Error Message**: Sets up the text to be displayed when the shipping method is not available.
* **Log**: Enables/disables system logs.
* **Debug Mode**: If enabled, displays the raw response from the API instead of a friendly message.
* **Sort order**: Sets up the sort order to be displayed in the shipping step in checkout process.
* **Shipping label download option**: Set the format option for downloading shipping labels.

5. Very good! The Mercado Envios has been configured and enable successfully!


<a name="Payment-Notification-status-settings"></a>
## Payment Notification status Settings: ##

This process will explain how to set up order statuses for payment notifications:

1. Go to **Stores > Configuration > Sales > Payment Methods**.

2. To configure the statuses go to **Mercado Pago - Global Configuration**, go to the option **Order Status Options**. 
For each payment status you can choose an order status, as soon as your store receives the payment notification the module will automatically update the order to the chosen status. To save the settings click the **Save Config** button.

> The module is prepared to receive payment notifications automatically, that is, without the need to configure your Mercado Pago account or module.

3. Very Good! The notification statuses have been successfully configured.