## Definir tema

De forma predeterminada, Card Payment Brick se instancia/renderiza con el tema predeterminado. Sin embargo, es posible seleccionar otro tema configurando el parámetro "theme" al instanciar/renderizar el brick.

[[[
```javascript
const bricks = mp.bricks({theme: 'dark'});
```
]]]

Si estableces el tema en la creación de **instancias de la classe bricks**, el cambio de tema se aplicará a todos los bricks que se puedan instanciar. Por otro lado, si el tema está configurado en el **renderización del brick**, los cambios en el tema solo se reflejarán en el brick que se está creando así como el Javascript que se muestra a continuación.

[[[
```javascript
 
const settings = {
   initialization: {
       amount,
   },
   callbacks: {
       onSubmit: (data) => {
           // callback llamado cuando el usuario haga clic en el botón enviar los datos
       },
       onReady: (error) => {
           // callback llamado cuando Brick esté listo
       },
       onError: (error) => {
           // callback llamado para todos los casos de error de Brick
       },
   },
   style: {
       theme: 'dark' | 'default' | 'bootstrap' | 'flat'
   }
}

const brick = await bricks.create('cardPayment', settings);
const cardPaymentBrick = await brick.render('cardPaymentBrick_container');
```
]]]

