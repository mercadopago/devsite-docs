# Integrate Checkout Pro

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

1.1 Add the <a href="https://www.mercadopago.com.br/developers/en/guides/online-payments/checkout-pro/previous-requirements#bookmark_pré-requisitos" target="_blank"> Mercado Pago SDK</a> in your project:

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
require 'mercadopago.rb'
```
```csharp
// Mercado Pago SDK
 using MercadoPago;
```
]]]

<br/><br/>1.2 Add the <a href="[FAKER][CREDENTIALS][URL]" target="_blank"> credentials</a> to enable the use of the Mercado Pago SDK:<br/>

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
require 'mercadopago.rb'

# Add Your credentials
$mp = MercadoPago.new('PROD_ACCESS_TOKEN')
```
```csharp
// Mercado Pago SDK
using MercadoPago;

// Add Your credentials
MercadoPago.SDK.AccessToken = "PROD_ACCESS_TOKEN";
```
]]]


<br/><br/>1.3 Set the preference according to your product or service:<br/>

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
require 'mercadopago.rb'

# Add Your credentials
$mp = MercadoPago.new('PROD_ACCESS_TOKEN')

# Create a preference object
preference_data = {
  "items": [
    {
      "title": "My Item",  
      "unit_price": 100,
      "quantity": 1
    }
  ]
}
preference = $mp.create_preference(preference_data)

# This value replaces the String "<%= @preference_id %>" in your HTML
@preference_id = preference["response"]["id"]
```
```csharp
// Mercado Pago SDK
using MercadoPago;

// Add Your credentials
MercadoPago.SDK.AccessToken = "PROD_ACCESS_TOKEN";

// Create a preference object
Preference preference = new Preference();

// Create a preference item
preference.Items.Add(
  new Item()
  {
    Title = "My Item",
    Quantity = 1,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
    UnitPrice = (decimal)75.56
  }
);
preference.Save()"
```
```curl
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="**PROD_ACCESS_TOKEN**"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
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

----[mlc, mco]----
> WARNING 
> 
> Change the unit_price value
> 
> The value of unit_price must be an integer in the countries Colombia and Chile.
------------

> NOTE
>
> Accept payments only from registered users
>
> If you want to accept payments only from registered users, with cards and money in Mercado Pago account, review [this section](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations/#bookmark_accept_payments_from_registered_users_only) for more information.

### 2. Add the checkout to your website

Finally, add the following code to show the payment button of your Checkout Pro in the place you want it to appear.

> If your site works on mobile, note that you need to configure the `back_urls` if you want to return to your site at the end of the payment. For more information, you can visit the [Advanced integration](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration/) section. 

[[[
```php
<form action="/payment-process" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id="<?php echo $preference->id; ?>">
  </script>
</form>
```
```node
<form method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id='<%= global.id %>'>
  </script>
</form>
```
```java
<form action="/payment-process" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id="${preference.id}">
  </script>
</form>
```
```ruby
<form action="/payment-process" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id="<%= @preference_id %>">
  </script>
</form>
```
```csharp
<form action="/payment-process" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id="@Html.DisplayFor(model => model.id)">
  </script>
</form>
```
]]]


> WARNING
>
> Important
>
> Do not forget to access from another browser or log out of your Mercado Pago account before testing it. You cannot make a payment with the same account you created the payment form.<br/>

#### Excellent! You finished your integration.
_Click on the link within your site and [test the integration of your Checkout Pro](https://www.mercadopago.com.br/developers/en/guides/online-payments/checkout-pro/test-integration/)_.<br/><br/>

---

### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](http://www.mercadopago.com.ar/developers/en/guides/online-payments/checkout-pro/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Accept payments from registered users only
>
> Allows payments only from users registered in Mercado Pago, with cards and money in account.
>
> [Registered users](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations/#bookmark_accept_payments_from_registered_users_only)
