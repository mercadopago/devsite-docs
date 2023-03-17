# Create preference

To create a preference in your backend, add the [Mercado Pago SDK](/developers/en/docs/sdks-library/landing) and the necessary [credentials](/developers/en/guides/additional-content/credentials/credentials) to your project to enable the preference usage:

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

----[mla, mlb, mlm]----
Then set the preference according to your product or service. 

The code examples below set the **purpose of preference** to `wallet_purchase`, but it is also possible to set it to `onboarding_credits`. Understand the difference between the two:

* **wallet_purchase**: the user must log in when redirected to his Mercado Pago account.
* **onboarding_credits**: after logging in, the user will see the pre-selected credit payment option in his Mercado Pago account.

------------
----[mlu, mlc, mco, mpe]----
Then set the preference according to your product or service. 

The code examples below set the **purpose of preference** to `wallet_purchase`, where the user must log in when redirected to his Mercado Pago account.

------------

[[[
 ```php
<?php
// Create a preference object
$preference = new MercadoPago\Preference();

// Create an item in the preference
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);

// o $preference->purpose = 'wallet_purchase'; only allow logged in payments
// to allow guest payments you can omit this property
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
// Create a preference object
let preference = {
  // o "purpose": "wallet_purchase" only allows logged payments
  // to allow guest payments you can omit this property
  "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "Meu produto",
      "quantity": 1,
      "unit_price": 75.76
    }
  ]
};

mercadopago.preferences.create(preference)
  .then(function (response) {
    // This value is the preferenceId that will be sent to the Brick at startup
    const preferenceId = response.body.id;
  }).catch(function (error) {
    console.log(error);
  });
```
```java
// Create a preference object
PreferenceClient client = new PreferenceClient();

// Create an item in the preference
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder()
  // o .purpose('wallet_purchase') only allows logged payments
  // to allow guest payments you can omit this line
  .purpose('wallet_purchase')
  .items(items).build();

client.create(request);
```
```ruby
# Create a preference object
preference_data = {
  # the purpose: 'wallet_purchase', allows only logged payments
  # to allow guest payments you can omit this property
  purpose: 'wallet_purchase',
  items: [
    {
      title: 'Meu produto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# This value is the preferenceId you will use in the HTML on Brick startup
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
  // the Purpose = 'wallet_purchase', allows only logged payments.
   // to allow guest payments you can omit this property
    Purpose = 'wallet_purchase',
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56m,
        },
    },
};

// Create the preference using the client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Create an item in the preference
preference_data = {
  # the "purpose": "wallet_purchase", allows only logged in payments
  # to allow guest payments, you can omit this property
    "purpose": "wallet_purchase",
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
  "purpose": "wallet_purchase",
  "items": [
      {
          "title": "My product",
          "quantity": 1,
          "unit_price": 75.76
      }
  ]
}'
```
]]]

> NOTE
>
> Important
>
> For more details on how to configure it, access the [Preferences](/developers/en/docs/checkout-bricks/wallet-brick/additional-customization/preferences) section.<br/></br>
> <br/></br>
> Consider that when a user chooses to make a payment using the Mercado Pago Wallet, he will be redirected to the Mercado Pago page to complete the payment. Therefore, it is necessary to configure the `back_urls` if you want to return to your site at the end of the payment. For more information, visit the [Redirect buyer to your website](/developers/en/docs/checkout-bricks/wallet-brick/additional-customization/preferences#bookmark_redirect_the_buyer_to_your_site) section.