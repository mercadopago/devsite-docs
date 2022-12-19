# Preference in onSubmit

To facilitate and optimize your integration process, check below a complete example of how to include Wallet Brick on your website.

> CLIENT_SIDE
>
> h2
>
> Configure the integration

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bricks</title>
  </head>
  <body>
    <div id="walletBrick_container"></div>
    <script src="https://sdk.mercadopago.com/js/v2"></script>
    <script>
      const mp = new MercadoPago('YOUR_PUBLIC_KEY');
      const bricksBuilder = mp.bricks();
      const renderWalletBrick = async (bricksBuilder) => {
        const settings = {
          initialization: {
             preferenceId: '<PREFERENCE_ID>', // preferenceId generated in backend
          },
          callbacks: {
            onReady: () => {
              /*
                Callback called when Brick is ready.
                Here you can hide loadings from your site, for example.
              */
            },
            onSubmit: ({ selectedPaymentMethod, formData }) => {
              // callback called when clicking Wallet Brick
              // this is possible because the brick is a button
            },
            onError: (error) => {
              // callback called for all Brick error cases
              console.error(error);
            },
          },
        };
        window.walletBrickController = await bricksBuilder.create(
          'wallet',
          'walletBrick_container',
          settings
        );
      };
      renderWalletBrick(bricksBuilder);
    </script>
  </body>
</html>
```

> SERVER_SIDE
>
> h2
>
> Create your preference

----[mla, mlb, mlm]----
The code examples below set the **purpose of preference** to `wallet_purchase`, but it is also possible to set it to `onboarding_credits`. Understand the difference between the two:

* **wallet_purchase**: the user must log in when redirected to his Mercado Pago account.
* **onboarding_credits**: after logging in, the user will see the pre-selected credit payment option in his Mercado Pago account.

------------
----[mlu, mlc, mco, mpe]----
The code examples below set the **purpose of preference** to `wallet_purchase`, but it is also possible to set it to `onboarding_credits`, where the user must log in when redirected to his Mercado Pago account.

------------

[[[
```php
<?php
// Create a preference object
$preference = new MercadoPago\Preference();
 
// Create an item in the preference
$item = new MercadoPago\Item();
$item->title = 'My product';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
 
// o $preference->purpose = 'wallet_purchase'; allows only logged payments
// to allow guest payments, you can omit this property
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
// Create a preference object
let preference = {
  // the "purpose": "wallet_purchase" allows only logged payments
  // to allow guest payments, you can omit this property
  "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "My product",
      "quantity": 1,
      "unit_price": 75.76
    }
  ]
};
 
mercadopago.preferences.create(preference)
  .then(function (response) {
    // This value is the preferenceId that will be sent to Brick on startup
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
       .title("My product")
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
# Create a preference object
preference_data = {
  # the purpose: 'wallet_purchase', allow only logged payments
   # to allow guest payments you can omit this property
  purpose: 'wallet_purchase',
  items: [
    {
      title: 'My product',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
 
# This value is the preferenceId you will use in the HTML on startup in Brick
@preference_id = preference['id']
```
```csharp
// Create the preference request object
var request = new PreferenceRequest
{
  // o Purpose = 'wallet_purchase', allow only logged payments
  // to allow guest payments you can omit this property
    Purpose = "wallet_purchase",
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "My product",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56,
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
  # o "purpose": "wallet_purchase", allow only logged payments
  # to allow guest payments you can omit this property
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "My item",
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