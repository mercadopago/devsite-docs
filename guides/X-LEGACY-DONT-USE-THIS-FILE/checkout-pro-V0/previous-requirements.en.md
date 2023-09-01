# Prerequisites to get started

## Glossary

Have the main technical terms for the Checkout Pro integration flow at hand before checking the prerequisites:

| Term | Description |
| --- | --- |
| `Preference`| It is the **information of the product or service that you want to offer.** Among the most important attributes of a preference are, namely, the description, the amount, and the items. When generating it, you get the URL to start the payment flow. |
| `Credentials` | Your credentials are the **unique keys we provide so you can configure your integrations.** There are two types: Public Key and Access Token. <br/><br/> **Public key is the application's public key** to know the payment methods and encrypt card details, for example. You must use it only for your integrations.<br/><br/> **Access Token is the application's private key** to generate payments. You must use it only for your integrations.<br/><br/>To find them, access the [Credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) section on your [Dashboard](/developers/en/docs/checkout-pro/additional-content/your-integrations/introduction) and select the productive ones. |
| `Initial Point (init_point)` | It is the **URL obtained at the time of generating the preference**, which starts the payment flow of the Checkout Pro. |
| `Ítem` | It refers to the **product or service you want to offer**. It can be one or a list. |
| `Application` | The applications are used to process the seller's payments. **Each application identifies a particular integration** since each one has its credentials. One Mercado Pago account can have multiple applications.<br/><br/>You can find the information of each one in the [Credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) section on your [Dashboard](/developers/en/docs/checkout-pro/additional-content/your-integrations/introduction). Upon entering, an application will be created automatically or you can [create an application](https://applications.mercadopago.com) manually every time you need one. |

## Prerequisites

Follow the following steps before starting your integration:

### 1. Access an account

It is necessary to have a Mercado Pago or Mercado Libre account to start your integration.

----[mlb]----
You can [sign in](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEAzWNQU7EMBAE_9Jnk0hIe8BHPmJNnHFisDPWeIIXrfbvKAKOre6qfqDIlo9g343hwfdWcswGh1bIkmgNeYVHbXDo2fgvluWakFJlY-3wj0u08frOSfRSJSqd4UCn7SEVGfC_X3DIPfDdWA8qYfDylflq_4lN4LGbte7neYwxVdZIqzTaZIpSp0Vn-jhXmms-dnqJchiF19vbDU-HRN2CKcVPeNOTnz_j_vCy4wAAAA/user) to an existing account or create a new account from scratch.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
You can [sign in](https://www.mercadolibre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEAzWNQU7EMBAE_9Jnk0hIe8BHPmJNnHFisDPWeIIXrfbvKAKOre6qfqDIlo9g343hwfdWcswGh1bIkmgNeYVHbXDo2fgvluWakFJlY-3wj0u08frOSfRSJSqd4UCn7SEVGfC_X3DIPfDdWA8qYfDylflq_4lN4LGbte7neYwxVdZIqzTaZIpSp0Vn-jhXmms-dnqJchiF19vbDU-HRN2CKcVPeNOTnz_j_vCy4wAAAA/user) to an existing account or create a new account from scratch.

------------


### 2. Install the Mercado Pago SDK
Install the official SDK to simplify your interaction with our APIs.

[[[
```php
===
To install the SDK you must execute the following code on the command line of your terminal using [Composer](https://getcomposer.org/download):
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
To install the SDK in your [Maven](http://maven.apache.org/install.html) project you must add the following dependency in your <code>pom.xml</code> file and then run <code>maven install</code> on the command line of your terminal: 
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.0.0</version>
</dependency>
```
```ruby
===
To install the SDK you must execute the following code on the command line of your terminal using [gema](https://rubygems.org/gems/mercadopago-sdk): 
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
To install the SDK you must execute the following code on the command line of your terminal using [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference):

------------

----[mla, mco, mlu, mlc, mlm]----
To install the SDK you must execute the following code on the command line of your terminal using [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference): 

------------
===
nuget install mercadopago-sdk
```
```python
===
To install the SDK you must execute the following code on the command line of your terminal using [pip](https://pypi.org/project/mercadopago/):
===
pip3 install mercadopago
```
]]]

### 3. Have your credentials handy

Your credentials are unique keys we provide so you can configure your integrations.

You can find the information of each one in the [Credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) section on your [Dashboard](/developers/en/docs/checkout-pro/additional-content/your-integrations/introduction).

> NOTE
>
> Note
> 
> Do you still have any questions about this topic? Read our documentation on [Credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) for more information.

---

> NEXT_STEP_CARD_EN
>
> Integrate with Checkout Pro
>
> Follow the step by step to start receiving payments on your website through Checkout Pro.
>
> [Integrate with Checkout Pro](/developers/en/docs/checkout-pro/integrate-checkout-pro)