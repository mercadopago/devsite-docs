# WP eCommerce - Mercado Pago Module (3.11.x or greater)

* [Features](#features)
* [Available versions](#available_versions)
* [Requirements](#requirements)
* [Installation](#installation)
* [Basic Checkout Configuration](#std_configuration)
* [Custom Checkout Configuration](#cst_configuration)
* [Ticket Configuration](#ticket_configuration)
* [Upgrade](#upgrade)
* [Feedback](#feedback)

<a name="features"></a>
##Features##

Checkout options right for your business:
We offer two checkout methods that make it easy to securely accept payments from anyone, anywhere.

**Custom Checkout**

Offer a checkout fully customized to your brand experience with our simple-to-use payments API.

* Seamless integration— no coding required, unless you want to.
* Full control of buying experience.
* Store buyer’s card for fast checkout.
* Accept tickets in addition to cards.
* Accept MercadoPago's discount coupons.
* Improve conversion rate.

*Available for Argentina, Brazil, Chile, Colombia, Mexico, Peru, Uruguay and Venezuela*

**Basic Checkout**

Great for merchants who want to get going quickly and easily.

* Easy website integration— no coding required.
* Limited control of buying experience — display Checkout window as redirect, modal or iframe.
* Store buyer’s card for fast checkout.
* Accept tickets, bank transfer and account money in addition to cards.
* Accept MercadoPago's discount coupons.

*Available for Argentina, Brazil, Chile, Colombia, Mexico, Peru, Uruguay and Venezuela*

<a name="requirements"></a>
##Requirements##

Basically, the requirements of this plugin are same as you need to run WPeCommerce. Your machine should have:

**Platforms**

* <a href="https://wordpress.org/download/">WordPress</a> 4.1 or greater;
* <a href="https://wordpress.org/plugins/wp-e-commerce/">WP eCommerce</a> 3.11 or greater;

**Web Server Host**

* <a href="http://php.net/">PHP</a> 5.6 or greater with CURL support;
* <a href="http://www.mysql.com/">MySQL</a> version 5.6 or greater OR <a href="https://mariadb.org/">MariaDB</a> version 10.0 or greater;
* <a href="https://httpd.apache.org/">Apache 2.x</a>.

**SSL certificate**

If you're using Custom Checkout, it is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.

<a name="available_versions"></a>
##Available versions##

<table>
  <thead>
    <tr>
      <th>Plugin Version</th>
      <th>Status</th>
      <th>WPeCommerce Compatible Versions</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>v4.2.5</td>
      <td>Stable (Current version)</td>
      <td>WPeCommerce 3.11.x or greater</td>
    </tr>
  </tbody>
</table>

<a name="installation"></a>
##Installation##

If you have already the module installed, please follow the [Upgrade instructions](#upgrade) first.

You have two ways to install this module: from your WordPress Store, or by downloading and manually copying the module directory.

**Install from WordPress**

1. On your store administration, go to *Plugins* option in sidebar;

2. Click in *Add New* button and type "WPeComm Mercado Pago Module" in the *Search Plugins* text field. Press Enter;

3. You should find the module read to be installed. Click install.

**Manual Download**

1. Get the module sources from a repository (<a href="https://github.com/mercadopago/cart-wp-commerce/archive/master.zip">Github</a> or <a href="https://downloads.wordpress.org/plugin/wpecomm-mercado-pago-module.4.2.5.zip">WordPress Plugin Directory</a>);

2. Unzip the folder and find "wpecomm-mercado-pago-module" directory;

3. Copy "wpecomm-mercado-pago-module" directory to *[WordPressRootDirectory]/wp-content/plugins/* directory.

To confirm that your module is really installed, you can click in *Plugins* item in the store administration menu, and check your just installed module. Just click *enable* to activate it and you should receive the message "Plugin enabled." as a notice in your WordPress.

![Features](https://raw.github.com/mercadopago/cart-wp-commerce/master/README.img/plugin_adm.png)

<a name="std_configuration"></a>
##Basic Checkout Configuration##

On your store administration, go to *Settings > Store > Payments* tab. Click in *Mercado Pago - Basic Checkout* settings. You should get the following page:

![Installation Instructions](https://raw.github.com/mercadopago/cart-wp-commerce/master/README.img/basic_checkout.png)

1. **Solution Header**: This part is the header, where you can enable/disable the solution;

	*Display Name*: This is the title of the payment option that will be shown to your customers.

2. **Mercado Pago Credentials**: In this part, you should configure your credentials *Client_id* and *Client_secret*;

	Remember that you can obtain your *Client_id* and *Client_secret*, accordingly to your country, in the following links:

	* Argentina: https://www.mercadopago.com/mla/account/credentials?type=basic
	* Brazil: https://www.mercadopago.com/mlb/account/credentials?type=basic
	* Chile: https://www.mercadopago.com/mlc/account/credentials?type=basic
	* Colombia: https://www.mercadopago.com/mco/account/credentials?type=basic
	* Mexico: https://www.mercadopago.com/mlm/account/credentials?type=basic
	* Peru: https://www.mercadopago.com/mpe/account/credentials?type=basic
	* Uruguay: https://www.mercadopago.com/mlu/account/credentials?type=basic
	* Venezuela: https://www.mercadopago.com/mlv/account/credentials?type=basic

3. **Checkout Options**: This part allows you to customize your general checkout fields;

	*Description*: This is the description of the payment option that will be shown to your customers;<br />
	*Store Category*: Sets up the category of the store;<br />
	*Store Identificator*: A prefix to identify your store, when you have multiple stores for only one Mercado Pago account;<br />
	*Integration Method*: How your customers will interact with Mercado Pago to pay their orders;<br />
	*iFrame Width*: The width, in pixels, of the iFrame (used only with iFrame Integration Method);<br />
	*iFrame Height*: The height, in pixels, of the iFrame (used only with iFrame Integration Method);<br />
	*Auto Return*: If set, the platform will return to your store when the payment is approved;<br />
	*URL Approved Payment*: This is the URL where the customer is redirected if his payment is approved;<br />
	*URL Pending Payment*: This is the URL where the customer is redirected if his payment is in process.

4. **Payment Options**: This part allows you to customize how the payment should be made;

	*Max Installments*: The maximum installments allowed for your customers;<br />
	*Currency Conversion*: Let merchants try to convert unsupported currency into Mercado Pago supported currency;<br />
	*Exclude Payment Methods*: Select the payment methods that you want to not work with MercadoPago.

5. **Test and Debug Options**: This part allows you to configure debug and test features.

	*Mercado Pago Sandbox*: Test your payments in Mercado Pago sandbox environment;<br />
	*Debug and Log*: Enables/disables system logs.

<a name="cst_configuration"></a>
##Custom Checkout Configuration##

On your store administration, go to *Settings > Store > Payments* tab. Click in *Mercado Pago - Custom Checkout* settings. You should get the following page:

![Installation Instructions](https://raw.github.com/mercadopago/cart-wp-commerce/master/README.img/custom_checkout.png)

1. **Solution Header**: This part is the header, where you can enable/disable the solution;

	*Display Name*: This is the title of the payment option that will be shown to your customers.

2. **Mercado Pago Credentials**: In this part, you should configure your credentials *Public Key* and *Access Token*;

	Remember that you can obtain your *Public Key* and *Access Token*, accordingly to your country, in the following links:

	* Argentina: https://www.mercadopago.com/mla/account/credentials?type=custom
	* Brazil: https://www.mercadopago.com/mlb/account/credentials?type=custom
	* Chile: https://www.mercadopago.com/mlc/account/credentials?type=custom
	* Colombia: https://www.mercadopago.com/mco/account/credentials?type=custom
	* Mexico: https://www.mercadopago.com/mlm/account/credentials?type=custom
	* Peru: https://www.mercadopago.com/mpe/account/credentials?type=custom
	* Uruguay: https://www.mercadopago.com/mlu/account/credentials?type=custom
	* Venezuela: https://www.mercadopago.com/mlv/account/credentials?type=custom

3. **Checkout Options**: This part allows you to customize your general checkout fields;

	*Statement Descriptor*: The description that will be shown in your customer's invoice;<br />
	*Binary Mode*: When charging a credit card, only [approved] or [reject] status will be taken;<br />
	*Store Category*: Sets up the category of the store;<br />
	*Store Identificator*: A prefix to identify your store, when you have multiple stores for only one Mercado Pago account;<br />
	*URL Approved Payment*: This is the URL where the customer is redirected if his payment is approved;<br />
	*URL Pending Payment*: This is the URL where the customer is redirected if his payment is in process.

4. **Payment Options**: This part allows you to configure how payment is made.

	*Currency Conversion*: Let merchants try to convert unsupported currency into Mercado Pago supported currency.

5. **Test and Debug Options**: This part allows you to configure debug and test features.

	*Mercado Pago Sandbox*: Test your payments in Mercado Pago sandbox environment;<br />
	*Debug and Log*: Enables/disables system logs.

<a name="ticket_configuration"></a>
##Ticket Configuration##

On your store administration, go to *Settings > Store > Payments* tab. Click in *Mercado Pago - Ticket* settings. You should get the following page:

![Installation Instructions](https://raw.github.com/mercadopago/cart-wp-commerce/master/README.img/ticket.png)

1. **Solution Header**: This part is the header, where you can enable/disable the solution;

	*Display Name*: This is the title of the payment option that will be shown to your customers.

2. **Mercado Pago Credentials**: In this part, you should configure your credential *Access Token*;

	Remember that you can obtain your *Access Token*, accordingly to your country, in the following links:

	* Argentina: https://www.mercadopago.com/mla/account/credentials?type=custom
	* Brazil: https://www.mercadopago.com/mlb/account/credentials?type=custom
	* Chile: https://www.mercadopago.com/mlc/account/credentials?type=custom
	* Colombia: https://www.mercadopago.com/mco/account/credentials?type=custom
	* Mexico: https://www.mercadopago.com/mlm/account/credentials?type=custom
	* Peru: https://www.mercadopago.com/mpe/account/credentials?type=custom
	* Uruguay: https://www.mercadopago.com/mlu/account/credentials?type=custom
	* Venezuela: https://www.mercadopago.com/mlv/account/credentials?type=custom

3. **Ticket Options**: This part allows you to customize your general ticket fields;

	*Store Category*: Sets up the category of the store;<br />
	*Store Identificator*: A prefix to identify your store, when you have multiple stores for only one Mercado Pago account;<br />
	*URL Approved Payment*: This is the URL where the customer is redirected if his payment is approved;<br />
	*URL Pending Payment*: This is the URL where the customer is redirected if his payment is in process.

4. **Payment Options**: This part allows you to configure how payment is made.

	*Currency Conversion*: Let merchants try to convert unsupported currency into Mercado Pago supported currency.

5. **Test and Debug Options**: This part allows you to configure debug and test features.

	*Debug and Log*: Enables/disables system logs.

<a name="upgrade"></a>
##Upgrade Mercado Pago Plugin##

If you already had installed a previous version of WPeComm Mercado Pago Module, please follow the instructions. In same way of the installation, again you have two options: from your WordPress Store, or by downloading and manually copying the module directory.

**Upgrade from WordPress**

1. On your store administration, go to *Plugins* option in sidebar;

2. Click in *update now* button in your plugin dashboard window;

3. In a few seconds it should be installed with *Updated!* message shown.

**Upgrade with Manual Download**

1. Get the module sources from a repository (<a href="https://github.com/mercadopago/cart-wp-commerce/archive/master.zip">Github</a> or <a href="https://downloads.wordpress.org/plugin/wpecomm-mercado-pago-module.4.2.5.zip">WordPress Plugin Directory</a>);

2. Unzip the folder and find "wpecomm-mercado-pago-module" directory;

3. Go to *[WordPressRootDirectory]/wp-content/plugins/* directory and delete the existing directory "wpecomm-mercado-pago-module";

4. Copy "wpecomm-mercado-pago-module" directory to *[WordPressRootDirectory]/wp-content/plugins/* directory.

To confirm that your module is really updated, you can see in *Plugins* item in the store administration menu, and check your just updated module. The version should match the just-updated plugin.

<a name="Feedback"></a>
##Feedback##

We want to know your opinion, feel free to access our pages:

* [Facebook](https://www.facebook.com/groups/modulos.mercadopago/)