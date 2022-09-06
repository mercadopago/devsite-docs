# Configure the integration with Mercado Pago Wallet

To configure Payment Brick integration to receive payments with Mercado Pago Wallet you need to follow the steps below. 

1. [Create preference](#bookmark_create_preference)
2. [Create container](#bookmark_create_container)
3. [Include and configure MercadoPago.js library](#bookmark_include_and_configure_mercadopago.js_library)
4. [Instantiate brick](#bookmark_instantiate_brick)
5. [Render brick](#bookmark_render_brick)

> The steps are performed on the backend or frontend. The **Client-Side** and **Server-Side** pills located immediately next to the title help you to identify which step is performed in which instance. <br/></br>
> <br/></br>
> And, to help, we've prepared a complete [code example](/developers/en/docs/checkout-bricks/payment-brick/code-example/wallet) of the Payment Brick configuration with Mercado Pago Wallet that you can use as a template.

> SERVER_SIDE
>
> h2
>
> Create preference

The first step to give the user the possibility to pay using the Mercado Pago Wallet is to create a preference in your backend. Add the [Mercado Pago SDK](/developers/en/docs/sdks-library/landing) and the necessary [credentials](/developers/en/guides/additional-content/credentials/credentials) to your project to enable the preference usage:

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

Then configure the preference according to your product or service:

----[mla, mlb, mlu, mpe, mlm]----

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
 "items": [
   {
     "id": "item-ID-1234",
     "title": "Meu produto",
     "quantity": 1,
     "unit_price": 75.76
   }
 ],
 "back_urls": {
     "success": "https://www.success.com",
     "failure": "http://www.failure.com",
     "pending": "http://www.pending.com"
 },
 "auto_return": "approved",
};
 
mercadopago.preferences.create(preference)
.then(function(response){
// This value is the preferenceId that will be sent to the brick at startup
 const preferenceId = response.body.id;
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

------------

> NOTE
>
> Important
>
> For more details on how to configure it, access the [Preferences](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences) section.<br/></br>
> <br/></br>
> Consider that when a user chooses to make a payment using the Mercado Pago Wallet, he will be redirected to the Mercado Pago page to complete the payment. Therefore, it is necessary to configure the `back_url`s if you want to return to your site at the end of the payment. For more information, visit the [Redirect buyer to your website](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirect_the_buyer_to_your_site) section.

> CLIENT_SIDE
>
> h2
>
> Create container

You will need to create a container to define where the brick will be placed on the screen. The creation of the container is done by inserting an element (for example, a div) in the HTML code of the page where the brick will be rendered (see the code below).

> NOTE
> 
> Attention
>
> The value shown in the `id` property below is just an example and can be altered, however, it should always match the `id` indicated in the render.

```html
  <div id="PaymentBrick_container"></div>
```

> CLIENT_SIDE
>
> h2
>
> Include and configure MercadoPago.js library

**Use our official library to access Mercado Pago features** from your frontend securely.

> NOTE
>
> Attention
>
> JS code can be included in a `< script >` tag or a separate JS file.

You will need to install the SDK by adding the following in your HTML code:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Next, initialize the SDK by setting your [public key](/developers/en/guides/additional-content/credentials/credentials)using JavaScript code as follows:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```

> CLIENT_SIDE
>
> h2
>
> Instantiate brick

With the container created and our SDK JS installed, the next step is to instantiate the brick builder, which will allow generating the brick. To create the brick instance, insert the code below after the previous step.

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Attention
>
> During brick instantiation, different errors may appear. For more details on each of them, see the [Possible Errors](/developers/en/docs/checkout-bricks/additional-content/possible-errors) section.

> CLIENT_SIDE
>
> h2
>
> Render brick

Once instantiated, the brick can be rendered and have all its configurations compiled so that the final structure of the brick is generated.

To render the brick, insert the following code after the previous step and fill in the attributes according to the comments highlighted in this same code.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
 initialization: {
   amount: 100, // amount of processing to be performed
   preferenceId: 'abcd1234', // preferenceId generated in the backend
 },
 callbacks: {
   onReady: () => {
     // callback called when Brick is ready
   },
   onSubmit: ({ paymentType, formData }) => {
     // callback called when clicking on the data submission button
  
     if (paymentType === 'wallet_purchase') {
       // in this case, the user was redirected to
        // the Mercado Pago page to make the payment
     }
   },
   onError: (error) => {
     // callback called for all Brick error cases
   },
 },
};
 
 window.paymentBrickController = await bricksBuilder.create(
   'payment',
   'paymentBrick_container',
   settings
 );
};
renderPaymentBrick(bricksBuilder); 
```

The result of rendering the brick should be like the image below:”

![payment-brick](checkout-bricks/card-form-en.png)

> WARNING
>
> Attention
>
> For an effective Brick control, the function submitted in `onSubmit` must always return a Promise. You should call `resolve()` only if your backend processes was successful. Call `reject()` if an error occurs. The `reject()` will make the brick allow the fields to be filled in again and a new payment attempt possible. Also, when calling the `resolve()` method inside the `onSubmit` Promise, the brick does not allow new payments. If you want to make a new payment, you must create a new Brick instance.