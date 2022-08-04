# Migrar do Web Tokenize Checkout V1

Se sua integração estiver usando a V1 do Web Tokenize Checkout, siga os passos abaixo para migrar para o Checkout Bricks.

## Pagamentos de Cartão

> CLIENT_SIDE
>
> h3
>
> Receber pagamentos de cartão

1. Encontre na sua estrutura atual o form que chama o tokenizer:

```html
<form action="https://www.mi-sitio.com/procesar-pago" method="POST">
 <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
   data-public-key="ENV_PUBLIC_KEY"
   data-transaction-amount="100.00">
 </script>
</form>
`````

2. Substitua esse formulário pela tag que conterá o Brick de Card Payment.

```html
<div id="paymentBrick_container"></div>
````

3. Adicione também a importação da SDK JS.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
````

4. Adicione agora o script responsável por carregar o Brick

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

5. No callback de onSubmit do Brick, adicione a mesma URL que utilizava no parâmetro `action` do seu formulário, é para ela que o Brick enviará os dados do formulário de pagamento.

> SERVER_SIDE
>
> h3
>
> Receber Pagamentos de Cartão

O Brick facilita o envio do pagamento ao Mercado Pago pelo backend. Os dados recebidos pelo Brick na função onSubmit são exatamente o necessário para chamar a API de Payments do Mercado Pago. 

1. Substitua em seu backend:

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

Para:

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
````

## Usuários e Cartões

O processo de criação de usuários e cartões não tem nenhuma diferença entre o Tokenizer e o Brick.


### Receber o pagamento de um usuário com cartões salvos

Para receber o pagamento de um usuário com cartões salvos, é necessário passar o usuário e os cartões para o Brick, que realizará o processo de tokenização e enviará no callback de onSubmit as informações para a geração do pagamento.

Substitua em seu código: 
 
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

Para:

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


Com essa configuração, será possível realizar o processamento do pagamento com os cartões salvos.

