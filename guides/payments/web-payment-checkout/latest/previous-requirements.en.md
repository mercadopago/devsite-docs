---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Prerequisites to get started


## Glossary

We know some terms are new. Before getting started, we’ll give you a hand.

Term | Description
------------ | -------------
_Preference_ | It is the **information of the product or service that you want to offer.** Among the most important attributes of a preference are defined: the description, the amount and the items. When generating it, you get the URL to start the payment flow.
_Credentials_ | Your credentials are the **keys we provide so you can configure your integrations.**<br/>There are two types:<br/><br/>**ACCESS_TOKEN**. Private key of the application to generate payments. You must use it only for your integrations.<br/>**PUBLIC_KEY**. Public key of the application to know, for example, the payment methods and encrypt card details. You must use it only for your integrations.<br/><br/>To find them, go to your <a href="https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials" target="_blank"> credentials </a> and select the productive ones in the Custom Checkout option.<br/><br/>If you entered this page with your account, they will be automatically completed within the code lines.
_Initial Point (init_point)_ | **It is the URL obtained at the time of generating the preference** and that starts the payment flow of the Smart Checkout.
_Ítem_ | It refers to the product or service you want to offer. It can be one or a list.
_Application_ | The applications are used to process the seller's payments. **Each application identifies a particular integration**, since each one has its own <a href="https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials" target="_blank"> credentials</a>. One Mercado Pago account can have multiple applications.<br/><br/>You can find the information of each one in Credentials. Upon entering, one will be created automatically or you can <a href="https://applications.mercadopago.com/" target="_blank"> create an application</a> every time you need one.

## Previous requirements

To continue, check the necessary prerequisites:

### 1. Access to the Mercado Pago or Mercado Libre account
In order to start the integration, it is necessary to **have a Mercado Pago or Mercado Libre account.**.
----[mla]----
If you don't have one yet, you can <a href="https://www.mercadopago.com.ar/" target="_blank"> create a Mercado Pago account</a> whenever you want.
------------
----[mlm]----
If you don't have one yet, you can <a href="https://www.mercadopago.com.mx/" target="_blank"> create a Mercado Pago account</a> whenever you want.
------------
----[mlu]----
If you don't have one yet, you can <a href="https://www.mercadopago.com.uy/" target="_blank"> create a Mercado Pago account</a> whenever you want.
------------
----[mlc]----
If you don't have one yet, you can <a href="https://www.mercadopago.cl/" target="_blank"> create a Mercado Pago account</a> whenever you want.
------------
----[mco]----
If you don't have one yet, you can <a href="https://www.mercadopago.com.co/" target="_blank"> create a Mercado Pago account</a> whenever you want.
------------
----[mlb]----
If you don't have one yet, you can <a href="https://www.mercadopago.com.br/" target="_blank"> create a Mercado Pago account</a> whenever you want.
------------

### 2. Installations of Mercado Pago SDK
**Install the official SDK** to simplify your interaction with our APIs.

[[[
```php
===
<a href="https://getcomposer.org/download" target="_blank"> Install Composer</a> to use the SDK.

Then run the following code on the command line:
===
php composer.phar require "mercadopago/dx-php:dev-master"
```
```node
===
To install the SDK you must execute the following code on the command line of your terminal using <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a>:
===
npm install mercadopago
```
```java
===
To install the SDK in your <a href="http://maven.apache.org/install.html" target="_blank"> Maven </a> project, add the following dependency in your pom.xml file and then run ´maven install´.
===
<dependency>
		    <groupId> com.mercadopago </groupId>
		    <artifactId> dx-java </artifactId>
		    <version> 1.0.33 </version>
</dependency>
```
```ruby
===
The Mercado Pago SDK is available as a <a href="https://rubygems.org/gems/mercadopago-sdk" target="_blank"> gema</a>, to install it you must execute the following code on the command line:
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Use <a href="https://docs.microsoft.com/pt-pt/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> to install the Mercado Pago SDK .NET.
------------
----[mla, mco, mlu, mlc, mlm]----
Use <a href="https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> to install the Mercado Pago SDK .NET.
------------
To do this, run the following command in the NuGet Package Manager console:
===
PM> Install-Package mercadopago-sdk -Version 1.0.57
```
]]]

> NOTE
>
> Note
>
> This documentation refers to the new version of the Smart Checkout. **To view the previous version**, go to the [old Smart Checkout section](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/v1/introduction/).

 ---

### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Integrate Smart Checkout
>
> Follow the step by step to start receiving payments on your website.
>
> [Integrate Smart Checkout](http://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/integration/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](http://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/test-integration/)
