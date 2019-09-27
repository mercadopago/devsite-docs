# WooCommerce

### Mercado Pago Module (WooCommerce 3.x)

## Introduction

The Mercado Pago module for WooCommerce allows you to expand the functionalities of your online store and offer a unique payment experience for your customers.

If you already use WooCommerce to create e-commerce websites in WordPress, one of the most popular content managers worldwide, you can count on our module to add a trusted payment processor on your website or that of your clients.

> Take your sales to another level with the payment processor for Mercado Pago WooCommerce, ready to use in your online store.

Think big. Install our payment gateway on WooCommerce and take your sales to another level with the best shopping experience:

* Make **promotions** and sell in installments with the best possible **financing**
* Main **payment methods** of each country in which we operate
* **One click purchase:** rwe remember your customers' details, they just enter the card’s CVV Code
* **Payment as a guest:** we do not exclude anyone, it is not necessary for your customers to open an account in Mercado Pago
* Payment **Devolution**
* **Cancelation** of pending payments
* Reject or accept payments **automatically**
* Count on Mercado Pago’s **official support**

> **Are you a developer?** This guide is also designed to make your installation, integration and configuration work faster in the most recognized e-commerce platforms worldwide.

Learn about the payment options we develop to meet the needs of your business:

| Basic Checkout                                                                    | Card Payment Checkout                                        | In-person Payment Checkout                   |
|-----------------------------------------------------------------------------------|--------------------------------------------------------------|----------------------------------------------|
| Offer all payment methods.                                                        | Offer debit and credit card payments.                        | Offer payments in cash.                      |
| Payment experience on the Mercado Pago website.                                   | Payment experience inside your store.                        | Payment experience inside your store.        |
| Your customers can pay as guests or by entering their Mercado Pago account.       | Your customers can pay as guests without leaving your store. | Your customers can pay as guests without leaving your store. |


## Installation requirements

|                             	| Details                                                                 	|
|-------------------------------|---------------------------------------------------------------------------|
| Platform Version            	| WordPress 3.1.x - 4.9.x, WooCommerce 2.6.x - 3.4.x                       	|
| Environment                 	| LAMP (Linux, Apache, MySQL e PHP)                                        	|
| System                       	| Linux x86, x86-64                                                        	|
| Web Server                  	| Apache 2.x                                                               	|
| PHP Version                 	| 5.6 or higher or with curl suport                                        	|
| Database                    	| MySql 5.6 or higher, MariaDB 10.0 or higher                              	|
| Extensions Dependencies     	| WooComerce                                                               	|
| Additional Settings         	| safe_mode off, memory_limit higher than 256 MB                           	|
| SSL                         	| SSL certificate required to use credit cards or tickets                  	|

> It is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page. During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.


## Installation

You can install Mercado Pago in WordPress two ways:

1. Automatically, from the ‘Plugins’ section of WordPress
  * Follow these steps for installation:
    * Go to "Add new" and look for “WooCommerce Mercado Pago” among the WordPress module offer.
    * Click Install and then look for it in the "Installed Plugins" section.
    * Activate it to start configuring the module in your store.
    * And done!

