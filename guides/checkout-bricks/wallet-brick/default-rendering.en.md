# Default rendering

> WARNING
>
> Important
>
> To perform Wallet Brick rendering, first perform the [initialization steps](/developers/en/docs/checkout-bricks/common-initialization) shared among all Bricks. 

## Configure the Brick

Create Brick's startup configuration.

[[[
```Javascript
const renderWalletBrick = async (bricksBuilder) => {
 const settings = {
   callbacks: {
     onReady: () => {
     /*
      Callback called when Brick is ready.
      Here you can hide loadings from your site, for example.
     */
   },
   onSubmit: (formData) => {
     // callback called when clicking Wallet Brick
     // this is possible because the Brick is a button
     // at this time of submit, you must create the preference
     const yourRequestBodyHere = {
       items: [
         {
           id: '202809963',
           title: 'Dummy title',
           description: 'Dummy description',
           quantity: 1,
           unit_price: 10,
         },
       ],
       purpose: 'wallet_purchase',
     };
     return new Promise((resolve, reject) => {
       fetch('/create_preference', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
           // resolve the promise with the ID of the preference
           resolve(response.preference_id);
         })
         .catch((error) => {
           // handle error response when trying to create preference
           reject();
         });
     });
   },
 },
};
window.walletBrickController = await bricksBuilder.create(
   'wallet',
   'walletBrick_container',
   settings,
  );
 
};
renderWalletBrick(bricksBuilder);
```
```react-jsx
const onSubmit = async (formData) => {
 // callback called when clicking Wallet Brick
 // this is possible because the Brick is a button
 // at this time of submit, you must create the preference
 const yourRequestBodyHere = {
   items: [
     {
       id: '202809963',
       title: 'Dummy title',
       description: 'Dummy description',
       quantity: 1,
       unit_price: 10,
     },
   ],
   purpose: 'wallet_purchase',
 };
 return new Promise((resolve, reject) => {
   fetch('/create_preference', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(yourRequestBodyHere),
   })
     .then((response) => response.json())
     .then((response) => {
       // resolve the promise with the ID of the preference
       resolve(response.preference_id);
     })
     .catch((error) => {
       // handle error response when trying to create preference
       reject();
     });
 });
};


const onError = async (error) => {
 // callback called for all Brick error cases
 console.log(error);
};


const onReady = async () => {
 /*
   Callback called when Brick is ready.
   Here you can hide loadings from your site, for example. 
 */
};
```
]]]

> WARNING
> 
> Attention
>
> Whenever the user leaves the screen where some Brick is displayed, it is necessary to destroy the current instance with the command `window.walletBrickController.unmount()`. When entering again, a new instance must be generated.

This preference _onSubmit_ creation flow is designed for sellers who have one-click flows, if you want, you can also send preference on startup. See more information in the [Preference on startup](/developers/en/docs/checkout-bricks/wallet-brick/advanced-features/preference-startup) section.

## Render the Brick

Once the configurations are created, enter the code below to render the brick.

> NOTE
>
> Important
>
> El id `walletBrick_container` de la _div html_ abajo debe corresponder que el valor enviado en el metodo create() de la etapa anterior.

[[[
```html
<div id="walletBrick_container"></div>
```
```react-jsx
import { Wallet } from '@mercadopago/sdk-react';


<Wallet
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]

The result of rendering the Brick should blook like the image below, presenting a text and a standard visual.

<center>

![wallet-brick-render](checkout-bricks/wallet-brick-render-en.png)

</center>

> If you want to change the text and the standard visual of the Brick, check the sections [Change texts](/developers/en/docs/checkout-bricks/wallet-brick/visual-customizations/change-texts) and [Change appearance,](/developers/en/docs/checkout-bricks/wallet-brick/visual-customizations/change-appearance) respectively.

## Enable payment with Mercado Pago

To use a payment method (`paymentMethods`) of the "mercadoPago" type, a preference must be sent during Brick initialization, replacing the value `PREFERENCE_ID` by the ID of the preference created.

To create a preference in your backend, add the [Mercado Pago SDK](/developers/en/docs/sdks-library/landing) and the necessary [credentials](/developers/en/guides/additional-content/your-integrations/credentials) to your project to enable the preference usage:

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
> For more details on how to configure it, access the [Preferences](/developers/en/docs/checkout-bricks/wallet-brick/advanced-features/preferences) section.<br/></br>
> <br/></br>
> Consider that when a user chooses to make a payment using the Mercado Pago Wallet, he will be redirected to the Mercado Pago page to complete the payment. Therefore, it is necessary to configure the `back_urls` if you want to return to your site at the end of the payment. For more information, visit the [Redirect buyer to your website.](/developers/en/docs/checkout-bricks/wallet-brick/advanced-features/preferences#bookmark_redirect_the_buyer_to_your_site) section