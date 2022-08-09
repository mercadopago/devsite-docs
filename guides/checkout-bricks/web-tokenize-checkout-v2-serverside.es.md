> SERVER_SIDE
>
> h2
>
> Recibir pagos con tarjeta

Brick facilita el envío de pagos a MercadoPago a través del Backend. Los datos que recibe Brick en la función `onSubmit` son exactamente los que se necesitan para llamar a la API de Pagos de Mercado Pago.

1. Reemplaza en tu backend:

```NodeJS
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

Por lo siguiente:

```NodeJS
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");
 
mercadopago.payment.save(req.body).then(function (data) {
 // ...   
 // Imprime el estado del pago
 Console.log(data.status);
}).catch(function (error) {
 // ...
});
````

> PREV_STEP_CARD_ES
>
> Client-side
>
> Configura cómo recibir pagos con tarjetas en el client-side de tu integración.
>
> [Client-side](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v2/client-side)