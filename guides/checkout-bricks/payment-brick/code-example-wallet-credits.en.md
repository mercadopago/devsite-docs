# Code example (Mercado Pago Wallet and Installments without card)

To facilitate and optimize your integration process, check below a complete example of how to include the Mercado Pago Wallet and Installments without card as a means of payment with Payment Brick. 

> SERVER_SIDE
>
> h2
>
> Create your preference

[[[
```php
<?php
// Mercado Pago SDK
require __DIR__ .  '/vendor/autoload.php';
// Add credentials
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>

// Create a preference object
$preference = new MercadoPago\Preference();

// Create an item in the preference
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);

// the $preference->purpose = 'wallet_purchase'; only allow logged in payments
// to allow guest payments you can omit this property
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
// Add credentials
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Create a preference object
let preference = {
  // the "purpose": "wallet_purchase" only allows logged payments
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
// Mercado Pago SDK
import com.mercadopago.MercadoPagoConfig;
// Add credentials
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

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
  // the .purpose('wallet_purchase') only allows logged payments
  // to allow guest payments you can omit this line
  .purpose('wallet_purchase')
  .items(items).build();

client.create(request);
```
```ruby
# Mercado Pago SDK
require 'mercadopago'
# Add credentials
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

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
// Mercado Pago SDK
 using MercadoPago.Config;
 // Add credentials
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

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
# Mercado Pago SDK
import mercadopago
# Add credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

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

> CLIENT_SIDE
>
> h2
>
> Configure the integration

> NOTE
>
> Attention
>
> If it is necessary to close and reopen the Brick (when a user returns to the cart to change some purchase detail, for example) it is necessary to eliminate the current instance of the Brick and create a new one when it is necessary to show the Brick again.
> To do so, use the `unmount` method available in the Brick controller, in this case: `cardPaymentBrickController.unmount()`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bricks</title>
</head>
<body>
<div id="paymentBrick_container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
 const mp = new MercadoPago('YOUR_PUBLIC_KEY');
 const bricksBuilder = mp.bricks();
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
</script>
</body>
</html>
```

> Payments with **Mercado Pago Wallet and Installments without card** do not need to be sent via the backend. If the user selects this option as a means of payment, the `preferenceId` sent at the initialization of the Brick is responsible for redirecting the buyer to the Mercado Pago website, where the payment will be made directly on our website. To redirect the buyer back to your site, you can configure the `back_urls` as described [in this article.](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirect_the_buyer_to_your_site)