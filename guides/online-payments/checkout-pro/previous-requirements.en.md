# Prerequisites to get started


## Glossary

We know some terms are new. Before getting started, we'll give you a hand.

| Term | Description |
| --- | --- |
| _Preference_ | It is the **information of the product or service that you want to offer.** Among the most important attributes of a preference are defined: the description, the amount and the items. When generating it, you get the URL to start the payment flow. |
| _Credentials_ | Your credentials are the **keys we provide so you can configure your integrations.**<br/>There are two types:<br/><br/>**Public Key**. Public key of the application to know, for example, the payment methods and encrypt card details. You must use it only for your integrations.<br/>**Access Token**. Private key of the application to generate payments. You must use it only for your integrations.<br/><br/>To find them, go to your [credentials]([FAKER][CREDENTIALS][URL]) and select the productive ones.<br/><br/> |
| _Initial Point (init_point)_ | **It is the URL obtained at the time of generating the preference** and that starts the payment flow of the Checkout Pro. |
| _Ítem_ | It refers to the product or service you want to offer. It can be one or a list. |
| _Application_ | The applications are used to process the seller's payments. **Each application identifies a particular integration**, since each one has its own [credentials]([FAKER][CREDENTIALS][URL]). One Mercado Pago account can have multiple applications.<br/><br/>You can find the information of each one in Credentials. Upon entering, one will be created automatically or you can [create an application](https://applications.mercadopago.com) every time you need one. |

## Previous requirements

Keep these aspects in mind before you start integrating:

### 1. Access to an account

In order to start the integration, it is necessary to **have a Mercado Pago or Mercado Libre account**.

You can [Sign in](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/previous-requirements) with an existing Mercado Pago or Mercado Libre account or [Create a new account](https://www.mercadopago[FAKER][URL][DOMAIN]) at Mercado Pago.

### 2. Install Mercado Pago SDK
**Install the official SDK** to simplify your interaction with our APIs.

[[[
```php
===
[Install Composer](https://getcomposer.org/download) to use the SDK.

Then run the following code on the command line:
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
To install the SDK you must execute the following code on the command line of your terminal using [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
To install the SDK in your [Maven](http://maven.apache.org/install.html) project, add the following dependency in your pom.xml file and then run ´maven install´.
===
<dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> sdk-java </artifactId>
            <version> 1.8.0 </version>
</dependency>
```
```ruby
===
The Mercado Pago SDK is available as a [gema](https://rubygems.org/gems/mercadopago-sdk), to install it you must execute the following code on the command line:
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Use [NuGet](https://docs.microsoft.com/pt-pt/nuget/install-nuget-client-tools) to install the Mercado Pago SDK .NET.
------------
----[mla, mco, mlu, mlc, mlm, mpe]----
Use [NuGet](https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools) to install the Mercado Pago SDK .NET.
------------
To do this, run the following command in the NuGet Package Manager console:
===
PM> Install-Package mercadopago-sdk -Version 1.0.57
```
]]]

### 3. Have your credentials handy

Your credentials are the **keys we provide you to configure your integrations**.

To find them, go to the [Credentials section]([FAKER][CREDENTIALS][URL]).

> Do you have any questions about credentials? Check our [FAQs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/faqs/credentials).

 ---

### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Integrate Checkout Pro
>
> Follow the step by step to start receiving payments on your website.
>
> [Integrate Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/integration)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration)
