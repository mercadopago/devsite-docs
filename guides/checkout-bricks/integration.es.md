## Crear container

Deberás crear un container para definir dónde se colocará el brick en la pantalla. La creación del container se realiza insertando un elemento (por ejemplo, un div) en el código HTML de la página en la que se renderizará el brick (ver el código a continuación).


> NOTE
>
> Atención
>
> El valor que se muestra en la propiedad `id` a continuación es solo un ejemplo y puede ser alterado, pero siempre debe coincidir con el `id` indicado en la renderización.

[[[
```html
  <div id="cardPaymentBrick_container"></div>
```
]]]


## Instanciar brick

Con el container creado, el siguiente paso es instanciar el brick builder, que permitirá generar el brick. Para crear la instancia del brick, inserta el código a continuación en la etiqueta de secuencia de comandos del proyecto.

[[[
```javascript
const bricks = mp.bricks();
```
]]]

> WARNING
>
> Atención
>
> Durante la instanciación del brick, es posible que aparezcan diferentes errores. Para más detalles sobre cada uno de ellos, consulta la sección Posibles errores.


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
