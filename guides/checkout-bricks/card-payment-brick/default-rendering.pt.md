# Renderização padrão

Antes de realizar a renderização do Card Payment Brick, primeiro execute os [passos de inicialização](/developers/pt/docs/checkout-bricks/common-initialization) compartilhados entre todos os Bricks. A partir disso, veja abaixo as informações necessárias para você configurar e renderizar o Card Payment Brick.

> NOTE
>
> Nota
>
> Para consultar tipagens e especificações dos parâmetros e respostas de funções do Brick, consulte a [documentação técnica](https://github.com/mercadopago/sdk-js/blob/main/API/bricks/card-payment.md).

## Configurar o Brick

Crie a configuração de inicialização do Brick.

[[[
```Javascript
const renderCardPaymentBrick = async (bricksBuilder) => {
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
  window.cardPaymentBrickController = await bricksBuilder.create(
   'cardPayment',
   'cardPaymentBrick_container',
   settings,
  );  
};
renderCardPaymentBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 amount: 100,
};

const onSubmit = async (formData) => {
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

----[mlc]----
[[[
```Javascript
const renderCardPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // Valor total a ser pago.  Deve ser um número inteiro.
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
  window.cardPaymentBrickController = await bricksBuilder.create(
   'cardPayment',
   'cardPaymentBrick_container',
   settings,
  );  
};
renderCardPaymentBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 amount: 100, // Valor total a ser pago.  Deve ser um número inteiro.
};

const onSubmit = async (formData) => {
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
> Sempre que o usuário sair da tela onde algum Brick é exibido, é necessário destruir a instância atual com o comando `window.cardPaymentBrickController.unmount()`. Ao entrar novamente, uma nova instância deve ser gerada.

## Renderizar o Brick

Uma vez criadas as configurações, insira o código abaixo para renderizar o Brick. 

> WARNING
>
> Importante
>
> O id `cardPaymentBrick_container` da _div html_ abaixo, deve corresponder ao valor enviado dentro do método create() da etapa anterior.

[[[
```html
<div id="cardPaymentBrick_container"></div>
```
```react-jsx
import { CardPayment } from '@mercadopago/sdk-react';


<CardPayment
   initialization={initialization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]

O resultado de renderizar o Brick deve ser como na imagem abaixo.

![cardform](checkout-bricks/card-form-pt.png)