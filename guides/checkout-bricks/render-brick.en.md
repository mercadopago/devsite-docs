## Render brick

Once instantiated, the brick can be rendered and have all its configurations compiled so that the final structure of the brick is generated.

To render the brick, insert the following code in the HTML of the project and fill in the attributes according to the comments highlighted in this same code.


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