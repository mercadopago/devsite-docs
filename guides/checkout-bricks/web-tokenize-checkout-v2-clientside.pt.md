# Migrar do Tokenizer V2

Se sua integração estiver usando a V1 do Tokenizer, siga os passos abaixo para migrar para o Checkout Bricks.

> CLIENT_SIDE
>
> h2
>
> Receber pagamentos de cartão

1. Encontre na sua estrutura atual o form que chama o tokenizer:

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

2. Substitua esse formulário pela tag que conterá o Bricks de Card Payment.

```HTML
<div id="paymentBrick_container"></div>
````

3. Adicione o script responsável por carregar o Bricks.

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
4. No callback de `onSubmit` do Brick, adicione a mesma URL que utilizava no parâmetro `action` do seu formulário, é para ela que o Brick enviará os dados do formulário de pagamento.


## Usuários e cartões 

### Receber o pagamento de um usuário com cartões salvos

Para receber o pagamento de um usuário com cartões salvos, é necessário passar o usuário e os cartões para o Bricks, que realizará o processo de tokenização e enviará no callback de `onSubmit` as informações para a geração do pagamento.

1. Substitua em seu código: 

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

Com essa configuração, será possível realizar o processamento do pagamento com os cartões salvos.

> PREV_STEP_CARD_PT
>
> Como migrar para o Checkout Bricks
>
> Conheça como migrar sua integração de outro produto para o Checkout Bricks.
>
> [Como migrar para o Checkout Bricks](/developers/pt/docs/checkout-bricks/how-tos/how-to-migrate)

> NEXT_STEP_CARD_PT
>
> Server-side
>
> Configure como receber pagamentos com cartão no server-side de sua integraçao.
>
> [Server-side](/developers/pt/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v2/server-side)
