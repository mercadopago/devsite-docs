# Migrar desde Tokenizer V2

Si su integración usa Tokenizer V1, siga los pasos a continuación para migrar a Checkout Bricks.

> CLIENT_SIDE
>
> h3
>
> Recibir pagos con tarjeta

1. Busca en tu estructura actual el formulario que llama al tokenizer:

```HTML
<div class=tokenizer-container>
<script>
// Agrega credenciales de SDK 
const mp = new MercadoPago('PUBLIC_KEY', {locale: 'es-AR'});
 
// Inicializa el Web Tokenize Checkout
mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.mi-sitio.com/procesar-pago'
  },
 render: {
    container: '.tokenizer-container', // Indica dónde se mostrará el botón
    label: 'Pagar' // Cambia el texto del botón de pago (opcional)
 }
});
</script>
</div>
`````

2. Reemplace este formulario con la etiqueta que contendrá el Brick de Card Payment.

```HTML
<div id="paymentBrick_container"></div>
````

3. Agregue el script responsable de cargar el Brick.

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
`````

4. En la devolución de llamada `onSubmit` de Brick, agregue la misma URL que usó en el parámetro `action` de su formulario, aquí es donde el Brick enviará los datos del formulario de pago.

> SERVER_SIDE
>
> h3
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

## Usuarios y tarjetas

### Recibe el pago de un usuario con tarjetas guardadas

Para recibir el pago de un usuario con tarjetas guardadas, es necesario mudar el usuario y las tarjetas a Bricks, que realizará el proceso de tokenización y enviará la información para generar el pago en el callback de `onSubmit`.

1. Reemplaza en tu código:

```HTML
<script>
  mp.checkout({
    tokenizer: {
        totalAmount: 4000,
        backUrl: 'https://www.mi-sitio.com/process',
        savedCards: {
            cardIds: '1518023392627,1518023332143' // IDs de las tarjetas
            customerId: '209277402-FqRqgEc3XItrxs' // Tu customer ID
        }
    },
    render: {
        container: ‘.tokenizer-container’,
        label: ‘Pagar’
    }
  });
</script>
````
Para:

```HTML
<script>
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
</script>
`````

Con esta configuración, será posible procesar el pago con las tarjetas guardadas.
