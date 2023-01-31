# Configure the integration with Mercado Pago Wallet and Installments without card

To configure Payment Brick integration to receive payments with **Mercado Pago Wallet and Installments without card** you need to follow the steps below. 

1. [Create preference](#bookmark_create_preference)
2. [Create container](#bookmark_create_container)
3. [Include and configure MercadoPago.js library](#bookmark_include_and_configure_mercadopago.js_library)
4. [Instantiate Brick](#bookmark_instantiate_brick)
5. [Render Brick](#bookmark_render_brick)
6. [Manage payment options](#bookmark_manage_payment_options)

> The steps are performed on the backend or frontend. The **Client-Side** and **Server-Side** pills located immediately next to the title help you to identify which step is performed in which instance. <br/></br>
> <br/></br>
> And, to help, we've prepared a complete [code example](/developers/en/docs/checkout-bricks/payment-brick/code-example/wallet-credits) of the Payment Brick configuration with **Mercado Pago Wallet and Installments without card** that you can use as a template.

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
> For more details on how to configure it, access the [Preferences](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences) section.<br/></br>
> <br/></br>
> Consider that when a user chooses to make a payment using the Mercado Pago Wallet, he will be redirected to the Mercado Pago page to complete the payment. Therefore, it is necessary to configure the `back_urls` if you want to return to your site at the end of the payment. For more information, visit the [Redirect buyer to your website](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirect_the_buyer_to_your_site) section.

> CLIENT_SIDE
>
> h2
>
> Create container

You will need to create a container to define where the Brick will be placed on the screen. The creation of the container is done by inserting an element (for example, a div) in the HTML code of the page where the Brick will be rendered (see the code below).

> NOTE
> 
> Attention
>
> The value shown in the `id` property below is just an example and can be altered, however, it should always match the `id` indicated in the render.

```html
  <div id="paymentBrick_container"></div>
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
> Instantiate Brick

With the container created and our SDK JS installed, the next step is to instantiate the Brick builder, which will allow generating the Brick. To create the Brick instance, insert the code below after the previous step.

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Attention
>
> During Brick instantiation, different errors may appear. For more details on each of them, see the [Possible Errors](/developers/en/docs/checkout-bricks/additional-content/possible-errors) section.

> CLIENT_SIDE
>
> h2
>
> Render Brick

Once instantiated, the Brick can be rendered and have all its configurations compiled so that the final structure of the Brick is generated.

> NOTE
>
> Attention
>
> If it is necessary to close and reopen the Brick (when a user returns to the cart to change some purchase detail, for example) it is necessary to eliminate the current instance of the Brick and create a new one when it is necessary to show the Brick again.
> To do so, use the `unmount` method available in the Brick controller, in this case: `cardPaymentBrickController.unmount()`.

To render the Brick, insert the following code after the previous step and fill in the attributes according to the comments highlighted in this same code.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
 initialization: {
   amount: 100, // total amount to be paid
   preferenceId: '<PREFERENCE_ID>', // preferenceId generated in the backend
 },
 customization: {
   paymentMethods: {
     mercadoPago: 'all',
   },
 },
 callbacks: {
   onReady: () => {
      /*
       Callback llamado cuando Brick está listo
       Aquí puedes ocultar loadings de su sitio, por ejemplo.
      */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback called when clicking on the data submission button
     // in this case, the user was redirected to
     // the Mercado Pago page to make the payment
   },
   onError: (error) => {
     // callback called for all Brick error cases
     console.error(error);
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

The result of rendering the Brick should be like the image below:”

----[mlb]---- 
![payment-Brick-wallet-credits-mlb](checkout-bricks/payment-brick-wallet-credits-mlb-en.jpg)

------------
----[mla]---- 
![payment-Brick-wallet-credits-mla](checkout-bricks/payment-brick-wallet-credits-mla-en.jpg)

------------
----[mlm]---- 
![payment-Brick-wallet-credits-mlm](checkout-bricks/payment-brick-wallet-credits-mlm-en.jpg)

------------

> CLIENT_SIDE
>
> h2
>
> Manage payment options

The code snippet responsible for including payments with Mercado Pago Wallet and Installment without credit card as payment method is the following:

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: 'all',
   }
 }
}
```

The `mercadoPago` property accepts 2 types of variable, `string` and `string[]`. In the example above, payments with **Mercado Pago Wallet and Installment without card** will be accepted.

If you only want to select one of the two options, instead of the string `all`, you can pass an array with just the desired medium (`wallet_purchase` or `onboarding_credits`). As in the example below, where only payments with Mercado Pago Wallet will be accepted.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: ['wallet_purchase'], // ['onboarding_credits']
   }
 }
}
```