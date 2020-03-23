# Install Mercado Pago for PrestaShop 1.6 & 1.7
<br/>

Install the Mercado Pago module automatically, through the marketplace or from your PrestaShop panel.

> NOTE
>
> Note
>
> The installation of our module does not affect the speed of your store.

## Installation Requirements

It is important that you review the requirements to install our module. Then follow the steps that we indicate. It will only take you a few minutes!

| Requirements                  | Description                                                                  	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Versions      	            | Prestashop 1.6.x - 1.7.x                                                                      |
| Environment                  	| LAMP (Linux, Apache, MySQL, and PHP) or LNMP stack                                             |
| System                     	| Linux x86, Windows x86-64                                                        	            |
| Web Server                	| Apache 2.x, Nginx 1.7.x                                                               	    |
| PHP Version                 	| PHP 5.6 to 7.1 for PrestaShop 1.6 <br> PHP 5.6 or higher for PrestaShop 1.7                   |
| Database                   	| MySQL 5.6 or higher (Oracle or Percona)                                  	                    |
| Extension Dependency      	| PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)          |
| Additional configuration      | safe_mode off * memory_limite larger than 256MB (512MB recommended)                           |
| SSL                         	| SSL Certificate  	                                                                            |

> WARNING
>
> Important
>
> You can use the HTTP protocol while in ‘Testing’ mode and not making real transactions. When you go to Production you must have an **SSL certificate** to offer a **secure navigation** that protects your data and those of your customers. Once you have it, the path to your online store must respond to the **HTTPS protocol**.

## Automatic Installation

Install Mercado Pago for PrestaShop automatically by following these steps from the ‘Customize’ section in your administrator:

1. Go to the Modules Catalog and look for “Mercado Pago” among the modules offer.
2. Click Install and then look for it in the "Module Manager" section.
3. Activate it to start configuring the module in your store.

**Excellent! you will see the module installed in the Customize section of your administration panel.**

## Manual Installation

Install the module by following these steps:

1. [Download the .zip file](https://github.com/mercadopago/cart-prestashop-7/raw/master/mercadopago.zip) directly from our Github or from the Prestashop modules [directory](https://addons.prestashop.com/en/payment-card-wallet/23962-mercado-pago.html).
2. Go to the "Module Manager" section in the 'Customize' section of your administrator.
3. Click the 'Upload a Module' button in the upper right corner.
4. Select or drag the previously downloaded mercadopago.zip file.
5. Done! The Mercado Pago module will be installed in your online store.

**Check that everything went well from your PrestaShop desktop. You will see the module among your installed Plugins. Activate it to proceed to the integration of your account and the configuration steps.**

## Maintenance

We advise you to make a backup copy of your page before making any changes. Once the copy is ready, delete all the files related to the previous version of the module.

Then execute the steps of a new installation to update your page with the latest version of the Mercado Pago module available.

> Keep the module always updated in the latest version.

## Version 4.1.0 - All you need to know

These are the technical improvements you will find in our latest version:

**Break Change**
- In this version you must paste the public_key of sandbox and production to be able to sell. Before updating the plugin, activate the maintenance mode and do some tests to check that nothing breaks.

**Fixes:**
- We fixed the mobile layout of the Mercado Pago Checkout.
- We fixed the creation of the order, allowing the function to recover the value of the customer_secure_key.

**Improvements:** 
- Now the Mercado Pago Checkout works through a modal: your customers can complete the purchase without leaving the site.
- We renew the plugin settings screen.
- We renew the plugin code structure.
- We merged the plugin versions for PS1.6 and PS1.7.

**We added:**
- New translations for Chile and Uruguay.
- Custom Checkout with:
 - Binary mode
 - Discount for paying with Mercado Pago.
- Ticket Checkout with:
 - Select available payment methods.
 - Choose the expiration date.
 - Discount for paying with Mercado Pago.

**We temporarily suspended some features from version 4.1.0 of the plugin:**
- Mercado Envíos.
- Discount coupons.
- Installment calculator.

> NOTE
>
> Note
>
> Updating the plugin will only take a few minutes! The new version does not affect the loading speed of your page or the processing time of payments.

### Next Step

> LEFT_BUTTON_REQUIRED_EN
>
> Integrate Mercado Pago in PrestaShop
>
> Connect your Mercado Pago account to the module and capture the payments you receive for your online sales.
>
> 
> [Integrate](https://www.mercadopago.com.ar/developers/en/plugins_sdks/plugins/prestashop/integration/)