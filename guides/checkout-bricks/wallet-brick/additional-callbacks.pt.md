# Callbacks adicionais

Ao inicializar o Brick é possível configurar _callbacks_ adicionais, que fornecem ao integrador mais informação durante a execução do Brick. Veja abaixo quais são os _callbacks_ adicionais diposíveis para integrasão.

- **onError**: _callback_ acionado sempre que um erro acontece no Brick. O parâmetro da função contém informações detalhadas sobre o que aconteceu.
- **onReady**: _callback_ acionado assim que o Brick fica pronto para receber interações do usuário. Este _callback_ não possui parâmetros neste Brick.
- **onSubmit**: _callback_ acionado quando o usuário clica no botão. Este _callback_ não possui parâmetros neste Brick.

[[[
```Javascript
const settings = {
   ...,
   callbacks: {
       onError: (error) => {
           // acionado quando ocorre um erro
           console.log(error);
       },
       onReady: () => {
           // acionado quando o Brick está pronto
       },
       onSubmit: () => {
           // acionado quando o botão é clicado
       },
   }
};
```
```react-jsx
<Wallet
    ...,
  onError={(error) => {
        // acionado quando ocorre um erro
        console.log(error)
    }}
  onReady={() => {
        // acionado quando o Brick está pronto
    }}
    onSubmit={() => {
        // acionado quando o botão é clicado
    }}
/>
```
]]]