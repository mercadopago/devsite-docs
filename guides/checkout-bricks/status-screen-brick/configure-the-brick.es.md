# Configurar el Brick

Creae la configuración de inicio de Brick

[[[
```Javascript
const settings = {
 initialization: {
   paymentId: '<PAYMENT_ID>', // id de pago para mostrar
 },
 callbacks: {
   onReady: () => {
     /*
       Callback llamado cuando Brick está listo.
       Aquí puede ocultar cargamentos de su sitio, por ejemplo.
     */
   },
   onError: (error) => {
     // callback llamado solicitada para todos los casos de error de Brick
     console.error(error);
   },
 },
};
window.statusScreenBrickController = await bricksBuilder.create(
 'statusScreen',
 'statusScreenBrick_container',
 settings,
);
```
```react-jsx
const initialization = {
 paymentId: '<PAYMENT_ID>', // id de pago para mostrar
};
const onError = async (error) => {
 // callback llamado solicitada para todos los casos de error de Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback llamado cuando Brick está listo.
   Aquí puede ocultar cargamentos de su sitio, por ejemplo.
 */
};
```
]]]

> WARNING
> 
> Atención
>
> Si es necesario desmontar y volver a montar un Brick, se recomienda destruir la instancia actual y generar una nueva. Para hacerlo, usa el método *unmount* disponible en el *controller* de Brick, en este caso: `window.statusScreenBrickController.unmount()`.

El `paymentId` que se debe enviar a Brick para su inicialización es el ID que devuelve la [API de Pagos](/developers/pt/reference/payments/_payments/post) al generar un pago con Mercado Pago.