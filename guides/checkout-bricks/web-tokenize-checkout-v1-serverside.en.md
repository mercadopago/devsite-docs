> SERVER_SIDE
>
> h2
>
> Receive payments with cards

Checkout Bricks makes it easy to send payments to Mercado Pago from the backend. The data that Checkout Bricks receives in the `onSubmit` function is exactly what is needed to call the Mercado Pago Payments API.

1. Replace this code in your backend:

```JavaScript
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment_data = {
 transaction_amount: 100,
 token: token,
 description: 'Blue shirt',
 installments: installments,
 payment_method_id: payment_method_id,
 issuer_id: issuer_id,
 payer: {
   email: 'john@yourdomain.com'
 }
};
 
// Guarda y postea el pago
mercadopago.payment.save(payment_data).then(function (data) {
 // ...   
 // Imprime el estado del pago
 Console.log(data.status);
}).catch(function (error) {
 // ...
});
````

Replace it with:

```JavaScript
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");
 
mercadopago.payment.save(req.body).then(function (data) {
 // ...   
 // Imprime el estado del pago
 Console.log(data.status);
}).catch(function (error) {
 // ...
});
`````


> PREV_STEP_CARD_EN
>
> Client side
>
> Configure how to receive card payments on the client-side of your integration.
>
> [Client-side](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v1/client-side)