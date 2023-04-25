# How to migrate from Web Tokenize Checkout V1

If your integration uses Web Tokenize Checkout V1, follow the steps below to migrate to Checkout Bricks.

> CLIENT_SIDE
>
> h2
>
> Receive payments with cards

1. Find in the current structure of your integration the form that calls the Web Tokenize Checkout.

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

4. Now, add the script responsible for loading the Brick.

```javascript
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
const renderPaymentBrick = async (bricksBuilder) => {
   const settings = {
       initialization: {
           amount: 100, //valor do processamento a ser realizado
           payer: {
           email: '<PAYER_EMAIL_HERE>',
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

> CLIENT_SIDE
>
> h2
>
> Users and cards

> NOTE
>
> Note
>
> The user and card creation process has no difference between Web Tokenize Checkout and Checkout Bricks.

### Receive payments from a user with saved cards

To receive payments from a user with saved cards, it is necessary to migrate the user and the cards to Checkout Bricks, which will perform the tokenization process and send the information to generate the payment in the `onSubmit` callback. To do so, follow the steps below.

1. Find in the current structure of your integration the form that calls the Web Tokenize Checkout.

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

2. Replace this form with the tag that will contain the Card Payment Brick.

```javascript
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