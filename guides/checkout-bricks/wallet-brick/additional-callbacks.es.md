# Callbacks adicionales

Al inicializar el Brick, es posible configurar _callbacks_ adicionales que proporcionan al integrador más información durante la ejecución del Brick. A continuación, se muestran los _callbacks_ adicionales disponibles para la integración.

- **onError**: _callback_ que se activa cada vez que ocurre un error en el Brick. El parámetro de la función contiene información detallada sobre lo que sucedió.
- **onReady**: _callback_ que se activa tan pronto como el Brick está listo para recibir interacciones del usuario. Este _callback_ no tiene parámetros en este Brick.
- **onSubmit**: _callback_ que se activa cuando el usuario hace clic en el botón. Este _callback_ no tiene parámetros en este Brick.

[[[
```Javascript
const settings = {
   ...,
   callbacks: {
       onError: (error) => {
           // activado cuando ocurre un error
           console.log(error);
       },
       onReady: () => {
           // activado cuando el Brick está listo
       },
       onSubmit: () => {
           // activado cuando se hace clic en el botón
       },
   }
};
```
```react-jsx
<Wallet
    ...,
  onError={(error) => {
        // activado cuando ocurre un error
        console.log(error)
    }}
  onReady={() => {
        // activado cuando el Brick está listo
    }}
    onSubmit={() => {
        // activado cuando se hace clic en el botón
    }}
/>
```
]]]