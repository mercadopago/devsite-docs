# Magento

* [Requirements](#Requirements)
* [Features](#Features)
* [Installation](#Installation)
* [Upgrade](#Upgrade)
* Checkout Custom 
* Basic Checkout 
* [Payment Notification status Settings](#Payment-Notification-status-settings) 

The module of Mercado Pago to Magento is integrated with the features and payment solutions:

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

<a name="Requirements"></a>
## Requirements:

|                            | Detail                                                                                         |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versions Supported         | Community Edition 1.8.x - 1.9.x, Enterprise Edition 1.11.x - 1.14.x                            |
| Environment                | LAMP (Linux, Apache, MySQL, and PHP) ó LNMP stack                                              |
| Operating System           | Linux x86, Windows x86-64                                                                      |
| Web Server                 | Apache 2.x,  Nginx 1.7.x                                                                       |
| PHP Versions               | PHP 5.6, 5.5 y 5.4                                                                             |
| DataBase                   | MySQL 5.6 (Oracle or Percona)                                                                  |
| Extension Dependencies     | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)           |
| Additional Settings        | safe_mode off * memory_limit maior que 256MB (512MB é o recomendado)                           |
| SSL                        | It is a requirement that you have an SSL certificate, During testing in Sandbox you will be able to run at http.|


<a name="Installation"></a>
## Installation: ##

This process will explain the installation of the Mercado Pago module via Package and Marketplace:

**Installation via Marketplace**

1. Go to **[Magento Marketplace](https://marketplace.magento.com/)**, search for **Mercado Pago**, select the module version **M1**, add the module to the cart and complete the purchase process (you will have no cost):
![Install](/images/magento-marketplace_1)

2. When finalizing the process of "purchase", click in **Install** and copy the link:
![Install](/images/magento-marketplace_2.gif)
> The copied link should look like this:
> https://connect20.magentocommerce.com/e848b7a0bc8735cd525582c/mercadopago+MercadoPago-2.9.0

3. To install we will use the **Magento Connect Manager**, access the Magento Admin and go to the menu **System > Magento Connect > Magento Connect Manager**.

4. Copy the link obtained in the **Magento Marketplace** in the option **Install New Extensions** and click in **Install**.

![Install](/images/magento-marketplace_3.gif)

5. Very Good! The module of Mercado Pago was successfully installed.

**Installation via Package**

1. Vá até o **[Github do Módulo Magento do Mercado Pago](https://github.com/mercadopago/cart-magento)**, faça o download do arquivo que possui a extensão **.tgz** (Exemplo: MercadoPago-2.10.0.tgz):
![Install](/images/magento-download_github.gif)

2. To install we will use the **Magento Connect Manager**, access the Magento Admin and go to the menu **System > Magento Connect > Magento Connect Manager**.

3. Upload the file in option **Direct package file upload** and click in **Upload**:

![Install](/images/magento-install_tgz.gif)

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

![Configuration](/images/magento-config-01.gif)

2. To set up the credentials go to **Mercado Pago - Custom Checkout**, you will see the field **Public Key** and **Access Token**. [Get your credentials](https://www.mercadopago.com/mla/account/credentials?type=basic)  


![Configuration](/images/magento-config-02.gif)

> There are two types of credentials:
> * Modo Sandbox: The credentials in this way are used for testing.
> * Modo Produção: The credentials in this way are used to receive payments in production. To use the credentials of the production mode you must complete the form "I want to go to production".

3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. Make this process for **Checkout Custom - Credit Card** and **Checkout Custom - Ticket** and then click on **Save Config**.

![Configuration](/images/magento-config-03.gif)

4. Very good! The Checkout Custom with Credit Card and Ticket has been configured and enabled successfully!

![Configuration](/images/magento-save.png)


<a name="Configure-Checkout-Redirect,-Iframe-and-LightBox"></a>
## Configure Checkout Redirect, Iframe, and LightBox: ##

This process will explain how to configure the module to accept payments with Basic Checkout in Redirect, Iframe or Lightbox:

1. Go to the **Systems > Configuration**, in the settings page go to the option **Payment Methods**:

![Configuration](/images/magento-config-01.gif)

2. To set up the credentials go to **Mercado Pago - Classic Checkout**, click in **Configure**. you will see the field **Client id** and **Client Secret**. [Get your credentials](https://www.mercadopago.com/mla/account/credentials?type=basic)  

![Configuration](/images/magento-config-04.gif)

3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**. Configure the **Type Checkout** and if the user must return to your store at the end of the checkout (**Auto Redirect**).

![Configuration](/images/magento-config-05.gif)

4.  Very good! The Basic Checkout with Credit Card and Ticket has been configured and enable successfully!

![Configuration](/images/magento-save.png)


<a name="Configure-Mercado-Envios"></a>
## Configure Mercado Envios: ##

This process will explain how to configure the module to accept Mercado Envios:

1. First, You need to [enable Mercado Envios](http://shipping.mercadopago.com.ar/optin/doOptin) in your Mercado Pago account.

> 	IMPORTANT: Your Mercado Pago account must be of type **Seller**.

2. Go to the menu **Systems > Configuration**, in the settings page go to the option **Shipping Methods**:

![Configuration](/images/plugins/modules/magento/config-me-01.gif)

3. To enable the Mercado Envios, go to the **Mercado Envios** option, click in **Configure** and check **Enable** as **Yes**
![Configuration](/images/plugins/modules/magento/config-me-02.gif)

4. Go to the option **Product attributes mapping** and select according to the attributes that you have configured in your store. Configure the available shipping methods in the **Available shipping methods** option. Click the **Save Config** option to save the settings:

![Configuration](/images/plugins/modules/magento/config-me-03.gif)

5. Very good! The Mercado Envios has been configured and enable successfully!

![Configuration](/images/plugins/modules/magento/me_save.png)


<a name="Configure-Subscriptions"></a>
## Configure Subscriptions: ##

This process will explain how to configure the module to accept recurring payments:

1. Go to the **Systems > Configuration**, in the settings page go to the option **Payment Methods**:

![Configuration](/images/plugins/modules/magento/config-01.gif)

2. To set up the credentials go to **Mercado Pago - Recurring Payments**, click in **Configure**. you will see the field **Client id** and **Client Secret**. [Get your credentials](https://www.mercadopago.com/mla/account/credentials?type=basic)  

![Configuration](/images/plugins/modules/magento/config-re-01.gif)

3. With your credentials filled, you need to enable payment methods. Click in **Configure** and check **Enable** as **Yes**.

![Configuration](/images/plugins/modules/magento/config-re-02.gif)

4.  Very good! The recurring payments has been configured and enable successfully!

![Configuration](/images/plugins/modules/magento/save.png)


<a name="Payment-Notification-status-settings"></a>
## Payment Notification status Settings: ##

This process will explain how to set up order statuses for payment notifications:

1. Go to the **Systems > Configuration**, in the settings page go to the option **Payment Methods**:

![Configuration](/images/plugins/modules/magento/config-01.gif)

2. To configure the statuses go to **Mercado Pago - Global Configuration**, go to the option **Order Status Options**.
For each payment status you can choose an order status, as soon as your store receives the payment notification the module will automatically update the order to the chosen status. To save the settings click the **Save Config** button.

![Configuration](/images/plugins/modules/magento/config-06.gif)

> The module is prepared to receive payment notifications automatically, that is, without the need to configure your Mercado Pago account or module.

3. Very Good! The notification statuses have been successfully configured.

![Configuration](/images/plugins/modules/magento/save.png)

 