2. Manuallyl
  * Install the module following these steps:
    * Download the [.zip](https://github.com/mercadopago/cart-woocommerce/archive/master.zip) file now from the WordPress modules [directory](https://wordpress.org/plugins/woocommerce-mercadopago/) de módulos do WordPress
    * Unzip the folder and change the name to "woocommerce-Mercadopago"
    * Copy the ‘woocommerce-marketpayment’ file into your WordPress directory, into the "Plugins" folder
    * Done!

If you installed it correctly, you will see it on the WordPress desktop, within "Installed Plugins". Activate it and let's move on to the integration of your account and the configuration steps.


## Integration

Follow these steps to integrate your Mercado Pago account with the module and receive your sales payments:

1. Create a [seller acount](https://www.mercadopago.com.ar/registration-company?confirmation_url=https%3A%2F%2Fwww.mercadopago.com.ar%2Fcomo-cobrar) in Mercado Pago if you don't have one yet.
2. Get your [credentials](https://www.mercadopago.com.ar/developers/es/guides/localization/credentials), they are the keys that uniquely identify you within the platform. Paste them in the corresponding fields to integrate the module with your account.
3. Set the checkout payment preferences you want to offer and make other advanced settings if you want to change the options that come by default.
4. Approve your account to [go into Production](https://www.mercadopago.com.ar/developers/en/guides/payments/api/goto-production/) and receive real payments.


## Module configuration

Enter basic business information to start configuring the module:

*Enter the name of your store, it will appear on the invoices we send to your customers for each purchase.
*Select to which category your products belong.
*Add a number or prefix to identify orders and payments from your store.

> **Advanced:** Edit advanced settings when you want to configure [IPN notifications](https://www.mercadopago.com.ar/developers/en/guides/notifications/ipn/) and record information about transactions between WooCommerce and Mercado Pago in our exchange files with debug and log modes. If you are the one who integrates the module, this will be useful if there are problems in the payments with Mercado Pago.


## Receive payments

Organize the checkouts you want to use to offer our payment options on the purchase gateway.

When you activate the plugin, the platform will take you to the WooCommerce Settings and, from there, to the 'Payments' section, where you will have on hand the types of checkout we offer for your online store: Basic Checkout, Custom Checkout for online payments and Custom Checkout for cash payments.

![Mercado Pago Checkouts](/images/woocommerce/es_woo_payments.png)

Basic checkout and custom checkout are excludant of each other. Therefore, if you use the basic checkout you will not be able to use the custom options and vice versa.

You must make a decision to activate the different shopping experiences:

* Do you want to offer **all the payment methods** in a pre-established way? Activate and configure the basic checkout.
* Do you wish to allow **only cash payments?** Activate the custom checkout of cash payments.
* Will you allow **debit and credit card payments?** Activate the custom checkout of online payments.
* Do you wish to offer **all the payment methods in a customized way?** Activate both the custom checkout for online payments and the custom checkout for cash payments.   

Now check the options that all the checkouts have in common and configure each field, below you will find the detail of each one:

|           |                                     | Checkout Básico para todos los medios de pago | Checkout Personalizado para pagos online | Checkout Personalizado para pagos en efectivo |
|-----------|-------------------------------------|-----------------------------------------------|------------------------------------------|-----------------------------------------------|
| Basic     | Activate CHO                        | ✔                                             | ✔                                        | ✔                                             |
|           | Payments method On                  | ✔                                             | ✔                                        |                                               |
|           | Payments method Off                 | ✔                                             |                                          | ✔                                             |
|           | Maximum of installments             | ✔                                             | ✔                                        | ✔                                             |
|           | Days to Expiration                  |                                               |                                          | ✔                                             |
| Advanced  | Redirect payment experience         | ✔                                             |                                          |                                               |
|           | Modal payment experience            | ✔                                             |                                          |                                               |
|           | Discount coupons                    | ✔                                             | ✔                                        | ✔                                             |
|           | Back to the store                   | ✔                                             |                                          |                                               |
|           | Deduct inventory                    |                                               |                                          | ✔                                             |
|           | Success payment URL                 | ✔                                             |                                          |                                               |
|           | Rejected payment URL                | ✔                                             |                                          |                                               |
|           | Pendent payment URL                 | ✔                                             |                                          |                                               |
|           | Binary mode                         | ✔                                             | ✔                                        | ✔                                             |
|           | Discounts per purchase with **MP**  | ✔                                             | ✔                                        | ✔                                             |
|           | Commission per purchase with **MP** | ✔                                             | ✔                                        | ✔                                             |


#### **1. Basic Configuration**

Activate the checkout when you want to use it as a payment option in your online store, select the payment methods available to your customers and define the maximum number of installments in which they can pay you.

![Basic Configuration](/images/woocommerce/es_woo_basico.png)

As you have seen in the comparison chart, checkouts have some advanced configurations in common and other configurations of that each one offers:

- MP purchase options

  - You can configure discounts and fees for your buyers each time they pay with Mercado Pago in your online store.

 ![Discounts and commission](/images/woocommerce/es_woo_comdesc.png)

- Binary mode

  - Some businesses, due to their business logic, may need an instant process of approval or rejection of payments in the shopping experience, that is, avoid the pending payment instance.
  - To operate this way, you can enable the **binary mode** in the advanced settings and thus define the approval or rejection of each payment instantly. If you disable the binary mode, you may have pending charges that we analyze with our fraud prevention tool.

Check the advanced settings of each checkout to leave nothing behind:

Basic checkout for all payment methods

1. Payment experience
  - Define what your payment experience will be like for your customers: whether or not they will leave your site to pay. ‘Redirect’ will take them out of your store to pay on our payment gateway. The Modal option will open the payment form within your online store, without leaving it to finish the purchase process.

2. Back to the store
  - Here you can choose if you want your buyers to return to your store. If so, we will take them directly once the payment is finished.

3. Configurable URLs only in the basic checkout
  - of success: Inform your buyers every time a payment is approved by taking them to a page that communicates the result. It is a good practice as this will give them confidence about the transaction just performed. The URL you enter in this field will fulfill that function.
  - of rejected payment: Same as the previous point, but for when things do not go well at all. Create a page that serves to inform your buyers when a payment is declined and tell them what steps to take. You can enter it in this field.  
  - of pending payment: Enter the URL of a page where you tell your buyers that they have a pending payment and what it means: that the payment is not yet confirmed. You will improve the shopping experience as long as you give the right information and make your buyers aware of the process.

Custom checkout for payments with debit and credit cards

* Discount coupons
  - Some businesses may want to work with discount coupons. If this is your case, simply activate this option by selecting ‘Yes’ in the configuration field:   

![Mercado Pago checkout discount](/images/woocommerce/es_woo_cupon.png)

Custom checkout for cash payments

* Deduct inventory
  - Activate this option to reduce your stock during the creation of an order, regardless of whether the customer finishes the purchase or not. Disable this option to reduce it only when payments are approved

#### **2. Test the module**

Test until you are sure everything works well.

* Simulate payments as if you were one of your customers buying on the website.
* Make sure the flow works correctly and is easy to use.
* Do you see that everything is going well? Disable the testing mode and start receiving real payments!

You can activate and deactivate this mode here:

![Sandbox Mode](/images/woocommerce/es_woo_sandbox.png)

> By default, we deactivate the Production mode. Activate it when you have the account approved and have verified that both the purchase flow and the receipt of the test payments work well.

#### **3. Go to Production (‘Go live!’)**

Activate the Production mode only when you are ready to sell. You can do it from here:

![Production Mode](/images/woocommerce/es_woo_produccion.png)

Before you start receiving payments, we need need you to go through the approval process. In it we will ask you to complete a form with information related to your business.

> Check the requirements to [go into production](https://www.mercadopago.com.ar/developers/en/guides/payments/api/goto-production/).

Have you already done it? Then you can activate ‘Production’ from the Mercado Pago configuration panel.

**Done!** Now you can maximize your conversion or the one of your clients with the Mercado pago online purchase experience
