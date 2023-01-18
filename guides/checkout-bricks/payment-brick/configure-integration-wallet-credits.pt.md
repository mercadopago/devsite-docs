# Configure a integração com Conta Mercado Pago e Parcelamento sem cartão

Para configurar a integração do Payment Brick para receber pagamentos com a **Conta Mercado Pago e Parcelamento sem cartão** você precisa seguir os passos abaixo. 

1. [Renderizar Brick](#bookmark_renderizar_brick)
2. [Gerenciar opções de pagamento](#bookmark_gerenciar_opções_de_pagamento)

> WARNING
>
> Importante
>
> Antes de realizar a configuração abaixo, é necessário ter configurado os passos listados na seção de [Configure a integração.](/developers/pt/docs/checkout-bricks/payment-brick/configure-integration)<br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de código](/developers/pt/docs/checkout-bricks/payment-brick/code-example/wallet-credits) completo da configuração do Payment Brick com **Conta Mercado Pago e Parcelamento sem cartão** que você pode usar como modelo.

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
 customization: {
   paymentMethods: {
     mercadoPago: 'all',
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

----[mlb]---- 
![payment-Brick-wallet-credits-mlb](checkout-bricks/payment-brick-wallet-credits-mlb-pt.jpg)

------------
----[mla]---- 
![payment-Brick-wallet-credits-mla](checkout-bricks/payment-brick-wallet-credits-mla-pt.jpg)

------------
----[mlm]---- 
![payment-Brick-wallet-credits-mlm](checkout-bricks/payment-brick-wallet-credits-mlm-pt.jpg)

------------

> CLIENT_SIDE
>
> h2
>
> Gerenciar opções de pagamento

O trecho de código responsável por incluir pagamentos com Conta Mercado Pago e Parcelamento sem cartão de crédito como meio de pagamento é o seguinte:

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: 'all',
   }
 }
}
```

A propriedade `mercadoPago` aceita 2 tipos de variável, `string` e `string[]`. No exemplo acima, serão aceitos pagamentos com **Conta Mercado Pago e Parcelamento sem cartão**.

Caso queira selecionar apenas uma das duas opções, ao invés da string `all`, você pode passar um array apenas com o meio desejado (`wallet_purchase` ou `onboarding_credits`). Como no exemplo abaixo, onde apenas serão aceitos pagamentos com Conta Mercado Pago.

```Javascript
settings = {
 ...,
 customization: {
   ...,
   paymentMethods: {
     ...,
     mercadoPago: ['wallet_purchase'], // ['onboarding_credits']
   }
 }
}
```