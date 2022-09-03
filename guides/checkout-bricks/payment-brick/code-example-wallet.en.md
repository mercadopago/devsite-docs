# Code example

To facilitate and optimize your integration process, check below a complete example of how to include the Mercado Pago Wallet as a means of payment with Payment Brick. 

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

> CLIENT_SIDE
>
> h2
>
> Configure Brick Integration

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
</script>
</body>
</html>
```

> After the user is redirected to the Mercado Pago page to make the payment, you can be notified about the result of the transaction by registering the `back_urls`, as explained in [Preferences](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences).
>
> Payments with **Mercado Pago Wallet** do not need to be sent via the backend. If the user selects this option as a means of payment, the `preferenceId` sent at the initialization of the brick is responsible for redirecting the buyer to the Mercado Pago website, where the payment will be made directly on our website. To redirect the buyer back to your site, you can configure the `back_urls` as described [in this article](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirect_the_buyer_to_your_site).