# Configurar o Brick

Crie a configuração de inicialização do Brick.

[[[
```Javascript
onst settings = {
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
> Caso se faça necessário desmontar e remontar algum Brick, é recomendado destruir a instância atual e gerar uma nova. Para isso, utilize o método *unmount* disponível no *controller* do Brick, sendo neste caso: `window.statusScreenBrickController.unmount()`.

O `paymentId` que deve ser enviado ao Brick para a sua inicialização é o ID retornado pela [API de Pagamentos](/developers/pt/reference/payments/_payments/post) ao se gerar um pagamento com Mercado Pago.