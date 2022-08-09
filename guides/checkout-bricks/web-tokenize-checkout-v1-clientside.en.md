# Migrate from Web Tokenize Checkout V1

If your integration uses Web Tokenize Checkout V1, follow the steps below to migrate to Checkout Bricks.

## Card payments

> CLIENT_SIDE
>
> h3
>
> Receive payments with cards

1. Find in your current structure the form that calls the tokenizer.

```html
<form action="https://www.mi-sitio.com/procesar-pago" method="POST">
 <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
   data-public-key="ENV_PUBLIC_KEY"
   data-transaction-amount="100.00">
 </script>
</form>
`````

2. Replace this form with the tag that will contain the Card Payment Brick.

```html
<div id="paymentBrick_container"></div>
````

3. Also add SDK JS import.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
````

4. Now add the script responsible for loading the Brick.

```JavaScript
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
const renderPaymentBrick = async (bricksBuilder) => {
   const settings = {
       initialization: {
           amount: 100, //valor do processamento a ser realizado
           payer: {
           email: 'test@mail.com',
       },
       },
       style: {
           theme: 'default' // | 'dark' | 'bootstrap' | 'flat'
       },
       callbacks: {
           onReady: () => {
           // callback chamado quando o Brick estiver pronto
           },
           onSubmit: ({paymentType, formData}) => {
           // callback chamado o usuário clicar no botão de submissão dos dados
           // ejemplo de envío de los datos recolectados por el Brick a su servidor
           return new Promise((resolve, reject) => {
               fetch("/processar-pago", {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json",
                   },
                   body: JSON.stringify(formData)
               })
               .then((response) => {
                   // receber o resultado do pagamento
                   resolve();
               })
               .catch((error) => {
                   // lidar com a resposta de erro ao tentar criar o pagamento
                   reject();
               })
               });
           },
           onError: (error) => {
           // callback chamado para todos os casos de erro do Brick
           },
       },
   };
   window.cardPaymentBrickController = await bricksBuilder.create('payment', 'paymentBrick_container', settings);
};
renderPaymentBrick(bricksBuilder);
````

5. In the callback of the Bricks `onSubmit` call, add the same URL that you use in the `action` parameter of your form. This is where Bricks will send the payment form data.


## Users and cards

The user and card creation process has no difference between Tokenizer and Brick.

### Receive or pay from a user with saved cards

To receive payment from a user with saved cards, it is necessary to pass the user and the cards to Checkout Bricks, which will perform the tokenization process and send the information to generate the payment in the `onSubmit` callback.

Replace in your code:

 ```html
<form action="/procesar-pago" method="POST">
   <script
     src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
     data-public-key="ENV_PUBLIC_KEY"
     data-transaction-amount="100.00"
     data-customer-id="209277402-FqRqgEc3XItrxs"
     data-card-ids="1518023392627,1518023332143">
   </script>
 </form>
 ````

For:

```JavaScript
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
const renderCardPaymentBrick = async (bricksBuilder) => {
   const settings = {
       initialization: {
           amount: 100, //valor do processamento a ser realizado
           payer: {
           customer_id: "209277402-FqRqgEc3XItrxs",
	card_ids: [“1518023392627”,”1518023332143”]
       },
       },
       style: {
           theme: 'default' // | 'dark' | 'bootstrap' | 'flat'
       },
       callbacks: {
           onReady: () => {
           // callback chamado quando o Brick estiver pronto
           },
           onSubmit: ({paymentType, formData}) => {
           // callback chamado o usuário clicar no botão de submissão dos dados
           // ejemplo de envío de los datos recolectados por el Brick a su servidor
           return new Promise((resolve, reject) => {
               fetch("/processar-pago", {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json",
                   },
                   body: JSON.stringify(formData)
               })
               .then((response) => {
                   // receber o resultado do pagamento
                   resolve();
               })
               .catch((error) => {
                   // lidar com a resposta de erro ao tentar criar o pagamento
                   reject();
               })
               });
           },
           onError: (error) => {
           // callback chamado para todos os casos de erro do Brick
           },
       },
   };
   window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
};
renderCardPaymentBrick(bricksBuilder);
````

With this configuration, it will be possible to process the payment with the saved cards.

> PREV_STEP_CARD_EN
>
> How to migrate to Checkout Bricks
>
> Learn how to migrate your integration from another product to Checkout Bricks.
>
> [How to migrate to Checkout Bricks](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate)

> NEXT_STEP_CARD_EN
>
> Server-side
>
> Configurate how to receive payments with cards on the server-side of your integration.
>
> [Server-side](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v1/server-side)