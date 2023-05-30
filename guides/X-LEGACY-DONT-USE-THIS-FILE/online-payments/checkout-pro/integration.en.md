# Integrate with Checkout Pro

The integration with Mercado Pago's Checkout Pro solution allows you to charge your customers through our web form from any device in a simple, fast, and secure way.

> NOTE
>
> Note
>
> Use the [implementation example](#bookmark_sample_project) to understand and learn more about the complete integration with Checkout Pro.

## Step by step

![Integration](/images/web-payment-checkout/flow-v2-2.png)

Installing the Checkout Pro consists of two main steps:

1. Generating the desired preferences;
2. Adding the Checkout Pro to your website.

> SERVER_SIDE
>
> h3
>
> &nbsp;1. Generate your preference

Add the [Mercado Pago SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/previous-requirements#bookmark_previous_requirements) and the needed [credentials]([FAKER][CREDENTIALS][URL]) in your project to enable the use of preferences:
:

[[[
```php
<?php
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';
// Add Your credentials
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>
```
```node
// Mercado Pago SDK
const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
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

Then, set the preference according to your product or service:

----[mla, mlb, mlu, mpe, mlm]----

> Note that you need to configure the `back_urls` if you want to return to your website at the end of the payment. For more information, visit the [Advanced integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/advanced-integration#bookmark_return_url) section.

[[[
 ```php
<?php
// Create a preference object
$preference = new MercadoPago\Preference();

// Create a preference item
$item = new MercadoPago\Item();
$item->title = 'My Item';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
$preference->save();
?>
```
```node
// Create a preference object
let preference = {
  items: [
    {
      title: 'My Item',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
// Create a preference object
PreferenceClient client = new PreferenceClient();

// Create a preference item
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();

client.create(request);
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
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}'
```
]]]

------------

----[mlc, mco]----

[[[
 ```php
<?php
// Create a preference object
$preference = new MercadoPago\Preference();

// Create a preference item
$item = new MercadoPago\Item();
$item->title = 'My Item';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->save();
?>
```
```node
// Create a preference object
let preference = {
  items: [
    {
      title: 'My Item',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
// Create a preference object
Preference preference = new Preference();

// Create a preference item
Item item = new Item();
item.setTitle("My Item")
    .setQuantity(1)
    .setUnitPrice((float) 75);
preference.appendItem(item);
preference.save();
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
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75
        }
    ]
}'
```
]]]

> WARNING
>
> Important
>
> The value of `unit_price` must be an integer.

------------

<span></span>

> NOTE
>
> Adapt the Checkout Pro integration to your business
>
> Access the [Preferences Configuration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations) section to know how to add new features to the Checkout Pro according to your business model.

<span></span>

> CLIENT_SIDE
>
> h3
>
> &nbsp;2. Add the Checkout Pro to your website

Add the MercadoPago.js V2 SDK to your project:

```html
// SDK MercadoPago.js V2
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Then, add the SDK credentials to enable its use and initialize the checkout using the ID from the preference created earlier and the ID (or selector) for the element where the payment button should be displayed:

[[[
```html
<script>
// Add the SDK credentials
  const mp = new MercadoPago('PUBLIC_KEY', {
        locale: 'en-US'
  });
  
  // Initialize the checkout
  mp.checkout({
    preference: {
        id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container', // Indicates the name of the class where the payment button will be displayed
      label: 'Pagar', // Changes the button label (optional)
    }
});
</script>
```
]]]

> NOTE
>
> Note
>
> Remember to replace the value **US** for your country in the field `locale`.

According to the example above, a payment button will be displayed and will be responsible for opening the Checkout Pro.

You can check out other ways to open the checkout in the [Customizations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/customizations) section.

> WARNING
>
> Important
>
> Do not forget to access the Checkout Pro from another browser or log out of your Mercado Pago account before testing it since you cannot make a payment with the same account you created the payment form.<br/>

## Sample project

Check out the [full integration example](http://github.com/mercadopago/checkout-payment-sample) available on GitHub for PHP or NodeJS to download a basic sample project for quick implementation of Checkout Pro on your website.

---

### Next step

> LEFT_BUTTON_REQUIRED_EN
>
> Test your integration with Checkout Pro
>
> Check if everything is properly working in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration)
