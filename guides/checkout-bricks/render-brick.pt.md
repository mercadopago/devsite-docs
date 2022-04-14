## Renderizar brick

Uma vez instanciado, o brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final do brick seja gerada.

Para renderizar o brick, insira o código abaixo no HTML do projeto e preencha os atributos conforme os comentários destacados neste mesmo código.

> WARNING
> 
> Importante
>
> Ao finalizar a renderização do brick, é necessário enviar o pagamento ao Mercado Pago para garantir que seu backend possa receber a informação do Card Payment Form. Para isso, veja a seção [Envie o pagamento ao Mercado Pago](/developers/pt/docs/checkout-api/payment-methods/receiving-payment-by-card#bookmark_envie_o_pagamento_ao_mercado_pago) da documentação Checkout Transparente para instruções.


[[[
```javascript
const settings = {
  initialization: {
    amount: number, //valor do processamento a ser realizado
  },
  callbacks: {
    onReady: () => {
      // callback chamado quando o Brick estiver pronto
    },
    onSubmit: (data) => {
      // callback chamado o usuário clicar no botão de submissão dos dados
    },
    onError: (error: string) => { 
      // callback chamado para todos os casos de erro do Brick
    },
  },
};

const brick = await bricks.create('cardPayment', settings);
const cardPaymentBrick = await brick.render('cardPaymentBrick_container');
```
]]]

