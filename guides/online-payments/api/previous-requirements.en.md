# Prerequisites to get started

Find out what you need to know to integrate our Checkout API.

## Have your credentials handy
Your credentials are the **keys we provide you to configure your integrations**. In this case, you will use a public and a private key.

* The Public Key grants access to the resources that your frontend needs. It allows you to collect credit card data and turn it into a representative token that you can send to your servers securely to create a payment.

* The private key, or Access Token, will allow you to call the rest of the APIs from your servers. For example, to process a payment, make a refund, or save cards.

To find them, go to the [Credentials section]([FAKER][CREDENTIALS][URL]).

> Do you have any questions about credentials? Check our [FAQs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/faqs/credentials/).


## Always use our libraries
Remember to always use our official libraries for your integration. This helps protect your customer's sensitive data, meet the required security standards, and keep yourself up to date.

<br>

> CLIENT_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Include MercadoPago.js

MercadoPago.js allows you to create a payment token to send card data to your backend securely. You can use it by adding the following code to your website:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

<br>

> SERVER_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Install Mercado Pago SDK

Install an [official SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks) to simplify your interaction with our APIs.

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

## Learn our API References

If you can't use our official SDKs, you will have all the information about data queries and responses available to interact directly with our APIs in [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments/post/).

## Meet the requirements for the production environment

When you develop your integration, consider all the [requirements for the production environment](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/goto-production/). This process can ensure your customer's data security, compliance with legal standards or provisions in each country, and the best shopping experience for your customers.

Once your integration is ready, you just need to fill out the form for to go to production in the [Credentials section]([FAKER][CREDENTIALS][URL]) to start receiving payments.


---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Integrate Checkout API for cards
>
> Create and configure your own payment experience.
>
> [Integrate Checkout API for cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/receiving-payment-by-card/receiving-payment-by-card/)


> RIGHT_BUTTON_RECOMMENDED_EN
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/)