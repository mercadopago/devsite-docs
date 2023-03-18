# Cambiar estilo de color

Checkout Pro te permite personalizar el estilo de color de los elementos de su interfaz, personalizando la forma en que se mostrará al usuario.

Entre las personalizaciones de color, es posible personalizar el color del encabezado y los elementos de pago, como botones, campos de datos, bordes, elementos de transición y texto.

> NOTE
>
> Importante
>
> La personalización de colores y elementos es válida únicamente para el esquema de apertura modal. Además, los atributos de color deben estar obligatoriamente **en formato hexadecimal**, por ejemplo, #ff0000.

Para habilitar la edición de estilo de color en la caja y sus elementos, agregue el objeto `tema` y los atributos `elementsColor` e `headerColor` con el color que desea aplicar a las opciones de inicio, como se muestra a continuación.

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