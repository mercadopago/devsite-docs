# Integrate Checkout Pro

Integrating Mercado Pago's Checkout Pro allows you to charge your customers through our web form from any device in a simple, fast and secure way.

Use our [sample projects](#bookmark_sample_projects) for a complete integration. You can adapt them according to your needs.

## How do I integrate?

![Integration](/images/web-payment-checkout/flow-v2.png)

1. Generate your preference

	1.1 Add the SDK downloaded from Mercado Pago in your project.

	1.2 Add the credentials to enable the use of the Mercado Pago SDK.

	1.3 Set the preference according to your product or service.

2. Add the checkout to your website

## Steps to integrate

Installing the Checkout Pro consists of two steps:

### 1. Generate your preference

Write the following code consisting of three parts:

1.1 Add the [Mercado Pago SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/previous-requirements#bookmark_previous_requirements) in your project:

[[[
```php
<?php
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';
?>
```
```node
// Mercado Pago SDK
const mercadopago = require ('mercadopago');
```
```java
// Mercado Pago SDK
import com.mercadopago.MercadoPago;
```
```ruby
# Mercado Pago SDK
require 'mercadopago'
```
```csharp
// Mercado Pago SDK
 using MercadoPago.Config;
```
```python
# Mercado Pago SDK
import mercadopago
```
]]]

<br/><br/>1.2 Add the [credentials]([FAKER][CREDENTIALS][URL]) to enable the use of the Mercado Pago SDK:<br/>

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
import com.mercadopago.MercadoPago;

// Add Your credentials
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");
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


<br/><br/>1.3 Set the preference according to your product or service:<br/>

----[mla, mlb, mlu, mpe, mlm]----

> Note that you need to configure the `back_urls` if you want to return to your site at the end of the payment. For more information, you can visit the [Advanced integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/advanced-integration#bookmark_return_url) section. 

[[[
 ```php
<?php
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';

// Add Your credentials
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

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
// Mercado Pago SDK
const mercadopago = require ('mercadopago');

// Add Your credentials
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

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
// Mercado Pago SDK
import com.mercadopago.MercadoPago;

// Add Your credentials
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");

// Create a preference object
Preference preference = new Preference();

// Create a preference item
Item item = new Item();
item.setTitle("My Item")
    .setQuantity(1)
    .setUnitPrice((float) 75.56);
preference.appendItem(item);
preference.save();
```
```ruby
# Mercado Pago SDK
require 'mercadopago'

# Add Your credentials
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

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
// Mercado Pago SDK
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;

// Add Your credentials
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

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
# Mercado Pago SDK
import mercadopago

# Add Your credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

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
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';

// Add Your credentials
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

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
// Mercado Pago SDK
const mercadopago = require ('mercadopago');

// Add Your credentials
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

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
// Mercado Pago SDK
import com.mercadopago.MercadoPago;

// Add Your credentials
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");

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
# Mercado Pago SDK
require 'mercadopago'

# Add Your credentials
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

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
// Mercado Pago SDK
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;

// Add Your credentials
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

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
# Mercado Pago SDK
import mercadopago

# Add Your credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

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
> Accept payments only from registered users
>
> If you want to accept payments only from registered users, with cards and money in Mercado Pago account, review [this section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations/#bookmark_accept_payments_from_registered_users_only) for more information.

### 2. Add the checkout to your website

Finally, add the following code to show the payment button of your Checkout Pro in the place you want it to appear.

[[[
```php
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="<?php echo $preference->id; ?>">
</script>
```
```node
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id='<%= global.id %>'>
</script>
```
```java
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="${preference.id}">
</script>
```
```ruby
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="<%= @preference_id %>">
</script>
```
```csharp
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="@Html.DisplayFor(model => model.id)">
</script>
```
```python
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="{{ preference_id }}">
</script>
```
]]]

> WARNING
>
> Important
>
> This documentation uses the old library version. To see the new version, go to [Integrate Checkout Pro section with MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/integration).

> WARNING
>
> Important
>
> Do not forget to access from another browser or log out of your Mercado Pago account before testing it. You cannot make a payment with the same account you created the payment form.<br/>

#### Excellent! You finished your integration.
_Click on the link within your site and [test the integration of your Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration)_.<br/><br/>

## Sample projects

> GIT
>
> Checkout Pro
>
> Use our [complete integration examples](http://github.com/mercadopago/checkout-payment-sample) on GitHub in PHP or NodeJS to download instantly.

---

### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Accepts payments by Mercado Pago wallet
>
> It allows payments only from Mercado Pago registered users, with cards and available balance.
>
> [Registered users](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations/#bookmark_accept_payments_from_registered_users_only)
