# Prestashop 1.7


### Mercado Pago Module (Prestashop 1.7.x)

* [Introduction](#bookmark_introduction)
* [Installation Requirements](#bookmark_installation_requirements)
* [Installation](#bookmark_installation)
* [Integration](#bookmark_integration)
* [Receive Payments](#bookmark_receive_payments)

## Introduction

As you can imagine, a website without a payment processor is nothing more than an online catalog. Your customers will be able to see your products but they won't be able to pay for them.

> We are official partners of Prestashop, a content manager which you can create online stores to suit you.

Think big. Install the Mercado Pago payment gateway in Prestashop and take your sales to another level with the best shopping experience:

* Make **promotions** and sell in installments with the best ** financing ** possible
* Release money from your sales instantly.
* Choose the **checkout** you want to offer your customers.
* **Main means of payment** of each country in which we operate.
* **Buy with one click:** we remember your customers data, they only enter the security code of your card
* **Payment as a guest:** your customers do not have to open an account in Mercado Pago
* **Refund** of payments
* **Cancellation** of pending payments
* Refuse or accept payments **automatically**

> **Are you a developer?** This guide is also designed to make your installation, integration and configuration work faster.

> **Are you a Mercado Pago partner?** Do not forget to enter your Sponsor_ID, so we identify all your transactions and know how many sales your account processes. 

## Installation Requirements

On a technical level, your version of Prestashop must meet these requirements:

|                            | Details                                                                                        |
|----------------------------|------------------------------------------------------------------------------------------------|
| Supported Versions         | Prestashop 1.7.x                                                                               |
| Environment                | LAMP (Linux, Apache, MySQL, and PHP) or LNMP stack                                             |
| System                     | Linux x86, Windows x86-64                                                                      |
| Web Server                 | Apache 2.x,  Nginx 1.7.x                                                                       |
| PHP Version                | PHP 5.6, 5.5 y 5.4                                                                             |
| Database                   | MySQL 5.6 (Oracle or Percona)                                                                  |
| Extension Dependency       | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)           |
| Additional settings        | safe_mode off * memory_limite larger than 256MB (512MB recommended)                            |
| SSL                        | It's a requirement that you have an SSL certificate                                            |

The installation of our module doesn't affect the performance of your store!

> You can use the HTTP protocol while in "Sandbox" mode and not making real transactions. When you go to Production you must have an **SSL certificate** to offer **secure browsing** and protect your data and those of your customers. Once you have it, the path to your online store will respond to the **HTTPS protocol**.

## Installation

1) Download the file **mercadopago.zip** in our Github.

> NOTE
>
> [DOWNLOAD](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip)
>
> [Mercado Pago Module for Prestashop 1.7](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip)

2) Access the Prestashop administrative panel at **Modules** -> **Modules and Services**, click on the **"Upload a Module"** button and select the file **Mercadopago.zip** previously downloaded.

3) Very good! Mercado Pago Module was successfully installed.

## Integration

You do not need to know how to design or program to activate Mercado Pago in your Prestashop store. Once the module is installed, this is what you should do:

1. Create a [merchant account](https://www.mercadopago.com.ar/registration-company?confirmation_url=https%3A%2F%2Fwww.mercadopago.com.ar%2Fcomo-cobrar) in Mercado Pago if you don't have one yet.
2. Obtain your [credentials](https://www.mercadopago.com.ar/developers/es/guides/localization/credentials) and paste them in the corresponding fields to integrate the module with your account.
3. Set your payment preferences and other advanced settings.
4. Approve your account to [go to Production](https://www.mercadopago.com.ar/developers/es/guides/payments/api/goto-production/) and receive real payments.

## Receive payments

Set the basics of checkout and let your customer complete your purchase quickly, easily and safely:

> Basic Checkout: Accept credit or debit cards, Mercado Pago money account and cash payment.

The better the experience, the more conversions! Follow these steps to configure the Mercado Pago module:

#### **1. Basic configuration**

Create your payment preferences:

- Enter your brand or the name of your store for the invoices we send to your customers for each purchase.
- Choose which category your products belong.
- Choose the [means of payment available] (https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/) for your customers according to the country in which you operate and the type of checkout that you are configuring.
- Set the maximum installments in which they can pay.
- Cash payments: set how many days the custom checkout payments will expire.

![Basic configuration](/images/prestashop/es_basico.png)

#### **2. Advanced configuration**

Customize the shopping experience with the advanced settings that correspond to each type of checkout:

- Let your customers back to your store every time you complete a purchase.
- Accept and reject payments automatically, skipping the instances of collections under review with binary mode.
- Maximum time of payment links with the purchase preferences of your customers that leave the purchase process halfway.
- Discount coupons
- When to reduce the inventory in the personalized checkout of cash payments

![Advanced configuration](/images/prestashop/es_avanzado.png)

#### **3. Test the module**

Do tests:

- Simulates payments like you're one of your customers buying on the site.
- Make sure the flow works correctly and is easy to use.
- Do you see that everything is going well? Disable sandbox mode and start receiving real payments!

![Test the module](/images/prestashop/es_testear.png)

> By default, we leave sandbox mode activated. Disable it when you have the homologated account and go to production only when you have verified that the purchase flow works and that test payments were processed. 

#### **4. Go to production (‘Go live!’)**

Before going out to collect, we need you to go through the homologation process. In it we will ask you to complete a form with information related to your business.

> Check the [requirements to go to production.](https://www.mercadopago.com.ar/developers/es/guides/payments/api/goto-production/)

Have you done it? Then you can quickly move from "Sandbox" to "Production" from the Mercado Pago configuration panel.

![Start your sales](/images/prestashop/es_vender.png)

**And that's it!**  Now you can maximize the conversion of your store with the online shopping experience of Mercado Pago. 
