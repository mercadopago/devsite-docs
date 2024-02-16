# Integrate Checkout Pro

The integration with Checkout Pro allows you to receive payments via our web form from any device in a simple, fast and secure way.

In this documentation you will find all the necessary steps to integrate Checkout Pro through **our SDKs**. To do this, follow the steps described below.

---
live_demo_code_action:
 - title: Try our Checkout Pro
 - description: Build the Checkout Pro visual experience in real-time. When you are all set, download or copy the generated code to add it to your website or share it with a developer.
 - link: /developers/en/live-demo/checkout-pro
 - image:https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2023/9/6/1696615115358-Group34359.png
 - linkName: Demo
 - buttonDescription: Build your Checkout Pro
---

> SERVER_SIDE
>
> h2
>
> Install Mercado Pago SDK

The first step to integrate Checkout Pro is to install the Mercado Pago SDK in your project. To do this, use one of the codes available below.

[[[
```php
===
To install the SDK, you must run the following code in your terminal command line using [Composer](https://getcomposer.org/download):
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
To install the SDK, you must run the following code in your terminal command line using [npm](https://www.npmjs.com/get-npm):
===
npm install Mercadopago
```
```java
===
To install the SDK in your [Maven](http://maven.apache.org/install.html) project, you must add the following dependency to your <code>pom.xml</code> file and run the code <code>maven install</code> in your terminal command line:
===
<dependency>
<groupId>com.mercadopago</groupId>
<artifactId>sdk-java</artifactId>
<version>2.1.7</version>
</dependency>
```
```ruby
===
To install the SDK, you must run the following code in your terminal command line using [gem](https://rubygems.org/gems/mercadopago-sdk):
===
gem install Mercadopago-sdk
```
```csharp
===
----[mlb]----
To install the SDK, you must run the following code in the command line of your terminal using [NuGet](https://docs.microsoft.com/en-us/nuget/reference/nuget-exe-cli-reference):

------------
----[mla, mpe, mlm, mco, mlc, mlu]----
To install the SDK, you must run the following code in the command line of your terminal using [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference):

------------
===
nuget install Mercadopago-sdk
```
```python
===
To install the SDK, you must run the following code in the command line of your terminal using [pip](https://pypi.org/project/mercadopago/):
===
pip3 install MercadoPago
```
]]]

> SERVER_SIDE
>
> h2
>
> Create preference

Preferences are sets of information that allow you to configure a product or service that you want to charge, such as price and quantity, as well as other settings related to the defined payment flow.

To create a preference, use one of the SDKs available below, filling in the attributes with the respective information.

[[[
```php
<?php
// Mercado Pago SDK
use MercadoPago\MercadoPagoConfig;
// Add Your credentials
MercadoPagoConfig::setAccessToken("PROD_ACCESS_TOKEN");
?>
```
```node
// Mercado Pago SDK
import { MercadoPagoConfig } from 'mercadopago';
// Add Your credentials
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
```
```java
// Mercado Pago SDK
import com.mercadopago.MercadoPagoConfig;
// Add Your credentials
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# Mercado Pago SDK
require 'mercadopago'
# Add Your credentials
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// Mercado Pago SDK
 using MercadoPago.Config;
 // Add Your credentials
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# Mercado Pago SDK
import mercadopago
# Add Your credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
```
]]]

When you finish creating the preference, you need to configure it according to your product or service. To do so, use one of the codes available below, filling in the attributes with the respective information.

----[mlb]----

[[[
```php
<?php
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "My product",
      "quantity" => 1,
      "unit_price" => 25
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'My product',
        quantity: 1,
        unit_price: 25
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
```
```ruby
# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Create a preference item
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------
----[mla]----

[[[
```php
<?php
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "My product",
      "quantity" => 1,
      "unit_price" => 2000
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'My product',
        quantity: 1,
        unit_price: 2000
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
```
```ruby
# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Create a preference item
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------
----[mlm]----

[[[
```php
<?php
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "My product",
      "quantity" => 1,
      "unit_price" => 85
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'My product',
        quantity: 1,
        unit_price: 85
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
```
```ruby
# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Create a preference item
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------
----[mlu]----

[[[
```php
<?php
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "My product",
      "quantity" => 1,
      "unit_price" => 200
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'My product',
        quantity: 1,
        unit_price: 200
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
```
```ruby
# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Create a preference item
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------
----[mpe]----

[[[
 ```php
<?php
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "My product",
      "quantity" => 1,
      "unit_price" => 20
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'My product',
        quantity: 1,
        unit_price: 20
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
```
```ruby
# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Create a preference item
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

------------
----[mco]----

[[[
 ```php
<?php
<?php
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "My product",
      "quantity" => 1,
      "unit_price" => 20000
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'My product',
        quantity: 1,
        unit_price: 20000
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
```
```ruby
# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
};

// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Create a preference object
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75
            
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

> WARNING
>
> Important
>
> The value of `unit_price` must be an integer.

------------
----[mlc]----

[[[
 ```php
<?php
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "My product",
      "quantity" => 1,
      "unit_price" => 4500
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'My product',
        quantity: 1,
        unit_price: 4500
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
```
```ruby
# Create a preference request
preference_data = {
  items: [
    {
      title: 'My Item',
      unit_price: 75,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My Item",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
};

// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Create a preference object
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75
            
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

> WARNING
>
> Important
>
> The value of `unit_price` must be an integer.

------------

> CLIENT_SIDE
>
> h2
>
> Choosing the type of integration

With the SDK installed and configured correctly in your project, you are ready to proceed with the integration. To isso, choose the type of integration that best suits your needs, choose **Web** or **Mobile**, and follow the steps detailed in the section corresponding to the type of solution chosen

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout Pro for Web
 - card_description: Offer different payment methods to customers on a website in a simple, fast, and secure manner.
 - card_button:  /developers/en/docs/checkout-pro/integrate-checkout-pro/web
 - card_buttonDescription: Integrar
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Loading
 - card_title: Checkout Pro for Mobile
 - card_description: Offer various payment methods to customers in your mobile application, using the language that best suits your project.
 - card_button: /developers/en/docs/checkout-pro/integrate-checkout-pro/mobile
 - card_buttonDescription: Integrar
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---