# Renderização padrão

> WARNING
>
> Importante
>
> Para realizar a renderização do Status Screen Brick, primeiro execute os [passos de inicialização](/developers/pt/docs/checkout-bricks/common-initialization) compartilhados entre todos os Brick. 

## Configurar o Brick

Crie a configuração de inicialização do Brick.

[[[
```Javascript
const renderStatusScreenBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     paymentId: '<PAYMENT_ID>', // id do pagamento a ser mostrado
   },
   callbacks: {
     onReady: () => {
       /*
         Callback chamado quando o Brick estiver pronto.
         Aqui você pode ocultar loadings do seu site, por exemplo.
       */
     },
     onError: (error) => {
       // callback chamado para todos os casos de erro do Brick
       console.error(error);
     },
   },
  };
  window.statusScreenBrickController = await bricksBuilder.create(
   'statusScreen',
   'statusScreenBrick_container',
   settings,
  );  
};
renderStatusScreenBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 paymentId: '<PAYMENT_ID>', // id do pagamento a ser mostrado
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
> Sempre que o usuário sair da tela onde algum Brick é exibido, é necessário destruir a instância atual com o comando `window.statusScreenBrickController.unmount()`. Ao entrar novamente, uma nova instância deve ser gerada.

O `paymentId` que deve ser enviado ao Brick para a sua inicialização é o ID retornado pela [API de Pagamentos](/developers/pt/reference/payments/_payments/post) ao se gerar um pagamento com Mercado Pago.

## Renderizar o Brick

Uma vez criadas as configurações, insira o código abaixo para renderizar o Brick. 

> NOTE
> 
> Importante
>
> O id `statusScreenBrick_container` da _div html_  abaixo, deve corresponder ao valor enviado dentro do método create() da etapa anterior.

[[[
```html
<div id="statusScreenBrick_container"></div>
```
```react-jsx
import { StatusScreen } from '@mercadopago/sdk-react';


<StatusScreen
   initialization={initialization}
   onReady={onReady}
   onError={onError}
/>
```
]]]

O resultado de renderizar o Brick deve ser como na imagem abaixo.

<center>

![status-screen-Brick](checkout-bricks/status-screen-brick-pt.jpg)

</center>