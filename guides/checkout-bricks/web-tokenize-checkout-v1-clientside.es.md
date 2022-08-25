# Como migrar desde Web Tokenize Checkout V1

Si tu integración utiliza Web Tokenize Checkout V1, sigue los pasos a continuación para migrar a Checkout Bricks.

> CLIENT_SIDE
>
> h2
>
> Recibir pagos con tarjeta

1. Encuentra en la estructura actual de tu integración el formulario que llama al Web Tokenize Checkout.

```html
<form action="https://www.mi-sitio.com/procesar-pago" method="POST">
 <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
   data-public-key="ENV_PUBLIC_KEY"
   data-transaction-amount="100.00">
 </script>
</form>
`````

2. Reemplaza este formulario con el tag que contendrá el Brick de Card Payment.

```html
<div id="paymentBrick_container"></div>
````

3. Agrega también la importación de la SDK JS.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
````

4. Ahora, agrega el script responsable de cargar el Brick.

```javascript
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

5. En el callback de la llamada `onSubmit` de Bricks, agrega la misma URL que utilizas en el parámetro `action` de tu formulario. Aquí es donde Bricks enviará los datos del formulario de pago. 


> CLIENT_SIDE
>
> h2
>
> Usuarios y tarjetas

> NOTE
>
> Nota
>
> El proceso de creación de usuarios y tarjetas no tiene diferencia entre Web Tokenize Checkout y Checkout Bricks.

### Recibir el pago de un usuario con tarjetas guardadas

Para recibir el pago de un usuario con tarjetas guardadas, es necesario migrar el usuario y las tarjetas a Checkout Bricks, que realizará el proceso de tokenización y enviará la información para generar el pago en el callback de `onSubmit`. Para hacerlo, sigue los pasos a continuación,

1. Encuentra en la estructura actual de tu integración el formulario que llama al Web Tokenize Checkout.

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

2. Reemplaza este formulario con el tag que contendrá el Brick de Card Payment.

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

Con esta configuración, será posible procesar el pago con las tarjetas guardadas.