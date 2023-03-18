# Alterar estilo de cores

O Checkout Pro permite personalizar o estilo de cores dos elementos de sua interface, customizando a forma como será exibido para o usuário.

Dentre as personalizações de cores é possível customizar a cor do cabeçalho e dos elementos do checkout como botões, campos de dados, bordas, elementos de transição e texto.

> WARNING
>
> Importante
>
> A customização de cores e elementos é válida somente para o esquema de abertura modal. Além disso, os atributos de cores devem estar **obrigatoriamente em formato hexadecimal**, por exemplo, #ff0000.

Para habilitar a edição do estilo de cores no checkout e em seus elementos, adicione o objeto `theme` e os atributos `elementsColor` e `headerColor` com a cor que deseja aplicar nas opções de inicialização, conforme exemplo abaixo.

[[[
```Javascript
const renderComponent = async (bricksBuilder) => {
 const settings = {
   initialization: {
     preferenceId: '<PREFERENCE_ID>'
   },
   customization: {
     checkout: {
       theme: {
         elementsColor: '#4287F5',
         headerColor: '#4287F5'
       },
     },
   };
   const brickController = await.create(
     'wallet',
     'wallet_container',
     settings
   );
 };


renderComponent(bricksBuilder);
```
```react-jsx
const customization = {
 checkout: {
   theme: {
     elementsColor: '#4287F5',
     headerColor: '#4287F5'
   },
 },
};


<Wallet
  initialization={{ preferenceId: '<PREFERENCE_ID>'}}
  customization={customization}
/>
```
]]]