# Como migrar do CardForm

Caso você tenha uma integração usando CardForm, siga as instruções abaixo para migrar para o Checkout Bricks. O Brick de Payment permite que você, além do uso de cartão de crédito e débito, utilize cartões salvos e outros meios de pagamento, de maneira simples, com o frontend pronto.

> CLIENT_SIDE
>
> h2
>
> Receber pagamentos de cartão

1. Encontre na sua estrutura, o formulário que chama o CardForm. Deve ter essa aparência:

```html
<style>
   #form-checkout {
     display: flex;
     flex-direction: column;
     max-width: 600px;
   }
 
   .container {
     height: 18px;
     display: inline-block;
     border: 1px solid rgb(118, 118, 118);
     border-radius: 2px;
     padding: 1px 2px;
   }
 </style>
 <form id="form-checkout">
   <div id="form-checkout__cardNumber" class="container"></div>
   <div id="form-checkout__expirationDate" class="container"></div>
   <div id="form-checkout__securityCode" class="container"></div>
   <input type="text" id="form-checkout__cardholderName" />
   <select id="form-checkout__issuer"></select>
   <select id="form-checkout__installments"></select>
   <select id="form-checkout__identificationType"></select>
   <input type="text" id="form-checkout__identificationNumber" />
   <input type="email" id="form-checkout__cardholderEmail" />
 
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" class="progress-bar">Carregando...</progress>
 </form>
 ````

E substitua pela tag que conterá o Brick:

```html
<div id="paymentBrick_container"></div>
`````

2. No JavaScript, encontre a função que inicializa o Card Form:

```javascript
 
   const cardForm = mp.cardForm({
       amount: "100.5",
       iframe: true,
       form: {
         id: "form-checkout",
         cardNumber: {
           id: "form-checkout__cardNumber",
           placeholder: "Número do cartão",
         },
         expirationDate: {
           id: "form-checkout__expirationDate",
           placeholder: "MM/YY",
         },
         securityCode: {
           id: "form-checkout__securityCode",
           placeholder: "Código de segurança",
         },
         cardholderName: {
           id: "form-checkout__cardholderName",
           placeholder: "Titular do cartão",
         },
         issuer: {
           id: "form-checkout__issuer",
           placeholder: "Banco emissor",
         },
         installments: {
           id: "form-checkout__installments",
           placeholder: "Parcelas",
         },       
         identificationType: {
           id: "form-checkout__identificationType",
           placeholder: "Tipo de documento",
         },
         identificationNumber: {
           id: "form-checkout__identificationNumber",
           placeholder: "Número do documento",
         },
         cardholderEmail: {
           id: "form-checkout__cardholderEmail",
           placeholder: "E-mail",
         },
       },
       callbacks: {
         onFormMounted: error => {
           if (error) return console.warn("Form Mounted handling error: ", error);
           console.log("Form mounted");
         },
         onSubmit: event => {
           event.preventDefault();
            const {
             paymentMethodId: payment_method_id,
             issuerId: issuer_id,
             cardholderEmail: email,
             amount,
             token,
             installments,
             identificationNumber,
             identificationType,
           } = cardForm.getCardFormData();
            fetch("/process_payment", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               token,
               issuer_id,
               payment_method_id,
               transaction_amount: Number(amount),
               installments: Number(installments),
               description: "Descrição do produto",
               payer: {
                 email,
                 identification: {
                   type: identificationType,
                   number: identificationNumber,
                 },
               },
             }),
           });
         },
         onFetching: (resource) => {
           console.log("Fetching resource: ", resource);
            // Animate progress bar
           const progressBar = document.querySelector(".progress-bar");
           progressBar.removeAttribute("value");
            return () => {
             progressBar.setAttribute("value", "0");
           };
         }
       },
     });
````

Substitua pela função que inicializa o Brick:

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
`````

> No server-side não é preciso de nenhuma alteração.