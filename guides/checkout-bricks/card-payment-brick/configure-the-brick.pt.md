# Configurar o Brick

Crie a configuração de inicialização do Brick.

[[[
```Javascript
const settings = {
 initialization: {
   amount: 100, // valor total a ser pago
 },
 callbacks: {
   onReady: () => {
     /*
       Callback chamado quando o Brick estiver pronto.
       Aqui você pode ocultar loadings do seu site, por exemplo.
     */
   },
   onSubmit: (formData) => {
     // callback chamado ao clicar no botão de submissão dos dados
     return new Promise((resolve, reject) => {
       fetch('/process_payment', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       })
         .then((response) => {
           // receber o resultado do pagamento
           resolve();
         })
         .catch((error) => {
           // lidar com a resposta de erro ao tentar criar o pagamento
           reject();
         });
     });
   },
   onError: (error) => {
     // callback chamado para todos os casos de erro do Brick
     console.error(error);
   },
 },
};
window.cardPaymentBrickController = await bricksBuilder.create(
 'cardPayment',
 'cardPaymentBrick_container',
 settings,
);
```
```react-jsx
const initialization = {
 amount: 100,
};


const onSubmit = async (formData) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch('/process_payment', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       // receber o resultado do pagamento
       resolve();
     })
     .catch((error) => {
       // lidar com a resposta de erro ao tentar criar o pagamento
       reject();
     });
 });
};


const onError = async (error) => {
 // callback chamado para todos os casos de erro do Brick
 console.log(error);
};


const onReady = async () => {
 /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
};
```
]]]

> WARNING
> 
> Atenção
>
> Caso se faça necessário desmontar e remontar algum Brick, é recomendado destruir a instância atual e gerar uma nova. Para isso, utilize o método *unmount* disponível no *controller* do Brick, sendo neste caso: `window.cardPaymentBrickController.unmount()`.