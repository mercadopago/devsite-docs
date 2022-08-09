> SERVER_SIDE
>
> h2
>
> Receber pagamentos com cartão

O Bricks facilita o envio do pagamento ao MercadoPago pelo Backend. Os dados recebidos pelo Brick na função `onSubmit` são exatamente o necessário para chamar a API de Payment do Mercado Pago. 

1. Substitua em seu backend:

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
Para:

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

> PREV_STEP_CARD_PT
>
> Client-side
>
> Configure como receber pagamentos com cartão no client-side de sua integraçao.
>
> [Client-side](/developers/pt/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v2/client-side)