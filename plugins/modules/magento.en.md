# Magento - Mercado Pago Module (v1.8.x to 1.9.x)

* [Requirements](#Requirements)
* [Features](#Features)
* [Installation](#Installation)
* [Upgrade](#Upgrade)
* Checkout Custom
  * [Configure Credit Card and Ticket](#Configure-Credit-Card-and-Ticket)
* Basic Checkout
  * [Configure Checkout Redirect, Iframe, and LightBox](#Configure-Checkout-Redirect,-Iframe-and-LightBox)
  * [Configure Mercado Envios](#Configure-Mercado-Envios)
  * [Configure Subscriptions](#Configure-Subscriptions)
* [Payment Notification status Settings](#Payment-Notification-status-settings)
* [FAQ](#FAQ)
* [Support](#Support)


<a name="Requirements"></a>
## Requirements: ##

**Magento Version**
* Community Edition 1.8.x - 1.9.x
* Enterprise Edition 1.11.x - 1.14.x

**Environment**
* LAMP (Linux, Apache, MySQL, and PHP)
* LNMP stack

**Operational System**
* Linux x 86
* x86-64

**Web Server**
* Apache 2.x
* Nginx 1.7.x

**Hosting**
* Can execute crontab with PHP 5
* Can override the .htaccess file

**PHP Versions**
* PHP 5.6
* PHP 5.5
* PHP 5.4

**MySQL Version**
* MySQL 5.6 (Oracle or Percona)

**Extension Dependencies**
* PDO_MySQL
* simplexml
* mcrypt
* hash
* GD
* DOM
* iconv
* curl
* SOAP (for Webservices API)

**Additional Settings**
* safe_mode off
* memory_limit maior que 256MB (512MB é o recomendado)

**SSL**
* It is a requirement that you have an SSL certificate.
* During testing in Sandbox you will be able to run at http.


<a name="Features"></a>
## Features: ##

The module of Mercado Pago to Magento is integrated with the features and payment solutions:

* [Basic Checkout (Redirect, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * Split payments (Two cards)
    * [Mercado Envios](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [Refunds of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)
    * [Subscriptions](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/subscriptions/)


* Custom Checkout
    * [Payment with Credit Card](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [One Click Pay (Customers and Cards)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Paid with other payment methods](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)
    * Split payments (Two cards)
    * [Refunds of Payments](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)


* Other features
    * Order update via Cron
    * Customizable success page
    * Installments calculator


<a name="Installation"></a>
## Installation: ##

This process will explain the installation of the Mercado Pago module via Package and Marketplace:

**Installation via Marketplace**

1. Go to **[Magento Marketplace](https://marketplace.magento.com/)**, search for **Mercado Pago**, select the module version **M1**, add the module to the cart and complete the purchase process (you will have no cost):
![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/marketplace_1.gif)

2. When finalizing the process of "purchase", click in **Install** and copy the link:
![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/marketplace_2.gif)
> The copied link should look like this:
> https://connect20.magentocommerce.com/e848b7a0bc8735cd525582c/mercadopago+MercadoPago-2.9.0

3. To install we will use the **Magento Connect Manager**, access the Magento Admin and go to the menu **System > Magento Connect > Magento Connect Manager**. 

4. Copy the link obtained in the **Magento Marketplace** in the option **Install New Extensions** and click in **Install**.

![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/marketplace_3.gif)

5. Very Good! The module of Mercado Pago was successfully installed.

**Installation via Package**

1. Vá até o **[Github do Módulo Magento do Mercado Pago](https://github.com/mercadopago/cart-magento)**, faça o download do arquivo que possui a extensão **.tgz** (Exemplo: MercadoPago-2.10.0.tgz):
![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/download_github.gif)

2. To install we will use the **Magento Connect Manager**, access the Magento Admin and go to the menu **System > Magento Connect > Magento Connect Manager**. 

3. Upload the file in option **Direct package file upload** and click in **Upload**:

![Install](https://github.com/mercadopago/cart-magento/blob/master/README.img/wiki/install_tgz.gif)

4. Very Good! The module of Mercado Pago was successfully installed.


<a name="Upgrade"></a>
## Upgrade: ##

If you already have the Mercado Pago module and want to install a more current version of the module, we advise you to remove all the files related to the previous module.

The list of files and folder to be removed:

* app/code/community/MercadoPago
* app/design/adminhtml/default/default/layout/mercadopago.xml
* app/design/frontend/base/default/layout/mercadopago.xml
* app/design/adminhtml/default/default/template/mercadopago
* app/design/frontend/base/default/template/mercadopago
* js/mercadopago
* skin/adminhtml/default/default/mercadopago
* skin/frontend/base/default/mercadopago
* lib/MercadoPago
* app/etc/modules/MercadoPago_Core.xml
* app/etc/modules/MercadoPago_MercadoEnvios.xml
* app/etc/modules/MercadoPago_OneStepCheckout.xml
* app/locale/en_US/MercadoPago_Core.csv
* app/locale/es_AR/MercadoPago_Core.csv
* app/locale/es_CL/MercadoPago_Core.csv
* app/locale/es_CO/MercadoPago_Core.csv
* app/locale/es_ES/MercadoPago_Core.csv
* app/locale/es_MX/MercadoPago_Core.csv
* app/locale/es_VE/MercadoPago_Core.csv
* app/locale/pt_BR/MercadoPago_Core.csv

After doing this process, run the **Installation** process.

> Always remember to make a backup of yours before making any changes.


<a name="Configure-Credit-Card-and-Ticket"></a>
## Configure Credit Card and Ticket: ##

This process will explain how to configure the module to accept payments with Checkout Custom with Credit Card and Tickets:

1. Go to the **Systems > Configuration**, in the settings page go to the option **Payment Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-01.gif)

2. To set up the credentials go to **Mercado Pago - Custom Checkout**, you will see the field **Public Key** and **Access Token**. You can get the credentials at the link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)


![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-02.gif)

> There are two types of credentials:
> * Modo Sandbox: The credentials in this way are used for testing.
> * Modo Produção: The credentials in this way are used to receive payments in production. To use the credentials of the production mode you must complete the form "I want to go to production".

3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. Make this process for **Checkout Custom - Credit Card** and **Checkout Custom - Ticket** and then click on **Save Config**.

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-03.gif)

4. Very good! The Checkout Custom with Credit Card and Ticket has been configured and enabled successfully!
 
![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/save.png)


<a name="Configure-Checkout-Redirect,-Iframe-and-LightBox"></a>
## Configure Checkout Redirect, Iframe, and LightBox: ##

This process will explain how to configure the module to accept payments with Basic Checkout in Redirect, Iframe or Lightbox:

1. Go to the **Systems > Configuration**, in the settings page go to the option **Payment Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-01.gif)

2. To set up the credentials go to **Mercado Pago - Classic Checkout**, click in **Configure**. you will see the field **Client id** and **Client Secret**. You can get the credentials at the link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-04.gif)

3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. Configure the **Type Checkout** and if the user must return to your store at the end of the checkout (**Auto Redirect**).

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-05.gif)

4.  Very good! The Basic Checkout with Credit Card and Ticket has been configured and enable successfully!

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/save.png)


<a name="Configure-Mercado-Envios"></a>
## Configure Mercado Envios: ##

This process will explain how to configure the module to accept Mercado Envios:

1. First, You need to enable Mercado Envios in your Mercado Pago account.

	You can do this by accessing, according to your country, the link:

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> 	IMPORTANT: Your Mercado Pago account must be of type **Seller**.

2. Go to the menu **Systems > Configuration**, in the settings page go to the option **Shipping Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-me-01.gif)

3. To enable the Mercado Envios, go to the **Mercado Envios** option, click in **Configure** and check **Enable** as **Yes**
![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-me-02.gif)

4. Go to the option **Product attributes mapping** and select according to the attributes that you have configured in your store. Configure the available shipping methods in the **Available shipping methods** option. Click the **Save Config** option to save the settings:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-me-03.gif)

5. Very good! The Mercado Envios has been configured and enable successfully!

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/me_save.png)


<a name="Configure-Subscriptions"></a>
## Configure Subscriptions: ##

This process will explain how to configure the module to accept recurring payments:

1. Go to the **Systems > Configuration**, in the settings page go to the option **Payment Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-01.gif)

2. To set up the credentials go to **Mercado Pago - Recurring Payments**, click in **Configure**. you will see the field **Client id** and **Client Secret**. You can get the credentials at the link:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-re-01.gif)

3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. 

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-re-02.gif)

4.  Very good! The recurring payments has been configured and enable successfully!

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/save.png)


<a name="Payment-Notification-status-settings"></a>
## Payment Notification status Settings: ##

This process will explain how to set up order statuses for payment notifications:

1. Go to the **Systems > Configuration**, in the settings page go to the option **Payment Methods**:

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-01.gif)

2. To configure the statuses go to **Mercado Pago - Global Configuration**, go to the option **Order Status Options**. 
For each payment status you can choose an order status, as soon as your store receives the payment notification the module will automatically update the order to the chosen status. To save the settings click the **Save Config** button.

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/config-06.gif)

> The module is prepared to receive payment notifications automatically, that is, without the need to configure your Mercado Pago account or module.

3. Very Good! The notification statuses have been successfully configured.

![Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/save.png)



<a name="FAQ"></a>
## FAQ: ##

Under construction...


<a name="Support"></a>
## Support: ##

If you have any questions, problems or errors we have a support channel. Send an email to modulos@mercadopago.com with the following information:

* Email of your account Mercado Pago.
* Details about your question, problem or error.
* Files that can help in understanding (Print-Screen, Video, Log Files, etc.).
* Version of Magento.
* Module version, if you are using.
> You can get the module version in the module settings. To access the module settings go to **System > Configuration**, click on the **Payment Methods**, go to the **Mercado Pago - Global Configuration** in the session **Developer Options** you will find the **Version Module**, according to the image:
>
> ![Developer](https://raw.githubusercontent.com/mercadopago/cart-magento/master/README.img/wiki/developer_option.png)

Don't worry... We will help you as soon as possible.