# Install Mercado Pago on WooCommerce
<br/>

Install the Mercado Pago module in WooCommerce automatically, from your WordPress panel, or manually, by importing a .zip file into your directory via FTP. 

> The installation of our module does not affect the speed of your store.

## Installation requirements

Review the installation requirements and follow the steps we indicate, it will only take a few minutes to install the module!

| Requirements                  | Details                                                                    	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| WordPress        	            | Required 4.9.10 or higher. Tested up to 5.4.1                                                 |
| WooCommerce      	            | Required 3.x or higher. Tested up to 4.1.0                                                    |
| Environment                  	| LAMP (Linux, Apache, MySQL, and PHP)                                                    	    |
| System                      	| Linux x86, Windows x86-64                                                        	            |
| Web Server                  	| Apache 2.x, Nginx 1.7.x                                                               	    |
| PHP Version                 	| PHP 5.6, 5.5 y 5.4                                        	                                |
| Database                     	| MySQL 5.6 or higher (Oracle or Percona), MariaDB 10.0 or higher         	                    |
| Extension Dependency         	| PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (to Webservices API)           |
| Additional Settings           | safe_mode off * memory_limit bigger than 256MB (512MB recommended)                            |
| SSL                         	| SSL Certificate 	                                                                            |

> WARNING
>
> Importante
>
> You can use the HTTP protocol while in ‘Testing’ mode and not making real transactions. When you go to Production you must have an **SSL certificate** to offer a **secure navigation** that protects your data and those of your customers. Once you have it, the path to your online store must respond to the **HTTPS protocol**.

## Automatic installation

Automatically, from the ‘Plugins’ section of WordPress

Follow these steps for installation:

1) Go to **Add new** and search for “WooCommerce Mercado Pago” among the WordPress modules offer.

2) Click Install and then look for it in the "Installed Plugins" section. 

3) Activate it to start configuring the module in your store.

Excellent! You will see the module installed in the Plugins section of your administration panel. Activate it to be able to adjust the necessary settings in your store.

## Manual installation

Manually, follow these steps for installation: 

1) Download the .zip file directly from our Github or from the directory of modules of WordPress.
                    
> NOTE
>
> [Download](https://github.com/mercadopago/cart-woocommerce/archive/master.zip)
>
> [Mercado Pago module for WooCommerce ](https://github.com/mercadopago/cart-woocommerce/archive/master.zip)

2) Unzip the downloaded folder and change the name to ‘woocommerce-mercadopago’.

3) Connect to your web server and copy the file ‘woocommerce-mercadopago’ into your WordPress directory, in the ‘Plugins’ folder.

Done! The Mercado Pago module will be installed in your online store.

Check that everything went well from your WordPress desktop. You will see the module among your *Installed Plugins*. Activate it to proceed to the integration of your account and the configuration steps.

When you activate the plugin, WordPress will take you to the WooCommerce *Settings* and, from there, to the *Payments* section, where you will have the [types of checkout](https://www.mercadopago.com.ar/developers/en/guides/plugins/woocommerce/introduction/#bookmark_checkout_types) we offer for your online store: Checkout Pro and Custom Checkout.

> NOTE
>
> Note
>
> All our modules have an open source license. **Do you want to participate in its construction?** [Suggest improvements and editions](https://github.com/mercadopago/cart-woocommerce) on Github.

## Maintenance

We advise you to make a **backup copy of your store** before making any changes. Once the copy is ready, delete all the files related to the previous version of the module.

Then execute the steps of a **new installation** to update your page with the latest available version of the Mercado Pago module.

---

> Keep the module always updated in the latest version. 

---

## Check out our updates on GitHub

> NOTE
>
> GitHub
>
> Check GitHub for details on the [latest productive updates](https://github.com/mercadopago/cart-woocommerce/blob/master/CHANGELOG.md).

### Next steps

> LEFT_BUTTON_REQUIRED_ES
>
> Integrate Mercado Pago into WooCommerce
>
> Connect your Mercado Pago account to the module and capture the payments you receive for your online sales.
>
> 
> [Integrate](https://www.mercadopago.com.ar/developers/en/guides/plugins/woocommerce/integration/)