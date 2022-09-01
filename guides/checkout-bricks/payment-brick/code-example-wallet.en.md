# Code example

To facilitate and optimize your integration process, check below a complete example of how to include the Mercado Pago Wallet as a means of payment with Payment Brick and how, after performing the integration, to send the payment to Mercado Pago. 

> SERVER_SIDE
>
> h2
>
> Create your preference

```node
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
// Add the credentials
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Create a preference object
let preference = {
 items: [
   {
     title: 'My product',
     unit_price: 100,
     quantity: 1,
   }
 ]
};
```

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