# Prestashop 

* [Requirements](#Requirements)
* [Features](#Features)
* [Installation](#Installation)
* [Configure Custom payment and standard](#Configure-Credit-Card-and-Ticket-Standard)
* [Configure Mercado Envios](#Configure-Mercado-Envios)
* [Support](#Support)

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

<a name="Requirements"></a>
## Requirements: ##

|                            | Detail                                                                                         |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versions Supported         | Prestashop 1.6.x - 1.7.x                                                                       |
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

1. Go to **[Prestashop Marketplace](https://addons.prestashop.com/en/payment-card-wallet/23962-mercado-pago.html/)** and click in Register to Download:
2. Before your register, you can download the module.
![Download](/images/prestashop-download.gif)

3. Now access you admin and go to Modules and Services.
![Installation](/images/prestashop-installation.gif)

4. Very Good! The module of Mercado Pago was successfully installed.
![Configuration](/images/prestashop-installation_success.png)

<a name="Configure-Credit-Card-and-Ticket-Standard"></a>
## Configure Credit Card, Ticket and Redirect: ##

This process will explain how to configure the module to accept payments with Checkout Custom with Credit Card, Tickets and Standard:

1. After install the module, Go to **Mercado Pago > Configure**, now you need to get your credencials

2. To set up the credentials go to **Mercado Pago - Custom Checkout**, you will see the field **Public Key** and **Access Token**. [Get your credentials](https://www.mercadopago.com/mla/account/credentials?type=basic)  

> There are two types of credentials:
> * Modo Sandbox: The credentials in this way are used for testing.
> * Modo Produção: The credentials in this way are used to receive payments in production. To use the credentials of the production mode you must complete the form "I want to go to production".

3. Now you can fill the **client id** and **client secret** and click in **Login** Button:
![Login](/images/prestashop-credentials_1.gif)

4. Enable custom, fill the **access token** and **public key** and select the options for accept in your custom payment:
![Credentials Custom](/images/prestashop-credentials_2.gif)

5. Enable standard, you need to enable the option **Settings - MercadoPago Standard**:
![Enable Standard](/images/prestashop-standard.gif)

6. Very good! The Checkout Custom with Credit Card, Ticket and standard has been configured and enabled successfully!

<a name="Configure-Mercado-Envios"></a>
## Configure Mercado Envios: ##

This process will explain how to configure the module to accept Mercado Envios:

1. First, You need to enable Mercado Envios in your Mercado Pago account.

	You can do this by accessing, according to your country, the link:

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> 	IMPORTANT: Your Mercado Pago account must be of type **Seller** and the products needs to have the correct dimensions.

2. To enable the Mercado Envios, Enable the **Mercado Envios** option and click in **Save**:
![Enable Mercado Envios](/images/prestashop-mercadoenvios_settings.gif)

3. Very good! The Mercado Envios has been configured and enable successfully!

> 	Youtube:
https://youtu.be/rtXNkdaqUJ8


<a name="Support"></a>
## Support: ##

If you have any questions, problems or errors we have a support channel. Send an email to modulos@mercadopago.com with the following information:

* Email of your account Mercado Pago.
* Details about your question, problem or error.
* Files that can help in understanding (Print-Screen, Video, Log Files, etc.).
* Version of Prestashop.
* Module version, if you are using.
