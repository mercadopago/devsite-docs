# osCommerce - Mercado Pago Module (v2.2 - 2.3)
---

* [Features](#features)
* [Available versions](#available_versions)
* [Requirements](#requirements)
* [Installation](#installation)
* [Setup](#setup)


<a name="features"></a>
##Features##

**Standard Checkout**

Great for merchants who want to get going quickly and easily.

* Easy website integration— no coding required.
* Limited control of buying experience— display Checkout window as redirect, modal or iframe.
* Store buyer’s card for fast checkout.
* Accept tickets, bank transfer and account money in addition to cards.
* Accept MercadoPago's discount coupons.

*Available for Argentina, Brazil, Chile, Colombia, Mexico and Peru*


<a name="available_versions"></a>
##Available versions##

Plugin Version | Status | Compatible Versions
-------------- | ------ | -------------------
v2.2 | Deprecated (Old version) | osCommerce 2.2
v2.3 | Stable (Current version) | osCommerce 2.3


<a name="requirements"></a>
## Requirements:

**PHP**

* PHP v4+ (PHP v5+ recommended)
* Required extensions: MySQL, cURL

**Database**

* MySQL v3+ (MySQL v5+ recommended)


<a name="installation"></a>
## Installation:

1. Download Mercado Pago module:
    * osCommerce 2.2
    * osCommerce 2.3

2. Copy the module folder to your osCommerce ROOT installation.


<a name="setup"></a>
## Setup MercadoPago

1. On your store administration, go to **Modules > Payment**.

2. Click **Install Module**.

3. Click on **MercadoPago** then in **+Install Module**.

4. Choose your country:

	![Country Selecion in Os Commerce](/images/oscommerce-CountrySelection.png)

5. Choose the payment methods that you don´t want to accept in your Store:

	![Payment Methods - Os Commerce](/images/oscommerce-PaymentMethodsSelection.png)

6. Choose the category on the list that more describe your shop activities.

	![Store category selection](/images/oscommerce-CategorySelection.png)

7. In the next screen, you will see **MercadoPago** listed as a payment method. Now, click on **Edit** on the right bar.

	![Payment Method List](/images/oscommerce-PaymentMethodList.png)

8. Now, is very important to set your **CLIENT_ID** and **CLIENT_SECRET**.

	Get your CLIENT_ID and CLIENT_SECRET [in the following link](https://www.mercadopago.com/mla/account/credentials).

	Other options have been added and you can choose any time after installation:

	- **Sandbox:** By default, sandbox have been selected. We believe, you need a environment to test your first payment.

	- **Kind of Checkout:** Now you can choose what kind of checkout has adapted better with your front-end design, we recommend checkout transparent.

	- **Instant Payment Notification (IPN) URL:** In this part, you can check your IPN URL, where you will get notified about payment updates.

9. **DO NOT TOUCH** the fields *Country*, *Exclude Methods*, *Cod Status (fields…)*. They were generated for you with the correct values, if you need to change them, is highly recommended that you reinstall the module.

	![Do not upgrade](/images/oscommerce-DoNotTouch.png)

10. The fields **Success Url** and **Pending url** were also generated automatically, but if you're testing in a localhost, it will not work. You can change the address to any of your choice, but can't be localhost.

11. Save your configuration and it's done!!

***IMPORTANT:*** This module will only work with the following currencies:*

* Argentina:
	* **ARS** (Argentine Peso)
* Brazil:
	* **BRL** (Brazilian Real)
* Chile:
	* **CLP** (Chilean Peso)
* Colombia:
	* **COP** (Colombian Peso)
* Mexico:
	* **MXN** (Mexican Peso)
* Peru:
	* **PEN** (Peruvian Sol)
