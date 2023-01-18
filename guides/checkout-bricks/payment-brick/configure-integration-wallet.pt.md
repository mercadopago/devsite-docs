# Configure a integração com Conta Mercado Pago

Para configurar a integração do Payment Brick para receber pagamentos com a Conta Mercado Pago você precisa seguir o passo abaixo. 

1. [Renderizar Brick](#bookmark_renderizar_brick)

> WARNING
>
> Importante
>
> Antes de realizar a configuração abaixo, é necessário ter configurado os passos listados na seção de [Configure a integração.](/developers/pt/docs/checkout-bricks/payment-brick/configure-integration)<br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de código](/developers/pt/docs/checkout-bricks/payment-brick/code-example/wallet) completo da configuração do Payment Brick com Conta Mercado Pago que você pode usar como modelo.

> CLIENT_SIDE
>
> h2
>
> Renderizar Brick

Uma vez instanciado, o Brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final do Brick seja gerada.

Para renderizar o Brick, insira o código abaixo após o passo anterior e preencha os atributos conforme os comentários destacados neste mesmo código.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
 initialization: {
   amount: 100, // valor total a ser pago
   preferenceId: '<PREFERENCE_ID>', // preferenceId gerado no backend
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
       // nesse caso, o usuário foi redirecionado para
       // a página do Mercado Pago para fazer o pagamento
   },
   onError: (error) => {
     // callback chamado para todos os casos de erro do Brick
     console.error(error);
   },
 },
};
 
 window.paymentBrickController = await bricksBuilder.create(
   'payment',
   'paymentBrick_container',
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```

O resultado de renderizar o Brick deve ser como na imagem abaixo:

----[mlc]---- 
![payment-Brick-wallet-mlc](checkout-bricks/payment-brick-wallet-mlc-pt.png)

------------
----[mlu]---- 
![payment-Brick-wallet-mlu](checkout-bricks/payment-brick-wallet-mlu-pt.png)

------------
----[mpe, mco]---- 
![payment-Brick-wallet-mco-mpe](checkout-bricks/payment-brick-wallet-mco-mpe-pt.png)

------------