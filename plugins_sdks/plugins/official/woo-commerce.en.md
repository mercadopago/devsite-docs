# WooCommerce


## Mercado Pago Module (WooCommerce 3.x)

* [Features](#bookmark_Features)
* [Requirements](#bookmark_Requirements)
* [Versions](#bookmark_Versions)
* [Installation](#bookmark_Installation)
* [Configuration](#bookmark_Configuration)
* [Notifications](#bookmark_Notifications)
* [Upgrade](#bookmark_Upgrade) 


## Features

The module of Mercado Pago for WooCommerce is integrated with the following features and payment solutions:

|                                                    	| Checkout Basico 	| Checkout Transparente 	|
|----------------------------------------------------	|-----------------	|-----------------------	|
| Payment with Credit Card                           	| ✔               	| ✔                     	|
| Mercado Pago Pre-Builded Interfaces                	| ✔               	|                       	|
| Refunds/Cancel of Payments                         	|                 	|                       	|
| Split Payments (Two Cards)                         	| ✔               	| ✔                     	|
| One Click Pay (Customer Cards)                     	|                 	| ✔                     	|
| MercadoEnvios                                      	| ✔               	|                       	|
| Other Payment Methods, Such as Tickets             	|                 	| ✔                     	|
| Credentials and platform status checkings          	| ✔               	| ✔                     	|
| Customizable success page                          	|                 	| ✔                     	|
| Installments calculator                            	| ✔               	| ✔                     	|
| Currency conversion                                	|                 	| ✔                     	|
| Instant payment notification and webhooks          	| ✔               	| ✔                     	|
| Discounts by payment method or Mercado Pago coupon 	| ✔               	|                       	|
| Log and debug tools                                	| ✔               	| ✔                     	|

## Requirements

| Requirement                | Detail                                             |
| -------------------------- | -------------------------------------------------- |
| Platform version supported | WordPress 3.1.x - 4.9.x, WooCommerce 2.6.x - 3.4.x |
| Environment                | LAMP (Linux, Apache, MySQL, e PHP                  |
| Web Server                 | Linux x86, x86-64                                  |
| PHP Version                | 5.6 or major with Curl support                     |
| DataBase                   | MySql 5.6 o superior, MariaDB 10.0 o superior      |
| Additional Configuration   | safe_mode off, memory_limit mayor que 256 MB       |
| SSL                        | SSL is required to use credit card                 |

>It is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.

## Versions

| Plugin Version                                                                          | Status                    | Module compatibility  |
|-----------------------------------------------------------------------------------------|---------------------------|-----------------------|
| [v3.x](https://github.com/mercadopago/cart-woocommerce/archive/master.zip)              | Stable (Current Version)  | WooCommerce 3.x       |

# Installation

> NOTE
>
> Note
>
>If you have already the module installed, please follow the [Upgrade Instructions](#bookmark_Upgrade) first.

You have two options to install this module: from your WordPress Store, or by downloading and manually copying the module directory.

### Install from WordPress

1. On your store administration, go to *Plugins* option in sidebar;

2. Click in *Add New* button and type "WooCommerce MercadoPago" in the *Search Plugins* text field. Press Enter;

3. You should find the module ready to be installed. Click install. Its done!

![Installing Mercado Pago with Wordpress](/images/woocommerce_install_plugin.gif)

### Manual Download

1. Obtain the module source code from our [Github] repository (https://github.com/mercadopago/cart-woocommerce/archive/master.zip) or [WordPress Plugin Directory](https://br.wordpress.org/plugins/woocommerce-mercadopago/);

2. Unzip the folder and change its name to "woocommerce-mercadopago";

3. Copy "woocommerce-mercadopago" directory to *[WordPressRootDirectory]/wp-content/plugins/* directory. Its done!

> HINT: To confirm that your module is really installed, you can click in *Plugins* item in the store administration menu, and check your just installed module. Just click *enable* to activate it and you should receive the message "Plugin enabled." as a notice in your WordPress.

![Installing Mercado Pago manually in Wordpress](/images/woocommerce_activate_plugin.gif)

# Configuration

This page will explain how to configure general Mercado Pago settings for this module. First of all, make sure that WooCommerce MercadoPago plugin is enabled, by clicking in *Plugins* item on the WordPress sidebar, as shown bellow:

![Enabling Mercado Pago in Woocommerce plugins](/images/woocommerce-plugins_menu.png)

Now, in the sidebar of WordPress, click in *Mercado Pago Settings* option. You should get the following page:

![Mercado Pago configuration page in Woocommerce](/images/woocommerce-mercadopago_config.png)

This window shows the main settings of WooCommerce MercadoPago plugin, where you can check and configure the following:

### Plugin Status and Payment Options

Is the upper part of the window. Shows platform statuses and system consistency to use this plugin. Also, there are buttons that serves as shortcuts for the payment gateways that are offered. It is a good idea to have all the field with a green-checked icon.

> NOTE
>
> Note
>
> To make payments with credit cards in Custom Checkout (transparent checkout) requires that the application server has SSL and that it is enabled in the Wordpress panel.

### Basic Checkout & Subscriptions

  * Here you must put your *Client Id* and *Secret Client* keys, which are the credentials that uniquely identify you in the Paid Market. *Client Id* and *Client Secret* are used for Basic Checkout payments and Signatures. Click the following link to [get your credentials](https://www.mercadopago.com/mlb/account/credentials?type=basic);
  * Also, just bellow, you can enable currency conversion mode for sells with Basic Checkout and Subscriptions. Currency conversion is a feature that enables you to set an unsupported currency in WooCommerce while maintaining Mercado Pago as payment method. It will convert the unsupported currency for the currency used in your country. Pay attention that this service converts values on-the-fly in real-time and can bring some additional delay to your server.

### Custom Checkout & Tickets

  * Here you should place your *Public Key* and *Access Token* keys, the credentials that uniquely identifies you in Mercado Pago. *Public Key* and *Access Token* are used for Custom Checkout and Tickets payment methods;
  * Also, just bellow, you can enable currency conversion mode for sells with Custom Checkout and Tickets. Currency conversion is a feature that enables you to set an unsupported currency in WooCommerce while maintaining Mercado Pago as payment method. It will convert the unsupported currency for the currency used in your country. Pay attention that this service converts values on-the-fly in real-time and can bring some additional delay to your server.

### Status Mapping of Payment x Order

Here you can map each payment state to a given order status. Only make changes over here if you're fully aware of what you're doing.

### Store Settings

These fields are general fields of your store.
  * *Statement Descriptor*: The description that will be shown in your customer's invoice;
  * *Store Category*: Sets up the category of the store;
  * *Store Identificator*: A prefix to identify your store, when you have multiple stores for only one Mercado Pago account.
  * *Custom banner for checkout*: A URL for the image of a banner to be displayed at checkout. When leaving it blank, the standard banner of Mercado Pago will be used.
  * *Custom URL for IPN*: A custom URL for receiving IPN notifications. The default format is: https://yourdomain.com/yoursubdomain.

### Test and Debug Options

Offers logging tools so you can analyze problems that may be occurring. Maintain this disabled if working in production with a stable system.

# Configuring Credit Card
This page will explain how to configure the module to accept payments with Credit Card of Custom Checkout. On your store administration, go to *WooCommerce > Settings > Checkout* tab. In *Checkout Options*, click in *Mercado Pago - Custom Checkout*. You should get the following page:

![Setting credit card in Woocommerce](/images/woocommerce-custom_checkout_config.png)

If you have properly configured your credentials in [General Mercado Pago Settings](#Configuration), then you can now customize your credit card checkout:

### Checkout Interface
How checkout is shown.
  * *Title*: This is the title of the payment option that will be shown to your customers;
  * *Description*: This is the description of the payment option that will be shown to your customers.

### Payment Options
How the payment option behaves.
  * *Coupons*: Enable coupon of campaigns for discounts;
  * *Binary Mode*: When charging a credit card, only [approved] or [reject] status will be taken;
  * *Discount by Gateway*: Gives a percentual discount for your customers if they use Credit Cards as payment method.

# Configuring Tickets
This page will explain how to configure the module to accept payments with Tickets of Custom Checkout. On your store administration, go to *WooCommerce > Settings > Checkout* tab. In *Checkout Options*, click in *Mercado Pago - Ticket*. You should get the following page:

![Setting tickets in Woocommerce](/images/woocommerce-ticket_checkout_config.png)

If you have properly configured your credentials in [General Mercado Pago Settings](#Configuration), then you can now customize your ticket checkout:

### Checkout Interface
How checkout is shown.
  * *Title*: This is the title of the payment option that will be shown to your customers;
  * *Description*: This is the description of the payment option that will be shown to your customers;

### Payment Options
How the payment option behaves.
  * *Coupons*: Enable coupon of campaigns for discounts;
  * *Stock Reduce*: Reduce stock when order is created instead of when payment is made;
  * *Discount by Gateway*: Gives a percentual discount for your customers if they use Credit Cards as payment method.

# Configuring Checkout by Redirect, Iframe, or LightBox
This page will explain how to configure the module to accept payments with Basic Checkout in Redirect, Iframe or Lightbox. On your store administration, go to *WooCommerce > Settings > Checkout* tab. In *Checkout Options*, click in *Mercado Pago - Basic Checkout*. You should get the following page:

![Setting tickets in Woocommerce](/images/woocommerce-basic_checkout_config.png)

If you have properly configured your credentials in [General Mercado Pago Settings](#Configuration), then you can now customize your ticket checkout:

### Checkout Interface
How checkout is shown.
  * *Title*: This is the title of the payment option that will be shown to your customers;
  * *Description*: This is the description of the payment option that will be shown to your customers;
  * *Integration Method*: How your customers will interact with Mercado Pago to pay their orders;
  * *iFrame Width*: The width, in pixels, of the iFrame (used only with iFrame Integration Method);
  * *iFrame Height*: The height, in pixels, of the iFrame (used only with iFrame Integration Method).

### Checkout Navigation
How checkout navigations will behave.
  * *Auto Return*: If set, the platform will return to your store when the payment is approved;
  * *Success URL*: Customize a URL to be redirected when a payment is approved. Let blank to redirect to the store;
  * *Failure URL*: Customize a URL to be redirected when a payment has failed. Let blank to redirect to the store;
  * *Pending URL*: Customize a URL to be redirected when a payment is pending. Let blank to redirect to the store.

### Payment Options
How the payment option behaves.
  * *Max Installments*: The maximum installments allowed for your customers;
  * *Exclude Payment Methods*: Select the payment methods that you want to not work with Mercado Pago;
  * *Discount by Gateway*: Gives a percentual discount for your customers if they use Credit Cards as payment method;
  * *Two Cards Mode*: Enable this to let your customers pay with two different cards.

# Configuring Mercado Envios
This page will explain how to configure the module to accept Mercado Envios.

### Enable Your Mercado Envios

To use Mercado Envios, [you need to enable it in your Mercado Pago account.](http://shipping.mercadopago.com.ar/optin/doOptin).

### Create the Shipping Zone and Shipping Methods

To use Mercado Envios, you need it to be configured as a shipping method in WooCommerce. Just follow bellow steps:

1. On your store administration, go to *WooCommerce > Settings > Shipping* tab. In *Shipping Zone*, click in *Add shipping zone*. Enter the zone name, select the regions within this zone and click in *Save Changes*.<br>![Creating the Shipping Zone of the Mercado Envios in Woocommerce](/images/woocommerce-me_0.png)
2. Click in *view* of the zone created.<br>![Created zone settings in Woocommerce](/images/woocommerce-me_1.png)
3. Click in *Add shipping method* and selected *Mercado Envios - Normal* or *Mercado Envios - Express*. This process has to be repeated twice, until normal and express are set.<br>![Adding Mercado Envios as Shipping Method Woocommerce](/images/woocommerce-me_2.png)
4. Now you can also set the *Free Shipping* option and/or show the estimated *Delivery Time* in the shipping calculation.<br>![Setting free shipping and delivery time](/images/woocommerce-me_3.png)
5. Mercado Envios is ready for use, but do not forget to enable *Basic Checkout* for the correct operation of *Mercado Envios* and to inform the dimensions of your products.<br>![Mercado Envios ready for use](/images/woocommerce-me_4.png)

> IMPORTANT 1: Your Mercado Pago account must be a *Seller Account*;

> IMPORTANT 2: For now, Mercado Envios is available only for Argentina, Brazil, and Mexico, and can only be used in Basic Checkout;

> IMPORTANT 3: The shipped product should have its dimensions (width, height, length, and weight) properly configured and within the supported limits of the given country.

# Configuring Subscriptions
This page will explain how to configure the module to accept subscriptions paid with recurrent payments. On your store administration, go to *WooCommerce > Settings > Checkout* tab. In *Checkout Options*, click in *Mercado Pago - Subscription*. You should get the following page:

![Setting Subscription in Woocommerce](/images/woocommerce-subscription_checkout_config.png)

If you have properly configured your credentials in [General Mercado Pago Settings](#Configuration), then you can now customize your credit card checkout:

### Checkout Interface
How checkout is shown.
  * *Title*: This is the title of the payment option that will be shown to your customers;
  * *Description*: This is the description of the payment option that will be shown to your customers;
  * *Integration Method*: How your customers will interact with Mercado Pago to pay their orders;
  * *iFrame Width*: The width, in pixels, of the iFrame (used only with iFrame Integration Method);
  * *iFrame Height*: The height, in pixels, of the iFrame (used only with iFrame Integration Method).

### Checkout Navigation
How checkout navigations will behave.
  * *Instant Payment Notification (IPN) URL*: In this part, you can check your IPN URL, where you will get notified about payment updates. For this solution, you need to configure an IPN URL in your Mercado Pago account. Take note of your URL, click in link of your country and place the URL in the asked field. Then save it;
  * *Success URL*: Customize a URL to be redirected when a payment is approved. Let blank to redirect to the store;
  * *Failure URL*: Customize a URL to be redirected when a payment has failed. Let blank to redirect to the store;
  * *Pending URL*: Customize a URL to be redirected when a payment is pending. Let blank to redirect to the store.

### Payment Options
How the payment option behaves.
  * *Discount by Gateway*: Gives a percentual discount for your customers if they use Credit Cards as payment method.

### Creating an Assignable Product
A subscription needs a special kind of product, that will be sold periodically. You can configure a product to be assignable following bellow steps:
1. Go to *Products* in the side menu and click in *Add Product* button. The opened page should contain the product details and fields in *Product Data* window;<br>![Setting subscription products pages](/images/woocommerce-subscription_checkout_product.png)
2. Complete your product informations (name, price, images, etc), and then check *Recurrent Product* checkbox;
3. Fill the information fields for the subscription: *Frequency* (frequency of which the charges will be made to your customer), *Frequency Type* (frequency type can be in [Days] or [Months]), and *End Date* (date that the signature should end).

> IMPORTANT: A subscription should be unique in the customer cart. Customers can only sign a product each time, and it can't be mixed with other non-assignable products.

# Notifications
Instant Payment Notifications (IPN) is a mechanism that enables your store to receive messages from Mercado Pago server about the status of a given payment. In this plugin, you don't need to worry about IPN configuration as it is already implemented and configured for you.

### Configuring IPN for Subscriptions
Subscriptions is the only gateway that you must configure IPN to properly receive notifications in your server. To configure it, do as follow:

1. In your store administration, access *WooCommerce > Settings > Checkout* and then, in the listed gateway options, select *Mercado Pago - Subscriptions*;

2. Take note of the informed URL in *Instant Payment Notification (IPN) URL* field and access the IPN/Webhook environment for you country: [Argentina](https://www.mercadopago.com.ar/ipn-notifications), [Brazil](https://www.mercadopago.com.br/ipn-notifications), or [Mexico](https://www.mercadopago.com.mx/ipn-notifications);

3. Insert the URL in the field and click in *save* button. You'll get a message notifying you if Mercado Pago properly accessed your server and received a valid response. If everything is OK you should get a confirmation message.

> HINT 1: When configuring or testing your IPN/Webhooks and server communications be sure that your server can access Mercado Pago server.

> HINT 2: Pay attention that Mercado Pago uses TSL protocol version 1.2, so your server needs to support/accept connections with this protocol version.

> HINT 3: Make sure that any other WordPress plugin can block Mercado Pago.

# Upgrade
If you already had installed a previous version of WooCommerce MercadoPago, please follow the instructions. In same way of the installation, again you have two options: from your WordPress Store, or by downloading and manually copying the module directory.

### Upgrade from WordPress
1. On your store administration, go to *Plugins* option in sidebar;
2. Click in *update now* button in your plugin dashboard window;
3. In a few seconds it should be installed with *Updated!* message shown.

### Upgrade with Manual Download
1. Obtain the module source code from our [Github] repository (https://github.com/mercadopago/cart-woocommerce/archive/master.zip) or [WordPress Plugin Directory](https://br.wordpress.org/plugins/woocommerce-mercadopago/);
2. Unzip the folder and change its name to "woocommerce-mercadopago";
3. Go to *[WordPressRootDirectory]/wp-content/plugins/* directory and delete the existing directory "woocommerce-mercadopago";
4. Copy "woocommerce-mercadopago" directory to *[WordPressRootDirectory]/wp-content/plugins/* directory.

### Upgrade from 2.x to 3.x
Before updating, please, consider the following:
* This is a major update (2.x to 3.x) and also we’re moving the project’s slugname in WordPress Plugin Directory, so creating a backup of your site and data should be a good idea;
* For now, the update consists in the following steps:
   1. Deactivate the plugin Woo Mercado Pago Module;
   2. Uninstall the plugin Woo Mercado Pago Module;
   3. Install the plugin WooCommerce MercadoPago;
   4. Activate the plugin WooCommerce MercadoPago;
   5. Configure the plugin WooCommerce MercadoPago.
* You can find the version 3.x in this link: https://wordpress.org/plugins/woocommerce-mercadopago/;
* The soon as posible we'll be placing a native migration as a feature for version 2.x.

To confirm that your module is really updated, you can see in *Plugins* item in the store administration menu, and check your just updated module. The version should match the just-updated plugin.

> HINT: Always remember to make a backup of your system and data before making any changes.

