## Renderizar brick

Uma vez instanciado, o brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final do brick seja gerada.

Para renderizar o brick, insira o código abaixo no HTML do projeto e preencha os atributos conforme os comentários destacados neste mesmo código.


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
      // callback chamado o usuário clicar no botão de submissão
      // dos dados
    },
    onError: (error: string) => { 
      // callback chamado para todos os casos de erro do Brick (WIP)
    },
  },
};

const cardPaymentBrick = bricks
  .create('cardPayment', settings)
  .render('cardPaymentBrick_container');
```
]]]