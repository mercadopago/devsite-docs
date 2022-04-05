## Criar container

Você vai precisar criar um container para definir o local que o brick será inserido na tela. A criação do container é feita inserindo um elemento (por exemplo, uma div) no código HTML da página no qual o brick será renderizado (veja código abaixo). 


> NOTE
>
> Atenção
>
> O valor exibido na propriedade `id` a seguir é apenas um exemplo, e pode ser alterado, mas deve sempre corresponder ao `id` indicado na renderização.

[[[
```html
  <div id="cardPaymentBrick_container"></div>
```
]]]


## Instanciar brick

Com o container criado, o passo seguinte é instanciar o brick builder, que permitirá gerar o brick. Para instanciar o brick, insira o código abaixo na tag script do projeto.


[[[
```javascript
const bricks = mp.bricks();
```
]]]


> WARNING
>
> Atenção
>
> Durante a instanciação do brick, é possível que apareçam diferentes erros. Para detalhamento de cada um deles, veja a seção Possíveis erros.


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