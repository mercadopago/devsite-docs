## Renderizar brick

Una vez instanciado, el brick puede ser renderizado y tener todas sus configuraciones compiladas para que la estructura final del brick sea generada.

Para renderizar el brick, inserta el siguiente código en el HTML del proyecto y completa los atributos de acuerdo con los comentarios destacados en este mismo código.

[[[
```javascript
const settings = {
  initialization: {
    amount: number, //valor del procesamiento a realizar
  },
  callbacks: {
    onReady: () => {
      // callback llamado cuando Brick esté listo
    },
    onSubmit: (data) => {
      // callback llamado cuando el usuario haga clic en el botón enviar
      // los datos
    },
    onError: (error: string) => { 
      // callback llamado para todos los casos de error de Brick (WIP)
    },
  },
};

const cardPaymentBrick = bricks
  .create('cardPayment', settings)
  .render('cardPaymentBrick_container');
```
]]]
