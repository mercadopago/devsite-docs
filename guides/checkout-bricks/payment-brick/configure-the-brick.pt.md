# Configurar o Brick

Crie a configuração de inicialização do Brick.

----[mlb]----

[[[
```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
   /*
     "amount" é o valor total a ser pago por todos os meios de pagamento
     com exceção da Conta Mercado Pago e Parcelamento sem cartão de crédito, que tem seu valor de processamento determinado no backend através do "preferenceId"
   */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     ticket: "all",
     bankTransfer: "all",
     creditCard: "all",
     debitCard: "all",
     mercadoPago: "all",
   },
 },
 callbacks: {
   onReady: () => {
     /*
     Callback chamado quando o Brick estiver pronto.
     Aqui você pode ocultar loadings do seu site, por exemplo.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback chamado ao clicar no botão de submissão dos dados
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
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
window.paymentBrickController = await bricksBuilder.create(
 "payment",
 "paymentBrick_container",
 settings
);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   ticket: "all",
   bankTransfer: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
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

------------
----[mlm]----

[[[
```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
   /*
     "amount" é o valor total a ser pago por todos os meios de pagamento
     com exceção da Conta Mercado Pago e Parcelamento sem cartão de crédito, que tem seu valor de processamento determinado no backend através do "preferenceId"
   */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     atm: "all",
     ticket: "all",
     creditCard: "all",
     debitCard: "all",
     mercadoPago: "all",
   },
 },
 callbacks: {
   onReady: () => {
     /*
     Callback chamado quando o Brick estiver pronto.
     Aqui você pode ocultar loadings do seu site, por exemplo.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback chamado ao clicar no botão de submissão dos dados
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
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
window.paymentBrickController = await bricksBuilder.create(
 "payment",
 "paymentBrick_container",
 settings
);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   atm: "all",
   ticket: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
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

------------
----[mpe]----

[[[
```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
   /*
     "amount" é o valor total a ser pago por todos os meios de pagamento
     com exceção da Conta Mercado Pago, que tem seu valor de processamento determinado no backend através do "preferenceId"
   */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     creditCard: "all",
     debitCard: "all",
     mercadoPago: ["wallet_purchase"],
     atm: "all",
   },
 },
 callbacks: {
   onReady: () => {
    /*
     Callback chamado quando o Brick estiver pronto.
     Aqui você pode ocultar loadings do seu site, por exemplo.
    */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback chamado ao clicar no botão de submissão dos dados
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
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
window.paymentBrickController = await bricksBuilder.create(
 "payment",
 "paymentBrick_container",
 settings
);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   creditCard: "all",
   debitCard: "all",
   mercadoPago: ["wallet_purchase"],
   atm: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
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
 console.error(error);
};
const onReady = async () => {
 /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
};
```
]]]

------------
----[mla, mlc, mco, mlu]----

[[[
```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
   /*
     "amount" é o valor total a ser pago por todos os meios de pagamento
     com exceção da Conta Mercado Pago e Parcelamento sem cartão de crédito, que tem seu valor de processamento determinado no backend através do "preferenceId"
   */
   amount: 100,
   preferenceId: "<PREFERENCE_ID>",
 },
 customization: {
   paymentMethods: {
     ticket: "all",
     creditCard: "all",
     debitCard: "all",
     mercadoPago: "all",
   },
 },
 callbacks: {
   onReady: () => {
     /*
     Callback chamado quando o Brick estiver pronto.
     Aqui você pode ocultar loadings do seu site, por exemplo.
     */
   },
   onSubmit: ({ selectedPaymentMethod, formData }) => {
     // callback chamado ao clicar no botão de submissão dos dados
     return new Promise((resolve, reject) => {
       fetch("/process_payment", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
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
window.paymentBrickController = await bricksBuilder.create(
 "payment",
 "paymentBrick_container",
 settings
);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   ticket: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
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

------------

> WARNING
> 
> Atenção
>
> Caso se faça necessário desmontar e remontar algum Brick, é recomendado destruir a instância atual e gerar uma nova. Para isso, utilize o método *unmount* disponível no *controller* do Brick, sendo neste caso: `window.paymentBrickController.unmount()`.

Para utilizar o método de pagamento (`paymentMethods`) do tipo "mercadoPago" é preciso enviar uma preferência durante a inicialização do Brick, substituindo o valor `<PREFERENCE_ID>` pelo ID da preferência criada. As instruções para criação da preferência estão na seção [Criar Preferência](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering/create-preference).